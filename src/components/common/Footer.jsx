import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { TRUST_DETAILS } from '../../data/teamData';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-health-600">
      
      {/* Upper Footer: Brand Promise & Quick Trust Credential */}
      <div className="border-b border-navy-800 bg-navy-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-xl shadow">
              <img 
                src="/images/logo.jpeg" 
                alt="Adventist Health India" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">
                The Medical Trust of the Seventh-day Adventists
              </h3>
              <p className="text-sm text-slate-400">
                Adventist Health India | Public Charitable Trust Reg. No. 515 of 1999
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-slate-300">
              ⛪ Worldwide SDA Church Affiliate
            </span>
            <span className="px-3 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-slate-300">
              🏥 10 Hospitals in India
            </span>
            <span className="px-3 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-slate-300">
              🎓 1 College of Nursing
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Organization & Identity */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-white text-base font-bold tracking-wide">
            Wholistic Healthcare Heritage
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            The Medical Trust of the Seventh-day Adventists is an affiliate of the worldwide Church of Seventh-day Adventists, carrying forward the compassionate healing ministry inspired by Jesus Christ and pioneering medical pioneers since 1866.
          </p>
          <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-sdaAmber-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Governance & Authority</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division, through its legally constituted agency, The Medical Trust.
            </p>
          </div>
        </div>

        {/* Column 2: The 10 Hospitals */}
        <div className="space-y-3">
          <h4 className="text-white text-sm font-bold tracking-wider uppercase flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-health-400" />
            <span>Our 10 Hospitals</span>
          </h4>
          <ul className="space-y-1.5 text-xs">
            {MEDICAL_TRUST_HOSPITALS.map((hospital) => (
              <li key={hospital.id}>
                <a 
                  href={`#${hospital.id}`} 
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-health-400 transition-colors" />
                  <span>{hospital.name}</span>
                  <span className="text-slate-600">({hospital.city})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: College of Nursing & Quick Links */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sdaGreen-400" />
              <span>Nursing College</span>
            </h4>
            <div className="p-3 rounded-lg bg-navy-900/70 border border-sdaGreen-900/50">
              <a 
                href="#nursing-college" 
                className="text-xs font-semibold text-sdaGreen-300 hover:underline block"
              >
                {NURSING_COLLEGE.name}
              </a>
              <span className="text-[11px] text-slate-400 block mt-1">
                Ottapalam, Kerala | Recognized by INC & KNMC
              </span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase text-slate-400">
              Core Sections
            </h4>
            <ul className="space-y-1 text-xs">
              <li><a href="#about-trust" className="text-slate-400 hover:text-white transition-colors">Our History & 1863 Origins</a></li>
              <li><a href="#mission-vision" className="text-slate-400 hover:text-white transition-colors">Mission, Vision & 5 Values</a></li>
              <li><a href="#map-locations" className="text-slate-400 hover:text-white transition-colors">India Hospital Location Map</a></li>
              <li><a href="#leadership" className="text-slate-400 hover:text-white transition-colors">Leadership & Management Team</a></li>
              <li><a href="#news" className="text-slate-400 hover:text-white transition-colors">News & Mission Stories</a></li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact & Offices */}
        <div className="space-y-3">
          <h4 className="text-white text-sm font-bold tracking-wider uppercase flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sdaAmber-400" />
            <span>Trust Offices</span>
          </h4>
          
          <div className="text-xs space-y-2 text-slate-400">
            <div>
              <strong className="text-slate-200 block">Administrative Office:</strong>
              Southern Asia Division of SDA<br />
              Jeevan Jyothi Campus, HCF,<br />
              Hosur – 635110, Tamil Nadu
            </div>
            
            <div className="pt-2 border-t border-navy-800">
              <strong className="text-slate-200 block">Registered Office:</strong>
              AA148, 3rd Avenue, Annanagar,<br />
              Chennai – 600 040, Tamil Nadu
            </div>

            <div className="pt-2 border-t border-navy-800 flex items-start gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-health-400 mt-0.5 shrink-0" />
              <span>+91-04344-263800 (Ext. 861, 865)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer: Legal & Credits */}
      <div className="border-t border-navy-900 bg-navy-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} The Medical Trust of the Seventh-day Adventists. All rights reserved. Registered Public Charitable Trust No. 515 of 1999.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Guided by <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> Faith & Wholistic Healing
            </span>
            <span className="text-slate-700">|</span>
            <a href="#ownership-management" className="hover:text-slate-300 transition-colors">
              Trust Governance
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
