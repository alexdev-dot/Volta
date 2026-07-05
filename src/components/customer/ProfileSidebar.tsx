import { 
  Star, MapPin, Phone, Mail, Clock, 
  CheckCircle, Shield, Award, MessageCircle,
  X, ChevronRight, ThumbsUp, ThumbsDown, Flag
} from "lucide-react";

interface Professional {
  name: string;
  role: string;
  rating: number;
  reviews?: number;
  reviewCount?: number;
  distance: string;
  price: string;
  status: string;
  statusColor: string;
  img: string;
  verified?: boolean;
  memberSince?: string;
  completedJobs?: number;
  responseTime?: string;
  location?: string;
  about?: string;
  skills?: string[];
  services?: { name: string; price: string; duration: string }[];
  availability?: { day: string; hours: string }[];
  reviewsArray?: Array<{
    id: number;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    service: string;
    text: string;
    helpful: number;
  }>;
}

interface ProfileSidebarProps {
  professional: Professional | null;
  onClose: () => void;
  isOpen: boolean;
}

const DEFAULT_PROFESSIONAL: Professional = {
  name: "John Kamau",
  role: "Professional Plumber",
  rating: 4.8,
  reviewCount: 128,
  distance: "2.1 km away",
  price: "From KSh 1,200/hour",
  status: "Online",
  statusColor: "bg-green-500",
  img: "https://i.pravatar.cc/400?img=11",
  verified: true,
  memberSince: "2022",
  completedJobs: 245,
  responseTime: "15 min",
  location: "Ruiru, Kiambu",
  about: "Professional plumber with over 8 years of experience in residential and commercial plumbing. Specialized in leak detection, pipe repairs, installations, and emergency services. Committed to quality work and customer satisfaction.",
  skills: ["Leak Detection", "Pipe Repairs", "Installations", "Emergency Services", "Drain Cleaning", "Water Heater"],
  services: [
    { name: "Leak Repair", price: "KSh 800", duration: "1-2 hours" },
    { name: "Pipe Installation", price: "KSh 1,500", duration: "2-3 hours" },
    { name: "Drain Cleaning", price: "KSh 600", duration: "30-60 min" },
    { name: "Water Heater Service", price: "KSh 2,000", duration: "2-4 hours" },
    { name: "Emergency Plumbing", price: "KSh 2,500", duration: "ASAP" },
  ],
  availability: [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  reviewsArray: [
    {
      id: 1,
      name: "Sarah Wanjiku",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      date: "2 days ago",
      service: "Leak Repair",
      text: "John was excellent! He arrived on time, diagnosed the issue quickly, and fixed it professionally. Very clean work and fair pricing.",
      helpful: 12,
    },
    {
      id: 2,
      name: "Michael Omondi",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 5,
      date: "1 week ago",
      service: "Pipe Installation",
      text: "Highly recommended! John installed new pipes in our bathroom renovation. His attention to detail and craftsmanship is outstanding.",
      helpful: 8,
    },
    {
      id: 3,
      name: "Grace Njeri",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 4,
      date: "2 weeks ago",
      service: "Drain Cleaning",
      text: "Good service overall. John was professional and the drain works perfectly now. Only minor delay in arrival but communication was good.",
      helpful: 5,
    },
  ],
};

export default function ProfileSidebar({ professional, onClose, isOpen }: ProfileSidebarProps) {
  const pro = professional ? {
    ...DEFAULT_PROFESSIONAL,
    name: professional.name,
    role: professional.role,
    rating: professional.rating,
    distance: professional.distance,
    price: professional.price,
    status: professional.status,
    statusColor: professional.statusColor,
    img: professional.img,
    reviewCount: typeof professional.reviews === 'number' ? professional.reviews : DEFAULT_PROFESSIONAL.reviewCount,
  } : DEFAULT_PROFESSIONAL;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end" onClick={onClose}>
      <div 
        className="w-full max-w-[520px] h-full bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-br from-green-600 to-emerald-700">
          <img 
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80" 
            alt="Plumbing work"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <div className="flex items-end gap-4">
              <div className="relative">
                <img 
                  src={pro.img} 
                  alt={pro.name}
                  className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 ${pro.statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {pro.status}
                </div>
              </div>
              <div className="flex-1 min-w-0 pb-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-extrabold text-white">{pro.name}</h1>
                  {pro.verified && (
                    <CheckCircle className="w-5 h-5 text-green-300 fill-green-300 flex-shrink-0" />
                  )}
                </div>
                <p className="text-white/90 text-sm font-medium">{pro.role}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-bold">{pro.rating}</span>
                  <span className="text-white/80 text-sm">({pro.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-lg font-extrabold text-gray-900">{pro.completedJobs}</p>
              <p className="text-xs text-gray-500">Jobs</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-extrabold text-gray-900">{pro.responseTime}</p>
              <p className="text-xs text-gray-500">Response</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-extrabold text-gray-900">{pro.memberSince}</p>
              <p className="text-xs text-gray-500">Since</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-extrabold text-gray-900">{pro.rating}</p>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-xs">Starting from</p>
                <p className="text-2xl font-extrabold text-gray-900">{pro.price}</p>
              </div>
              <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full" />
                {pro.status}
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600">{pro.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600">Response: {pro.responseTime}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-3 rounded-xl transition-colors">
                Book Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-green-600 text-green-600 font-semibold text-sm py-3 rounded-xl hover:bg-green-50 transition-colors">
                <MessageCircle className="w-4 h-4" /> Message
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Verified professional • Secure payments</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{pro.about}</p>
            <div className="flex flex-wrap gap-2">
              {pro.skills.map((skill) => (
                <span key={skill} className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Services</h2>
            <div className="space-y-3">
              {pro.services.map((service) => (
                <div key={service.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                    <p className="text-gray-500 text-xs">{service.duration}</p>
                  </div>
                  <p className="font-bold text-green-600 text-sm">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Availability</h2>
            <div className="grid grid-cols-2 gap-2">
              {pro.availability.map((avail) => (
                <div key={avail.day} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <p className="font-semibold text-gray-900 text-sm">{avail.day}</p>
                  <p className={`text-xs font-medium ${avail.hours === "Closed" ? "text-red-500" : "text-green-600"}`}>
                    {avail.hours}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Reviews</h2>
            <div className="space-y-4">
              {(pro.reviewsArray || []).slice(0, 3).map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-400 text-xs">{review.date}</span>
                      </div>
                      <p className="text-green-600 text-xs font-medium mb-1">{review.service}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="flex items-center gap-1 text-gray-500 text-xs hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-3.5 h-3.5" /> Helpful ({review.helpful})
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 text-xs hover:text-red-500 transition-colors">
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                        <button className="flex items-center gap-1 text-gray-500 text-xs hover:text-gray-700 transition-colors">
                          <Flag className="w-3.5 h-3.5" /> Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-extrabold text-gray-900 mb-3">Contact</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">Call</p>
                  <p className="text-gray-500 text-xs">+254 7XX XXX XXX</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">Email</p>
                  <p className="text-gray-500 text-xs">john@example.com</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-gray-900 text-sm">Why Choose {pro.name}?</h3>
            </div>
            <div className="space-y-2">
              {[
                "Verified background check",
                "Insurance covered",
                "Quality guarantee",
                "24/7 customer support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
