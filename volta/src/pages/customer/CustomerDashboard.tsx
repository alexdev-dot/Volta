import {
  Search, MapPin, ChevronDown, Shield, Headphones, Star,
  ArrowRight, Plus, ChevronRight, Lock, Phone, CheckCircle, Check,
  MessageCircle, Calendar, Clock, Gift,
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import CustomerNav from "@/components/navigation/CustomerNav";
import ProfileSidebar from "@/components/customer/ProfileSidebar";
import plumbingIcon from "../../assets/logo/services-icon/plumbing.png";
import electricalIcon from "../../assets/logo/services-icon/flash.png";
import carpentryIcon from "../../assets/logo/services-icon/workplace.png";
import cleaningIcon from "../../assets/logo/services-icon/mop.png";
import constructionIcon from "../../assets/logo/services-icon/helmet.png";
import mechanicsIcon from "../../assets/logo/services-icon/mechanics.png";

const SERVICES = [
  { name: "Plumbing",      desc: "Fix leaks, pipes & installations",  icon: plumbingIcon,     bg: "bg-blue-50",   iconBg: "bg-blue-100",   count: "120+ pros" },
  { name: "Electrical",   desc: "Wiring, faults & installations",     icon: electricalIcon,   bg: "bg-yellow-50", iconBg: "bg-yellow-100", count: "150+ pros" },
  { name: "Carpentry",    desc: "Furniture, doors & woodwork",        icon: carpentryIcon,    bg: "bg-orange-50", iconBg: "bg-orange-100", count: "95+ pros"  },
  { name: "Cleaning",     desc: "Home or office cleaning",            icon: cleaningIcon,     bg: "bg-purple-50", iconBg: "bg-purple-100", count: "200+ pros" },
  { name: "Construction", desc: "Building & renovation",               icon: constructionIcon, bg: "bg-gray-50",   iconBg: "bg-gray-200",   count: "180+ pros" },
  { name: "Mechanics",    desc: "Car repairs & maintenance",           icon: mechanicsIcon,    bg: "bg-red-50",    iconBg: "bg-red-100",    count: "110+ pros" },
];

const PROS = [
  { name: "John Kamau",   role: "Plumber",     rating: 4.8, reviews: 128, distance: "2.1 km away", price: "From KSh 1,200", online: true,  status: "Online", img: "https://i.pravatar.cc/300?img=11" },
  { name: "David Mwangi", role: "Electrician", rating: 4.7, reviews: 96,  distance: "2.4 km away", price: "From KSh 1,000", online: true,  status: "Online", img: "https://i.pravatar.cc/300?img=12" },
  { name: "Peter Ndungu", role: "Mechanic",    rating: 4.6, reviews: 74,  distance: "3.1 km away", price: "From KSh 1,500", online: false, status: "Busy",   img: "https://i.pravatar.cc/300?img=13" },
  { name: "Mary Wanjiku", role: "Cleaner",     rating: 4.9, reviews: 53,  distance: "1.8 km away", price: "From KSh 800",   online: true,  status: "Online", img: "https://i.pravatar.cc/300?img=5"  },
];

const BOOKINGS = [
  { icon: <Calendar className="w-5 h-5 text-blue-500" />,     label: "Upcoming",    count: 3 },
  { icon: <Clock    className="w-5 h-5 text-orange-400" />,   label: "In Progress", count: 1 },
  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, label: "Completed",   count: 8 },
  { icon: <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center"><div className="w-2.5 h-0.5 bg-red-400" /></div>, label: "Cancelled", count: 2 },
];

export default function CustomerDashboard() {
  const [selectedPro, setSelectedPro] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const stored = (() => { try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "there";

  const handleViewProfile = (pro: any) => {
    setSelectedPro(pro);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Home" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex gap-5 lg:gap-6">

          {/* ── Main column ── */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">

            {/* ── Hero ── */}
            <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl overflow-hidden border border-green-100">
              {/* Stacks on mobile, side-by-side on md+ */}
              <div className="flex flex-col md:flex-row md:min-h-[220px]">
                {/* Left content */}
                <div className="relative z-10 p-5 sm:p-6 md:w-[58%] md:pr-0">
                  <p className="text-gray-600 text-sm font-medium mb-2">Hello, {firstName} 👋</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                    Reliable help,<br />
                    <span className="text-green-600">right when</span> you need it.
                  </h1>
                  <p className="text-gray-500 text-sm mb-4">Trusted professionals. Quality service. Peace of mind.</p>

                  {/* Search row — wraps on small screens */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex-1 shadow-sm">
                      <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <input type="text" placeholder="What service do you need?"
                        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm whitespace-nowrap">
                        <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600 hidden xs:inline">Ruiru, Kiambu</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm whitespace-nowrap">
                        Find Pros
                      </button>
                    </div>
                  </div>

                  {/* Trust badges — wrap naturally */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3">
                    {[
                      { icon: Shield, label: "Verified Professionals" },
                      { icon: Lock,   label: "Secure Payments" },
                      { icon: Phone,  label: "24/7 Support" },
                      { icon: Star,   label: "Satisfaction Guaranteed" },
                    ].map((t) => (
                      <div key={t.label} className="flex items-center gap-1.5">
                        <t.icon className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-xs text-gray-600 font-medium">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right hero image — hidden on small mobile, shown on md+ */}
                <div className="hidden md:block md:absolute right-0 top-0 bottom-0 w-[44%] overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-green-50 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                    alt="professional"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-xl px-4 py-3 text-center z-20">
                    <p className="text-gray-400 text-[10px] font-medium">Trusted by</p>
                    <p className="text-green-600 font-extrabold text-xl leading-tight">5,000+</p>
                    <p className="text-gray-400 text-[10px] font-medium">Happy Customers</p>
                    <div className="flex items-center justify-center mt-1.5 -space-x-1.5">
                      {[11,12,13,5,14].map((n) => (
                        <img key={n} src={`https://i.pravatar.cc/32?img=${n}`} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                      ))}
                      <div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center">
                        <span className="text-white text-[8px] font-bold">+</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-only hero image strip */}
                <div className="md:hidden h-36 overflow-hidden rounded-b-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                    alt="professional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* ── Promo Banner ── */}
            <div className="relative bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 border border-green-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 overflow-hidden shadow-sm">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="text-2xl flex-shrink-0">🎉</span>
                <div>
                  <p className="text-green-700 font-bold text-sm mb-0.5">Limited Time Offer!</p>
                  <p className="text-gray-900 font-extrabold text-sm sm:text-base">
                    Get <span className="text-green-600">10% OFF</span> your first booking
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                    <span className="text-gray-500 text-xs">Use code:</span>
                    <span className="bg-white border border-dashed border-green-400 text-green-700 font-bold text-xs px-3 py-1 rounded-lg tracking-widest">VOLTA10</span>
                    <span className="text-gray-400 text-xs hidden sm:inline">Valid for new customers only • T&Cs Apply</span>
                  </div>
                </div>
              </div>
              <button className="relative z-10 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm whitespace-nowrap self-start sm:self-auto flex-shrink-0">
                Book Now &amp; Save
              </button>
            </div>

            {/* ── Popular Services ── */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900">Popular Services</h2>
                <a href="#" className="flex items-center gap-1 text-sm text-green-600 font-semibold hover:text-green-700 whitespace-nowrap">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                {SERVICES.map((s) => (
                  <div key={s.name} className={`${s.bg} rounded-xl p-3 sm:p-4 cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5`}>
                    <div className={`${s.iconBg} w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2`}>
                      <img src={s.icon} alt={s.name} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{s.name}</p>
                    <p className="text-gray-500 text-[10px] sm:text-xs leading-snug mt-0.5 hidden sm:block">{s.desc}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-medium mt-1 hidden sm:block">{s.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Top Rated Near You ── */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900">Top Rated Near You</h2>
                <Link href="/customer/services" className="flex items-center gap-1 text-sm text-green-600 font-semibold hover:text-green-700 whitespace-nowrap">
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                {PROS.map((pro) => (
                  <div key={pro.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5 flex-shrink-0 w-[calc(50%-6px)] sm:w-auto sm:flex-shrink-1">
                    <div className="relative">
                      <img src={pro.img} alt={pro.name} className="w-full h-28 sm:h-36 object-cover" />
                      <div className={`absolute top-2 left-2 flex items-center gap-1 ${pro.online ? "bg-green-500" : "bg-orange-400"} text-white text-[9px] font-bold px-2 py-0.5 rounded-full`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        {pro.status}
                      </div>
                    </div>
                    <div className="p-2.5 sm:p-3">
                      <div className="flex items-center gap-1 mb-0.5">
                        <p className="font-bold text-gray-900 text-xs sm:text-sm truncate">{pro.name}</p>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs">{pro.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-800">{pro.rating}</span>
                        <span className="text-gray-400 text-[10px] hidden sm:inline">({pro.reviews})</span>
                      </div>
                      <p className="text-green-700 font-semibold text-xs mt-0.5">{pro.price}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <button 
                          onClick={() => handleViewProfile(pro)}
                          className="flex-1 text-center text-xs font-semibold text-white bg-green-600 hover:bg-green-700 py-1 rounded-lg transition-colors"
                        >
                          View Profile
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded-lg hover:border-green-400 transition-colors flex-shrink-0">
                          <MessageCircle className="w-3.5 h-3.5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Trust Badges ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "👤", title: "Background Checked", desc: "All pros are verified" },
                { icon: "💰", title: "Upfront Pricing",    desc: "No hidden charges" },
                { icon: "⏱️", title: "On-time Service",    desc: "We respect your time" },
                { icon: "⭐", title: "Satisfaction Guaranteed", desc: "We've got your back" },
              ].map((t) => (
                <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-center gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{t.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight">{t.title}</p>
                    <p className="text-gray-400 text-xs hidden sm:block">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>{/* end main column */}

          {/* ── Right Sidebar — desktop only ── */}
          <div className="w-[230px] flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* My Bookings */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-gray-900 text-base">My Bookings</p>
                <Link href="/customer/bookings" className="text-xs text-green-600 font-semibold hover:text-green-700">View All</Link>
              </div>
              <div className="divide-y divide-gray-50">
                {BOOKINGS.map((b) => (
                  <button key={b.label} className="flex items-center justify-between w-full py-2.5 hover:bg-gray-50 rounded-lg px-1 transition-colors group">
                    <div className="flex items-center gap-2.5">
                      {b.icon}
                      <span className="text-sm text-gray-700">{b.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-gray-800">{b.count}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
              <Link href="/customer/services">
                <button className="mt-3 w-full flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
                  <Plus className="w-4 h-4" /> Book a Service
                </button>
              </Link>
            </div>

            {/* Become a Pro */}
            <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-2xl overflow-hidden p-4 text-white shadow-sm">
              <div className="absolute inset-0 opacity-25">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=60" alt="" className="w-full h-full object-cover object-top" />
              </div>
              <div className="relative z-10">
                <p className="font-extrabold text-base mb-1">Become a Pro</p>
                <p className="text-white/75 text-xs leading-snug mb-4">Join thousands of professionals growing their business with VOLTA.</p>
                <Link href="/for-professionals">
                  <button className="flex items-center gap-1.5 bg-white text-green-800 font-bold text-xs px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                    Join as Professional <ArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Refer & Earn */}
            <div className="relative bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-100 rounded-2xl p-4 overflow-hidden shadow-sm">
              <div className="absolute -right-2 -bottom-2 opacity-20 pointer-events-none">
                <Gift className="w-16 h-16 text-purple-500" />
              </div>
              <div className="relative z-10">
                <p className="font-extrabold text-gray-900 text-sm mb-0.5">Refer &amp; Earn</p>
                <p className="text-gray-500 text-xs leading-snug mb-3">Invite friends and earn KSh 500 when they book their first service.</p>
                <button className="flex items-center gap-1 text-purple-700 font-bold text-xs border border-purple-300 bg-white rounded-lg px-3 py-1.5 hover:bg-purple-50 transition-colors">
                  Refer Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">Need Help?</p>
                  <p className="text-gray-500 text-xs leading-snug mb-3">Our support team is always here for you.</p>
                  <button className="flex items-center gap-1.5 text-green-600 font-semibold text-xs border border-green-200 rounded-lg px-3 py-1.5 hover:bg-green-50 transition-colors">
                    <Headphones className="w-3.5 h-3.5" /> Contact Support
                  </button>
                </div>
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg transition-colors">
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Chat with us</span>
      </button>

      {/* Profile Sidebar */}
      <ProfileSidebar 
        professional={selectedPro}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
