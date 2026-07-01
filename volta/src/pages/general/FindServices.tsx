import { useState } from "react";
import { Search, MapPin, ChevronDown, Star, CheckCircle, ArrowRight, Zap, Wrench, Droplets, Bolt, Wind, Hammer, Leaf, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";

const CATEGORIES = [
  { id: "plumbing", label: "Plumbing", color: "bg-blue-500", icon: Droplets },
  { id: "electrical", label: "Electrical", color: "bg-yellow-500", icon: Bolt },
  { id: "carpentry", label: "Carpentry", color: "bg-amber-600", icon: Hammer },
  { id: "cleaning", label: "Cleaning", color: "bg-green-500", icon: Home },
];

const PROS = [
  {
    id: 1,
    name: "Peter Kamau",
    role: "Plumber",
    verified: true,
    rating: 4.9,
    reviews: 48,
    distance: "1.2km away",
    price: "KSh 300",
    priceLabel: "From KSh 300 hourly",
    desc: "Fix leaks, pipes, I short-root service, servicer, cassermers and cleaning.",
    status: "online",
    category: "plumbing",
    img: "https://i.pravatar.cc/80?img=51",
    avatars: ["https://i.pravatar.cc/30?img=1","https://i.pravatar.cc/30?img=2","https://i.pravatar.cc/30?img=3"],
    count: "60+",
  },
  {
    id: 2,
    name: "David Mwangi",
    role: "Electrician",
    verified: true,
    rating: 4.7,
    reviews: 98,
    distance: "1.2km away",
    price: "KSh 400",
    priceLabel: "From KSh 400 hourly",
    desc: "A home cennonments, homer, homeor office cleaning nusictomers and relax...",
    status: "online",
    category: "electrical",
    img: "https://i.pravatar.cc/80?img=52",
    avatars: ["https://i.pravatar.cc/30?img=4","https://i.pravatar.cc/30?img=5","https://i.pravatar.cc/30?img=6"],
    count: "60+",
    highlight: "Cleaning",
  },
  {
    id: 3,
    name: "Peter Kamau",
    role: "Plumber",
    verified: true,
    rating: 4.9,
    reviews: 98,
    distance: "1.2km away",
    price: "KSh 400",
    priceLabel: "From KSh 400 hourly",
    desc: "Finert sens pipes, aspert, homeor office cleaning nustorners and renovatie...",
    status: "busy",
    category: "cleaning",
    img: "https://i.pravatar.cc/80?img=53",
    avatars: ["https://i.pravatar.cc/30?img=7","https://i.pravatar.cc/30?img=8","https://i.pravatar.cc/30?img=9"],
    count: "60+",
    highlight: "Cleaning",
  },
];

const NEARBY = [
  { name: "Peter Kamau", role: "Plumber", rating: 4.9, dist: "away", featured: true, price: "From Khh hourly", img: "https://i.pravatar.cc/60?img=51", verified: true },
  { name: "David Mwangi", role: "Electrician", rating: 4.7, dist: "4.7k away", featured: false, price: "From KSh 300 mote", img: "https://i.pravatar.cc/60?img=52", verified: true },
  { name: "Mobile Mechanic", role: "Repairs & mechanic", rating: 4.7, dist: "4.7k away", featured: false, price: "From KSh 300 mote", img: "https://i.pravatar.cc/60?img=53", verified: false },
];

const POPULAR = [
  { icon: Droplets, label: "Emergency Plumber", desc: "Fix piaps, leams and & more", color: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: Home, label: "Professional Cleaning", desc: "Home issuet you with verified cleaning", color: "bg-green-100", iconColor: "text-green-600" },
  { icon: Wrench, label: "Mobile Mechanic", desc: "Car repairs & maint a maintenance", color: "bg-orange-100", iconColor: "text-orange-500" },
  { icon: CheckCircle, label: "Relax & Enjoy", desc: "Sit backhole with the handle the rest", color: "bg-purple-100", iconColor: "text-purple-600" },
];

const MAP_PINS = [
  { x: 38, y: 25, cat: "plumbing" },
  { x: 55, y: 18, cat: "plumbing" },
  { x: 70, y: 30, cat: "plumbing" },
  { x: 62, y: 42, cat: "electrical" },
  { x: 78, y: 48, cat: "electrical" },
  { x: 48, y: 52, cat: "electrical" },
  { x: 30, y: 60, cat: "cleaning" },
  { x: 58, y: 65, cat: "cleaning" },
  { x: 42, y: 72, cat: "cleaning" },
  { x: 68, y: 72, cat: "plumbing" },
  { x: 25, y: 40, cat: "electrical" },
];

const SORT_OPTIONS = ["Near Me", "Top Rated", "Price (Low-High)", "Filters"];
const DISTANCES = ["2km", "5km", "10km"];

export default function FindServicesPage() {
  const [activeSort, setActiveSort] = useState("Near Me");
  const [activeDist, setActiveDist] = useState("2km");
  const [searchVal, setSearchVal] = useState("AC Repair");

  const catColorMap: Record<string, string> = {
    plumbing: "bg-blue-500",
    electrical: "bg-yellow-400",
    cleaning: "bg-purple-500",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar active="Find Services" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-5">Find Services</h1>

        {/* Search bar */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2 flex-1 min-w-[160px]">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              type="text"
              placeholder="AC Repair"
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-1.5 border-l border-gray-200 pl-3">
            {CATEGORIES.map(c => (
              <button key={c.id} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5 hover:border-green-400 hover:text-green-700 transition-colors whitespace-nowrap bg-white">
                {c.label} <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
            {DISTANCES.map(d => (
              <button
                key={d}
                onClick={() => setActiveDist(d)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors ${activeDist === d ? "bg-green-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}
              >
                {d}
              </button>
            ))}
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2 rounded-xl transition-colors">
            Search
          </button>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-12 gap-5">
          {/* LEFT: Sort + Pro list */}
          <div className="col-span-12 lg:col-span-4">
            {/* Sort by */}
            <div className="mb-4">
              <p className="text-xs font-bold text-gray-500 uppercase mb-2">Sort by</p>
              <div className="flex flex-col gap-1">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => setActiveSort(opt)}
                    className={`text-left text-sm font-semibold px-3 py-2 rounded-lg transition-colors ${activeSort === opt ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Available services header */}
            <div className="mb-3">
              <h2 className="text-base font-extrabold text-gray-900">Available Services</h2>
              <p className="text-xs text-gray-500">in Ruiru, Kiambu</p>
            </div>

            {/* Pro list */}
            <div className="space-y-3">
              {PROS.map((pro, idx) => (
                <div key={pro.id} className={`bg-white rounded-2xl border p-3 hover:shadow-md transition-shadow cursor-pointer ${idx === 0 ? "border-green-300 ring-1 ring-green-200" : "border-gray-100"}`}>
                  <div className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <img src={pro.img} alt={pro.name} className="w-16 h-16 rounded-xl object-cover" />
                      {pro.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <CheckCircle className="w-3 h-3 text-white fill-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-gray-900">{pro.name}</span>
                            <div className="flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-semibold text-gray-700">{pro.rating}</span>
                              <span className="text-xs text-gray-400">({pro.reviews})</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">{pro.role}</p>
                          <p className="text-xs text-gray-400">{pro.distance}</p>
                        </div>
                      </div>
                      {pro.highlight && (
                        <span className="inline-block text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 mt-1 mb-1">
                          {pro.highlight}
                        </span>
                      )}
                      <p className="text-[11px] text-gray-500 leading-relaxed mt-1 line-clamp-2">{pro.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-1">
                        {pro.avatars.map((a, i) => (
                          <img key={i} src={a} alt="" className="w-5 h-5 rounded-full border-2 border-white object-cover" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-semibold">{pro.count}</span>
                    </div>
                    <span className="text-xs font-bold text-green-700">{pro.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Map */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-full">
              <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-sm font-bold text-gray-900">Map View</h2>
                <p className="text-xs text-gray-500">in Ruiru, Kiambu</p>
              </div>
              {/* Map legend */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                {[["bg-blue-500","Plumbing"],["bg-yellow-400","Electrical"],["bg-purple-500","Cleaning"]].map(([color, label]) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                    <span className="text-xs text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
              {/* Map visual */}
              <div className="relative bg-[#e8f0e4] overflow-hidden" style={{ height: 340 }}>
                {/* Road grid */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="45" x2="100" y2="45" stroke="#c8d8c0" strokeWidth="2.5" />
                  <line x1="0" y1="62" x2="100" y2="62" stroke="#c8d8c0" strokeWidth="1.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#c8d8c0" strokeWidth="2" />
                  <line x1="30" y1="0" x2="30" y2="100" stroke="#c8d8c0" strokeWidth="1" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="#c8d8c0" strokeWidth="1" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="#c8d8c0" strokeWidth="1" />
                  <rect x="35" y="48" width="30" height="12" rx="1" fill="#d4e8cc" stroke="#c8d8c0" strokeWidth="0.5" />
                  <rect x="20" y="30" width="15" height="10" rx="1" fill="#d4e8cc" stroke="#c8d8c0" strokeWidth="0.5" />
                  <rect x="62" y="28" width="18" height="12" rx="1" fill="#d4e8cc" stroke="#c8d8c0" strokeWidth="0.5" />
                </svg>
                {/* Ruiru label */}
                <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-gray-600 pointer-events-none">
                  Ruiru
                </div>
                {/* Map pins */}
                {MAP_PINS.map((pin, i) => (
                  <div
                    key={i}
                    className={`absolute w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform ${catColorMap[pin.cat]}`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                ))}
                {/* Map controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                  <button className="w-7 h-7 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold text-base hover:bg-gray-50">+</button>
                  <button className="w-7 h-7 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-700 font-bold text-base hover:bg-gray-50">−</button>
                </div>
                <div className="absolute bottom-2 left-2 text-[9px] text-gray-400">Map data ©2022 Google · Terms of Use</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Nearby highlights */}
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-sm font-extrabold text-gray-900 mb-0.5">Nearby Service Highlights</h2>
            <p className="text-xs text-gray-400 mb-4">Featured, discounted, local pros</p>
            <div className="space-y-3">
              {NEARBY.map((pro, idx) => (
                <div key={idx} className={`bg-white rounded-2xl border p-3 hover:shadow-md transition-shadow cursor-pointer ${idx === 0 ? "border-green-300 ring-1 ring-green-100" : "border-gray-100"}`}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="relative">
                      <img src={pro.img} alt={pro.name} className="w-11 h-11 rounded-xl object-cover" />
                      {pro.verified && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <CheckCircle className="w-2.5 h-2.5 text-white fill-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{pro.name}</p>
                      <p className="text-xs text-gray-500">{pro.role}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-700">{pro.rating}</span>
                        <span className="text-xs text-gray-400">{pro.dist}</span>
                      </div>
                    </div>
                  </div>
                  {idx === 0 && (
                    <div className="bg-green-50 rounded-lg px-2 py-1 mb-2">
                      <p className="text-[10px] font-bold text-green-700">Featured Services</p>
                    </div>
                  )}
                  <p className="text-xs font-semibold text-green-700">{pro.price}</p>
                  <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-1.5 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Popular Services */}
        <section className="mt-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">
            Most Popular Services in <span className="text-green-600">Ruiru</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5">High-demand, top-rated services near you</p>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {POPULAR.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex-shrink-0 flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-4 hover:shadow-md transition-shadow cursor-pointer min-w-[220px] group">
                  <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-400 leading-tight">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors flex-shrink-0" />
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
