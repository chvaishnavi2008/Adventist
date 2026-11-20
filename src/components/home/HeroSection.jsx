import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Subtle Geometric / Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-health-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sdaAmber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Identifier Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-health-500/30 text-health-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sdaGreen-400 animate-ping" />
              <span>Adventist Health India • The Medical Trust of the Seventh-day Adventists</span>
            </div>

            {/* Exact Required Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Compassionate healing, 12 communities, guided by faith.
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="text-xl sm:text-2xl font-light text-slate-200 leading-relaxed max-w-2xl">
              Where world-class medicine and spiritual care meet.
            </p>

            {/* Secondary Descriptive Paragraph based on Source Truth */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Carrying forward more than 160 years of wholistic health heritage. The Medical Trust operates 10 hospitals and 1 premier College of Nursing across India, providing healing for body, mind, and spirit.
            </p>

            {/* Exact Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button 
                href="#hospitals" 
                variant="health" 
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Our Hospitals
              </Button>

              <Button 
                href="#about-trust" 
                variant="outline-white" 
                size="lg"
              >
                About Our Mission
              </Button>
            </div>

            {/* Trust Bullet Highlights */}
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

          {/* Right Visual / Highlights Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-navy-800/90 to-navy-900/95 p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-md">
              
              {/* Header Badge in Card */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-xl shadow-md">
                    <img 
                      src="/images/logo.jpeg" 
                      alt="Logo Emblem" 
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold">Southern Asia Division</h3>
                    <p className="text-xs text-slate-400">General Conference of SDA</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-health-500/20 text-health-300 text-xs font-semibold border border-health-500/30">
                  Reg. 515/1999
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="p-4 rounded-xl bg-navy-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-health-400 text-xs font-semibold mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Hospitals</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">10</div>
                  <div className="text-[11px] text-slate-400 mt-1">Across 8 Indian States</div>
                </div>

                <div className="p-4 rounded-xl bg-navy-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-sdaGreen-400 text-xs font-semibold mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Nursing College</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">1</div>
                  <div className="text-[11px] text-slate-400 mt-1">Ottapalam, Kerala</div>
                </div>

                <div className="p-4 rounded-xl bg-navy-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-sdaAmber-400 text-xs font-semibold mb-1">
                    <Heart className="w-4 h-4" />
                    <span>Faith Roots</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">1863</div>
                  <div className="text-[11px] text-slate-400 mt-1">Battle Creek 1866</div>
                </div>

                <div className="p-4 rounded-xl bg-navy-950/60 border border-white/5">
                  <div className="flex items-center gap-2 text-health-300 text-xs font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Global Network</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white">700+</div>
                  <div className="text-[11px] text-slate-400 mt-1">Institutions Worldwide</div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sdaAmber-400" />
                  <span>North, South, East & Northeast</span>
                </span>
                <a 
                  href="#map-locations" 
                  className="text-health-300 hover:text-white font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Explore Map</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
