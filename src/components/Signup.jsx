import React, { useState } from "react";
import { Link } from 'react-router-dom';


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

    const steps = [
        { number: 1, title: "Personal Details", description: "Enter your basic information" },
        { number: 2, title: "Email Verification", description: "Verify your email address" },
        { number: 3, title: "Welcome", description: "Account created successfully" }
    ];

    return (
        <div className="h-screen bg-gray-900 flex items-center justify-center p-4">



            {/* Main Container */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden">
                <div className="flex h-auto min-h-[600px]">

                    {/* Left Side - Progress Section */}
                    <div className="w-2/5 bg-gradient-to-b from-purple-600/20 to-blue-600/20 p-6 md:p-8 lg:p-12 flex flex-col">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:gap-3 mb-8 lg:mb-12">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h9" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" /><path d="M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414z" /><path d="M18 14.5v1.5" /><path d="M18 20v1.5" /><path d="M21.032 16.25l-1.299 .75" /><path d="M16.27 19l-1.3 .75" /><path d="M14.97 16.25l1.3 .75" /><path d="M19.733 19l1.3 .75" /></svg>

                            </div>
                            <span className="text-white text-lg lg:text-xl font-semibold">Admission Process</span>
                        </div>

                        {/* Progress Steps */}
                        <div className="space-y-6 lg:space-y-8 flex-1">
                            {steps.map((stepItem, index) => (
                                <div key={stepItem.number} className="flex items-start gap-3 lg:gap-4">
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-semibold text-xs lg:text-sm transition-all duration-300 ${step >= stepItem.number
                                            ? 'bg-gradient-to-r from-orange-500 text-white shadow-lg'
                                            : 'bg-white/10 text-white/60 border border-white/20'
                                            }`}>
                                            {step > stepItem.number ? '✓' : stepItem.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`w-px h-12 lg:h-16 mt-2 transition-all duration-300 ${step > stepItem.number ? 'bg-gradient-to-b from-purple-500 to-blue-500' : 'bg-white/20'
                                                }`}></div>
                                        )}
                                    </div>
                                    <div className="pt-2 lg:pt-3 min-w-0">
                                        <h3 className={`font-semibold text-sm lg:text-base transition-all duration-300 ${step >= stepItem.number ? 'text-white' : 'text-white/60'
                                            }`}>
                                            {stepItem.title}
                                        </h3>
                                        <p className="text-white/50 text-xs lg:text-sm mt-1 leading-tight">{stepItem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        {/* <div className="mt-8 lg:mt-16 p-4 lg:p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/80 italic text-sm lg:text-base leading-relaxed">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
              <p className="text-white/60 text-xs lg:text-sm mt-2">- Malcolm X</p>
            </div> */}
                    </div>

                    {/* Right Side - Form Section */}
                    <div className="w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                        {step === 1 && (
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Create Account</h1>
                                <p className="text-white/60 mb-6 lg:mb-8 text-sm lg:text-base">Fill in your details to get started</p>

                                <div className="space-y-4 lg:space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                placeholder="John"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white/80 text-sm font-medium mb-2">Confirm Password</label>
                                            <input
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="••••••••"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Role</label>
                                        <div className="relative w-full">
                                            <select
                                                name="role"
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm lg:text-base appearance-none"
                                            >
                                                <option value="Student" className="bg-gray-900 text-gray-200">Student</option>
                                                <option value="HOD" className="bg-gray-900 text-gray-200">HOD</option>
                                                <option value="Professor" className="bg-gray-900 text-gray-200">Professor</option>
                                            </select>

                                            {/* Custom arrow */}
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                                ▼
                                            </span>
                                        </div>

                                    </div>
                                    <button
                                        onClick={handleSignup}
                                        className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base"
                                    >
                                        Continue to Verification
                                    </button>
                                    <p className="text-white text-sm mt-4 text-center">
                                        Already have an account?{" "}
                                        <link to="/" className="text-green-400 font-semibold hover:underline">
                                            LogIn
                                        </link>
                                    </p>

                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="text-center">
                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>

                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Check Your Email</h1>
                                <p className="text-white/60 mb-4 lg:mb-6 text-sm lg:text-base">We've sent a verification code to your email</p>

                                <div className="bg-white/5 border border-white/20 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
                                    <p className="text-white/80 text-sm lg:text-base">Demo OTP: <span className="font-mono font-bold text-purple-400 text-base lg:text-lg">{generatedOtp}</span></p>
                                </div>

                                <div className="space-y-4 lg:space-y-6">
                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Verification Code</label>
                                        <input
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter 6-digit code"
                                            maxLength="6"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-center text-lg lg:text-2xl tracking-wider font-mono"
                                        />
                                    </div>

                                    <div className="flex gap-3 lg:gap-4">
                                        <button
                                            onClick={handleVerifyOtp}
                                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 lg:px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base"
                                        >
                                            Verify Account
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 lg:px-6 py-3 bg-white/5 border border-white/20 text-white/80 rounded-xl font-semibold hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm lg:text-base"
                                        >
                                            Resend
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>

                                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Welcome Aboard!</h1>
                                <p className="text-white/60 mb-6 lg:mb-8 text-sm lg:text-base">Your account has been created successfully</p>

                                <div className="bg-white/5 border border-white/20 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8 text-left">
                                    <div className="space-y-3 lg:space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                                            <span className="text-white/60 text-sm lg:text-base">Name:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                                            <span className="text-white/60 text-sm lg:text-base">Email:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60 text-sm lg:text-base">Role:</span>
                                            <span className="text-white font-medium text-sm lg:text-base">{formData.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm lg:text-base"
                                >
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