import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
      
      {/* Background High-Impact Healthcare Photography with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80" 
          alt="Adventist Healthcare Clinical Setting" 
          className="w-full h-full object-cover object-center opacity-25"
        />
        {/* Subtle Dark Navy Gradient for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Division & Trust Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-health-500/40 text-health-300 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sdaGreen-400 animate-ping" />
              <span>The Medical Trust of the Seventh-day Adventists (Adventist Health India)</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Compassionate healing, 12 communities, guided by faith.
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="text-xl sm:text-2xl font-light text-slate-200 leading-relaxed max-w-2xl">
              Where world-class medicine and spiritual care meet.
            </p>

            {/* Secondary Verified Narrative */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Operating 10 hospitals and 1 premier College of Nursing across India under the Southern Asia Division. Carrying forward over 160 years of wholistic health heritage founded in Battle Creek in 1866.
            </p>

            {/* Exact Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                to="/hospitals" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-health-600 text-white hover:bg-health-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore Our Hospitals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-navy-950 transition-all"
              >
                About Our Mission
              </Link>
            </div>

            {/* Bullet Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-navy-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sdaGreen-400 shrink-0" />
                <span>10 Specialized Hospitals</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sdaAmber-400 shrink-0" />
                <span>1 College of Nursing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-health-400 shrink-0" />
                <span>Public Charitable Trust</span>
              </div>
            </div>

          </div>

          {/* Right Floating Card with Official Logo & Trust Credential */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-2xl text-left space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2.5 bg-white rounded-xl shadow-md shrink-0">
                  <img 
                    src="/images/logo.jpeg" 
                    alt="Emblem" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">Southern Asia Division</h3>
                  <p className="text-xs text-slate-300">General Conference of SDA</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center justify-between p-2 rounded-lg bg-navy-950/40">
                  <span className="text-slate-400">Trust Reg:</span>
                  <span className="font-bold text-white">No. 515 of 1999</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-navy-950/40">
                  <span className="text-slate-400">Direct Hospitals:</span>
                  <span className="font-bold text-health-300">10 Institutions</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-navy-950/40">
                  <span className="text-slate-400">Nursing Education:</span>
                  <span className="font-bold text-sdaGreen-300">Ottapalam, Kerala</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-navy-950/40">
                  <span className="text-slate-400">Reception Line:</span>
                  <a href="tel:+9104344263800" className="font-bold text-sdaAmber-300 hover:underline">
                    +91-04344-263800
                  </a>
                </div>
              </div>

              <Link
                to="/hospitals"
                className="block text-center w-full py-2.5 rounded-lg text-xs font-bold bg-white text-navy-950 hover:bg-slate-100 transition-colors"
              >
                Find Nearest Hospital →
              </Link>

            </div>
          </div>

        </div>

        {/* 4 STATISTIC HIGHLIGHTS BAR (Sterling Inspired Horizontal Metric Bar) */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-health-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4" />
              <span>Network Hospitals</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">10</div>
            <div className="text-xs text-slate-300 mt-1">Medical Trust Hospitals across India</div>
          </div>

          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sdaGreen-400 text-xs font-bold uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Nursing College</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">1</div>
            <div className="text-xs text-slate-300 mt-1">College of Nursing in Ottapalam</div>
          </div>

          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sdaAmber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Trust Registration</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">1999</div>
            <div className="text-xs text-slate-300 mt-1">Public Charitable Trust Reg. 515/1999</div>
          </div>

          <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-health-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Heart className="w-4 h-4" />
              <span>Global Church Roots</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">1863</div>
            <div className="text-xs text-slate-300 mt-1">Battle Creek Health Work (1866)</div>
          </div>

        </div>

      </div>

    </section>
  );
}
