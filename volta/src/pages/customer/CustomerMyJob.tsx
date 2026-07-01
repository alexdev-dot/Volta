import { Search, SlidersHorizontal, Plus, MapPin, Calendar, Users, MoreHorizontal, ChevronRight, Pencil, Trash2 } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

const JOBS = [
  {
    icon: "🔧",
    iconBg: "bg-blue-50",
    title: "Emergency Kitchen Sink Repair & Pipe Leak Fix",
    desc: "Kitchen sink drain pipe has a major crack and water is leaking under the cabinet. Need urgent repair and replacement of the damaged pipe.",
    location: "Kihunguro, Ruiru (Near the bypass junction)",
    budget: "2500 Budget",
    proposals: 0,
    posted: "Jun 25, 2026",
    jobId: "JGF12453",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    statusIcon: "🟢",
    actions: ["View Applications", "View Details"],
  },
  {
    icon: "💡",
    iconBg: "bg-yellow-50",
    title: "Install Ceiling Lights in Living Room",
    desc: "Install 4 ceiling lights and 2 wall sconces in the living room. I have already purchased the lights.",
    location: "Ruiru, Kiambu County",
    budget: "1800 Budget",
    proposals: 3,
    posted: "Jun 22, 2026",
    jobId: "JGF12452",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    statusIcon: "🟢",
    actions: ["View Applications", "View Details"],
  },
  {
    icon: "🧹",
    iconBg: "bg-purple-50",
    title: "Deep Cleaning – 3 Bedroom House",
    desc: "Need a thorough cleaning of a 3 bedroom house including kitchen, bathrooms, windows and floors.",
    location: "Gatarakwa, Ruiru",
    budget: "2200 Budget",
    proposals: 2,
    posted: "Jun 18, 2026",
    jobId: "JGF12451",
    status: "Completed",
    statusColor: "bg-gray-100 text-gray-600",
    statusIcon: "✅",
    actions: ["View Details"],
    completedOn: "Jun 20, 2026",
  },
  {
    icon: "🖌️",
    iconBg: "bg-pink-50",
    title: "House Exterior Painting",
    desc: "Paint the exterior walls of the house. The house is one storey. Color preference: Off-white.",
    location: "Mugutha, Ruiru",
    budget: "3500 Budget",
    proposals: 5,
    posted: "Jun 15, 2026",
    jobId: "JGF12450",
    status: "Draft",
    statusColor: "bg-gray-100 text-gray-500",
    statusIcon: "📝",
    actions: ["Edit Job", "Delete"],
    lastEdited: "Jun 15, 2026",
  },
  {
    icon: "🔩",
    iconBg: "bg-red-50",
    title: "Fix Water Pressure Issue",
    desc: "Low water pressure in the bathroom and kitchen. Need plumber to inspect and fix the issue.",
    location: "Ruiru, Kiambu County",
    budget: "1500 Budget",
    proposals: 1,
    posted: "Jun 10, 2026",
    jobId: "JGF12449",
    status: "Cancelled",
    statusColor: "bg-red-100 text-red-600",
    statusIcon: "🚫",
    actions: ["View Details"],
    cancelledOn: "Jun 12, 2026",
  },
];

export default function CustomerMyJob() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="My Job" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">My Jobs</h1>
            <p className="text-gray-500 text-sm mt-0.5">Track and manage all your service requests in one place.</p>
          </div>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
            <Plus className="w-4 h-4" /> Post New Job
          </button>
        </div>

        {/* Tabs + Search */}
        <div className="flex items-center justify-between mb-5 gap-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 gap-1">
            {[
              { label: "All Jobs", count: 12, active: true },
              { label: "Active", count: 5, active: false },
              { label: "Completed", count: 5, active: false },
              { label: "Draft", count: 2, active: false },
            ].map((tab) => (
              <button key={tab.label} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab.active ? "bg-green-600 text-white" : "text-gray-500 hover:text-gray-800"
              }`}>
                {tab.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${tab.active ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>{tab.count}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Search jobs..." className="text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent w-40" />
            </div>
            <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Jobs list */}
        <div className="flex flex-col gap-3">
          {JOBS.map((job) => (
            <div key={job.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className={`${job.iconBg} w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {job.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm mb-1">{job.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{job.desc}</p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </div>
                        <span className="text-xs text-gray-400">• {job.budget}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Users className="w-3 h-3" /> {job.proposals} Proposals
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" /> Posted {job.posted}
                        </div>
                        <span className="text-xs text-gray-400">• Job ID: {job.jobId}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 flex-shrink-0">
                      {/* Status */}
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${job.statusColor}`}>
                          {job.status}
                        </span>
                        {job.completedOn && <p className="text-[10px] text-gray-400">Completed on {job.completedOn}</p>}
                        {job.lastEdited && <p className="text-[10px] text-gray-400">Last edited {job.lastEdited}</p>}
                        {job.cancelledOn && <p className="text-[10px] text-gray-400">Cancelled on {job.cancelledOn}</p>}
                      </div>
                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        {job.status === "Draft" ? (
                          <>
                            <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                              <Pencil className="w-3 h-3" /> Edit Job
                            </button>
                            <button className="flex items-center gap-1.5 border border-red-200 text-red-500 font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                              <Trash2 className="w-3 h-3" /> Delete
                            </button>
                          </>
                        ) : job.status === "Active" ? (
                          <>
                            <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                              <Users className="w-3 h-3" /> View Applications
                            </button>
                            <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors">
                              View Details <ChevronRight className="w-3 h-3" />
                            </button>
                          </>
                        ) : (
                          <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors">
                            View Details <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
