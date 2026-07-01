import { Search, ChevronDown, MoreHorizontal, Calendar, Clock, CheckCircle2, XCircle, ChevronRight, Plus } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";
import { Link } from "wouter";

const BOOKINGS = [
  {
    img: "https://images.unsplash.com/photo-1585704032915-c3400305e979?w=120&q=70",
    title: "Fix Kitchen Sink Leak",
    pro: "John Kamau (Plumber)",
    location: "Ruiru, Kiambu County",
    date: "May 22, 2024 • 10:00 AM",
    status: "Scheduled",
    statusColor: "bg-blue-100 text-blue-700",
    amount: "KSh 1,200",
    bookingId: "#GF12453",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70",
    title: "Install Ceiling Lights",
    pro: "David Mwangi (Electrician)",
    location: "Ruiru, Kiambu County",
    date: "May 20, 2024 • 2:00 PM",
    status: "Pending",
    statusColor: "bg-orange-100 text-orange-700",
    amount: "KSh 2,000",
    bookingId: "#GF12452",
  },
  {
    img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=120&q=70",
    title: "Sofa Deep Cleaning",
    pro: "Mary Wanjiku (Cleaner)",
    location: "Ruiru, Kiambu County",
    date: "May 18, 2024 • 9:00 AM",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    amount: "KSh 800",
    bookingId: "#GF12451",
  },
  {
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=120&q=70",
    title: "House Painting",
    pro: "Daniel Mutua (Painter)",
    location: "Ruiru, Kiambu County",
    date: "May 15, 2024 • 11:00 AM",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
    amount: "KSh 5,500",
    bookingId: "#GF12450",
  },
  {
    img: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=120&q=70",
    title: "AC Repair & Maintenance",
    pro: "Peter Ndungu (HVAC Technician)",
    location: "Ruiru, Kiambu County",
    date: "May 12, 2024 • 4:00 PM",
    status: "Cancelled",
    statusColor: "bg-red-100 text-red-600",
    amount: "KSh 1,500",
    bookingId: "#GF12449",
  },
];

function DonutChart() {
  const data = [
    { pct: 42, color: "#16a34a", label: "Completed" },
    { pct: 33, color: "#3b82f6", label: "Scheduled" },
    { pct: 25, color: "#f97316", label: "Pending" },
  ];
  const r = 45;
  const cx = 60;
  const cy = 60;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const segments = data.map((d) => {
    const dash = (d.pct / 100) * circumference;
    const seg = { ...d, dash, offset };
    offset += dash;
    return seg;
  });

  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth="18" />
      {segments.map((s) => (
        <circle
          key={s.label}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={s.color}
          strokeWidth="18"
          strokeDasharray={`${s.dash} ${circumference - s.dash}`}
          strokeDashoffset={-s.offset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      ))}
      <text x={cx} y={cy - 4} textAnchor="middle" className="text-xs font-bold fill-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>12</text>
      <text x={cx} y={cy + 10} textAnchor="middle" className="text-xs fill-gray-400" style={{ fontSize: 9 }}>Total</text>
    </svg>
  );
}

export default function CustomerBookings() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Bookings" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold text-gray-900">My Bookings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage all your service bookings in one place.</p>
        </div>

        <div className="flex gap-5">
          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {[
                { icon: Calendar, iconBg: "bg-green-50", iconColor: "text-green-600", value: "12", label: "Total Bookings" },
                { icon: Clock, iconBg: "bg-orange-50", iconColor: "text-orange-500", value: "3", label: "Pending" },
                { icon: Calendar, iconBg: "bg-blue-50", iconColor: "text-blue-500", value: "4", label: "Scheduled" },
                { icon: CheckCircle2, iconBg: "bg-green-50", iconColor: "text-green-600", value: "5", label: "Completed" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
                    <div className={`${s.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                      <p className="text-xs text-gray-500">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Search + filter */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input type="text" placeholder="Search bookings by service, professional or location..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-200 bg-white rounded-xl text-sm text-gray-600 pl-3 pr-8 py-2.5 outline-none">
                  <option>All Status</option>
                  <option>Scheduled</option>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Bookings list */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {BOOKINGS.map((b, i) => (
                <div key={b.title} className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${i < BOOKINGS.length - 1 ? "border-b border-gray-50" : ""}`}>
                  <img src={b.img} alt={b.title} className="w-20 h-16 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{b.title}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                      <span>👤</span> {b.pro}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-0.5">
                      <span>📍</span> {b.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>📅</span> {b.date}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${b.statusColor}`}>{b.status}</span>
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-sm">{b.amount}</p>
                      <p className="text-[10px] text-gray-400">Booking ID: {b.bookingId}</p>
                    </div>
                    <button className="border border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-700 font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                <ChevronRight className="w-3.5 h-3.5 rotate-180" /> Previous
              </button>
              {[1, 2, 3].map((n) => (
                <button key={n} className={`w-8 h-8 rounded-lg text-sm font-semibold ${n === 1 ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* Booking summary */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="font-bold text-gray-900 mb-4">Booking Summary</p>
              <div className="flex items-center gap-4 mb-4">
                <DonutChart />
                <div className="flex flex-col gap-2">
                  {[
                    { color: "bg-green-500", label: "Completed", count: 5, pct: "42%" },
                    { color: "bg-blue-500", label: "Scheduled", count: 4, pct: "33%" },
                    { color: "bg-orange-400", label: "Pending", count: 3, pct: "25%" },
                    { color: "bg-red-400", label: "Cancelled", count: 0, pct: "0%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0`} />
                      <span className="text-xs text-gray-600">{item.label}</span>
                      <span className="text-xs font-semibold text-gray-900 ml-auto">{item.count} ({item.pct})</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
                <Plus className="w-4 h-4" /> Book a New Service
              </button>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="font-bold text-gray-900 mb-0.5">Need Help?</p>
              <p className="text-xs text-gray-400 mb-3">Our support team is always here to help you.</p>
              {[
                { icon: "💬", title: "Help Center", sub: "Get answers to common questions" },
                { icon: "📞", title: "Contact Support", sub: "Chat or call our support team" },
                { icon: "⚠️", title: "Report an Issue", sub: "Let us know if something went wrong" },
              ].map((item) => (
                <button key={item.title} className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-xl transition-colors text-left group mb-1">
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                </button>
              ))}
            </div>

            {/* Become a Pro */}
            <div className="relative bg-green-800 rounded-2xl overflow-hidden p-4 text-white">
              <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&q=50" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <p className="font-extrabold text-base mb-1">Become a Pro</p>
                <p className="text-white/75 text-xs leading-snug mb-3">Join thousands of professionals and grow your business with VOLTA.</p>
                <Link href="/for-professionals">
                  <button className="bg-white text-green-800 font-bold text-xs px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
                    Join as a Professional
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
