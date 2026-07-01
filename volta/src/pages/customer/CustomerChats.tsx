import { useState } from "react";
import { Search, CheckCheck, SlidersHorizontal, Paperclip, Smile, Send, CheckCircle, Star, Headphones, ChevronRight, MoreHorizontal, ArrowLeft } from "lucide-react";
import CustomerNav from "@/components/CustomerNav";

const CONVERSATIONS = [
  {
    name: "John Kamau",
    role: "Plumber",
    img: "https://i.pravatar.cc/48?img=11",
    online: true,
    lastMsg: "I'll be there at 10 AM tomorrow.",
    time: "10:30 AM",
    unread: 2,
    active: true,
  },
  {
    name: "David Mwangi",
    role: "Electrician",
    img: "https://i.pravatar.cc/48?img=12",
    online: true,
    lastMsg: "Thanks! That works for me.",
    time: "Yesterday",
    unread: 1,
    active: false,
  },
  {
    name: "Mary Wanjiku",
    role: "Cleaner",
    img: "https://i.pravatar.cc/48?img=5",
    online: false,
    lastMsg: "You: Great, see you then.",
    time: "May 18",
    unread: 0,
    active: false,
  },
  {
    name: "Peter Ndungu",
    role: "Mechanic",
    img: "https://i.pravatar.cc/48?img=13",
    online: true,
    lastMsg: "Can you send a picture?",
    time: "May 17",
    unread: 0,
    active: false,
  },
  {
    name: "Samuel Kirui",
    role: "Landscaping",
    img: "https://i.pravatar.cc/48?img=17",
    online: true,
    lastMsg: "Payment confirmed, thank you!",
    time: "May 16",
    unread: 0,
    active: false,
  },
];

const MESSAGES = [
  { id: 1, from: "pro", text: "Hi lixek, this is John. I've received your booking request for fixing the kitchen sink leak.", time: "10:15 AM" },
  { id: 2, from: "me", text: "Hi John, yes that's correct. Can you let me know when you'll be available?", time: "10:17 AM" },
  { id: 3, from: "pro", text: "Sure! I'm available tomorrow morning. How about 10:00 AM?", time: "10:20 AM" },
  { id: 4, from: "me", text: "That works perfectly for me. See you tomorrow!", time: "10:21 AM" },
  { id: 5, from: "pro", text: "Great! I'll be there at 10 AM tomorrow.", time: "10:30 AM", unread: 2 },
];

const stored = (() => { try { return JSON.parse(localStorage.getItem("volta_user") || "{}"); } catch { return {}; } })();
const firstName = stored.firstName || "lixek";

export default function CustomerChats() {
  const [mobilePanel, setMobilePanel] = useState<"list" | "chat">("list");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <CustomerNav active="Chats" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">Messages</h1>
            <p className="text-gray-500 text-sm mt-0.5">Communicate with service professionals</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-semibold text-green-600">Connected</span>
          </div>
        </div>

        <div className="flex gap-0 bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ height: "calc(100svh - 200px)", minHeight: 480 }}>
          {/* Left: Conversation list */}
          <div className={`${mobilePanel === "chat" ? "hidden md:flex" : "flex"} w-full md:w-80 md:flex-shrink-0 flex-col border-r border-gray-100`}>
            {/* Search */}
            <div className="p-3 border-b border-gray-50">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input type="text" placeholder="Search conversations..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
                <SlidersHorizontal className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {CONVERSATIONS.map((c) => (
                <div key={c.name} onClick={() => setMobilePanel("chat")} className={`flex items-center gap-3 px-3 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-50 ${c.active ? "bg-green-50" : ""}`}>
                  <div className="relative flex-shrink-0">
                    <img src={c.img} alt={c.name} className="w-11 h-11 rounded-full object-cover" />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${c.online ? "bg-green-500" : "bg-gray-300"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-bold text-gray-900">{c.name}</p>
                        <CheckCircle className="w-3 h-3 text-green-500 fill-green-500" />
                      </div>
                      <span className="text-[10px] text-gray-400">{c.time}</span>
                    </div>
                    <p className="text-xs text-gray-400">{c.role}</p>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-xs text-gray-500 truncate max-w-[160px]">{c.lastMsg}</p>
                      {c.unread > 0 && (
                        <span className="w-5 h-5 bg-green-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">{c.unread}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Need help */}
            <div className="p-3 border-t border-gray-100">
              <div className="flex items-start gap-2 bg-gray-50 rounded-xl p-3">
                <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Need help?</p>
                  <p className="text-[10px] text-gray-400 mb-1">Our support team is ready to assist you.</p>
                  <button className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5">
                    Contact Support <ChevronRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Active chat */}
          <div className={`${mobilePanel === "list" ? "hidden md:flex" : "flex"} flex-1 flex-col min-w-0`}>
            {/* Chat header */}
            <div className="flex items-center justify-between px-3 md:px-5 py-3.5 border-b border-gray-100">
              <div className="flex items-center gap-2 md:gap-3">
                <button onClick={() => setMobilePanel("list")} className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 text-gray-600" />
                </button>
                <div className="relative">
                  <img src="https://i.pravatar.cc/48?img=11" alt="John Kamau" className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-gray-900">John Kamau</p>
                    <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>Plumber</span>
                    <span>•</span>
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-600 font-medium">4.8 (128 reviews)</span>
                    <span>•</span>
                    <span className="text-green-600 font-semibold">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  View Booking
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              <div className="text-center">
                <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">May 21, 2024</span>
              </div>
              {MESSAGES.map((m) => (
                <div key={m.id} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"} gap-2`}>
                  {m.from === "pro" && (
                    <img src="https://i.pravatar.cc/32?img=11" alt="pro" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-auto" />
                  )}
                  <div className={`max-w-sm relative ${m.from === "me" ? "items-end" : "items-start"} flex flex-col`}>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.from === "me"
                        ? "bg-green-600 text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}>
                      {m.text}
                      {m.unread && (
                        <span className="ml-2 w-5 h-5 bg-white text-green-600 text-[10px] font-bold rounded-full inline-flex items-center justify-center">{m.unread}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[10px] text-gray-400">{m.time}</span>
                      {m.from === "me" && <CheckCheck className="w-3 h-3 text-green-500" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5">
                <input type="text" placeholder="Type a message..." className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent" />
                <button className="p-1 hover:bg-gray-200 rounded-lg transition-colors">
                  <Smile className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5">
                Send <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
