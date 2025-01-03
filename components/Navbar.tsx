"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/try-now");
  };

  const handleOurStory = () => {
    router.push("/our-story");
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              WebAudit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-white">
              Features
            </Link>

            <Link href="/contribute" className="text-gray-300 hover:text-white">
              Contribute
            </Link>

            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              onClick={handleOurStory}
              variant="ghost"
              className="text-gray-300 hover:text-white bg-black hover:bg-black "
            >
              Our Story
            </Button>
            <Button onClick={handleRedirect} variant="secondary">
              Try now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/features"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Features
              </Link>
              <Link
                href="/contribute"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Contribute
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                About
              </Link>

              <div className="pt-4 flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  className="justify-start  bg-black hover:bg-black  "
                >
                  Our Story
                </Button>
                <Button variant="secondary">Try now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
