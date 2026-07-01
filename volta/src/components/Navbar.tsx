import { useState } from "react";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";
import logoImage from "../assets/logo/Primary logo.png";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Find Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "About Us", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <img src={logoImage} alt="VOLTA" className="h-8 w-auto" />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors pb-0.5 ${
                    link.active
                      ? "text-gray-900 border-b-2 border-green-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 rounded-full px-3 py-1.5 hover:border-gray-300">
              <MapPin className="w-3.5 h-3.5 text-green-600" />
              <span className="font-medium">Ruiru, Kiambu</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <Link href="/sign-in">
              <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors shadow-sm">
                Sign In
              </button>
            </Link>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block py-2.5 px-1 text-sm font-medium ${
                    link.active ? "text-green-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2.5 px-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
