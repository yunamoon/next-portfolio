"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const [initialTheme, setInitialTheme] = useState("light");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setInitialTheme(theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        setTheme(initialTheme === "light" ? "dark" : "light");
      }}
      className="inline-flex items-center 
      bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0
      dark:bg-gray-50 "
    >
      {initialTheme === "light" ? "Light" : "Dark"}{" "}
    </button>
  );
}
