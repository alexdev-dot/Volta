import { Search, SlidersHorizontal, Plus, MapPin, Calendar, Bookmark, ChevronRight, Lightbulb, Bell, CheckCircle2, ExternalLink } from "lucide-react";
import ProNav from "@/components/navigation/ProNav";

const CATEGORIES = [
  { label: "All Categories", icon: "🗂️" },
  { label: "Plumbing",       icon: "💧" },
  { label: "Electrical",     icon: "⚡" },
  { label: "Carpentry",      icon: "🪚" },
  { label: "Cleaning",       icon: "🧹" },
  { label: "Painting",       icon: "🖌️" },
  { label: "Landscaping",    icon: "🌿" },
  { label: "HVAC",           icon: "❄️" },
  { label: "Appliance Repair", icon: "⚙️" },
];

const JOBS = [
  {
    bg: "bg-blue-100", emoji: "🚿",
    badge: "New", urgent: true,
    title: "Emergency Kitchen Sink Repair & Pipe Leak Fix",
    desc: "Our kitchen sink drain pipe has a major crack underneath the counter, and water is pooling on the floor whenever the tap runs. The shut-off valve is also stuck and rusty.",
    location: "Kihunguro, Ruiru (Near the bypass junction)",
    posted: "2 hours ago", tag: "Plumbing", tagColor: "bg-blue-50 text-blue-600",
    budget: "KSh 2,500",
  },
  {
    bg: "bg-yellow-50", emoji: "💡",
    badge: "New", urgent: false,
    title: "Install Ceiling Lights",
    desc: "Need a professional electrician to install 6 recessed ceiling lights in the living room and kitchen area. Wiring is already in place. Must ensure clean finish and working dimmer switches.",
    location: "Westlands, Nairobi",
    posted: "4 hours ago", tag: "Electrical", tagColor: "bg-blue-50 text-blue-600",
    budget: "KSh 3,000",
  },
  {
    bg: "bg-purple-50", emoji: "🧹",
    badge: null, urgent: false,
    title: "Deep House Cleaning",
    desc: "Looking for a reliable cleaning professional for a thorough deep cleaning of a 3-bedroom house. Includes kitchen, bathrooms, windows, and floors.",
    location: "Kilimani, Nairobi",
    posted: "6 hours ago", tag: "Cleaning", tagColor: "bg-green-50 text-green-600",
    budget: "KSh 4,000",
  },
  {
    bg: "bg-orange-50", emoji: "🖌️",
    badge: null, urgent: false,
    title: "Interior Wall Painting",
    desc: "Need a professional painter to paint 2 bedrooms and the living room. Walls are in good condition. Use high-quality paint with a smooth finish.",
    location: "Thika Road, Nairobi",
    posted: "8 hours ago", tag: "Painting", tagColor: "bg-pink-50 text-pink-600",
    budget: "KSh 5,000",
  },
];

const RECOMMENDED = [
  { emoji: "🚪", bg: "bg-orange-50",  title: "Fix Wooden Door",        location: "Karen, Nairobi",    budget: "KSh 1,800", tag: "Carpentry",      tagColor: "bg-orange-50 text-orange-600" },
  { emoji: "⚙️",  bg: "bg-purple-50", title: "Washing Machine Repair",  location: "Kasarani, Nairobi", budget: "KSh 2,000", tag: "Appliance Repair", tagColor: "bg-purple-50 text-purple-600" },
  { emoji: "🌿", bg: "bg-green-50",  title: "Garden Maintenance",       location: "Runda, Nairobi",    budget: "KSh 2,500", tag: "Landscaping",    tagColor: "bg-green-50 text-green-700" },
];

const PRO_TIPS = [
  "Respond quickly to new jobs",
  "Keep your profile updated",
  "Deliver quality service",
  "Get good reviews to grow",
];

const STATS = [
  { emoji: "💼", value: "28", label: "Available Jobs",  sub: "Total open",    bg: "bg-green-50" },
  { emoji: "🕐", value: "6",  label: "New Today",       sub: "Posted today",  bg: "bg-orange-50" },
  { emoji: "✅", value: "3",  label: "Applied",         sub: "Jobs applied",  bg: "bg-purple-50" },
  { emoji: "🔖", value: "1",  label: "Saved",           sub: "Jobs saved",    bg: "bg-blue-50" },
];

export default function ProJobFeed() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ProNav active="Job Feed" />

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-5 flex flex-col gap-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">Job Feed</h1>
            <p className="text-sm text-gray-500 mt-0.5">Discover new jobs posted by customers and grow your business.</p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors self-start sm:self-auto flex-shrink-0">
            <Plus className="w-4 h-4" /> New Job Alert
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2 sm:gap-3">
          <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 focus-within:border-green-400 transition-colors">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input type="text" placeholder="Search by job title, description or location…" className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
          </div>
          <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-3 sm:px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map((cat, i) => (
            <button key={cat.label} className={`flex items-center gap-1.5 whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
              i === 0 ? "bg-green-600 text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-green-400 hover:text-green-600"
            }`}>
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {STATS.map(s => (
                <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <div className={`${s.bg} w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg sm:text-xl`}>{s.emoji}</div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight truncate">{s.label}</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 hidden sm:block">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Job cards */}
            <div className="flex flex-col gap-3">
              {JOBS.map(job => (
                <div key={job.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row">
                    {/* Image thumbnail — full width on mobile, fixed width on sm+ */}
                    <div className={`${job.bg} sm:w-44 h-32 sm:h-auto flex-shrink-0 flex items-center justify-center text-5xl sm:text-5xl`}>
                      {job.emoji}
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            {job.badge && <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{job.badge}</span>}
                            {job.urgent && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-500">Urgent</span>}
                          </div>
                          <p className="font-bold text-gray-900 text-sm leading-tight mb-2">{job.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{job.desc}</p>
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className="flex items-center gap-1 text-xs text-gray-400"><MapPin className="w-3 h-3 flex-shrink-0" />{job.location}</div>
                            <div className="flex items-center gap-1 text-xs text-gray-400 hidden sm:flex"><Calendar className="w-3 h-3 flex-shrink-0" />Posted {job.posted}</div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${job.tagColor}`}>{job.tag}</span>
                          </div>
                        </div>
                        {/* Budget + CTA */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:gap-2 flex-shrink-0 pt-1 sm:pt-0">
                          <div className="sm:text-right">
                            <p className="text-lg sm:text-xl font-extrabold text-gray-900">{job.budget}</p>
                            <p className="text-[10px] text-gray-400">Budget</p>
                          </div>
                          <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-colors whitespace-nowrap">
                              View Details
                            </button>
                            <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-green-600 transition-colors whitespace-nowrap">
                              <Bookmark className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Save Job</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2">
              <p className="text-xs text-gray-500">Showing 1 to 10 of 28 jobs</p>
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40" disabled>
                  <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
                </button>
                {[1,2,3].map(n => (
                  <button key={n} className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors flex-shrink-0 ${n === 1 ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>{n}</button>
                ))}
                <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
                <select className="ml-1 border border-gray-200 rounded-lg text-xs text-gray-600 px-2 py-1.5 outline-none bg-white flex-shrink-0">
                  <option>10 per page</option>
                  <option>20 per page</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right sidebar — desktop only */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* Recommended */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5"><span className="text-base">✨</span><p className="font-bold text-gray-900 text-sm">Recommended for you</p></div>
                <button className="text-xs font-semibold text-green-600 hover:text-green-700">View all</button>
              </div>
              <div className="flex flex-col gap-2">
                {RECOMMENDED.map(r => (
                  <div key={r.title} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className={`${r.bg} w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{r.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-xs truncate">{r.title}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-gray-400" /><p className="text-[10px] text-gray-400 truncate">{r.location}</p>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs font-bold text-gray-800">{r.budget}</p>
                        <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${r.tagColor}`}>{r.tag}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-3"><Lightbulb className="w-4 h-4 text-yellow-500" /><p className="font-bold text-gray-900 text-sm">Pro Tips</p></div>
              <div className="flex flex-col gap-2 mb-3">
                {PRO_TIPS.map(tip => (
                  <div key={tip} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <p className="text-xs text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
              <button className="w-full flex items-center justify-center gap-1.5 border border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                View All Tips <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Never miss a job */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-2"><Bell className="w-4 h-4 text-gray-600" /><p className="font-bold text-gray-900 text-sm">Never miss a job!</p></div>
              <p className="text-xs text-gray-500 mb-3">Get instant notifications for jobs that match your skills.</p>
              <button className="w-full flex items-center justify-center gap-1.5 bg-green-50 border border-green-200 text-green-700 font-semibold text-xs py-2.5 rounded-xl hover:bg-green-100 transition-colors">
                <Bell className="w-3.5 h-3.5" /> Create Job Alert
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
