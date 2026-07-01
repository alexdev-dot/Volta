import { useState } from "react";
import { CheckCircle, Star, Users, CreditCard, Calendar, BarChart2, Bell, MapPin, Zap, Shield, TrendingUp, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";

const SERVICES = ["Plumbing","Electrical","Carpentry","Cleaning","Painting","HVAC","Mechanic","Masonry","Landscaping","Other"];

const BENEFITS = [
  { icon: Users, label: "Expand Clientele", desc: "Expand clientele to grow and your business", color: "bg-green-100", iconColor: "text-green-700" },
  { icon: CreditCard, label: "Secure Weekly Payments", desc: "Secure weekly payments secure weekly payments", color: "bg-blue-100", iconColor: "text-blue-700" },
  { icon: Calendar, label: "Flexible Schedule", desc: "Pick watch to time and flexible schedule", color: "bg-purple-100", iconColor: "text-purple-700" },
  { icon: BarChart2, label: "Advanced Business Tools", desc: "Advanced business advanced business tools", color: "bg-orange-100", iconColor: "text-orange-600" },
];

const TESTIMONIALS = [
  { name: "David Mwangi", text: "David Mwangi har business growing growth, grown thar psast tnamigh business now.", rating: 5, img: "https://i.pravatar.cc/60?img=52" },
  { name: "John Kamau", text: "John Kamau growth has some latest their business growth I antised any business in.", rating: 5, img: "https://i.pravatar.cc/60?img=11" },
];

export default function ForProfessionalsPage() {
  const [service, setService] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [regCode, setRegCode] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar active="For Professionals" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-green-50 to-white pt-14 pb-6 px-4 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-8 right-12 w-16 h-16 border-2 border-green-200 rounded-xl opacity-40 rotate-12" />
        <div className="absolute top-20 right-40 w-8 h-8 border-2 border-green-300 rounded-lg opacity-30 -rotate-6" />
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-green-100 rounded-xl opacity-50 rotate-6" />
        <div className="absolute top-12 left-8 w-6 h-6 bg-green-200 rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            Grow Your Business with GigaFix.<br />
            Join our network of verified pros.
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Connect with thousands of customers looking for your skills. Get verified, get booked, get paid.
          </p>
        </div>

        {/* Main content row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Dashboard mockup */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Dashboard header */}
              <div className="bg-green-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">GF</span>
                  </div>
                  <span className="text-white text-sm font-bold">Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-green-200" />
                  <img src="https://i.pravatar.cc/30?img=52" className="w-6 h-6 rounded-full border-2 border-white" alt="pro" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 px-4 py-3 border-b border-gray-100">
                {[
                  { label: "Bookings", value: "34", icon: "📅", trend: "+3" },
                  { label: "Income", value: "KSh.3K", icon: "💰" },
                  { label: "Client Leads", value: "23", icon: "👥" },
                ].map((s, i) => (
                  <div key={i} className={`rounded-xl p-2.5 ${i === 0 ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-100"}`}>
                    <p className="text-[9px] text-gray-500 font-medium mb-1">{s.label}</p>
                    <div className="flex items-end gap-1">
                      <p className="text-base font-extrabold text-gray-900">{s.value}</p>
                      {s.trend && <span className="text-[9px] font-bold text-green-600 mb-0.5">{s.trend}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map + sidebar */}
              <div className="flex">
                {/* Left category tabs */}
                <div className="w-14 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-3 gap-3">
                  {[
                    { label: "Plumbing", icon: "🔧", active: true },
                    { label: "Electrical", icon: "⚡", active: false },
                  ].map((tab, i) => (
                    <div key={i} className={`w-10 rounded-xl px-1 py-2 flex flex-col items-center gap-0.5 cursor-pointer ${tab.active ? "bg-green-100 border border-green-300" : "bg-white border border-gray-200"}`}>
                      <span className="text-base">{tab.icon}</span>
                      <span className={`text-[7px] font-bold text-center leading-tight ${tab.active ? "text-green-700" : "text-gray-500"}`}>{tab.label}</span>
                    </div>
                  ))}
                  <div className="w-10 bg-white border border-gray-200 rounded-xl px-1 py-2 flex flex-col items-center gap-1">
                    {["🔧","⚡","🔩"].map((ic, i) => (
                      <span key={i} className="text-sm">{ic}</span>
                    ))}
                  </div>
                </div>

                {/* Map area */}
                <div className="flex-1 relative bg-[#e8f0e4] overflow-hidden" style={{ height: 160 }}>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#c8d8c0" strokeWidth="3" />
                    <line x1="0" y1="70" x2="100" y2="70" stroke="#c8d8c0" strokeWidth="1.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#c8d8c0" strokeWidth="2" />
                    <line x1="25" y1="0" x2="25" y2="100" stroke="#c8d8c0" strokeWidth="1" />
                    <rect x="30" y="53" width="40" height="15" rx="1" fill="#d4e8cc" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-500">Ruiru, Kiambu</span>
                  </div>
                  {[
                    { x: "25%", y: "30%", color: "bg-blue-500" },
                    { x: "50%", y: "35%", color: "bg-blue-500" },
                    { x: "65%", y: "55%", color: "bg-green-600" },
                    { x: "35%", y: "65%", color: "bg-green-600" },
                    { x: "75%", y: "30%", color: "bg-blue-500" },
                  ].map((p, i) => (
                    <div key={i} className={`absolute w-3.5 h-3.5 ${p.color} rounded-full border-2 border-white shadow-sm -translate-x-1/2 -translate-y-1/2`} style={{ left: p.x, top: p.y }} />
                  ))}
                </div>
              </div>

              {/* Status & payments */}
              <div className="px-4 py-3 space-y-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-500 font-medium">Verified Status</p>
                    <p className="text-[10px] font-bold text-gray-800">Verified Status</p>
                  </div>
                  <div className="flex items-center gap-1 bg-green-600 text-white rounded-full px-2.5 py-0.5">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-[9px] font-bold">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-500 font-medium">Average Rating</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                      <Star className="w-3 h-3 fill-yellow-200 text-yellow-300" />
                      <span className="text-[10px] font-bold text-gray-700 ml-1">4.8</span>
                    </div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="bg-gray-50 rounded-xl p-2">
                  <p className="text-[9px] text-gray-500 mb-1">Payments <span className="text-orange-500">(KSh 75,000 pending)</span></p>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full w-3/4 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-500">
                    <span>Summary</span><span className="font-bold">KSh 75,000</span>
                  </div>
                  <div className="flex justify-between text-[8px] text-gray-700 font-bold">
                    <span>Total Income</span><span>KSh 75,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right features + form */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Get Certified */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-700" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm">Get Certified</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Verify your certification.</p>
              <div className="space-y-2">
                {["Background check","Skill assessment","Insurance"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 fill-green-100 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instant Bookings */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm">Instant Bookings</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Push notification concept:</p>
              {/* Mini calendar */}
              <div className="bg-gray-50 rounded-xl p-2.5">
                <div className="grid grid-cols-7 gap-0.5">
                  {["S","M","T","W","T","F","S"].map((d,i) => (
                    <div key={i} className="text-center text-[8px] text-gray-400 font-medium">{d}</div>
                  ))}
                  {[...Array(30)].map((_,i) => {
                    const day = i + 1;
                    const isBooked = [3,8,12,17,22].includes(day);
                    const isToday = day === 15;
                    return (
                      <div key={i} className={`text-center text-[8px] py-0.5 rounded-sm font-medium
                        ${isToday ? "bg-green-600 text-white rounded-full" :
                          isBooked ? "bg-green-100 text-green-700 rounded-full" :
                          "text-gray-500"}`}>
                        {day <= 30 ? day : ""}
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <Bell className="w-3 h-3 text-green-600" />
                  <span className="text-[9px] text-gray-600 font-semibold">New booking alert received!</span>
                </div>
              </div>
            </div>

            {/* Smart Pricing */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 text-yellow-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm">Smart Pricing Tools</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Competitive pricing insight:</p>
              <div className="space-y-3">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="flex gap-2.5 bg-gray-50 rounded-xl p-2.5">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-gray-700 leading-snug mb-1">"{t.text}"</p>
                      <p className="text-[9px] font-bold text-gray-800">{t.name}</p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array(t.rating).fill(0).map((_, j) => (
                          <Star key={j} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Join form */}
            <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-5">
              <h3 className="font-extrabold text-gray-900 text-base mb-4">Join as a Pro</h3>
              <div className="space-y-3">
                <div>
                  <input
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    type="text"
                    placeholder="Business Name"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                <div className="relative">
                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full appearance-none border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-green-400 transition-colors bg-white"
                  >
                    <option value="">Primary Service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <div>
                  <input
                    value={regCode}
                    onChange={e => setRegCode(e.target.value)}
                    type="text"
                    placeholder="Registration Code (Optional)"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-400 transition-colors"
                  />
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">
                  Join as a Pro
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-3">
                Already a member? <a href="/sign-in" className="text-green-600 font-semibold">Sign in here</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits at a Glance */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Benefits at a Glance</h2>
          <p className="text-gray-500 text-sm mb-8">Everything you need to run and grow your service business.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {BENEFITS.map(b => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow text-center">
                  <div className={`w-12 h-12 ${b.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 ${b.iconColor}`} />
                  </div>
                  <h4 className="font-extrabold text-gray-900 text-sm mb-1">{b.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "12,000+", label: "Customers Served" },
            { value: "850+", label: "Verified Professionals" },
            { value: "4.8★", label: "Average Rating" },
            { value: "KSh 2M+", label: "Paid to Pros Monthly" },
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-green-600 mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to join steps */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">How to Get Started</h2>
          <p className="text-gray-500 text-sm mb-10">Three simple steps to start earning on GigaFix</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Create Your Profile", desc: "Sign up with your business info, upload an ID, and list your skills and service area.", icon: Users },
              { step: "02", title: "Get Verified", desc: "Our team reviews your credentials, runs a background check, and activates your account within 24 hours.", icon: Shield },
              { step: "03", title: "Start Earning", desc: "Receive job requests, confirm bookings, complete jobs, and get paid every week directly to your M-Pesa.", icon: CreditCard },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-white rounded-2xl border border-gray-100 p-7 text-left hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-extrabold text-green-100 leading-none select-none">{item.step}</div>
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <a href="/sign-up" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm text-sm">
              Apply as a Professional
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
