import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((currentDark) => {
      const nextDark = !currentDark;

      localStorage.setItem(
        "theme",
        nextDark ? "dark" : "light"
      );

      return nextDark;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={dark ? "Light mode" : "Dark mode"}
      className="
        inline-flex h-9 w-9
        items-center justify-center
        rounded-lg
        border border-border/60
        bg-background
        text-muted-foreground
        transition-all duration-200
        hover:border-primary/30
        hover:bg-primary/10
        hover:text-primary
      "
    >
      {dark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
