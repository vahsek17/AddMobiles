"use client";

export default function SpecScoreBar({ score }: { score: string }) {
  const pct = parseInt(score.replace("%", ""), 10);

  const color =
    pct < 60 ? "#9ACD32" :
    pct < 70 ? "#00E000" :
    pct < 85 ? "#00C000" :
    "#004E00";

  return (
    <div style={{ height: 6, background: "#eee", borderRadius: 4 }}>
      <div style={{ width: `${pct}%`, background: color, height: "100%" }} />
    </div>
  );
}
