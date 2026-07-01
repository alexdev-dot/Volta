import { Monitor, UserSearch, CalendarCheck, MapPin, CheckCircle, ArrowRight, Star, Shield, Clock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import { Link } from "wouter";

const STEPS = [
  {
    id: 1,
    icon: Monitor,
    label: "Choose Your Service",
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200",
    illustration: (
      <div className="relative w-full h-52 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-56 p-3">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
            <div className="w-5 h-5 bg-green-600 rounded-md flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">GF</span>
            </div>
            <span className="text-xs font-semibold text-gray-700">GigaFix</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Plumbing","Electrical","Carpentry","Cleaning","Painting","HVAC","Mechanic","Masonry","Landscaping"].map((s, i) => (
              <div key={i} className={`rounded-lg p-1.5 flex flex-col items-center gap-0.5 cursor-pointer ${i === 0 ? "bg-green-50 border border-green-300" : "bg-gray-50 border border-gray-100"}`}>
                <div className={`w-5 h-5 rounded-full ${i === 0 ? "bg-green-200" : "bg-gray-200"} flex items-center justify-center`}>
                  <span className="text-[6px]">{["🔧","⚡","🪚","🧹","🎨","❄️","🔩","🧱","🌿"][i]}</span>
                </div>
                <span className={`text-[7px] font-medium text-center leading-tight ${i === 0 ? "text-green-700" : "text-gray-500"}`}>{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1 bg-gray-900 rounded-lg px-2 py-1.5">
            <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-white text-[9px] font-semibold">Tap a service to get started</span>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-3 w-14 h-14 bg-green-100 rounded-full opacity-60" />
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-200 rounded-full opacity-40" />
      </div>
    ),
    bullets: ["Detailed service descriptions", "Instant pricing", "Customizable options"],
  },
  {
    id: 2,
    icon: UserSearch,
    label: "Find & Match",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    illustration: (
      <div className="relative w-full h-52 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-52 p-3">
          <div className="text-[9px] text-gray-400 font-semibold uppercase mb-2">Matching algorithm</div>
          <div className="space-y-2">
            {[
              { name: "David Mwangi", role: "Electrician", rating: 4.9, match: 98, img: "https://i.pravatar.cc/60?img=12" },
              { name: "John Kamau", role: "Plumber", rating: 4.8, match: 94, img: "https://i.pravatar.cc/60?img=11" },
            ].map((p, i) => (
              <div key={i} className={`flex items-center gap-2 p-2 rounded-xl border ${i === 0 ? "border-green-300 bg-green-50" : "border-gray-100 bg-gray-50"}`}>
                <img src={p.img} className="w-8 h-8 rounded-full object-cover" alt={p.name} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold text-gray-800 truncate">{p.name}</span>
                    {i === 0 && <CheckCircle className="w-3 h-3 text-green-500 fill-green-100 flex-shrink-0" />}
                  </div>
                  <span className="text-[8px] text-gray-400">{p.role}</span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-[8px] font-semibold text-gray-600">{p.rating}</span>
                  </div>
                </div>
                <div className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"}`}>{p.match}%</div>
              </div>
            ))}
          </div>
          <button className="mt-2.5 w-full bg-green-600 text-white text-[9px] font-bold py-1.5 rounded-lg">Review Profile</button>
        </div>
        <div className="absolute -bottom-1 right-0 w-12 h-12 bg-blue-100 rounded-full opacity-60" />
        <div className="absolute top-2 -left-3 w-7 h-7 bg-blue-200 rounded-full opacity-40" />
      </div>
    ),
    bullets: ["Verified skill profiles", "Real customer ratings and reviews (4.8 stars, etc.)", "Provider availability"],
  },
  {
    id: 3,
    icon: CalendarCheck,
    label: "Book & Confirm",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    illustration: (
      <div className="relative w-full h-52 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-52 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold text-gray-700">Book Appointment</span>
            <span className="text-[8px] text-green-600 font-semibold">July 2026</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 mb-2">
            {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => <div key={d} className="text-center text-[7px] text-gray-400 font-medium">{d}</div>)}
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(d => (
              <div key={d} className={`text-center text-[8px] py-0.5 rounded-md font-medium ${d === 8 ? "bg-green-600 text-white" : d === 9 || d === 12 ? "bg-gray-100 text-gray-300" : "text-gray-600 hover:bg-green-50"}`}>{d}</div>
            ))}
          </div>
          <div className="space-y-1 mb-2">
            {["9:00 AM","11:00 AM","2:00 PM"].map((t, i) => (
              <div key={t} className={`flex items-center justify-between rounded-lg px-2 py-1 text-[8px] border ${i === 0 ? "border-green-400 bg-green-50" : "border-gray-100 bg-gray-50"}`}>
                <span className={i === 0 ? "font-bold text-green-700" : "text-gray-500"}>{t}</span>
                {i === 0 && <span className="text-green-600 font-bold">Selected</span>}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 bg-gray-900 text-white rounded-lg px-2 py-1.5">
            <Shield className="w-3 h-3 text-green-400" />
            <span className="text-[8px] font-semibold">Secure payment protected</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-100 rounded-full opacity-60" />
      </div>
    ),
    bullets: ["Flexible scheduling", "Instant confirmation", "Secure in-app payment details"],
  },
  {
    id: 4,
    icon: MapPin,
    label: "Relax & Track",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    borderColor: "border-orange-200",
    illustration: (
      <div className="relative w-full h-52 flex items-center justify-center">
        <div className="flex gap-2 items-start">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-32 p-2.5">
            <div className="text-[8px] text-gray-400 font-semibold uppercase mb-1.5">Live Tracking</div>
            <div className="bg-green-50 rounded-xl overflow-hidden h-24 relative mb-2">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-20">
                {Array(16).fill(0).map((_, i) => <div key={i} className="border border-green-300" />)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-white animate-pulse" />
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-white rounded-md px-1 py-0.5 text-[7px] font-bold text-green-700 shadow-sm">Tracking</div>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-50 rounded-lg px-1.5 py-1">
              <Clock className="w-3 h-3 text-orange-500" />
              <span className="text-[8px] font-semibold text-orange-700">ETA: 8 mins</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-2 w-24">
              <div className="flex items-center gap-1 mb-1">
                <img src="https://i.pravatar.cc/40?img=13" className="w-5 h-5 rounded-full" alt="pro" />
                <div>
                  <div className="text-[7px] font-bold text-gray-800">Peter N.</div>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                    <span className="text-[7px] text-gray-500">4.9</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500 rounded-full" />
              </div>
              <div className="text-[7px] text-gray-400 mt-0.5">75% to your location</div>
            </div>
            <div className="bg-green-600 rounded-xl shadow-md p-2 w-24">
              <Zap className="w-3 h-3 text-white mb-0.5" />
              <div className="text-[8px] font-bold text-white">Guaranteed</div>
              <div className="text-[7px] text-green-100">Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 -left-3 w-10 h-10 bg-orange-100 rounded-full opacity-60" />
      </div>
    ),
    bullets: ["Live service provider tracking", "Arrival time notifications", "Service satisfaction guarantee"],
  },
];

const MINI_STEPS = [
  { icon: Monitor, label: "Choose a Service", desc: "Select the service you need" },
  { icon: UserSearch, label: "Find a Professional", desc: "We match you with verified experts" },
  { icon: CalendarCheck, label: "Book & Confirm", desc: "Pick a time and confirm your booking" },
  { icon: CheckCircle, label: "Relax & Enjoy", desc: "Sit back while we handle the rest" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar active="How It Works" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-green-50 pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">HOW IT WORKS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            How It Works:<br />
            <span className="text-gray-800">Simple Steps to a Fixed Home</span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl mb-6">
            From leaking pipes to broken tiles — getting a trusted professional is now as easy as ordering food online.
          </p>
          <Link href="/find-services">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3 rounded-xl transition-colors shadow-sm text-sm">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* 4 Step Cards */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={`relative rounded-2xl border ${step.borderColor} bg-white overflow-visible`}>
                {/* Step badge */}
                <div className="absolute -top-3.5 left-4 w-7 h-7 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md z-10">
                  {step.id}
                </div>
                {/* Arrow connector */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/3 z-10">
                    <div className="w-7 h-7 bg-green-100 border border-green-200 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-green-600" />
                    </div>
                  </div>
                )}
                {/* Card header */}
                <div className="flex items-center gap-2 pt-7 px-4 pb-3">
                  <div className={`w-9 h-9 ${step.color} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{step.label}</h3>
                </div>

                {/* Illustration */}
                <div className="px-4 pb-2">
                  {step.illustration}
                </div>

                {/* Bottom content */}
                <div className="px-4 py-4 border-t border-gray-100">
                  <h4 className="font-extrabold text-gray-900 mb-2 text-sm">{step.label}</h4>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mini steps timeline */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-1">HOW IT WORKS</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Simple Steps to <span className="text-green-500">Get Things Done</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
            {MINI_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex md:flex-1 items-center gap-3 md:gap-0">
                  <div className="flex flex-col items-center md:items-start md:flex-row md:gap-3 flex-1">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-11 h-11 bg-green-100 border-2 border-green-300 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-green-700" />
                        </div>
                        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                          {idx + 1}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-center md:text-left">
                      <p className="text-xs font-bold text-gray-900">{s.label}</p>
                      <p className="text-xs text-gray-500 max-w-[110px]">{s.desc}</p>
                    </div>
                  </div>
                  {idx < MINI_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-10 flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Why thousands trust GigaFix</h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">Every professional on our platform goes through a rigorous vetting process so you can book with confidence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Background Checked", desc: "Every pro is verified and ID-checked before joining", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: Star, label: "4.8★ Average Rating", desc: "Real reviews from real customers, no fake profiles", color: "bg-yellow-50", iconColor: "text-yellow-500" },
              { icon: Clock, label: "Fast Response", desc: "Professionals respond within 15 minutes on average", color: "bg-blue-50", iconColor: "text-blue-600" },
              { icon: CheckCircle, label: "Satisfaction Guarantee", desc: "Not happy? We'll send another pro or refund you", color: "bg-purple-50", iconColor: "text-purple-600" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
