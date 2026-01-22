"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder button during SSR/initial render
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shadow-sm hover:shadow-md transition-all bg-background/80 backdrop-blur-sm border-border shrink-0"
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shadow-sm hover:shadow-md transition-all bg-background/80 backdrop-blur-sm border-border shrink-0"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      ) : (
        <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      )}
    </Button>
  );
}
