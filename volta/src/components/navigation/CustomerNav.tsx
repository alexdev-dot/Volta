import { useState, useEffect, useRef } from "react";
import { Bell, ChevronDown, MapPin, Menu, X, User, LogOut, Settings } from "lucide-react";
import { Link } from "wouter";
import logoImage from "../../assets/logo/Primary logo.png";

interface CustomerNavProps {
  active: string;
}

const ALL_LINKS = [
  { label: "Home",          href: "/dashboard" },
  { label: "Find Services", href: "/customer/services" },
  { label: "Bookings",      href: "/customer/bookings" },
  { label: "Chats",         href: "/customer/chats" },
  { label: "My Job",        href: "/customer/jobs" },
  { label: "Payments",      href: "/customer/payments" },
];

export default function CustomerNav({ active }: CustomerNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const stored = (() => {
    try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; }
  })();
  const firstName = stored.firstName || "there";
  const location  = stored.location  || "Ruiru, Kiambu County";

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
      if (e.key === "Escape" && profileOpen) setProfileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen, profileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
              <img src={logoImage} alt="VOLTA" className="h-7 w-auto" />
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {ALL_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  active === l.label
                    ? "text-green-600 font-semibold border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 hover:border-gray-300 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            <span className="truncate max-w-[120px]">{location}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{firstName[0]?.toUpperCase()}</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-gray-900 leading-none">{firstName}</p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">Customer</p>
              </div>
            </button>
            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                <Link
                  href="/customer/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <User className="w-4 h-4 text-gray-400" />
                  Profile
                </Link>
                <Link
                  href="/customer/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-400" />
                  Settings
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("volta_user");
                    window.location.href = "/";
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
          {/* Hamburger — mobile only */}
          <button
            id="customer-nav-toggle"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="customer-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          id="customer-mobile-menu"
          ref={drawerRef}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <nav className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col gap-1">
            {ALL_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === l.label
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {/* Location row in mobile menu */}
            <div className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-gray-500 border-t border-gray-100 mt-1 pt-3">
              <MapPin className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
