import { Search, Home, Star, MapPin } from "lucide-react";
import logoImage from "../assets/logo/Primary logo.png";

const professionals = [
  {
    name: "John Kamau",
    role: "Plumber",
    rating: "4.8",
    reviews: "1,200",
    distance: "2 km away",
    price: "From Ksh 1,200",
    color: "bg-blue-100",
    img: "https://i.pravatar.cc/48?img=11",
  },
  {
    name: "David Mwangi",
    role: "Electrician",
    rating: "4.7",
    reviews: "981",
    distance: "0.4 km away",
    price: "From Ksh 1,000",
    color: "bg-orange-100",
    img: "https://i.pravatar.cc/48?img=12",
  },
];

const categories = [
  { name: "Plumbing", icon: "🔧", color: "bg-blue-50" },
  { name: "Electrical", icon: "⚡", color: "bg-yellow-50" },
  { name: "Carpentry", icon: "🪚", color: "bg-orange-50" },
  { name: "Cleaning", icon: "🧹", color: "bg-purple-50" },
];

export default function PhoneMockup() {
  return (
    <div className="relative w-[230px] mx-auto">
      {/* Phone shell */}
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden h-[420px] relative">
          {/* Status bar */}
          <div className="bg-gray-900 text-white flex items-center justify-between px-5 py-1.5">
            <span className="text-[10px] font-semibold">9:41</span>
            <div className="w-16 h-4 bg-gray-900 rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-3.5 h-2 border border-white rounded-sm relative">
                <div className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-white rounded-xs" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="bg-gray-50 h-full overflow-y-auto px-3 py-2 pb-14 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            {/* App header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <img src={logoImage} alt="VOLTA" className="h-4 w-auto" />
              </div>
              <div className="flex items-center gap-0.5 bg-green-50 rounded-full px-2 py-0.5">
                <MapPin className="w-2.5 h-2.5 text-green-600" />
                <span className="text-[9px] text-green-700 font-medium">Ruiru, Kiambu Co...</span>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 border border-gray-200 mb-3">
              <Search className="w-3 h-3 text-gray-400" />
              <span className="text-[9px] text-gray-400">What service do you need today?</span>
            </div>

            {/* Hero banner */}
            <div className="rounded-xl overflow-hidden bg-green-700 mb-3 relative h-24">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=70"
                alt="professional"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 p-2">
                <p className="text-white text-[10px] font-bold leading-tight">Your home,<br />handled by<br />professionals.</p>
                <button className="mt-1 bg-white text-green-700 text-[8px] font-bold rounded px-2 py-0.5">
                  Book a Service
                </button>
              </div>
            </div>

            {/* Quick categories */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-bold text-gray-800">Quick Categories</span>
                <span className="text-[8px] text-green-600 font-medium">View all</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {categories.map((cat) => (
                  <div key={cat.name} className={`${cat.color} rounded-lg p-1.5 flex flex-col items-center gap-0.5`}>
                    <span className="text-lg leading-none">{cat.icon}</span>
                    <span className="text-[7px] text-gray-700 font-medium text-center leading-tight">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Near You */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-bold text-gray-800">Popular Near You</span>
                <span className="text-[8px] text-green-600 font-medium">View all</span>
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
                {professionals.map((pro) => (
                  <div key={pro.name} className="bg-white rounded-xl p-2 border border-gray-100 min-w-[110px] flex-shrink-0">
                    <img src={pro.img} alt={pro.name} className="w-full h-14 object-cover rounded-lg mb-1" />
                    <p className="text-[9px] font-bold text-gray-900 leading-tight">{pro.name}</p>
                    <p className="text-[8px] text-gray-500">{pro.role}</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-[8px] text-gray-700 font-medium">{pro.rating}</span>
                      <span className="text-[7px] text-gray-400">({pro.reviews})</span>
                    </div>
                    <p className="text-[7px] text-gray-400 mt-0.5">{pro.distance}</p>
                    <p className="text-[8px] text-green-700 font-semibold">{pro.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around px-3 py-1.5">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Search, label: "Find Services", active: false },
              { label: "My Bookings", active: false, isText: true },
              { label: "Deals", active: false, isText: true },
              { label: "Profile", active: false, isText: true },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-0.5 ${item.active ? "text-green-600" : "text-gray-400"}`}>
                <div className="w-3.5 h-3.5 rounded-sm bg-current opacity-70" style={{ opacity: 0.5 }} />
                <span className="text-[6px] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notch */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-10" />
    </div>
  );
}
