import cloudscraper
from lxml import html
import json
import sys

TARGET_SECTIONS = [
    "Key Specs",
    "General",
    "Performance",
    "Display",
    "Design",
    "Rear Camera",
    "Front Camera",
    "Battery",
    "Storage",
    "Network & Connectivity",
    "Multimedia",
    "Sensors"
]


def clean_text(text):
    if not text:
        return ""

    text = text.replace("Expand", "")
    text = text.replace("\n", " ")
    text = " ".join(text.split())

    return text.strip()


def extract_specs(url):

    scraper = cloudscraper.create_scraper()

    # warmup request
    scraper.get("https://www.91mobiles.com")

    response = scraper.get(url)
    response.raise_for_status()

    tree = html.fromstring(response.content)

    container = tree.xpath("/html/body/main/div[2]/section[2]/section")[0]

    final_data = {}

    current_sim = None
    last_key = None

    for section_name in TARGET_SECTIONS:

        section = container.xpath(f'.//section[@id="{section_name}"]')

        if not section:
            continue

        rows = section[0].xpath(".//tr")

        for row in rows:

            cells = row.xpath("./th | ./td")

            if len(cells) < 2:
                continue

            key = clean_text(cells[0].text_content())
            value = clean_text(cells[1].text_content())

            if key == "":
                key = last_key

            if key:
                last_key = key

            if not key or not value:
                continue

            # detect SIM context
            if key == "SIM 1":
                current_sim = "Sim1"
                final_data["SIM 1"] = value
                continue

            if key == "SIM 2":
                current_sim = "Sim2"
                final_data["SIM 2"] = value
                continue

            # rename band keys inside SIM blocks
            if current_sim and "5G bands" in key:
                key = f"{current_sim}_5G_Band"

            elif current_sim and "4G bands" in key:
                key = f"{current_sim}_4G_Band"

            elif current_sim and "3G bands" in key:
                key = f"{current_sim}_3G_Band"

            elif current_sim and "2G bands" in key:
                key = f"{current_sim}_2G_Band"

            # camera naming rule
            if section_name == "Rear Camera":
                key = f"rearCamera_{key}"

            if section_name == "Front Camera":
                key = f"frontCamera_{key}"

            # avoid overwriting
            if key in final_data:
                final_data[key] += " | " + value
            else:
                final_data[key] = value

    print(json.dumps(final_data, indent=4, ensure_ascii=False))


if __name__ == "__main__":

    if len(sys.argv) < 2:
        print("Usage: python scraper.py <URL>")
        sys.exit(1)

    url = sys.argv[1]

    extract_specs(url)