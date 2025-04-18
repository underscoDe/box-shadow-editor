"use client";

import { Button } from "@/components/ui/button";
import { FileCode, Moon, Save, Share2, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 shrink-0">
      <div>
        <h1 className="text-xl font-bold">Shadow Editor</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Save className="h-4 w-4" />
          <span>Save</span>
        </Button>

        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>

        <Button
          variant="default"
          size="sm"
          className="flex items-center gap-1 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
        >
          <FileCode className="h-4 w-4" />
          <span>Export</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="cursor-pointer"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
