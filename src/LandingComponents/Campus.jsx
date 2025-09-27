import React from 'react';
import { MapPin, Coffee, Dumbbell, Book, Music, Users, Wifi, Car } from 'lucide-react';

export default function Campus() {
  const facilities = [
    { icon: Book, name: "Modern Libraries", description: "24/7 study spaces" },
    { icon: Coffee, name: "Dining Options", description: "15+ restaurants & cafes" },
    { icon: Dumbbell, name: "Fitness Centers", description: "State-of-the-art equipment" },
    { icon: Music, name: "Arts Centers", description: "Theaters & studios" },
    { icon: Users, name: "Student Lounges", description: "Social & study spaces" },
    { icon: Wifi, name: "Campus WiFi", description: "High-speed everywhere" },
    { icon: Car, name: "Transportation", description: "Free shuttle service" },
    { icon: MapPin, name: "Location", description: "Heart of the city" }
  ];

  return (
    <section id="campus" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Golden Memories
            <span className="block text-blue-600">Where Learning Meets Living</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience a vibrant campus community with world-class facilities, diverse activities, 
            and endless opportunities to grow, connect, and thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=500&fit=crop&crop=entropy&cs=tinysrgb" 
                  alt="Students studying" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
                  alt="Campus activities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
                  alt="Group study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=500&fit=crop&crop=entropy&cs=tinysrgb" 
                  alt="Campus facilities" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                A Home Away From Home
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our 500-acre campus provides everything you need for a rich, fulfilling college experience. 
                From cutting-edge academic facilities to recreational spaces, we've created an environment 
                where you can focus on what matters most - your education and personal growth.
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{facility.name}</h4>
                    <p className="text-gray-500 text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Student Organizations</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25</div>
              <div className="text-blue-100">Dining Venues</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Students Living On Campus</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Campus Security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}