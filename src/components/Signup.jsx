import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "Student",
    });
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otpCode);
        console.log("Generated OTP:", otpCode);
        setStep(2);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (otp === generatedOtp) {
            setStep(3);
        } else {
            alert("Invalid OTP. Try again.");
        }
    };
function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex space-x-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-green-500 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              opacity: 0.6,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

    // inside Signup component

const handleFinalClick = () => {
    setLoading(true);
    const redirectTimer = setTimeout(() => {
        navigate("/Welcome");
    }, 3000);
    return () => clearTimeout(redirectTimer);
};


    const steps = [
        { number: 1, title: "Personal Details", description: "Enter your basic information" },
        { number: 2, title: "Email Verification", description: "Verify your email address" },
        { number: 3, title: "Welcome", description: "Account created successfully" }
    ];

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 overflow-hidden">
            {/* Animated Background Elements */}
            {loading && <Loader />}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Geometric patterns */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rotate-45 animate-ping delay-300"></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300/30 rotate-45 animate-ping delay-700"></div>
                    <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-pink-300/25 rotate-45 animate-ping delay-1100"></div>
                </div>

                {/* Gradient mesh overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10"></div>
            </div>

            {/* Main Container */}
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden">
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-3xl"></div>

                <div className="relative flex h-auto min-h-[600px]">
                    {/* Left Side - Progress Section */}
                    <div className="w-2/5 bg-gradient-to-br from-purple-600/30 via-indigo-600/25 to-blue-600/30 p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-xl"></div>

                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:gap-3 mb-8 lg:mb-12 relative z-10">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-lg shadow-lg shadow-purple-500/25">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h9" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" /><path d="M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" /><path d="M18 14.5v1.5" /><path d="M18 20v1.5" /><path d="M21.032 16.25l-1.299 .75" /><path d="M16.27 19l-1.3 .75" /><path d="M14.97 16.25l1.3 .75" /><path d="M19.733 19l1.3 .75" /></svg>
                            </div>
                            <span className="text-white text-lg lg:text-xl font-semibold drop-shadow-sm">Admission Process</span>
                        </div>

                        {/* Progress Steps */}
                        <div className="space-y-6 lg:space-y-8 flex-1 relative z-10">
                            {steps.map((stepItem, index) => (
                                <div key={stepItem.number} className="flex items-start gap-3 lg:gap-4">
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-semibold text-xs lg:text-sm transition-all duration-500 ${step >= stepItem.number
                                            ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25 scale-110'
                                            : 'bg-white/10 text-white/60 border border-white/30 backdrop-blur-sm'
                                            }`}>
                                            {step > stepItem.number ? '✓' : stepItem.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`w-px h-12 lg:h-16 mt-2 transition-all duration-500 ${step > stepItem.number
                                                ? 'bg-gradient-to-b from-orange-400 via-purple-500 to-blue-500 shadow-sm'
                                                : 'bg-white/30'
                                                }`}></div>
                                        )}
                                    </div>
                                    <div className="pt-2 lg:pt-3 min-w-0">
                                        <h3 className={`font-semibold text-sm lg:text-base transition-all duration-300 ${step >= stepItem.number ? 'text-white drop-shadow-sm' : 'text-white/60'
                                            }`}>
                                            {stepItem.title}
                                        </h3>
                                        <p className="text-white/50 text-xs lg:text-sm mt-1 leading-tight">{stepItem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form Section */}
                    <div className="w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                        {/* Decorative background elements */}
                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-xl"></div>

                        {step === 1 && (
                            <div className="relative z-10">
                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">Create Account</h1>
                                <p className="text-white/70 mb-6 lg:mb-8 text-sm lg:text-base">Fill in your details to get started</p>

                                <div className="space-y-4 lg:space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label className="block text-white/90 text-sm font-medium mb-2">First Name</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                placeholder="John"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base hover:bg-white/15 shadow-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base hover:bg-white/15 shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base hover:bg-white/15 shadow-lg"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label className="block text-white/90 text-sm font-medium mb-2">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base hover:bg-white/15 shadow-lg"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/90 text-sm font-medium mb-2">Confirm Password</label>
                                            <input
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="••••••••"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base hover:bg-white/15 shadow-lg"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/90 text-sm font-medium mb-2">Role</label>
                                        <div className="relative w-full">
                                            <select
                                                name="role"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-sm lg:text-base appearance-none hover:bg-white/15 shadow-lg"
                                            >
                                                <option value="Student" className="bg-gray-800 text-white">Student</option>
                                                <option value="HOD" className="bg-gray-800 text-white">HOD</option>
                                                <option value="Professor" className="bg-gray-800 text-white">Professor</option>
                                            </select>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none">
                                                ▼
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSignup}
                                        className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base shadow-lg shadow-green-500/25"
                                    >
                                        Continue to Verification
                                    </button>

                                    <p className="text-white/80 text-sm mt-4 text-center">
                                        Already have an account?{" "}
                                        <a href="/" className="text-green-300 font-semibold hover:text-green-200 transition-colors duration-300 hover:underline">
                                            LogIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="text-center relative z-10">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg shadow-purple-500/30">
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>

                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">Check Your Email</h1>
                                <p className="text-white/70 mb-4 lg:mb-6 text-sm lg:text-base">We've sent a verification code to your email</p>

                                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6 shadow-lg">
                                    <p className="text-white/90 text-sm lg:text-base">Demo OTP: <span className="font-mono font-bold text-purple-300 text-base lg:text-lg drop-shadow-sm">{generatedOtp}</span></p>
                                </div>

                                <div className="space-y-4 lg:space-y-6">
                                    <div>
                                        <label className="block text-white/90 text-sm font-medium mb-2">Verification Code</label>
                                        <input
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter 6-digit code"
                                            maxLength="6"
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-transparent transition-all duration-300 text-center text-lg lg:text-2xl tracking-wider font-mono shadow-lg hover:bg-white/15"
                                        />
                                    </div>

                                    <div className="flex gap-3 lg:gap-4">
                                        <button
                                            onClick={handleVerifyOtp}
                                            className="flex-1 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 text-white py-3 px-4 lg:px-6 rounded-xl font-semibold hover:from-purple-600 hover:via-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base shadow-lg shadow-purple-500/25"
                                        >
                                            Verify Account
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 lg:px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white/90 rounded-xl font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-sm lg:text-base shadow-lg"
                                        >
                                            Resend
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center relative z-10">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg shadow-green-500/30">
                                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>

                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">Welcome Aboard!</h1>
                                <p className="text-white/70 mb-6 lg:mb-8 text-sm lg:text-base">Your account has been created successfully</p>

                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8 text-left shadow-lg">
                                    <div className="space-y-3 lg:space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-white/20">
                                            <span className="text-white/70 text-sm lg:text-base">Name:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/20">
                                            <span className="text-white/70 text-sm lg:text-base">Email:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/70 text-sm lg:text-base">Role:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base shadow-lg shadow-green-500/25"
                                onClick={handleFinalClick}>
                                    Get Started with Learning
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;