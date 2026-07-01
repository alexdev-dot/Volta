import { MapPin, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import logoImage from "../assets/logo/Primary logo.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <img src={logoImage} alt="VOLTA" className="h-8 w-auto" />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-gray-900 border-b-2 border-green-600 pb-0.5">Home</Link>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Find Services</a>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">How It Works</a>
            <Link href="/for-professionals" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">For Professionals</Link>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About Us</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 rounded-full px-3 py-1.5">
              <MapPin className="w-4 h-4 text-green-600" />
              <span>Ruiru, Kiambu</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link href="/sign-in">
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
