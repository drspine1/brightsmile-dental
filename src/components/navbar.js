"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
  import { MdMenu } from "react-icons/md";
  import { LiaTimesSolid } from "react-icons/lia";
  import { FaTooth } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[15vh]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-8 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SCD<FaTooth className="inline-block " />CLINIC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LiaTimesSolid  size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col items-end w-full py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 text-lg font-medium ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
