"use client";

import SpecScoreBar from "./specScoreBar";
import { attributeNames } from "./constants";

interface CatalogueItem {
  model: string;
  [key: string]: string;
}

interface OptionType {
  value: string;
  label: string;
}

type SpecRowProps = {
  label: string;
  keys: string[]; // keep string[]
  items: CatalogueItem[];
  selectedModels: (OptionType | null)[];
  expanded: boolean;
  toggle: () => void;
};

export default function SpecRow({
  label,
  keys,
  items,
  selectedModels,
  expanded,
  toggle,
}: SpecRowProps) {
  return (
    <>
      {keys.map((key) => (
        <tr key={key}>
          <td>{attributeNames[key as keyof typeof attributeNames] || key}</td>

          {selectedModels.map((model, i) => {
            const val =
              model &&
              items.find((x) => x.model === model.value)?.[key as keyof CatalogueItem];

            return (
              <td key={i}>
                {val || "-"}
                {val?.includes("Spec Score") && (
                  <SpecScoreBar score={val.match(/\d+%/)?.[0] || "0%"} />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}
