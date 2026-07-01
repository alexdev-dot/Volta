import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft, User, Mail, Phone, MapPin, Lock, Eye, EyeOff,
  ArrowRight, Shield, CreditCard, CheckCircle, ChevronDown, AlertCircle,
} from "lucide-react";

const features = [
  { icon: Shield, title: "Verified Professionals", desc: "All professionals are background-checked and verified." },
  { icon: CreditCard, title: "Secure Payments", desc: "Your payments and personal info are always protected." },
  { icon: CheckCircle, title: "Satisfaction Guarantee", desc: "We're here to make sure you're 100% satisfied." },
];

const avatars = [
  "https://i.pravatar.cc/32?img=1",
  "https://i.pravatar.cc/32?img=2",
  "https://i.pravatar.cc/32?img=3",
  "https://i.pravatar.cc/32?img=4",
];

interface FormFields {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  agreed?: string;
}

function validate(fields: FormFields, agreed: boolean): FormErrors {
  const errors: FormErrors = {};
  if (!fields.fullName.trim()) errors.fullName = "Full name is required.";
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email address.";
  if (!fields.phone.trim() || fields.phone.trim().length < 9)
    errors.phone = "Enter a valid phone number.";
  if (fields.password.length < 8)
    errors.password = "Password must be at least 8 characters.";
  if (fields.password !== fields.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  if (!agreed) errors.agreed = "You must agree to the terms.";
  return errors;
}

export default function SignUpPage() {
  const [, navigate] = useLocation();
  const [role, setRole] = useState<"customer" | "professional">("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields | "agreed", boolean>>>({});

  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    email: "",
    phone: "",
    location: "Nairobi, Kenya",
    password: "",
    confirmPassword: "",
  });

  const setField = (key: keyof FormFields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setTouched((t) => ({ ...t, [key]: true }));
  };

  const errors = validate(fields, agreed);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, password: true, confirmPassword: true, agreed: true });
    if (!isValid) return;

    setLoading(true);

    const nameParts = fields.fullName.trim().split(" ");
    const firstName = nameParts[0] ?? "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const userData = {
      fullName: fields.fullName.trim(),
      firstName,
      lastName,
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      location: fields.location,
      role,
    };

    localStorage.setItem("gigafix_user", JSON.stringify(userData));

    setTimeout(() => {
      setLoading(false);
      if (role === "professional") {
        localStorage.setItem("gigafix_onboarding_prefill", JSON.stringify({
          firstName,
          lastName,
          phone: fields.phone.trim(),
          location: fields.location,
        }));
        navigate("/for-professionals");
      } else {
        navigate("/dashboard");
      }
    }, 900);
  };

  const showError = (key: keyof FormErrors) =>
    touched[key as keyof typeof touched] && errors[key as keyof FormErrors];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: "680px" }}>
        {/* Left panel */}
        <div className="relative hidden md:flex flex-col w-[45%] flex-shrink-0 p-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-green-900 opacity-80" />

          <div className="relative z-10 flex flex-col h-full">
            <Link href="/" className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-8 w-fit transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white/20 border-2 border-white/40 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GF</span>
              </div>
              <span className="text-white font-bold text-2xl">Giga<span className="text-green-400">Fix</span></span>
            </div>

            <h2 className="text-white text-4xl font-extrabold leading-tight mb-3">
              Join thousands of <span className="text-green-400">Kenyans</span>
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              {role === "professional"
                ? "Grow your business and reach thousands of customers looking for your skills."
                : "Create an account and connect with verified professionals for any service you need."}
            </p>

            <div className="flex flex-col gap-3 mb-auto">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5">
                    <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{f.title}</p>
                      <p className="text-white/65 text-xs leading-snug mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-green-900 object-cover" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-green-900 bg-green-500 flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">5K+</span>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-snug">
                Join 5,000+ happy {role === "professional" ? "professionals" : "customers"}<br />across Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 py-8 overflow-y-auto">
          <Link href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm mb-5 w-fit md:hidden transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Create your account</h1>
          <p className="text-gray-500 text-sm mb-6">Let's get you started</p>

          {/* Role toggle */}
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50 mb-6 w-fit">
            {(["customer", "professional"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                  role === r ? "bg-green-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {r === "customer" ? "I need services" : "I offer services"}
                <span className={`block text-xs font-normal ${role === r ? "text-white/80" : "text-gray-400"}`}>
                  {r === "customer" ? "Customer" : "Professional"}
                </span>
              </button>
            ))}
          </div>

          {role === "professional" && (
            <div className="flex items-start gap-2 bg-green-50 border border-green-100 rounded-xl p-3 mb-4 text-xs text-green-800">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              After signing up you'll be taken through a quick profile setup to get you listed and earning.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Kamau"
                    value={fields.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${showError("fullName") ? "border-red-400" : "border-gray-300"}`}
                  />
                </div>
                {showError("fullName") && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${showError("email") ? "border-red-400" : "border-gray-300"}`}
                  />
                </div>
                {showError("email") && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={fields.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${showError("phone") ? "border-red-400" : "border-gray-300"}`}
                  />
                </div>
                {showError("phone") && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={fields.location}
                    onChange={(e) => setField("location", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-8 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition"
                  >
                    {["Nairobi, Kenya","Ruiru, Kiambu","Thika, Kiambu","Mombasa, Kenya","Kisumu, Kenya","Nakuru, Kenya","Eldoret, Kenya"].map((l) => <option key={l}>{l}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={fields.password}
                  onChange={(e) => setField("password", e.target.value)}
                  className={`w-full border rounded-lg pl-10 pr-10 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${showError("password") ? "border-red-400" : "border-gray-300"}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {showError("password")
                ? <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.password}</p>
                : <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters with a mix of letters, numbers &amp; symbols</p>
              }
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={fields.confirmPassword}
                  onChange={(e) => setField("confirmPassword", e.target.value)}
                  className={`w-full border rounded-lg pl-10 pr-10 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${showError("confirmPassword") ? "border-red-400" : "border-gray-300"}`}
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {showError("confirmPassword") && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <div
                  onClick={() => { setAgreed(!agreed); setTouched((t) => ({ ...t, agreed: true })); }}
                  className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center cursor-pointer flex-shrink-0 transition-colors ${agreed ? "bg-green-600" : "border-2 border-gray-300"}`}
                >
                  {agreed && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-green-600 font-semibold hover:text-green-700">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 font-semibold hover:text-green-700">Privacy Policy</a>
                </span>
              </label>
              {showError("agreed") && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.agreed}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3.5 rounded-lg text-sm transition-colors"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Creating account…
                </span>
              ) : (
                <>
                  {role === "professional" ? "Create Account & Set Up Profile" : "Create Account"}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">or sign up with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-green-600 font-semibold hover:text-green-700">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
