import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* ── Custom illustrated SVG icons matching the reference design ── */

function PlumbingIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Faucet body */}
      <rect x="17" y="6" width="6" height="10" rx="2" fill="#3B82F6" />
      {/* Faucet handle */}
      <rect x="11" y="9" width="18" height="4" rx="2" fill="#2563EB" />
      {/* Pipe down */}
      <rect x="18" y="15" width="4" height="8" rx="1" fill="#3B82F6" />
      {/* Pipe elbow */}
      <path d="M18 23 Q18 27 22 27" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Pipe right */}
      <rect x="22" y="25" width="8" height="4" rx="2" fill="#3B82F6" />
      {/* Water drop */}
      <ellipse cx="20" cy="35" rx="2.5" ry="3" fill="#60A5FA" />
      {/* Wrench */}
      <path d="M8 28 L6 32 L10 34 L14 28 L12 26 Z" fill="#1D4ED8" rx="1" />
      <circle cx="9" cy="30" r="1.2" fill="#BFDBFE" />
    </svg>
  );
}

function ElectricalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Lightning bolt */}
      <path
        d="M23 5 L12 22 H20 L17 35 L30 16 H22 Z"
        fill="#F59E0B"
        stroke="#D97706"
        strokeWidth="0.5"
      />
      {/* Small sparks */}
      <circle cx="8" cy="12" r="1.5" fill="#FCD34D" />
      <circle cx="33" cy="24" r="1.5" fill="#FCD34D" />
      <circle cx="6" cy="26" r="1" fill="#FDE68A" />
      <circle cx="35" cy="14" r="1" fill="#FDE68A" />
    </svg>
  );
}

function CarpentryIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Hammer handle */}
      <rect
        x="18" y="20" width="4" height="14" rx="2"
        fill="#92400E"
        transform="rotate(-35 20 27)"
      />
      {/* Hammer head */}
      <rect
        x="14" y="8" width="14" height="9" rx="2.5"
        fill="#EA580C"
        transform="rotate(-35 21 12)"
      />
      {/* Saw */}
      <rect x="4" y="28" width="22" height="4" rx="1.5" fill="#F97316" />
      <path d="M4 28 L6 24 L8 28 L10 24 L12 28 L14 24 L16 28 L18 24 L20 28 L22 24 L24 28" stroke="#C2410C" strokeWidth="1" fill="none" />
      {/* Wood plank lines */}
      <rect x="28" y="24" width="8" height="2" rx="1" fill="#D97706" />
      <rect x="28" y="28" width="8" height="2" rx="1" fill="#D97706" />
    </svg>
  );
}

function CleaningIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Mop handle */}
      <rect x="19" y="4" width="3.5" height="20" rx="1.75" fill="#7C3AED" transform="rotate(10 20 14)" />
      {/* Mop head */}
      <path
        d="M6 26 Q10 22 14 26 Q18 30 22 26 Q26 22 30 26 L28 34 Q20 38 12 34 Z"
        fill="#A78BFA"
      />
      {/* Bubbles */}
      <circle cx="32" cy="10" r="3" stroke="#C4B5FD" strokeWidth="2" fill="none" />
      <circle cx="8" cy="16" r="2" stroke="#C4B5FD" strokeWidth="1.5" fill="none" />
      <circle cx="34" cy="20" r="2" stroke="#DDD6FE" strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="8" r="1.5" stroke="#DDD6FE" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Hard hat brim */}
      <ellipse cx="20" cy="27" rx="16" ry="4" fill="#475569" />
      {/* Hard hat dome */}
      <path
        d="M6 27 Q6 12 20 10 Q34 12 34 27 Z"
        fill="#64748B"
      />
      {/* Hard hat highlight stripe */}
      <path
        d="M10 26 Q10 15 20 13 Q30 15 30 26"
        stroke="#94A3B8"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 2"
      />
      {/* Badge on hat */}
      <rect x="14" y="20" width="12" height="5" rx="1.5" fill="#1E293B" />
      <path d="M17 22.5 L19 20.5 L21 22.5 L19 24.5 Z" fill="#F59E0B" />
    </svg>
  );
}

function MechanicsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Wrench body */}
      <path
        d="M28 6 C32 6 35 9 35 13 C35 15 34 17 32 18 L16 34 C15 35 13 35 12 34 L8 30 C7 29 7 27 8 26 L24 10 C25 8 26 6 28 6 Z"
        fill="#EF4444"
      />
      {/* Wrench opening */}
      <path
        d="M28 6 C30 6 32 7 33 9 L30 12 C30 11 29 10 28 10 C26 10 25 11 25 13 C25 14 25 15 26 16 L24 18 C22 16 22 14 22 13 C22 9 25 6 28 6 Z"
        fill="#B91C1C"
      />
      {/* Handle detail */}
      <rect x="8" y="26" width="14" height="5" rx="2" fill="#DC2626" transform="rotate(-45 15 28.5)" />
      {/* Nut hex */}
      <circle cx="11" cy="30" r="3.5" fill="#FCA5A5" />
      <path d="M11 27 L13.5 28.5 L13.5 31.5 L11 33 L8.5 31.5 L8.5 28.5 Z" fill="#EF4444" strokeWidth="0.5" stroke="#B91C1C" />
    </svg>
  );
}

const services = [
  {
    name: "Plumbing",
    desc: "Fix leaks, pipes & more",
    Icon: PlumbingIcon,
    bg: "bg-blue-50 hover:bg-blue-100",
    iconBg: "bg-blue-100",
    nameColor: "text-blue-700",
  },
  {
    name: "Electrical",
    desc: "Power issues? We've got you",
    Icon: ElectricalIcon,
    bg: "bg-yellow-50 hover:bg-yellow-100",
    iconBg: "bg-yellow-100",
    nameColor: "text-yellow-700",
  },
  {
    name: "Carpentry",
    desc: "Furniture, doors & woodwork",
    Icon: CarpentryIcon,
    bg: "bg-orange-50 hover:bg-orange-100",
    iconBg: "bg-orange-100",
    nameColor: "text-orange-700",
  },
  {
    name: "Cleaning",
    desc: "Home or office cleaning",
    Icon: CleaningIcon,
    bg: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
    nameColor: "text-purple-700",
  },
  {
    name: "Construction",
    desc: "Building & renovation",
    Icon: ConstructionIcon,
    bg: "bg-slate-50 hover:bg-slate-100",
    iconBg: "bg-slate-200",
    nameColor: "text-slate-700",
  },
  {
    name: "Mechanics",
    desc: "Car repairs & maintenance",
    Icon: MechanicsIcon,
    bg: "bg-red-50 hover:bg-red-100",
    iconBg: "bg-red-100",
    nameColor: "text-red-700",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
          Popular Services
        </p>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Services for <span className="text-green-600">Every Need</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-7">
          {services.map((service) => (
            <button
              key={service.name}
              className={`${service.bg} rounded-2xl p-4 text-left cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
                <service.Icon />
              </div>
              <p className={`font-bold text-sm ${service.nameColor} mb-1`}>{service.name}</p>
              <p className="text-gray-500 text-xs leading-snug">{service.desc}</p>
            </button>
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center">
          <Link href="/customer/services">
            <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-green-500 hover:text-green-600 text-gray-700 font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors hover:bg-green-50">
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
