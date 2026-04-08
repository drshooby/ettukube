"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function UtcClock({ className }: { className?: string }) {
  const [iso, setIso] = useState<string | null>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setIso(d.toISOString());
      setLabel(formatter.format(d));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className={className} dateTime={iso ?? undefined}>
      {label ?? "—:—:—"}
    </time>
  );
}
