import { useState } from "react";
import {
  Search, CheckCheck, Paperclip, Smile, CheckCircle, Star,
  MoreHorizontal, ArrowLeft, Phone, Video, User, Download,
  Calendar, MapPin, DollarSign, FileText, Edit3, Info,
  Send, X,
} from "lucide-react";
import CustomerNav from "@/components/navigation/CustomerNav";

const CONVERSATIONS = [
  { name: "John Kamau",   role: "Fix Kitchen Sink Leak",   sub: "Sounds good! I'll be there at 10 AM.",    time: "10:30 AM",  unread: 2, online: true,  img: "https://i.pravatar.cc/80?img=11" },
  { name: "David Mwangi", role: "Install Ceiling Lights",  sub: "Please provide the address again.",        time: "Yesterday", unread: 1, online: true,  img: "https://i.pravatar.cc/80?img=12" },
  { name: "Mary Wanjiku", role: "Sofa Deep Cleaning",      sub: "Thank you! I'll confirm the booking.",     time: "Yesterday", unread: 0, online: true,  img: "https://i.pravatar.cc/80?img=5"  },
  { name: "James Gitahi", role: "AC Repair & Maintenance", sub: "Do you have any warranty?",                time: "May 20",    unread: 0, online: false, img: "https://i.pravatar.cc/80?img=15" },
  { name: "Brian Otieno", role: "HVAC Maintenance",        sub: "Okay, see you then!",                      time: "May 19",    unread: 0, online: true,  img: "https://i.pravatar.cc/80?img=18" },
  { name: "Daniel Mutua", role: "House Painting",          sub: "Can we reschedule to Friday?",             time: "May 18",    unread: 0, online: true,  img: "https://i.pravatar.cc/80?img=16" },
  { name: "Samuel Kirui", role: "Landscaping Service",     sub: "Great, thank you!",                        time: "May 17",    unread: 0, online: true,  img: "https://i.pravatar.cc/80?img=17" },
];

const MESSAGES = [
  { id: 1, from: "pro", text: "Hello! This is John. I'll be arriving at your place tomorrow at 10 AM as scheduled.", time: "10:15 AM" },
  { id: 2, from: "me",  text: "Hi John! Thanks for the update. I'll be at home.",                                    time: "10:16 AM", read: true },
  { id: 3, from: "pro", text: "Perfect. I have all the tools needed for the job.",                                   time: "10:17 AM" },
  { id: 4, from: "me",  text: "Great! Please let me know if you need any additional information.",                   time: "10:18 AM", read: true },
  { id: 5, from: "pro", text: "Sounds good! I'll be there at 10 AM.",                                               time: "10:30 AM" },
];

export default function CustomerChats() {
  const [activeTab, setActiveTab] = useState<"All" | "Unread" | "Archived">("All");
  // Mobile: "list" | "chat" | "details"
  const [mobilePanel, setMobilePanel] = useState<"list" | "chat" | "details">("list");
  const [mute, setMute] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <CustomerNav active="Chats" />

      {/* Full remaining height, 3-column on lg, 1 panel at a time on mobile */}
      <div className="flex flex-1 max-w-screen-xl mx-auto w-full px-0 sm:px-4 py-0 sm:py-4 gap-0 overflow-hidden"
        style={{ height: "calc(100vh - 56px)" }}>

        {/* ── LEFT: Conversation list ── */}
        <div className={`
          ${mobilePanel !== "list" ? "hidden" : "flex"} md:flex
          flex-col border border-gray-100 md:rounded-l-2xl overflow-hidden bg-white flex-shrink-0
          w-full md:w-72 lg:w-80
        `}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <h2 className="text-lg font-extrabold text-gray-900">Chats</h2>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <Edit3 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="px-3 py-2.5 border-b border-gray-50">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Search chats..."
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100">
            {["All", "Unread", "Archived"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeTab === tab ? "bg-green-600 text-white" : "text-gray-500 hover:bg-gray-100"
                }`}>
                {tab}
                {tab === "Unread" && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "Unread" ? "bg-white text-green-600" : "bg-green-600 text-white"}`}>2</span>
                )}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map((c, i) => (
              <div key={c.name} onClick={() => setMobilePanel("chat")}
                className={`flex items-start gap-3 px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 ${i === 0 ? "bg-green-50" : ""}`}>
                <div className="relative flex-shrink-0">
                  <img src={c.img} alt={c.name} className="w-11 h-11 rounded-full object-cover" />
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${c.online ? "bg-green-500" : "bg-gray-300"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-bold text-gray-900">{c.name}</p>
                      <CheckCircle className="w-3 h-3 text-green-500 fill-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-[10px] text-gray-400 flex-shrink-0">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium truncate">{c.role}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-xs text-gray-400 truncate">{c.sub}</p>
                    {c.unread > 0 && (
                      <span className="w-5 h-5 bg-green-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0 ml-1">{c.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MIDDLE: Active chat ── */}
        <div className={`
          ${mobilePanel === "list" || mobilePanel === "details" ? "hidden" : "flex"} md:flex
          flex-1 flex-col border-t border-b border-gray-100 overflow-hidden bg-white
        `}>
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={() => setMobilePanel("list")} className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg mr-1">
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </button>
              <div className="relative">
                <img src="https://i.pravatar.cc/80?img=11" alt="John Kamau" className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-bold text-gray-900 text-sm">John Kamau</p>
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 fill-green-500" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span>Plumber</span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-green-600 font-semibold">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
                <Phone className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
                <Video className="w-4 h-4 text-gray-500" />
              </button>
              {/* Details button — mobile only */}
              <button onClick={() => setMobilePanel("details")} className="lg:hidden p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
                <Info className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Booking card */}
          <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 mb-1 flex-shrink-0">
            <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
              <div className="flex items-start gap-3 p-3 sm:p-4">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=120&q=70"
                  alt="sink" className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-bold text-gray-900 text-sm">Fix Kitchen Sink Leak</p>
                    <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0">Scheduled</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gray-400" /> May 22, 2024 at 10:00 AM</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-400" /> Ruiru, Kiambu County</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-base font-extrabold text-gray-900">KSh 1,200</p>
                      <p className="text-[10px] text-gray-400">Booking ID: #GF12453</p>
                    </div>
                    <button className="border border-gray-200 text-gray-700 font-semibold text-xs px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 flex flex-col gap-3">
            <div className="flex items-center justify-center">
              <span className="text-xs text-gray-400 bg-gray-50 px-4 py-1 rounded-full">Today</span>
            </div>
            {MESSAGES.map((m) => (
              <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] sm:max-w-[68%] flex flex-col ${m.from === "me" ? "items-end" : "items-start"}`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.from === "me" ? "bg-green-500 text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}>{m.text}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[10px] text-gray-400">{m.time}</span>
                    {m.from === "me" && m.read && <CheckCheck className="w-3.5 h-3.5 text-green-500" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="border-t border-gray-100 px-3 sm:px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-3 sm:px-4 py-2.5 border border-gray-100">
              <input type="text" placeholder="Type a message..."
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent min-w-0" />
              <button className="hover:text-gray-600 transition-colors flex-shrink-0">
                <Smile className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <button className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0 shadow-sm">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── RIGHT: Chat Details ── */}
        <div className={`
          ${mobilePanel !== "details" ? "hidden" : "flex"} lg:flex
          flex-col border border-gray-100 lg:rounded-r-2xl overflow-y-auto bg-white flex-shrink-0
          w-full lg:w-64
        `}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <p className="font-bold text-gray-900">Chat Details</p>
            <div className="flex items-center gap-1">
              {/* Back button — mobile only */}
              <button onClick={() => setMobilePanel("chat")} className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors mr-1">
                <ArrowLeft className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <Info className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Pro profile */}
          <div className="flex flex-col items-center py-5 px-4 border-b border-gray-100">
            <div className="relative mb-3">
              <img src="https://i.pravatar.cc/80?img=11" alt="John Kamau" className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md" />
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex items-center gap-1 mb-0.5">
              <p className="font-bold text-gray-900 text-base">John Kamau</p>
              <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />
            </div>
            <p className="text-gray-500 text-xs mb-2">Plumber</p>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-bold text-gray-900">4.8</span>
              <span className="text-xs text-gray-400">(128 reviews)</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: Phone, label: "Phone", green: true },
                { icon: Video, label: "Video", green: true },
                { icon: User, label: "Profile", green: true },
                { icon: MoreHorizontal, label: "More", green: false },
              ].map(({ icon: Icon, label, green }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${green ? "bg-green-50 hover:bg-green-100" : "bg-gray-100 hover:bg-gray-200"}`}>
                    <Icon className={`w-4 h-4 ${green ? "text-green-600" : "text-gray-500"}`} />
                  </button>
                  <span className="text-[10px] text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Information */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="font-bold text-gray-900 text-sm mb-3">Booking Information</p>
            <div className="space-y-2.5">
              {[
                { icon: FileText, label: "Service",     val: "Fix Kitchen Sink Leak" },
                { icon: Calendar, label: "Date & Time", val: "May 22, 2024 at 10:00 AM" },
                { icon: MapPin,   label: "Location",    val: "Ruiru, Kiambu County" },
                { icon: DollarSign, label: "Amount",    val: "KSh 1,200" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-gray-400">{label}</p>
                    <p className="text-xs font-semibold text-gray-800">{val}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-2.5">
                <div className="w-3.5 h-3.5 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded border-2 border-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">Status</p>
                  <span className="inline-block bg-green-50 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5">Scheduled</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full border border-gray-200 text-gray-700 font-semibold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors">View Booking Details</button>
          </div>

          {/* Shared Files */}
          <div className="px-4 py-4 border-b border-gray-100">
            <p className="font-bold text-gray-900 text-sm mb-3">Shared Files</p>
            <div className="flex items-center gap-2.5 p-2.5 bg-gray-50 rounded-xl">
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=60&q=60"
                alt="sink" className="w-10 h-10 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">sink-image.jpg</p>
                <p className="text-[10px] text-gray-400">2.4 MB • May 20, 2024</p>
              </div>
              <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0">
                <Download className="w-3.5 h-3.5 text-gray-500" />
              </button>
            </div>
            <button className="mt-3 w-full border border-gray-200 text-gray-700 font-semibold text-xs py-2.5 rounded-xl hover:bg-gray-50 transition-colors">View All Files</button>
          </div>

          {/* Chat Settings */}
          <div className="px-4 py-4">
            <p className="font-bold text-gray-900 text-sm mb-3">Chat Settings</p>
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-gray-700 font-medium">Mute Notifications</span>
              <button onClick={() => setMute(!mute)}
                className={`w-10 h-5 rounded-full transition-colors relative flex-shrink-0 ${mute ? "bg-green-500" : "bg-gray-200"}`}>
                <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${mute ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-gray-700 font-medium">Archive Chat</span>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
