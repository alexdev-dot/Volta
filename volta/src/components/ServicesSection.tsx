import { ArrowRight, Droplets, Zap, Hammer, Sparkles, Building2, Settings2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    name: "Plumbing",
    desc: "Fix leaks, pipes & more",
    icon: Droplets,
    bg: "bg-blue-50 hover:bg-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    nameColor: "text-blue-700",
  },
  {
    name: "Electrical",
    desc: "Power issues? We've got you",
    icon: Zap,
    bg: "bg-yellow-50 hover:bg-yellow-100",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    nameColor: "text-yellow-700",
  },
  {
    name: "Carpentry",
    desc: "Furniture, doors & woodwork",
    icon: Hammer,
    bg: "bg-orange-50 hover:bg-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    nameColor: "text-orange-700",
  },
  {
    name: "Cleaning",
    desc: "Home or office cleaning",
    icon: Sparkles,
    bg: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    nameColor: "text-purple-700",
  },
  {
    name: "Construction",
    desc: "Building & renovation",
    icon: Building2,
    bg: "bg-slate-50 hover:bg-slate-100",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-600",
    nameColor: "text-slate-700",
  },
  {
    name: "Mechanics",
    desc: "Car repairs & maintenance",
    icon: Settings2,
    bg: "bg-red-50 hover:bg-red-100",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
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
            Services for{" "}
            <span className="text-green-600">Every Need</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.name}
                className={`${service.bg} rounded-2xl p-4 text-left cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500`}
              >
                <div
                  className={`${service.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}
                >
                  <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={1.8} />
                </div>
                <p className={`font-bold text-sm ${service.nameColor} mb-1`}>{service.name}</p>
                <p className="text-gray-500 text-xs leading-snug">{service.desc}</p>
              </button>
            );
          })}
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
