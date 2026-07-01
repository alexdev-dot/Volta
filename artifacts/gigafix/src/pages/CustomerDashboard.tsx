import { Search, MapPin, Bell, ChevronDown, CheckCircle, Shield, Headphones, Star, ArrowRight, Plus, ChevronRight, Lock, Phone } from "lucide-react";
import { Link } from "wouter";

const NAV_LINKS = ["Home", "Find Services", "Bookings", "Chats", "My Job", "Payments"];

const SERVICES = [
  { name: "Plumbing", desc: "Fix leaks, pipes & more", icon: "🔧", bg: "bg-blue-50", iconBg: "bg-blue-100" },
  { name: "Electrical", desc: "Wiring, faults & installations", icon: "⚡", bg: "bg-yellow-50", iconBg: "bg-yellow-100" },
  { name: "Carpentry", desc: "Furniture, doors & woodwork", icon: "🪚", bg: "bg-orange-50", iconBg: "bg-orange-100" },
  { name: "Cleaning", desc: "Home or office cleaning", icon: "🧹", bg: "bg-purple-50", iconBg: "bg-purple-100" },
  { name: "Construction", desc: "Building & renovation", icon: "🏗️", bg: "bg-gray-50", iconBg: "bg-gray-200" },
  { name: "Mechanics", desc: "Car repairs & maintenance", icon: "🔩", bg: "bg-red-50", iconBg: "bg-red-100" },
];

const PROS = [
  { name: "John Kamau", role: "Plumber", rating: 4.8, reviews: 128, distance: "2.1 km away", price: "From KSh 1,200", online: true, img: "https://i.pravatar.cc/80?img=11" },
  { name: "David Mwangi", role: "Electrician", rating: 4.7, reviews: 96, distance: "2.4 km away", price: "From KSh 1,000", online: true, img: "https://i.pravatar.cc/80?img=12" },
  { name: "Peter Ndungu", role: "Mechanic", rating: 4.6, reviews: 74, distance: "3.1 km away", price: "From KSh 1,500", online: false, img: "https://i.pravatar.cc/80?img=13" },
  { name: "Mary Wanjiku", role: "Cleaner", rating: 4.9, reviews: 53, distance: "1.8 km away", price: "From KSh 800", online: true, img: "https://i.pravatar.cc/80?img=5" },
];

const TRUST = [
  { icon: "👤", title: "Background Checked", desc: "All pros are verified" },
  { icon: "💰", title: "Upfront Pricing", desc: "No hidden charges" },
  { icon: "⏱️", title: "On-time Service", desc: "We respect your time" },
  { icon: "⭐", title: "Satisfaction Guaranteed", desc: "We've got your back" },
];

export default function CustomerDashboard() {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("gigafix_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "there";
  const location = stored.location || "Ruiru, Kiambu County";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Nav */}
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
              <a href="#" className="text-sm font-semibold text-gray-900 border-b-2 border-green-600 pb-0.5">Home</a>
              {["Find Services", "Bookings", "Chats", "My Job", "Payments"].map((l) => (
                <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">{l}</a>
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
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden mb-6 border border-green-100">
              <div className="p-6 pr-56 lg:pr-72 relative z-10">
                <p className="text-gray-600 text-sm font-medium mb-1">Hello, {firstName} 👋</p>
                <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">
                  What do you need<br />
                  <span className="text-green-600">help</span> with today?
                </h1>
                <p className="text-gray-500 text-sm mb-4">Find trusted professionals for any home service.</p>
                <div className="flex gap-2">
                  <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2.5">
                    <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <input type="text" placeholder="Search for services or professionals..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-2.5">
                    <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600 whitespace-nowrap">Ruiru, Kiambu County</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">Search</button>
                </div>
                <div className="flex items-center gap-5 mt-4">
                  {[
                    { icon: Shield, label: "Verified Professionals" },
                    { icon: Lock, label: "Secure Payments" },
                    { icon: Phone, label: "24/7 Support" },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center gap-1.5">
                      <t.icon className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs text-gray-600 font-medium">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Hero image */}
              <div className="absolute right-0 bottom-0 h-full w-56 lg:w-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=70"
                  alt="professional"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-green-50 to-transparent" />
                {/* Trusted badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-2.5 text-center">
                  <p className="text-gray-500 text-[10px]">Trusted by</p>
                  <p className="text-green-600 font-extrabold text-lg leading-tight">5,000+</p>
                  <p className="text-gray-500 text-[10px]">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Popular Services */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-extrabold text-gray-900">Popular Services</h2>
                <a href="#" className="flex items-center gap-1 text-sm text-green-600 font-semibold hover:text-green-700">
                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                {SERVICES.map((s) => (
                  <div key={s.name} className={`${s.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow`}>
                    <div className={`${s.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                      <span className="text-xl">{s.icon}</span>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{s.name}</p>
                    <p className="text-gray-500 text-xs leading-snug mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Rated Near You */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-extrabold text-gray-900">Top Rated Near You</h2>
                <a href="#" className="flex items-center gap-1 text-sm text-green-600 font-semibold hover:text-green-700">
                  View All Professionals <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {PROS.map((pro) => (
                  <div key={pro.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img src={pro.img} alt={pro.name} className="w-full h-28 object-cover" />
                      <div className={`absolute top-2 left-2 flex items-center gap-1 ${pro.online ? "bg-green-500" : "bg-orange-400"} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        {pro.online ? "Online" : "Busy"}
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1">
                        <p className="font-bold text-gray-900 text-sm">{pro.name}</p>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-gray-500 text-xs">{pro.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-800">{pro.rating}</span>
                        <span className="text-gray-400 text-xs">({pro.reviews})</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-0.5">{pro.distance}</p>
                      <p className="text-green-700 font-semibold text-xs mt-0.5">{pro.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {TRUST.map((t) => (
                <div key={t.title} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.title}</p>
                    <p className="text-gray-400 text-xs">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* My Bookings */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">My Bookings</p>
                <a href="#" className="text-xs text-green-600 font-semibold">View All</a>
              </div>
              <div className="flex flex-col gap-1">
                {[
                  { icon: "📅", label: "Upcoming", count: 3, color: "text-blue-600" },
                  { icon: "⏱️", label: "In Progress", count: 1, color: "text-orange-500" },
                  { icon: "✅", label: "Completed", count: 8, color: "text-green-600" },
                  { icon: "🚫", label: "Cancelled", count: 0, color: "text-red-400" },
                ].map((b) => (
                  <button key={b.label} className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{b.icon}</span>
                      <span className="text-sm text-gray-700">{b.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-sm font-bold ${b.color}`}>{b.count}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500" />
                    </div>
                  </button>
                ))}
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-1.5 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-700 font-semibold text-sm py-2.5 rounded-xl transition-colors">
                <Plus className="w-4 h-4" /> Book a Service
              </button>
            </div>

            {/* Become a Pro */}
            <div className="relative bg-green-800 rounded-2xl overflow-hidden p-4 text-white">
              <div className="absolute inset-0 opacity-30">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=50" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <p className="font-extrabold text-base mb-1">Become a Pro</p>
                <p className="text-white/75 text-xs leading-snug mb-3">
                  Join thousands of professionals growing their business with GigaFix.
                </p>
                <Link href="/for-professionals">
                  <button className="bg-white text-green-800 font-bold text-xs px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                    Join as Professional
                  </button>
                </Link>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-0.5">Need Help?</p>
                <p className="text-gray-500 text-xs leading-snug mb-3">Our support team is always here for you.</p>
                <button className="flex items-center gap-1.5 text-green-600 font-semibold text-xs border border-green-200 rounded-lg px-3 py-1.5 hover:bg-green-50 transition-colors">
                  <Headphones className="w-3.5 h-3.5" /> Contact Support
                </button>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
