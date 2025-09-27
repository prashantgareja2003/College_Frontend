import React from 'react';
import { BookOpen, Users, Globe, Award, Lightbulb, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: BookOpen,
      title: "World-Class Education",
      description: "Cutting-edge curriculum designed by industry leaders and renowned professors",
      color: "blue"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Students from over 100 countries creating a diverse learning environment",
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "State-of-the-art research facilities and entrepreneurship programs",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Comprehensive support services and personalized academic guidance",
      color: "red"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500 group-hover:bg-blue-600",
    green: "bg-green-500 group-hover:bg-green-600",
    orange: "bg-orange-500 group-hover:bg-orange-600",
    red: "bg-red-500 group-hover:bg-red-600"
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Established 1875
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Education
            <span className="block text-blue-600">for Over a Century</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've been shaping minds, fostering innovation, and building leaders who make a 
            difference in the world. Our commitment to academic excellence and student success 
            remains unwavering.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="University Library" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Top 10</div>
                  <div className="text-sm text-gray-500">Global Ranking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Transforming Lives Through Education
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to provide transformative educational experiences that prepare 
                students to tackle the world's most pressing challenges with creativity, 
                critical thinking, and compassion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Research Excellence</h4>
                  <p className="text-gray-600">Leading breakthrough research across multiple disciplines with $500M+ in annual research funding.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Industry Partnerships</h4>
                  <p className="text-gray-600">Strong connections with leading companies providing internships and career opportunities.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alumni Network</h4>
                  <p className="text-gray-600">300,000+ graduates worldwide including CEOs, Nobel laureates, and world leaders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-14 h-14 ${colorClasses[highlight.color]} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}