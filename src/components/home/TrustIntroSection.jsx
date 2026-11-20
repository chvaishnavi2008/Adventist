import React from 'react';
import { 
  History, 
  Heart, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  Globe2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

export default function TrustIntroSection() {
  return (
    <section id="about-trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Our Heritage & Legacy"
          badgeColor="health"
          title="Rooted in Faith, Pioneering Wholistic Medicine"
          subtitle="From Battle Creek in 1866 to 10 hospitals and 1 nursing college across India today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group">
              <img 
                src="/images/legacy-history.jpeg" 
                alt="Seventh-day Adventist Health Legacy & Founders" 
                className="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-sdaAmber-400 font-bold">1866 Battle Creek Foundation</span>
                  <p className="text-white text-sm font-semibold mt-1">
                    James & Ellen White's vision: treating disease and teaching prevention through wholistic lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Trust Highlight Box */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
              <div className="p-3 bg-health-50 rounded-xl text-health-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-900">Registration No. 515 of 1999</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  The Medical Trust is a legally constituted public charitable trust owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative from Reference Source */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed">
            
            <p>
              <strong className="text-navy-900 font-semibold">The Medical Trust of the Seventh-day Adventists (Adventist Health India)</strong> is an affiliate of the worldwide Seventh-day Adventist Church, which operates more than 700 healthcare institutions globally.
            </p>

            <p>
              The Seventh-day Adventist Church was organized formally in <span className="font-semibold text-navy-900">1863</span>. One of the church's leading founders, <span className="font-semibold text-navy-900">Mrs. Ellen G. White</span>, recognized the profound relationship of physical wellbeing with emotional and spiritual wellbeing. In <span className="font-semibold text-navy-900">1866</span>, under the direction of James and Ellen White, they established a pioneering healthcare center in Battle Creek, Michigan, USA.
            </p>

            <div className="p-4 rounded-xl bg-health-50/70 border-l-4 border-health-600 text-sm text-navy-950 italic">
              "It was one institution that not only treated disease but also taught people how to prevent disease through good nutrition, exercise, and sanitation. It was a place where each person was valued as a creation of God."
            </div>

            <p>
              Within years, under the visionary leadership of <span className="font-semibold text-navy-900">Dr. John Harvey Kellogg</span>, the institution gained international renown. Soon, medical missionary work spread around the world, arriving in India in the early part of the 1900s when missionary doctors established health centres in remote and underserved frontiers.
            </p>

            <p>
              Over the decades, these institutions have stood firm, overcoming financial constraints to provide compassionate, high-quality healthcare. Today, the Southern Asia Division of SDA operates 13 hospitals across the country through two managing trusts: <span className="font-semibold text-navy-900">METAS</span> and <span className="font-semibold text-navy-900">The Medical Trust of the Seventh-day Adventists</span>.
            </p>

            {/* Direct Trust Breakdown */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button href="#hospitals" variant="primary" size="md">
                View 10 Medical Trust Hospitals
              </Button>
              <Button href="#nursing-college" variant="outline-health" size="md">
                College of Nursing (Ottapalam)
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
