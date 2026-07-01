import { ArrowRight, CheckCircle, Monitor, UserSearch, CalendarCheck, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import CtaBanner from "@/components/CtaBanner";
import { Link } from "wouter";

/* ── Card 1: Laptop angled view + hand pointing ── */
function SceneChoose() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="glow1" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* Circular glow bg */}
      <ellipse cx="160" cy="118" rx="135" ry="105" fill="url(#glow1)"/>

      {/* ── Laptop body (angled perspective) ── */}
      {/* Screen panel */}
      <g transform="translate(38, 18)">
        {/* Screen outer bezel */}
        <rect x="0" y="0" width="210" height="145" rx="10" fill="#2d2d3f"/>
        {/* Screen inner */}
        <rect x="8" y="8" width="194" height="129" rx="5" fill="#f8fafc"/>
        {/* GigaFix header bar */}
        <rect x="8" y="8" width="194" height="22" rx="5" fill="#16a34a"/>
        <rect x="8" y="20" width="194" height="10" fill="#16a34a"/>
        {/* Dots */}
        <circle cx="18" cy="19" r="3.5" fill="#4ade80" opacity="0.9"/>
        <circle cx="28" cy="19" r="3.5" fill="#fbbf24" opacity="0.9"/>
        <circle cx="38" cy="19" r="3.5" fill="#f87171" opacity="0.9"/>
        <text x="80" y="22" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="sans-serif">GigaFix</text>

        {/* Service grid — 3 columns × 3 rows */}
        {/* Row 1 */}
        {[
          {emoji:"🔧",label:"Plumbing",active:true},
          {emoji:"⚡",label:"Electrical"},
          {emoji:"🪚",label:"Carpentry"},
        ].map((s,c) => (
          <g key={c}>
            <rect x={16+c*63} y={36} width={54} height={38} rx="6"
              fill={s.active?"#dcfce7":"#f8fafc"}
              stroke={s.active?"#16a34a":"#e2e8f0"} strokeWidth="1.2"/>
            <text x={43+c*63} y={54} fontSize="15" textAnchor="middle">{s.emoji}</text>
            <text x={43+c*63} y={67} fontSize="6" textAnchor="middle"
              fill={s.active?"#15803d":"#64748b"} fontWeight={s.active?"bold":"normal"} fontFamily="sans-serif">{s.label}</text>
          </g>
        ))}
        {/* Row 2 */}
        {[
          {emoji:"🧹",label:"Cleaning"},
          {emoji:"🎨",label:"Painting"},
          {emoji:"❄️",label:"HVAC"},
        ].map((s,c) => (
          <g key={c}>
            <rect x={16+c*63} y={80} width={54} height={38} rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.2"/>
            <text x={43+c*63} y={98} fontSize="15" textAnchor="middle">{s.emoji}</text>
            <text x={43+c*63} y={111} fontSize="6" textAnchor="middle" fill="#64748b" fontFamily="sans-serif">{s.label}</text>
          </g>
        ))}
        {/* Row 3 */}
        {[
          {emoji:"🔩",label:"Mechanic"},
          {emoji:"🏗️",label:"Masonry"},
          {emoji:"🌿",label:"Landscaping"},
        ].map((s,c) => (
          <g key={c}>
            <rect x={16+c*63} y={124} width={54} height={20} rx="4" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.8"/>
            <text x={43+c*63} y={137} fontSize="6" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif">{s.label}</text>
          </g>
        ))}
      </g>

      {/* Laptop hinge & base */}
      <rect x="52" y="163" width="216" height="7" rx="3" fill="#374151"/>
      <ellipse cx="160" cy="172" rx="120" ry="8" fill="#2d2d3f"/>

      {/* ── Pointing hand (right side, over laptop) ── */}
      <g transform="translate(208, 95) rotate(-30)">
        {/* Palm */}
        <ellipse cx="0" cy="10" rx="18" ry="24" fill="#c8a070"/>
        {/* Index finger extended */}
        <rect x="-5" y="-28" width="10" height="38" rx="5" fill="#c8a070"/>
        {/* Other fingers curled */}
        <rect x="7" y="-8" width="9" height="22" rx="4.5" fill="#b8905e"/>
        <rect x="-14" y="-2" width="9" height="18" rx="4.5" fill="#b8905e"/>
        <rect x="-20" y="4" width="8" height="14" rx="4" fill="#b8905e"/>
        {/* Thumb */}
        <rect x="14" y="8" width="8" height="16" rx="4" fill="#c8a070" transform="rotate(40 14 8)"/>
        {/* Fingernail hint */}
        <ellipse cx="0" cy="-24" rx="4" ry="3" fill="#d4b08a"/>
      </g>

      {/* Sparkle dots */}
      <circle cx="280" cy="35" r="5" fill="#bbf7d0"/>
      <circle cx="292" cy="55" r="3" fill="#86efac"/>
      <circle cx="28" cy="75" r="4" fill="#dcfce7"/>
    </svg>
  );
}

/* ── Card 2: Overlapping matching cards (chart + profile) ── */
function SceneMatch() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="glow2" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0"/>
        </radialGradient>
        <filter id="cs2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodOpacity="0.12"/>
        </filter>
        <filter id="cs3" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="8" floodOpacity="0.18"/>
        </filter>
      </defs>
      <ellipse cx="160" cy="115" rx="135" ry="105" fill="url(#glow2)"/>

      {/* ── Back card: Matching algorithm + bar chart ── */}
      <g filter="url(#cs2)">
        <rect x="32" y="28" width="180" height="155" rx="14" fill="#fff" stroke="#e8f5e9" strokeWidth="1"/>
        {/* Green header */}
        <rect x="32" y="28" width="180" height="30" rx="14" fill="#16a34a"/>
        <rect x="32" y="44" width="180" height="14" fill="#16a34a"/>
        {/* Traffic light dots */}
        <circle cx="48" cy="43" r="4" fill="#4ade80"/>
        <circle cx="61" cy="43" r="4" fill="#fbbf24"/>
        <text x="100" y="47" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="sans-serif">Matching algorithm</text>
        {/* Bar chart */}
        <rect x="48" y="72" width="16" height="55" rx="3" fill="#bbf7d0"/>
        <rect x="70" y="85" width="16" height="42" rx="3" fill="#86efac"/>
        <rect x="92" y="60" width="16" height="67" rx="3" fill="#16a34a"/>
        <rect x="114" y="78" width="16" height="49" rx="3" fill="#4ade80"/>
        <rect x="136" y="68" width="16" height="59" rx="3" fill="#86efac"/>
        <rect x="158" y="80" width="16" height="47" rx="3" fill="#bbf7d0"/>
        {/* Trend line */}
        <polyline points="56,90 78,80 100,65 122,78 144,70 166,82" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round"/>
        {/* Bottom avatar row */}
        <circle cx="55" cy="158" r="10" fill="#e8f5e9"/>
        <circle cx="55" cy="152" r="5" fill="#8B5E3C"/>
        <path d="M46 165 Q55 160 64 165" fill="#16a34a"/>
        <rect x="72" y="150" width="70" height="4" rx="2" fill="#e2e8f0"/>
        <rect x="72" y="158" width="50" height="3" rx="1.5" fill="#f1f5f9"/>
        <rect x="152" y="148" width="40" height="16" rx="8" fill="#16a34a"/>
        <text x="172" y="159" fontSize="6.5" textAnchor="middle" fill="#fff" fontFamily="sans-serif">Review</text>
      </g>

      {/* ── Front card: Professional profile ── */}
      <g filter="url(#cs3)">
        <rect x="128" y="45" width="155" height="160" rx="14" fill="#fff" stroke="#e8f5e9" strokeWidth="1"/>

        {/* Profile photo circle */}
        <circle cx="206" cy="100" r="36" fill="#e8f5e9"/>
        {/* Character body */}
        <circle cx="206" cy="88" r="16" fill="#8B5E3C"/>
        {/* Hard hat */}
        <ellipse cx="206" cy="76" rx="19" ry="8" fill="#16a34a"/>
        <rect x="188" y="72" width="36" height="8" rx="2" fill="#15803d"/>
        {/* Body */}
        <path d="M181 135 Q181 118 206 118 Q231 118 231 135 Z" fill="#16a34a"/>
        {/* Face */}
        <circle cx="200" cy="90" r="2.5" fill="#fff"/>
        <circle cx="212" cy="90" r="2.5" fill="#fff"/>
        <path d="M200 96 Q206 100 212 96" fill="none" stroke="#fff" strokeWidth="1.5"/>
        {/* Verified badge */}
        <circle cx="234" cy="72" r="11" fill="#16a34a" stroke="#fff" strokeWidth="2"/>
        <path d="M229 72 L233 76 L240 67" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Name + role */}
        <text x="206" y="142" fontSize="9.5" textAnchor="middle" fill="#1e293b" fontWeight="bold" fontFamily="sans-serif">David Mwangi</text>
        <text x="206" y="155" fontSize="7.5" textAnchor="middle" fill="#64748b" fontFamily="sans-serif">Electrician</text>

        {/* Stars */}
        {[0,1,2,3,4].map(i => (
          <text key={i} x={181 + i*12} y="172" fontSize="12" fill="#f59e0b" fontFamily="sans-serif">★</text>
        ))}

        {/* Review button */}
        <rect x="162" y="177" width="88" height="18" rx="9" fill="#16a34a"/>
        <text x="206" y="189" fontSize="8" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontWeight="bold">Review Profile</text>
      </g>

      {/* Decorative plus signs */}
      <text x="292" y="40" fontSize="20" fill="#86efac" fontFamily="sans-serif" opacity="0.8">+</text>
      <text x="24" y="185" fontSize="14" fill="#bbf7d0" fontFamily="sans-serif" opacity="0.7">+</text>
    </svg>
  );
}

/* ── Card 3: Calendar + person pointing + lock ── */
function SceneBook() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="glow3" cx="48%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="155" cy="118" rx="135" ry="100" fill="url(#glow3)"/>

      {/* ── Calendar ── */}
      <rect x="28" y="22" width="175" height="170" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
      {/* Calendar rings */}
      <rect x="60" y="14" width="12" height="18" rx="4" fill="#94a3b8"/>
      <rect x="100" y="14" width="12" height="18" rx="4" fill="#94a3b8"/>
      <rect x="140" y="14" width="12" height="18" rx="4" fill="#94a3b8"/>
      {/* Calendar header */}
      <rect x="28" y="22" width="175" height="34" rx="10" fill="#16a34a"/>
      <rect x="28" y="42" width="175" height="14" fill="#16a34a"/>
      <text x="115" y="43" fontSize="10" textAnchor="middle" fill="#fff" fontWeight="bold" fontFamily="sans-serif">July 2026</text>

      {/* Day headers */}
      {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d,i) => (
        <text key={d} x={43+i*22} y="68" fontSize="7" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif" fontWeight="600">{d}</text>
      ))}

      {/* Calendar days */}
      {[
        [1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14],
        [15,16,17,18,19,20,21],
        [22,23,24,25,26,27,28],
      ].map((row,r) => row.map((d,c) => {
        const x = 43+c*22, y = 84+r*22;
        const isSelected = d===8;
        const isGray = [9,12].includes(d);
        return (
          <g key={d}>
            {isSelected && <circle cx={x} cy={y-4} r="9" fill="#16a34a"/>}
            {isSelected && (
              <path d={`M${x-4} ${y-4} L${x-1} ${y-1} L${x+5} ${y-8}`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
            {!isSelected && (
              <text x={x} y={y} fontSize="8" textAnchor="middle"
                fill={isGray?"#cbd5e1":"#374151"} fontFamily="sans-serif">{d}</text>
            )}
          </g>
        );
      }))}

      {/* Lock icon */}
      <g transform="translate(85, 168)">
        <rect x="0" y="0" width="42" height="34" rx="6" fill="#16a34a"/>
        <path d="M7 0 Q7-16 21-16 Q35-16 35 0" fill="none" stroke="#15803d" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="21" cy="14" r="6" fill="#fff"/>
        <rect x="18" y="14" width="6" height="9" rx="2" fill="#fff"/>
      </g>

      {/* ── Person standing right, pointing at calendar ── */}
      {/* Head */}
      <circle cx="254" cy="68" r="24" fill="#8B5E3C"/>
      {/* Hair */}
      <path d="M231 60 Q238 40 254 38 Q272 38 278 56" fill="#2d1b09"/>
      {/* Eyes */}
      <circle cx="246" cy="66" r="3.5" fill="#fff"/>
      <circle cx="262" cy="66" r="3.5" fill="#fff"/>
      <circle cx="246" cy="67" r="2" fill="#1e293b"/>
      <circle cx="262" cy="67" r="2" fill="#1e293b"/>
      {/* Eyebrow furrowed */}
      <path d="M243 60 Q246 58 250 60" fill="none" stroke="#2d1b09" strokeWidth="1.5"/>
      <path d="M258 60 Q262 58 266 60" fill="none" stroke="#2d1b09" strokeWidth="1.5"/>
      {/* Nose */}
      <ellipse cx="254" cy="72" rx="2" ry="1.5" fill="#a0724a"/>
      {/* Mouth */}
      <path d="M248 77 Q254 80 260 77" fill="none" stroke="#7a4a28" strokeWidth="1.5"/>
      {/* Neck */}
      <rect x="248" y="90" width="12" height="12" rx="2" fill="#8B5E3C"/>
      {/* Body - green shirt */}
      <rect x="228" y="100" width="52" height="68" rx="10" fill="#16a34a"/>
      {/* Left arm - pointing */}
      <path d="M228 110 Q210 115 196 130" fill="none" stroke="#16a34a" strokeWidth="14" strokeLinecap="round"/>
      {/* Pointing hand */}
      <ellipse cx="194" cy="132" rx="9" ry="7" fill="#c8a070" transform="rotate(-30 194 132)"/>
      <rect x="186" y="122" width="8" height="20" rx="4" fill="#c8a070" transform="rotate(-30 186 122)"/>
      {/* Right arm down */}
      <path d="M280 110 Q288 130 285 155" fill="none" stroke="#16a34a" strokeWidth="13" strokeLinecap="round"/>
      {/* Legs */}
      <rect x="234" y="166" width="16" height="48" rx="6" fill="#1e3a5f"/>
      <rect x="254" y="166" width="16" height="48" rx="6" fill="#1e3a5f"/>
      {/* Shoes */}
      <ellipse cx="242" cy="215" rx="16" ry="6" fill="#1e293b"/>
      <ellipse cx="262" cy="215" rx="16" ry="6" fill="#1e293b"/>

      {/* Sparkle */}
      <text x="290" y="30" fontSize="16" fill="#bbf7d0" opacity="0.8" fontFamily="sans-serif">✦</text>
      <text x="22" y="198" fontSize="10" fill="#86efac" fontFamily="sans-serif" opacity="0.7">✦</text>
    </svg>
  );
}

/* ── Card 4: Relaxed person + phone with map + van ── */
function SceneTrack() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="glow4" cx="50%" cy="55%" r="45%">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="118" rx="138" ry="105" fill="url(#glow4)"/>

      {/* ── Phone mockup (right) ── */}
      <rect x="185" y="12" width="108" height="196" rx="18" fill="#1e293b"/>
      <rect x="192" y="20" width="94" height="180" rx="12" fill="#d4eac8"/>
      {/* Map roads */}
      <line x1="192" y1="110" x2="286" y2="110" stroke="#b5d4a0" strokeWidth="7"/>
      <line x1="239" y1="20" x2="239" y2="200" stroke="#b5d4a0" strokeWidth="5"/>
      <line x1="192" y1="145" x2="286" y2="145" stroke="#b5d4a0" strokeWidth="4"/>
      <line x1="215" y1="20" x2="215" y2="200" stroke="#c4d9b4" strokeWidth="2.5"/>
      {/* Map blocks */}
      <rect x="195" y="23" width="38" height="35" rx="3" fill="#c0d9a8" opacity="0.8"/>
      <rect x="195" y="114" width="38" height="28" rx="3" fill="#c0d9a8" opacity="0.8"/>
      <rect x="243" y="114" width="40" height="28" rx="3" fill="#c0d9a8" opacity="0.8"/>
      <rect x="243" y="23" width="40" height="35" rx="3" fill="#c0d9a8" opacity="0.8"/>
      {/* Location pin (green) */}
      <circle cx="239" cy="90" r="9" fill="#16a34a"/>
      <path d="M239 81 Q239 70 239 65" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="239" cy="90" r="4" fill="#fff"/>
      {/* Orange dot */}
      <circle cx="210" cy="128" r="7" fill="#f59e0b"/>
      <circle cx="210" cy="128" r="3" fill="#fff"/>
      {/* GigaFix van on road */}
      <rect x="196" y="150" width="52" height="24" rx="5" fill="#16a34a"/>
      <rect x="222" y="146" width="26" height="18" rx="4" fill="#4ade80"/>
      <circle cx="207" cy="176" r="6" fill="#1e293b"/>
      <circle cx="236" cy="176" r="6" fill="#1e293b"/>
      <rect x="200" y="156" width="8" height="8" rx="1" fill="#bbf7d0" opacity="0.8"/>
      <text x="205" y="164" fontSize="5" fill="#fff" fontFamily="sans-serif" fontWeight="bold">GF</text>
      {/* Tracking label */}
      <rect x="245" y="148" width="38" height="13" rx="5" fill="#fff"/>
      <text x="264" y="157" fontSize="6" textAnchor="middle" fill="#16a34a" fontFamily="sans-serif" fontWeight="bold">Tracking</text>
      {/* Phone notch */}
      <rect x="222" y="17" width="36" height="6" rx="3" fill="#0f172a"/>

      {/* ── Relaxed person (left) ── */}
      {/* Head */}
      <circle cx="95" cy="62" r="26" fill="#8B5E3C"/>
      {/* Hair */}
      <path d="M70 52 Q78 30 96 28 Q115 28 122 50" fill="#2d1b09"/>
      {/* Eyes happy */}
      <path d="M84 60 Q87 57 90 60" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M100 60 Q103 57 106 60" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M84 72 Q95 80 106 72" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Arms raised behind head */}
      {/* Left arm */}
      <path d="M72 88 Q50 65 52 44" fill="none" stroke="#8B5E3C" strokeWidth="13" strokeLinecap="round"/>
      <ellipse cx="52" cy="40" rx="12" ry="9" fill="#c8a070" transform="rotate(-15 52 40)"/>
      {/* Right arm */}
      <path d="M118 88 Q138 65 136 44" fill="none" stroke="#8B5E3C" strokeWidth="13" strokeLinecap="round"/>
      <ellipse cx="136" cy="40" rx="12" ry="9" fill="#c8a070" transform="rotate(15 136 40)"/>
      {/* Body */}
      <rect x="72" y="85" width="46" height="65" rx="10" fill="#16a34a"/>
      {/* Legs */}
      <rect x="76" y="147" width="16" height="55" rx="6" fill="#1e3a5f"/>
      <rect x="98" y="147" width="16" height="55" rx="6" fill="#1e3a5f"/>
      {/* Shoes */}
      <ellipse cx="84" cy="203" rx="18" ry="7" fill="#1e293b"/>
      <ellipse cx="106" cy="203" rx="18" ry="7" fill="#1e293b"/>

      {/* Speech bubble with home icon */}
      <rect x="108" y="24" width="42" height="34" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5"/>
      <polygon points="118,58 124,50 112,50" fill="#fff" stroke="#e2e8f0" strokeWidth="1"/>
      {/* House icon inside bubble */}
      <path d="M121 47 L129 38 L137 47" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="122" y="47" width="14" height="10" rx="1" fill="none" stroke="#16a34a" strokeWidth="1.8"/>
      <rect x="127" y="50" width="4" height="7" rx="1" fill="#16a34a"/>

      {/* Dashed curve from person to phone */}
      <path d="M165 100 Q175 90 185 85" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5"/>

      {/* Decorative */}
      <text x="22" y="38" fontSize="14" fill="#bbf7d0" fontFamily="sans-serif" opacity="0.7">+</text>
      <text x="300" y="195" fontSize="10" fill="#86efac" fontFamily="sans-serif" opacity="0.7">✦</text>
    </svg>
  );
}

const STEPS = [
  {
    id: 1,
    icon: Monitor,
    label: "Choose Your Service",
    scene: <SceneChoose />,
    bullets: ["Detailed service descriptions", "Instant pricing", "Customizable options"],
  },
  {
    id: 2,
    icon: UserSearch,
    label: "Find & Match",
    scene: <SceneMatch />,
    bullets: ["Verified skill profiles", "Real customer ratings and reviews (4.8 stars, etc.)", "Provider availability"],
  },
  {
    id: 3,
    icon: CalendarCheck,
    label: "Book & Confirm",
    scene: <SceneBook />,
    bullets: ["Flexible scheduling", "Instant confirmation", "Secure in-app payment details"],
  },
  {
    id: 4,
    icon: MapPin,
    label: "Relax & Track",
    scene: <SceneTrack />,
    bullets: ["Live service provider tracking", "Arrival time notifications", "Service satisfaction guarantee"],
  },
];

const MINI_STEPS = [
  { icon: Monitor, num: 1, label: "Choose a Service", desc: "Select the service you need" },
  { icon: UserSearch, num: 2, label: "Find a Professional", desc: "We match you with verified experts" },
  { icon: CalendarCheck, num: 3, label: "Book & Confirm", desc: "Pick a time and confirm your booking" },
  { icon: CheckCircle, num: 4, label: "Relax & Enjoy", desc: "Sit back while we handle the rest" },
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
        <div className="absolute top-22 right-44 w-7 h-7 border border-green-100 rounded rotate-12 opacity-30" />
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
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-visible flex flex-col">
                {/* Arrow between cards */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-4 top-[38%] z-10 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                )}

                {/* Card header */}
                <div className="flex items-center gap-2.5 px-4 pt-5 pb-3">
                  <div className="w-9 h-9 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{step.label}</h3>
                </div>

                {/* Illustration */}
                <div className="relative px-2 pb-3" style={{ height: 210 }}>
                  {step.scene}
                </div>

                {/* Divider */}
                <div className="mx-4 border-t border-gray-100" />

                {/* Bottom text */}
                <div className="px-4 py-4">
                  <h4 className="font-extrabold text-gray-900 mb-2.5 text-sm">{step.label}</h4>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-xs leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
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
