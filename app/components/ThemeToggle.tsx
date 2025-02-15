"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Force light theme on initial load if no theme exists
    if (!theme) {
      setTheme("light");
    }
  }, [setTheme, theme]);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-10 h-10 flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      <span className="text-xl">
        {theme === "dark" ? (
          <span className="text-amber-500">🌞</span>
        ) : (
          <span className="text-slate-600">🌙</span>
        )}
      </span>
    </button>
  );
}