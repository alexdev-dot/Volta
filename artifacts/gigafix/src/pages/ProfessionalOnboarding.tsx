import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import Step1Profile from "@/components/onboarding/Step1Profile";
import Step2Skills from "@/components/onboarding/Step2Skills";
import Step3Pricing from "@/components/onboarding/Step3Pricing";
import Step4Review from "@/components/onboarding/Step4Review";

const STEPS = [
  { id: 1, label: "Profile", desc: "Personal info" },
  { id: 2, label: "Skills", desc: "Your expertise" },
  { id: 3, label: "Pricing", desc: "Set your rates" },
  { id: 4, label: "Review", desc: "Final check" },
];

export interface OnboardingData {
  firstName: string;
  lastName: string;
  phone: string;
  location: string;
  bio: string;
  experience: string;
  idNumber: string;
  selectedServices: string[];
  skills: string[];
  pricing: Record<string, { rate: string; unit: string }>;
}

const defaultData: OnboardingData = {
  firstName: "",
  lastName: "",
  phone: "",
  location: "Nairobi, Kenya",
  bio: "",
  experience: "",
  idNumber: "",
  selectedServices: [],
  skills: [],
  pricing: {},
};

export default function ProfessionalOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(defaultData);
  const [submitted, setSubmitted] = useState(false);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const next = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const back = () => setCurrentStep((s) => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-500 text-sm mb-2">
            Thank you for joining GigaFix as a professional. Our team will review your profile and verify your credentials within <strong>24–48 hours</strong>.
          </p>
          <p className="text-gray-400 text-xs mb-7">You'll receive a confirmation email once your account is approved.</p>
          <Link href="/">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-sm transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">GF</span>
            </div>
            <span className="text-gray-900 font-bold text-base">
              Giga<span className="text-green-600">Fix</span>
            </span>
          </div>
          <span className="text-xs text-gray-400">Step {currentStep} of 4</span>
        </div>
      </header>

      {/* Progress stepper */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between relative">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 z-0" />
            <div
              className="absolute left-0 top-5 h-0.5 bg-green-500 z-0 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />

            {STEPS.map((step) => {
              const done = currentStep > step.id;
              const active = currentStep === step.id;
              return (
                <div key={step.id} className="flex flex-col items-center z-10 gap-1.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold text-sm transition-all duration-300 ${
                      done
                        ? "bg-green-600 border-green-600 text-white"
                        : active
                        ? "bg-white border-green-600 text-green-600"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {done ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className={`text-xs font-semibold ${active ? "text-green-600" : done ? "text-gray-700" : "text-gray-400"}`}>
                      {step.label}
                    </p>
                    <p className="text-[10px] text-gray-400">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex flex-col">
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 flex-1">
          {currentStep === 1 && <Step1Profile data={data} onChange={updateData} onNext={next} />}
          {currentStep === 2 && <Step2Skills data={data} onChange={updateData} onNext={next} onBack={back} />}
          {currentStep === 3 && <Step3Pricing data={data} onChange={updateData} onNext={next} onBack={back} />}
          {currentStep === 4 && (
            <Step4Review data={data} onBack={back} onSubmit={() => setSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
