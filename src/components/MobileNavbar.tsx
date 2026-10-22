import { NavLink } from "react-router";
import { Logo } from "./Logo";
import {
  LuSun,
  LuMoon,
  LuX,
  LuHouse,
  LuTruck,
  LuFactory,
  LuPackageSearch,
} from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

function MobileNavBar({
  isOpen,
  closeMobileNav,
}: {
  isOpen: boolean;
  closeMobileNav: () => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "darkMode";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-4 ${isActive ? "bg-primary/15" : ""}`;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-500 lg:hidden 
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <Logo />
        <button onClick={closeMobileNav} aria-label="Close menu">
          <LuX size={24} />
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col py-2 [&_svg]:text-primary">
        <NavLink to="/" end onClick={closeMobileNav} className={linkClass}>
          <LuHouse size={24} />
          <span>Home</span>
        </NavLink>

        <NavLink to="service" onClick={closeMobileNav} className={linkClass}>
          <LuTruck size={24} />
          <span>Services</span>
        </NavLink>

        <NavLink to="industries" onClick={closeMobileNav} className={linkClass}>
          <LuFactory size={24} />
          <span>Industries</span>
        </NavLink>

        <NavLink to="tracking" onClick={closeMobileNav} className={linkClass}>
          <LuPackageSearch size={24} />
          <span>Track Shipment</span>
        </NavLink>
      </nav>

      {/* Actions, pinned to the bottom */}
      <div className="mt-auto flex flex-col gap-4 border-t border-border p-4">
        <NavLink
          to="quote"
          onClick={closeMobileNav}
          className="w-full rounded bg-primary py-3 text-center text-sm font-bold text-secondary"
        >
          Get a Quote
        </NavLink>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {theme === "darkMode" ? "Dark Mode" : "Light Mode"}
          </span>

          <button
            // onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle theme"
            className="relative flex items-center cursor-pointer rounded-full border border-border bg-muted p-1"
          >
            <span
              className={`absolute left-1 top-1 size-8 rounded-full bg-primary transition-transform duration-300 ${
                isDark ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <span
              onClick={theme === "lightMode" ? undefined : toggleTheme}
              className={`relative grid size-8 place-items-center ${
                isDark ? "text-muted-foreground" : "text-primary-foreground"
              }`}
            >
              <LuSun size={16} />
            </span>
            <span
              onClick={theme === "darkMode" ? undefined : toggleTheme}
              className={`relative grid size-8 place-items-center ${
                isDark ? "text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              <LuMoon size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { MobileNavBar };
