import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import plumbingIcon from "../../assets/logo/services-icon/plumbing.png";
import electricalIcon from "../../assets/logo/services-icon/flash.png";
import carpentryIcon from "../../assets/logo/services-icon/workplace.png";
import cleaningIcon from "../../assets/logo/services-icon/mop.png";
import constructionIcon from "../../assets/logo/services-icon/helmet.png";
import mechanicsIcon from "../../assets/logo/services-icon/mechanics.png";

const services = [
  {
    name: "Plumbing",
    desc: "Fix leaks, pipes & more",
    icon: plumbingIcon,
    bg: "#EFF6FF",
    bgHover: "#DBEAFE",
    iconBg: "#BFDBFE",
    border: "#BFDBFE",
    nameColor: "#1D4ED8",
  },
  {
    name: "Electrical",
    desc: "Power issues? We've got you",
    icon: electricalIcon,
    bg: "#FEFCE8",
    bgHover: "#FEF9C3",
    iconBg: "#FDE68A",
    border: "#FDE68A",
    nameColor: "#B45309",
  },
  {
    name: "Carpentry",
    desc: "Furniture, doors & woodwork",
    icon: carpentryIcon,
    bg: "#FFF7ED",
    bgHover: "#FFEDD5",
    iconBg: "#FED7AA",
    border: "#FED7AA",
    nameColor: "#C2410C",
  },
  {
    name: "Cleaning",
    desc: "Home or office cleaning",
    icon: cleaningIcon,
    bg: "#FAF5FF",
    bgHover: "#F3E8FF",
    iconBg: "#E9D5FF",
    border: "#E9D5FF",
    nameColor: "#7E22CE",
  },
  {
    name: "Construction",
    desc: "Building & renovation",
    icon: constructionIcon,
    bg: "#F1F5F9",
    bgHover: "#E2E8F0",
    iconBg: "#CBD5E1",
    border: "#CBD5E1",
    nameColor: "#334155",
  },
  {
    name: "Mechanics",
    desc: "Car repairs & maintenance",
    icon: mechanicsIcon,
    bg: "#FFF1F2",
    bgHover: "#FFE4E6",
    iconBg: "#FECDD3",
    border: "#FECDD3",
    nameColor: "#BE123C",
  },
];

export default function ServicesSection() {
  const [, navigate] = useLocation();

  const handleViewAllServices = () => {
    navigate("/sign-in");
  };

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
                <img src={service.icon} alt={service.name} className="w-7 h-7" />
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
          <button 
            onClick={handleViewAllServices}
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-400 hover:text-green-600 text-gray-600 font-semibold text-sm px-6 py-2.5 rounded-xl transition-all hover:bg-green-50 hover:shadow-sm"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
