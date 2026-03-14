import requests
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

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept-Language": "en-US,en;q=0.9"
    }

    response = requests.get(url, headers=headers, timeout=10)
    response.raise_for_status()

    tree = html.fromstring(response.content)

    container_xpath = "/html/body/main/div[2]/section[2]/section"
    containers = tree.xpath(container_xpath)

    container = containers[0]

    final_data = {}

    for section_name in TARGET_SECTIONS:

        section = container.xpath(f'.//section[@id="{section_name}"]')

        if not section:
            continue

        section = section[0]
        rows = section.xpath(".//tr")

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
    url = sys.argv[1]
    extract_specs(url)