export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-2/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}
