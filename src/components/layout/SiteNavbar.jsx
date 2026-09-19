import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Extension",
    href: "/extension",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-border/50
        bg-background/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">

        {/* Brand */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          {/* Logo */}
          <img
            src="/dcs-logo.svg"
            alt="Department of Computer Studies"
            className="h-11 w-auto"
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">
              Department of Computer Studies
            </p>

            <p className="mt-1 text-[11px] text-muted-foreground">
              Computer Science & Information Technology
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `
                  rounded-lg px-3 py-2
                  text-sm font-medium
                  transition-colors
                  ${isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />

        {/* Mobile Button */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border/50 lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `
                    block rounded-lg px-4 py-3
                    text-sm font-medium
                    transition-colors
                    ${isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />

        </div>
      )}
    </header>
  );
}