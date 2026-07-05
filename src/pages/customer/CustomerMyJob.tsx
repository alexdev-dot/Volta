import { useState } from "react";
import { Plus, MapPin, Calendar, Clock, MoreHorizontal, ChevronLeft, ChevronRight, HelpCircle, MessageCircle, AlertTriangle, BookOpen, Search, CheckCircle } from "lucide-react";
import CustomerNav from "@/components/navigation/CustomerNav";

const STATS = [
  { label: "Total Jobs",  value: 8, icon: "⊞", iconBg: "bg-green-50" },
  { label: "Open",        value: 2, icon: "⏳", iconBg: "bg-orange-50" },
  { label: "In Progress", value: 3, icon: "📅", iconBg: "bg-blue-50" },
  { label: "Completed",   value: 2, icon: "✅", iconBg: "bg-green-50" },
  { label: "Cancelled",   value: 1, icon: "🚫", iconBg: "bg-red-50" },
];

const STATUS_STYLES: Record<string, string> = {
  "In Progress": "bg-blue-50 text-blue-600",
  "Open":        "bg-orange-50 text-orange-500",
  "Completed":   "bg-green-50 text-green-700",
  "Cancelled":   "bg-red-50 text-red-500",
};

const JOBS = [
  { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=160&q=70", title: "Fix Kitchen Sink Leak",    pro: "John Kamau (Plumber)",          location: "Ruiru, Kiambu County", date: "May 22, 2024", time: "10:00 AM", status: "In Progress", price: "KSh 1,200", jobId: "#JOB12453" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&q=70",    title: "Install Ceiling Lights",   pro: "David Mwangi (Electrician)",    location: "Ruiru, Kiambu County", date: "May 20, 2024", time: "2:00 PM",  status: "Open",        price: "KSh 2,000", jobId: "#JOB12452" },
  { img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=160&q=70",    title: "Sofa Deep Cleaning",       pro: "Mary Wanjiku (Cleaner)",        location: "Ruiru, Kiambu County", date: "May 18, 2024", time: "9:00 AM",  status: "In Progress", price: "KSh 800",   jobId: "#JOB12451" },
  { img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=160&q=70",    title: "House Painting",           pro: "Daniel Mutua (Painter)",        location: "Ruiru, Kiambu County", date: "May 15, 2024", time: "11:00 AM", status: "Completed",   price: "KSh 5,500", jobId: "#JOB12450" },
  { img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=160&q=70", title: "AC Repair & Maintenance",  pro: "Peter Ndungu (HVAC Technician)",location: "Ruiru, Kiambu County", date: "May 12, 2024", time: "4:00 PM",  status: "Cancelled",   price: "KSh 1,500", jobId: "#JOB12449" },
];

/* SVG donut */
function DonutChart() {
  const slices = [
    { pct: 25, color: "#22c55e" }, { pct: 37, color: "#3b82f6" },
    { pct: 25, color: "#f97316" }, { pct: 13, color: "#ef4444" },
  ];
  const r = 40, cx = 50, cy = 50, stroke = 18, circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 -rotate-90">
      {slices.map((s, i) => {
        const dash = (s.pct / 100) * circ;
        const el = <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={-offset} />;
        offset += dash;
        return el;
      })}
      <text x="50" y="54" textAnchor="middle" style={{ fontSize: 14, fontWeight: 800, fill: "#111827", transform: "rotate(90deg)", transformOrigin: "50px 50px" }}>8</text>
      <text x="50" y="64" textAnchor="middle" style={{ fontSize: 6, fill: "#6b7280", transform: "rotate(90deg)", transformOrigin: "50px 50px" }}>Total</text>
    </svg>
  );
}

export default function CustomerMyJob() {
  const [activeFilter, setActiveFilter] = useState("All Jobs");

  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomerNav active="My Job" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        <div className="flex gap-5 lg:gap-6">

          {/* ── Main column ── */}
          <div className="flex-1 min-w-0">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 sm:mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">My Job</h1>
                <p className="text-gray-500 text-sm mt-1">Manage all your posted jobs and track their progress.</p>
              </div>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm self-start sm:flex-shrink-0">
                <Plus className="w-4 h-4" /> Post a New Job
              </button>
            </div>

            {/* Stats grid — 2 cols on mobile, 3 on sm, 5 on lg */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-5 sm:mb-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-100 rounded-2xl px-3 sm:px-4 py-3 sm:py-4 shadow-sm">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${s.iconBg} rounded-xl flex items-center justify-center text-base sm:text-lg flex-shrink-0`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter tabs — horizontally scrollable on mobile */}
            <div className="flex items-center justify-between mb-5 gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                {["All Jobs", "Open", "In Progress", "Completed", "Cancelled"].map((tab) => (
                  <button key={tab} onClick={() => setActiveFilter(tab)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeFilter === tab ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600"
                    }`}>
                    {tab}
                  </button>
                ))}
              </div>
              <div className="relative flex-shrink-0">
                <select className="appearance-none border border-gray-200 bg-white rounded-xl text-xs sm:text-sm text-gray-700 pl-2.5 sm:pl-3 pr-7 py-2 outline-none font-medium cursor-pointer">
                  <option>Sort by: Latest</option>
                  <option>Sort by: Oldest</option>
                </select>
                <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none rotate-90" />
              </div>
            </div>

            {/* Jobs list */}
            <div className="flex flex-col gap-3 mb-6">
              {JOBS.map((job) => (
                <div key={job.jobId} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all flex">
                  <img src={job.img} alt={job.title} className="w-20 sm:w-24 object-cover flex-shrink-0" />
                  <div className="flex-1 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-0">
                    {/* Left info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm mb-0.5 truncate">{job.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                        <span className="text-gray-700 font-medium truncate">{job.pro}</span>
                        <CheckCircle className="w-3 h-3 text-green-500 fill-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{job.date}</span>
                        <Clock className="w-3 h-3 ml-1" />
                        <span>{job.time}</span>
                      </div>
                    </div>

                    {/* Right: status + price + actions */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 flex-shrink-0">
                      <div className="flex items-center sm:flex-col sm:items-end gap-2 sm:gap-1">
                        <span className={`text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[job.status]}`}>
                          {job.status}
                        </span>
                        <div className="text-right hidden sm:block">
                          <p className="font-extrabold text-gray-900 text-sm sm:text-base">{job.price}</p>
                          <p className="text-[10px] text-gray-400">Job ID: {job.jobId}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-gray-900 text-sm sm:hidden">{job.price}</p>
                        <button className="border border-gray-200 text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap">
                          View Details
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1">
              <button className="flex items-center gap-1 px-3 sm:px-4 py-2 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
                <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Previous</span>
              </button>
              {[1, 2].map((n) => (
                <button key={n} className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${n === 1 ? "bg-green-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 px-3 sm:px-4 py-2 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
                <span className="hidden sm:inline">Next</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── Right sidebar — desktop only ── */}
          <div className="w-56 flex-shrink-0 hidden lg:flex flex-col gap-4">

            {/* Job Overview donut */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-4">Job Overview</p>
              <div className="flex items-center gap-3 flex-wrap">
                <DonutChart />
                <div className="flex flex-col gap-1.5 text-xs">
                  {[
                    { color: "bg-green-500",  label: "Open",        val: "2 (25%)" },
                    { color: "bg-blue-500",   label: "In Progress", val: "3 (37%)" },
                    { color: "bg-orange-400", label: "Completed",   val: "2 (25%)" },
                    { color: "bg-red-500",    label: "Cancelled",   val: "1 (13%)" },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${l.color}`} />
                      <span className="text-gray-600 flex-1">{l.label}</span>
                      <span className="text-gray-400 font-medium">{l.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-0.5">Need Help?</p>
              <p className="text-xs text-gray-400 mb-3">Our support team is always here to help you.</p>
              {[
                { icon: MessageCircle, label: "Help Center",     sub: "Get answers to common questions", color: "bg-purple-50 text-purple-500" },
                { icon: MessageCircle, label: "Contact Support", sub: "Chat or call our support team",   color: "bg-green-50 text-green-600" },
                { icon: AlertTriangle, label: "Report an Issue", sub: "Let us know if something went wrong", color: "bg-orange-50 text-orange-500" },
              ].map(({ icon: Icon, label, sub, color }) => (
                <button key={label} className="w-full flex items-center gap-3 py-3 border-t border-gray-50 hover:bg-gray-50 -mx-1 px-1 rounded-lg transition-colors group">
                  <div className={`w-8 h-8 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-[10px] text-gray-400 leading-snug">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-3">Quick Actions</p>
              {[
                { icon: Search,   label: "Browse Services", sub: "Find more services" },
                { icon: BookOpen, label: "My Bookings",     sub: "View all your bookings" },
              ].map(({ icon: Icon, label, sub }) => (
                <button key={label} className="w-full flex items-center gap-3 py-2.5 hover:bg-gray-50 -mx-1 px-1 rounded-lg transition-colors group">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-[10px] text-gray-400">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Become a Pro */}
            <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-2xl overflow-hidden p-5 text-white shadow-sm">
              <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=60" alt="" className="w-full h-full object-cover object-top" />
              </div>
              <div className="relative z-10">
                <p className="font-extrabold text-base mb-1">Become a Pro</p>
                <p className="text-white/75 text-xs leading-snug mb-4">Join thousands of professionals growing your business with VOLTA.</p>
                <button className="flex items-center gap-1 bg-white text-green-800 font-bold text-xs px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                  Join as a Professional
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
