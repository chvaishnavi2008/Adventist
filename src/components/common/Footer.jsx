import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-health-600">
      
      {/* Upper Footer: Brand Overview & Trust Badges */}
      <div className="border-b border-navy-800 bg-navy-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white rounded-xl shadow-md shrink-0">
              <img 
                src="/images/logo.jpeg" 
                alt="Adventist Health India" 
                className="h-11 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-base sm:text-lg font-bold">
                The Medical Trust of the Seventh-day Adventists
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Adventist Health India • Public Charitable Trust Reg. No. 515 of 1999
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-slate-300">
              ⛪ Worldwide SDA Church Affiliate
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-slate-300">
              🏥 10 Hospitals in India
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-slate-300">
              🎓 1 College of Nursing
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto py-12 lg:py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
        
        {/* Col 1: About the Trust */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider">
            Wholistic Health Heritage
          </h4>
          <p className="text-slate-400 leading-relaxed text-xs">
            The Medical Trust of the Seventh-day Adventists is an affiliate of the worldwide Seventh-day Adventist Church, carrying forward the compassionate healing ministry inspired by Jesus Christ and pioneering medical workers since 1866.
          </p>

          <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-sdaAmber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Statutory Governance</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division, through The Medical Trust of the Seventh-day Adventists (Registration No. 515 of 1999).
            </p>
          </div>
        </div>

        {/* Col 2: The 10 Hospitals (Direct Links) */}
        <div className="space-y-3">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-health-400" />
            <span>Our 10 Hospitals</span>
          </h4>
          <ul className="space-y-1.5">
            {MEDICAL_TRUST_HOSPITALS.map((hospital) => (
              <li key={hospital.id}>
                <Link 
                  to={`/hospitals/${hospital.id}`}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group truncate"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-health-400 shrink-0" />
                  <span className="truncate">{hospital.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: College of Nursing & Navigation */}
        <div className="space-y-4">
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-4 h-4 text-sdaGreen-400" />
              <span>Nursing College</span>
            </h4>
            <div className="p-3 rounded-xl bg-navy-900 border border-sdaGreen-900/50">
              <Link 
                to="/nursing-college" 
                className="font-bold text-sdaGreen-300 hover:underline block leading-tight"
              >
                {NURSING_COLLEGE.name}
              </Link>
              <span className="text-[11px] text-slate-400 block mt-1">
                Ottapalam, Kerala • INC & KNMC Approved
              </span>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Site Navigation
            </h4>
            <ul className="space-y-1.5">
              <li><Link to="/" className="text-slate-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white">About the Medical Trust</Link></li>
              <li><Link to="/hospitals" className="text-slate-400 hover:text-white">Hospital Directory</Link></li>
              <li><Link to="/community" className="text-slate-400 hover:text-white">Community & Mission</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white">Careers & Nursing Education</Link></li>
              <li><Link to="/news" className="text-slate-400 hover:text-white">News & Mission Stories</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white">Contact Offices</Link></li>
            </ul>
          </div>
        </div>

        {/* Col 4: Trust Offices & Contact */}
        <div className="space-y-3">
          <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sdaAmber-400" />
            <span>Trust Offices</span>
          </h4>
          
          <div className="space-y-3 text-slate-400">
            <div>
              <strong className="text-slate-200 block mb-0.5">Administrative Office:</strong>
              Southern Asia Division of SDA<br />
              Jeevan Jyothi Campus, HCF,<br />
              Hosur – 635110, Tamil Nadu
            </div>
            
            <div className="pt-2 border-t border-navy-800">
              <strong className="text-slate-200 block mb-0.5">Registered Office:</strong>
              AA148, 3rd Avenue, Annanagar,<br />
              Chennai – 600040, Tamil Nadu
            </div>

            <div className="pt-2 border-t border-navy-800">
              <a 
                href="tel:+9104344263800" 
                className="flex items-start gap-1.5 text-slate-200 hover:text-health-400 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-health-400 mt-0.5 shrink-0" />
                <span>+91-04344-263800 (Ext. 861, 865)</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-Footer: Legal & Credits */}
      <div className="border-t border-navy-900 bg-navy-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} The Medical Trust of the Seventh-day Adventists. All rights reserved. Registered Public Charitable Trust No. 515 of 1999.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Guided by <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Faith & Wholistic Care
            </span>
            <span className="text-slate-700">|</span>
            <Link to="/about#governance" className="hover:text-slate-300 transition-colors">
              Trust Governance
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
