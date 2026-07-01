import { Star, ChevronDown, MoreVertical, Download, ChevronRight, Users, TrendingUp } from "lucide-react";
import ProNav from "@/components/ProNav";

const REVIEWS = [
  {
    initial: "J",
    color: "bg-blue-500",
    name: "Jane Wanjiku",
    date: "May 20, 2025",
    rating: 5.0,
    stars: 5,
    service: "Plumbing",
    serviceColor: "bg-blue-50 text-blue-600",
    text: "Excellent work! Fixed our kitchen sink leak professionally and quickly.",
    reply: "Thank you Jane! It was a pleasure working on your kitchen.",
  },
  {
    initial: "K",
    color: "bg-purple-500",
    name: "Kelvin Omondi",
    date: "May 18, 2025",
    rating: 5.0,
    stars: 5,
    service: "Pipe Repair",
    serviceColor: "bg-purple-50 text-purple-600",
    text: "Very reliable and affordable. Will definitely hire again.",
    reply: "Thanks Kelvin! Looking forward to working with you again.",
  },
  {
    initial: "M",
    color: "bg-orange-500",
    name: "Mary Akinyi",
    date: "May 15, 2025",
    rating: 4.0,
    stars: 4,
    service: "Drain Cleaning",
    serviceColor: "bg-green-50 text-green-600",
    text: "Great service and friendly. They arrived on time and did a thorough job.",
    reply: "Thank you Mary! We appreciate your feedback.",
  },
  {
    initial: "S",
    color: "bg-red-400",
    name: "Samuel Njuguna",
    date: "May 10, 2025",
    rating: 5.0,
    stars: 5,
    service: "Water Heater Repair",
    serviceColor: "bg-orange-50 text-orange-600",
    text: "Fixed my water heater the same day. Very professional and honest pricing.",
    reply: "Thanks Samuel! Happy the heater is working well.",
  },
];

const RATING_BREAKDOWN = [
  { stars: 5, count: 72, pct: 83.7 },
  { stars: 4, count: 10, pct: 11.6 },
  { stars: 3, count: 3, pct: 3.5 },
  { stars: 2, count: 1, pct: 1.2 },
  { stars: 1, count: 0, pct: 0 },
];

const TOP_SERVICES = [
  { icon: "🔧", label: "Plumbing", rating: 4.9, reviews: 32 },
  { icon: "🔩", label: "Pipe Repair", rating: 4.8, reviews: 18 },
  { icon: "🚿", label: "Drain Cleaning", rating: 4.7, reviews: 14 },
  { icon: "🌡️", label: "Water Heater Repair", rating: 4.8, reviews: 12 },
  { icon: "🚽", label: "Bathroom Fitting", rating: 4.6, reviews: 10 },
];

function Stars({ count, size = "w-3.5 h-3.5" }: { count: number; size?: string }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${size} ${i <= count ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function ProReviews() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ProNav active="Reviews" showChat />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Reviews</h1>
            <p className="text-gray-500 text-sm mt-0.5">See what your customers are saying about your services.</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" /> Export Reviews
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {[
            {
              icon: <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />,
              iconBg: "bg-yellow-50",
              value: "4.8",
              label: "Average Rating",
              sub: <Stars count={5} />,
            },
            {
              icon: <Users className="w-6 h-6 text-blue-500" />,
              iconBg: "bg-blue-50",
              value: "86",
              label: "Total Reviews",
              sub: <span className="text-xs text-gray-400">All time</span>,
            },
            {
              icon: <span className="text-2xl">👥</span>,
              iconBg: "bg-green-50",
              value: "72",
              label: "5-Star Reviews",
              sub: <span className="text-xs text-gray-400">(83.7%)</span>,
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
              iconBg: "bg-purple-50",
              value: "98%",
              label: "Response Rate",
              sub: <span className="text-xs text-gray-400">Replies to reviews</span>,
            },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
              <div className={`${s.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                {s.icon}
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                <p className="text-xs font-semibold text-gray-700 mb-0.5">{s.label}</p>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Search + Filters */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4 flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-green-400 transition-colors">
                <Star className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search reviews by customer name or service..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
              </div>
              {["All Ratings", "All Services", "All Time"].map((f) => (
                <div key={f} className="relative flex-shrink-0">
                  <select className="appearance-none border border-gray-200 rounded-xl text-sm text-gray-600 pl-3 pr-8 py-2 outline-none focus:border-green-400 bg-white cursor-pointer">
                    <option>{f}</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Reviews list */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-gray-900 mb-4">All Reviews</p>
              <div className="flex flex-col divide-y divide-gray-50">
                {REVIEWS.map((r) => (
                  <div key={r.name} className="py-5 first:pt-0">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 ${r.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {r.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                            <p className="text-xs text-gray-400">{r.date}</p>
                          </div>
                          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                            <MoreVertical className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 mb-1">
                          <Stars count={r.stars} />
                          <span className="text-sm font-bold text-gray-800">{r.rating.toFixed(1)}</span>
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ml-1 ${r.serviceColor}`}>{r.service}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">{r.text}</p>
                        {/* Your reply */}
                        <div className="bg-gray-50 rounded-xl p-3 flex items-start gap-2.5">
                          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-[10px] font-bold">GF</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-700 mb-0.5">Your reply</p>
                            <p className="text-xs text-gray-600">{r.reply}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                <p className="text-xs text-gray-500">Showing 1 to 10 of 86 reviews</p>
                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40">
                    <ChevronRight className="w-4 h-4 text-gray-500 rotate-180" />
                  </button>
                  {[1, 2, 3].map((n) => (
                    <button key={n} className={`w-8 h-8 rounded-lg text-sm font-semibold ${n === 1 ? "bg-green-600 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                      {n}
                    </button>
                  ))}
                  <span className="text-gray-400 text-sm">...</span>
                  <button className="w-8 h-8 rounded-lg text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold">9</button>
                  <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                  <select className="border border-gray-200 rounded-lg text-xs text-gray-600 px-2 py-1.5 ml-1 outline-none">
                    <option>10 per page</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-72 flex-shrink-0 hidden lg:flex flex-col gap-4">
            {/* Rating Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-gray-900 mb-4">Rating Breakdown</p>
              <div className="flex flex-col gap-2.5">
                {RATING_BREAKDOWN.map((rb) => (
                  <div key={rb.stars} className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-5 flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-700">{rb.stars}</span>
                    </div>
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${rb.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-14 text-right flex-shrink-0">{rb.count} ({rb.pct}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Reviewed Services */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-gray-900 mb-4">Top Reviewed Services</p>
              <div className="flex flex-col gap-1">
                {TOP_SERVICES.map((s) => (
                  <button key={s.label} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors text-left group w-full">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{s.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800">{s.label}</p>
                      <div className="flex items-center gap-1.5">
                        <Stars count={5} size="w-2.5 h-2.5" />
                        <span className="text-[11px] text-gray-500">{s.rating} ({s.reviews} reviews)</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Improve Your Reviews */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-gray-900 mb-1">Improve Your Reviews</p>
              <p className="text-xs text-gray-400 mb-4">Happy customers are your best marketers.</p>
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🔗</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800">Share Review Link</p>
                  <p className="text-xs text-gray-400">Send link to customers to get more reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
