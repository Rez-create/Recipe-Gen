
import { useState, useEffect } from "react";

export function useTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("recipe-gen-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    
    // If no saved preference, check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update the document class when theme changes
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("recipe-gen-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("recipe-gen-theme", "light");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return { isDarkTheme, toggleTheme };
}
