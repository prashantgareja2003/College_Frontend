import React from 'react';
import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '../UI/button';
import { Link } from 'react-router-dom';
export default function Body() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 lg:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Ranked #1 in Academic Excellence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Your Future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Starts Here
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Join thousands of students who have transformed their lives through world-class education,
              cutting-edge research, and lifelong connections at our prestigious university.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">25,000+</div>
                <div className="text-sm text-gray-500 font-medium">Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">95%</div>
                <div className="text-sm text-gray-500 font-medium">Placement</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">100+</div>
                <div className="text-sm text-gray-500 font-medium">Outer Programs</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12">
              {/* Campus Image Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=600&fit=crop&crop=entropy&cs=tinysrgb"
                  alt="University Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Join 25,000+ students in our vibrant community</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500 rounded-2xl shadow-lg flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}