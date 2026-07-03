import { useState, type ComponentType } from "react";
import {
  ChevronRight, Camera, Save, LogOut, User, Lock, Bell, Shield, CreditCard,
  MapPin, HelpCircle, Info, Eye, EyeOff, Plus, Pencil, Trash2,
  Monitor, Smartphone, MessageCircle, Mail, Phone, Search, ExternalLink,
  Download, Cookie, UserX, Target, Activity, Megaphone, AlertTriangle,
  CheckCircle, Calendar, DollarSign, ShieldCheck
} from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

/* ─── Types ───────────────────────────────────────────── */
type Tab = "Profile" | "Security" | "Notifications" | "Privacy" | "Payment Methods" | "Address Book" | "Help & Support" | "About VOLTA";

/* ─── Toggle component ───────────────────────────────── */
function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className={`relative inline-flex h-6 w-11 rounded-full transition-colors flex-shrink-0 ${on ? "bg-green-500" : "bg-gray-200"}`}>
      <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0"}`} />
    </button>
  );
}

/* ─── Section: Profile ───────────────────────────────── */
function ProfileSection() {
  const [showEdit, setShowEdit] = useState(false);
  const firstName = "lixek"; const lastName = "Test";
  const email = "lixek54453@cadebek.com"; const phone = "+254 700 123 456";
  const location = "Ruiru, Kiambu County, Kenya";
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
            <p className="text-sm text-gray-500 mt-0.5">Manage your personal information and account details.</p>
          </div>
          <button onClick={() => setShowEdit(!showEdit)} className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Pencil className="w-3.5 h-3.5 text-green-600" /> Edit Photo
          </button>
        </div>

        {/* Avatar row */}
        <div className="flex items-start gap-5 mb-8">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-extrabold text-3xl">L</span>
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-green-600 rounded-full flex items-center justify-center border-2 border-white hover:bg-green-700 transition-colors">
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
          <div>
            <p className="font-extrabold text-gray-900 text-xl">{firstName} {lastName}</p>
            <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-1 mb-2">Customer Account</span>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <Mail className="w-3.5 h-3.5" /> {email}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Phone className="w-3.5 h-3.5" /> {phone}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {[
            { label: "Full Name", val: `${firstName} ${lastName}` },
            { label: "Email Address", val: email },
            { label: "Phone Number", val: phone },
            { label: "Location", val: location },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{f.label}</label>
              <input defaultValue={f.val} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>

      {/* Stats bar */}
      <div className="bg-green-800 rounded-2xl p-6 text-white">
        <div className="flex gap-6 flex-wrap">
          {/* Wallet */}
          <div className="min-w-[130px]">
            <p className="text-xs text-white/60 mb-1">Wallet Balance</p>
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-white/60" />
              <p className="text-xl font-extrabold">KSh 2,450.00</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold text-xs px-4 py-1.5 rounded-lg transition-colors">Add Money +</button>
          </div>
          {/* Divider */}
          <div className="w-px bg-white/10 self-stretch" />
          {/* Stats */}
          {[
            { icon: Calendar, label: "Total Bookings", value: "12", link: "View all bookings →" },
            { icon: CheckCircle, label: "Completed", value: "8", link: "View completed →" },
            { icon: Activity, label: "In Progress", value: "3", link: "View in progress →" },
            { icon: AlertTriangle, label: "Cancelled", value: "1", link: "View cancelled →" },
          ].map(({ icon: Icon, label, value, link }) => (
            <div key={label} className="flex-1 min-w-[80px]">
              <p className="text-xs text-white/60 mb-1">{label}</p>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white/80" />
                </div>
                <p className="text-3xl font-extrabold">{value}</p>
              </div>
              <button className="text-xs text-white/60 hover:text-white transition-colors">{link}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section: Security ──────────────────────────────── */
function SecuritySection() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900">Security</h2>
      <p className="text-sm text-gray-500 -mt-3">Manage your password and keep your account secure.</p>

      {/* Change Password */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex gap-8">
          <div className="flex-shrink-0 w-48">
            <p className="font-bold text-gray-900 mb-1">Change Password</p>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Update your password regularly to keep your account secure.</p>
            <div className="w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {[
              { label: "Current Password", show: showCurrent, toggle: () => setShowCurrent(!showCurrent), placeholder: "Enter your current password" },
              { label: "New Password", show: showNew, toggle: () => setShowNew(!showNew), placeholder: "Enter new password", hint: "Must be at least 8 characters long" },
              { label: "Confirm New Password", show: showConfirm, toggle: () => setShowConfirm(!showConfirm), placeholder: "Confirm new password" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{f.label}</label>
                <div className="relative">
                  <input type={f.show ? "text" : "password"} placeholder={f.placeholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
                  <button onClick={f.toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {f.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {f.hint && <p className="text-xs text-gray-400 mt-1">{f.hint}</p>}
              </div>
            ))}
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors w-fit">
              <Lock className="w-4 h-4" /> Update Password
            </button>
          </div>
        </div>
      </div>

      {/* 2FA */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-center gap-6">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-7 h-7 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900">Two-Factor Authentication (2FA)</p>
          <p className="text-sm text-gray-500 mt-0.5">Add an extra layer of security to your account by enabling 2FA.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-gray-600 font-medium">Status:</span>
            <span className="text-xs font-bold bg-red-50 text-red-500 px-3 py-1 rounded-full">Disabled</span>
          </div>
          <button className="flex items-center gap-1.5 border border-green-500 text-green-600 font-bold text-sm px-4 py-2 rounded-xl hover:bg-green-50 transition-colors">
            <Shield className="w-4 h-4" /> Enable 2FA
          </button>
        </div>
      </div>

      {/* Login Activity */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex items-center gap-6">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Monitor className="w-7 h-7 text-green-500" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900">Login Activity</p>
          <p className="text-sm text-gray-500 mt-0.5">Review your recent login activity and devices.</p>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
          View All Activity <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="mb-4">
          <p className="font-bold text-gray-900">Active Sessions</p>
          <p className="text-sm text-gray-500 mt-0.5">Manage your active sessions across devices.</p>
        </div>
        <div className="flex flex-col gap-3">
          {/* Windows session */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Monitor className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">Windows • Chrome</p>
              <p className="text-xs text-gray-500">Ruiru, Kiambu County, Kenya</p>
              <p className="text-xs text-green-600 font-medium mt-0.5">This device • Active now</p>
            </div>
            <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
              <span className="text-gray-400">⋮</span>
            </button>
          </div>
          {/* Android session */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-purple-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">Android • Chrome</p>
              <p className="text-xs text-gray-500">Nairobi, Kenya</p>
              <p className="text-xs text-gray-400 mt-0.5">May 21, 2024 • 10:30 AM</p>
            </div>
            <button className="border border-red-200 text-red-500 font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors mr-2">Log Out</button>
            <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors">
              <span className="text-gray-400">⋮</span>
            </button>
          </div>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold text-sm py-3 rounded-xl hover:bg-gray-50 transition-colors">
          <LogOut className="w-4 h-4" /> Log Out All Other Sessions
        </button>
      </div>
    </div>
  );
}

/* ─── Section: Notifications ─────────────────────────── */
function NotificationsSection() {
  const [prefs, setPrefs] = useState({ booking: true, messages: true, payments: true, promos: false, alerts: true });
  const [channels, setChannels] = useState({ email: true, sms: true });
  return (
    <div>
      <div className="flex items-start justify-between mb-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
          <p className="text-sm text-gray-500 mt-0.5">Manage how and when you receive notifications from VOLTA.</p>
        </div>
        <div className="w-24 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
          <Bell className="w-10 h-10 text-green-500" />
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        {/* Left: preferences + channels */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Preferences */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Notification Preferences</p>
            <p className="text-sm text-gray-500 mb-5">Choose what notifications you want to receive.</p>
            {[
              { key: "booking", icon: Calendar, label: "Booking Updates", sub: "Get notified about booking confirmations, changes, and cancellations.", color: "bg-green-50 text-green-600" },
              { key: "messages", icon: MessageCircle, label: "Messages", sub: "Receive notifications for new messages and chat updates.", color: "bg-blue-50 text-blue-600" },
              { key: "payments", icon: DollarSign, label: "Payments & Transactions", sub: "Stay updated on payments, refunds, and transactions.", color: "bg-orange-50 text-orange-500" },
              { key: "promos", icon: Megaphone, label: "Promotions & Offers", sub: "Receive updates about special offers and promotions.", color: "bg-purple-50 text-purple-500" },
              { key: "alerts", icon: Bell, label: "System Alerts", sub: "Important updates and announcements from VOLTA.", color: "bg-red-50 text-red-500" },
            ].map(({ key, icon: Icon, label, sub, color }) => (
              <div key={key} className="flex items-center gap-4 py-4 border-t border-gray-50">
                <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
                <Toggle on={prefs[key as keyof typeof prefs]} onToggle={() => setPrefs(p => ({ ...p, [key]: !p[key as keyof typeof prefs] }))} />
              </div>
            ))}
          </div>

          {/* Channels */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Notification Channels</p>
            <p className="text-sm text-gray-500 mb-5">Select your preferred notification channels.</p>
            {[
              { key: "email", icon: Mail, label: "Email", sub: "Receive notifications via email", detail: "lixek54453@cadebek.com", color: "bg-green-50 text-green-600" },
              { key: "sms", icon: Smartphone, label: "SMS", sub: "Receive notifications via SMS", detail: "+254 700 123 456", color: "bg-blue-50 text-blue-600" },
            ].map(({ key, icon: Icon, label, sub, detail, color }) => (
              <div key={key} className="flex items-center gap-4 py-4 border-t border-gray-50">
                <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
                <span className="text-xs text-gray-400 mr-3">{detail}</span>
                <Toggle on={channels[key as keyof typeof channels]} onToggle={() => setChannels(c => ({ ...c, [key]: !c[key as keyof typeof channels] }))} />
              </div>
            ))}
            <div className="flex items-center gap-4 py-4 border-t border-gray-50">
              <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">Push Notifications</p>
                <p className="text-xs text-gray-400">Receive push notifications on your device</p>
              </div>
              <span className="text-xs text-green-600 font-semibold mr-1">Enabled</span>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors w-fit">
            <Save className="w-4 h-4" /> Save Preferences
          </button>
        </div>

        {/* Right: recent notifications */}
        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="font-bold text-gray-900">Recent Notifications</p>
              <button className="text-green-600 font-semibold text-xs hover:text-green-700">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: CheckCircle, color: "bg-green-50 text-green-600", title: "Booking Confirmed", time: "10:30 AM", msg: "Your booking for Plumbing Service has been confirmed." },
                { icon: MessageCircle, color: "bg-blue-50 text-blue-600", title: "New Message", time: "Yesterday, 4:15 PM", msg: "John Kamau sent you a message." },
                { icon: DollarSign, color: "bg-orange-50 text-orange-500", title: "Payment Successful", time: "May 20, 2024", msg: "Your payment of KSh 1,200 was successful." },
                { icon: Megaphone, color: "bg-purple-50 text-purple-500", title: "New Offer Available", time: "May 18, 2024", msg: "Get 10% OFF on your next booking." },
                { icon: Shield, color: "bg-red-50 text-red-500", title: "Account Security", time: "May 15, 2024", msg: "Your password was changed successfully." },
              ].map(({ icon: Icon, color, title, time, msg }) => (
                <div key={title} className="flex gap-3">
                  <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <span className="text-[10px] text-gray-400 flex-shrink-0">{time}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug mt-0.5">{msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              🗑 Manage Read Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section: Privacy ───────────────────────────────── */
function PrivacySection() {
  const [personalized, setPersonalized] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);
  const [thirdParty, setThirdParty] = useState(false);
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-0.5">Privacy</h2>
      <p className="text-sm text-gray-500 mb-5">Manage your privacy settings and control how your information is used.</p>
      <div className="flex gap-5">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Overview */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Privacy Overview</p>
            <p className="text-sm text-gray-500 mb-5">Take control of your privacy and choose what information you share on VOLTA.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Lock, color: "bg-green-50 text-green-600", title: "Your Data is Safe", sub: "We use industry-standard security to protect your personal information." },
                { icon: Eye, color: "bg-blue-50 text-blue-600", title: "You're in Control", sub: "Choose what information is visible to other users." },
                { icon: ShieldCheck, color: "bg-purple-50 text-purple-600", title: "We Respect Privacy", sub: "We never sell your data. Your privacy is our priority." },
              ].map(({ icon: Icon, color, title, sub }) => (
                <div key={title} className="text-center">
                  <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-400 leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Visibility */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Profile Visibility</p>
            <p className="text-sm text-gray-500 mb-5">Control who can see your profile and information.</p>
            {[
              { icon: User, label: "Profile Visibility", sub: "Choose who can see your profile on VOLTA.", color: "bg-green-50 text-green-600", options: ["Everyone", "Friends Only", "Only Me"], val: "Everyone" },
              { icon: Mail, label: "Email Visibility", sub: "Allow others to see your email address.", color: "bg-blue-50 text-blue-600", options: ["Everyone", "Only Me"], val: "Only Me" },
              { icon: Phone, label: "Phone Visibility", sub: "Allow others to see your phone number.", color: "bg-orange-50 text-orange-500", options: ["Everyone", "Only Me"], val: "Only Me" },
              { icon: MapPin, label: "Location Visibility", sub: "Choose who can see your exact location.", color: "bg-purple-50 text-purple-600", options: ["Everyone", "Only Verified Users", "Only Me"], val: "Only Verified Users" },
            ].map(({ icon: Icon, label, sub, color, options, val }) => (
              <div key={label} className="flex items-center gap-4 py-3.5 border-t border-gray-50">
                <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
                <div className="relative">
                  <select defaultValue={val} className="appearance-none border border-gray-200 rounded-xl text-sm text-gray-700 pl-3 pr-7 py-2 outline-none bg-white cursor-pointer">
                    {options.map(o => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none rotate-90" />
                </div>
              </div>
            ))}
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Data Management</p>
            <p className="text-sm text-gray-500 mb-5">Control your data and account information.</p>
            {[
              { icon: Download, label: "Download Your Data", sub: "Request a copy of all your personal data.", color: "bg-green-50 text-green-600" },
              { icon: Cookie, label: "Manage Cookies", sub: "Manage your cookie preferences and tracking technologies.", color: "bg-orange-50 text-orange-500" },
              { icon: UserX, label: "Delete Account", sub: "Permanently delete your account and all associated data.", color: "bg-red-50 text-red-500" },
            ].map(({ icon: Icon, label, sub, color }) => (
              <button key={label} className="w-full flex items-center gap-4 py-3.5 border-t border-gray-50 hover:bg-gray-50 -mx-2 px-2 rounded-xl transition-colors group">
                <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-64 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Data &amp; Personalization</p>
            <p className="text-sm text-gray-500 mb-4">Manage how we use your data to improve your experience.</p>
            {[
              { label: "Personalized Recommendations", sub: "Show tailored service and professional recommendations.", val: personalized, set: setPersonalized },
              { label: "Activity Analytics", sub: "Help us improve VOLTA by sharing usage analytics.", val: analytics, set: setAnalytics },
              { label: "Marketing Communications", sub: "Receive updates about new features, offers, and promotions.", val: marketing, set: setMarketing },
              { label: "Third-Party Sharing", sub: "Allow trusted partners to process your data to improve services.", val: thirdParty, set: setThirdParty },
            ].map(({ label, sub, val, set }) => (
              <div key={label} className="py-3 border-t border-gray-50 flex items-start gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-xs">{label}</p>
                  <p className="text-[10px] text-gray-400 leading-snug mt-0.5">{sub}</p>
                </div>
                <Toggle on={val} onToggle={() => set(!val)} />
              </div>
            ))}
            <button className="mt-3 w-full flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 font-semibold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              Learn more about our Privacy Policy <ExternalLink className="w-3 h-3" />
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <p className="font-bold text-gray-900 mb-0.5">Need Help?</p>
            <p className="text-sm text-gray-500 mb-4">If you have any questions about privacy.</p>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-3">
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Contact Our Support Team</p>
                <p className="text-xs text-gray-400">We're here to help you with any privacy concerns.</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
            </div>
            <button className="w-full border border-gray-200 text-gray-700 font-semibold text-sm py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              Visit Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section: Payment Methods ───────────────────────── */
function PaymentMethodsSection() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-0.5">Payment Methods</h2>
      <p className="text-sm text-gray-500 mb-5">Manage your saved payment methods.</p>
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <p className="font-bold text-gray-900">Saved Methods</p>
          <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>
        {[
          { brand: "VISA", last4: "4242", expiry: "Expires 12/26", color: "bg-blue-600", primary: true },
          { brand: "MC", last4: "5555", expiry: "Expires 08/25", color: "bg-red-500", primary: false },
          { brand: "M-PESA", last4: "1234", expiry: "M-PESA Account", color: "bg-green-600", primary: false },
        ].map((m) => (
          <div key={m.last4} className="flex items-center gap-4 py-4 border-t border-gray-50">
            <div className={`w-14 h-9 ${m.color} rounded-lg flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0`}>{m.brand}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 text-sm">•••• •••• •••• {m.last4}</p>
                {m.primary && <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Primary</span>}
              </div>
              <p className="text-xs text-gray-400">{m.expiry}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"><Pencil className="w-4 h-4 text-gray-400" /></button>
              <button className="p-2 border border-gray-200 rounded-xl hover:bg-red-50 transition-colors"><Trash2 className="w-4 h-4 text-red-400" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Section: Address Book ──────────────────────────── */
function AddressBookSection() {
  const addresses = [
    { icon: "🏠", iconBg: "bg-green-50", label: "Home", tag: "Default", tagColor: "bg-green-50 text-green-700", addr: "123 Mukuru Road, Ruiru", city: "Kiambu County, Kenya", phone: "+254 700 123 456" },
    { icon: "💼", iconBg: "bg-blue-50",  label: "Work", tag: "Work", tagColor: "bg-blue-50 text-blue-600", addr: "Volta Plaza, Thika Road", city: "Ruiru, Kiambu County, Kenya", phone: "+254 700 123 456" },
    { icon: "🛍", iconBg: "bg-purple-50", label: "Parents' Home", tag: "Family", tagColor: "bg-purple-50 text-purple-600", addr: "Kamakis, Ruiru", city: "Kiambu County, Kenya", phone: "+254 700 123 456" },
    { icon: "📍", iconBg: "bg-orange-50", label: "Other Location", tag: "Other", tagColor: "bg-orange-50 text-orange-500", addr: "Gatundu Road, Githurai 45", city: "Kiambu County, Kenya", phone: "+254 700 123 456" },
  ];
  return (
    <div>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Address Book</h2>
          <p className="text-sm text-gray-500 mt-0.5">Manage your saved addresses for bookings and services.</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
          <Plus className="w-4 h-4" /> Add New Address
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { icon: MapPin, color: "bg-green-50 text-green-600", val: "4", label: "Saved Addresses", sub: "Total addresses saved" },
          { icon: CheckCircle, color: "bg-blue-50 text-blue-600", val: "1", label: "Default Address", sub: "Primary address for bookings" },
          { icon: Activity, color: "bg-orange-50 text-orange-500", val: "2", label: "Frequently Used", sub: "Used in past bookings" },
        ].map(({ icon: Icon, color, val, label, sub }) => (
          <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900">{val}</p>
              <p className="text-xs font-semibold text-gray-700">{label}</p>
              <p className="text-[10px] text-gray-400">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Address cards */}
      <div className="flex flex-col gap-3 mb-4">
        {addresses.map((a) => (
          <div key={a.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="p-1.5 text-gray-400 cursor-move">⋮⋮</div>
            <div className={`w-12 h-12 ${a.iconBg} rounded-2xl flex items-center justify-center text-xl flex-shrink-0`}>{a.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-gray-900 text-sm">{a.label}</p>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${a.tagColor}`}>{a.tag}</span>
              </div>
              <p className="text-sm text-gray-600">{a.addr}</p>
              <p className="text-xs text-gray-400">{a.city}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                <Phone className="w-3 h-3" /> {a.phone}
              </div>
            </div>
            {a.tag === "Default" && (
              <span className="text-xs font-semibold border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg flex-shrink-0">Default Address</span>
            )}
            <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors"><Pencil className="w-4 h-4 text-gray-400" /></button>
            <button className="p-2 hover:bg-red-50 rounded-xl transition-colors"><Trash2 className="w-4 h-4 text-red-400" /></button>
          </div>
        ))}
      </div>

      {/* Tip */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Tip: Set a default address</p>
            <p className="text-xs text-gray-400">The default address will be selected automatically when you book a service.</p>
          </div>
        </div>
        <button className="border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors flex-shrink-0">Set Default</button>
      </div>
    </div>
  );
}

/* ─── Section: Help & Support ────────────────────────── */
function HelpSupportSection() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-0.5">Help &amp; Support</h2>
      <p className="text-sm text-gray-500 mb-5">We're here to help. Find answers, get in touch, or track your support requests.</p>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
        <div className="flex gap-6 items-center">
          <div className="flex-1">
            <p className="font-bold text-gray-900 text-lg mb-3">How can we help you?</p>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input placeholder="Search for help articles (e.g. booking, payments, account)"
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-700 outline-none focus:border-green-400 transition-colors" />
              </div>
              <button className="bg-white border border-gray-200 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">Search</button>
            </div>
          </div>
          <div className="w-28 h-24 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-14 h-14 text-green-400" />
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
        <p className="font-bold text-gray-900 mb-4">Popular Topics</p>
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Calendar, color: "bg-green-50 text-green-600", label: "Bookings", sub: "Learn how to book, reschedule or cancel services." },
            { icon: CreditCard, color: "bg-orange-50 text-orange-500", label: "Payments", sub: "Get help with payments, refunds and invoices." },
            { icon: User, color: "bg-blue-50 text-blue-600", label: "My Account", sub: "Update your profile, password and account settings." },
            { icon: Shield, color: "bg-purple-50 text-purple-600", label: "Safety & Trust", sub: "How we keep you safe and secure on VOLTA." },
          ].map(({ icon: Icon, color, label, sub }) => (
            <div key={label} className="border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
              <p className="text-xs text-gray-400 leading-snug mb-3">{sub}</p>
              <p className="text-xs text-green-600 font-semibold group-hover:underline">View Articles →</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Contact Us */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <p className="font-bold text-gray-900 mb-0.5">Contact Us</p>
          <p className="text-sm text-gray-500 mb-4">Choose the best way to reach our support team.</p>
          {[
            { icon: MessageCircle, color: "bg-green-50 text-green-600", label: "Live Chat", sub: "Chat with our support team in real-time.", detail: "Available 24/7", tag: "Recommended" },
            { icon: Mail, color: "bg-blue-50 text-blue-600", label: "Email Support", sub: "Send us an email and we'll respond shortly.", detail: "support@volta.ke" },
            { icon: Phone, color: "bg-orange-50 text-orange-500", label: "Phone Support", sub: "Speak with our support team directly.", detail: "+254 700 123 456" },
            { icon: MessageCircle, color: "bg-green-50 text-green-600", label: "WhatsApp Support", sub: "Message us on WhatsApp.", detail: "+254 700 123 456" },
          ].map(({ icon: Icon, color, label, sub, detail, tag }) => (
            <button key={label} className="w-full flex items-center gap-3 py-3.5 border-t border-gray-50 hover:bg-gray-50 -mx-2 px-2 rounded-xl transition-colors group">
              <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900 text-sm">{label}</p>
                  {tag && <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2 py-0.5 rounded-full">{tag}</span>}
                </div>
                <p className="text-xs text-gray-400">{sub}</p>
              </div>
              <span className="text-xs text-gray-400">{detail}</span>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
            </button>
          ))}
        </div>

        {/* Support Requests */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold text-gray-900">Your Support Requests</p>
              <p className="text-sm text-gray-500">Track the status of your recent support requests.</p>
            </div>
            <button className="text-green-600 font-semibold text-xs hover:text-green-700">View All</button>
          </div>
          {[
            { icon: Calendar, color: "bg-blue-50 text-blue-600", title: "Booking not confirmed", id: "Request ID: #VR-2024-0156", date: "Jun 2, 2024 • 10:30 AM", status: "In Progress", sc: "bg-blue-50 text-blue-600" },
            { icon: CreditCard, color: "bg-orange-50 text-orange-500", title: "Payment issue", id: "Request ID: #VR-2024-0142", date: "May 28, 2024 • 4:15 PM", status: "Open", sc: "bg-orange-50 text-orange-500" },
            { icon: DollarSign, color: "bg-green-50 text-green-600", title: "Refund not received", id: "Request ID: #VR-2024-0128", date: "May 20, 2024 • 9:45 AM", status: "Resolved", sc: "bg-green-50 text-green-700" },
          ].map(({ icon: Icon, color, title, id, date, status, sc }) => (
            <div key={id} className="flex items-center gap-3 py-3.5 border-t border-gray-50">
              <div className={`w-9 h-9 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-400">{id}</p>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${sc}`}>{status}</span>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Still need help?</p>
            <p className="text-xs text-gray-400">Our Help Center has more resources and guides to assist you.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          Visit Help Center <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ─── Section: About VOLTA ───────────────────────────── */
function AboutSection() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-0.5">About VOLTA</h2>
      <p className="text-sm text-gray-500 mb-5">VOLTA is more than just a marketplace. We're building a trusted community where clients and professionals connect, collaborate, and get things done.</p>

      {/* Mission + Vision */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          { icon: Target, color: "bg-green-50 text-green-600", title: "Our Mission", text: "To simplify the way people find and book trusted service professionals, while empowering businesses and individuals to grow through reliable connections." },
          { icon: Eye, color: "bg-blue-50 text-blue-600", title: "Our Vision", text: "To be Africa's most trusted and innovative service marketplace, creating opportunities and transforming lives through technology." },
        ].map(({ icon: Icon, color, title, text }) => (
          <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-4">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What We Do */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
        <p className="font-bold text-gray-900 mb-1">What We Do</p>
        <p className="text-sm text-gray-500 mb-5">VOLTA connects customers with verified professionals for a wide range of services. From home repairs to business solutions, we make it easy, fast, and reliable.</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, color: "bg-green-50 text-green-600", label: "Verified Professionals", sub: "We verify every professional to ensure quality and trust." },
            { icon: CheckCircle, color: "bg-blue-50 text-blue-600", label: "Easy & Reliable", sub: "Book services easily and with confidence." },
            { icon: CreditCard, color: "bg-purple-50 text-purple-600", label: "Secure Payments", sub: "Safe and secure payments for every transaction." },
            { icon: HelpCircle, color: "bg-orange-50 text-orange-500", label: "Customer Support", sub: "We're always here to help you whenever you need." },
          ].map(({ icon: Icon, color, label, sub }) => (
            <div key={label} className="text-center">
              <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="font-bold text-gray-900 text-sm mb-1">{label}</p>
              <p className="text-xs text-gray-400 leading-snug">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* By the Numbers */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
        <p className="font-bold text-gray-900 mb-5">VOLTA by the Numbers</p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: User, color: "bg-green-50 text-green-600", val: "10,000+", label: "Happy Customers" },
            { icon: ShieldCheck, color: "bg-blue-50 text-blue-600", val: "5,000+", label: "Verified Professionals" },
            { icon: CheckCircle, color: "bg-orange-50 text-orange-500", val: "25,000+", label: "Services Completed" },
            { icon: Activity, color: "bg-purple-50 text-purple-600", val: "4.8/5", label: "Average Rating" },
          ].map(({ icon: Icon, color, val, label }) => (
            <div key={label} className="flex items-center gap-3 border border-gray-100 rounded-2xl p-4">
              <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-gray-900">{val}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values + Company Info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <p className="font-bold text-gray-900 mb-4">Our Values</p>
          {[
            { icon: ShieldCheck, color: "bg-green-50 text-green-600", label: "Trust", sub: "We build trust through transparency and accountability." },
            { icon: CheckCircle, color: "bg-blue-50 text-blue-600", label: "Excellence", sub: "We are committed to delivering the best experience." },
            { icon: Activity, color: "bg-orange-50 text-orange-500", label: "Innovation", sub: "We continuously improve and embrace new ideas." },
            { icon: User, color: "bg-purple-50 text-purple-600", label: "Community", sub: "We grow together by supporting communities and creating opportunities." },
          ].map(({ icon: Icon, color, label, sub }) => (
            <div key={label} className="flex gap-3 py-3 border-t border-gray-50">
              <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-400 leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <p className="font-bold text-gray-900 mb-4">Company Information</p>
          {[
            ["Company Name", "Volta Technologies Limited"],
            ["Founded", "2022"],
            ["Headquarters", "Nairobi, Kenya"],
            ["Email", "info@volta.ke"],
            ["Phone", "+254 700 123 456"],
            ["Website", "www.volta.ke"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2.5 border-t border-gray-50">
              <span className="text-xs text-gray-500">{k}</span>
              <span className="text-xs font-semibold text-gray-900">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-gray-900">Built with trust. Driven by purpose. Here for you.</p>
            <p className="text-xs text-gray-500">Thank you for being part of the VOLTA community.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
          Join Us on Our Journey →
        </button>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────── */
const MENU: { label: Tab; icon: ComponentType<{ className?: string }> }[] = [
  { label: "Profile",          icon: User },
  { label: "Security",         icon: Lock },
  { label: "Notifications",    icon: Bell },
  { label: "Privacy",          icon: Shield },
  { label: "Payment Methods",  icon: CreditCard },
  { label: "Address Book",     icon: MapPin },
  { label: "Help & Support",   icon: HelpCircle },
  { label: "About VOLTA",      icon: Info },
];

export default function CustomerProfile() {
  const [active, setActive] = useState<Tab>("Profile");

  function handleLogout() {
    localStorage.removeItem("volta_user");
    localStorage.removeItem("volta_session");
    window.location.href = "/";
  }

  function renderContent() {
    switch (active) {
      case "Profile":         return <ProfileSection />;
      case "Security":        return <SecuritySection />;
      case "Notifications":   return <NotificationsSection />;
      case "Privacy":         return <PrivacySection />;
      case "Payment Methods": return <PaymentMethodsSection />;
      case "Address Book":    return <AddressBookSection />;
      case "Help & Support":  return <HelpSupportSection />;
      case "About VOLTA":     return <AboutSection />;
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <CustomerNav active="Home" />

      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">My Profile</h1>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-56 flex-shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {MENU.map(({ label, icon: Icon }) => {
                const isActive = active === label;
                return (
                  <button key={label} onClick={() => setActive(label)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors border-b border-gray-50 last:border-0 ${
                      isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-50"
                    }`}>
                    <Icon className={`flex-shrink-0 ${isActive ? "text-white" : "text-gray-400"}`} style={{ width: 18, height: 18 }} />
                    <span className={`text-sm font-semibold flex-1 ${isActive ? "text-white" : "text-gray-700"}`}>{label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-white/70" : "text-gray-300"}`} />
                  </button>
                );
              })}
              <button onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3.5 text-left text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100">
                <LogOut style={{ width: 18, height: 18 }} className="text-red-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-red-500">Log Out</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
