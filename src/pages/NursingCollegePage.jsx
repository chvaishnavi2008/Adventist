import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Navigation,
  Building2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { NURSING_COLLEGE, MEDICAL_TRUST_HOSPITALS } from '../data/hospitalsData';

export default function NursingCollegePage() {
  const affiliatedHospital = MEDICAL_TRUST_HOSPITALS.find(h => h.id === 'sda-hospital-ottapalam');

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-sdaGreen-400 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/careers" className="hover:text-white">Careers & Education</Link>
            <span>/</span>
            <span className="text-white">College of Nursing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {NURSING_COLLEGE.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Nurturing inspired healthcare professionals through academic rigor, modern clinical residency, and Christ-like compassionate service in Ottapalam, Kerala.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: College Description & Programs */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdaGreen-100 text-sdaGreen-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-sdaGreen-700" />
                <span>Premier Health Science Institution</span>
              </div>
              <h2 className="text-2xl font-bold text-navy-900">
                Excellence in Nursing Science & Christian Compassion
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {NURSING_COLLEGE.longDescription}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Students benefit from immediate clinical immersion at the adjacent 120-bed Seventh Day Adventist Hospital, gaining direct experience across critical care, emergency medicine, surgical recovery, maternal and child healthcare, and community health nursing.
              </p>
            </div>

            {/* Academic Programs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sdaGreen-600" />
                <span>Academic Degree Programs Offered</span>
              </h3>

              <div className="space-y-4">
                {NURSING_COLLEGE.programs.map((program, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-navy-900">{program.title}</h4>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sdaGreen-100 text-sdaGreen-800 w-fit">
                        Duration: {program.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>Eligibility:</strong> {program.eligibility}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations & Statutory Affiliations */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-health-600" />
                <span>Statutory Recognitions & Approvals</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NURSING_COLLEGE.accreditation.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact, Map & Admissions */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Admissions Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-sdaGreen-500 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Admissions & Inquiries
                </span>
                <span className="text-[10px] bg-sdaGreen-100 text-sdaGreen-800 font-bold px-2 py-0.5 rounded">
                  Academic Office
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <strong className="block text-slate-400 uppercase text-[10px] tracking-wider">Campus Address:</strong>
                  <p className="mt-0.5 font-medium text-navy-900">
                    {NURSING_COLLEGE.address}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <strong className="block text-slate-400 uppercase text-[10px] tracking-wider">Direct Phone:</strong>
                  <a href={`tel:${NURSING_COLLEGE.phone}`} className="text-sm font-bold text-navy-900 hover:text-sdaGreen-700 block mt-0.5">
                    {NURSING_COLLEGE.phone}
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <strong className="block text-slate-400 uppercase text-[10px] tracking-wider">Official Admissions Email:</strong>
                  <a href={`mailto:${NURSING_COLLEGE.email}`} className="text-xs font-bold text-sdaGreen-700 hover:underline block mt-0.5">
                    {NURSING_COLLEGE.email}
                  </a>
                </div>

                {affiliatedHospital && (
                  <div className="pt-2 border-t border-slate-100">
                    <strong className="block text-slate-400 uppercase text-[10px] tracking-wider">Affiliated Teaching Hospital:</strong>
                    <Link to={`/hospitals/${affiliatedHospital.id}`} className="text-xs font-bold text-health-700 hover:underline flex items-center gap-1 mt-0.5">
                      <span>{affiliatedHospital.name} (120 Beds)</span>
                      <span>→</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sdaGreen-600" />
                <span>Ottapalam Campus Location</span>
              </h4>

              <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Seventh Day Adventist College of Nursing Ottapalam Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={NURSING_COLLEGE.googleMapsEmbedUrl}
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>

              <a
                href={NURSING_COLLEGE.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-navy-900 hover:bg-navy-800 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-sdaGreen-400" />
                <span>Get Directions to College</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
