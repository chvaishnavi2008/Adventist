import React from 'react';
import { 
  Heart, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Compass, 
  Target,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { CORE_VALUES } from '../../data/teamData';

const VALUE_ICONS = {
  Heart,
  Award,
  ShieldCheck,
  CheckCircle2,
  Scale
};

export default function MissionVisionValuesSection() {
  return (
    <section id="mission-vision" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Guiding Principles"
          badgeColor="green"
          title="Mission, Vision & Core Values"
          subtitle="Our foundational commitments guiding every clinical consultation, procedure, and community outreach."
        />

        {/* Vision & Mission Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col justify-between border border-navy-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-health-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health-500/20 text-health-300 text-xs font-bold uppercase tracking-wider mb-6 border border-health-500/30">
                <Compass className="w-3.5 h-3.5 text-health-400" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Inspiring Healthier Lives
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed font-light italic">
                "Our vision is to be a leading provider of quality healthcare with a commitment to educate the masses in healthy living."
              </p>
            </div>
            <div className="pt-8 border-t border-navy-800 mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-sdaAmber-400" />
              <span>Preventive Lifestyle Medicine • Health Education for Communities</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-health-900 to-navy-900 text-white p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col justify-between border border-health-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sdaGreen-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdaGreen-500/20 text-sdaGreen-300 text-xs font-bold uppercase tracking-wider mb-6 border border-sdaGreen-500/30">
                <Target className="w-3.5 h-3.5 text-sdaGreen-400" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Wholistic Healthcare Across India
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed font-light italic">
                "The Mission of the Medical Trust of Seventh Day Adventists is, to establish, operate and support institutions across the country in providing wholistic healthcare facility by committed and inspired personnel."
              </p>
            </div>
            <div className="pt-8 border-t border-health-800 mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-sdaGreen-400" />
              <span>10 Hospitals • 1 Nursing College • Committed Personnel</span>
            </div>
          </div>

        </div>

        {/* 5 Core Values with Authentic Illustration */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual: Official Document Painting */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-sm w-full">
                <img 
                  src="/images/values-compassion.jpeg" 
                  alt="Christ the Compassionate Healer - Core Inspiration" 
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-4 bg-navy-950 text-white text-center">
                  <h4 className="text-sm font-bold tracking-wide">Spirit of Jesus</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Compassionate healer without discrimination
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The 5 Values */}
            <div className="lg:col-span-8 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-health-600">The 5 Pillars</span>
                <h3 className="text-2xl font-bold text-navy-900 mt-1">Our Core Organizational Values</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_VALUES.map((val) => {
                  const Icon = VALUE_ICONS[val.iconName] || Heart;
                  return (
                    <div 
                      key={val.id} 
                      className={`p-5 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                        val.id === 'spirit-of-jesus' 
                          ? 'sm:col-span-2 bg-gradient-to-r from-health-50/70 to-sdaGreen-50/50 border-health-200' 
                          : 'bg-white border-slate-200 hover:border-health-300'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl shrink-0 ${
                          val.id === 'spirit-of-jesus' 
                            ? 'bg-health-600 text-white shadow-sm' 
                            : 'bg-slate-100 text-navy-900'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-navy-900">{val.title}</h4>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {val.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                            {val.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
