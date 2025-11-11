import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Load user preference from localStorage or system
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [scrolled, setScrolled] = useState(false);

  // Save & apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => setOpenMenu(!openMenu);
  const handleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    ["About Me", "#"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Reach Out", "#contact"],
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg py-3"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center">
          {/* Logo with gradient animation */}
          <a
            href="#"
            className="relative text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 via-amber-900 to-amber-300 dark:from-sky-100 dark:via-sky-200 dark:to-sky-100  bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] hover:scale-110 transition-transform duration-300"
          >
            Urvashi
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-2 py-2 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            {navLinks.map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  className="relative px-5 py-2 text-lg font-medium rounded-full transition-all duration-100 hover:text-amber-600 dark:hover:text-white hover:bg-amber-200/60 dark:hover:bg-gray-700/60 group"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkMode}
              className="relative w-10 h-10 rounded-full cursor-pointer dark:bg-gray-800 bg-amber-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <span className="relative">
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </span>
            </button>

            {/* Resume Button */}
            <button className="hidden lg:flex items-center gap-2 px-5 py-2.5  cursor-pointer btnStyle duration-300 group">
              <span>Resume</span>

              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenu}
              className="lg:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {openMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenu}
      />

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-20 right-6 z-40 lg:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 ${
          openMenu
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-3 min-w-[220px]">
          {navLinks.map(([label, link], index) => (
            <li
              key={label}
              className={`transition-all duration-300 ${
                openMenu
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <a
                href={link}
                onClick={handleMenu}
                className="block px-6 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300"
              >
                {label}
              </a>
            </li>
          ))}

          {/* Mobile Resume Button */}
          <li className="px-4 pt-3 pb-2 border-t border-gray-200 dark:border-gray-700 mt-2">
            <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-amber-700 dark:bg-gray-700 text-white font-medium shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300">
              <span>Resume</span>
              <Download className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}
