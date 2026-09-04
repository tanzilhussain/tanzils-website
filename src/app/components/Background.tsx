/**
 * Fixed ambient layer: soft violet aurora blobs plus a fine grain overlay.
 * Sits behind every page so the canvas reads as textured paper (light) or
 * lit depth (dark) instead of a flat gradient wash.
 */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-canvas" />

      {/* Aurora */}
      <div
        className="absolute -left-[15%] -top-[20%] h-[55vw] w-[55vw] rounded-full
          bg-accent/25 blur-[120px] animate-drift"
        style={{ opacity: "var(--glow)" }}
      />
      <div
        className="absolute -right-[18%] top-[8%] h-[48vw] w-[48vw] rounded-full
          bg-accent-3/20 blur-[130px] animate-drift-slow"
        style={{ opacity: "var(--glow)" }}
      />
      <div
        className="absolute bottom-[-25%] left-[20%] h-[52vw] w-[52vw] rounded-full
          bg-accent-2/20 blur-[140px] animate-drift"
        style={{ opacity: "var(--glow)", animationDelay: "-8s" }}
      />

      {/* Grain — keeps the large flat areas from banding */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
