import React, { useState } from "react";
import { CheckCircle, Mail, User, Lock, ArrowRight, Building2, AlertCircle } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
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
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const showError = (message) => {
        setError(message);
        setTimeout(() => setError(""), 5000);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setError("");
        
        if (!formData.firstName.trim()) {
            showError("Please enter your first name");
            return;
        }
        if (!formData.lastName.trim()) {
            showError("Please enter your last name");
            return;
        }
        if (!formData.email.trim()) {
            showError("Please enter your email address");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            showError("Please enter a valid email address");
            return;
        }
        if (!formData.password) {
            showError("Please enter a password");
            return;
        }
        if (formData.password.length < 6) {
            showError("Password must be at least 6 characters long");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            showError("Passwords do not match!");
            return;
        }
        
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otpCode);
        console.log("Generated OTP:", otpCode);
        setStep(2);
    };
    const navigate = useNavigate();
    const handleVerifyOtp = (e) => {
        e.preventDefault();
        setError("");
        
        if (!otp.trim()) {
            showError("Please enter the verification code");
            return;
        }
        if (otp.length !== 6) {
            showError("Verification code must be 6 digits");
            return;
        }
        if (otp === generatedOtp) {
            setStep(3);
        } else {
            showError("Invalid OTP. Please try again.");
        }
    };

    const handleFinalClick = async (e) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/think-build");
        }, 2000);
    };

    const steps = [
        { number: 1, title: "Personal Details", description: "Enter your basic information" },
        { number: 2, title: "Email Verification", description: "Verify your email address" },
        { number: 3, title: "Welcome", description: "Account created successfully" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            {/* Error Toast */}
            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                </div>
            )}

            {/* Main Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-5xl overflow-hidden">
                <div className="flex min-h-[600px]">
                    {/* Left Side - Progress Section */}
                    <div className="w-2/5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 p-8 lg:p-12 flex flex-col relative">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-200/30 to-transparent rounded-full blur-xl"></div>

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-12 relative z-10">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <span className="text-gray-800 text-xl font-semibold">Admission Process</span>
                        </div>

                        {/* Progress Steps */}
                        <div className="space-y-8 flex-1 relative z-10">
                            {steps.map((stepItem, index) => (
                                <div key={stepItem.number} className="flex items-start gap-4">
                                    <div className="flex flex-col items-center flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-500 ${
                                            step >= stepItem.number
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-110'
                                                : 'bg-white text-gray-400 border-2 border-gray-200'
                                        }`}>
                                            {step > stepItem.number ? '✓' : stepItem.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`w-px h-16 mt-3 transition-all duration-500 ${
                                                step > stepItem.number
                                                    ? 'bg-gradient-to-b from-green-500 to-emerald-600'
                                                    : 'bg-gray-300'
                                            }`}></div>
                                        )}
                                    </div>
                                    <div className="pt-3 min-w-0">
                                        <h3 className={`font-semibold text-base transition-all duration-300 ${
                                            step >= stepItem.number ? 'text-gray-800' : 'text-gray-500'
                                        }`}>
                                            {stepItem.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mt-1 leading-tight">{stepItem.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form Section */}
                    <div className="w-3/5 p-8 lg:p-12 flex flex-col justify-center relative">
                        {step === 1 && (
                            <div className="relative z-10">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                                <p className="text-gray-600 mb-8">Fill in your details to get started</p>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                                            <input
                                                name="firstName"
                                                type="text"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                name="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="••••••••"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                                            <input
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="••••••••"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Role</label>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white appearance-none"
                                        >
                                            <option value="Student" className="bg-white text-gray-900">Student</option>
                                            <option value="HOD" className="bg-white text-gray-900">HOD</option>
                                            <option value="Professor" className="bg-white text-gray-900">Professor</option>
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleSignup}
                                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        Continue to Verification
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                    <p className="text-gray-600 text-sm mt-4 text-center">
                                        Already have an account?{" "}
                                        <a href="/" className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="text-center relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6 shadow-lg">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>

                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Check Your Email</h1>
                                <p className="text-gray-600 mb-6">We've sent a verification code to your email</p>

                                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4 mb-6">
                                    <p className="text-gray-700 text-sm">Demo OTP: <span className="font-mono font-bold text-orange-600 text-lg">{generatedOtp}</span></p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Verification Code</label>
                                        <input
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Enter 6-digit code"
                                            maxLength="6"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-center text-xl tracking-wider font-mono bg-gray-50 hover:bg-white"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={handleVerifyOtp}
                                            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Verify Account
                                        </button>
                                        <button
                                            type="button"
                                            className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300"
                                        >
                                            Resend
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="text-center relative z-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>

                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Aboard! 🎉</h1>
                                <p className="text-gray-600 mb-8">Your account has been created successfully</p>

                                <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-gray-600">Name:</span>
                                            <span className="font-medium text-gray-900">{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-gray-600">Email:</span>
                                            <span className="font-medium text-gray-900">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-600">Role:</span>
                                            <span className="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">{formData.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleFinalClick}
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Setting up your account...
                                        </>
                                    ) : (
                                        <>
                                            Get Started with Learning
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
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