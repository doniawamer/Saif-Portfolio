"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row items-center justify-between p-6 text-white",
        "transition-all duration-500 ease-in-out",
        scrolled 
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent shadow-none"
      )}
    >
      <Link
        href="/"
        className="text-xl font-bold tracking-wider text-center sm:text-left mb-2 sm:mb-0"
      >
        <div className="text-lg">Saif Amer</div>
        <div className="text-sm font-normal uppercase hidden sm:block">
          Filmmaker
        </div>
      </Link>
      <div className="flex w-full sm:w-auto justify-between sm:gap-8 text-sm">
        {pathname !== "/" && (
          <Link
            href="/"
            className={cn(
              "hover:opacity-70 transition-all border-b-2 border-transparent",
              pathname === "/" 
                ? "font-bold opacity-100 border-white" 
                : "font-normal opacity-80"
            )}
          >
            HOME
          </Link>
        )}
        <Link
          href="/about"
          className={cn(
            "hover:opacity-70 transition-all border-b-2 border-transparent",
            pathname === "/about" 
              ? "font-bold opacity-100 border-white" 
              : "font-normal opacity-80"
          )}
        >
          ABOUT
        </Link>
        <Link
          href="/work"
          className={cn(
            "hover:opacity-70 transition-opacity",
            pathname === "/work" && "underline"
          )}
        >
          WORK
        </Link>
        <Link
          href="/contact"
          className={cn(
            "hover:opacity-70 transition-opacity",
            pathname === "/contact" && "underline"
          )}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
