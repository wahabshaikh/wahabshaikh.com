import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import NavLink from "./nav-link";

const links = [
  { section: "hero", title: "Home" },
  { section: "about", title: "About" },
  { section: "work", title: "Work" },
  { section: "contact", title: "Contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed w-full opacity-80 bg-white dark:bg-black dark:text-white border-b-2 border-black dark:border-white">
      <div className="max-w-5xl mx-auto p-3 flex flex-col sm:flex-row justify-between">
        <h1 className="font-bold text-center">
          <Link href="/">
            <a>Wahab Shaikh</a>
          </Link>
        </h1>
        <nav className="flex-1">
          <ul className="flex justify-center sm:justify-end space-x-5">
            {links.map((link) => (
              <li key={link.title}>
                <NavLink to={link.section}>{link.title}</NavLink>
              </li>
            ))}
            <button
              aria-label="toggle"
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {theme === "dark" ? (
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clip-rule="evenodd"
                    ></path>
                  ) : (
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  )}
                </svg>
              )}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
