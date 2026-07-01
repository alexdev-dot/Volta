import { ArrowRight, ArrowLeft, DollarSign, Info } from "lucide-react";
import type { OnboardingData } from "@/pages/ProfessionalOnboarding";

const SERVICE_ICONS: Record<string, string> = {
  plumbing: "🔧",
  electrical: "⚡",
  carpentry: "🪚",
  cleaning: "🧹",
  construction: "🏗️",
  mechanics: "🔩",
  painting: "🖌️",
  landscaping: "🌿",
  security: "🔒",
  moving: "📦",
};

const SERVICE_NAMES: Record<string, string> = {
  plumbing: "Plumbing",
  electrical: "Electrical",
  carpentry: "Carpentry",
  cleaning: "Cleaning",
  construction: "Construction",
  mechanics: "Mechanics",
  painting: "Painting",
  landscaping: "Landscaping",
  security: "Security",
  moving: "Moving & Delivery",
};

const RATE_UNITS = ["Per Hour", "Per Day", "Per Job", "Per Square Meter"];

const MARKET_RATES: Record<string, string> = {
  plumbing: "800–2,500",
  electrical: "1,000–3,000",
  carpentry: "1,200–4,000",
  cleaning: "500–2,000",
  construction: "1,500–5,000",
  mechanics: "500–3,000",
  painting: "800–2,500",
  landscaping: "500–2,000",
  security: "700–1,500",
  moving: "2,000–8,000",
};

interface Props {
  data: OnboardingData;
  onChange: (u: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Pricing({ data, onChange, onNext, onBack }: Props) {
  const setPricing = (
    serviceId: string,
    field: "rate" | "unit",
    value: string
  ) => {
    const current = data.pricing[serviceId] || { rate: "", unit: "Per Hour" };
    onChange({
      pricing: {
        ...data.pricing,
        [serviceId]: { ...current, [field]: value },
      },
    });
  };

  const canContinue = data.selectedServices.every(
    (id) => data.pricing[id]?.rate?.trim()
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">Set Your Pricing</h2>
        <p className="text-gray-500 text-sm mt-1">
          Define competitive rates for each service. You can update these anytime after joining.
        </p>
      </div>

      {/* Market rate note */}
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="text-blue-700 text-xs leading-relaxed">
          <strong>Tip:</strong> Competitive pricing helps you get more bookings. We've shown local market
          rates to guide you. Prices are in <strong>Kenyan Shillings (KES)</strong>.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {data.selectedServices.map((serviceId) => {
          const pricing = data.pricing[serviceId] || { rate: "", unit: "Per Hour" };
          const marketRate = MARKET_RATES[serviceId];

          return (
            <div key={serviceId} className="bg-white rounded-2xl border border-gray-200 p-5">
              {/* Service header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-2xl">{SERVICE_ICONS[serviceId]}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{SERVICE_NAMES[serviceId]}</p>
                  {marketRate && (
                    <p className="text-xs text-gray-400">
                      Market rate: <span className="text-green-600 font-medium">KES {marketRate}</span> / hour
                    </p>
                  )}
                </div>
              </div>

              {/* Rate inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Rate (KES)</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">KSh</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 1500"
                      value={pricing.rate}
                      onChange={(e) => setPricing(serviceId, "rate", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Billing Unit</label>
                  <select
                    value={pricing.unit || "Per Hour"}
                    onChange={(e) => setPricing(serviceId, "unit", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition"
                  >
                    {RATE_UNITS.map((u) => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>

              {/* Minimum charge note */}
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`min-${serviceId}`}
                  className="w-3.5 h-3.5 accent-green-600"
                />
                <label htmlFor={`min-${serviceId}`} className="text-xs text-gray-500">
                  Apply a minimum call-out charge of KES{" "}
                  <input
                    type="number"
                    min="0"
                    placeholder="500"
                    className="inline-block w-20 border border-gray-300 rounded px-2 py-0.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>

      {/* Availability note */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <p className="text-sm font-bold text-gray-800 mb-3">Availability</p>
        <p className="text-xs text-gray-500 mb-3">Select the days you're typically available for bookings.</p>
        <div className="flex flex-wrap gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <button
              key={day}
              className="border-2 border-green-200 bg-green-50 text-green-700 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-green-100 transition-colors"
            >
              {day}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">You can update your availability calendar from your dashboard.</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`flex items-center gap-2 font-bold px-8 py-2.5 rounded-lg text-sm transition-colors ${
            canContinue
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Review Profile <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
