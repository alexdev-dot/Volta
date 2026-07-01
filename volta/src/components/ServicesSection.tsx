import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Plumbing",
    desc: "Fix leaks, pipes & more",
    icon: "🔧",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    name: "Electrical",
    desc: "Power issues? We've got you",
    icon: "⚡",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    name: "Carpentry",
    desc: "Furniture, doors & woodwork",
    icon: "🪚",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    textColor: "text-orange-600",
  },
  {
    name: "Cleaning",
    desc: "Home or office cleaning",
    icon: "🧹",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    name: "Construction",
    desc: "Building & renovation",
    icon: "🏗️",
    bg: "bg-gray-50",
    iconBg: "bg-gray-200",
    textColor: "text-gray-600",
  },
  {
    name: "Mechanics",
    desc: "Car repairs & maintenance",
    icon: "🔩",
    bg: "bg-red-50",
    iconBg: "bg-red-100",
    textColor: "text-red-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
          Popular Services
        </p>
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Services for <span className="text-green-600">Every Need</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`${service.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow`}
            >
              <div className={`${service.iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-3`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <p className={`font-bold text-sm ${service.textColor} mb-1`}>{service.name}</p>
              <p className="text-gray-500 text-xs leading-snug">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold text-sm px-6 py-2.5 rounded-lg hover:border-gray-400 transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
