import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import HospitalListingSection from '../components/home/HospitalListingSection';
import { NURSING_COLLEGE } from '../data/hospitalsData';

export default function HospitalsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-health-400 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Our Hospitals</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our 10 Medical Trust Hospitals Across India
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Directly operated by The Medical Trust of the Seventh-day Adventists. Search by name, city, or filter by geographical region to view facility details and get directions.
          </p>
        </div>
      </div>

      {/* Hospital Listing Section (4 Columns) */}
      <HospitalListingSection isStandalonePage={true} />

      {/* DISTINCT EDUCATION SECTION: College of Nursing Ottapalam (Separated from hospitals) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-sdaGreen-50 via-white to-health-50 border-2 border-sdaGreen-200 p-8 sm:p-10 shadow-md">
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
                {NURSING_COLLEGE.description} Operates in close clinical partnership with the Seventh Day Adventist Hospital at Ottapalam, offering undergraduate B.Sc. Nursing and Post-Basic degree programs.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/nursing-college"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-sdaGreen-700 hover:bg-sdaGreen-800 text-white shadow-sm transition-all"
                >
                  <span>Explore Nursing College Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${NURSING_COLLEGE.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-navy-900 border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Call Admissions: {NURSING_COLLEGE.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-sdaGreen-200 shadow-sm space-y-3 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-sdaGreen-100 text-sdaGreen-700 flex items-center justify-center">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h4 className="text-base font-bold text-navy-900">Admissions Office</h4>
              <p className="text-xs text-slate-500">
                Kanniyampuram P.O., Ottapalam, Kerala 679104
              </p>
              <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
                <p><strong>Phone:</strong> {NURSING_COLLEGE.phone}</p>
                <p><strong>Email:</strong> {NURSING_COLLEGE.email}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
