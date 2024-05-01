"use client";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="inline-flex items-center 
      bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0
      dark:bg-gray-50 "
    >
      {theme === "light" ? "Light" : "Dark"}
    </button>
  );
}
