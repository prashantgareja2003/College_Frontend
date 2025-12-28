import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { User, Mail, Lock, ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [genOtp, setGenOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* STEP 1: Validation & Mock OTP */
  const handleRegister = () => {
    if (!form.firstName || !form.lastName) return toast.error("Please enter your full name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return toast.error("Invalid email address");
    if (form.password.length < 6) return toast.error("Password must be at least 6 characters");
    if (form.password !== form.confirmPassword) return toast.error("Passwords do not match");

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGenOtp(code);
    console.log("Mock OTP sent to email:", code); 
    toast.success("Verification code sent to your email!");
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp === genOtp) {
      toast.success("Identity verified!");
      setStep(3);
    } else {
      toast.error("Invalid OTP. Please check again.");
    }
  };

  const finalSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("https://localhost:7135/api/Main/SignUpUser", {
        username: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
        role: form.role,
        department: "CSE",
        phone: "9999999999",
      });

      toast.success("Account created successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error("Signup failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants
  const slideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 md:p-6 font-sans">
      <Toaster position="top-center" />
      
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">
        <div className="flex flex-col md:flex-row min-h-[600px]">

          {/* LEFT SIDE: Brand & Info (Hidden on small mobile) */}
          <div className="w-full md:w-5/12 bg-emerald-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center mb-8">
                    <ShieldCheck size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Join Our Academic Community</h2>
                <p className="text-emerald-100 text-lg">
                  One platform to manage your courses, resources, and campus profile.
                </p>
             </div>
             
             {/* Step Indicator */}
             <div className="mt-12 space-y-4 z-10">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= s ? "bg-white text-emerald-600 border-white" : "border-emerald-400 text-emerald-400"}`}>
                            {step > s ? <CheckCircle2 size={16} /> : s}
                        </div>
                        <span className={`text-sm font-medium ${step >= s ? "text-white" : "text-emerald-300"}`}>
                            {s === 1 ? "Profile Details" : s === 2 ? "Verification" : "Complete"}
                        </span>
                    </div>
                ))}
             </div>

             {/* Decorative Background Elements */}
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="w-full md:w-7/12 p-8 md:p-14 bg-white">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                    key="step1" 
                    variants={slideVariants} initial="hidden" animate="visible" exit="exit"
                    className="space-y-5"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Create Account</h2>
                    <p className="text-slate-500 text-sm mt-1">Please fill in your legal name and contact.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">First Name</label>
                        <input name="firstName" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Last Name</label>
                        <input name="lastName" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                    <input name="email" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="j.doe@university.edu" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Password</label>
                        <input type="password" name="password" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="••••••••" />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Confirm</label>
                        <input type="password" name="confirmPassword" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="••••••••" />
                    </div>
                  </div>

                  <button
                    onClick={handleRegister}
                    className="w-full mt-8 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 group"
                  >
                    Continue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                    key="step2" 
                    variants={slideVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Verify Email</h2>
                  <p className="text-slate-500 mt-2 mb-8 px-4">We've sent a 6-digit code to <br/><span className="font-semibold text-slate-800">{form.email}</span></p>

                  <input
                    maxLength={6}
                    className="w-full max-w-[240px] px-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 outline-none text-center text-3xl font-bold tracking-[0.5em] transition-all bg-slate-50"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button
                    onClick={verifyOtp}
                    className="w-full mt-10 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                  >
                    Verify & Continue
                  </button>
                  <button onClick={() => setStep(1)} className="mt-4 text-sm font-bold text-slate-400 hover:text-slate-600 underline">Change Email</button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                    key="step3" 
                    variants={slideVariants} initial="hidden" animate="visible" exit="exit"
                    className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Ready to Go!</h2>
                  <p className="text-slate-500 mt-2 mb-10">Verification successful. Click below to finalize your account creation.</p>

                  <button
                    onClick={finalSubmit}
                    disabled={loading}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <ShieldCheck />}
                    {loading ? "Registering..." : "Finalize Signup"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="text-center mt-8 text-slate-400 text-sm">
                Already have an account? <a href="/login" className="text-emerald-600 font-bold hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}