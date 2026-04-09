type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "h-11 w-11" }: BrandMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(234,88,12,0.28)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="18" fill="url(#navikara-bg)" />
        <rect x="1" y="1" width="62" height="62" rx="17" stroke="rgba(255,255,255,0.16)" />
        <circle cx="48" cy="16" r="11" fill="url(#navikara-sun)" fillOpacity="0.95" />
        <path
          d="M17 42C22 31.5 31.5 23 44 19"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M38.5 17.5L47 18.5L42.5 25.5"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 45.5C24.5 47 31.5 47 37.5 44"
          stroke="#FCD34D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="20" cy="43" r="4.5" fill="white" />
        <defs>
          <linearGradient id="navikara-bg" x1="7" y1="5.5" x2="56.5" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#163B67" />
            <stop offset="0.58" stopColor="#0F2744" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
          <radialGradient id="navikara-sun" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(48 16) rotate(90) scale(11)">
            <stop stopColor="#FDE68A" />
            <stop offset="1" stopColor="#FB923C" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
