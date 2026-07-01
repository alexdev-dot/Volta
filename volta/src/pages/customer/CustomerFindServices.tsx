import { Search, MapPin, ChevronDown, SlidersHorizontal, Heart, CheckCircle, Star, LayoutGrid, List } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

const CATEGORIES = ["All", "Plumbing", "Electrical", "Carpentry", "Cleaning", "Painting", "Landscaping", "HVAC", "Appliance Repair"];

const PROS = [
  { name: "John Kamau", role: "Plumber", rating: 4.8, reviews: 128, distance: "2.1 km away", price: "From KSh 1,200", status: "Online", statusColor: "bg-green-500", avail: "Available Now", img: "https://i.pravatar.cc/200?img=11" },
  { name: "David Mwangi", role: "Electrician", rating: 4.7, reviews: 96, distance: "2.4 km away", price: "From KSh 1,000", status: "Busy", statusColor: "bg-orange-400", avail: "Available in 2 hrs", img: "https://i.pravatar.cc/200?img=12" },
  { name: "Peter Ndungu", role: "Mechanic", rating: 4.6, reviews: 74, distance: "3.1 km away", price: "From KSh 1,500", status: "Online", statusColor: "bg-green-500", avail: "Available Now", img: "https://i.pravatar.cc/200?img=13" },
  { name: "Mary Wanjiku", role: "Cleaner", rating: 4.9, reviews: 53, distance: "1.8 km away", price: "From KSh 800", status: "Online", statusColor: "bg-green-500", avail: "Available Now", img: "https://i.pravatar.cc/200?img=5" },
  { name: "James Gitahi", role: "Carpenter", rating: 4.7, reviews: 65, distance: "3.5 km away", price: "From KSh 1,100", status: "Offline", statusColor: "bg-gray-400", avail: "Available Tomorrow", img: "https://i.pravatar.cc/200?img=15" },
  { name: "Daniel Mutua", role: "Painter", rating: 4.8, reviews: 49, distance: "2.7 km away", price: "From KSh 900", status: "Online", statusColor: "bg-green-500", avail: "Available Now", img: "https://i.pravatar.cc/200?img=16" },
  { name: "Samuel Kirui", role: "Landscaping", rating: 4.6, reviews: 38, distance: "4.2 km away", price: "From KSh 1,300", status: "Online", statusColor: "bg-green-500", avail: "Available Now", img: "https://i.pravatar.cc/200?img=17" },
  { name: "Brian Otieno", role: "HVAC Specialist", rating: 4.7, reviews: 57, distance: "3.0 km away", price: "From KSh 1,600", status: "Busy", statusColor: "bg-orange-400", avail: "Available in 1 hr", img: "https://i.pravatar.cc/200?img=18" },
];

export default function CustomerFindServices() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Find Services" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold text-gray-900">Find Services</h1>
          <p className="text-gray-500 text-sm mt-0.5">Find trusted professionals for your home and business needs.</p>
        </div>

        {/* Search bar */}
        <div className="flex flex-col gap-2 mb-4">
          {/* Row 1: search + location + search button */}
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-green-400 transition-colors min-w-0">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Search services or professionals..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-2.5 whitespace-nowrap flex-shrink-0">
              <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">Ruiru, Kiambu</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap flex-shrink-0">Search</button>
          </div>
          {/* Row 2: filters + view toggle */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="flex items-center gap-1.5 ml-auto text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-green-600 sm:hidden" />
              <span className="sm:hidden text-xs text-gray-500 truncate max-w-[140px]">Ruiru, Kiambu</span>
            </div>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white ml-auto sm:ml-0">
              <button className="px-3 py-2 hover:bg-gray-50 transition-colors border-r border-gray-200">
                <List className="w-4 h-4 text-gray-500" />
              </button>
              <button className="px-3 py-2 bg-green-600 text-white transition-colors">
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
              i === 0 ? "bg-green-600 text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-green-400 hover:text-green-600"
            }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">Showing <span className="font-bold text-gray-900">24</span> professionals</p>
          <div className="flex items-center gap-2">
            <div className="relative">
              <select className="appearance-none border border-gray-200 bg-white rounded-lg text-sm text-gray-600 pl-3 pr-8 py-2 outline-none">
                <option>Sort by: Top Rated</option>
                <option>Sort by: Nearest</option>
                <option>Sort by: Price: Low to High</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none border border-gray-200 bg-white rounded-lg text-sm text-gray-600 pl-3 pr-8 py-2 outline-none">
                <option>Availability: Any Time</option>
                <option>Available Now</option>
                <option>Today</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Pro grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {PROS.map((pro) => (
            <div key={pro.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img src={pro.img} alt={pro.name} className="w-full h-44 object-cover" />
                <div className={`absolute top-3 left-3 flex items-center gap-1 ${pro.statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {pro.status}
                </div>
                <button className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-400 transition-colors" />
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1 mb-0.5">
                  <p className="font-bold text-gray-900 text-sm">{pro.name}</p>
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-green-500 flex-shrink-0" />
                </div>
                <p className="text-gray-500 text-xs mb-1">{pro.role}</p>
                <div className="flex items-center gap-1 mb-0.5">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-gray-800">{pro.rating}</span>
                  <span className="text-xs text-gray-400">({pro.reviews} reviews)</span>
                </div>
                <p className="text-gray-400 text-xs mb-1">{pro.distance}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${pro.status === "Online" ? "bg-green-50 text-green-700" : pro.status === "Busy" ? "bg-orange-50 text-orange-600" : "bg-gray-100 text-gray-500"}`}>
                    {pro.avail}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-green-700 font-semibold text-xs">{pro.price}</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 fill-green-100" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">All professionals are verified and background checked.</p>
              <p className="text-xs text-gray-500">Your safety and satisfaction are our top priority.</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
