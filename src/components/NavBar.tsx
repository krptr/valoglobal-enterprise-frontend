import { NavLink } from "react-router";
import { Logo } from "./Logo";
import { LuSun, LuMoon, LuMenu } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";
import { useMobileNav } from "../hooks/useMobileNav";
import { MobileNavBar } from "./MobileNavbar";

function NavBar() {
  const { isMobileNavOpen, updateMobileNavState, closeMobileNav } =
    useMobileNav();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "darkMode";

  return (
    <header className="flex justify-between items-center mx-4 lg:mx-16 xl:mx-32 font-sans py-3">
      <Logo />

      {/* Navigation Links */}
      <nav className="hidden lg:flex lg:gap-4 items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "border-b-3 border-primary" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="service"
          className={({ isActive }) =>
            isActive ? "border-b-3 border-primary" : ""
          }
        >
          Services
        </NavLink>

        <NavLink
          to="industries"
          className={({ isActive }) =>
            isActive ? "border-b-3 border-primary" : ""
          }
        >
          Industries
        </NavLink>

        <NavLink
          to="tracking"
          className={({ isActive }) =>
            isActive ? "border-b-3 border-primary" : ""
          }
        >
          Track Shipment
        </NavLink>
      </nav>

      {/* Utitlity Buttons */}
      <div className="hidden lg:flex items-center lg:gap-4">
        <NavLink
          to="quote"
          className={`text-sm py-2 px-2 bg-primary text-secondary font-bold rounded`}
        >
          Get a Quote
        </NavLink>

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

      <button
        onClick={updateMobileNavState}
        aria-label="Open Menu"
        className="lg:hidden"
      >
        <LuMenu size={24} />
      </button>

      <MobileNavBar isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
    </header>
  );
}

export { NavBar };
