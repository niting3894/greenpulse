"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);

  const isActive = (href) => pathname === href;

  // Control animation sequence
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => setAnimateMenu(true), 50); // Delay slide to wait for backdrop fade
    } else {
      setAnimateMenu(false);
    }
  }, [menuOpen]);

  return (
    <>
      <header className="absolute top-8 z-50 w-full px-4 sm:px-6 md:px-20">
        <div className="w-full max-w-7xl mx-auto py-2 px-4 flex items-center justify-between bg-[#f9f8f3] shadow-md rounded-lg">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logo.png"
                alt="Tracyle Logo"
                className="w-[130px] h-auto"
              />
            </div>
          </Link>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="bg-[#69cf3d] rounded-md p-2 flex flex-col justify-center items-center w-12 h-8"
            >
              <span className="block w-7 h-0.5 bg-white mb-1"></span>
              <span className="block w-7 h-0.5 bg-white mb-1"></span>
              <span className="block w-7 h-0.5 bg-white"></span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 uppercase text-[0.75rem] pr-5">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`font-[600] ${
                  isActive(href)
                    ? "text-lime-600"
                    : "text-gray-900 hover:text-lime-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide Menu from LEFT */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[400px] bg-white z-50 shadow-lg transition-transform duration-500 ease-in-out transform ${
          animateMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-[#69cf3d] text-white font-bold rounded-md w-12 h-10 flex items-center justify-center"
          >
            X
          </button>
        </div>

        {/* Menu Content */}
        <nav className="px-6 py-4 space-y-6 text-[0.75rem] font-[600] uppercase tracking-wide">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`block ${
              isActive("/") ? "text-lime-600" : "text-black hover:text-lime-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-lime-600"
          >
            About
          </Link>

          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-lime-600"
          >
            Service
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-lime-600"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-black hover:text-lime-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
