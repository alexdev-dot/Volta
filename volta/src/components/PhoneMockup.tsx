import { MapPin, ChevronDown, Bell, Menu, Search, Star, Heart, Home, CalendarDays, MessageSquare, User, Shield } from "lucide-react";
import logoImage from "../assets/logo/Primary logo.png";

/* ── Tiny category SVG icons ── */
function FaucetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 4h-2a2 2 0 00-2 2v1H6v2h2v1a2 2 0 002 2h4a2 2 0 002-2V6a2 2 0 00-2-2z" fill="#3B82F6" />
      <rect x="10" y="10" width="4" height="6" rx="1" fill="#60A5FA" />
      <path d="M11 16v3" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 19h6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5" />
    </svg>
  );
}
function HammerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="8" y="5" width="10" height="6" rx="1.5" fill="#EA580C" transform="rotate(-30 13 8)" />
      <rect x="4" y="13" width="3" height="9" rx="1.5" fill="#92400E" transform="rotate(-30 5.5 17.5)" />
      <path d="M16 4 L20 8" stroke="#C2410C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M14 3L5 12l2 2 9-9-2-2z" fill="#9333EA" />
      <path d="M5 12l-2 7 2-1 2 1-1-2 1-2-2-3z" fill="#A855F7" />
      <circle cx="18" cy="6" r="3" stroke="#C4B5FD" strokeWidth="1.5" fill="none" />
      <circle cx="19" cy="19" r="2" stroke="#DDD6FE" strokeWidth="1" fill="none" />
      <circle cx="8" cy="20" r="1.5" stroke="#E9D5FF" strokeWidth="1" fill="none" />
    </svg>
  );
}
function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <ellipse cx="12" cy="16" rx="9" ry="2.5" fill="#16A34A" />
      <path d="M4 16Q4 8 12 7Q20 8 20 16Z" fill="#22C55E" />
      <rect x="9" y="12" width="6" height="3" rx="1" fill="#15803D" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M17 3C19.8 3 22 5.2 22 8c0 1.2-.4 2.3-1.1 3.2L9.2 22.9c-.7.7-1.9.7-2.6 0L4.1 20.4c-.7-.7-.7-1.9 0-2.6L15.8 6.1C14.6 5.4 14 4.3 14 3h3z" fill="#EF4444" />
      <path d="M4 20l2-2" stroke="#B91C1C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5.5" cy="19.5" r="2" fill="#FCA5A5" />
    </svg>
  );
}
function ApplianceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#3B82F6" />
      <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="13" r="2" stroke="#BFDBFE" strokeWidth="1" fill="none" />
      <rect x="7" y="6" width="4" height="2" rx="1" fill="white" />
      <circle cx="14" cy="7" r="1" fill="white" />
      <circle cx="17" cy="7" r="1" fill="white" />
    </svg>
  );
}
function RollerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="4" y="4" width="14" height="6" rx="2" fill="#16A34A" />
      <rect x="3" y="3" width="16" height="8" rx="2" stroke="#15803D" strokeWidth="1" fill="none" />
      <path d="M14 10v3h2v-3" stroke="#22C55E" strokeWidth="1.5" />
      <rect x="12" y="13" width="6" height="2" rx="1" fill="#16A34A" />
      <path d="M15 15v4" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="11" y="18" width="8" height="3" rx="1" fill="#4ADE80" />
    </svg>
  );
}

const categories = [
  { name: "Plumbing",     Icon: FaucetIcon,   bg: "#EFF6FF" },
  { name: "Electrical",   Icon: BoltIcon,     bg: "#FEFCE8" },
  { name: "Carpentry",    Icon: HammerIcon,   bg: "#FFF7ED" },
  { name: "Cleaning",     Icon: BrushIcon,    bg: "#FAF5FF" },
  { name: "Construction", Icon: HardHatIcon,  bg: "#F0FDF4" },
  { name: "Mechanics",    Icon: WrenchIcon,   bg: "#FFF1F2" },
  { name: "Appliances",   Icon: ApplianceIcon,bg: "#EFF6FF" },
  { name: "Painting",     Icon: RollerIcon,   bg: "#F0FDF4" },
];

const professionals = [
  {
    name: "John Kamau",
    role: "Plumber",
    rating: "4.8",
    reviews: "128",
    distance: "1.2 km away",
    price: "From KSh 1,200",
    status: "Online",
    statusColor: "#16A34A",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=70&fit=crop",
  },
  {
    name: "David Mwangi",
    role: "Electrician",
    rating: "4.7",
    reviews: "96",
    distance: "2.4 km away",
    price: "From KSh 1,000",
    status: "Online",
    statusColor: "#16A34A",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=70&fit=crop",
  },
  {
    name: "Peter Ndungu",
    role: "Mechanic",
    rating: "4.6",
    reviews: "74",
    distance: "3.1 km away",
    price: "From KSh 1,500",
    status: "Busy",
    statusColor: "#D97706",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70&fit=crop",
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative w-[240px] mx-auto">
      {/* Phone shell */}
      <div className="bg-gray-900 rounded-[2.8rem] p-[7px] shadow-2xl shadow-gray-400/40">
        <div className="bg-white rounded-[2.3rem] overflow-hidden" style={{ height: 520 }}>

          {/* ── Status bar ── */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-white">
            <span className="text-[10px] font-bold text-gray-900">9:41</span>
            <div className="flex items-center gap-1">
              {/* Signal bars */}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#111827" />
                <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="#111827" />
                <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="#111827" />
                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="#111827" />
              </svg>
              {/* Wifi */}
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M6 7.5 L6 7.5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3.5 5.5 Q6 3.5 8.5 5.5" stroke="#111827" strokeWidth="1" fill="none" strokeLinecap="round" />
                <path d="M1 3 Q6 -0.5 11 3" stroke="#111827" strokeWidth="1" fill="none" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
                <rect x="0.5" y="0.5" width="13" height="8" rx="1.5" stroke="#111827" strokeWidth="1" />
                <rect x="1.5" y="1.5" width="10" height="6" rx="1" fill="#111827" />
                <path d="M14.5 3v3" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* ── App header ── */}
          <div className="flex items-center justify-between px-3 pb-2">
            <Menu className="w-4 h-4 text-gray-700" />
            <img src={logoImage} alt="VOLTA" className="h-5 w-auto" />
            <div className="relative">
              <Bell className="w-4 h-4 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-white text-[6px] font-bold flex items-center justify-center">2</span>
            </div>
          </div>

          {/* ── Location ── */}
          <div className="flex items-center gap-1 px-3 pb-2">
            <MapPin className="w-3 h-3 text-green-600 flex-shrink-0" />
            <span className="text-[10px] font-semibold text-gray-800">Ruiru, Kiambu County</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </div>

          {/* Scrollable content */}
          <div
            className="overflow-y-auto"
            style={{ height: 430, scrollbarWidth: "none" }}
          >
            {/* ── Search bar ── */}
            <div className="flex items-center gap-2 mx-3 mb-3">
              <div className="flex-1 flex items-center gap-1.5 bg-gray-100 rounded-xl px-2.5 py-2">
                <Search className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <span className="text-[9px] text-gray-400 leading-none">What service do you need today?</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* ── Hero banner ── */}
            <div className="mx-3 mb-3 rounded-2xl overflow-hidden relative" style={{ height: 110 }}>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80&fit=crop"
                alt="professional"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 100%)" }}
              />
              {/* Text */}
              <div className="relative z-10 p-3">
                <p className="text-white text-[11px] font-extrabold leading-tight">Your home,</p>
                <p className="text-green-400 text-[11px] font-extrabold leading-tight">handled by</p>
                <p className="text-white text-[11px] font-extrabold leading-tight mb-0.5">professionals.</p>
                <p className="text-white/70 text-[8px] mb-2 leading-tight">Find trusted experts near you.</p>
                <button className="flex items-center gap-1 border border-white rounded-lg px-2 py-0.5">
                  <span className="text-white text-[8px] font-bold">Book a Service</span>
                  <span className="text-white text-[8px]">→</span>
                </button>
              </div>
              {/* Pagination dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <div className="w-4 h-1 bg-green-500 rounded-full" />
                <div className="w-1 h-1 bg-white/50 rounded-full" />
                <div className="w-1 h-1 bg-white/50 rounded-full" />
              </div>
            </div>

            {/* ── Quick Categories ── */}
            <div className="mx-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold text-gray-900">Quick Categories</span>
                <span className="text-[9px] text-green-600 font-semibold">View all</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="bg-white rounded-xl p-1.5 flex flex-col items-center gap-1 border border-gray-100"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: cat.bg }}
                    >
                      <cat.Icon />
                    </div>
                    <span className="text-[7px] text-gray-700 font-medium text-center leading-tight">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Popular Near You ── */}
            <div className="mx-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold text-gray-900">Popular Near You</span>
                <span className="text-[9px] text-green-600 font-semibold">View all</span>
              </div>
              <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                {professionals.map((pro) => (
                  <div
                    key={pro.name}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden flex-shrink-0"
                    style={{ minWidth: 90 }}
                  >
                    {/* Photo with status badge & heart */}
                    <div className="relative">
                      <img
                        src={pro.img}
                        alt={pro.name}
                        className="w-full object-cover"
                        style={{ height: 64 }}
                      />
                      <span
                        className="absolute top-1 left-1 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ backgroundColor: pro.statusColor }}
                      >
                        {pro.status}
                      </span>
                      <div className="absolute top-1 right-1 w-4 h-4 bg-white/80 rounded-full flex items-center justify-center">
                        <Heart className="w-2 h-2 text-gray-400" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-1.5">
                      <p className="text-[8px] font-extrabold text-gray-900 leading-tight">{pro.name}</p>
                      <p className="text-[7px] text-gray-500 mb-0.5">{pro.role}</p>
                      <div className="flex items-center gap-0.5 mb-0.5">
                        <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                        <span className="text-[7px] font-semibold text-gray-800">{pro.rating}</span>
                        <span className="text-[6px] text-gray-400">({pro.reviews})</span>
                      </div>
                      <div className="flex items-center gap-0.5 mb-0.5">
                        <MapPin className="w-2 h-2 text-gray-400" />
                        <span className="text-[6px] text-gray-400">{pro.distance}</span>
                      </div>
                      <p className="text-[7px] text-green-700 font-bold mb-1">{pro.price}</p>
                      <button className="w-full bg-green-600 rounded-lg py-0.5">
                        <span className="text-white text-[7px] font-bold">Book Now</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Verified & Trusted ── */}
            <div className="mx-3 mb-4 bg-white rounded-2xl border border-gray-100 p-3 flex items-center gap-2">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] font-extrabold text-gray-900 leading-tight">Verified & Trusted</p>
                <p className="text-[7px] text-gray-500 leading-tight">All professionals are verified, rated and reviewed by real customers.</p>
              </div>
              <button className="border border-green-600 rounded-lg px-1.5 py-0.5 flex-shrink-0">
                <span className="text-green-600 text-[7px] font-semibold">Learn More</span>
              </button>
            </div>
          </div>

          {/* ── Bottom nav ── */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around px-2 py-2">
            {[
              { Icon: Home,           label: "Home",         active: true,  badge: 0 },
              { Icon: Search,         label: "Find Services",active: false, badge: 0 },
              { Icon: CalendarDays,   label: "My Bookings",  active: false, badge: 2 },
              { Icon: MessageSquare,  label: "Chats",        active: false, badge: 0 },
              { Icon: User,           label: "Profile",      active: false, badge: 0 },
            ].map(({ Icon, label, active, badge }) => (
              <div key={label} className="flex flex-col items-center gap-0.5 relative">
                <div className="relative">
                  <Icon
                    className={`w-4 h-4 ${active ? "text-green-600" : "text-gray-400"}`}
                    strokeWidth={active ? 2.5 : 1.8}
                  />
                  {badge > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-600 rounded-full text-white text-[6px] font-bold flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </div>
                <span className={`text-[6px] font-medium leading-none ${active ? "text-green-600" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic island / notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
    </div>
  );
}
