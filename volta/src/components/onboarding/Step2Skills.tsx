import { ArrowRight, ArrowLeft, X, Plus } from "lucide-react";
import { useState } from "react";
import type { OnboardingData } from "@/pages/ProfessionalOnboarding";

const SERVICE_CATEGORIES = [
  { id: "plumbing", name: "Plumbing", icon: "🔧", color: "bg-blue-50 border-blue-200 text-blue-700", activeColor: "bg-blue-600 border-blue-600 text-white" },
  { id: "electrical", name: "Electrical", icon: "⚡", color: "bg-yellow-50 border-yellow-200 text-yellow-700", activeColor: "bg-yellow-500 border-yellow-500 text-white" },
  { id: "carpentry", name: "Carpentry", icon: "🪚", color: "bg-orange-50 border-orange-200 text-orange-700", activeColor: "bg-orange-600 border-orange-600 text-white" },
  { id: "cleaning", name: "Cleaning", icon: "🧹", color: "bg-purple-50 border-purple-200 text-purple-700", activeColor: "bg-purple-600 border-purple-600 text-white" },
  { id: "construction", name: "Construction", icon: "🏗️", color: "bg-gray-50 border-gray-200 text-gray-700", activeColor: "bg-gray-700 border-gray-700 text-white" },
  { id: "mechanics", name: "Mechanics", icon: "🔩", color: "bg-red-50 border-red-200 text-red-700", activeColor: "bg-red-600 border-red-600 text-white" },
  { id: "painting", name: "Painting", icon: "🖌️", color: "bg-pink-50 border-pink-200 text-pink-700", activeColor: "bg-pink-600 border-pink-600 text-white" },
  { id: "landscaping", name: "Landscaping", icon: "🌿", color: "bg-green-50 border-green-200 text-green-700", activeColor: "bg-green-600 border-green-600 text-white" },
  { id: "security", name: "Security", icon: "🔒", color: "bg-indigo-50 border-indigo-200 text-indigo-700", activeColor: "bg-indigo-600 border-indigo-600 text-white" },
  { id: "moving", name: "Moving & Delivery", icon: "📦", color: "bg-teal-50 border-teal-200 text-teal-700", activeColor: "bg-teal-600 border-teal-600 text-white" },
];

const SKILL_SUGGESTIONS: Record<string, string[]> = {
  plumbing: ["Pipe installation", "Leak repair", "Water heater", "Drain unclogging", "Bathroom fitting", "Borehole drilling"],
  electrical: ["Wiring", "Socket installation", "Circuit breaker", "Solar panels", "CCTV installation", "Generator repair"],
  carpentry: ["Cabinet making", "Door fitting", "Roof framing", "Furniture repair", "Decking", "Fencing"],
  cleaning: ["Deep cleaning", "Office cleaning", "Carpet cleaning", "Post-construction", "Window cleaning", "Fumigation"],
  construction: ["Masonry", "Plastering", "Tiling", "Concrete work", "Foundation", "Renovation"],
  mechanics: ["Engine repair", "Brakes", "Tyre change", "Diagnostics", "AC repair", "Bodywork"],
  painting: ["Interior painting", "Exterior painting", "Wall texturing", "Waterproofing", "Epoxy floors", "Graffiti removal"],
  landscaping: ["Lawn mowing", "Tree trimming", "Garden design", "Irrigation", "Paving", "Fencing"],
  security: ["CCTV installation", "Access control", "Alarm systems", "Guard services", "Electric fence"],
  moving: ["House moving", "Office relocation", "Furniture delivery", "Packing services", "Storage"],
};

interface Props {
  data: OnboardingData;
  onChange: (u: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Skills({ data, onChange, onNext, onBack }: Props) {
  const [customSkill, setCustomSkill] = useState("");

  const toggleService = (id: string) => {
    const current = data.selectedServices;
    if (current.includes(id)) {
      onChange({
        selectedServices: current.filter((s) => s !== id),
        skills: data.skills.filter((sk) =>
          !(SKILL_SUGGESTIONS[id] || []).includes(sk)
        ),
      });
    } else {
      onChange({ selectedServices: [...current, id] });
    }
  };

  const toggleSkill = (skill: string) => {
    const current = data.skills;
    if (current.includes(skill)) {
      onChange({ skills: current.filter((s) => s !== skill) });
    } else {
      onChange({ skills: [...current, skill] });
    }
  };

  const addCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !data.skills.includes(trimmed)) {
      onChange({ skills: [...data.skills, trimmed] });
    }
    setCustomSkill("");
  };

  const suggestedSkills = data.selectedServices.flatMap(
    (id) => SKILL_SUGGESTIONS[id] || []
  );

  const canContinue = data.selectedServices.length > 0 && data.skills.length > 0;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">Skills & Services</h2>
        <p className="text-gray-500 text-sm mt-1">Select the service categories you offer and add your specific skills.</p>
      </div>

      {/* Service categories */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <p className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
          What services do you offer? <span className="text-red-400">*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SERVICE_CATEGORIES.map((cat) => {
            const active = data.selectedServices.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleService(cat.id)}
                className={`flex flex-col items-center gap-2 border-2 rounded-xl p-3 transition-all duration-200 cursor-pointer ${
                  active ? cat.activeColor : cat.color
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-semibold text-center leading-tight">{cat.name}</span>
              </button>
            );
          })}
        </div>
        {data.selectedServices.length === 0 && (
          <p className="text-xs text-gray-400 mt-3">Select at least one category to continue.</p>
        )}
      </div>

      {/* Skills */}
      {data.selectedServices.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
            Specific Skills <span className="text-red-400">*</span>
          </p>
          <p className="text-xs text-gray-500 mb-4">Choose from suggestions or add your own.</p>

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestedSkills.map((skill) => {
              const active = data.skills.includes(skill);
              return (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-green-600 border-green-600 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:border-green-400 hover:text-green-600"
                  }`}
                >
                  {active && <X className="w-3 h-3" />}
                  {skill}
                </button>
              );
            })}
          </div>

          {/* Selected skills */}
          {data.skills.length > 0 && (
            <div className="mb-4 p-3 bg-green-50 rounded-xl border border-green-100">
              <p className="text-xs font-semibold text-green-700 mb-2">{data.skills.length} skill{data.skills.length > 1 ? "s" : ""} selected</p>
              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 bg-green-600 text-white text-xs rounded-full px-2.5 py-1"
                  >
                    {skill}
                    <button onClick={() => toggleSkill(skill)} className="hover:opacity-70">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Custom skill input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
              placeholder="Add a custom skill..."
              className="flex-1 border border-gray-300 rounded-lg px-3.5 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
            />
            <button
              onClick={addCustomSkill}
              disabled={!customSkill.trim()}
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
        </div>
      )}

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
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
