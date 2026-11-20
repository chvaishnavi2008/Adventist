import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  MapPin, 
  Users, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

export default function CommunityPage() {
  const missionCentres = [
    {
      title: "Frontier Tribal Healthcare in Garo Hills",
      facility: "Adventist Mission Hospital, Jengjal",
      region: "Meghalaya (Northeast India)",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80",
      description: "Delivering modern surgical care, trauma interventions, and maternal care to indigenous Garo tribal hamlets where emergency medical access previously required arduous travel through forest corridors."
    },
    {
      title: "Tea Garden Corridor Medical Camps",
      facility: "GATE Adventist Mission Hospital, Falakata",
      region: "West Bengal (Dooars Region)",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      description: "Serving tea garden worker families and agrarian populations across the Alipurduar corridor with affordable clinical consultations, malaria screenings, maternity aid, and subsidized medicines."
    },
    {
      title: "Rural Punjab Sight Restoration Camps",
      facility: "Ruby Nelson Memorial Hospital, Jalandhar",
      region: "Punjab (North India)",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      description: "Carrying forward a legendary heritage of community ophthalmology, conducting regular diagnostic camps and micro-cataract surgeries for underprivileged rural seniors across agrarian Punjab."
    },
    {
      title: "Himalayan Hill Community Healthcare",
      facility: "Simla Sanitarium & Hospital, Shimla",
      region: "Himachal Pradesh (Himalayas)",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",
      description: "Offering mountain medical relief, respiratory wellness programs, and clinical consultations to residents across the high-altitude terrain of Himachal Pradesh."
    },
    {
      title: "Healthcare in the Hills of Mizoram",
      facility: "Aizawl Adventist Hospital, Aizawl",
      region: "Mizoram (Northeast India)",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
      description: "Dedicated maternal and child health screenings, general surgical services, and emergency responses for communities situated in the remote mountain ranges of Mizoram."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-sdaGreen-400 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Community & Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Community Healthcare Outreach & Mission
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Honoring our century-old missionary tradition: bridging healthcare disparities in remote, rural, and mountainous frontiers across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Narrative */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sdaGreen-700 bg-sdaGreen-50 px-3 py-1 rounded-full border border-sdaGreen-200">
              Frontier Healing Tradition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              "Overcoming financial constraints to serve remote locations."
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When missionary doctors arrived in India in the early part of the 1900s, they sought out the most remote and underserved regions. Rather than clustering only in major commercial metropolises, Adventist health pioneers built dispensaries and clinics in hills, agrarian villages, and tribal frontiers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Today, that commitment is carried forward by The Medical Trust of the Seventh-day Adventists. In every state where we operate, our medical staff partner with local communities to provide compassionate healthcare without discrimination.
            </p>
          </div>
        </div>

        {/* 5 Verified Outreach Centres Grid */}
        <div className="space-y-8">
          <SectionHeader
            badge="Frontier Impact"
            badgeColor="green"
            title="Active Community Outreach Centres"
            subtitle="Explore how our hospitals serve vulnerable populations across distinct regional geographies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCentres.map((centre, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-sdaGreen-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img 
                      src={centre.image} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {centre.region}
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <span className="text-[11px] font-bold text-sdaGreen-700 block">
                      {centre.facility}
                    </span>
                    <h3 className="text-base font-bold text-navy-900 group-hover:text-health-700 transition-colors">
                      {centre.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {centre.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100">
                  <div className="pt-3">
                    <Link
                      to="/hospitals"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-health-700"
                    >
                      <span>Explore Network Facilities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
