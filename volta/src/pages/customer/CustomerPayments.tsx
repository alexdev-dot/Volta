import { useState } from "react";
import { Plus, ChevronRight, MoreHorizontal, MessageCircle, AlertTriangle, Shield, Filter, CheckCircle } from "lucide-react";
import CustomerNav from "@/components/navigation/CustomerNav";
import visaIcon from "../../assets/mobile-icon/visa.jpg";
import mastercardIcon from "../../assets/mobile-icon/mastercard.png";
import mpesaIcon from "../../assets/mobile-icon/M-PESA.webp";

const STAT_CARDS = [
  { icon: "💳", iconBg: "bg-green-50",  label: "Total Spent",        value: "KSh 24,800", sub: "All time" },
  { icon: "⏳", iconBg: "bg-orange-50", label: "Pending Payments",   value: "KSh 8,600",  sub: "2 Payments" },
  { icon: "📅", iconBg: "bg-blue-50",   label: "Completed Payments", value: "KSh 16,200", sub: "12 Payments" },
  { icon: "🔄", iconBg: "bg-purple-50", label: "Refunds",            value: "KSh 0",      sub: "0 Refunds" },
];

const TXNS = [
  { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=120&q=70", title: "Fix Kitchen Sink Leak",   pro: "John Kamau (Plumber)",          location: "Ruiru, Kiambu County", date: "May 22, 2024", time: "10:00 AM", status: "Completed", amount: "KSh 1,200", sub: "Paid",      pending: false, cancelled: false },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70",    title: "Install Ceiling Lights", pro: "David Mwangi (Electrician)",    location: "Ruiru, Kiambu County", date: "May 20, 2024", time: "2:00 PM",  status: "Pending",   amount: "KSh 2,000", sub: "Due",       pending: true,  cancelled: false },
  { img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=120&q=70",    title: "Sofa Deep Cleaning",     pro: "Mary Wanjiku (Cleaner)",        location: "Ruiru, Kiambu County", date: "May 18, 2024", time: "9:00 AM",  status: "Completed", amount: "KSh 800",   sub: "Paid",      pending: false, cancelled: false },
  { img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=120&q=70",    title: "House Painting",         pro: "Daniel Mutua (Painter)",        location: "Ruiru, Kiambu County", date: "May 15, 2024", time: "11:00 AM", status: "Completed", amount: "KSh 5,500", sub: "Paid",      pending: false, cancelled: false },
  { img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=120&q=70", title: "AC Repair & Maintenance",pro: "Peter Ndungu (HVAC Technician)",location: "Ruiru, Kiambu County", date: "May 12, 2024", time: "4:00 PM",  status: "Cancelled", amount: "KSh 1,500", sub: "Cancelled", pending: false, cancelled: true },
];

const STATUS_STYLES: Record<string, string> = {
  Completed: "bg-green-50 text-green-600",
  Pending:   "bg-orange-50 text-orange-500",
  Cancelled: "bg-red-50 text-red-500",
};

function SpendingChart() {
  const pts: [number, number][] = [[0,70],[30,55],[65,40],[100,50],[135,20],[170,10]];
  const path = pts.map((p,i) => `${i===0?"M":"L"}${p[0]},${p[1]}`).join(" ");
  const area = path + ` L${pts[pts.length-1][0]},90 L0,90 Z`;
  return (
    <svg viewBox="0 0 170 90" className="w-full h-24 sm:h-28" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sg2)" />
      <path d={path} fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x,y],i) => <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" />)}
    </svg>
  );
}

const PAYMENT_METHODS = [
  { brand: "VISA",  last4: "4242", expiry: "Expires 12/26", primary: true,  mpesa: false, img: visaIcon },
  { brand: "MC",    last4: "5555", expiry: "Expires 08/25", primary: false, mpesa: false, img: mastercardIcon },
  { brand: "MPESA", last4: "1234", expiry: "M-PESA Account",primary: false, mpesa: true,  img: mpesaIcon },
];

export default function CustomerPayments() {
  const [activeTab, setActiveTab] = useState("All Transactions");

  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomerNav active="Payments" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        <div className="flex gap-5 lg:gap-6">

          {/* ── Main column ── */}
          <div className="flex-1 min-w-0">

            {/* Header */}
            <div className="mb-5 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Payments</h1>
              <p className="text-gray-500 text-sm mt-1">Manage your payments, transactions, and payment methods.</p>
            </div>

            {/* Stat cards — 2 cols on mobile, 4 on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 sm:mb-6">
              {STAT_CARDS.map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-2 sm:gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 ${s.iconBg} rounded-xl flex items-center justify-center text-base sm:text-lg flex-shrink-0`}>
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">{s.value}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium truncate leading-tight">{s.label}</p>
                    <p className="text-[10px] text-gray-400 hidden sm:block">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs + filter — horizontally scrollable on mobile */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
                {["All Transactions", "Completed", "Pending", "Refunds"].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-600"
                    }`}>
                    {tab}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1.5 border border-gray-200 bg-white text-gray-700 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors flex-shrink-0">
                <Filter className="w-3.5 h-3.5" /> Filter
              </button>
            </div>

            {/* ── DESKTOP TABLE (md+) ── */}
            <div className="hidden md:block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-5">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 px-5 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500">
                <span>Service / Professional</span>
                <span>Date &amp; Time</span>
                <span>Status</span>
                <span>Amount</span>
                <span>Action</span>
              </div>
              <div className="divide-y divide-gray-50">
                {TXNS.map((t) => (
                  <div key={t.title} className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 items-center px-5 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={t.img} alt={t.title} className="w-14 h-12 object-cover rounded-xl flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">{t.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">👤 {t.pro}</p>
                        <p className="text-xs text-gray-400 truncate">📍 {t.location}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium">{t.date}</p>
                      <p className="text-xs text-gray-400">{t.time}</p>
                    </div>
                    <div>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${STATUS_STYLES[t.status]}`}>
                        {t.status === "Completed" && <CheckCircle className="w-3 h-3" />}
                        {t.status === "Pending"   && <span>⏳</span>}
                        {t.status === "Cancelled" && <span>🚫</span>}
                        {t.status}
                      </span>
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">{t.amount}</p>
                      <p className="text-xs text-gray-400">{t.sub}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {t.pending ? (
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors whitespace-nowrap">Pay Now</button>
                      ) : (
                        <button className="border border-gray-200 text-gray-700 font-semibold text-xs px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap">View Details</button>
                      )}
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MOBILE CARDS (< md) ── */}
            <div className="md:hidden flex flex-col gap-3 mb-5">
              {TXNS.map((t) => (
                <div key={t.title} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <img src={t.img} alt={t.title} className="w-14 h-12 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">{t.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">👤 {t.pro}</p>
                      <p className="text-xs text-gray-400">{t.date} • {t.time}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${STATUS_STYLES[t.status]}`}>
                      {t.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div>
                      <p className="font-extrabold text-gray-900">{t.amount}</p>
                      <p className="text-xs text-gray-400">{t.sub}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {t.pending ? (
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors">Pay Now</button>
                      ) : (
                        <button className="border border-gray-200 text-gray-700 font-semibold text-xs px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors">View Details</button>
                      )}
                      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1">
              <button className="flex items-center gap-1 px-3 sm:px-4 py-2 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" /> <span className="hidden sm:inline">Previous</span>
              </button>
              {[1, 2, 3].map((n) => (
                <button key={n} className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${n === 1 ? "bg-green-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}>{n}</button>
              ))}
              <button className="flex items-center gap-1 px-3 sm:px-4 py-2 text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
                <span className="hidden sm:inline">Next</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ── Right sidebar — desktop only ── */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">

            {/* Payment Methods */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-gray-900">Payment Methods</p>
                <button className="flex items-center gap-1 text-green-600 font-semibold text-xs hover:text-green-700">
                  <Plus className="w-3.5 h-3.5" /> Add New
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {PAYMENT_METHODS.map((m) => (
                  <div key={m.last4} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2.5">
                      <img src={m.img} alt={m.brand} className="w-12 h-8 object-contain flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800">•••• •••• •••• {m.last4}</p>
                        <p className="text-[10px] text-gray-400">{m.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {m.primary && <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Primary</span>}
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-1.5 text-green-600 font-semibold text-xs py-2.5 hover:bg-green-50 rounded-xl transition-colors">
                View All Methods <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Spending Overview */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">Spending Overview</p>
                <div className="relative">
                  <select className="appearance-none text-xs text-gray-500 font-medium border border-gray-200 rounded-lg pl-2 pr-6 py-1 outline-none bg-white cursor-pointer">
                    <option>This Month</option>
                    <option>Last Month</option>
                  </select>
                  <ChevronRight className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-gray-900 mb-0.5">KSh 6,200</p>
              <p className="text-xs text-gray-500 mb-3">Total Spent</p>
              <SpendingChart />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1 px-1">
                {["May 1","May 8","May 15","May 22","May 29"].map((l) => <span key={l}>{l}</span>)}
              </div>
              <button className="mt-3 w-full border border-gray-200 text-gray-700 font-semibold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors">View Full Report</button>
            </div>

            {/* Need Help? */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 mb-0.5">Need Help?</p>
              <p className="text-xs text-gray-400 mb-3">Our support team is here to help</p>
              {[
                { icon: MessageCircle, label: "Help Center",     sub: "Get answers to common questions", color: "bg-purple-50 text-purple-500" },
                { icon: MessageCircle, label: "Contact Support", sub: "Chat or call our support team",   color: "bg-green-50 text-green-600" },
                { icon: AlertTriangle, label: "Report an Issue", sub: "Let us know if something went wrong", color: "bg-orange-50 text-orange-500" },
              ].map(({ icon: Icon, label, sub, color }) => (
                <button key={label} className="w-full flex items-center gap-3 py-2.5 hover:bg-gray-50 -mx-1 px-1 rounded-lg transition-colors group">
                  <div className={`w-8 h-8 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs font-semibold text-gray-800">{label}</p>
                    <p className="text-[10px] text-gray-400 leading-snug">{sub}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                </button>
              ))}
            </div>

            {/* Secure Payments */}
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 border border-green-100 rounded-2xl p-5 overflow-hidden">
              <div className="absolute -right-2 -bottom-2 opacity-20 pointer-events-none">
                <Shield className="w-20 h-20 text-green-500" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">Secure Payments</p>
                </div>
                <p className="text-xs text-gray-500 leading-snug">Your payments are safe with us. We use 256-bit SSL encryption.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
