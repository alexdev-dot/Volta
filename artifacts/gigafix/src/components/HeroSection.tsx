import { CheckCircle, Star, ArrowRight, Shield, MapPin, CreditCard, Headphones } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";

const avatars = [
  "https://i.pravatar.cc/32?img=1",
  "https://i.pravatar.cc/32?img=2",
  "https://i.pravatar.cc/32?img=3",
  "https://i.pravatar.cc/32?img=4",
];

export default function HeroSection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-green-600 fill-green-600 text-white" />
              <span className="text-green-700 font-semibold text-sm">Trusted. Verified. Local.</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Your Home,{" "}
              <span className="text-green-600">Handled by</span>
              <br />Professionals.
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-base mb-8 leading-relaxed">
              Find trusted experts for any home service.<br />
              Book with confidence and relax.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Book a Service <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Become a Pro
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="customer"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 text-xs font-bold">5K+</span>
                </div>
              </div>
              <div>
                <p className="text-gray-800 text-sm font-medium">Happy customers</p>
                <div className="flex items-center gap-1">
                  {[1,2,3,4].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600 text-xs ml-1">4.8 <span className="text-gray-400">(2.3k reviews)</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content — phone mockup + floating cards */}
          <div className="flex-1 flex justify-center relative min-h-[480px] w-full">
            {/* Floating card: Verified Pros */}
            <div className="absolute top-10 left-4 lg:left-0 bg-white rounded-xl shadow-lg p-3 flex items-start gap-2 max-w-[170px] z-20 border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-xs leading-tight">Verified Pros</p>
                <p className="text-gray-400 text-xs leading-snug mt-0.5">All professionals are background checked.</p>
              </div>
            </div>

            {/* Floating card: Real-time Tracking */}
            <div className="absolute top-10 right-0 bg-white rounded-xl shadow-lg p-3 flex items-start gap-2 max-w-[160px] z-20 border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-xs leading-tight">Real-time Tracking</p>
                <p className="text-gray-400 text-xs leading-snug mt-0.5">Track your pro in real-time.</p>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative z-10 mt-6">
              <PhoneMockup />
            </div>

            {/* Floating card: Secure Payments */}
            <div className="absolute bottom-24 left-2 lg:-left-4 bg-white rounded-xl shadow-lg p-3 flex items-start gap-2 max-w-[170px] z-20 border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-xs leading-tight">Secure Payments</p>
                <p className="text-gray-400 text-xs leading-snug mt-0.5">Pay safely within the app.</p>
              </div>
            </div>

            {/* Floating card: 24/7 Support */}
            <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-lg p-3 flex items-start gap-2 max-w-[155px] z-20 border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-xs leading-tight">24/7 Support</p>
                <p className="text-gray-400 text-xs leading-snug mt-0.5">We're here to help anytime.</p>
              </div>
            </div>

            {/* Background blob */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-green-50 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
