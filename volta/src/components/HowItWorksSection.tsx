import { LayoutGrid, UserCheck, CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose a Service",
    desc: "Select the service you need",
    icon: LayoutGrid,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    number: 2,
    title: "Find a Professional",
    desc: "We match you with verified experts",
    icon: UserCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    number: 3,
    title: "Book & Confirm",
    desc: "Pick a time and confirm your booking",
    icon: CalendarCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    number: 4,
    title: "Relax & Enjoy",
    desc: "Sit back while we handle the rest",
    icon: CheckCircle,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
          How It Works
        </p>
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Simple Steps to <span className="text-green-600">Get Things Done</span>
        </h2>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-center gap-3 flex-1">
                {/* Step card */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-5 relative">
                  {/* Number badge */}
                  <span className="absolute top-3 left-4 text-xs font-bold text-green-600 bg-green-100 rounded-full w-5 h-5 flex items-center justify-center">
                    {step.number}
                  </span>
                  <div className={`${step.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-3 mt-2`}>
                    <Icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 flex-shrink-0 hidden sm:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
