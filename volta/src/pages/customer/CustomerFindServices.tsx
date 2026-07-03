import { Search, MapPin, ChevronDown, SlidersHorizontal, Heart, CheckCircle, Star, LayoutGrid, List, ArrowRight } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

const CATEGORIES = ["All", "Plumbing", "Electrical", "Carpentry", "Cleaning", "Painting", "Landscaping", "HVAC", "Appliance Repair"];

const PROS = [
  {
    name: "John Kamau",    role: "Plumber",         rating: 4.8, reviews: 128,
    distance: "2.1 km away", price: "From KSh 1,200", status: "Online",  statusColor: "bg-green-500",
    avail: "Available Now",      availColor: "bg-green-50 text-green-700",
    img: "https://i.pravatar.cc/400?img=11",
  },
  {
    name: "David Mwangi",  role: "Electrician",      rating: 4.7, reviews: 96,
    distance: "2.4 km away", price: "From KSh 1,000", status: "Busy",    statusColor: "bg-orange-400",
    avail: "Available in 2 hrs", availColor: "bg-orange-50 text-orange-600",
    img: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Peter Ndungu",  role: "Mechanic",          rating: 4.6, reviews: 74,
    distance: "3.1 km away", price: "From KSh 1,500", status: "Online",  statusColor: "bg-green-500",
    avail: "Available Now",      availColor: "bg-green-50 text-green-700",
    img: "https://i.pravatar.cc/400?img=13",
  },
  {
    name: "Mary Wanjiku",  role: "Cleaner",           rating: 4.9, reviews: 53,
    distance: "1.8 km away", price: "From KSh 800",   status: "Online",  statusColor: "bg-green-500",
    avail: "Available Now",      availColor: "bg-green-50 text-green-700",
    img: "https://i.pravatar.cc/400?img=5",
  },
  {
    name: "James Gitahi",  role: "Carpenter",         rating: 4.7, reviews: 65,
    distance: "3.5 km away", price: "From KSh 1,100", status: "Offline", statusColor: "bg-gray-400",
    avail: "Available Tomorrow",availColor: "bg-gray-100 text-gray-500",
    img: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Daniel Mutua",  role: "Painter",           rating: 4.8, reviews: 49,
    distance: "2.7 km away", price: "From KSh 900",   status: "Online",  statusColor: "bg-green-500",
    avail: "Available Now",      availColor: "bg-green-50 text-green-700",
    img: "https://i.pravatar.cc/400?img=16",
  },
  {
    name: "Samuel Kirui",  role: "Landscaping",       rating: 4.6, reviews: 38,
    distance: "4.2 km away", price: "From KSh 1,300", status: "Online",  statusColor: "bg-green-500",
    avail: "Available Now",      availColor: "bg-green-50 text-green-700",
    img: "https://i.pravatar.cc/400?img=17",
  },
  {
    name: "Brian Otieno",  role: "HVAC Specialist",   rating: 4.7, reviews: 57,
    distance: "3.0 km away", price: "From KSh 1,600", status: "Busy",    statusColor: "bg-orange-400",
    avail: "Available in 1 hr",  availColor: "bg-orange-50 text-orange-600",
    img: "https://i.pravatar.cc/400?img=18",
  },
];

export default function CustomerFindServices() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomerNav active="Find Services" />

      <div className="max-w-screen-xl mx-auto px-6 py-8">

        {/* Page title */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Find Services</h1>
          <p className="text-gray-500 text-sm mt-1">Find trusted professionals for your home and business needs.</p>
        </div>

        {/* Search bar row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 focus-within:border-green-400 transition-colors shadow-sm">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search services or professionals..."
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 whitespace-nowrap shadow-sm">
            <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700 font-medium">Ruiru, Kiambu</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-7 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm">
            Search
          </button>
        </div>

        {/* Filters + view toggle row */}
        <div className="flex items-center justify-between mb-5">
          <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button className="px-3 py-2 hover:bg-gray-50 transition-colors border-r border-gray-200">
              <List className="w-4 h-4 text-gray-400" />
            </button>
            <button className="px-3 py-2 bg-green-600 transition-colors">
              <LayoutGrid className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
                i === 0
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-600">
            Showing <span className="font-bold text-gray-900">24</span> professionals
          </p>
          <div className="flex items-center gap-2">
            <div className="relative">
              <select className="appearance-none border border-gray-200 bg-white rounded-xl text-sm text-gray-700 pl-4 pr-9 py-2.5 outline-none font-medium cursor-pointer">
                <option>Sort by: Top Rated</option>
                <option>Sort by: Nearest</option>
                <option>Sort by: Price: Low to High</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none border border-gray-200 bg-white rounded-xl text-sm text-gray-700 pl-4 pr-9 py-2.5 outline-none font-medium cursor-pointer">
                <option>Availability: Any Time</option>
                <option>Available Now</option>
                <option>Today</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Professional cards — 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {PROS.map((pro) => (
            <div
              key={pro.name}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group flex"
              style={{ minHeight: "160px" }}
            >
              {/* Profile image */}
              <div className="relative w-44 flex-shrink-0">
                <img
                  src={pro.img}
                  alt={pro.name}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "160px" }}
                />
                {/* Status badge */}
                <div className={`absolute top-3 left-3 flex items-center gap-1 ${pro.statusColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {pro.status}
                </div>
                {/* Heart button */}
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                  <Heart className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>

              {/* Card content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name + verified */}
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="font-bold text-gray-900 text-base">{pro.name}</p>
                    <CheckCircle className="w-4 h-4 text-green-500 fill-green-500 flex-shrink-0" />
                  </div>
                  {/* Role */}
                  <p className="text-gray-500 text-sm mb-2">{pro.role}</p>
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">{pro.rating}</span>
                    <span className="text-sm text-gray-400">({pro.reviews} reviews)</span>
                  </div>
                  {/* Distance */}
                  <p className="text-gray-400 text-sm mb-2">{pro.distance}</p>
                  {/* Availability pill */}
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${pro.availColor}`}>
                    {pro.avail}
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-green-600 font-bold text-sm">{pro.price}</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust banner */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">All professionals are verified and background checked.</p>
              <p className="text-xs text-gray-500 mt-0.5">Your safety and satisfaction are our top priority.</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm px-4 py-2 hover:text-green-600 transition-colors whitespace-nowrap">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
