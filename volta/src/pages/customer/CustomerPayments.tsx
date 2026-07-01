import { ArrowUpRight, ArrowDownLeft, ChevronRight, Plus, MoreHorizontal, Clock, Headphones } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

const TRANSACTIONS = [
  {
    icon: "↗️",
    iconBg: "bg-red-50",
    title: "Payment for Plumbing Service",
    id: "Booking ID: GJF12453",
    pro: "John Kamau (Plumber)",
    date: "Jun 25, 2026 • 10:30 AM",
    amount: "- KSh 1,200",
    amountColor: "text-red-500",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    icon: "↗️",
    iconBg: "bg-red-50",
    title: "Payment for Electrical Installation",
    id: "Booking ID: GJF12452",
    pro: "David Mwangi (Electrician)",
    date: "Jun 22, 2026 • 02:15 PM",
    amount: "- KSh 2,000",
    amountColor: "text-red-500",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    icon: "↙️",
    iconBg: "bg-green-50",
    title: "Wallet Top Up",
    id: "MPESA",
    pro: "",
    date: "Jun 20, 2026 • 09:45 AM",
    amount: "+ KSh 2,000",
    amountColor: "text-green-600",
    status: "Completed",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    icon: "↩️",
    iconBg: "bg-orange-50",
    title: "Refund for Cancelled Booking",
    id: "Booking ID: GJF12440",
    pro: "AC Repair Service",
    date: "Jun 18, 2026 • 11:20 AM",
    amount: "+ KSh 800",
    amountColor: "text-green-600",
    status: "Refunded",
    statusColor: "bg-orange-100 text-orange-600",
  },
];

export default function CustomerPayments() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Payments" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold text-gray-900">Payment</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage your payments and transaction history</p>
        </div>

        <div className="flex gap-5">
          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Wallet card */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-6 mb-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white rounded-full" />
                <div className="absolute -bottom-10 -left-5 w-36 h-36 bg-white rounded-full" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💳</span>
                  </div>
                  <span className="text-sm text-white/75 font-medium">Wallet Balance</span>
                </div>
                <p className="text-4xl font-extrabold mb-5">KSh 2,450</p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
                    <Plus className="w-4 h-4" /> Add Money
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 border border-white/30 hover:bg-white/10 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-5">
              <div className="flex border-b border-gray-100">
                {["Overview", "Transactions", "Methods"].map((tab, i) => (
                  <button key={tab} className={`flex-1 py-3 text-sm font-semibold transition-colors ${i === 0 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-800"}`}>
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5">
                {/* Summary stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: <ArrowUpRight className="w-5 h-5 text-red-500" />, iconBg: "bg-red-50", label: "Total Spent", value: "KSh 45,680", sub: "All time spending" },
                    { icon: <ArrowDownLeft className="w-5 h-5 text-green-600" />, iconBg: "bg-green-50", label: "Total Refunds", value: "KSh 1,200", sub: "All time refunds" },
                    { icon: <Clock className="w-5 h-5 text-orange-500" />, iconBg: "bg-orange-50", label: "Pending", value: "KSh 0", sub: "No pending payments" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 rounded-xl p-4">
                      <div className={`${s.iconBg} w-9 h-9 rounded-lg flex items-center justify-center mb-2`}>{s.icon}</div>
                      <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                      <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
                      <p className="text-[10px] text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Recent transactions */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-gray-900">Recent Transactions</p>
                    <a href="#" className="flex items-center gap-1 text-sm text-green-600 font-semibold">View All Transactions <ArrowUpRight className="w-3.5 h-3.5" /></a>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-50">
                    {TRANSACTIONS.map((t) => (
                      <div key={t.title} className="flex items-center gap-4 py-3.5 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
                        <div className={`${t.iconBg} w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0`}>
                          {t.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">{t.title}</p>
                          <p className="text-xs text-gray-400">{t.id}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {t.pro && <p className="text-xs text-gray-500">{t.pro}</p>}
                          <p className="text-xs text-gray-400">{t.date}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="text-right">
                            <p className={`font-bold text-sm ${t.amountColor}`}>{t.amount}</p>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${t.statusColor}`}>{t.status}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="font-bold text-gray-900 mb-3">Quick Actions</p>
              {[
                { icon: "💳", label: "Add Money", sub: "Top up your wallet balance" },
                { icon: "🏧", label: "Payment Methods", sub: "Manage your payment methods" },
                { icon: "📋", label: "Transaction History", sub: "View your payment history" },
              ].map((a) => (
                <button key={a.label} className="w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-xl transition-colors text-left group mb-1">
                  <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{a.label}</p>
                    <p className="text-[10px] text-gray-400">{a.sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                </button>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">Payment Methods</p>
                <a href="#" className="text-xs text-green-600 font-semibold">Manage</a>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { icon: "📱", label: "MPESA", sub: "0712 345 678", badge: "Default" },
                  { icon: "💳", label: "Visa •••• 4242", sub: "Expires 12/27", badge: null },
                  { icon: "💳", label: "Mastercard •••• 8888", sub: "Expires 09/26", badge: null },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2 p-2.5 border border-gray-100 rounded-xl">
                    <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{m.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800">{m.label}</p>
                      <p className="text-[10px] text-gray-400">{m.sub}</p>
                    </div>
                    {m.badge && <span className="text-[10px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{m.badge}</span>}
                    <button className="p-1 hover:bg-gray-100 rounded-lg"><MoreHorizontal className="w-3.5 h-3.5 text-gray-400" /></button>
                  </div>
                ))}
                <button className="w-full flex items-center justify-center gap-1.5 border border-dashed border-gray-300 text-gray-500 font-semibold text-xs py-2.5 rounded-xl hover:border-green-400 hover:text-green-600 transition-colors mt-1">
                  <Plus className="w-3.5 h-3.5" /> Add New Method
                </button>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm mb-0.5">Need Help?</p>
                <p className="text-xs text-gray-400 leading-snug mb-3">If you have any questions about payments or transactions, our support team is here to help.</p>
                <button className="flex items-center gap-1.5 text-green-600 font-semibold text-xs border border-green-200 rounded-lg px-3 py-1.5 hover:bg-green-50 transition-colors">
                  <Headphones className="w-3.5 h-3.5" /> Contact Support
                </button>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
