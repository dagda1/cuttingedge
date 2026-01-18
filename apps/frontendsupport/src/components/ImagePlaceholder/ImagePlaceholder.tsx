export function ImagePlaceholder(): JSX.Element {
  return (
    <svg width={150} height={100} viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="150" height="100" fill="#e0e0e0" />
      <path d="M60 35h30v30H60z" stroke="#999" strokeWidth="2" fill="none" />
      <circle cx="68" cy="45" r="4" fill="#999" />
      <path d="M62 60l8-10 6 7 10-12 12 15H62z" fill="#999" />
    </svg>
  );
}
