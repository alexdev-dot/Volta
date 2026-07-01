import { Bell, ChevronDown, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoImage from "../assets/logo/Primary logo.png";

interface CustomerNavProps {
  active: string;
}

const ALL_LINKS = [
  { label: "Home", href: "/dashboard" },
  { label: "Find Services", href: "/customer/services" },
  { label: "Bookings", href: "/customer/bookings" },
  { label: "Chats", href: "/customer/chats" },
  { label: "My Job", href: "/customer/jobs" },
  { label: "Payments", href: "/customer/payments" },
];

export default function CustomerNav({ active }: CustomerNavProps) {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "there";
  const location = stored.location || "Ruiru, Kiambu County";

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
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
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors">
              Professionals <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 hover:border-gray-300 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-green-600" />
            <span className="truncate max-w-[120px]">{location}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          <Link href="/customer/profile">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{firstName[0]?.toUpperCase()}</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-xs font-semibold text-gray-900 leading-none">{firstName} Test</p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">Customer</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden md:block" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
