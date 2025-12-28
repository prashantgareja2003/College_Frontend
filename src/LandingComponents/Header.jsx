import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronRight, UserCircle } from 'lucide-react';
import { Button } from '../UI/button';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger logic slightly earlier for smoother transition
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center group space-x-3">
            <div className={`p-2 rounded-xl transition-all duration-500 shadow-lg ${
              isScrolled 
                ? 'bg-blue-600 shadow-blue-200' 
                : 'bg-white shadow-none'
            }`}>
              <GraduationCap className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-blue-600'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-slate-800' // Darker text for readability
              }`}>
                University
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-500'
              }`}>
                Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                      isScrolled 
                        ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-slate-700 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <button className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl ${
                isScrolled 
                  ? 'text-slate-700 hover:bg-slate-100' 
                  : 'text-slate-700 hover:bg-white/60'
              }`}>
                <UserCircle size={18} />
                Portal Login
              </button>
            </Link>
            
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2.5 font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 active:scale-95">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all ${
              isScrolled ? 'bg-slate-100 text-slate-800' : 'bg-white/80 text-slate-800 shadow-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Improved) */}
      <div className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute right-0 w-3/4 h-full bg-white shadow-2xl p-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl text-slate-700 font-bold hover:bg-blue-50 transition-all"
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-400" />
              </a>
            ))}
            <div className="pt-6 border-t border-slate-100 space-y-4">
               <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                 <Button variant="outline" className="w-full rounded-xl py-6 border-slate-200 text-slate-700 font-bold">
                    Login to Portal
                 </Button>
               </Link>
               <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                 <Button className="w-full rounded-xl py-6 bg-blue-600 text-white font-bold">
                    Apply Now
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}