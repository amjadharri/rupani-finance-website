/** Hexagonal outline mark used on the What we finance tiles. */
export function PolicyIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={className}
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    >
      <path d="M16 3.5 27 9.75v12.5L16 28.5 5 22.25V9.75Z" />
      <path d="M16 10.5 21 13.4v5.7L16 22l-5-2.9v-5.7Z" />
    </svg>
  );
}
