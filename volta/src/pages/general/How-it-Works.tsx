import { ArrowRight, CheckCircle, Monitor, UserSearch, CalendarCheck, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import stepChoose from "@/assets/step-choose.png";
import stepMatch from "@/assets/step-match.png";
import stepBook from "@/assets/step-book.png";
import stepTrack from "@/assets/step-track.png";

const STEPS = [
  { label: "Choose Your Service", img: stepChoose },
  { label: "Find & Match",        img: stepMatch  },
  { label: "Book & Confirm",      img: stepBook   },
  { label: "Relax & Track",       img: stepTrack  },
];

const MINI_STEPS = [
  { icon: Monitor,       num: 1, label: "Choose a Service",    desc: "Select the service you need" },
  { icon: UserSearch,    num: 2, label: "Find a Professional", desc: "We match you with verified experts" },
  { icon: CalendarCheck, num: 3, label: "Book & Confirm",      desc: "Pick a time and confirm your booking" },
  { icon: CheckCircle,   num: 4, label: "Relax & Enjoy",       desc: "Sit back while we handle the rest" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar active="How It Works" />

      {/* Hero */}
      <section className="relative bg-white pt-14 pb-10 px-6 overflow-hidden">
        <div className="absolute top-4 right-28 w-10 h-10 border-2 border-green-200 rounded-xl rotate-12 opacity-50" />
        <div className="absolute top-16 right-16 w-7 h-7 border-2 border-green-300 rounded rotate-45 opacity-40" />
        <div className="absolute top-6 right-8 w-16 h-16 bg-green-50 rounded-2xl rotate-6 opacity-50" />
        <div className="absolute top-28 right-52 w-8 h-8 border border-green-100 rounded rotate-12 opacity-30" />
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">HOW IT WORKS</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            How It Works:<br />
            Simple Steps to a Fixed Home
          </h1>
        </div>
      </section>

      {/* 4 Step Cards — full images, no cropping */}
      <section className="pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {STEPS.map((step, idx) => (
            <div key={step.label} className="relative">
              {/* Arrow connector — sits between cards, outside overflow */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute -right-6 top-[42%] -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center shadow-lg">
                  <ArrowRight className="w-5 h-5 text-green-600" />
                </div>
              )}
              <div className="rounded-3xl overflow-hidden shadow-md">
                <img
                  src={step.img}
                  alt={step.label}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple steps timeline */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">HOW IT WORKS</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
            Simple Steps to <span className="text-green-500">Get Things Done</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
            {MINI_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex md:flex-1 items-center">
                  <div className="flex items-center gap-4 py-3">
                    {/* Icon with number badge */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 text-white text-xs font-extrabold rounded-full flex items-center justify-center shadow">
                        {s.num}
                      </div>
                    </div>
                    <div>
                      <p className="text-base font-extrabold text-green-600 leading-tight">{s.label}</p>
                      <p className="text-sm text-gray-500 max-w-[130px] leading-snug mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                  {idx < MINI_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center justify-center w-10 flex-shrink-0 mx-2">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
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
