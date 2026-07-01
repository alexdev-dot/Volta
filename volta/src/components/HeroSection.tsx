import { CheckCircle, Star, ArrowRight, Shield, MapPin, CreditCard, Headphones } from "lucide-react";
import { Link } from "wouter";
import PhoneMockup from "@/components/PhoneMockup";

const avatars = [
  "https://i.pravatar.cc/40?img=1",
  "https://i.pravatar.cc/40?img=2",
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=4",
];

const floatingCards = [
  {
    position: "top-6 -left-2 lg:-left-8",
    iconBg: "bg-green-50",
    icon: Shield,
    iconColor: "text-green-600",
    title: "Verified Pros",
    desc: "All professionals are background checked.",
  },
  {
    position: "top-6 -right-2 lg:-right-8",
    iconBg: "bg-red-50",
    icon: MapPin,
    iconColor: "text-red-500",
    title: "Real-time Tracking",
    desc: "Track your pro in real-time.",
  },
  {
    position: "bottom-28 -left-2 lg:-left-8",
    iconBg: "bg-blue-50",
    icon: CreditCard,
    iconColor: "text-blue-500",
    title: "Secure Payments",
    desc: "Pay safely within the app.",
  },
  {
    position: "bottom-16 -right-2 lg:-right-8",
    iconBg: "bg-orange-50",
    icon: Headphones,
    iconColor: "text-orange-500",
    title: "24/7 Support",
    desc: "We're here to help anytime.",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

          {/* ── Left: copy ── */}
          <div className="flex-1 max-w-[520px] lg:max-w-none">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-green-600 fill-green-600" style={{ color: "white", background: "none" }} />
              <span className="text-green-700 font-semibold text-sm tracking-wide">
                Trusted. Verified. Local.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
              Your Home,{" "}
              <span className="text-green-600">Handled by</span>
              <br />
              Professionals.
            </h1>

            {/* Sub-copy */}
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Find trusted experts for any home service.
              <br />
              Book with confidence and relax.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-9">
              <Link href="/customer/services">
                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md shadow-green-200 text-sm">
                  Book a Service <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/for-professionals">
                <button className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-7 py-3.5 rounded-xl transition-colors text-sm hover:bg-gray-50">
                  Become a Pro
                </button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="customer"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-green-600 flex items-center justify-center shadow-sm">
                  <span className="text-white text-[9px] font-bold">5K+</span>
                </div>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-semibold leading-tight">Happy customers</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 text-xs ml-1.5 font-medium">
                    4.8{" "}
                    <span className="text-gray-400 font-normal">(2.3k reviews)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: phone + floating cards ── */}
          <div className="flex-1 flex justify-center items-center relative min-h-[500px] w-full max-w-[520px] lg:max-w-none">

            {/* Two concentric glowing rings behind phone */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              aria-hidden
            >
              <style>{`
                @keyframes ring-pulse-outer {
                  0%   { opacity: 0.35; transform: scale(0.97); filter: drop-shadow(0 0 0px #86efac); }
                  50%  { opacity: 0.80; transform: scale(1.02); filter: drop-shadow(0 0 12px #4ade80); }
                  100% { opacity: 0.35; transform: scale(0.97); filter: drop-shadow(0 0 0px #86efac); }
                }
                @keyframes ring-pulse-inner {
                  0%   { opacity: 0.50; transform: scale(0.98); filter: drop-shadow(0 0 0px #86efac); }
                  50%  { opacity: 1.00; transform: scale(1.03); filter: drop-shadow(0 0 16px #22c55e); }
                  100% { opacity: 0.50; transform: scale(0.98); filter: drop-shadow(0 0 0px #86efac); }
                }
                @keyframes fill-breathe {
                  0%, 100% { opacity: 0.40; }
                  50%       { opacity: 0.70; }
                }
                .ring-outer {
                  transform-origin: 280px 280px;
                  animation: ring-pulse-outer 3.2s ease-in-out infinite;
                }
                .ring-inner {
                  transform-origin: 280px 280px;
                  animation: ring-pulse-inner 3.2s ease-in-out infinite 0.6s;
                }
                .ring-fill {
                  transform-origin: 280px 280px;
                  animation: fill-breathe 3.2s ease-in-out infinite 0.3s;
                }
              `}</style>
              <svg
                width="560"
                height="560"
                viewBox="0 0 560 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
              >
                <defs>
                  {/* Inner ring — rich green gradient */}
                  <linearGradient id="innerRingGrad" x1="0" y1="0" x2="560" y2="560" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#16a34a" stopOpacity="1"   />
                    <stop offset="40%"  stopColor="#22c55e" stopOpacity="0.9" />
                    <stop offset="70%"  stopColor="#4ade80" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#86efac" stopOpacity="0.4" />
                  </linearGradient>
                  {/* Outer ring — very faint green gradient */}
                  <linearGradient id="outerRingGrad" x1="0" y1="0" x2="560" y2="560" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#bbf7d0" stopOpacity="0.6" />
                    <stop offset="50%"  stopColor="#dcfce7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0.2" />
                  </linearGradient>
                  {/* Fill gradient */}
                  <radialGradient id="fillGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="#dcfce7" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Soft radial fill */}
                <circle className="ring-fill" cx="280" cy="280" r="200" fill="url(#fillGrad)" />
                {/* Inner ring — vivid green gradient stroke */}
                <circle className="ring-inner" cx="280" cy="280" r="200" stroke="url(#innerRingGrad)" strokeWidth="2.5" />
                {/* Outer ring — faint green gradient stroke */}
                <circle className="ring-outer" cx="280" cy="280" r="268" stroke="url(#outerRingGrad)" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Floating feature cards */}
            {floatingCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`absolute ${card.position} bg-white rounded-2xl shadow-lg shadow-gray-200/80 p-3 flex items-start gap-2.5 max-w-[168px] z-20 border border-gray-100/80`}
                >
                  <div
                    className={`w-9 h-9 rounded-full ${card.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-4 h-4 ${card.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xs leading-tight">{card.title}</p>
                    <p className="text-gray-400 text-[11px] leading-snug mt-0.5">{card.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Phone mockup */}
            <div className="relative z-10 mt-4">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
