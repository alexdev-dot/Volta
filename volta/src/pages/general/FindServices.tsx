import { useState } from "react";
import {
  Search, MapPin, Star, CheckCircle, ArrowRight,
  Wrench, Droplets, Zap, Home, Car, Scissors,
  SlidersHorizontal, Filter, ChevronDown, Clock, Wifi
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import mapImg from "@/assets/map-view.png";

const CATEGORIES = [
  { id: "all",        label: "All Services",   icon: Home,     color: "bg-gray-100 text-gray-700", active: "bg-green-600 text-white" },
  { id: "plumbing",   label: "Plumbing",        icon: Droplets, color: "bg-blue-50 text-blue-700",  active: "bg-blue-600 text-white" },
  { id: "electrical", label: "Electrical",      icon: Zap,      color: "bg-yellow-50 text-yellow-700", active: "bg-yellow-500 text-white" },
  { id: "cleaning",   label: "Cleaning",        icon: Home,     color: "bg-green-50 text-green-700",   active: "bg-green-500 text-white" },
  { id: "mechanic",   label: "Mechanic",        icon: Car,      color: "bg-orange-50 text-orange-700", active: "bg-orange-500 text-white" },
  { id: "salon",      label: "Salon",           icon: Scissors, color: "bg-pink-50 text-pink-700",     active: "bg-pink-500 text-white" },
];

const SORT_OPTIONS = [
  { id: "nearby",  label: "Near Me",         icon: MapPin },
  { id: "rated",   label: "Top Rated",       icon: Star },
  { id: "fast",    label: "Fast Response",   icon: Clock },
  { id: "online",  label: "Online Now",      icon: Wifi },
];

const PROS = [
  {
    id: 1,
    name: "Peter Kamau",
    role: "Licensed Plumber",
    category: "plumbing",
    verified: true,
    rating: 4.9,
    reviews: 148,
    distance: "0.8 km away",
    responseTime: "~5 min",
    price: "KSh 350",
    unit: "/ hr",
    desc: "Certified plumber with 8+ years experience. Handles leaks, pipe installations, blocked drains and full bathroom setups.",
    status: "online",
    img: "https://i.pravatar.cc/80?img=51",
    jobs: 312,
    badge: "Top Pro",
  },
  {
    id: 2,
    name: "David Mwangi",
    role: "Electrician",
    category: "electrical",
    verified: true,
    rating: 4.8,
    reviews: 203,
    distance: "1.4 km away",
    responseTime: "~10 min",
    price: "KSh 500",
    unit: "/ hr",
    desc: "KPLC-certified electrician. Wiring, solar installations, security systems & emergency fault repairs.",
    status: "online",
    img: "https://i.pravatar.cc/80?img=12",
    jobs: 487,
    badge: "Verified Expert",
  },
  {
    id: 3,
    name: "Grace Njeri",
    role: "Home Cleaning Pro",
    category: "cleaning",
    verified: true,
    rating: 4.7,
    reviews: 89,
    distance: "2.1 km away",
    responseTime: "~20 min",
    price: "KSh 250",
    unit: "/ hr",
    desc: "Professional deep cleaning, move-in/move-out cleaning, and regular home maintenance packages.",
    status: "busy",
    img: "https://i.pravatar.cc/80?img=47",
    jobs: 156,
    badge: null,
  },
];

const NEARBY = [
  {
    name: "John Kariuki",
    role: "Mobile Mechanic",
    rating: 4.9,
    reviews: 64,
    distance: "0.5 km",
    price: "KSh 400/hr",
    img: "https://i.pravatar.cc/60?img=33",
    verified: true,
    online: true,
    featured: true,
  },
  {
    name: "Susan Wanjiku",
    role: "Home Cleaner",
    rating: 4.7,
    reviews: 42,
    distance: "1.2 km",
    price: "KSh 280/hr",
    img: "https://i.pravatar.cc/60?img=44",
    verified: true,
    online: true,
    featured: false,
  },
  {
    name: "Brian Odhiambo",
    role: "Electrician",
    rating: 4.6,
    reviews: 31,
    distance: "1.8 km",
    price: "KSh 450/hr",
    img: "https://i.pravatar.cc/60?img=15",
    verified: true,
    online: false,
    featured: false,
  },
  {
    name: "Mary Achieng",
    role: "Salon & Beauty",
    rating: 4.8,
    reviews: 78,
    distance: "2.3 km",
    price: "KSh 200/hr",
    img: "https://i.pravatar.cc/60?img=48",
    verified: false,
    online: true,
    featured: false,
  },
];

const POPULAR = [
  { icon: Droplets, label: "Emergency Plumber",    desc: "Available 24/7 · Fast response",   color: "bg-blue-50",   iconBg: "bg-blue-100",  iconColor: "text-blue-600",  count: "60+ pros" },
  { icon: Home,     label: "Home Deep Clean",       desc: "Full house · Move-in/out",          color: "bg-green-50",  iconBg: "bg-green-100", iconColor: "text-green-600", count: "45+ pros" },
  { icon: Car,      label: "Mobile Mechanic",       desc: "Repairs at your location",          color: "bg-orange-50", iconBg: "bg-orange-100",iconColor: "text-orange-500",count: "30+ pros" },
  { icon: Zap,      label: "Electrical Faults",     desc: "KPLC certified professionals",      color: "bg-yellow-50", iconBg: "bg-yellow-100",iconColor: "text-yellow-600",count: "55+ pros" },
  { icon: Wrench,   label: "General Repairs",       desc: "Doors, furniture, fixtures",        color: "bg-purple-50", iconBg: "bg-purple-100",iconColor: "text-purple-600",count: "40+ pros" },
  { icon: Scissors, label: "Salon at Home",         desc: "Cuts, braids, nails & more",        color: "bg-pink-50",   iconBg: "bg-pink-100",  iconColor: "text-pink-600",  count: "25+ pros" },
];

export default function FindServicesPage() {
  const [activeSort, setActiveSort] = useState("nearby");
  const [activeCat, setActiveCat] = useState("all");
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="min-h-screen bg-[#f4f6f8] font-sans">
      <Navbar active="Find Services" />

      {/* ── Hero Search Bar ── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            {/* Search input */}
            <div className="flex items-center gap-3 flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                type="text"
                placeholder="What service do you need? e.g. Plumbing..."
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>
            <div className="flex gap-2">
              {/* Location */}
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 flex-1 sm:flex-none sm:min-w-[180px] cursor-pointer hover:border-green-300 transition-colors">
                <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">Ruiru, Kiambu</span>
                <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
              </div>
              <button className="bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-sm shadow-green-200 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {/* Category chips */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all flex-shrink-0
                    ${isActive ? "bg-green-600 text-white border-green-600 shadow-sm" : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-700"}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-gray-200 bg-white text-gray-600 hover:border-green-300 flex-shrink-0 ml-auto">
              <Filter className="w-3.5 h-3.5" /> Filters
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-7xl mx-auto px-5 py-6">
        <div className="grid grid-cols-12 gap-5">

          {/* ─── LEFT: Sort + Provider List ─── */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">

            {/* Sort panel */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-bold text-gray-700">Sort By</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SORT_OPTIONS.map(opt => {
                  const Icon = opt.icon;
                  const isActive = activeSort === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActiveSort(opt.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border
                        ${isActive ? "bg-green-600 text-white border-green-600 shadow-sm" : "bg-gray-50 text-gray-600 border-gray-100 hover:border-green-300 hover:bg-green-50"}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-extrabold text-gray-900">Available Services</h2>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Ruiru, Kiambu · {PROS.length} providers found
                </p>
              </div>
              <span className="text-xs text-green-600 font-semibold cursor-pointer hover:underline">View all</span>
            </div>

            {/* Provider cards */}
            <div className="flex flex-col gap-3">
              {PROS.map((pro, idx) => (
                <div
                  key={pro.id}
                  className={`bg-white rounded-2xl border p-4 hover:shadow-md cursor-pointer transition-all group
                    ${idx === 0 ? "border-green-300 ring-1 ring-green-100" : "border-gray-200 hover:border-green-200"}`}
                >
                  {/* Top row */}
                  <div className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <img src={pro.img} alt={pro.name} className="w-14 h-14 rounded-xl object-cover" />
                      {/* Online dot */}
                      <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${pro.status === "online" ? "bg-green-500" : "bg-orange-400"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-sm font-bold text-gray-900">{pro.name}</span>
                            {pro.verified && <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-green-100 flex-shrink-0" />}
                            {pro.badge && (
                              <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                                {pro.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{pro.role}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-extrabold text-green-700">{pro.price}<span className="text-xs font-normal text-gray-400">{pro.unit}</span></p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-bold text-gray-800">{pro.rating}</span>
                          <span className="text-xs text-gray-400">({pro.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" />{pro.distance}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />{pro.responseTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mt-3 line-clamp-2">{pro.desc}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{pro.jobs} jobs completed</span>
                    <button className="text-xs font-bold text-white bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── CENTER: Real Map Image — full bleed ─── */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 lg:sticky lg:top-4" style={{ height: 'min(560px, 70vw)', minHeight: 280 }}>
              {/* Map image — covers entire section */}
              <img
                src={mapImg}
                alt="Map view of service providers in Ruiru, Kiambu"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Top-left: title + location overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md">
                <h2 className="text-sm font-extrabold text-gray-900">Map View</h2>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-green-500" /> Ruiru, Kiambu
                </p>
              </div>

              {/* Top-right: Live badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-green-200 rounded-full px-3 py-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-green-700">Live</span>
              </div>

              {/* Bottom-left: legend overlay */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md flex items-center gap-4">
                {[
                  { color: "bg-green-600",  label: "Cleaning" },
                  { color: "bg-blue-500",   label: "Plumbing" },
                  { color: "bg-purple-600", label: "Electrical" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-xs text-gray-700 font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom-right: expand button */}
              <button className="absolute bottom-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl shadow-md flex items-center justify-center hover:bg-white transition-colors border border-gray-200">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>

          {/* ─── RIGHT: Nearby Highlights ─── */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
            <div>
              <h2 className="text-base font-extrabold text-gray-900">Nearby Highlights</h2>
              <p className="text-xs text-gray-400 mt-0.5">Featured pros close to you</p>
            </div>

            {NEARBY.map((pro, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border p-3.5 cursor-pointer hover:shadow-md transition-all
                  ${pro.featured ? "border-green-300 ring-1 ring-green-100" : "border-gray-200 hover:border-green-200"}`}
              >
                {pro.featured && (
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="text-[10px] font-extrabold text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 uppercase tracking-wide">⭐ Featured</span>
                  </div>
                )}
                <div className="flex items-center gap-2.5">
                  <div className="relative flex-shrink-0">
                    <img src={pro.img} alt={pro.name} className="w-12 h-12 rounded-xl object-cover" />
                    <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${pro.online ? "bg-green-500" : "bg-gray-300"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold text-gray-900 truncate">{pro.name}</p>
                      {pro.verified && <CheckCircle className="w-3 h-3 text-green-500 fill-green-100 flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-gray-500">{pro.role}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-700">{pro.rating}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-400">{pro.distance}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs font-bold text-green-700">{pro.price}</span>
                  <button className="text-xs font-bold bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}

            {/* Quick stats card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-4 text-white mt-1">
              <p className="text-xs font-bold text-green-100 mb-3 uppercase tracking-wide">Available Right Now</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Pros Online", value: "24" },
                  { label: "Avg Response", value: "8 min" },
                  { label: "Jobs Today", value: "47" },
                  { label: "Avg Rating", value: "4.8★" },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/10 rounded-xl px-3 py-2">
                    <p className="text-lg font-extrabold">{stat.value}</p>
                    <p className="text-[10px] text-green-100 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Popular Services Strip ── */}
        <section className="mt-10">
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Most Popular in <span className="text-green-600">Ruiru</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">High-demand, top-rated services near you</p>
            </div>
            <button className="text-sm font-bold text-green-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POPULAR.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 ${item.color} border border-transparent rounded-2xl px-5 py-4 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group`}
                >
                  <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    <p className="text-xs font-semibold text-green-700 mt-1">{item.count}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <CtaBanner />
    </div>
  );
}
