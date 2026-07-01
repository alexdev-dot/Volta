import { Link } from "wouter";
import { CheckCircle, Search, Star, ArrowRight, MapPin, Wrench, Zap, Hammer } from "lucide-react";

const popularServices = [
  { name: "Plumbing", icon: "🔧", color: "bg-blue-50 text-blue-600" },
  { name: "Electrical", icon: "⚡", color: "bg-yellow-50 text-yellow-600" },
  { name: "Carpentry", icon: "🪚", color: "bg-orange-50 text-orange-600" },
  { name: "Cleaning", icon: "🧹", color: "bg-purple-50 text-purple-600" },
  { name: "Construction", icon: "🏗️", color: "bg-gray-50 text-gray-600" },
  { name: "Mechanics", icon: "🔩", color: "bg-red-50 text-red-600" },
];

export default function CustomerWelcome() {
  const stored = localStorage.getItem("gigafix_user");
  const user = stored ? JSON.parse(stored) : null;
  const firstName = user?.firstName || "there";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-7 h-7 bg-green-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">GF</span>
              </div>
              <span className="text-gray-900 font-bold text-base">Giga<span className="text-green-600">Fix</span></span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-full px-3 py-1.5">
              <MapPin className="w-4 h-4 text-green-600" />
              <span>{user?.location || "Nairobi, Kenya"}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{firstName[0]?.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Welcome card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -right-4 top-12 w-24 h-24 bg-white/10 rounded-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-300 fill-green-300" />
              <span className="text-green-200 text-sm font-semibold">Account Created Successfully</span>
            </div>
            <h1 className="text-3xl font-extrabold mb-2">Welcome, {firstName}! 🎉</h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Your GigaFix account is ready. You can now find and book trusted professionals for any home service in your area.
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-8 shadow-sm">
          <p className="text-sm font-bold text-gray-800 mb-3">What service do you need today?</p>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Plumber, Electrician, Cleaner..."
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors">
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Popular services */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-gray-900">Popular Services</h2>
            <a href="#" className="text-sm text-green-600 font-semibold flex items-center gap-1 hover:text-green-700">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {popularServices.map((s) => (
              <button
                key={s.name}
                className={`${s.color} rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow cursor-pointer`}
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs font-semibold">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* How it works quick */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-extrabold text-gray-900 mb-4">How to Book</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { step: "1", title: "Choose a Service", desc: "Select from 50+ categories", icon: "🔍" },
              { step: "2", title: "Pick a Pro", desc: "Compare ratings and prices", icon: "👤" },
              { step: "3", title: "Book & Relax", desc: "Confirm your booking time", icon: "✅" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-2 text-2xl">
                  {item.icon}
                </div>
                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick ratings */}
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <div className="flex">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span>4.8 · 2,300+ reviews · Trusted by 5,000+ Kenyans</span>
        </div>
      </div>
    </div>
  );
}
