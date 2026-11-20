import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  HeartHandshake, 
  GraduationCap, 
  CheckCircle, 
  Sparkles,
  Award,
  Users2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function OurProfessionalsSection() {
  const pillars = [
    {
      title: "Christ-Centered Compassion",
      desc: "Inspired by the healing ministry of Jesus, our clinicians and nurses view patient care as a sacred calling of unreserved love without discrimination.",
      icon: HeartHandshake,
      badge: "Core Vocation"
    },
    {
      title: "Evidence-Based Medical Rigor",
      desc: "Modern diagnostic labs, surgical theatres, and evidence-guided treatments delivered in harmony with international healthcare best practices.",
      icon: Stethoscope,
      badge: "Clinical Standard"
    },
    {
      title: "Wholistic Lifestyle Medicine",
      desc: "True to the 1866 Battle Creek legacy, our medical teams address physical, psychological, nutritional, and spiritual facets of health.",
      icon: Award,
      badge: "Preventive Care"
    },
    {
      title: "Dedicated Nursing Care",
      desc: "Our nursing teams, many trained in our own nursing colleges, represent the gold standard of continuous, attentive patient bedside support.",
      icon: GraduationCap,
      badge: "Nursing Excellence"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Clinical Care & Ethics"
          badgeColor="health"
          title="Our Healthcare Professionals"
          subtitle="Committed physicians, surgeons, and nurses dedicating their skills to wholistic healing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-health-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-health-50 text-health-600 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Quote / Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 text-white p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sdaAmber-400">
              Inspired Healing Personnel
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              "Providing wholistic healthcare facility by committed and inspired personnel."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Across all 10 hospitals, our medical professionals uphold the highest standards of professional ethics and compassionate service.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              to="/hospitals" 
              className="px-6 py-3 rounded-xl bg-health-600 text-white font-semibold text-sm hover:bg-health-700 transition-colors shadow-md inline-block"
            >
              Consult Our Hospitals
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
