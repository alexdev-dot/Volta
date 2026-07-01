import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/* ── Custom illustrated SVG icons ── */

function PlumbingIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="17" y="6" width="6" height="10" rx="2" fill="#3B82F6" />
      <rect x="11" y="9" width="18" height="4" rx="2" fill="#2563EB" />
      <rect x="18" y="15" width="4" height="8" rx="1" fill="#3B82F6" />
      <path d="M18 23 Q18 27 22 27" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <rect x="22" y="25" width="8" height="4" rx="2" fill="#3B82F6" />
      <ellipse cx="20" cy="35" rx="2.5" ry="3" fill="#60A5FA" />
      <path d="M8 28 L6 32 L10 34 L14 28 L12 26 Z" fill="#1D4ED8" />
      <circle cx="9" cy="30" r="1.2" fill="#BFDBFE" />
    </svg>
  );
}

function ElectricalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <path d="M23 5 L12 22 H20 L17 35 L30 16 H22 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5" />
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
      <rect x="18" y="20" width="4" height="14" rx="2" fill="#92400E" transform="rotate(-35 20 27)" />
      <rect x="14" y="8" width="14" height="9" rx="2.5" fill="#EA580C" transform="rotate(-35 21 12)" />
      <rect x="4" y="28" width="22" height="4" rx="1.5" fill="#F97316" />
      <path d="M4 28 L6 24 L8 28 L10 24 L12 28 L14 24 L16 28 L18 24 L20 28 L22 24 L24 28" stroke="#C2410C" strokeWidth="1" fill="none" />
      <rect x="28" y="24" width="8" height="2" rx="1" fill="#D97706" />
      <rect x="28" y="28" width="8" height="2" rx="1" fill="#D97706" />
    </svg>
  );
}

function CleaningIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <rect x="19" y="4" width="3.5" height="20" rx="1.75" fill="#7C3AED" transform="rotate(10 20 14)" />
      <path d="M6 26 Q10 22 14 26 Q18 30 22 26 Q26 22 30 26 L28 34 Q20 38 12 34 Z" fill="#A78BFA" />
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
      <ellipse cx="20" cy="27" rx="16" ry="4" fill="#475569" />
      <path d="M6 27 Q6 12 20 10 Q34 12 34 27 Z" fill="#64748B" />
      <path d="M10 26 Q10 15 20 13 Q30 15 30 26" stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
      <rect x="14" y="20" width="12" height="5" rx="1.5" fill="#1E293B" />
      <path d="M17 22.5 L19 20.5 L21 22.5 L19 24.5 Z" fill="#F59E0B" />
    </svg>
  );
}

function MechanicsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      <path d="M28 6 C32 6 35 9 35 13 C35 15 34 17 32 18 L16 34 C15 35 13 35 12 34 L8 30 C7 29 7 27 8 26 L24 10 C25 8 26 6 28 6 Z" fill="#EF4444" />
      <path d="M28 6 C30 6 32 7 33 9 L30 12 C30 11 29 10 28 10 C26 10 25 11 25 13 C25 14 25 15 26 16 L24 18 C22 16 22 14 22 13 C22 9 25 6 28 6 Z" fill="#B91C1C" />
      <rect x="8" y="26" width="14" height="5" rx="2" fill="#DC2626" transform="rotate(-45 15 28.5)" />
      <circle cx="11" cy="30" r="3.5" fill="#FCA5A5" />
      <path d="M11 27 L13.5 28.5 L13.5 31.5 L11 33 L8.5 31.5 L8.5 28.5 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="0.5" />
    </svg>
  );
}

const services = [
  {
    name: "Plumbing",
    desc: "Fix leaks, pipes & more",
    Icon: PlumbingIcon,
    bg: "#EFF6FF",
    bgHover: "#DBEAFE",
    iconBg: "#BFDBFE",
    border: "#BFDBFE",
    nameColor: "#1D4ED8",
  },
  {
    name: "Electrical",
    desc: "Power issues? We've got you",
    Icon: ElectricalIcon,
    bg: "#FEFCE8",
    bgHover: "#FEF9C3",
    iconBg: "#FDE68A",
    border: "#FDE68A",
    nameColor: "#B45309",
  },
  {
    name: "Carpentry",
    desc: "Furniture, doors & woodwork",
    Icon: CarpentryIcon,
    bg: "#FFF7ED",
    bgHover: "#FFEDD5",
    iconBg: "#FED7AA",
    border: "#FED7AA",
    nameColor: "#C2410C",
  },
  {
    name: "Cleaning",
    desc: "Home or office cleaning",
    Icon: CleaningIcon,
    bg: "#FAF5FF",
    bgHover: "#F3E8FF",
    iconBg: "#E9D5FF",
    border: "#E9D5FF",
    nameColor: "#7E22CE",
  },
  {
    name: "Construction",
    desc: "Building & renovation",
    Icon: ConstructionIcon,
    bg: "#F1F5F9",
    bgHover: "#E2E8F0",
    iconBg: "#CBD5E1",
    border: "#CBD5E1",
    nameColor: "#334155",
  },
  {
    name: "Mechanics",
    desc: "Car repairs & maintenance",
    Icon: MechanicsIcon,
    bg: "#FFF1F2",
    bgHover: "#FFE4E6",
    iconBg: "#FECDD3",
    border: "#FECDD3",
    nameColor: "#BE123C",
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
              className="rounded-2xl p-4 text-left cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 border"
              style={{
                backgroundColor: service.bg,
                borderColor: service.border,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = service.bgHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = service.bg;
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: service.iconBg }}
              >
                <service.Icon />
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: service.nameColor }}>
                {service.name}
              </p>
              <p className="text-gray-500 text-xs leading-snug">{service.desc}</p>
            </button>
          ))}
        </div>

        {/* View all CTA */}
        <div className="flex justify-center">
          <Link href="/customer/services">
            <button className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-400 hover:text-green-600 text-gray-600 font-semibold text-sm px-6 py-2.5 rounded-xl transition-all hover:bg-green-50 hover:shadow-sm">
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
