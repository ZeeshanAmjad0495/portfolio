import type { ComponentType } from "react";

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GitHubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function UpworkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.6 7.3c-1.9 0-3.4 1.2-4 3.2-.9-1.4-1.6-3-2-4.3H9.1v5.3c0 1.3-.6 2.3-1.9 2.3s-2-1-2-2.3l.02-5.3H2.6v5.3c0 1.3.4 2.5 1.2 3.3.8.9 1.9 1.3 3.2 1.3 2.6 0 4-2 4-2 0 0 .6 2 .8 2.6H14l-1-3.9c.3-1.9 1.2-3.3 2.7-3.3 1.2 0 2.2 1 2.2 2.4s-1 2.4-2.2 2.4c-.5 0-.9-.1-.9-.1l.5 2.2c.2 0 .5.1.9.1 2.6 0 4.6-2.1 4.6-4.7 0-2.6-2-4.6-4.5-4.6Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2} className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function SparkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2Zm6.5 11l.9 2.7L22 16.5l-2.6.8-.9 2.7-.9-2.7-2.6-.8 2.6-.8.9-2.7Z" />
    </svg>
  );
}

export function CompassIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" fill="currentColor" fillOpacity="0.18" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function SealIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v10M7 12h10" strokeWidth={1.1} />
    </svg>
  );
}

export function ForgeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M12 3c1.5 2 .5 3.5-.3 4.6-.8 1-.5 2.4.8 3 1.6.7 2.3-.6 2-1.8 1.7 1 2.5 2.7 2.5 4.3a5 5 0 1 1-10 0c0-1.6.7-2.8 1.6-3.7-.2 1 .3 1.9 1.2 1.6C9 16 8 13 12 3Z" />
    </svg>
  );
}

export function WatchtowerIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M8 21V9l4-3 4 3v12" />
      <path d="M6 9h12M10 21v-4a2 2 0 0 1 4 0v4" />
      <path d="M8 6V4M16 6V4" />
    </svg>
  );
}

export function ScrollIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M6 4h11a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7" />
      <path d="M5 4a2 2 0 0 1 2 2v11a3 3 0 0 0 3 3" />
      <path d="M9 9h6M9 13h4" strokeWidth={1.1} />
    </svg>
  );
}

export function AnvilIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M4 9h11c0 2-1.5 3.5-4 4l1 3H7l1-3" />
      <path d="M15 9c2 0 3 1 5 1V8c-1.5 0-2-1-4-1" />
      <path d="M8 19h6" />
    </svg>
  );
}

export function GrimoireIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 0 5 20.5V4.5Z" />
      <path d="M5 17.5A1.5 1.5 0 0 1 6.5 16H19" strokeWidth={1.1} />
      <path d="M12 7v5m-2.5-2.5h5" strokeWidth={1.1} />
    </svg>
  );
}

export function OrbIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <circle cx="12" cy="12" r="6" />
      <ellipse cx="12" cy="12" rx="10" ry="3.6" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M12 3l7 2.5v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5L12 3Z" />
      <path d="m9 12 2 2 4-4" strokeWidth={1.3} />
    </svg>
  );
}

export function BladeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M19 4 9 14l-1.5-1.5L17.5 2.5 19 4Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M9 14 4 19m1.5-3.5L8 18M6.5 14 10 17.5" />
    </svg>
  );
}

export function ToothIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M7 4c2 0 2.5 1 5 1s3-1 5-1c2.2 0 3 2 3 4.5 0 3-1 5-1.8 8.2-.3 1.2-.4 2.8-1.7 2.8-1.6 0-1.3-3-2.5-5-.5-.8-2-.8-2.5 0-1.2 2-.9 5-2.5 5-1.3 0-1.4-1.6-1.7-2.8C7.5 13.5 4 11.5 4 8.5 4 6 4.8 4 7 4Z" />
    </svg>
  );
}

export function GateIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M4 21V8l8-4 8 4v13" />
      <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
      <path d="M4 11h2M18 11h2M4 15h2M18 15h2" strokeWidth={1.1} />
    </svg>
  );
}

export function CoinsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <ellipse cx="9" cy="7" rx="5" ry="2.5" />
      <path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" />
      <path d="M10 14.5V17c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4c0-1.4-2.2-2.5-5-2.5" />
    </svg>
  );
}

export function ScopeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function FlaskIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M10 3h4M10.5 3v6L5.5 18a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <path d="M7.5 14h9" strokeWidth={1.1} />
    </svg>
  );
}

export function RuinsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M4 21V8M8 21V8M4 8c0-2 .8-3 2-3s2 1 2 3" />
      <path d="M14 21V10l-2 1M20 21V6l-3 2v13" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function BoardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <rect x="4" y="5" width="16" height="13" rx="1.5" />
      <path d="M12 3v2M8 9h8M8 12h5" strokeWidth={1.1} />
      <path d="M9 18v3M15 18v3" />
    </svg>
  );
}

export function CrateIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M3 8l9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" strokeWidth={1.3} />
      <path d="M7.5 6.2 16.5 14M16.5 6.2 7.5 14" strokeWidth={0.9} />
    </svg>
  );
}

export function GaugeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
      <circle cx="12" cy="18" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} className={className} aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export const iconMap: Record<string, ComponentType<IconProps>> = {
  forge: ForgeIcon,
  watchtower: WatchtowerIcon,
  tooth: ToothIcon,
  coins: CoinsIcon,
  gate: GateIcon,
  crate: CrateIcon,
  board: BoardIcon,
  scope: ScopeIcon,
  flask: FlaskIcon,
  ruins: RuinsIcon,
  blade: BladeIcon,
  grimoire: GrimoireIcon,
  shield: ShieldIcon,
  gauge: GaugeIcon,
  orb: OrbIcon,
  anvil: AnvilIcon,
  compass: CompassIcon,
  scroll: ScrollIcon,
  seal: SealIcon,
  spark: SparkIcon,
};
