"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white shadow-xl h-24 z-20 flex items-center justify-between px-8">
      {/* Fixed at the top, spanning full width */}

      {/* Left: Logo Section */}
      <Link href="/" className="flex flex-col items-center gap-2">
        <Image
          src="/assets/images/logo.svg"  // Adjust path to your logo
          alt="Link Towing and Recovery Logo"
          width={100}
          height={60}
          className="object-contain"
        />
        <span className="logo_text">Towing & Recovery</span>
      </Link>

      {/* Right: Navigation Links and Call Us Button */}
      <div className="hidden sm:flex gap-8 items-center">
        <Link href="/about" className="text-lg text-gray-700 transition delay-100 hover:text-red-500">
          About
        </Link>
        <Link href="/services" className="text-lg text-gray-700 transition delay-100 hover:text-red-500">
          Services
        </Link>
        <Link href="/contact" className="text-lg text-gray-700 transition delay-100 hover:text-red-500">
          Contact Us
        </Link>
        <a
          href="tel:+19199041125"
          className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-red-600"
        >
          Call Us Now
        </a>
      </div>

      {/* Hamburger Icon for Mobile (only visible on small screens) */}
      <div className="sm:hidden z-30">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isMenuOpen && (
        <>
          {/* Background overlay to cover content */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setIsMenuOpen(false)} // Close menu on clicking the overlay
          ></div>

          {/* Dropdown Menu */}
          <div className="fixed top-0 right-0 left-0 bg-white shadow-lg flex flex-col items-center p-6 sm:hidden z-30 h-full animate-fade-in-up"> {/* Add the animation here */}
            
            {/* Close Button at Top-Right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-6 text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Navigation Links with animations */}
            <Link
              href="/about"
              className="w-full text-lg text-gray-700 py-4 hover:text-red-500 text-center animate-fade-in-up mt-5"
              onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              style={{ animationDelay: "0.1s" }} // Add delay for staggered animation
            >
              About
            </Link>
            <Link
              href="/services"
              className="w-full text-lg text-gray-700 py-4 hover:text-red-500 text-center animate-fade-in-up"
              onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              style={{ animationDelay: "0.2s" }} // Add delay for staggered animation
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="w-full text-lg text-gray-700 py-4 hover:text-red-500 text-center animate-fade-in-up"
              onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              style={{ animationDelay: "0.3s" }} // Add delay for staggered animation
            >
              Contact Us
            </Link>
            <a
              href="tel:+19199041125"
              className="w-full mt-4 bg-red-500 text-white py-4 rounded-lg text-lg hover:bg-red-600 text-center animate-fade-in-up"
              onClick={() => setIsMenuOpen(false)} // Close menu when button is clicked
              style={{ animationDelay: "0.4s" }} // Add delay for staggered animation
            >
              Call Us Now
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
