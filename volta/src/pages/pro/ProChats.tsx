import { useState } from "react";
import { Search, SlidersHorizontal, MoreVertical, MoreHorizontal, MapPin, Phone, Mail, Briefcase, Calendar, DollarSign, ChevronDown, Paperclip, Smile, Send, CheckCheck } from "lucide-react";
import { Link } from "wouter";
import ProNav from "@/components/navigation/ProNav";

const CONVERSATIONS = [
  { name: "James Mwangi",   job: "Kitchen Sink Repair",       last: "Thanks for coming by today. Great job!", time: "2m ago",   unread: 2, online: true,  initials: "JM", color: "bg-blue-500" },
  { name: "Mary Wanjiku",   job: "Ceiling Lights Installation",last: "Hi, when can we schedule the next visit?", time: "15m ago", unread: 1, online: true,  initials: "MW", color: "bg-purple-500" },
  { name: "Peter Otieno",   job: "Appliance Repair",          last: "The washing machine is working fine now.", time: "1h ago",  unread: 0, online: false, initials: "PO", color: "bg-green-500" },
  { name: "Sarah Njeri",    job: "Garden Maintenance",        last: "Please let me know if you need anything else.", time: "3h ago", unread: 0, online: true,  initials: "SN", color: "bg-pink-500" },
  { name: "David Kariuki",  job: "Wall Painting",             last: "Can you send me the final invoice?",    time: "Yesterday", unread: 0, online: false, initials: "DK", color: "bg-orange-500" },
  { name: "Lilian Achieng'",job: "Deep House Cleaning",       last: "Thank you so much for the excellent service.", time: "Yesterday", unread: 0, online: false, initials: "LA", color: "bg-teal-500" },
  { name: "Brian Kipruto",  job: "Plumbing Fix",              last: "I'll send the photos shortly.",         time: "2 days ago", unread: 0, online: false, initials: "BK", color: "bg-red-500" },
];

const MESSAGES = [
  { from: "customer", text: "Hi, I noticed the sink is still leaking a bit.",                                           time: "9:02 AM" },
  { from: "me",       text: "Hello James, thanks for letting me know. I'll come back and check it this afternoon.",     time: "9:05 AM", read: true },
  { from: "customer", text: "Okay, that works. Let me know when you're on your way.",                                   time: "9:06 AM" },
  { from: "me",       text: "I'll be there around 2 PM.",                                                               time: "9:07 AM", read: true },
  // --- Today separator ---
  { from: "customer", text: "Thanks for coming by today. Great job! The sink is working perfectly now.",                time: "10:15 AM", isToday: true },
  { from: "me",       text: "You're welcome! 😊 Glad I could help. Let me know if you need anything else in the future.", time: "10:17 AM", read: true },
];

export default function ProChats() {
  const [activeTab, setActiveTab] = useState<"All"|"Unread"|"Archived">("All");
  const [activeConv, setActiveConv] = useState(0);
  const [message, setMessage] = useState("");

  const conv = CONVERSATIONS[activeConv];

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ProNav active="Chats" />

      {/* Search + filter bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">💬</span> Chats
            </div>
            <p className="text-sm text-gray-400">Communicate with customers and manage your jobs.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 focus-within:border-green-400 transition-colors">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search chats..." className="text-sm outline-none bg-transparent placeholder-gray-400 w-40" />
            </div>
            <button className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex max-w-screen-xl mx-auto w-full px-4 py-4 gap-4" style={{ height: "calc(100vh - 120px)" }}>

        {/* ── LEFT: conversation list ── */}
        <div className="w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center gap-2 p-3 border-b border-gray-100">
            {(["All","Unread","Archived"] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === tab ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}>
                {tab}
                {tab === "All" && <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "All" ? "bg-white text-green-600" : "bg-gray-200 text-gray-600"}`}>3</span>}
                {tab === "Unread" && <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === "Unread" ? "bg-white text-green-600" : "bg-gray-200 text-gray-600"}`}>2</span>}
              </button>
            ))}
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map((c, i) => (
              <button key={i} onClick={() => setActiveConv(i)}
                className={`w-full flex items-start gap-3 px-3 py-3 border-b border-gray-50 text-left hover:bg-gray-50 transition-colors ${activeConv === i ? "bg-green-50 border-l-2 border-l-green-500" : ""}`}>
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{c.initials}</span>
                  </div>
                  {c.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
                    <p className="text-[10px] text-gray-400 flex-shrink-0 ml-1">{c.time}</p>
                  </div>
                  <p className="text-[10px] text-green-600 font-semibold truncate">{c.job}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[11px] text-gray-500 truncate flex-1">{c.last}</p>
                    {c.unread > 0 && (
                      <span className="ml-1 w-4 h-4 bg-green-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center flex-shrink-0">{c.unread}</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
            <button className="w-full flex items-center justify-center gap-1 py-3 text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
              Load More <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ── MIDDLE: chat window ── */}
        <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <div className="relative">
              <div className={`w-10 h-10 rounded-full ${conv.color} flex items-center justify-center`}>
                <span className="text-white font-bold">{conv.initials}</span>
              </div>
              {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">{conv.name}</p>
              <p className="text-xs text-green-500 font-medium">{conv.online ? "Online" : "Offline"}</p>
            </div>
            <Link href="/pro/jobs" className="flex items-center gap-1.5 border border-green-600 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-xl hover:bg-green-50 transition-colors">
              <Briefcase className="w-3.5 h-3.5" /> View Job
            </Link>
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Job info card */}
          <div className="mx-4 mt-3 flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
            <div className="w-12 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🚿</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900">Kitchen Sink Repair</p>
              <p className="text-[10px] text-gray-400">Job ID: #VLT-2024-00128</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">In Progress</span>
            <div className="text-right ml-2">
              <p className="text-sm font-extrabold text-gray-900">KSh 2,500</p>
              <p className="text-[10px] text-gray-400">Agreed Price</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {MESSAGES.map((msg, i) => {
              const isMe = msg.from === "me";
              return (
                <div key={i}>
                  {(msg as any).isToday && (
                    <div className="text-center my-2">
                      <span className="text-[10px] text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
                    </div>
                  )}
                  <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[68%] px-4 py-2.5 rounded-2xl ${
                      isMe ? "bg-green-600 text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <div className={`flex items-center gap-1 mt-1 ${isMe ? "justify-end" : "justify-start"}`}>
                        <span className={`text-[10px] ${isMe ? "text-green-200" : "text-gray-400"}`}>{msg.time}</span>
                        {isMe && msg.read && <CheckCheck className="w-3 h-3 text-green-200" />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message input */}
          <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex-1 bg-gray-50 rounded-xl px-4 py-2.5 flex items-center gap-2">
              <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
              <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
                <Smile className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* ── RIGHT: customer details ── */}
        <div className="w-64 flex-shrink-0 hidden xl:flex flex-col gap-3 overflow-y-auto">

          {/* About Customer */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-extrabold text-gray-900 text-sm">About Customer</p>
              <button><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 rounded-full ${conv.color} flex items-center justify-center`}>
                <span className="text-white font-bold">{conv.initials}</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{conv.name}</p>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Verified</span>
                <p className="text-[10px] text-gray-400 mt-0.5">Member since Jan 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <p className="text-xs text-gray-600">+254 712 345 678</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <p className="text-xs text-gray-600 truncate">jamesmwangi@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <p className="text-xs text-gray-600">Kihunguro, Ruiru</p>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="font-extrabold text-gray-900 text-sm mb-3">Job Details</p>
            <div className="flex flex-col gap-2.5">
              {[
                { Icon: Briefcase, label: "Job Title",    value: "Kitchen Sink Repair" },
                { Icon: Calendar,  label: "Job ID",       value: "#VLT-2024-00128" },
                { Icon: null,      label: "Status",       value: "In Progress", isStatus: true },
                { Icon: Calendar,  label: "Scheduled",    value: "May 26, 2024 • 9:00 AM" },
                { Icon: MapPin,    label: "Location",     value: "Kihunguro, Ruiru" },
                { Icon: DollarSign,label: "Agreed Price", value: "KSh 2,500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  {item.Icon ? <item.Icon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" /> : <span className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />}
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400">{item.label}</p>
                    {item.isStatus
                      ? <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{item.value}</span>
                      : <p className="text-xs font-semibold text-gray-800">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shared Media */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-extrabold text-gray-900 text-sm">Shared Media</p>
              <button className="text-xs font-semibold text-green-600 hover:text-green-700">View all</button>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {["bg-blue-100","bg-gray-200","bg-gray-300"].map((bg, i) => (
                <div key={i} className={`${bg} rounded-xl aspect-square flex items-center justify-center text-2xl`}>
                  {["🚿","🔧","🪛"][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
