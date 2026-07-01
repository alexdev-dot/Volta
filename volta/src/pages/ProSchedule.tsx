import { ChevronLeft, ChevronRight, Calendar, Plus, CheckCircle2, XCircle, Clock, CalendarDays, User, MapPin, MoreVertical } from "lucide-react";
import ProNav from "@/components/ProNav";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const CALENDAR_ROWS = [
  [27, 28, 29, 30, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];
const PREV_MONTH_DAYS = new Set([27, 28, 29, 30]);
const HAS_DOT = new Set([21, 22, 28, 29]);

const APPOINTMENTS = [
  {
    start: "09:00 AM",
    end: "10:30 AM",
    title: "Fix Kitchen Sink Leak",
    customer: "Jane Wanjiku",
    location: "Kilimani, Nairobi",
    status: "Completed",
    statusColor: "text-green-600",
    statusBg: "bg-green-50",
    borderColor: "border-green-500",
  },
  {
    start: "11:00 AM",
    end: "12:30 PM",
    title: "Install Ceiling Lights",
    customer: "Kelvin Omondi",
    location: "Westlands, Nairobi",
    status: "Scheduled",
    statusColor: "text-blue-600",
    statusBg: "bg-blue-50",
    borderColor: "border-blue-400",
  },
  {
    start: "02:00 PM",
    end: "03:30 PM",
    title: "Unclog Drain Pipe",
    customer: "Mary Akinyi",
    location: "Kasarani, Nairobi",
    status: "In Progress",
    statusColor: "text-yellow-700",
    statusBg: "bg-yellow-50",
    borderColor: "border-yellow-400",
  },
  {
    start: "04:00 PM",
    end: "05:30 PM",
    title: "Bathroom Cleaning",
    customer: "Samuel Njuguna",
    location: "Lavington, Nairobi",
    status: "Pending",
    statusColor: "text-orange-600",
    statusBg: "bg-orange-50",
    borderColor: "border-orange-400",
  },
];

const FILTER_TYPES = [
  { label: "Plumbing", icon: "🔧", color: "text-blue-500" },
  { label: "Electrical", icon: "⚡", color: "text-yellow-500" },
  { label: "Cleaning", icon: "🧹", color: "text-purple-500" },
  { label: "Carpentry", icon: "🪚", color: "text-orange-500" },
];

export default function ProSchedule() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ProNav active="My Schedule" />

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900">My Schedule</h1>
            <p className="text-gray-500 text-sm mt-0.5">Manage your working hours and appointments</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors">
              <Plus className="w-4 h-4" /> Add Availability
            </button>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" /> Calendar View
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { icon: CalendarDays, iconBg: "bg-green-50", iconColor: "text-green-600", label: "Today", value: "4", sub: "Appointments" },
            { icon: Clock, iconBg: "bg-orange-50", iconColor: "text-orange-500", label: "Upcoming", value: "7", sub: "Appointments" },
            { icon: CheckCircle2, iconBg: "bg-blue-50", iconColor: "text-blue-500", label: "Completed", value: "23", sub: "This Month" },
            { icon: XCircle, iconBg: "bg-red-50", iconColor: "text-red-400", label: "Cancelled", value: "2", sub: "This Month" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                <div className={`${s.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{s.label}</p>
                  <p className="text-3xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-400">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-5">
          {/* Left: Calendar + Filters */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-4">
            {/* Mini Calendar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-3">
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-4 h-4 text-gray-500" />
                </button>
                <p className="font-bold text-gray-900 text-sm">May 2025</p>
                <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-7 mb-1">
                {DAYS_OF_WEEK.map((d) => (
                  <div key={d} className="text-center text-[10px] font-semibold text-gray-400 py-0.5">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-y-0.5">
                {CALENDAR_ROWS.map((row, ri) =>
                  row.map((day, ci) => {
                    const isGray = ri === 0 && PREV_MONTH_DAYS.has(day);
                    const isToday = day === 20 && !isGray;
                    const hasDot = HAS_DOT.has(day) && !isGray;
                    return (
                      <div key={`${ri}-${ci}`} className="relative flex flex-col items-center">
                        <button
                          className={`w-7 h-7 flex items-center justify-center rounded-full text-xs transition-colors
                            ${isToday ? "bg-green-600 text-white font-bold" : ""}
                            ${!isToday && !isGray ? "text-gray-700 hover:bg-gray-100" : ""}
                            ${isGray ? "text-gray-300" : ""}
                          `}
                        >
                          {day}
                        </button>
                        {hasDot && !isToday && (
                          <div className="w-1 h-1 bg-green-500 rounded-full absolute bottom-0" />
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Filter by Status */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="text-xs font-bold text-gray-700 mb-2">Filter by Status</p>
              <div className="relative">
                <select className="w-full text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-2 pr-8 appearance-none outline-none focus:border-green-400 bg-white">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Scheduled</option>
                  <option>In Progress</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
                <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Filter by Type */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <p className="text-xs font-bold text-gray-700 mb-3">Filter by Type</p>
              <div className="flex flex-col gap-2.5">
                {FILTER_TYPES.map((t) => (
                  <label key={t.label} className="flex items-center gap-2.5 cursor-pointer">
                    <div className="w-4 h-4 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2.5">
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-lg">{t.icon === "🔧" ? "🔧" : t.icon}</span>
                    <span className="text-sm text-gray-700">{t.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Appointments */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              {/* Date header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-extrabold text-gray-900 text-lg">Tuesday, May 20, 2025</h2>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">Today</button>
                  <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Appointment list */}
              <div className="flex flex-col gap-3">
                {APPOINTMENTS.map((apt) => (
                  <div key={apt.title} className={`flex gap-4 border-l-4 ${apt.borderColor} pl-4 py-3 pr-2 rounded-r-xl hover:bg-gray-50 transition-colors`}>
                    <div className="w-20 flex-shrink-0">
                      <p className="text-xs font-semibold text-gray-800">{apt.start}</p>
                      <p className="text-xs text-gray-400">{apt.end}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm mb-1">{apt.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-0.5">
                        <User className="w-3 h-3" /> {apt.customer}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" /> {apt.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${apt.statusBg} ${apt.statusColor}`}>
                        {apt.status}
                      </span>
                      <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability banner */}
              <div className="mt-5 flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-orange-50 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Set your availability</p>
                    <p className="text-xs text-gray-400">Update your working hours and availability to get more bookings.</p>
                  </div>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Manage Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
