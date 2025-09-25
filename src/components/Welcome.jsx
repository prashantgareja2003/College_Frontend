import React from 'react'

const Welcome = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-800 font-sans text-white">
            <div className="bg-white/10 backdrop-blur-md p-16 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105">
                <h1 className="text-5xl font-bold mb-6 tracking-wider">Welcome!</h1>
                <p className="text-lg text-gray-200 mb-8">
                    We are thrilled to have you here. Explore and enjoy your journey with us.
                </p>
                <a
                    href="#"
                    className="inline-block px-8 py-3 rounded-full bg-white text-indigo-800 font-semibold hover:bg-indigo-800 hover:text-white transition-colors"
                >
                    Get Started
                </a>
            </div>
        </div>
    )
}

export default Welcome
