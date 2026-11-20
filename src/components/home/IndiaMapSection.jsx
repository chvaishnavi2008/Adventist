import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Building2, 
  GraduationCap, 
  ExternalLink, 
  Phone, 
  Navigation,
  ArrowRight, 
  Info,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function IndiaMapSection() {
  const [activeFacility, setActiveFacility] = useState(MEDICAL_TRUST_HOSPITALS[1]); // Bangalore default

  const allMapItems = [
    ...MEDICAL_TRUST_HOSPITALS,
    { ...NURSING_COLLEGE, isNursing: true }
  ];

  return (
    <section id="map-locations" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="National Healthcare Presence"
          badgeColor="amber"
          title="Interactive India Hospital Location Map"
          subtitle="Click on any pin or hospital in the directory to explore our network across North, South, East, and Northeast India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Interactive Visual Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-health-600"></span>
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  India Geographical Network
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-health-600 inline-block" /> 10 Hospitals
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-sdaGreen-600 inline-block" /> 1 Nursing College
                </span>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[4/4.2] bg-gradient-to-b from-slate-50 to-health-50/20 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden p-4">
              
              {/* Background Reference Map Graphic Layer */}
              <img 
                src="/images/reference-map.png" 
                alt="Map of India Locations" 
                className="absolute inset-0 w-full h-full object-contain opacity-25 pointer-events-none mix-blend-multiply"
              />

              {/* Geo Pins Overlay */}
              <div className="absolute inset-0 w-full h-full">
                {allMapItems.map((item) => {
                  const isActive = activeFacility.id === item.id;
                  const isNursing = item.isNursing;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveFacility(item)}
                      style={{
                        left: `${item.mapCoords.x}%`,
                        top: `${item.mapCoords.y}%`
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 cursor-pointer"
                      title={`${item.name} (${item.city})`}
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Ping indicator when active */}
                        {isActive && (
                          <span className={`absolute -inset-1 rounded-full animate-ping opacity-75 ${
                            isNursing ? 'bg-sdaGreen-400' : 'bg-health-400'
                          }`} />
                        )}

                        {/* Pin Dot / Icon */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-125 ${
                          isActive 
                            ? (isNursing ? 'bg-sdaGreen-600 text-white ring-4 ring-sdaGreen-200 scale-125' : 'bg-navy-900 text-white ring-4 ring-health-200 scale-125')
                            : (isNursing ? 'bg-sdaGreen-500 text-white hover:bg-sdaGreen-600' : 'bg-health-600 text-white hover:bg-health-700')
                        }`}>
                          {isNursing ? (
                            <GraduationCap className="w-3.5 h-3.5" />
                          ) : (
                            <MapPin className="w-3.5 h-3.5" />
                          )}
                        </div>

                        {/* City Label Badge */}
                        <span className={`mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap transition-all ${
                          isActive 
                            ? 'bg-navy-900 text-white ring-1 ring-white/20' 
                            : 'bg-white/95 text-slate-800 border border-slate-200 group-hover:bg-health-600 group-hover:text-white'
                        }`}>
                          {item.city}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Helper Callout */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/80 text-[11px] shadow-sm max-w-[220px]">
                <div className="font-bold text-navy-900 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-sdaAmber-500" />
                  <span>Interactive Selection</span>
                </div>
                <p className="text-slate-500 text-[10px] leading-tight">
                  Click any pin on the map or hospital from the list to preview details and access individual hospital pages.
                </p>
              </div>

            </div>

            {/* Frontier Health Note */}
            <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Verified Coverage:</strong> Spanning 10 Medical Trust hospitals across 8 states, including frontier mission hospitals in <strong>Jengjal (Garo Hills, Meghalaya)</strong> and <strong>Falakata (Dooars, West Bengal)</strong>.
              </span>
            </div>

          </div>

          {/* Right Column (5 cols): Active Facility Overview Card & Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Facility Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border-2 border-health-500 relative overflow-hidden">
              
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  activeFacility.type === 'College of Nursing' 
                    ? 'bg-sdaGreen-100 text-sdaGreen-800' 
                    : 'bg-health-100 text-health-800'
                }`}>
                  {activeFacility.type} • {activeFacility.region} India
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Est. {activeFacility.establishedYear}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-1.5">
                {activeFacility.name}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-4">
                <MapPin className="w-3.5 h-3.5 text-sdaAmber-600 shrink-0" />
                <span>{activeFacility.city}, {activeFacility.state}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeFacility.description}
              </p>

              {/* Specialties / Key Departments */}
              <div className="mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-2">
                  {activeFacility.type === 'College of Nursing' ? 'Programs Offered' : 'Key Clinical Specialties'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(activeFacility.specialties || activeFacility.programs || []).slice(0, 4).map((item, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {typeof item === 'string' ? item : item.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-1.5 text-xs text-slate-600 pb-4 border-b border-slate-100">
                <p>📍 <strong>Address:</strong> {activeFacility.address}</p>
                <p>📞 <strong>Phone:</strong> {activeFacility.phone}</p>
              </div>

              {/* Action Buttons: Details Page & Directions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                {activeFacility.type === 'College of Nursing' ? (
                  <Link
                    to="/nursing-college"
                    className="w-full sm:w-auto flex-grow text-center py-2.5 px-4 rounded-xl text-xs font-bold bg-sdaGreen-600 hover:bg-sdaGreen-700 text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>View Nursing College Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    to={`/hospitals/${activeFacility.id}`}
                    className="w-full sm:w-auto flex-grow text-center py-2.5 px-4 rounded-xl text-xs font-bold bg-navy-900 hover:bg-navy-800 text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>View Full Hospital Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                <a
                  href={activeFacility.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center py-2.5 px-3 rounded-xl text-xs font-bold text-health-700 hover:bg-health-50 border border-health-300 flex items-center justify-center gap-1.5"
                  title="Open in Google Maps"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Quick List Directory */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                Quick Facility Navigator
              </h4>
              <div className="max-h-60 overflow-y-auto space-y-1.5 pr-2">
                {allMapItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveFacility(item)}
                    className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      activeFacility.id === item.id 
                        ? 'bg-navy-900 text-white font-semibold' 
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="truncate pr-2">
                      {idx + 1}. {item.name}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      activeFacility.id === item.id 
                        ? 'bg-navy-800 text-slate-200' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.city}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
