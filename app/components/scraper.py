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

    # warmup request to establish cookies
    scraper.get("https://www.91mobiles.com")

    response = scraper.get(url)
    response.raise_for_status()

    tree = html.fromstring(response.content)

    container_xpath = "/html/body/main/div[2]/section[2]/section"
    containers = tree.xpath(container_xpath)

    if not containers:
        print("Container not found")
        return

    container = containers[0]

    final_data = {}

    for section_name in TARGET_SECTIONS:

        section = container.xpath(f'.//section[@id="{section_name}"]')

        if not section:
            continue

        section = section[0]

        rows = section.xpath(".//tr")

        last_key = None

        for row in rows:

            cells = row.xpath("./th | ./td")

            if len(cells) < 2:
                continue

            key = clean_text(cells[0].text_content())
            value = clean_text(cells[1].text_content())

            # handle nested rows where key column is empty
            if key == "":
                key = last_key

            if key:
                last_key = key

            if not key or not value:
                continue

            # camera naming requirement
            if section_name == "Rear Camera":
                key = f"rearCamera_{key}"

            if section_name == "Front Camera":
                key = f"frontCamera_{key}"

            # avoid overwriting duplicate attributes
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