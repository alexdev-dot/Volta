import { ChevronRight, Star, ArrowUp, Briefcase, CheckSquare, DollarSign, User, FolderOpen, FileText } from "lucide-react";
import { Link } from "wouter";
import ProNav from "@/components/ProNav";

const JOBS = [
  {
    title: "Fix Kitchen Sink Leak",
    category: "Plumbing",
    location: "Karen, Nairobi",
    date: "May 20, 2025",
    time: "10:00 AM",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    amount: "KSh 2,500",
    icon: "🔧",
    iconBg: "bg-blue-50",
  },
  {
    title: "Install Ceiling Lights",
    category: "Electrical",
    location: "Westlands, Nairobi",
    date: "May 21, 2025",
    time: "02:00 PM",
    status: "In Progress",
    statusColor: "bg-blue-100 text-blue-700",
    amount: "KSh 3,000",
    icon: "⚡",
    iconBg: "bg-yellow-50",
  },
  {
    title: "Deep House Cleaning",
    category: "Cleaning",
    location: "Kilimani, Nairobi",
    date: "May 22, 2025",
    time: "09:00 AM",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-700",
    amount: "KSh 4,000",
    icon: "🧹",
    iconBg: "bg-purple-50",
  },
  {
    title: "Wall Painting",
    category: "Painting",
    location: "Lavington, Nairobi",
    date: "May 25, 2025",
    time: "11:00 AM",
    status: "Upcoming",
    statusColor: "bg-gray-100 text-gray-600",
    amount: "KSh 6,000",
    icon: "🖌️",
    iconBg: "bg-pink-50",
  },
];

const CHART_POINTS = [3000, 8000, 5500, 11000, 9000, 15000, 12000, 18000, 14000, 20000, 17000, 23450];
const CHART_LABELS = ["May 1", "May 7", "May 14", "May 21", "May 28"];

function EarningsChart() {
  const w = 280;
  const h = 90;
  const max = Math.max(...CHART_POINTS);
  const min = Math.min(...CHART_POINTS);
  const pad = 8;

  const pts = CHART_POINTS.map((v, i) => {
    const x = pad + (i / (CHART_POINTS.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return [x, y];
  });

  const linePath = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  const areaPath = `${linePath} L ${pts[pts.length - 1][0]} ${h} L ${pts[0][0]} ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGrad)" />
      <path d={linePath} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.5" fill="#16a34a" />
    </svg>
  );
}

export default function ProDashboard() {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("gigafix_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "there";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ProNav active="Dashboard" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Welcome */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Welcome back, {firstName} 👋</h1>
          <p className="text-gray-500 text-sm mt-0.5">Here's what's happening with your business today.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Jobs", value: "24", sub: "All time", icon: Briefcase, iconBg: "bg-green-50", iconColor: "text-green-600" },
            { label: "Completed Jobs", value: "18", sub: "All time", icon: CheckSquare, iconBg: "bg-blue-50", iconColor: "text-blue-600" },
            { label: "Total Earnings", value: "KSh 345,000", sub: "All time", icon: DollarSign, iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
            { label: "Rating", value: "4.8", sub: "Based on 86 reviews", icon: Star, iconBg: "bg-yellow-50", iconColor: "text-yellow-500" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <div className={`${s.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${s.iconColor} ${s.label === "Rating" ? "fill-yellow-400" : ""}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                  <p className="text-2xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-5">
          {/* Recent Jobs */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-gray-900">Recent Jobs</h2>
              <a href="#" className="flex items-center gap-1 text-sm text-green-600 font-semibold hover:text-green-700">
                View All Jobs <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex flex-col divide-y divide-gray-50">
              {JOBS.map((job) => (
                <div key={job.title} className="flex items-center gap-4 py-3.5 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
                  <div className={`${job.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl`}>
                    {job.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{job.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      <span className="text-green-600 font-medium">{job.category}</span>
                      {" · "}{job.location}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <span>📅</span> {job.date}
                      </span>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <span>⏰</span> {job.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${job.statusColor} mb-1`}>
                        {job.status}
                      </span>
                      <p className="text-sm font-bold text-gray-900">{job.amount}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="w-72 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* Earnings Overview */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="font-extrabold text-gray-900">Earnings Overview</p>
              </div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs text-gray-400 font-medium">This Month</p>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-1">KSh 23,450</p>
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center gap-0.5 text-green-600">
                  <ArrowUp className="w-3 h-3" />
                  <span className="text-xs font-bold">18%</span>
                </div>
                <span className="text-xs text-gray-400">from last month</span>
              </div>
              {/* Chart */}
              <EarningsChart />
              {/* Chart labels */}
              <div className="flex justify-between mt-1">
                {CHART_LABELS.map((l) => (
                  <span key={l} className="text-[9px] text-gray-400">{l}</span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-extrabold text-gray-900 mb-4">Quick Actions</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: User, label: "Update Profile", sub: "Keep your profile up to date", iconBg: "bg-green-50", iconColor: "text-green-600" },
                  { icon: FolderOpen, label: "Add Portfolio", sub: "Showcase your work", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
                  { icon: FileText, label: "Create Quote", sub: "Send quotes to customers", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
                ].map((a) => {
                  const Icon = a.icon;
                  return (
                    <button
                      key={a.label}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors text-center group"
                    >
                      <div className={`w-11 h-11 ${a.iconBg} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-5 h-5 ${a.iconColor}`} />
                      </div>
                      <p className="text-xs font-semibold text-gray-800">{a.label}</p>
                      <p className="text-[10px] text-gray-400 leading-snug">{a.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
