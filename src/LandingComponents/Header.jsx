import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '../UI/button';
import { Link } from 'react-router-dom';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
      : 'bg-gradient-to-r from-blue-900/95 to-blue-700/95 backdrop-blur-md'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
              ? 'bg-gradient-to-br from-blue-600 to-blue-800'
              : 'bg-white/10 backdrop-blur-sm'
              }`}>
              <GraduationCap className={`w-6 h-6 lg:w-7 lg:h-7 ${isScrolled ? 'text-white' : 'text-white'
                }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                University
              </span>
              <span className={`text-xs font-medium transition-colors duration-300 ${isScrolled ? 'text-blue-600' : 'text-blue-200'
                }`}>
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <a
              href="#about"
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              About
            </a>
            <a
              href="#programs"
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Programs
            </a>
            <a
              href="#campus"
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Campus Life
            </a>
            <a
              href="#admissions"
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Admissions
            </a>
            <a
              href="#contact"
              className={`font-medium transition-all duration-300 hover:scale-105 ${isScrolled
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white'
                }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className={`transition-all duration-300 hover:scale-105  ${isScrolled
                  ? 'border-blue-200 text-white-700 hover:bg-black-50'
                  : 'border-white/30 text-black hover:bg-black/10 '
                  }`}
              >
                Login
              </Button>
            </Link>
            <Link to="signup">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 lg:px-8 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${isScrolled
              ? 'hover:bg-gray-100 text-gray-700'
              : 'hover:bg-white/10 text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 border-t transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-xl'
            : 'bg-gradient-to-b from-blue-900/95 to-blue-700/95 backdrop-blur-md border-white/10'
            }`}>
            <div className="px-4 py-6 space-y-4">
              <a
                href="#about"
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#campus"
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Campus Life
              </a>
              <a
                href="#admissions"
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </a>
              <a
                href="#contact"
                className={`block font-medium py-3 px-4 rounded-lg transition-all duration-200 ${isScrolled
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              <div className="pt-4 space-y-3 border-t border-gray-200/50">
                <Link to="/login">
                  <Button
                    variant="outline"
                    className={`w-full transition-all duration-300 ${isScrolled
                      ? 'border-blue-200 text-blue-700 hover:bg-blue-50'
                      : 'border-white/30 text-white hover:bg-white/10'
                      }`}
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/singup">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300 hover:scale-105">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}