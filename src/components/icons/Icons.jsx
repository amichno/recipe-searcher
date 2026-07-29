export function LeafIcon({ className = "w-5 h-5", color = "#2F4B36" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20c8-1 14-7 15-15-8 1-14 7-15 15z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-4 7-8 12-11" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#8A8672" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="#8A8672" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BowlIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 11h18a9 8 0 01-18 0z" stroke="#8A8672" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 11c0-3 1.5-5 4-6" stroke="#8A8672" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PersonIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.2" stroke="#8A8672" strokeWidth="1.6" />
      <path d="M5.5 20c1-3.5 4-5.5 6.5-5.5s5.5 2 6.5 5.5" stroke="#8A8672" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PotIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 11h16v3a5 5 0 01-5 5h-6a5 5 0 01-5-5v-3z" stroke="#8A8672" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M2 11h20" stroke="#8A8672" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 8.5c1-1.2 2-1.2 3 0M9.5 8.5c1-1.2 2-1.2 3 0M17 8.5c1-1.2 2-1.2 3 0" stroke="#8A8672" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="#2F4B36" strokeWidth="1.8" />
      <path d="M20 20l-3.5-3.5" stroke="#2F4B36" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BackIcon({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 5l-7 7 7 7"
        stroke="#2F4B36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UtensilsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M6 3v8M4 3v5a2 2 0 004 0V3M6 11v10" stroke="#C9663F" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M17 3c-2 0-3 2-3 5s1 4 3 4v9" stroke="#C9663F" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" stroke="#C9663F" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchListIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h11M4 12h7" stroke="#C9663F" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="16" r="4" stroke="#C9663F" strokeWidth="1.6" />
      <path d="M19 19l3 3" stroke="#C9663F" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ForkIllustration({ className = "w-20 h-20" }) {
  return (
    <svg className={className} viewBox="0 0 100 140" fill="none">
      <path
        d="M35 5v45M25 5v25a5 5 0 0010 0V5M45 5v25a5 5 0 01-10 0M35 50v85"
        stroke="#D9866B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KnifeIllustration({ className = "w-20 h-20" }) {
  return (
    <svg className={className} viewBox="0 0 100 140" fill="none">
      <path
        d="M55 135V60c15-4 26-16 26-33 0-9-5-16-12-19-3 20-9 35-14 42V135"
        stroke="#4E7C5F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
