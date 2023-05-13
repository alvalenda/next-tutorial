"use client";
// import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

interface PageProps {}

const ThemeSwitch: FC<PageProps> = () => {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(() => true);
      const html = document.querySelector("html");
      if (html) {
        html.classList.add("dark");
      }
    }

    setMounted(() => true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="flex items-center justify-center w-full h-full text-slate-900">
        <button
          className="w-12 h-12 p-3 rounded-full bg-slate-200 dark:bg-slate-800"
          onClick={() => {
            const html = document.querySelector("html");
            if (html) {
              html.classList.toggle("dark");
              setDarkMode(!darkMode);
              localStorage.setItem("darkMode", (!darkMode).toString());
            }
          }}
        >
          <svg
            className="w-6 h-6 text-slate-800 dark:text-slate-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.05 10a7.95 7.95 0 001.5 4.5l1.9-1.1a5.95 5.95 0 01-.9-3.4 5.95 5.95 0 01.9-3.4L3.55 5.5A7.95 7.95 0 002.05 10z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ThemeSwitch;
