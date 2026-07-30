export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden -z-10">
      <svg
        className="absolute -left-6 top-72 w-24 h-64 opacity-70"
        viewBox="0 0 100 260"
        fill="none"
      >
        <path
          d="M70 0C20 40 90 90 30 140C-10 175 60 210 20 260"
          stroke="#AEB9E8"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute -right-10 top-56 w-24 h-64 opacity-70"
        viewBox="0 0 100 260"
        fill="none"
      >
        <path
          d="M30 0C80 40 10 90 70 140C110 175 40 210 80 260"
          stroke="#AEB9E8"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
