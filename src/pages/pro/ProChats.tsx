import { useState } from "react";
import {
  Search, SlidersHorizontal, MoreVertical, MoreHorizontal,
  MapPin, Phone, Mail, Briefcase, Calendar, DollarSign,
  ChevronDown, Paperclip, Smile, Send, CheckCheck,
  Clock, FileText, ArrowLeft, Info
} from "lucide-react";
import { Link } from "wouter";
import ProNav from "@/components/navigation/ProNav";

// ── Data ─────────────────────────────────────────────────────────────────────

const CONVERSATIONS = [
  { name: "James Mwangi",    job: "Kitchen Sink Repair",         last: "Thanks for coming by today. Great job!", time: "2m ago",     unread: 2, online: true,  img: "https://i.pravatar.cc/80?img=33" },
  { name: "Mary Wanjiku",    job: "Ceiling Lights Installation",  last: "Hi, when can we schedule the next visit?", time: "15m ago", unread: 1, online: true,  img: "https://i.pravatar.cc/80?img=5" },
  { name: "Peter Otieno",    job: "Appliance Repair",            last: "The washing machine is working fine now.", time: "1h ago",   unread: 0, online: false, img: "https://i.pravatar.cc/80?img=12" },
  { name: "Sarah Njeri",     job: "Garden Maintenance",          last: "Please let me know if you need anything else.", time: "3h ago", unread: 0, online: true,  img: "https://i.pravatar.cc/80?img=25" },
  { name: "David Kariuki",   job: "Wall Painting",               last: "Can you send me the final invoice?", time: "Yesterday",  unread: 0, online: false, img: "https://i.pravatar.cc/80?img=15" },
  { name: "Lilian Achieng'", job: "Deep House Cleaning",         last: "Thank you so much for the excellent service.", time: "Yesterday", unread: 0, online: false, img: "https://i.pravatar.cc/80?img=45" },
  { name: "Brian Kipruto",   job: "Plumbing Fix",                last: "I'll send the photos shortly.", time: "2 days ago", unread: 0, online: false, img: "https://i.pravatar.cc/80?img=18" },
];

const MESSAGES = [
  { from: "customer", text: "Hi, I noticed the sink is still leaking a bit.", time: "9:02 AM" },
  { from: "me", text: "Hello James, thanks for letting me know. I'll come back and check it this afternoon.", time: "9:05 AM", read: true },
  { from: "customer", text: "Okay, that works. Let me know when you're on your way.", time: "9:06 AM" },
  { from: "me", text: "I'll be there around 2 PM.", time: "9:07 AM", read: true },
  { from: "customer", text: "Thanks for coming by today. Great job! The sink is working perfectly now.", time: "10:15 AM", isToday: true },
  { from: "me", text: "You're welcome! 😊 Glad I could help. Let me know if you need anything else in the future.", time: "10:17 AM", read: true },
];

const SHARED_MEDIA = [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=120&h=120&fit=crop",
];

// ── Component ─────────────────────────────────────────────────────────────────

type MobilePanel = "list" | "chat" | "details";

export default function ProChats() {
  const [activeTab, setActiveTab]   = useState<"All" | "Unread" | "Archived">("All");
  const [activeConv, setActiveConv] = useState(0);
  const [message, setMessage]       = useState("");
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>("list");

  const conv = CONVERSATIONS[activeConv];

  function selectConv(i: number) {
    setActiveConv(i);
    setMobilePanel("chat");
  }

  return (
    <div className="h-screen bg-white font-sans flex flex-col overflow-hidden">
      <ProNav active="Chats" />

      {/* ── Page header ── */}
      <div className="flex-shrink-0 bg-white border-b border-gray-100 px-4 sm:px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-xl sm:text-2xl flex-shrink-0">💬</span>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight">Chats</h1>
              <p className="text-xs text-gray-400 hidden sm:block">Communicate with customers and manage your jobs.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-white focus-within:border-green-400 transition-colors w-32 sm:w-48">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Search…" className="text-sm outline-none bg-transparent placeholder-gray-400 w-full" />
            </div>
            <button className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── 3-column body ── */}
      <div className="flex-1 flex overflow-hidden max-w-screen-xl mx-auto w-full">

        {/* ── LEFT: conversation list ──
            Mobile:  visible only when mobilePanel === "list"
            Tablet:  always visible (md+), but chat may overlap
            Desktop: always visible (lg+) as fixed-width column
        */}
        <div className={`
          flex-shrink-0 border-r border-gray-100 flex flex-col bg-white
          w-full md:w-72
          ${mobilePanel !== "list" ? "hidden md:flex" : "flex"}
        `}>
          {/* Tabs */}
          <div className="flex items-center gap-2 px-3 pt-3 pb-2 border-b border-gray-100">
            {(["All", "Unread", "Archived"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === tab ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}>
                {tab}
                {tab === "All"    && <span className={`text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ${activeTab === "All"    ? "bg-white text-green-600" : "bg-gray-200 text-gray-600"}`}>3</span>}
                {tab === "Unread" && <span className={`text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ${activeTab === "Unread" ? "bg-white text-green-600" : "bg-gray-200 text-gray-600"}`}>2</span>}
              </button>
            ))}
          </div>

          {/* Conversation rows */}
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map((c, i) => (
              <button key={i} onClick={() => selectConv(i)}
                className={`w-full flex items-start gap-3 px-3 py-3 border-b border-gray-50 text-left hover:bg-gray-50 transition-colors ${
                  activeConv === i ? "bg-green-50 border-l-2 border-l-green-500" : ""
                }`}>
                <div className="relative flex-shrink-0">
                  <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
                  {c.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
                    <p className="text-[10px] text-gray-400 flex-shrink-0 ml-1">{c.time}</p>
                  </div>
                  <p className="text-[11px] text-green-600 font-semibold truncate leading-tight">{c.job}</p>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className="text-[11px] text-gray-500 truncate flex-1 leading-tight">{c.last}</p>
                    {c.unread > 0 && (
                      <span className="ml-1 w-4 h-4 bg-green-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center flex-shrink-0">{c.unread}</span>
                    )}
                  </div>
                </div>
              </button>
            ))}
            <button className="w-full flex items-center justify-center gap-1.5 py-3 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors border-t border-gray-50">
              Load More <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── MIDDLE: chat window ──
            Mobile:  visible only when mobilePanel === "chat"
            Tablet:  always visible (md+)
            Desktop: always visible (lg+)
        */}
        <div className={`
          flex-col border-r border-gray-100 bg-white
          flex-1 min-w-0
          ${mobilePanel === "chat" ? "flex" : "hidden md:flex"}
        `}>
          {/* Chat header */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 border-b border-gray-100">
            {/* Back button (mobile) */}
            <button onClick={() => setMobilePanel("list")} className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="relative flex-shrink-0">
              <img src={conv.img} alt={conv.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
              {conv.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-900 text-sm leading-tight truncate">{conv.name}</p>
              <p className="text-xs text-green-500 font-medium leading-tight">{conv.online ? "● Online" : "Offline"}</p>
            </div>
            <Link href="/pro/jobs"
              className="hidden sm:flex items-center gap-1.5 border border-green-600 text-green-600 text-sm font-semibold px-3 py-1.5 rounded-xl hover:bg-green-50 transition-colors flex-shrink-0">
              <Briefcase className="w-3.5 h-3.5" /> View Job
            </Link>
            {/* Details toggle on mobile/tablet */}
            <button onClick={() => setMobilePanel("details")} className="xl:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
              <Info className="w-5 h-5 text-gray-400" />
            </button>
            <button className="hidden xl:block p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Job info card */}
          <div className="flex-shrink-0 mx-3 sm:mx-4 mt-3 flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=100&h=80&fit=crop" alt="Kitchen Sink"
              className="w-12 sm:w-16 h-12 sm:h-14 object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0 py-2">
              <p className="text-sm font-bold text-gray-900 truncate">Kitchen Sink Repair</p>
              <p className="text-[10px] text-gray-400">Job ID: #VLT-2024-00128</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full flex-shrink-0 hidden sm:block mx-2">In Progress</span>
            <div className="text-right mr-3 sm:mr-4 flex-shrink-0">
              <p className="text-sm font-extrabold text-gray-900">KSh 2,500</p>
              <p className="text-[10px] text-gray-400">Agreed Price</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-4 flex flex-col gap-3">
            {MESSAGES.map((msg, i) => {
              const isMe = msg.from === "me";
              return (
                <div key={i}>
                  {(msg as any).isToday && (
                    <div className="text-center my-3">
                      <span className="text-[11px] text-gray-400 bg-gray-100 px-4 py-1 rounded-full">Today</span>
                    </div>
                  )}
                  <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] sm:max-w-[65%] px-4 py-3 rounded-2xl ${
                      isMe ? "bg-green-600 text-white rounded-br-md" : "bg-gray-100 text-gray-800 rounded-bl-md"
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
          <div className="flex-shrink-0 border-t border-gray-100 px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3 bg-white">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
              <Paperclip className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex-1 border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 flex items-center gap-2 bg-white focus-within:border-green-400 transition-colors">
              <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type a message…"
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400" />
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                <Smile className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* ── RIGHT: customer details ──
            Mobile/tablet: fullscreen overlay triggered by Info button
            Desktop (xl+): always-visible side panel
        */}
        <div className={`
          flex-col bg-white overflow-y-auto
          w-full xl:w-64 xl:flex-shrink-0
          ${mobilePanel === "details" ? "flex" : "hidden xl:flex"}
        `}>
          {/* Back button on mobile */}
          <div className="xl:hidden flex items-center gap-2 px-4 pt-3 pb-1 border-b border-gray-100">
            <button onClick={() => setMobilePanel("chat")} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <p className="font-semibold text-gray-700 text-sm">Back to chat</p>
          </div>

          {/* About Customer */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <p className="font-extrabold text-gray-900 text-sm">About Customer</p>
              <button><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img src={conv.img} alt={conv.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="font-bold text-gray-900 text-sm">{conv.name}</p>
                  <span className="text-[9px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Verified</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">Member since Jan 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /><p className="text-xs text-gray-600">+254 712 345 678</p></div>
              <div className="flex items-center gap-2"><Mail  className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /><p className="text-xs text-gray-600 truncate">jamesmwangi@gmail.com</p></div>
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /><p className="text-xs text-gray-600">Kihunguro, Ruiru</p></div>
            </div>
          </div>

          {/* Job Details */}
          <div className="p-4 border-b border-gray-100">
            <p className="font-extrabold text-gray-900 text-sm mb-3">Job Details</p>
            <div className="flex flex-col gap-3">
              {[
                { Icon: FileText,    label: "Job Title",    value: "Kitchen Sink Repair",    isStatus: false },
                { Icon: Briefcase,   label: "Job ID",       value: "#VLT-2024-00128",        isStatus: false },
                { Icon: Clock,       label: "Status",       value: "In Progress",            isStatus: true },
                { Icon: Calendar,    label: "Scheduled",    value: "May 26, 2024 • 9:00 AM", isStatus: false },
                { Icon: MapPin,      label: "Location",     value: "Kihunguro, Ruiru",       isStatus: false },
                { Icon: DollarSign,  label: "Agreed Price", value: "KSh 2,500",             isStatus: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <item.Icon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
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
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-extrabold text-gray-900 text-sm">Shared Media</p>
              <button className="text-xs font-semibold text-green-600 hover:text-green-700">View all</button>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {SHARED_MEDIA.map((src, i) => (
                <img key={i} src={src} alt="Shared" className="w-full aspect-square object-cover rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
