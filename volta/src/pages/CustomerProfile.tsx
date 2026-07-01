import { ChevronRight, Camera, Save, LogOut, User, Lock, Bell, Shield, CreditCard, MapPin, HelpCircle, Info } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";
import { Link } from "wouter";

const MENU_ITEMS = [
  { icon: User, label: "Profile", active: true },
  { icon: Lock, label: "Security" },
  { icon: Bell, label: "Notifications" },
  { icon: Shield, label: "Privacy" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: MapPin, label: "Address Book" },
  { icon: HelpCircle, label: "Help & Support" },
  { icon: Info, label: "About VOLTA" },
];

export default function CustomerProfile() {
  const stored = (() => { try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; } })();
  const firstName = stored.firstName || "lixek";
  const lastName = stored.lastName || "Test";
  const email = stored.email || "lixek54453@cadebek.com";
  const phone = stored.phone || "+254 700 123 456";
  const location = stored.location || "Ruiru, Kiambu County, Kenya";

  function handleLogout() {
    localStorage.removeItem("volta_user");
    localStorage.removeItem("volta_session");
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Home" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold text-gray-900">My Profile</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage your personal information and account settings</p>
        </div>

        <div className="flex gap-5">
          {/* Left sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors border-b border-gray-50 last:border-0 ${
                    item.active ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}>
                    <Icon className={`w-4.5 h-4.5 ${item.active ? "text-white" : "text-gray-400"}`} style={{ width: 18, height: 18 }} />
                    <span className={`text-sm font-semibold flex-1 ${item.active ? "text-white" : "text-gray-700"}`}>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${item.active ? "text-white/70" : "text-gray-300"}`} />
                  </button>
                );
              })}
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3.5 text-left text-red-500 hover:bg-red-50 transition-colors">
                <LogOut className="w-4.5 h-4.5 text-red-500" style={{ width: 18, height: 18 }} />
                <span className="text-sm font-semibold text-red-500">Log Out</span>
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Profile Info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <p className="font-bold text-gray-900 text-lg mb-5">Profile Information</p>

              {/* Avatar */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-extrabold text-3xl">{firstName[0]?.toUpperCase()}</span>
                  </div>
                  <button className="absolute bottom-0 right-0 w-7 h-7 bg-green-600 rounded-full flex items-center justify-center border-2 border-white hover:bg-green-700 transition-colors">
                    <Camera className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl">{firstName} {lastName}</p>
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full mt-1 mb-2">Customer Account</span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                    <span>✉️</span> {email}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span>📞</span> {phone}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input defaultValue={`${firstName} ${lastName}`} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input defaultValue={email} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input defaultValue={phone} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Location</label>
                  <input defaultValue={location} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
                </div>
              </div>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>

            {/* Stats card */}
            <div className="bg-green-800 rounded-2xl p-5 text-white">
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-white/60 mb-0.5">Wallet Balance</p>
                  <p className="text-xl font-extrabold">KSh 2,450.00</p>
                  <button className="mt-2 flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    Add Money <span>+</span>
                  </button>
                </div>
                {[
                  { label: "Total Bookings", value: "12", link: "View all bookings" },
                  { label: "Completed", value: "8", link: "View completed" },
                  { label: "In Progress", value: "3", link: "View in progress" },
                  { label: "Cancelled", value: "1", link: "View cancelled" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xs text-white/60 mb-0.5">{s.label}</p>
                    <p className="text-3xl font-extrabold">{s.value}</p>
                    <button className="mt-2 flex items-center gap-0.5 text-xs text-white/70 hover:text-white transition-colors">
                      {s.link} <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
