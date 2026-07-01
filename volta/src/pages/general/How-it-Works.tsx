import { ArrowRight, CheckCircle, Monitor, UserSearch, CalendarCheck, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import stepChoose from "@/assets/step-choose.png";
import stepMatch from "@/assets/step-match.png";
import stepBook from "@/assets/step-book.png";
import stepTrack from "@/assets/step-track.png";

const STEPS = [
  {
    icon: Monitor,
    label: "Choose Your Service",
    img: stepChoose,
    bullets: ["Detailed service descriptions", "Instant pricing", "Customizable options"],
  },
  {
    icon: UserSearch,
    label: "Find & Match",
    img: stepMatch,
    bullets: ["Verified skill profiles", "Real customer ratings and reviews (4.8 stars, etc.)", "Provider availability"],
  },
  {
    icon: CalendarCheck,
    label: "Book & Confirm",
    img: stepBook,
    bullets: ["Flexible scheduling", "Instant confirmation", "Secure in-app payment details"],
  },
  {
    icon: MapPin,
    label: "Relax & Track",
    img: stepTrack,
    bullets: ["Live service provider tracking", "Arrival time notifications", "Service satisfaction guarantee"],
  },
];

const MINI_STEPS = [
  { icon: Monitor,       num: 1, label: "Choose a Service",      desc: "Select the service you need" },
  { icon: UserSearch,    num: 2, label: "Find a Professional",   desc: "We match you with verified experts" },
  { icon: CalendarCheck, num: 3, label: "Book & Confirm",        desc: "Pick a time and confirm your booking" },
  { icon: CheckCircle,   num: 4, label: "Relax & Enjoy",         desc: "Sit back while we handle the rest" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar active="How It Works" />

      {/* Hero */}
      <section className="relative bg-white pt-10 pb-6 px-4 overflow-hidden">
        <div className="absolute top-3 right-24 w-9 h-9 border-2 border-green-200 rounded-lg rotate-12 opacity-50" />
        <div className="absolute top-14 right-14 w-6 h-6 border-2 border-green-300 rounded rotate-45 opacity-40" />
        <div className="absolute top-6 right-8 w-14 h-14 bg-green-50 rounded-2xl rotate-6 opacity-50" />
        <div className="absolute top-24 right-44 w-7 h-7 border border-green-100 rounded rotate-12 opacity-30" />
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">HOW IT WORKS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            How It Works:<br />
            Simple Steps to a Fixed Home
          </h1>
        </div>
      </section>

      {/* 4 Step Cards */}
      <section className="pb-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, idx) => (
            <div key={step.label} className="relative rounded-2xl overflow-hidden shadow-sm">
              {/* Arrow between cards */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md">
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </div>
              )}
              <img
                src={step.img}
                alt={step.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Simple steps timeline */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">HOW IT WORKS</p>
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">
            Simple Steps to <span className="text-green-500">Get Things Done</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {MINI_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex md:flex-1 items-center">
                  <div className="flex items-center gap-3 py-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-green-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                        {s.num}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-green-600">{s.label}</p>
                      <p className="text-[10px] text-gray-500 max-w-[100px] leading-tight">{s.desc}</p>
                    </div>
                  </div>
                  {idx < MINI_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-10 flex-shrink-0 mx-1">
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
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
