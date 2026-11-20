import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hospitalsDropdownOpen, setHospitalsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setHospitalsDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      
      {/* LEVEL 1: Top Information Bar (Sterling Hospitals Inspired) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Left: Organization & Locations */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-sdaGreen-500 animate-pulse" />
              The Medical Trust of the Seventh-day Adventists
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-sdaAmber-400" />
              <span>Admin: Hosur</span>
              <span className="text-slate-600">•</span>
              <span>Reg: Chennai</span>
            </span>
          </div>

          {/* Right: Verified Reception Phone & Division Affiliation */}
          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <a 
              href="tel:+9104344263800" 
              className="flex items-center gap-1.5 font-bold text-health-400 hover:text-white transition-colors"
              title="Central Reception Phone"
            >
              <Phone className="w-3.5 h-3.5 text-health-400" />
              <span>Reception: +91-04344-263800</span>
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-400 text-[11px]">
              Southern Asia Division of SDA
            </span>
          </div>

        </div>
      </div>

      {/* LEVEL 2: Main Navigation Bar */}
      <nav className={`w-full transition-all duration-200 ${
        scrolled 
          ? 'bg-white shadow-md py-2.5' 
          : 'bg-white shadow-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo & Brand Header */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/images/logo.jpeg" 
              alt="Adventist Health India Logo" 
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
            <div className="border-l border-slate-200 pl-3 hidden sm:block">
              <span className="block text-xs font-extrabold uppercase tracking-wider text-navy-900 leading-tight">
                Adventist Health India
              </span>
              <span className="block text-[10px] text-slate-500 tracking-tight leading-tight">
                The Medical Trust • Reg. 515 of 1999
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6">
            
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                isActive('/') ? 'text-health-700 font-bold' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link 
                to="/about"
                className={`flex items-center gap-1 text-sm font-semibold hover:text-health-600 py-2 ${
                  isActive('/about') ? 'text-health-700 font-bold' : 'text-slate-700'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180 text-health-600' : ''}`} />
              </Link>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1 animate-in fade-in duration-150">
                  <Link 
                    to="/about#history" 
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-health-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-navy-900">History & Heritage</div>
                      <div className="text-[11px] text-slate-500">1863 Origins & Battle Creek roots</div>
                    </div>
                  </Link>
                  <Link 
                    to="/about#mission-values" 
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <HeartHandshake className="w-4 h-4 text-sdaGreen-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-navy-900">Mission, Vision & Values</div>
                      <div className="text-[11px] text-slate-500">Christ the Healer guidance</div>
                    </div>
                  </Link>
                  <Link 
                    to="/about#leadership" 
                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-sdaAmber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-navy-900">Leadership & Governance</div>
                      <div className="text-[11px] text-slate-500">Trust administration & officers</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Our Hospitals Dropdown (All 10 Hospitals) */}
            <div 
              className="relative"
              onMouseEnter={() => setHospitalsDropdownOpen(true)}
              onMouseLeave={() => setHospitalsDropdownOpen(false)}
            >
              <Link 
                to="/hospitals"
                className={`flex items-center gap-1 text-sm font-semibold hover:text-health-600 py-2 ${
                  isActive('/hospitals') ? 'text-health-700 font-bold' : 'text-slate-700'
                }`}
              >
                <span>Our Hospitals</span>
                <span className="bg-health-50 text-health-700 text-[10px] font-bold px-1.5 py-0.2 rounded-full border border-health-200">
                  10
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${hospitalsDropdownOpen ? 'rotate-180 text-health-600' : ''}`} />
              </Link>

              {hospitalsDropdownOpen && (
                <div className="absolute top-full left-0 w-[540px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      The 10 Medical Trust Hospitals
                    </span>
                    <Link to="/hospitals" className="text-xs font-bold text-health-600 hover:underline flex items-center gap-1">
                      <span>View All Hospitals</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {MEDICAL_TRUST_HOSPITALS.map((hospital, idx) => (
                      <Link 
                        key={hospital.id}
                        to={`/hospitals/${hospital.id}`}
                        className="p-2 rounded-lg hover:bg-slate-50 hover:text-health-700 transition-colors flex items-center justify-between group"
                      >
                        <span className="font-semibold text-slate-800 group-hover:text-health-700 truncate pr-2">
                          {idx + 1}. {hospital.name}
                        </span>
                        <span className="text-[10px] text-slate-400 group-hover:text-slate-600 shrink-0">
                          {hospital.city}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-4 -mb-4 p-3 rounded-b-2xl">
                    <div className="flex items-center gap-2 text-[11px] text-slate-600">
                      <GraduationCap className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                      <span><strong>College of Nursing:</strong> Ottapalam, Kerala</span>
                    </div>
                    <Link to="/nursing-college" className="text-xs font-bold text-sdaGreen-700 hover:underline">
                      View College →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/community" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                isActive('/community') ? 'text-health-700 font-bold' : 'text-slate-700'
              }`}
            >
              Community & Mission
            </Link>

            <Link 
              to="/careers" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                isActive('/careers') ? 'text-health-700 font-bold' : 'text-slate-700'
              }`}
            >
              Careers & Education
            </Link>

            <Link 
              to="/news" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                isActive('/news') ? 'text-health-700 font-bold' : 'text-slate-700'
              }`}
            >
              News & Stories
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                isActive('/contact') ? 'text-health-700 font-bold' : 'text-slate-700'
              }`}
            >
              Contact Us
            </Link>

          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Prominent Contact Us Button (Sterling Hospitals Style) */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-navy-900 text-white hover:bg-navy-800 transition-all shadow-sm hover:shadow"
            >
              Contact Us
            </Link>

            {/* Emergency Hotline Trigger */}
            <a 
              href="tel:+9104344263800"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
              title="Call Reception Helpdesk"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span>Helpdesk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-150 shadow-2xl max-h-[85vh] overflow-y-auto">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-lg text-sm font-bold text-navy-900 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              About the Medical Trust
            </Link>
            
            {/* Hospitals Collapsible in Mobile */}
            <div className="pt-1">
              <Link
                to="/hospitals"
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-health-800 bg-health-50"
              >
                <span>Our 10 Hospitals Across India</span>
                <span className="text-xs font-bold bg-white px-2 py-0.5 rounded-full border border-health-200">
                  10
                </span>
              </Link>
              <div className="pl-4 pr-2 py-2 space-y-1">
                {MEDICAL_TRUST_HOSPITALS.map((h) => (
                  <Link
                    key={h.id}
                    to={`/hospitals/${h.id}`}
                    className="block py-1 text-xs text-slate-600 hover:text-navy-900"
                  >
                    • {h.name} ({h.city})
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/nursing-college" 
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-sdaGreen-800 bg-sdaGreen-50 hover:bg-sdaGreen-100"
            >
              <span>College of Nursing, Ottapalam</span>
              <GraduationCap className="w-4 h-4 text-sdaGreen-700" />
            </Link>

            <Link 
              to="/community" 
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Community & Mission
            </Link>

            <Link 
              to="/careers" 
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Careers & Education
            </Link>

            <Link 
              to="/news" 
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              News & Stories
            </Link>

            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Contact Offices
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/hospitals"
                className="block text-center w-full py-2.5 rounded-lg text-xs font-bold bg-health-600 text-white"
              >
                Browse All Hospitals
              </Link>
              <div className="text-center text-[11px] text-slate-500 pt-1">
                Reception: +91-04344-263800
              </div>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
