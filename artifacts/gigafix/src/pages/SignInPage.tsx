import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CreditCard, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    desc: "All professionals are background-checked and verified.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Your payments and personal info are always protected.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guarantee",
    desc: "We're here to make sure you're 100% satisfied.",
  },
];

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: "620px" }}>
        {/* Left panel */}
        <div
          className="relative hidden md:flex flex-col w-[45%] flex-shrink-0 p-8"
          style={{
            background: "linear-gradient(135deg, rgba(16,78,37,0.92) 0%, rgba(20,100,50,0.88) 100%)",
          }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=60')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "multiply",
              opacity: 0.45,
            }}
          />
          <div className="absolute inset-0 bg-green-900 opacity-75" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Back link */}
            <Link href="/" className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-8 w-fit transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white/20 border-2 border-white/40 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GF</span>
              </div>
              <span className="text-white font-bold text-2xl">
                Giga<span className="text-green-400">Fix</span>
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-white text-4xl font-extrabold leading-tight mb-3">
              Welcome <span className="text-green-400">back!</span>
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Sign in to continue connecting with<br />trusted professionals.
            </p>

            {/* Features */}
            <div className="flex flex-col gap-3 mb-auto">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5"
                  >
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

            {/* Create account CTA */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white font-semibold text-sm mb-1">New to GigaFix?</p>
              <p className="text-white/65 text-xs mb-3">Create an account and book top-rated professionals.</p>
              <Link href="/sign-up">
                <button className="flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 bg-white flex flex-col justify-center px-10 py-10">
          {/* Mobile back */}
          <Link href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm mb-6 w-fit md:hidden transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Sign in to your account</h1>
          <p className="text-gray-500 text-sm mb-7">Welcome back! Please enter your details.</p>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me + forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRemember(!remember)}
                  className={`w-4 h-4 rounded flex items-center justify-center cursor-pointer transition-colors ${
                    remember ? "bg-green-600 border-green-600" : "border-2 border-gray-300"
                  }`}
                >
                  {remember && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 font-semibold hover:text-green-700">
                Forgot password?
              </a>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg text-sm transition-colors"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          {/* Security note */}
          <div className="flex flex-col items-center gap-1 mt-6">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-500">Your data is encrypted and secure</span>
            </div>
            <p className="text-xs text-gray-400">We never share your information with third parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
