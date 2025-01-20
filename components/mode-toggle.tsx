"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <DisplayMode theme={theme as "light" | "dark" ?? "light"} />
    </div>
  );
}

function DisplayMode({ theme }: { theme: "light" | "dark" }) {
  if (theme === "light") {
    return <span className="flex gap-2 items-center">
      <Moon className="h-[1.2rem] w-[1.2rem]" />
      Dark Mode
    </span>
  }
  return <span className="flex gap-2 items-center">
    <Sun className="h-[1.2rem] w-[1.2rem]" />
    Light Mode
  </span>
}