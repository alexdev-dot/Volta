import { Search, MapPin, ChevronDown, SlidersHorizontal, Heart, CheckCircle, Check, Star, LayoutGrid, List, ArrowRight } from "lucide-react";
import { useState } from "react";
import CustomerNav from "@/components/navigation/CustomerNav";
import ProfileSidebar from "@/components/customer/ProfileSidebar";

const CATEGORIES = ["All", "Plumbing", "Electrical", "Carpentry", "Cleaning", "Painting", "Landscaping", "HVAC", "Appliance Repair"];

const PROS = [
  { name: "John Kamau",   role: "Plumber",        rating: 4.8, reviews: 128, distance: "2.1 km away", price: "From KSh 1,200", status: "Online",  statusColor: "bg-green-500",  avail: "Available Now",       availColor: "bg-green-50 text-green-700",   img: "https://i.pravatar.cc/400?img=11" },
  { name: "David Mwangi", role: "Electrician",    rating: 4.7, reviews: 96,  distance: "2.4 km away", price: "From KSh 1,000", status: "Busy",    statusColor: "bg-orange-400", avail: "Available in 2 hrs",  availColor: "bg-orange-50 text-orange-600", img: "https://i.pravatar.cc/400?img=12" },
  { name: "Peter Ndungu", role: "Mechanic",       rating: 4.6, reviews: 74,  distance: "3.1 km away", price: "From KSh 1,500", status: "Online",  statusColor: "bg-green-500",  avail: "Available Now",       availColor: "bg-green-50 text-green-700",   img: "https://i.pravatar.cc/400?img=13" },
  { name: "Mary Wanjiku", role: "Cleaner",        rating: 4.9, reviews: 53,  distance: "1.8 km away", price: "From KSh 800",   status: "Online",  statusColor: "bg-green-500",  avail: "Available Now",       availColor: "bg-green-50 text-green-700",   img: "https://i.pravatar.cc/400?img=5"  },
  { name: "James Gitahi", role: "Carpenter",      rating: 4.7, reviews: 65,  distance: "3.5 km away", price: "From KSh 1,100", status: "Offline", statusColor: "bg-gray-400",   avail: "Available Tomorrow",  availColor: "bg-gray-100 text-gray-500",    img: "https://i.pravatar.cc/400?img=15" },
  { name: "Daniel Mutua", role: "Painter",        rating: 4.8, reviews: 49,  distance: "2.7 km away", price: "From KSh 900",   status: "Online",  statusColor: "bg-green-500",  avail: "Available Now",       availColor: "bg-green-50 text-green-700",   img: "https://i.pravatar.cc/400?img=16" },
  { name: "Samuel Kirui", role: "Landscaping",    rating: 4.6, reviews: 38,  distance: "4.2 km away", price: "From KSh 1,300", status: "Online",  statusColor: "bg-green-500",  avail: "Available Now",       availColor: "bg-green-50 text-green-700",   img: "https://i.pravatar.cc/400?img=17" },
  { name: "Brian Otieno", role: "HVAC Specialist",rating: 4.7, reviews: 57,  distance: "3.0 km away", price: "From KSh 1,600", status: "Busy",    statusColor: "bg-orange-400", avail: "Available in 1 hr",   availColor: "bg-orange-50 text-orange-600", img: "https://i.pravatar.cc/400?img=18" },
];

export default function CustomerFindServices() {
  const [selectedPro, setSelectedPro] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleViewProfile = (pro: any) => {
    setSelectedPro(pro);
    setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomerNav active="Find Services" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Page title */}
        <div className="mb-5 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Find Services</h1>
          <p className="text-gray-500 text-sm mt-1">Find trusted professionals for your home and business needs.</p>
        </div>

        {/* Search bar — stacks on mobile */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3 mb-4">
          <div className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 focus-within:border-green-400 transition-colors shadow-sm">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input type="text" placeholder="Search services or professionals..."
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm flex-1 sm:flex-none whitespace-nowrap">
              <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">Ruiru, Kiambu</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 sm:px-7 py-3 rounded-xl transition-colors whitespace-nowrap shadow-sm flex-shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Filters + view toggle row */}
        <div className="flex items-center justify-between mb-4">
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

        {/* Category pills — horizontally scrollable */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 sm:mb-6 scrollbar-hide">
          {CATEGORIES.map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
              i === 0 ? "bg-green-600 text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-green-400 hover:text-green-600"
            }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Results header — stacks on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <p className="text-sm text-gray-600">
            Showing <span className="font-bold text-gray-900">24</span> professionals
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative flex-1 sm:flex-none">
              <select className="appearance-none w-full border border-gray-200 bg-white rounded-xl text-sm text-gray-700 pl-3 pr-9 py-2.5 outline-none font-medium cursor-pointer">
                <option>Sort by: Top Rated</option>
                <option>Sort by: Nearest</option>
                <option>Sort by: Price: Low to High</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative flex-1 sm:flex-none">
              <select className="appearance-none w-full border border-gray-200 bg-white rounded-xl text-sm text-gray-700 pl-3 pr-9 py-2.5 outline-none font-medium cursor-pointer">
                <option>Availability: Any Time</option>
                <option>Available Now</option>
                <option>Today</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Professional cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {PROS.map((pro) => (
            <div key={pro.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group flex min-h-[140px] sm:min-h-[160px]">
              {/* Profile image — smaller on mobile */}
              <div className="relative w-28 sm:w-44 flex-shrink-0">
                <img src={pro.img} alt={pro.name} className="w-full h-full object-cover" />
                <div className={`absolute top-2 left-2 flex items-center gap-1 ${pro.statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {pro.status}
                </div>
                <button className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                  <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" />
                </button>
              </div>

              {/* Card content */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <p className="font-bold text-gray-900 text-sm sm:text-base truncate">{pro.name}</p>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mb-1.5 sm:mb-2">{pro.role}</p>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-bold text-gray-900">{pro.rating}</span>
                    <span className="text-xs text-gray-400 hidden sm:inline">({pro.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1.5 sm:mb-2">{pro.distance}</p>
                  <span className={`inline-block text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${pro.availColor}`}>
                    {pro.avail}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2 sm:mt-3">
                  <p className="text-green-600 font-bold text-xs sm:text-sm">{pro.price}</p>
                  <button 
                    onClick={() => handleViewProfile(pro)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner — stacks on mobile */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">All professionals are verified and background checked.</p>
              <p className="text-xs text-gray-500 mt-0.5">Your safety and satisfaction are our top priority.</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-gray-700 font-semibold text-sm px-4 py-2 hover:text-green-600 transition-colors whitespace-nowrap self-end sm:self-auto">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Profile Sidebar */}
      <ProfileSidebar 
        professional={selectedPro}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
