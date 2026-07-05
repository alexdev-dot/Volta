import { LayoutGrid, UserCheck, CalendarCheck, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose a Service",
    desc: "Select the service you need",
    icon: LayoutGrid,
  },
  {
    number: 2,
    title: "Find a Professional",
    desc: "We match you with verified experts",
    icon: UserCheck,
  },
  {
    number: 3,
    title: "Book & Confirm",
    desc: "Pick a time and confirm your booking",
    icon: CalendarCheck,
  },
  {
    number: 4,
    title: "Relax & Enjoy",
    desc: "Sit back while we handle the rest",
    icon: CheckCircle,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-14" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2">
          How It Works
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
          Simple Steps to{" "}
          <span className="text-green-600">Get Things Done</span>
        </h2>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-center gap-3 flex-1">
                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 relative">
                  {/* Step number badge */}
                  <span className="absolute top-4 left-4 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mt-5 mb-3">
                    <Icon className="w-6 h-6 text-green-600" strokeWidth={1.8} />
                  </div>

                  <p className="font-bold text-gray-900 text-sm mb-1.5">{step.title}</p>
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
