import React from 'react';
import { GraduationCap, Microscope, Calculator, Palette, Gavel, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '../UI/button';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Liberal Arts",
      description: "Develop critical thinking and communication skills across humanities and social sciences",
      students: "3,200+",
      color: "blue"
    },
    {
      icon: Microscope,
      title: "Science & Technology",
      description: "Cutting-edge research in biology, chemistry, physics, and environmental science",
      students: "2,800+",
      color: "green"
    },
    {
      icon: Calculator,
      title: "Engineering",
      description: "Innovative solutions in mechanical, electrical, software, and biomedical engineering",
      students: "4,100+",
      color: "orange"
    },
    {
      icon: Stethoscope,
      title: "Medicine & Health",
      description: "Comprehensive programs preparing future healthcare leaders and researchers",
      students: "1,900+",
      color: "red"
    },
    {
      icon: Palette,
      title: "Arts & Design",
      description: "Creative expression through visual arts, music, theater, and digital media",
      students: "1,500+",
      color: "blue"
    },
    {
      icon: Gavel,
      title: "Law & Business",
      description: "Leadership development in legal studies, business administration, and entrepreneurship",
      students: "2,200+",
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50 group-hover:bg-blue-100",
      icon: "bg-blue-500 group-hover:bg-blue-600",
      text: "text-blue-700"
    },
    green: {
      bg: "bg-green-50 group-hover:bg-green-100",
      icon: "bg-green-500 group-hover:bg-green-600",
      text: "text-green-700"
    },
    orange: {
      bg: "bg-orange-50 group-hover:bg-orange-100",
      icon: "bg-orange-500 group-hover:bg-orange-600",
      text: "text-orange-700"
    },
    red: {
      bg: "bg-red-50 group-hover:bg-red-100",
      icon: "bg-red-500 group-hover:bg-red-600",
      text: "text-red-700"
    }
  };

  return (
    <section id="programs" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Academic Programs
            <span className="block text-blue-600">That Shape the Future</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from over 150 undergraduate and graduate programs designed to prepare
            you for success in your chosen field and beyond.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className={`group ${colorClasses[program.color].bg} rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer`}>
              <div className={`w-16 h-16 ${colorClasses[program.color].icon} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

              <div className="flex items-center justify-between">
                <div className={`${colorClasses[program.color].text} font-semibold`}>
                  {program.students} students
                </div>
                <ArrowRight className={`w-5 h-5 ${colorClasses[program.color].text} group-hover:translate-x-1 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Explore our full catalog of programs and find the perfect fit for your interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule-tour">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-xl">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}