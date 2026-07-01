export default function CtaBanner() {
  return (
    <section className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text */}
          <div>
            <h3 className="text-white text-xl font-bold mb-1">Ready to get started?</h3>
            <p className="text-gray-400 text-sm">
              Join thousands of happy customers who trust GigaFix for their home services.
            </p>
          </div>

          {/* Store buttons */}
          <div className="flex items-center gap-3">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-gray-700 rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M3.18 1.6L13.5 12 3.18 22.4a1 1 0 01-.68-.94V2.54c0-.38.26-.73.68-.94z" fill="#EA4335" />
                <path d="M17.18 8.13L5.02 1.08 13.5 12l3.68-3.87z" fill="#FBBC04" />
                <path d="M17.18 15.87L13.5 12l-8.48 10.92 12.16-7.05z" fill="#34A853" />
                <path d="M20.57 10.7a1.7 1.7 0 010 2.6l-3.39 1.57L13.5 12l3.68-4.87 3.39 1.57z" fill="#4285F4" />
              </svg>
              <div>
                <p className="text-gray-400 text-[10px] leading-none">GET IT ON</p>
                <p className="text-white text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-gray-700 rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-gray-400 text-[10px] leading-none">Download on the</p>
                <p className="text-white text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
