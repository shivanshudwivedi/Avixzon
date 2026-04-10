"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  /** When true the icon will be white — for use over dark/transparent navbar. */
  isOverDark?: boolean;
}

export function ThemeToggle({ isOverDark = false }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const iconColor = isOverDark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        isOverDark ? "hover:bg-white/10" : "hover:bg-muted"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-5 w-5">
        {!mounted ? (
          <span className={cn("absolute inset-0 flex items-center justify-center", iconColor)}>
            <Sun className="h-5 w-5 opacity-40" />
          </span>
        ) : (
          <>
            <motion.div
              initial={false}
              animate={{ scale: isDark ? 0 : 1, opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0 }}
              transition={{ duration: 0.2 }}
              className={cn("absolute inset-0 flex items-center justify-center", iconColor)}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ scale: isDark ? 1 : 0, opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90 }}
              transition={{ duration: 0.2 }}
              className={cn("absolute inset-0 flex items-center justify-center", iconColor)}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          </>
        )}
      </div>
    </button>
  );
}
