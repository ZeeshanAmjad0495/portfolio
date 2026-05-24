import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Tailwind CSS.
        </p>
        <p className="font-accent text-xs tracking-wide text-bronze">
          Drawn by hand, charted with care.
        </p>
      </div>
    </footer>
  );
}
