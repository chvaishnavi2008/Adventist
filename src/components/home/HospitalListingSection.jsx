import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Search, 
  ExternalLink, 
  Navigation, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { MEDICAL_TRUST_HOSPITALS } from '../../data/hospitalsData';

export default function HospitalListingSection({ isStandalonePage = false }) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'North', 'South', 'East', 'Northeast', 'West'];

  const filteredHospitals = MEDICAL_TRUST_HOSPITALS.filter(hospital => {
    const matchesRegion = selectedRegion === 'All' || hospital.region === selectedRegion;
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hospital.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hospital.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="hospitals" className={`py-16 lg:py-24 ${isStandalonePage ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Direct Institutional Network"
          badgeColor="health"
          title="Our 10 Medical Trust Hospitals"
          subtitle="Delivering compassionate, clinical excellence across 10 specialized healthcare facilities in India."
        />

        {/* Search & Region Filter Bar (Sterling Hospitals Inspired) */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Region Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 mr-2 uppercase tracking-wider hidden sm:inline">
                Region:
              </span>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedRegion === region
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-health-400'
                  }`}
                >
                  {region === 'All' ? `All (${MEDICAL_TRUST_HOSPITALS.length})` : region}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search hospital name, city or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-health-600 transition-all shadow-sm"
              />
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/80">
            <span>Showing <strong>{filteredHospitals.length}</strong> of 10 hospitals</span>
            <span className="italic">College of Nursing is listed separately under Education</span>
          </div>
        </div>

        {/* 4-COLUMN DESKTOP GRID (Mandated in Prompt: 4 col desktop, 2 col tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHospitals.map((hospital, idx) => (
            <div
              key={hospital.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-health-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* Hospital Photo & Authenticity Badge */}
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-navy-950/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {hospital.region} India
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-navy-950/70 backdrop-blur-xs text-slate-200 text-[9px] px-2 py-0.5 rounded flex items-center justify-between">
                    <span>{hospital.imageBadge}</span>
                    <span className="font-semibold text-white">Est. {hospital.establishedYear}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  
                  {/* Name */}
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-health-700 transition-colors line-clamp-2 mb-1.5 leading-snug">
                    {hospital.name}
                  </h3>

                  {/* City & State */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-sdaAmber-500 shrink-0" />
                    <span>{hospital.city}, {hospital.state}</span>
                  </div>

                  {/* Short Verified Introduction */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                    {hospital.description}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {hospital.specialties.slice(0, 2).map((spec, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                    {hospital.specialties.length > 2 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{hospital.specialties.length - 2} more
                      </span>
                    )}
                  </div>

                </div>

              </div>

              {/* Action Buttons: View Details & Get Directions (Required) */}
              <div className="p-5 pt-0 border-t border-slate-100 space-y-2 mt-auto">
                <div className="pt-3 flex flex-col gap-2">
                  
                  <Link
                    to={`/hospitals/${hospital.id}`}
                    className="w-full text-center py-2 px-3 rounded-lg text-xs font-bold bg-navy-900 text-white hover:bg-navy-800 transition-all flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>View Hospital Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={hospital.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-1.5 px-3 rounded-lg text-xs font-semibold text-health-700 hover:text-white hover:bg-health-600 border border-health-300 transition-all flex items-center justify-center gap-1.5"
                    title={`Get Directions to ${hospital.name}`}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredHospitals.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Building2 className="w-12 h-12 mx-auto text-slate-300 mb-3" />
            <h4 className="text-base font-bold text-navy-900">No Hospitals Found</h4>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search query or region filter.</p>
            <button
              onClick={() => { setSelectedRegion('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-navy-900 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
