import { ArrowRight, CheckCircle, Monitor, UserSearch, CalendarCheck, MapPin, Star, Shield, Clock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import { Link } from "wouter";

/* ─── Illustration 1: Laptop with service grid + pointing hand ─── */
function IllustrationChoose() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Laptop body */}
      <rect x="40" y="20" width="200" height="130" rx="8" fill="#1a1a2e" />
      <rect x="48" y="28" width="184" height="114" rx="4" fill="#fff" />
      {/* Laptop screen content - GigaFix header */}
      <rect x="48" y="28" width="184" height="16" rx="4" fill="#16a34a" />
      <circle cx="56" cy="36" r="3" fill="#fff" opacity="0.6" />
      <circle cx="65" cy="36" r="3" fill="#fff" opacity="0.6" />
      <circle cx="74" cy="36" r="3" fill="#fff" opacity="0.6" />
      <text x="95" y="40" fontSize="7" fill="#fff" fontWeight="bold" fontFamily="sans-serif">GigaFix</text>
      {/* Service grid - 3x3 */}
      {/* Row 1 */}
      {[0,1,2].map(c => (
        <g key={`r0c${c}`}>
          <rect x={60 + c*56} y={52} width={46} height={36} rx="4" fill={c===0?"#dcfce7":"#f8fafc"} stroke={c===0?"#16a34a":"#e2e8f0"} strokeWidth="1"/>
          <text x={83 + c*56} y={66} fontSize="12" textAnchor="middle" fontFamily="sans-serif">{["🔧","⚡","🪚"][c]}</text>
          <text x={83 + c*56} y={80} fontSize="5.5" textAnchor="middle" fill={c===0?"#16a34a":"#64748b"} fontFamily="sans-serif" fontWeight={c===0?"bold":"normal"}>{["Plumbing","Electrical","Carpentry"][c]}</text>
        </g>
      ))}
      {/* Row 2 */}
      {[0,1,2].map(c => (
        <g key={`r1c${c}`}>
          <rect x={60 + c*56} y={95} width={46} height={36} rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
          <text x={83 + c*56} y={109} fontSize="12" textAnchor="middle" fontFamily="sans-serif">{["🧹","🎨","❄️"][c]}</text>
          <text x={83 + c*56} y={123} fontSize="5.5" textAnchor="middle" fill="#64748b" fontFamily="sans-serif">{["Cleaning","Painting","HVAC"][c]}</text>
        </g>
      ))}
      {/* Row 3 partial */}
      {[0,1].map(c => (
        <g key={`r2c${c}`}>
          <rect x={60 + c*56} y={136} width={46} height={3} rx="1" fill="#f1f5f9"/>
        </g>
      ))}
      {/* Laptop base/hinge */}
      <ellipse cx="140" cy="153" rx="110" ry="7" fill="#2d2d3f" />
      <rect x="70" y="150" width="140" height="5" rx="2" fill="#374151" />

      {/* Pointing hand (bottom right of screen) */}
      <g transform="translate(155, 108) rotate(-20)">
        {/* Hand/finger */}
        <ellipse cx="0" cy="0" rx="8" ry="22" fill="#c8a882" />
        <ellipse cx="-10" cy="12" rx="6" ry="16" fill="#c8a882" />
        <ellipse cx="10" cy="14" rx="6" ry="14" fill="#c8a882" />
        <ellipse cx="-18" cy="20" rx="5" ry="12" fill="#c8a882" />
        {/* Finger highlight */}
        <ellipse cx="0" cy="-8" rx="4" ry="10" fill="#d4a98c" />
      </g>

      {/* Decorative dots */}
      <circle cx="250" cy="30" r="4" fill="#bbf7d0" opacity="0.8"/>
      <circle cx="260" cy="50" r="2.5" fill="#86efac" opacity="0.6"/>
      <circle cx="30" cy="60" r="3" fill="#bbf7d0" opacity="0.5"/>
    </svg>
  );
}

/* ─── Illustration 2: Matching algorithm card with profile ─── */
function IllustrationMatch() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background card */}
      <rect x="20" y="10" width="170" height="170" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow1)"/>
      <defs>
        <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.1"/>
        </filter>
        <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Header bar */}
      <rect x="20" y="10" width="170" height="28" rx="12" fill="#16a34a"/>
      <rect x="20" y="26" width="170" height="12" fill="#16a34a"/>
      <text x="35" y="28" fontSize="7.5" fill="#fff" fontWeight="bold" fontFamily="sans-serif">Matching Algorithm</text>
      {/* Dots on header */}
      <circle cx="172" cy="24" r="3" fill="#4ade80"/>
      <circle cx="180" cy="24" r="3" fill="#fbbf24"/>

      {/* Bar chart */}
      <rect x="35" y="45" width="12" height="40" rx="2" fill="#bbf7d0"/>
      <rect x="52" y="55" width="12" height="30" rx="2" fill="#86efac"/>
      <rect x="69" y="38" width="12" height="47" rx="2" fill="#16a34a"/>
      <rect x="86" y="50" width="12" height="35" rx="2" fill="#4ade80"/>
      <rect x="103" y="42" width="12" height="43" rx="2" fill="#86efac"/>

      {/* Trend line */}
      <polyline points="41,72 58,62 75,50 92,66 109,54" fill="none" stroke="#15803d" strokeWidth="1.5" strokeDasharray="3,2"/>

      {/* Profile card overlay */}
      <rect x="90" y="60" width="115" height="100" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow2)"/>

      {/* Avatar circle */}
      <circle cx="125" cy="90" r="22" fill="#e8f5e9"/>
      {/* Person head */}
      <circle cx="125" cy="84" r="11" fill="#8B5E3C"/>
      {/* Hard hat */}
      <ellipse cx="125" cy="76" rx="13" ry="6" fill="#16a34a"/>
      <rect x="112" y="73" width="26" height="5" rx="2" fill="#15803d"/>
      {/* Body */}
      <path d="M108 112 Q108 100 125 100 Q142 100 142 112 Z" fill="#16a34a"/>
      {/* Face */}
      <circle cx="121" cy="86" r="1.5" fill="#fff"/>
      <circle cx="129" cy="86" r="1.5" fill="#fff"/>
      <path d="M121 91 Q125 94 129 91" fill="none" stroke="#fff" strokeWidth="1.2"/>

      {/* Verified badge */}
      <circle cx="145" cy="72" r="8" fill="#16a34a"/>
      <path d="M141 72 L144 75 L150 68" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>

      {/* Name & role */}
      <text x="125" y="122" fontSize="7.5" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontFamily="sans-serif">David Mwangi</text>
      <text x="125" y="132" fontSize="6" textAnchor="middle" fill="#64748b" fontFamily="sans-serif">Electrician</text>

      {/* Stars */}
      {[0,1,2,3,4].map(i => (
        <text key={i} x={107 + i*9} y="144" fontSize="8" fontFamily="sans-serif" fill="#f59e0b">★</text>
      ))}

      {/* Review button */}
      <rect x="105" y="148" width="40" height="10" rx="5" fill="#16a34a"/>
      <text x="125" y="156" fontSize="6" textAnchor="middle" fill="#fff" fontFamily="sans-serif">Review</text>

      {/* Decorative plus */}
      <text x="200" y="25" fontSize="16" fill="#86efac" fontFamily="sans-serif">+</text>
      <text x="28" y="170" fontSize="12" fill="#bbf7d0" fontFamily="sans-serif" opacity="0.7">+</text>
    </svg>
  );
}

/* ─── Illustration 3: Person at calendar + lock ─── */
function IllustrationBook() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Calendar */}
      <rect x="70" y="20" width="130" height="130" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
      {/* Calendar top rings */}
      <rect x="95" y="14" width="10" height="14" rx="3" fill="#94a3b8"/>
      <rect x="165" y="14" width="10" height="14" rx="3" fill="#94a3b8"/>
      {/* Calendar header */}
      <rect x="70" y="20" width="130" height="28" rx="8" fill="#16a34a"/>
      <rect x="70" y="36" width="130" height="12" fill="#16a34a"/>
      <text x="135" y="38" fontSize="8" textAnchor="middle" fill="#fff" fontWeight="bold" fontFamily="sans-serif">July 2026</text>

      {/* Day headers */}
      {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d, i) => (
        <text key={d} x={82 + i*17} y="56" fontSize="5.5" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif">{d}</text>
      ))}

      {/* Calendar days */}
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((d, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const x = 82 + col * 17;
        const y = 68 + row * 16;
        const isSelected = d === 8;
        const isGray = [9, 12].includes(d);
        return (
          <g key={d}>
            {isSelected && <circle cx={x} cy={y - 3} r="7" fill="#16a34a"/>}
            <text x={x} y={y} fontSize="6" textAnchor="middle"
              fill={isSelected ? "#fff" : isGray ? "#cbd5e1" : "#374151"}
              fontWeight={isSelected ? "bold" : "normal"}
              fontFamily="sans-serif">{d}</text>
          </g>
        );
      })}

      {/* Check mark on selected date */}
      <path d="M81 65 L84 68 L89 61" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Lock icon below calendar */}
      <rect x="118" y="115" width="34" height="26" rx="5" fill="#16a34a"/>
      <path d="M124 115 Q124 104 135 104 Q146 104 146 115" fill="none" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="135" cy="124" r="4" fill="#fff"/>
      <rect x="133" y="124" width="4" height="6" rx="1" fill="#fff"/>

      {/* Person standing (right side) */}
      {/* Head */}
      <circle cx="220" cy="68" r="18" fill="#8B5E3C"/>
      {/* Hair */}
      <path d="M204 62 Q212 46 228 46 Q238 48 238 62" fill="#2d1b09"/>
      {/* Body - green jacket */}
      <rect x="205" y="85" width="30" height="50" rx="6" fill="#16a34a"/>
      {/* Arms */}
      <path d="M205 90 Q190 105 192 120" fill="none" stroke="#16a34a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M235 90 Q245 98 243 108" fill="none" stroke="#16a34a" strokeWidth="10" strokeLinecap="round"/>
      {/* Pointing finger to calendar */}
      <path d="M192 120 Q180 115 175 110" fill="none" stroke="#c8a882" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="175" cy="110" r="4" fill="#c8a882"/>
      {/* Legs */}
      <rect x="210" y="132" width="10" height="40" rx="4" fill="#1e3a5f"/>
      <rect x="224" y="132" width="10" height="40" rx="4" fill="#1e3a5f"/>
      {/* Shoes */}
      <ellipse cx="215" cy="172" rx="10" ry="5" fill="#1e293b"/>
      <ellipse cx="229" cy="172" rx="10" ry="5" fill="#1e293b"/>
      {/* Eyes */}
      <circle cx="215" cy="66" r="2.5" fill="#fff"/>
      <circle cx="225" cy="66" r="2.5" fill="#fff"/>
      <circle cx="215" cy="67" r="1.2" fill="#1e293b"/>
      <circle cx="225" cy="67" r="1.2" fill="#1e293b"/>

      {/* Decorative sparkles */}
      <text x="240" y="40" fontSize="12" fill="#bbf7d0" fontFamily="sans-serif">✦</text>
      <text x="60" y="170" fontSize="8" fill="#86efac" fontFamily="sans-serif">✦</text>
    </svg>
  );
}

/* ─── Illustration 4: Person relaxing + phone with map ─── */
function IllustrationTrack() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Phone */}
      <rect x="155" y="15" width="90" height="160" rx="14" fill="#1e293b"/>
      <rect x="160" y="22" width="80" height="146" rx="10" fill="#e8f4e8"/>

      {/* Map background on phone */}
      <rect x="160" y="22" width="80" height="146" rx="10" fill="#d4eac8"/>
      {/* Map roads */}
      <line x1="160" y1="95" x2="240" y2="95" stroke="#b8d4a8" strokeWidth="5"/>
      <line x1="200" y1="22" x2="200" y2="168" stroke="#b8d4a8" strokeWidth="4"/>
      <line x1="160" y1="130" x2="240" y2="130" stroke="#b8d4a8" strokeWidth="3"/>
      <line x1="175" y1="22" x2="175" y2="168" stroke="#c8dbb8" strokeWidth="2"/>
      {/* Map blocks */}
      <rect x="163" y="25" width="30" height="28" rx="2" fill="#c0d9b0" opacity="0.7"/>
      <rect x="163" y="98" width="30" height="30" rx="2" fill="#c0d9b0" opacity="0.7"/>
      <rect x="203" y="98" width="35" height="30" rx="2" fill="#c0d9b0" opacity="0.7"/>
      <rect x="203" y="25" width="35" height="28" rx="2" fill="#c0d9b0" opacity="0.7"/>
      {/* Location pins on map */}
      <circle cx="200" cy="78" r="6" fill="#16a34a"/>
      <path d="M200 72 L200 68" stroke="#16a34a" strokeWidth="2"/>
      <circle cx="200" cy="78" r="3" fill="#fff"/>
      <circle cx="178" cy="115" r="5" fill="#f59e0b"/>
      <path d="M178 110 L178 107" stroke="#f59e0b" strokeWidth="2"/>
      {/* GigaFix van on map */}
      <rect x="163" y="133" width="35" height="16" rx="3" fill="#16a34a"/>
      <rect x="185" y="131" width="13" height="10" rx="2" fill="#4ade80"/>
      <circle cx="170" cy="150" r="4" fill="#1e293b"/>
      <circle cx="189" cy="150" r="4" fill="#1e293b"/>
      <text x="166" y="144" fontSize="5" fill="#fff" fontFamily="sans-serif" fontWeight="bold">GigaFix</text>
      {/* Tracking label */}
      <rect x="204" y="133" width="32" height="10" rx="3" fill="#fff"/>
      <text x="220" y="140" fontSize="5.5" textAnchor="middle" fill="#16a34a" fontFamily="sans-serif" fontWeight="bold">Tracking</text>

      {/* Phone notch */}
      <rect x="185" y="20" width="30" height="5" rx="2.5" fill="#0f172a"/>

      {/* Person relaxing (left side) */}
      {/* Head */}
      <circle cx="78" cy="58" r="22" fill="#8B5E3C"/>
      {/* Hair */}
      <path d="M58 50 Q66 32 90 36 Q104 40 100 54" fill="#2d1b09"/>
      {/* Raised arms (relaxed behind head) */}
      <path d="M56 75 Q42 55 50 42" fill="none" stroke="#8B5E3C" strokeWidth="10" strokeLinecap="round"/>
      <path d="M100 75 Q114 55 106 42" fill="none" stroke="#8B5E3C" strokeWidth="10" strokeLinecap="round"/>
      {/* Hands behind head */}
      <ellipse cx="50" cy="42" rx="8" ry="6" fill="#c8a882" transform="rotate(-20 50 42)"/>
      <ellipse cx="106" cy="42" rx="8" ry="6" fill="#c8a882" transform="rotate(20 106 42)"/>
      {/* Body */}
      <rect x="56" y="78" width="44" height="55" rx="8" fill="#16a34a"/>
      {/* Legs */}
      <rect x="58" y="130" width="14" height="45" rx="5" fill="#1e3a5f"/>
      <rect x="78" y="130" width="14" height="45" rx="5" fill="#1e3a5f"/>
      {/* Shoes */}
      <ellipse cx="65" cy="176" rx="14" ry="6" fill="#1e293b"/>
      <ellipse cx="85" cy="176" rx="14" ry="6" fill="#1e293b"/>
      {/* Eyes (happy) */}
      <circle cx="70" cy="56" r="3" fill="#fff"/>
      <circle cx="86" cy="56" r="3" fill="#fff"/>
      <circle cx="70" cy="57" r="1.5" fill="#1e293b"/>
      <circle cx="86" cy="57" r="1.5" fill="#1e293b"/>
      {/* Smile */}
      <path d="M70 67 Q78 73 86 67" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      {/* Speech bubble (home icon) */}
      <rect x="90" y="30" width="30" height="24" rx="6" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
      <path d="M105 38 L110 43 L110 51 L100 51 L100 43 Z" fill="none" stroke="#16a34a" strokeWidth="1.5"/>
      <path d="M98 43 L105 36 L112 43" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round"/>
      <polygon points="105,54 108,50 102,50" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5"/>

      {/* Decorative elements */}
      <text x="35" y="30" fontSize="12" fill="#bbf7d0" opacity="0.8" fontFamily="sans-serif">+</text>
      <text x="130" y="180" fontSize="10" fill="#86efac" fontFamily="sans-serif">✦</text>
    </svg>
  );
}

const STEPS = [
  {
    id: 1,
    icon: Monitor,
    label: "Choose Your Service",
    bg: "bg-white",
    headerIcon: "🟦",
    illustration: <IllustrationChoose />,
    bullets: ["Detailed service descriptions", "Instant pricing", "Customizable options"],
  },
  {
    id: 2,
    icon: UserSearch,
    label: "Find & Match",
    bg: "bg-white",
    illustration: <IllustrationMatch />,
    bullets: ["Verified skill profiles", "Real customer ratings and reviews (4.8 stars, etc.)", "Provider availability"],
  },
  {
    id: 3,
    icon: CalendarCheck,
    label: "Book & Confirm",
    bg: "bg-white",
    illustration: <IllustrationBook />,
    bullets: ["Flexible scheduling", "Instant confirmation", "Secure in-app payment details"],
  },
  {
    id: 4,
    icon: MapPin,
    label: "Relax & Track",
    bg: "bg-white",
    illustration: <IllustrationTrack />,
    bullets: ["Live service provider tracking", "Arrival time notifications", "Service satisfaction guarantee"],
  },
];

const MINI_STEPS = [
  { icon: Monitor, num: 1, label: "Choose a Service", desc: "Select the service you need", color: "bg-green-100", iconColor: "text-green-700" },
  { icon: UserSearch, num: 2, label: "Find a Professional", desc: "We match you with verified experts", color: "bg-green-100", iconColor: "text-green-700" },
  { icon: CalendarCheck, num: 3, label: "Book & Confirm", desc: "Pick a time and confirm your booking", color: "bg-green-100", iconColor: "text-green-700" },
  { icon: CheckCircle, num: 4, label: "Relax & Enjoy", desc: "Sit back while we handle the rest", color: "bg-green-100", iconColor: "text-green-700" },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar active="How It Works" />

      {/* Hero — matches image: left-aligned text, decorative shapes top-right */}
      <section className="relative bg-white pt-10 pb-4 px-4 overflow-hidden">
        {/* Decorative shapes top-right */}
        <div className="absolute top-4 right-32 w-8 h-8 border-2 border-green-200 rounded-md rotate-12 opacity-50" />
        <div className="absolute top-16 right-20 w-5 h-5 border-2 border-green-300 rounded-sm rotate-45 opacity-40" />
        <div className="absolute top-8 right-10 w-12 h-12 bg-green-50 rounded-xl rotate-6 opacity-60" />
        <div className="absolute top-24 right-48 w-6 h-6 border border-green-200 rounded-sm rotate-12 opacity-30" />
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">HOW IT WORKS</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            How It Works:<br />
            Simple Steps to a Fixed Home
          </h1>
        </div>
      </section>

      {/* 4 Step Cards */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-visible flex flex-col">
                {/* Arrow connector */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-[42%] z-10 w-7 h-7 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-green-600" />
                  </div>
                )}

                {/* Card header: icon + title */}
                <div className="flex items-center gap-2.5 px-4 pt-5 pb-2">
                  <div className="w-9 h-9 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{step.label}</h3>
                </div>

                {/* Illustration */}
                <div className="relative px-3 pb-2 flex-1 flex items-center justify-center" style={{ minHeight: 185 }}>
                  {/* Circular green glow bg */}
                  <div className="absolute inset-4 bg-green-50 rounded-full opacity-40" style={{ borderRadius: "50%" }} />
                  <div className="relative z-10 w-full" style={{ height: 185 }}>
                    {step.illustration}
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-4 border-t border-gray-100" />

                {/* Bottom: title + bullets */}
                <div className="px-4 py-4">
                  <h4 className="font-extrabold text-gray-900 mb-3 text-sm">{step.label}</h4>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-xs">
                        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 flex-shrink-0" />
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

      {/* Simple steps timeline — matches image exactly */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">HOW IT WORKS</p>
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">
            Simple Steps to <span className="text-green-500">Get Things Done</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
            {MINI_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex md:flex-1 items-center gap-0">
                  <div className="flex items-center gap-3 flex-1">
                    {/* Icon with number badge */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-green-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm">
                        {s.num}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-green-600">{s.label}</p>
                      <p className="text-[10px] text-gray-500 max-w-[100px] leading-tight">{s.desc}</p>
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

      <CtaBanner />
    </div>
  );
}
