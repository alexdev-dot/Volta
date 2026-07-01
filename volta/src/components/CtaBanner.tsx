import googlePlayIcon from "../assets/mobile-icon/google-playstore.png";
import appStoreIcon from "../assets/mobile-icon/app-store.png";

export default function CtaBanner() {
  return (
    <section className="bg-gray-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-7">

          {/* Text */}
          <div>
            <h3 className="text-white text-2xl font-extrabold mb-1.5">
              Ready to get started?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Join thousands of happy customers who trust{" "}
              <span className="text-green-400 font-semibold">Volta</span> for their home services.
            </p>
          </div>

          {/* Store buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 hover:bg-gray-800 hover:border-gray-600 transition-colors"
            >
              <img src={googlePlayIcon} alt="Google Play" className="w-7 h-7 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] leading-none tracking-wide uppercase">
                  Get it on
                </p>
                <p className="text-white text-sm font-bold leading-tight mt-0.5">
                  Google Play
                </p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded-2xl px-4 py-3 hover:bg-gray-800 hover:border-gray-600 transition-colors"
            >
              <img src={appStoreIcon} alt="App Store" className="w-7 h-7 flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] leading-none tracking-wide">
                  Download on the
                </p>
                <p className="text-white text-sm font-bold leading-tight mt-0.5">
                  App Store
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
