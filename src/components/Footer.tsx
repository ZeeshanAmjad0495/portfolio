import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </p>
        <p className="font-mono text-xs">
          Designed & deployed by {profile.name.split(" ")[0]}.
        </p>
      </div>
    </footer>
  );
}
