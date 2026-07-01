import { User, Phone, MapPin, FileText, Briefcase, CreditCard, Camera, ArrowRight, ChevronDown } from "lucide-react";
import type { OnboardingData } from "@/pages/pro/ProfessionalOnboarding";

const locations = [
  "Nairobi, Kenya",
  "Ruiru, Kiambu",
  "Thika, Kiambu",
  "Mombasa, Kenya",
  "Kisumu, Kenya",
  "Nakuru, Kenya",
  "Eldoret, Kenya",
  "Nyeri, Kenya",
];

const experienceLevels = ["Less than 1 year", "1–2 years", "3–5 years", "5–10 years", "10+ years"];

interface Props {
  data: OnboardingData;
  onChange: (u: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export default function Step1Profile({ data, onChange, onNext }: Props) {
  const canContinue =
    data.firstName.trim() &&
    data.lastName.trim() &&
    data.phone.trim() &&
    data.bio.trim() &&
    data.experience &&
    data.idNumber.trim();

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900">Set up your profile</h2>
        <p className="text-gray-500 text-sm mt-1">Tell us about yourself so customers can trust and hire you.</p>
      </div>

      {/* Profile photo */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-dashed border-green-300 flex flex-col items-center justify-center cursor-pointer hover:bg-green-100 transition-colors">
            <Camera className="w-6 h-6 text-green-500 mb-1" />
            <span className="text-green-600 text-[10px] font-semibold text-center leading-tight">Upload<br />Photo</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Profile Photo</p>
          <p className="text-xs text-gray-500 mt-0.5">Upload a clear, professional headshot.</p>
          <p className="text-xs text-gray-400 mt-0.5">JPG, PNG · Max 5MB</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-5">
        <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">Personal Information</p>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">First Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="John"
                value={data.firstName}
                onChange={(e) => onChange({ firstName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">Last Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Kamau"
                value={data.lastName}
                onChange={(e) => onChange({ lastName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </div>

        {/* Phone + Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="tel"
                placeholder="+254 700 000 000"
                value={data.phone}
                onChange={(e) => onChange({ phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">Location / County</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={data.location}
                onChange={(e) => onChange({ location: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-8 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition"
              >
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ID Number + Experience */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">National ID / Passport No.</label>
            <div className="relative">
              <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. 12345678"
                value={data.idNumber}
                onChange={(e) => onChange({ idNumber: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Required for background verification.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1.5">Years of Experience</label>
            <div className="relative">
              <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={data.experience}
                onChange={(e) => onChange({ experience: e.target.value })}
                className="w-full border border-gray-300 rounded-lg pl-10 pr-8 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition"
              >
                <option value="">Select experience</option>
                {experienceLevels.map((e) => <option key={e}>{e}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1.5">Professional Bio</label>
          <div className="relative">
            <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <textarea
              rows={3}
              placeholder="Tell customers about your experience, qualifications, and what makes you the best choice for the job..."
              value={data.bio}
              onChange={(e) => onChange({ bio: e.target.value })}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Minimum 50 characters. Good bios get 3× more bookings.</p>
        </div>
      </div>

      {/* Continue */}
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`flex items-center gap-2 font-bold px-8 py-3 rounded-lg text-sm transition-colors ${
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
