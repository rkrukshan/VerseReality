import React, { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return theme === "dark" ? (
    <BiSolidSun
      className="text-2xl cursor-pointer"
      onClick={() => setTheme("light")}
    />
  ) : (
    <BiSolidMoon
      className="text-2xl cursor-pointer"
      onClick={() => setTheme("dark")}
    />
  );
};
