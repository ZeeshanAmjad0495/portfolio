export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-gold) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-gold) 30%, transparent) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 78%)",
        }}
      />

      <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute right-[-12rem] top-1/4 h-[32rem] w-[32rem] rounded-full bg-emerald/10 blur-[150px]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo/12 blur-[150px]" />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, transparent 55%, color-mix(in oklab, var(--color-bg) 92%, #000) 100%)",
        }}
      />
    </div>
  );
}
