export function Medal({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M24 4L32 0L40 4L32 16L24 4Z" fill="#B45309" />
      <path d="M24 4L32 16L20 8L24 4Z" fill="#92400E" />
      <path d="M40 4L44 8L32 16L40 4Z" fill="#92400E" />
      <circle cx="32" cy="38" r="22" fill="#F59E0B" />
      <circle cx="32" cy="38" r="18" fill="#FBBF24" />
      <circle cx="32" cy="38" r="14" fill="#F59E0B" />
      <path
        d="M32 26L35 33H42L36.5 37.5L38.5 44.5L32 40L25.5 44.5L27.5 37.5L22 33H29L32 26Z"
        fill="#FDE68A"
      />
    </svg>
  );
}
