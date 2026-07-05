import {
  ChevronRight, ChevronDown, ArrowUp, Star, Bell, Calendar,
  MapPin, BellRing, FileText, CalendarCheck, BarChart2,
  Settings, HelpCircle, Rocket, CheckCircle2, Lightbulb
} from "lucide-react";
import { Link } from "wouter";
import ProNav from "@/components/navigation/ProNav";

// ─── Data ──────────────────────────────────────────────────────────────────

const STATS = [
  {
    label: "Total Jobs",
    value: "12",
    sub: "All time",
    trend: "+18%",
    icon: "💼",
    iconBg: "bg-green-50",
    border: "border-gray-100",
  },
  {
    label: "Pending Jobs",
    value: "4",
    sub: "Requires action",
    trend: null,
    icon: "🕐",
    iconBg: "bg-orange-50",
    border: "border-gray-100",
  },
  {
    label: "Completed Jobs",
    value: "6",
    sub: "This month",
    trend: "+12%",
    icon: "✅",
    iconBg: "bg-blue-50",
    border: "border-gray-100",
  },
  {
    label: "Total Earnings",
    value: "KSh 24,580",
    sub: "This month",
    trend: "+15%",
    icon: "📈",
    iconBg: "bg-purple-50",
    border: "border-gray-100",
  },
  {
    label: "Average Rating",
    value: "4.8",
    sub: "Based on 36 reviews",
    trend: null,
    icon: "⭐",
    iconBg: "bg-green-50",
    border: "border-gray-100",
  },
];

const SCHEDULE = [
  { time: "10:00", period: "AM", title: "Kitchen Sink Repair", location: "Kihunguro, Ruiru", status: "In Progress", statusColor: "bg-green-100 text-green-700" },
  { time: "02:00", period: "PM", title: "Ceiling Lights Installation", location: "Westlands, Nairobi", status: "Scheduled", statusColor: "bg-blue-100 text-blue-700" },
  { time: "04:30", period: "PM", title: "Garden Maintenance", location: "Runda, Nairobi", status: "Scheduled", statusColor: "bg-blue-100 text-blue-700" },
];

const DONUT_DATA = [
  { label: "Completed", count: 6, pct: "50%", color: "#16a34a" },
  { label: "Pending",   count: 4, pct: "33%", color: "#f97316" },
  { label: "In Progress", count: 1, pct: "8%", color: "#3b82f6" },
  { label: "Cancelled", count: 1, pct: "8%", color: "#d1d5db" },
];

const RECENT_JOBS = [
  { title: "Emergency Kitchen Sink Repair", location: "Kihunguro, Ruiru", amount: "KSh 2,500", status: "In Progress", statusColor: "bg-blue-100 text-blue-700", posted: "Posted 2 hours ago", bg: "bg-blue-100", emoji: "🚿" },
  { title: "Install Ceiling Lights",        location: "Westlands, Nairobi", amount: "KSh 3,000", status: "Pending",     statusColor: "bg-orange-100 text-orange-600", posted: "Posted 4 hours ago", bg: "bg-yellow-50", emoji: "💡" },
  { title: "Deep House Cleaning",           location: "Kilimani, Nairobi",  amount: "KSh 4,000", status: "Completed",  statusColor: "bg-green-100 text-green-700",  posted: "Posted 6 hours ago", bg: "bg-purple-50", emoji: "🧹" },
  { title: "Interior Wall Painting",        location: "Thika Road, Nairobi", amount: "KSh 5,000", status: "In Progress", statusColor: "bg-blue-100 text-blue-700",   posted: "Posted 8 hours ago", bg: "bg-orange-50", emoji: "🖌️" },
];

const QUICK_ACTIONS = [
  { icon: BellRing,    label: "Create Job Alert",  color: "text-green-600",  bg: "bg-green-50" },
  { icon: FileText,    label: "Manage Quotes",      color: "text-orange-500", bg: "bg-orange-50" },
  { icon: CalendarCheck, label: "Availability",    color: "text-blue-500",   bg: "bg-blue-50" },
  { icon: BarChart2,   label: "Earnings Report",   color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Settings,    label: "Profile Settings",  color: "text-gray-600",   bg: "bg-gray-100" },
  { icon: HelpCircle,  label: "Help & Support",    color: "text-blue-400",   bg: "bg-blue-50" },
];

const PROFILE_ITEMS = ["Profile Photo", "Business Info", "Skills Added", "ID Verified", "5+ Reviews"];

// ─── Chart points (earnings) ────────────────────────────────────────────────
const EARNINGS_PTS = [4000, 8000, 6000, 12000, 9000, 16000, 13000, 19000, 15000, 22000, 18000, 24580];
const Y_LABELS = ["30K", "20K", "10K", "0"];
const X_LABELS = ["May 1", "May 8", "May 15", "May 22", "May 29"];

// ─── Earnings Chart ─────────────────────────────────────────────────────────
function EarningsChart() {
  const W = 300, H = 100;
  const padL = 0, padR = 8, padT = 8, padB = 4;
  const max = 30000, min = 0;

  const pts = EARNINGS_PTS.map((v, i) => {
    const x = padL + (i / (EARNINGS_PTS.length - 1)) * (W - padL - padR);
    const y = padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
    return [x, y];
  });

  const linePath = pts.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const areaPath = `${linePath} L${pts[pts.length - 1][0]},${H} L${pts[0][0]},${H} Z`;
  const [lx, ly] = pts[pts.length - 1];

  return (
    <div className="flex gap-2">
      {/* Y-axis labels */}
      <div className="flex flex-col justify-between text-[9px] text-gray-400 pb-1" style={{ height: H }}>
        {Y_LABELS.map(l => <span key={l}>{l}</span>)}
      </div>
      {/* Chart */}
      <div className="flex-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
          <defs>
            <linearGradient id="earningsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3].map(i => {
            const y = padT + (i / 3) * (H - padT - padB);
            return <line key={i} x1={0} y1={y} x2={W} y2={y} stroke="#f3f4f6" strokeWidth="1" />;
          })}
          <path d={areaPath} fill="url(#earningsGrad)" />
          <path d={linePath} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={lx} cy={ly} r="4" fill="#16a34a" />
        </svg>
        {/* X-axis labels */}
        <div className="flex justify-between mt-1 px-1">
          {X_LABELS.map(l => <span key={l} className="text-[9px] text-gray-400">{l}</span>)}
        </div>
      </div>
    </div>
  );
}

// ─── Donut Chart ─────────────────────────────────────────────────────────────
function DonutChart() {
  const cx = 60, cy = 60, r = 44, sw = 16;
  const circ = 2 * Math.PI * r;

  let offset = 0;
  const segments = DONUT_DATA.map(d => {
    const count = d.count;
    const total = 12;
    const dash = (count / total) * circ;
    const seg = { ...d, dashArray: `${dash} ${circ}`, dashOffset: -offset };
    offset += dash;
    return seg;
  });

  return (
    <div className="flex items-center gap-6">
      <div className="relative flex-shrink-0" style={{ width: 120, height: 120 }}>
        <svg viewBox="0 0 120 120" width="120" height="120">
          <g transform={`rotate(-90 ${cx} ${cy})`}>
            {segments.map((s, i) => (
              <circle
                key={i}
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={s.color}
                strokeWidth={sw}
                strokeDasharray={s.dashArray}
                strokeDashoffset={s.dashOffset}
                strokeLinecap="butt"
              />
            ))}
          </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-extrabold text-gray-900 leading-none">12</span>
          <span className="text-[10px] text-gray-400 font-medium">Total</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2">
        {DONUT_DATA.map(d => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
            <span className="text-xs text-gray-600">{d.label}</span>
            <span className="text-xs font-bold text-gray-900">{d.count}</span>
            <span className="text-xs text-gray-400">({d.pct})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ProDashboard() {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "Gijag";

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ProNav active="Dashboard" />

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-5 flex flex-col gap-5">

        {/* ── Welcome + date ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">Welcome back, {firstName}! 👋</h1>
            <p className="text-sm text-gray-500 mt-0.5">Here's what's happening with your business today.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors self-start sm:self-auto flex-shrink-0">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="font-medium hidden sm:inline">May 26 – Jun 1, 2024</span>
            <span className="font-medium sm:hidden">May 26–Jun 1</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* ── Stat cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {STATS.map(s => (
            <div key={s.label} className={`bg-white rounded-2xl border ${s.border} p-4 flex items-start gap-3`}>
              <div className={`${s.iconBg} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg`}>
                {s.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5 truncate">{s.label}</p>
                <p className="text-[10px] text-gray-400 mt-0.5 truncate">{s.sub}</p>
                {s.trend && (
                  <div className="flex items-center gap-0.5 mt-1">
                    <ArrowUp className="w-3 h-3 text-green-600" />
                    <span className="text-[11px] font-bold text-green-600">{s.trend}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Middle row: Earnings | Donut | Schedule ── */}
        <div className="grid grid-cols-12 gap-4">

          {/* Earnings Overview */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-extrabold text-gray-900 text-base">Earnings Overview</h2>
              <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                This Month <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 font-medium mb-1">Total Earnings</p>
            <p className="text-3xl font-extrabold text-gray-900 mb-1">KSh 24,580</p>
            <div className="flex items-center gap-1 mb-4">
              <ArrowUp className="w-3.5 h-3.5 text-green-600" />
              <span className="text-xs font-bold text-green-600">15%</span>
              <span className="text-xs text-gray-400">from last month</span>
            </div>
            <EarningsChart />
          </div>

          {/* Jobs by Status */}
          <div className="col-span-12 lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="font-extrabold text-gray-900 text-base mb-5">Jobs by Status</h2>
            <DonutChart />
          </div>

          {/* Upcoming Schedule */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-gray-900 text-base">Upcoming Schedule</h2>
              <Link href="/pro/schedule" className="text-xs font-semibold text-green-600 hover:text-green-700">View all</Link>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {SCHEDULE.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-center flex-shrink-0 w-12">
                    <p className="text-sm font-extrabold text-gray-900 leading-none">{item.time}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{item.period}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <p className="text-[10px] text-gray-500 truncate">{item.location}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 border border-green-200 text-green-700 rounded-xl py-2.5 text-sm font-semibold hover:bg-green-50 transition-colors">
              <Calendar className="w-4 h-4" />
              View Full Schedule
            </button>
          </div>
        </div>

        {/* ── Bottom row: Recent Jobs | Profile Strength | Quick Actions ── */}
        <div className="grid grid-cols-12 gap-4">

          {/* Recent Jobs */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-gray-900 text-base">Recent Jobs</h2>
              <Link href="/pro/jobs" className="text-xs font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
                View all jobs <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex flex-col divide-y divide-gray-50">
              {RECENT_JOBS.map((job, i) => (
                <div key={i} className="flex items-center gap-3 py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg cursor-pointer transition-colors">
                  {/* Thumbnail */}
                  <div className={`${job.bg} w-14 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl`}>
                    {job.emoji}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{job.title}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <p className="text-[11px] text-gray-500 truncate">{job.location}</p>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5">{job.amount} <span className="text-gray-300">·</span> Budget</p>
                  </div>
                  {/* Status + time */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${job.statusColor}`}>
                      {job.status}
                    </span>
                    <p className="text-[10px] text-gray-400">{job.posted}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Profile Strength */}
          <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-5 flex flex-col">
            <h2 className="font-extrabold text-gray-900 text-base mb-0.5">Profile Strength</h2>
            <p className="text-xs text-gray-400 mb-4">Great job! Keep it up.</p>

            {/* Circular progress */}
            <div className="flex justify-center mb-5">
              <div className="relative w-24 h-24">
                <svg viewBox="0 0 100 100" width="96" height="96">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="#16a34a" strokeWidth="10"
                    strokeDasharray={`${0.8 * 2 * Math.PI * 40} ${2 * Math.PI * 40}`}
                    strokeDashoffset={2 * Math.PI * 40 * 0.25}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-extrabold text-gray-900">80%</span>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-2 flex-1">
              {PROFILE_ITEMS.map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Improve Profile
            </button>
          </div>

          {/* Right column: Quick Actions + Get more jobs */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h2 className="font-extrabold text-gray-900 text-base mb-4">Quick Actions</h2>
              <div className="grid grid-cols-3 gap-3">
                {QUICK_ACTIONS.map(a => {
                  const Icon = a.icon;
                  return (
                    <button key={a.label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors text-center">
                      <div className={`w-10 h-10 ${a.bg} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${a.color}`} />
                      </div>
                      <p className="text-[10px] font-semibold text-gray-700 leading-tight">{a.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Get more jobs */}
            <div className="bg-green-800 rounded-2xl p-5 relative overflow-hidden flex flex-col">
              <div className="relative z-10">
                <p className="font-extrabold text-white text-base mb-1">Get more jobs</p>
                <p className="text-green-100 text-xs leading-relaxed mb-4">
                  Boost your visibility and get recommended to more customers.
                </p>
                <button className="bg-white text-green-800 font-bold text-sm px-5 py-2 rounded-xl hover:bg-green-50 transition-colors">
                  Upgrade to Pro
                </button>
              </div>
              {/* Rocket decoration */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-5xl opacity-90 select-none">
                🚀
              </div>
              {/* Sparkles */}
              <div className="absolute right-14 top-3 text-yellow-300 text-lg select-none">✦</div>
              <div className="absolute right-6 bottom-4 text-yellow-200 text-sm select-none">✦</div>
              <div className="absolute right-20 bottom-3 text-green-400 text-xs select-none">✦</div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Pro Tip Footer ── */}
      <footer className="bg-white border-t border-gray-100 py-3">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-green-500 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-green-600">Pro Tip:</span>{" "}
              Complete your profile and keep your schedule updated to get more job requests.
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition-colors flex-shrink-0 ml-4">
            Learn More
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
