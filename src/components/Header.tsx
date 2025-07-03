"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: "Chakra UI", href: "#" },
    { label: "Bootstrap", href: "#" },
    { label: "Radix UI", href: "#" },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-[#FFD7A8] flex justify-center sticky top-0 z-50 border-b-2 border-gray-800">
        <div className="flex h-16 w-full max-w-[1440px] justify-between items-center px-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] sm:text-2xl font-semibold whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            Shadcn UI Component Library
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 hover:bg-[#FFC9C9] rounded-lg cursor-pointer transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-semibold bg-[#FFC9C9] text-yellow-900 border-2 border-blue-900 px-2 py-1 rounded-md hover:bg-[#BEDBFF] hover:text-black transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Modal */}
        {isModalOpen && (
          <article className="fixed inset-0 bg-[#FFD7A8] z-50 lg:hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 h-16 border-b-2 border-gray-800">
              <Link
                href="/"
                onClick={() => setIsModalOpen(false)}
                className="text-[20px] sm:text-2xl font-semibold whitespace-nowrap hover:text-blue-600 transition-colors"
              >
                Shadcn UI Component Library
              </Link>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-[#FFC9C9] rounded-lg transition-colors cursor-pointer"
              >
                <X size={24} className="text-black-purple" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsModalOpen(false)}
                  className="block w-full text-center py-2 text-base font-semibold bg-[#FFC9C9] text-yellow-900 border-2 border-blue-900 rounded-md hover:bg-[#BEDBFF] hover:text-black transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        )}
      </nav>
    </>
  );
}
