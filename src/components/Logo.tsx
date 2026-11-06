import { Link } from "react-router";

// No new imports needed in index.html.
// Archivo is already your --font-sans, and the colors come from your theme tokens.

function Logo() {
  return (
    <div>
      <Link
        to="/"
        aria-label="ValoGlobal home"
        className="flex items-center gap-2.5"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-8 shrink-0"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            className="stroke-on-background"
            strokeWidth="2"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="6"
            ry="14"
            className="stroke-on-background"
            strokeWidth="1.5"
            opacity="0.35"
          />
          <path
            d="M8.5 10L16 24L23.5 10"
            className="stroke-primary"
            strokeWidth="3.5"
            strokeLinecap="square"
          />
        </svg>

        <div className="flex flex-col font-black leading-none">
          <span className="text-2xl tracking-tight text-on-background">
            VALO
          </span>
          <span className="mt-0.5 text-[9px] font-semibold tracking-[0.42em] text-primary">
            GLOBAL
          </span>
        </div>
      </Link>
    </div>
  );
}

export { Logo };
