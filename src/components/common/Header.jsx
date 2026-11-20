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
  Search,
  ExternalLink
} from 'lucide-react';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [hospitalsDropdownOpen, setHospitalsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setHospitalsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Utility Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-sdaGreen-500"></span>
            <span>The Medical Trust of the Seventh-day Adventists (Reg. No. 515 of 1999)</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Southern Asia Division</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:+9104344263800" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Central Reception"
            >
              <Phone className="w-3.5 h-3.5 text-health-400" />
              <span>Reception: +91-04344-263800</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sdaAmber-500" />
              <span>Hosur HQ & Chennai</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'glass-header shadow-md py-2.5' 
          : 'bg-white/95 backdrop-blur-md shadow-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.jpeg" 
              alt="Adventist Health India Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="hidden lg:block border-l border-slate-200 pl-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-navy-900 leading-tight">
                The Medical Trust
              </span>
              <span className="block text-[10px] text-slate-500 tracking-tight leading-tight">
                Seventh-day Adventists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-7">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors hover:text-health-600 ${
                location.pathname === '/' ? 'text-health-700' : 'text-slate-700'
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-health-600 py-2"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-health-600' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a href="#about-trust" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                    <Building2 className="w-5 h-5 text-health-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-navy-900">Medical Trust History</div>
                      <div className="text-xs text-slate-500">Origin in 1863 & Battle Creek heritage</div>
                    </div>
                  </a>
                  <a href="#mission-vision" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                    <HeartHandshake className="w-5 h-5 text-sdaGreen-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-navy-900">Mission, Vision & Values</div>
                      <div className="text-xs text-slate-500">Christ-guided compassionate healing</div>
                    </div>
                  </a>
                  <a href="#ownership-management" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-sdaAmber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-navy-900">Ownership & Governance</div>
                      <div className="text-xs text-slate-500">Public Charitable Trust Reg. 515/1999</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Hospitals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setHospitalsDropdownOpen(true)}
              onMouseLeave={() => setHospitalsDropdownOpen(false)}
            >
              <a 
                href="#hospitals" 
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-health-600 py-2"
              >
                <span>Hospitals (10)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hospitalsDropdownOpen ? 'rotate-180 text-health-600' : ''}`} />
              </a>

              {hospitalsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                    Directly Operated Institutions
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs text-slate-700">
                    <a href="#hospital-aizawl" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Aizawl (Mizoram)</a>
                    <a href="#hospital-bangalore" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Bangalore (Karnataka)</a>
                    <a href="#hospital-hapur" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Hapur (UP)</a>
                    <a href="#hospital-pune" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Pune (Maharashtra)</a>
                    <a href="#hospital-jalandhar" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Jalandhar (Punjab)</a>
                    <a href="#hospital-ottapalam" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Ottapalam (Kerala)</a>
                    <a href="#hospital-shimla" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Shimla (HP)</a>
                    <a href="#hospital-thanjavur" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Thanjavur (TN)</a>
                    <a href="#hospital-jengjal" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Jengjal (Meghalaya)</a>
                    <a href="#hospital-falakata" className="p-1.5 rounded hover:bg-health-50 hover:text-health-700">Falakata (WB)</a>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <a href="#map-locations" className="text-xs text-health-600 font-semibold flex items-center justify-between px-2 hover:underline">
                      <span>View Interactive Map of India</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* College of Nursing Link (Kept Distinct) */}
            <a 
              href="#nursing-college" 
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-health-600 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-sdaGreen-600" />
              <span>College of Nursing</span>
              <span className="bg-sdaGreen-100 text-sdaGreen-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                Ottapalam
              </span>
            </a>

            <a href="#leadership" className="text-sm font-semibold text-slate-700 hover:text-health-600 transition-colors">
              Leadership
            </a>

            <a href="#news" className="text-sm font-semibold text-slate-700 hover:text-health-600 transition-colors">
              News & Stories
            </a>

            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-health-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Button 
              href="#hospitals" 
              variant="primary" 
              size="sm" 
              className="hidden sm:inline-flex"
            >
              Explore Hospitals
            </Button>

            <a 
              href="tel:+9104344263800"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
              title="Emergency helpline"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span>Helpdesk</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Navigation</div>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-navy-900 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#about-trust" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About the Medical Trust
            </a>
            <a 
              href="#mission-vision" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mission, Vision & Values
            </a>
            <a 
              href="#hospitals" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our 10 Hospitals Across India
            </a>
            <a 
              href="#nursing-college" 
              className="flex items-center justify-between px-3 py-2 rounded-lg text-base font-semibold text-sdaGreen-700 bg-sdaGreen-50 hover:bg-sdaGreen-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>College of Nursing (Ottapalam)</span>
              <GraduationCap className="w-4 h-4" />
            </a>
            <a 
              href="#map-locations" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Interactive Hospital Map
            </a>
            <a 
              href="#leadership" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership & Trust Management
            </a>
            <a 
              href="#news" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              News & Stories
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Offices
            </a>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Button href="#hospitals" variant="health" className="w-full justify-center">
                Explore All 10 Hospitals
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
