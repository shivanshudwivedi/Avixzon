"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-full p-2 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-5 w-5">
        {!mounted ? (
          <span className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <Sun className="h-5 w-5 opacity-40" />
          </span>
        ) : (
          <>
            <motion.div
              initial={false}
              animate={{
                scale: isDark ? 0 : 1,
                opacity: isDark ? 0 : 1,
                rotate: isDark ? -90 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-primary"
            >
              <Sun className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                scale: isDark ? 1 : 0,
                opacity: isDark ? 1 : 0,
                rotate: isDark ? 0 : 90,
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center text-primary"
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          </>
        )}
      </div>
    </button>
  );
}

