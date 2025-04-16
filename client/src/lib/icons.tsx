interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="currentColor" className="fill-primary" />
      <path d="M10 20L15 15L20 20L25 15L30 20M10 25L15 20L20 25L25 20L30 25" stroke="white" strokeWidth="2" />
    </svg>
  );
}
