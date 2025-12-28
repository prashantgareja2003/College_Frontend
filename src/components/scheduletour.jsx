import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  ArrowRight, 
  MapPin, 
  Users,
  Info
} from "lucide-react";

export default function Scheduletour() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Helper to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      toast.success("Your 60 minute tour of campus visit is booked!", {
        duration: 4000,
        icon: '🏫',
        style: {
          borderRadius: '12px',
          background: '#333',
          color: '#fff',
        },
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 md:p-8">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-white flex flex-col md:flex-row min-h-[600px]">
        
        {/* LEFT SIDE */}
        <div className="md:w-5/12 bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience our Campus</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Step inside our world-class facilities and see where excellence begins.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <MapPin size={20}/>, text: "Main Academic Square" },
                { icon: <Users size={20}/>, text: "Guided by Student Ambassadors" },
                { icon: <Clock size={20}/>, text: "60-minute full campus tour" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                  <div className="bg-white/20 p-2 rounded-lg">{item.icon}</div>
                  <span className="font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm z-10">
            <div className="flex gap-3 text-xs md:text-sm text-blue-50">
              <Info size={16} className="shrink-0" />
              <p>Check-in is at the Welcome Center 15 minutes before your slot.</p>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="md:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-slate-900">Book your Tour</h1>
            <p className="text-slate-500 mt-2">Fill in your details to reserve your spot.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input fields for Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Date Input with past date restriction */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="date"
                    name="date"
                    min={getTodayDate()} // This prevents choosing past dates
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                <div className="relative group">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Booking..." : (
                <>
                  Confirm Tour <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}