import { Search, SlidersHorizontal, Plus, MapPin, Calendar, Bookmark, ChevronRight, Briefcase, Clock, CheckSquare, Bell } from "lucide-react";
import ProNav from "@/components/ProNav";

const CATEGORIES = ["All Categories", "Plumbing", "Electrical", "Carpentry", "Cleaning", "Painting", "Landscaping", "HVAC", "Appliance Repair"];

const JOBS = [
  {
    icon: "🔧",
    iconBg: "bg-blue-50",
    badge: "New",
    title: "Emergency Kitchen Sink Repair & Pipe Leak Fix",
    desc: "Our kitchen sink drain pipe has a major crack underneath the counter, and water is pooling on the floor whenever the tap runs. The shut-off valve is also stuck and rusty.",
    location: "Kihunguro, Ruiru (Near the bypass junction)",
    posted: "2 hours ago",
    tag: "Plumbing",
    tagColor: "bg-blue-50 text-blue-600",
    urgent: true,
    budget: "KSh 2,500",
  },
  {
    icon: "⚡",
    iconBg: "bg-yellow-50",
    badge: "New",
    title: "Install Ceiling Lights",
    desc: "Need a professional electrician to install 6 recessed ceiling lights in the living room and kitchen area. Wiring is already in place. Must ensure clean finish and working dimmer switches.",
    location: "Westlands, Nairobi",
    posted: "4 hours ago",
    tag: "Electrical",
    tagColor: "bg-blue-50 text-blue-600",
    urgent: false,
    budget: "KSh 3,000",
  },
  {
    icon: "🧹",
    iconBg: "bg-purple-50",
    badge: null,
    title: "Deep House Cleaning",
    desc: "Looking for a reliable cleaning professional for a thorough deep cleaning of a 3-bedroom house. Includes kitchen, bathrooms, windows, and floors.",
    location: "Kilimani, Nairobi",
    posted: "6 hours ago",
    tag: "Cleaning",
    tagColor: "bg-green-50 text-green-600",
    urgent: false,
    budget: "KSh 4,000",
  },
];

const RECOMMENDED = [
  { icon: "🚪", iconBg: "bg-orange-50", title: "Fix Wooden Door", location: "Karen, Nairobi", budget: "KSh 1,800", tag: "Carpentry", tagColor: "bg-orange-50 text-orange-600" },
  { icon: "🔌", iconBg: "bg-blue-50", title: "Washing Machine Repair", location: "Kasarani, Nairobi", budget: "KSh 2,000", tag: "Appliance Repair", tagColor: "bg-purple-50 text-purple-600" },
  { icon: "🌿", iconBg: "bg-green-50", title: "Garden Maintenance", location: "Runda, Nairobi", budget: "KSh 2,500", tag: "Landscaping", tagColor: "bg-green-50 text-green-700" },
];

export default function ProJobFeed() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ProNav active="Job Feed" showChat />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Job Feed</h1>
            <p className="text-gray-500 text-sm mt-0.5">Find jobs posted by customers and grow your business.</p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
            <Plus className="w-4 h-4" /> New Job Alert
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 focus-within:border-green-400 transition-colors">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input type="text" placeholder="Search by job title, description or location..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
                i === 0
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex-shrink-0 flex items-center gap-1">
            More <ChevronRight className="w-3 h-3 rotate-90" />
          </button>
        </div>

        <div className="flex gap-5">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Summary stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {[
                { icon: Briefcase, iconBg: "bg-green-50", iconColor: "text-green-600", value: "28", label: "Available Jobs", sub: "Total open jobs" },
                { icon: Clock, iconBg: "bg-orange-50", iconColor: "text-orange-500", value: "6", label: "New Today", sub: "Jobs posted today" },
                { icon: CheckSquare, iconBg: "bg-purple-50", iconColor: "text-purple-500", value: "3", label: "Applied", sub: "Jobs you applied" },
                { icon: Bookmark, iconBg: "bg-blue-50", iconColor: "text-blue-500", value: "1", label: "Saved", sub: "Jobs saved" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-3">
                    <div className={`${s.iconBg} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                      <p className="text-xs font-semibold text-gray-700">{s.label}</p>
                      <p className="text-[10px] text-gray-400">{s.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Jobs */}
            <div className="flex flex-col gap-3">
              {JOBS.map((job) => (
                <div key={job.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className={`${job.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {job.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {job.badge && (
                              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{job.badge}</span>
                            )}
                            <p className="font-bold text-gray-900 text-sm">{job.title}</p>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{job.desc}</p>
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <MapPin className="w-3 h-3" /> {job.location}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" /> Posted {job.posted}
                            </div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${job.tagColor}`}>{job.tag}</span>
                            {job.urgent && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-500">Urgent</span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <div className="text-right">
                            <p className="font-extrabold text-gray-900">{job.budget}</p>
                            <p className="text-[10px] text-gray-400">Budget</p>
                          </div>
                          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors">
                            View Details
                          </button>
                          <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-green-600 transition-colors">
                            <Bookmark className="w-3 h-3" /> Save Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-5">
              <p className="text-xs text-gray-500">Showing 1 to 10 of 28 jobs</p>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
                </button>
                {[1, 2, 3].map((n) => (
                  <button key={n} className={`w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${n === 1 ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                    {n}
                  </button>
                ))}
                <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
                <div className="ml-2 flex items-center gap-1">
                  <select className="border border-gray-200 rounded-lg text-xs text-gray-600 px-2 py-1.5 outline-none">
                    <option>10 per page</option>
                    <option>20 per page</option>
                    <option>50 per page</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar: Recommended */}
          <div className="w-72 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✨</span>
                <p className="font-bold text-gray-900">Recommended for you</p>
              </div>
              <div className="flex flex-col gap-2">
                {RECOMMENDED.map((r) => (
                  <div key={r.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className={`${r.iconBg} w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{r.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <MapPin className="w-3 h-3" /> {r.location}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs font-bold text-gray-800">{r.budget}</p>
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${r.tagColor}`}>{r.tag}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-700 font-semibold text-sm py-2.5 rounded-xl transition-colors">
                View More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
