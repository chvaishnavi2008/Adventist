import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Calendar, 
  Bed, 
  ExternalLink, 
  Search, 
  GraduationCap, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function HospitalListingSection() {
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
    <section id="hospitals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Direct Institutional Network"
          badgeColor="health"
          title="The 10 Medical Trust Hospitals Across India"
          subtitle="Directly operated by The Medical Trust of the Seventh-day Adventists, delivering compassionate, high-standard healthcare."
        />

        {/* Search & Region Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRegion === region
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-200/60'
                }`}
              >
                {region === 'All' ? `All Hospitals (${MEDICAL_TRUST_HOSPITALS.length})` : region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by city, hospital or state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600 transition-all"
            />
          </div>

        </div>

        {/* 10 Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredHospitals.map((hospital, index) => (
            <div
              key={hospital.id}
              id={hospital.id}
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-health-400 shadow-sm hover:shadow-card-hover transition-all duration-300 p-6 group"
            >
              <div>
                {/* Card Top: Numbering & Region */}
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-lg bg-navy-50 text-navy-900 text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-health-50 text-health-700 border border-health-100">
                      {hospital.region} India
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Est. {hospital.establishedYear}
                    </span>
                  </div>
                </div>

                {/* Hospital Name & Location */}
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-health-700 transition-colors mb-1">
                  {hospital.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                  <MapPin className="w-3.5 h-3.5 text-sdaAmber-500 shrink-0" />
                  <span>{hospital.city}, {hospital.state}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {hospital.description}
                </p>

                {/* Specialties Tags */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                    <Stethoscope className="w-3 h-3 text-health-500" />
                    <span>Key Specialties</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hospital.specialties.slice(0, 3).map((spec, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] bg-slate-50 border border-slate-200/70 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                    {hospital.specialties.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{hospital.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Address & Direct Contact */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  📍 {hospital.address}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={`tel:${hospital.phone}`} 
                    className="inline-flex items-center gap-1 text-xs font-semibold text-health-700 hover:text-health-900"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{hospital.phone}</span>
                  </a>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-navy-900 hover:text-health-600 flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* DISTINCT SECTION: College of Nursing (Explicitly separated as mandated) */}
        <div id="nursing-college" className="rounded-3xl bg-gradient-to-br from-sdaGreen-50 via-white to-health-50 border-2 border-sdaGreen-200 p-8 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sdaGreen-100 text-sdaGreen-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-sdaGreen-700" />
                <span>Premier Educational Institution (Kept Distinct)</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {NURSING_COLLEGE.name}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-sdaAmber-600" />
                  {NURSING_COLLEGE.city}, {NURSING_COLLEGE.state}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-sdaGreen-700">
                  <CheckCircle2 className="w-4 h-4" />
                  Recognized by Indian Nursing Council (INC) & KNMC
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {NURSING_COLLEGE.description} Operates directly in affiliation with the Seventh Day Adventist Hospital in Ottapalam, providing world-class clinical residency, ethics-grounded academic excellence, and wholistic patient care training.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {NURSING_COLLEGE.programs.map((prog, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 p-2 rounded-lg border border-sdaGreen-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-sdaGreen-600 shrink-0" />
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-sdaGreen-200 shadow-sm space-y-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-sdaGreen-100 text-sdaGreen-700 flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-navy-900">Admissions & Inquiries</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Kanniyampuram P.O., Ottapalam, Kerala 679104
                </p>
              </div>
              <div className="text-xs space-y-1 text-slate-600">
                <p><strong>Phone:</strong> {NURSING_COLLEGE.phone}</p>
                <p><strong>Email:</strong> {NURSING_COLLEGE.email}</p>
              </div>
              <Button href="#contact" variant="health" size="sm" className="w-full justify-center">
                Contact Nursing College
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
