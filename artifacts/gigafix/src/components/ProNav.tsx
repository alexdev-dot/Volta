import { Bell, ChevronDown, MessageSquare } from "lucide-react";
import { Link } from "wouter";

interface ProNavProps {
  active: string;
  showChat?: boolean;
}

const ALL_LINKS = [
  { label: "Dashboard", href: "/pro-dashboard" },
  { label: "My Schedule", href: "/pro/schedule" },
  { label: "Job Feed", href: "/pro/jobs" },
  { label: "Quotes", href: "/pro/quotes" },
  { label: "Chats", href: "/pro/chats" },
  { label: "Earnings", href: "/pro/earnings" },
  { label: "Reviews", href: "/pro/reviews" },
];

export default function ProNav({ active, showChat = false }: ProNavProps) {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("gigafix_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "lovabad";

  const links = showChat
    ? ALL_LINKS
    : ALL_LINKS.filter((l) => !["Chats", "Earnings", "Reviews"].includes(l.label));

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">GF</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">GigaFix</span>
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
        <div className="flex items-center gap-3">
          <button className="relative p-2">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          {showChat && (
            <button className="p-2">
              <MessageSquare className="w-5 h-5 text-gray-500" />
            </button>
          )}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{firstName[0]?.toUpperCase()}</span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold text-gray-900 leading-none">{firstName} Test</p>
              <p className="text-[10px] text-green-600 font-semibold leading-none mt-0.5">Professional</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  );
}
