import React from "react";
import { motion } from "framer-motion";

export function ThinkBuild() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 relative overflow-hidden">
      {/* Background subtle moving shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-40"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10 bg-white shadow-xl rounded-2xl max-w-lg relative z-10"
      >
        {/* Corrected className */}
        <img
          src="/Robot-Bot 3D.gif"
          alt="Robot Bot"
          className="mx-auto w-64 h-auto"
        />

        <h1 className="text-4xl font-bold mt-4 text-gray-800">Coming Soon</h1>
        <p className="text-lg text-gray-600 mt-4">
          Our college website is currently under construction. <br />
          We’ll be live very soon. Stay tuned!
        </p>

        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Notify Me
          </button>
        </div>
      </motion.div>
    </div>
  );
}
