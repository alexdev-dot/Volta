import { ArrowUp, Download, Calendar, ChevronDown, ChevronRight, Lightbulb, X, Building2, Settings } from "lucide-react";
import ProNav from "@/components/navigation/ProNav";

// ── Data ──────────────────────────────────────────────────────────────────

const STATS = [
  { emoji: "💼", label: "Total Earnings",   value: "KSh 24,580", trend: "+15%", sub: "vs May 19 – May 25", bg: "bg-green-50" },
  { emoji: "💳", label: "Paid Earnings",    value: "KSh 18,760", trend: "+12%", sub: "vs May 19 – May 25", bg: "bg-blue-50" },
  { emoji: "🕐", label: "Pending Earnings", value: "KSh 5,820",  trend: "+8%",  sub: "vs May 19 – May 25", bg: "bg-orange-50" },
  { emoji: "📤", label: "Withdrawn",        value: "KSh 2,450",  trend: "+10%", sub: "vs May 19 – May 25", bg: "bg-purple-50" },
  { emoji: "✅", label: "Completed Jobs",   value: "12",          trend: "+9%",  sub: "vs May 19 – May 25", bg: "bg-teal-50" },
];

const CHART_PTS = [5000, 9000, 8000, 22450, 18000, 17000, 15500, 22000];
const X_LABELS  = ["May 19","May 20","May 21","May 22","May 23","May 24","May 25","May 26"];
const Y_LABELS  = ["30K","25K","20K","15K","10K","5K","0"];

const TRANSACTIONS = [
  { emoji: "🚿", bg: "bg-blue-50",   title: "Kitchen Sink Repair",       id: "#VLT-2024-00128", date: "May 26, 2024", status: "Paid",    statusColor: "bg-green-100 text-green-700",  amount: "KSh 2,500" },
  { emoji: "⚙️",  bg: "bg-purple-50", title: "Washing Machine Repair",     id: "#VLT-2024-00127", date: "May 25, 2024", status: "Paid",    statusColor: "bg-green-100 text-green-700",  amount: "KSh 2,000" },
  { emoji: "💡", bg: "bg-yellow-50", title: "Ceiling Lights Installation", id: "#VLT-2024-00126", date: "May 24, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-600", amount: "KSh 3,000" },
  { emoji: "🌿", bg: "bg-green-50",  title: "Garden Maintenance",          id: "#VLT-2024-00125", date: "May 23, 2024", status: "Paid",    statusColor: "bg-green-100 text-green-700",  amount: "KSh 1,800" },
  { emoji: "🖌️", bg: "bg-pink-50",   title: "Wall Painting",               id: "#VLT-2024-00124", date: "May 22, 2024", status: "Paid",    statusColor: "bg-green-100 text-green-700",  amount: "KSh 2,800" },
];

// Donut: KSh 18,760 (76%) completed, KSh 5,820 (24%) pending, 0 cancelled
const DONUT = [
  { label: "Completed Jobs", value: "KSh 18,760", pct: "76%", color: "#16a34a" },
  { label: "Pending Jobs",   value: "KSh 5,820",  pct: "24%", color: "#f97316" },
  { label: "Cancelled Jobs", value: "KSh 0",      pct: "0%",  color: "#3b82f6" },
];

// ── Earnings Chart ────────────────────────────────────────────────────────

function EarningsChart() {
  const W = 500, H = 160;
  const padL = 0, padR = 10, padT = 30, padB = 4;
  const max = 30000, min = 0;

  const pts = CHART_PTS.map((v, i) => ({
    x: padL + (i / (CHART_PTS.length - 1)) * (W - padL - padR),
    y: padT + (1 - (v - min) / (max - min)) * (H - padT - padB),
    v,
  }));

  const linePath = pts.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const areaPath = `${linePath} L${pts[pts.length-1].x},${H} L${pts[0].x},${H} Z`;

  // Tooltip on May 22 (index 3)
  const tip = pts[3];

  return (
    <div className="flex gap-3">
      {/* Y-axis */}
      <div className="flex flex-col justify-between text-[9px] text-gray-400 pb-1" style={{ height: H }}>
        {Y_LABELS.map(l => <span key={l}>{l}</span>)}
      </div>
      <div className="flex-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
          <defs>
            <linearGradient id="earnGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {Y_LABELS.map((_, i) => {
            const y = padT + (i / (Y_LABELS.length - 1)) * (H - padT - padB);
            return <line key={i} x1={0} y1={y} x2={W} y2={y} stroke="#f3f4f6" strokeWidth="1" />;
          })}
          <path d={areaPath} fill="url(#earnGrad2)" />
          <path d={linePath} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Data points */}
          {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#16a34a" />)}
          {/* Tooltip on May 22 */}
          <rect x={tip.x - 48} y={tip.y - 36} width={96} height={28} rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
          <text x={tip.x} y={tip.y - 22} textAnchor="middle" fontSize="8" fill="#6b7280">May 22, 2024</text>
          <text x={tip.x} y={tip.y - 12} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#111827">KSh 22,450</text>
          <line x1={tip.x} y1={tip.y - 8} x2={tip.x} y2={H} stroke="#d1d5db" strokeWidth="1" strokeDasharray="4 2" />
        </svg>
        {/* X-axis labels */}
        <div className="flex justify-between mt-1">
          {X_LABELS.map(l => <span key={l} className="text-[9px] text-gray-400">{l}</span>)}
        </div>
      </div>
    </div>
  );
}

// ── Earnings Breakdown Donut ───────────────────────────────────────────────

function EarningsDonut() {
  const cx = 70, cy = 70, r = 55, sw = 18;
  const circ = 2 * Math.PI * r;
  const total = 24580;

  const segments = [
    { pct: 0.76, color: "#16a34a" },
    { pct: 0.24, color: "#f97316" },
    { pct: 0,    color: "#3b82f6" },
  ];

  let offset = 0;
  return (
    <div className="flex items-center gap-5">
      <div className="relative flex-shrink-0" style={{ width: 140, height: 140 }}>
        <svg viewBox="0 0 140 140" width="140" height="140">
          <g transform={`rotate(-90 ${cx} ${cy})`}>
            {segments.map((s, i) => {
              const dash = s.pct * circ;
              const el = (
                <circle key={i} cx={cx} cy={cy} r={r} fill="none"
                  stroke={s.color} strokeWidth={sw}
                  strokeDasharray={`${dash} ${circ}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="butt"
                />
              );
              offset += dash;
              return el;
            })}
          </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs font-extrabold text-gray-900">KSh 24,580</p>
          <p className="text-[10px] text-gray-400">Total</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {DONUT.map((d, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: d.color }} />
            <div>
              <p className="text-xs text-gray-600">{d.label}</p>
              <p className="text-xs font-bold text-gray-900">{d.value} <span className="font-normal text-gray-400">({d.pct})</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────

export default function ProEarnings() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ProNav active="Earnings" />

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-5 flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">💰</div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Earnings</h1>
              <p className="text-sm text-gray-500">Track your income, payouts and financial performance.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4 text-gray-400" />
              May 26 – Jun 1, 2024
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Export Report
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {STATS.map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-start gap-3">
              <div className={`${s.bg} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl`}>{s.emoji}</div>
              <div className="min-w-0">
                <p className="text-base font-extrabold text-gray-900 leading-tight">{s.value}</p>
                <p className="text-[10px] text-gray-500 mt-0.5 truncate">{s.label}</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <ArrowUp className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-bold text-green-600">{s.trend}</span>
                </div>
                <p className="text-[9px] text-gray-400 mt-0.5 truncate">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-12 gap-4">

          {/* Earnings Overview chart */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-gray-900">Earnings Overview</h2>
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                This Week <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
            <EarningsChart />
          </div>

          {/* Earnings Breakdown */}
          <div className="col-span-12 lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-5">
            <h2 className="font-extrabold text-gray-900 mb-4">Earnings Breakdown</h2>
            <EarningsDonut />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-12 gap-4">

          {/* Recent Transactions */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-extrabold text-gray-900">Recent Transactions</h2>
              <button className="text-sm font-semibold text-green-600 hover:text-green-700">View All</button>
            </div>
            <div className="flex flex-col divide-y divide-gray-50">
              {TRANSACTIONS.map((t, i) => (
                <div key={i} className="flex items-center gap-3 py-3 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
                  <div className={`${t.bg} w-11 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{t.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{t.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-gray-400">{t.id}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[10px] text-gray-400">{t.date}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${t.statusColor}`}>{t.status}</span>
                  <p className="text-sm font-bold text-gray-900 flex-shrink-0">{t.amount}</p>
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                </div>
              ))}
            </div>
            <button className="mt-4 w-full border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              View All Transactions
            </button>
          </div>

          {/* Payouts */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-gray-900">Payouts</h2>
                <button className="text-sm font-semibold text-green-600 hover:text-green-700">View All</button>
              </div>

              {/* Next payout */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Next Payout</p>
                  <p className="text-2xl font-extrabold text-gray-900">KSh 5,820</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <p className="text-[10px] text-gray-400">Expected on Jun 5, 2024</p>
                  </div>
                </div>
                <div className="text-4xl">💰</div>
              </div>

              {/* Payout method */}
              <div>
                <p className="text-xs text-gray-500 font-semibold mb-2">Payout Methods</p>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Equity Bank</p>
                      <p className="text-[10px] text-gray-400">•••• •••• •••• 1234</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Primary</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings className="w-4 h-4" /> Manage Payout Methods
              </button>

              {/* Upsell card */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-gray-900 text-sm mb-1">Want to earn more?</p>
                <p className="text-xs text-gray-500 mb-3">Keep your profile updated, respond quickly and get more job opportunities.</p>
                <div className="flex items-center justify-between">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-colors">
                    Optimize Your Profile
                  </button>
                  <div className="text-2xl">📈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pro Tip footer */}
      <footer className="bg-white border-t border-gray-100 py-3">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-green-500 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-green-600">Pro Tip:</span>{" "}
              Deliver excellent service to get more reviews and attract high-paying jobs.
            </p>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </footer>
    </div>
  );
}
