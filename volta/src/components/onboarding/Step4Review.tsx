import { ArrowLeft, CheckCircle, User, MapPin, Briefcase, Star, DollarSign, Edit2 } from "lucide-react";
import type { OnboardingData } from "@/pages/pro/ProfessionalOnboarding";

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

interface Props {
  data: OnboardingData;
  onBack: () => void;
  onSubmit: () => void;
}

function Section({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: React.ElementType }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-green-600" />
        </div>
        <p className="text-sm font-bold text-gray-800">{title}</p>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1.5 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-xs font-semibold text-gray-800 text-right max-w-[60%]">{value || "—"}</span>
    </div>
  );
}

export default function Step4Review({ data, onBack, onSubmit }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">Review Your Profile</h2>
        <p className="text-gray-500 text-sm mt-1">
          Double-check your details before submitting. Our team will verify your profile within 24–48 hours.
        </p>
      </div>

      {/* Profile card preview */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-5 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/40">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-extrabold">
              {data.firstName || "First"} {data.lastName || "Last"}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              {data.selectedServices.slice(0, 3).map((id) => (
                <span key={id} className="bg-white/20 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {SERVICE_ICONS[id]} {SERVICE_NAMES[id]}
                </span>
              ))}
              {data.selectedServices.length > 3 && (
                <span className="bg-white/20 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  +{data.selectedServices.length - 3} more
                </span>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="text-sm font-bold">New</span>
            </div>
            <p className="text-white/70 text-xs mt-0.5">{data.location}</p>
          </div>
        </div>
        {data.bio && (
          <p className="text-white/80 text-xs mt-3 leading-relaxed line-clamp-2">{data.bio}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Info */}
        <Section title="Personal Information" icon={User}>
          <Row label="Full Name" value={`${data.firstName} ${data.lastName}`} />
          <Row label="Phone" value={data.phone} />
          <Row label="Location" value={data.location} />
          <Row label="Experience" value={data.experience} />
          <Row label="ID / Passport" value={data.idNumber ? `••••${data.idNumber.slice(-4)}` : ""} />
        </Section>

        {/* Skills */}
        <Section title="Skills & Expertise" icon={Briefcase}>
          <div className="mb-3">
            <p className="text-xs text-gray-400 mb-2">Service Categories</p>
            <div className="flex flex-wrap gap-1.5">
              {data.selectedServices.map((id) => (
                <span key={id} className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
                  {SERVICE_ICONS[id]} {SERVICE_NAMES[id]}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-2">Specific Skills ({data.skills.length})</p>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((skill) => (
                <span key={skill} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section title="Pricing" icon={DollarSign}>
          <div className="flex flex-col gap-2">
            {data.selectedServices.map((id) => {
              const p = data.pricing[id];
              return (
                <div key={id} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-xs text-gray-600">{SERVICE_ICONS[id]} {SERVICE_NAMES[id]}</span>
                  <span className="text-xs font-bold text-green-700">
                    KES {p?.rate || "—"} / {p?.unit || "hour"}
                  </span>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Verification */}
        <Section title="Verification Status" icon={CheckCircle}>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Identity Verification", status: "pending" },
              { label: "Background Check", status: "pending" },
              { label: "Skills Assessment", status: "pending" },
              { label: "Profile Review", status: "pending" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{item.label}</span>
                <span className="flex items-center gap-1 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Pending
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Verification typically completes within 24–48 hours after submission.
          </p>
        </Section>
      </div>

      {/* Agreement */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
        <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 accent-green-600 flex-shrink-0" />
        <p className="text-xs text-gray-600 leading-relaxed">
          By submitting, I confirm that all information provided is accurate and I agree to VOLTA's{" "}
          <a href="#" className="text-green-600 font-semibold">Terms of Service</a>,{" "}
          <a href="#" className="text-green-600 font-semibold">Professional Standards</a>, and{" "}
          <a href="#" className="text-green-600 font-semibold">Privacy Policy</a>.
          I understand my account will be reviewed before activation.
        </p>
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
          onClick={onSubmit}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg text-sm transition-colors shadow-lg shadow-green-200"
        >
          <CheckCircle className="w-4 h-4" /> Submit Application
        </button>
      </div>
    </div>
  );
}
