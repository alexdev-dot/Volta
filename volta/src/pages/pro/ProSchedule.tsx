import { ChevronLeft, ChevronRight, Calendar, Plus, SlidersHorizontal, MoreVertical, MapPin, Lightbulb, CalendarDays, X } from "lucide-react";
import ProNav from "@/components/navigation/ProNav";

const CELL_H = 60; // px per hour
const START_H = 8; // 8 AM
const END_H = 18;  // 6 PM

const TIME_LABELS = Array.from({ length: END_H - START_H }, (_, i) => {
  const h = START_H + i;
  return h < 12 ? `${h}:00 AM` : h === 12 ? `12:00 PM` : `${h - 12}:00 PM`;
});

const DAYS = [
  { label: "EAT", date: "" },
  { label: "Mon", date: "May 26", dateNum: 26 },
  { label: "Tue", date: "May 27", dateNum: 27 },
  { label: "Wed", date: "28", dateNum: 28, today: true },
  { label: "Thu", date: "May 29", dateNum: 29 },
  { label: "Fri", date: "May 30", dateNum: 30 },
  { label: "Sat", date: "May 31", dateNum: 31 },
  { label: "Sun", date: "Jun 1",  dateNum: 1 },
];

// day: 1=Mon...7=Sun, times in 24h minutes from midnight
const toMin = (h: number, m: number) => h * 60 + m;
const topPx  = (start: number) => ((start - START_H * 60) / 60) * CELL_H;
const heightPx = (start: number, end: number) => ((end - start) / 60) * CELL_H;

const EVENTS = [
  // Mon May 26
  { day: 1, start: toMin(9,0),  end: toMin(11,0), title: "Kitchen Sink Repair",       location: "Ruiru",     bg: "bg-green-100", border: "border-green-400", text: "text-green-800" },
  { day: 1, start: toMin(13,0), end: toMin(15,0), title: "Ceiling Lights Installation", location: "Westlands", bg: "bg-blue-100",  border: "border-blue-400",  text: "text-blue-800" },
  { day: 1, start: toMin(16,0), end: toMin(17,30),title: "Garden Maintenance",         location: "Runda",     bg: "bg-yellow-100",border: "border-yellow-400",text: "text-yellow-800" },
  // Tue May 27
  { day: 2, start: toMin(10,0), end: toMin(12,0), title: "Washing Machine Repair",    location: "Kasarani",  bg: "bg-orange-100",border: "border-orange-400",text: "text-orange-800" },
  { day: 2, start: toMin(15,0), end: toMin(17,0), title: "Interior Painting",         location: "Thika Road",bg: "bg-pink-100",  border: "border-pink-400",  text: "text-pink-800" },
  // Wed May 28 (today)
  { day: 3, start: toMin(8,0),  end: toMin(10,0), title: "Install Ceiling Lights",    location: "Westlands", bg: "bg-blue-100",  border: "border-blue-400",  text: "text-blue-800" },
  { day: 3, start: toMin(9,30), end: toMin(11,30),title: "Appliance Repair",           location: "Kasarani",  bg: "bg-purple-100",border: "border-purple-400",text: "text-purple-800" },
  { day: 3, start: toMin(13,0), end: toMin(15,0), title: "Deep House Cleaning",       location: "Kilimani",  bg: "bg-green-100", border: "border-green-400", text: "text-green-800" },
  { day: 3, start: toMin(14,0), end: toMin(16,0), title: "Pipe Leak Fix",             location: "Ruiru",     bg: "bg-teal-100",  border: "border-teal-400",  text: "text-teal-800" },
  // Thu May 29
  { day: 4, start: toMin(9,30), end: toMin(11,30),title: "Appliance Repair",           location: "Kasarani",  bg: "bg-purple-100",border: "border-purple-400",text: "text-purple-800" },
  // Fri May 30
  { day: 5, start: toMin(11,0), end: toMin(13,0), title: "Garden Maintenance",        location: "Runda",     bg: "bg-yellow-100",border: "border-yellow-400",text: "text-yellow-800" },
  { day: 5, start: toMin(15,30),end: toMin(17,30),title: "Wall Painting",             location: "Westlands", bg: "bg-pink-100",  border: "border-pink-400",  text: "text-pink-800" },
  // Sat May 31
  { day: 6, start: toMin(9,0),  end: toMin(11,0), title: "Kitchen Sink Repair",       location: "Ruiru",     bg: "bg-green-100", border: "border-green-400", text: "text-green-800" },
];

const TODAY_JOBS = [
  { emoji: "🚿", title: "Kitchen Sink Repair",       time: "9:00 AM – 11:00 AM",  location: "Kihunguro, Ruiru",  status: "In Progress", statusColor: "bg-green-100 text-green-700" },
  { emoji: "⚙️", title: "Appliance Repair",           time: "1:00 PM – 3:00 PM",   location: "Kasarani, Nairobi", status: "Upcoming",    statusColor: "bg-blue-100 text-blue-700" },
  { emoji: "🌿", title: "Garden Maintenance",         time: "4:00 PM – 5:30 PM",   location: "Runda, Nairobi",    status: "Upcoming",    statusColor: "bg-blue-100 text-blue-700" },
  { emoji: "🖌️", title: "Wall Painting",              time: "3:30 PM – 5:30 PM",   location: "Westlands, Nairobi",status: "Upcoming",    statusColor: "bg-blue-100 text-blue-700" },
];

const LEGEND = [
  { label: "Plumbing",    color: "bg-blue-400" },
  { label: "Electrical",  color: "bg-blue-300" },
  { label: "Cleaning",    color: "bg-green-400" },
  { label: "Appliance",   color: "bg-purple-400" },
  { label: "Painting",    color: "bg-pink-400" },
  { label: "Landscaping", color: "bg-orange-400" },
];

export default function ProSchedule() {
  const totalH = (END_H - START_H) * CELL_H;

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <ProNav active="My Schedule" />

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-5 flex flex-col gap-4">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">My Schedule</h1>
              <p className="text-sm text-gray-500">Manage your bookings and stay on top of your jobs.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
              <Plus className="w-4 h-4" /> Add Unavailable Time
            </button>
          </div>
        </div>

        {/* View tabs + nav */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* View tabs */}
          <div className="flex items-center gap-2">
            {["Calendar View","List View","Upcoming","Completed","Canceled"].map((t, i) => (
              <button key={t} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                i === 0 ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}>
                {i === 0 && <CalendarDays className="w-4 h-4" />}
                {t}
              </button>
            ))}
          </div>
          {/* Week nav */}
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>
            <span className="text-sm font-semibold text-gray-700 px-2">May 26 – Jun 1, 2024</span>
            <button className="p-2 border border-gray-200 bg-white rounded-xl hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
            <button className="px-4 py-2 border border-gray-200 bg-white text-sm font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              Today
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          {/* ── Calendar area ── */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {/* Week / Day / Month tabs */}
            <div className="flex items-center gap-1 p-3 border-b border-gray-100">
              {["Week","Day","Month"].map((t, i) => (
                <button key={t} className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  i === 0 ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}>{t}</button>
              ))}
            </div>

            {/* Day headers */}
            <div className="grid border-b border-gray-100" style={{ gridTemplateColumns: "56px repeat(7, 1fr)" }}>
              {DAYS.map((d, i) => (
                <div key={i} className={`text-center py-2 border-r border-gray-100 last:border-r-0 ${d.today ? "text-green-600" : "text-gray-500"}`}>
                  <p className="text-[10px] font-semibold uppercase">{d.label}</p>
                  {d.today
                    ? <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center mx-auto mt-0.5"><span className="text-white text-xs font-bold">{d.dateNum}</span></div>
                    : d.dateNum && <p className="text-xs font-semibold mt-0.5">{d.date}</p>
                  }
                </div>
              ))}
            </div>

            {/* Time grid */}
            <div className="overflow-auto" style={{ maxHeight: 520 }}>
              <div className="flex" style={{ height: totalH }}>
                {/* Time labels */}
                <div className="flex-shrink-0 w-14 relative" style={{ height: totalH }}>
                  {TIME_LABELS.map((label, i) => (
                    <div key={label} className="absolute text-[9px] text-gray-400 text-right pr-2" style={{ top: i * CELL_H - 6, right: 0, width: "100%" }}>
                      {label}
                    </div>
                  ))}
                </div>

                {/* Day columns 1-7 */}
                {[1,2,3,4,5,6,7].map((day) => {
                  const isToday = day === 3;
                  const dayEvents = EVENTS.filter(e => e.day === day);
                  return (
                    <div key={day} className={`flex-1 relative border-l border-gray-100 ${isToday ? "bg-green-50/30" : ""}`} style={{ height: totalH }}>
                      {/* Hour grid lines */}
                      {TIME_LABELS.map((_, i) => (
                        <div key={i} className="absolute w-full border-t border-gray-100" style={{ top: i * CELL_H }} />
                      ))}
                      {/* Events */}
                      {dayEvents.map((ev, ei) => {
                        const top = topPx(ev.start);
                        const height = Math.max(heightPx(ev.start, ev.end), 30);
                        const startLabel = (() => {
                          const h = Math.floor(ev.start / 60);
                          const m = ev.start % 60;
                          const period = h < 12 ? "AM" : "PM";
                          const hh = h > 12 ? h - 12 : h;
                          return `${hh}:${m.toString().padStart(2,"0")} ${period}`;
                        })();
                        const endLabel = (() => {
                          const h = Math.floor(ev.end / 60);
                          const m = ev.end % 60;
                          const period = h < 12 ? "AM" : "PM";
                          const hh = h > 12 ? h - 12 : h;
                          return `${hh}:${m.toString().padStart(2,"0")} ${period}`;
                        })();
                        return (
                          <div
                            key={ei}
                            className={`absolute left-0.5 right-0.5 rounded-lg border-l-2 ${ev.bg} ${ev.border} ${ev.text} px-1.5 py-1 overflow-hidden cursor-pointer hover:brightness-95 transition-all`}
                            style={{ top: top + 1, height: height - 2 }}
                          >
                            <p className="text-[10px] font-bold leading-tight truncate">{ev.title}</p>
                            {height > 40 && <p className="text-[9px] leading-tight opacity-75">{startLabel} – {endLabel}</p>}
                            {height > 55 && <p className="text-[9px] leading-tight opacity-60 truncate">{ev.location}</p>}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-gray-100 flex-wrap">
              {LEGEND.map(l => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${l.color}`} />
                  <span className="text-xs text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>

            {/* Working hours banner */}
            <div className="mx-4 mb-4 flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">🕐</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Set Your Working Hours</p>
                  <p className="text-xs text-gray-500">Let customers know when you're available for bookings.</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mon – Sat: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <button className="border border-gray-300 text-gray-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
                Edit Working Hours
              </button>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-green-600" />
                  <h2 className="font-extrabold text-gray-900 text-sm">Today's Schedule</h2>
                </div>
                <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">4</span>
              </div>
              <p className="text-[10px] text-gray-400 mb-3">jobs scheduled</p>
              <div className="flex flex-col gap-3">
                {TODAY_JOBS.map((job, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg">{job.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <p className="text-xs font-semibold text-gray-900 truncate leading-tight">{job.title}</p>
                        <button className="flex-shrink-0"><MoreVertical className="w-3.5 h-3.5 text-gray-400" /></button>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">{job.time}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-gray-400 flex-shrink-0" />
                        <p className="text-[10px] text-gray-400 truncate">{job.location}</p>
                      </div>
                      <span className={`inline-block mt-1 text-[9px] font-bold px-2 py-0.5 rounded-full ${job.statusColor}`}>{job.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <Calendar className="w-3.5 h-3.5" /> View Full Schedule
              </button>
            </div>

            {/* Sync Calendar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <h2 className="font-extrabold text-gray-900 text-sm mb-1">Sync Calendar</h2>
              <p className="text-[10px] text-gray-400 mb-3">Sync your schedule with external calendars.</p>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <span className="text-base">🟥</span> Google Calendar
                </button>
                <button className="flex items-center gap-2 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <span className="text-base">🟦</span> Outlook Calendar
                </button>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Manage Sync Settings
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Pro Tip footer */}
      <footer className="bg-white border-t border-gray-100 py-3">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-green-500 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-green-600">Pro Tip:</span>{" "}
              Keep your schedule updated to get more bookings and avoid last-minute cancellations.
            </p>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </footer>
    </div>
  );
}
