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


def extract_specs(url):

    scraper = cloudscraper.create_scraper()

    # warmup request (important for some sites)
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

        rows = section[0].xpath(".//tr")

        for row in rows:

            cells = row.xpath("./th | ./td")

            if len(cells) >= 2:

                key = cells[0].text_content().strip()
                value = cells[1].text_content().strip()

                if section_name == "Rear Camera":
                    key = f"rearCamera_{key}"

                if section_name == "Front Camera":
                    key = f"frontCamera_{key}"

                final_data[key] = value

    print(json.dumps(final_data, indent=4, ensure_ascii=False))


if __name__ == "__main__":

    if len(sys.argv) < 2:
        print("Usage: python scraper.py <URL>")
        sys.exit(1)

    url = sys.argv[1]
    extract_specs(url)