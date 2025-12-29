"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full p-2 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 0 : 1,
            opacity: theme === "dark" ? 0 : 1,
            rotate: theme === "dark" ? -90 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-primary"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 90,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-primary"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      </div>
    </button>
  );
}

