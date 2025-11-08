"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Logos } from "@/assets/logo";
import { Button } from "../ui/button";

const navItems = [
  {
    label: "Built for Growth",
    href: "#build-for-growth",
  },
  {
    label: "Why Choose Us",
    href: "#why-choose-us",
  },
  {
    label: "Value Delivered",
    href: "#value-delivered",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="top"
      className={`
        w-full z-50 transition-all duration-200 ease-in-out flex items-center justify-between
        ${
          isScrolled
            ? "fixed top-2 md:top-4 left-1/2 -translate-x-1/2 md:max-w-4xl max-w-sm rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50 px-4 md:px-6 py-2 md:py-4"
            : "fixed top-0 left-1/2 -translate-x-1/2 container mx-auto py-8 md:py-14 md:px-16 px-8"
        }
      `}
    >
      <Link
        href="#top"
        className={`transition-all duration-300 ${
          isScrolled ? "scale-90" : ""
        }`}
      >
        <Image
          src={Logos.LARGE_BLACK_PNG}
          alt="Logo"
          width={isScrolled ? 70 : 90}
          height={isScrolled ? 70 : 90}
          unoptimized
          priority
          className="transition-all duration-300 w-[70px] md:w-[90px] lg:w-[100px] object-contain"
        />
      </Link>
      <div
        className={`flex items-center transition-all duration-300 ${
          isScrolled ? "gap-3 md:gap-6" : "gap-6 md:gap-10"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`
              hidden md:block font-medium hover:text-black transition-all duration-200
              ${
                isScrolled
                  ? "text-[#333333] text-xs md:text-sm"
                  : "text-[#333333]"
              }
            `}
          >
            {item.label}
          </Link>
        ))}
        <Button
          variant="outline"
          href="#top"
          className={`
            rounded-full border-[#0563FF] bg-white text-[#0563FF] hover:bg-[#0563FF] hover:text-white transition-all duration-200
            ${
              isScrolled
                ? "h-8 md:h-10 text-xs md:text-sm px-3 md:px-4"
                : "hidden h-10 md:h-12 text-sm md:text-base"
            }
          `}
          size={isScrolled ? "sm" : "lg"}
        >
          <span>Join Waitlist</span>
        </Button>
      </div>
    </nav>
  );
}
