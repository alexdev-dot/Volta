import { useState } from "react";
import { CheckCircle, Star, Users, CreditCard, Calendar, BarChart2, Bell, Zap, Shield, ChevronDown } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";
import CtaBanner from "@/components/landing/CtaBanner";
import dashboardImg from "@/assets/mockups/dashboard-mockup.png";

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
      <section className="relative bg-gradient-to-br from-white via-green-50 to-white pt-12 pb-6 px-4 overflow-hidden">
        {/* Decorative shapes — hidden on very small screens */}
        <div className="hidden sm:block absolute top-8 right-12 w-16 h-16 border-2 border-green-200 rounded-xl opacity-40 rotate-12" />
        <div className="hidden sm:block absolute top-20 right-40 w-8 h-8 border-2 border-green-300 rounded-lg opacity-30 -rotate-6" />
        <div className="hidden sm:block absolute bottom-10 right-20 w-12 h-12 bg-green-100 rounded-xl opacity-50 rotate-6" />
        <div className="hidden sm:block absolute top-12 left-8 w-6 h-6 bg-green-200 rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto text-center mb-8 px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            Grow Your Business with GigaFix.<br className="hidden sm:block" />
            {" "}Join our network of verified pros.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Connect with thousands of customers looking for your skills. Get verified, get booked, get paid.
          </p>
        </div>

        {/* Main content row */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Dashboard image */}
          <div className="lg:col-span-5 flex justify-center">
            <img
              src={dashboardImg}
              alt="GigaFix Professional Dashboard"
              className="w-full max-w-lg lg:max-w-none h-auto drop-shadow-2xl"
            />
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
