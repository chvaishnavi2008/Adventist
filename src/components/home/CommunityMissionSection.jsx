import React from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';

export default function CommunityMissionSection() {
  const outreachHighlights = [
    {
      title: "Frontier & Tribal Healthcare",
      location: "Jengjal (Meghalaya) & Falakata (West Bengal)",
      desc: "Delivering modern surgical and trauma interventions in remote forest and tea garden corridors where access to emergency medicine was historically scarce.",
      stat: "Remote Reach"
    },
    {
      title: "Community Ophthalmology & Surgery",
      location: "Ruby Nelson Memorial Hospital (Jalandhar)",
      desc: "Restoring sight to thousands of underprivileged rural citizens through charitable cataract surgeries and regular diagnostic camps across Punjab.",
      stat: "Sight Restoration"
    },
    {
      title: "Maternal & Child Health Mission",
      location: "Mattison Memorial (Hapur) & SDA Hospital (Thanjavur)",
      desc: "Ensuring safe institutional deliveries, newborn intensive care, and nutritional counsel for semi-urban and agrarian families.",
      stat: "Maternal Care"
    },
    {
      title: "Lifestyle Education & Health Seminars",
      location: "Bangalore & Pune Adventist Hospitals",
      desc: "Promoting disease prevention through scientifically backed health workshops, plant-based nutrition, exercise, and stress mitigation.",
      stat: "Preventive Living"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Mission & Social Impact"
          badgeColor="green"
          title="Bridging Healthcare Gaps in Remote Communities"
          subtitle="Honoring our century-long mission: reaching vulnerable populations by overcoming geographical and financial barriers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-5 text-slate-600 text-sm leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdaGreen-50 text-sdaGreen-700 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-sdaGreen-600" />
              <span>Compassionate Outreach Tradition</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
              "Overcoming financial constraints to serve remote locations."
            </h3>

            <p>
              In the early 1900s, pioneer Adventist missionary doctors walked into the deepest frontiers of the subcontinent. They brought not just medicine, but an unyielding dedication to treat every patient as a sacred creation of God.
            </p>

            <p>
              Today, that calling remains vivid. From the mountainous terrain of Aizawl and Shimla to the tea estates of Falakata and the Garo Hills of Meghalaya, our hospitals function as beacons of hope, offering subsidised care, mobile health camps, and emergency interventions.
            </p>

            <div className="pt-2">
              <Button href="#contact" variant="primary" size="md">
                Partner With Our Community Mission
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outreachHighlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sdaGreen-400 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sdaGreen-100 text-sdaGreen-800 mb-2 inline-block">
                  {item.stat}
                </span>
                <h4 className="text-base font-bold text-navy-900 mb-1">
                  {item.title}
                </h4>
                <div className="text-xs font-semibold text-health-700 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
