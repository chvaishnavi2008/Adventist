import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink, 
  Navigation, 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Bed, 
  ShieldCheck, 
  CheckCircle2,
  Stethoscope,
  Info,
  Clock
} from 'lucide-react';
import { MEDICAL_TRUST_HOSPITALS } from '../data/hospitalsData';

export default function HospitalDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hospitalIndex = MEDICAL_TRUST_HOSPITALS.findIndex(h => h.id === id);
  const hospital = MEDICAL_TRUST_HOSPITALS[hospitalIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!hospital) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-navy-900 mb-2">Hospital Not Found</h2>
          <p className="text-xs text-slate-500 mb-6">
            The requested hospital identifier does not match any of the 10 directly operated Medical Trust institutions.
          </p>
          <Link
            to="/hospitals"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-navy-900 text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hospital Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  // Previous and Next Hospital for seamless directory browsing
  const prevHospital = MEDICAL_TRUST_HOSPITALS[(hospitalIndex - 1 + MEDICAL_TRUST_HOSPITALS.length) % MEDICAL_TRUST_HOSPITALS.length];
  const nextHospital = MEDICAL_TRUST_HOSPITALS[(hospitalIndex + 1) % MEDICAL_TRUST_HOSPITALS.length];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-navy-900">Home</Link>
          <span>/</span>
          <Link to="/hospitals" className="hover:text-navy-900">Our Hospitals</Link>
          <span>/</span>
          <span className="font-semibold text-navy-900 truncate">{hospital.name}</span>
        </div>
      </div>

      {/* Hospital Hero Banner */}
      <div className="bg-navy-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src={hospital.image} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-health-500/20 text-health-300 font-bold uppercase tracking-wider border border-health-500/30">
                  {hospital.region} India • Facility #{hospitalIndex + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 font-semibold">
                  Est. {hospital.establishedYear}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 font-semibold">
                  {hospital.beds}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {hospital.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-light flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sdaAmber-400 shrink-0" />
                <span>{hospital.city}, {hospital.state}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={hospital.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-health-600 hover:bg-health-700 text-white shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>
              <a
                href={`tel:${hospital.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-white text-navy-950 hover:bg-slate-100 transition-all"
              >
                <Phone className="w-4 h-4 text-health-600" />
                <span>Call Reception</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (8 cols): Hospital Information, History & Specialties */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Primary Hospital Image with Photo Disclosure */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="relative h-72 sm:h-96 w-full bg-slate-100">
                <img 
                  src={hospital.image} 
                  alt={hospital.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-navy-950/80 backdrop-blur-sm text-white p-3 rounded-xl text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-lg">
                  <div>
                    <span className="font-bold text-sdaAmber-400 block sm:inline mr-2">
                      {hospital.imageBadge}:
                    </span>
                    <span>{hospital.imageCaption}</span>
                  </div>
                  {!hospital.isAuthenticImage && (
                    <span className="text-[10px] text-slate-300 italic shrink-0">
                      Official photo awaiting division archive update
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Overview & Mission Narrative */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-navy-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-health-600" />
                <span>About {hospital.name}</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {hospital.longDescription}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sdaGreen-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900 block mb-0.5">Medical Trust Governance</strong>
                  Directly owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division, through The Medical Trust of the Seventh-day Adventists (Public Charitable Trust Reg. No. 515 of 1999).
                </div>
              </div>
            </div>

            {/* Clinical Specialties */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-health-600" />
                <span>Clinical Specialties & Departments</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hospital.specialties.map((spec, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-navy-900"
                  >
                    <CheckCircle2 className="w-4 h-4 text-health-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Facilities & Medical Infrastructure */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sdaGreen-600" />
                <span>Hospital Facilities & Patient Services</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hospital.facilities.map((facility, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-sdaGreen-50/50 border border-sdaGreen-200/70 text-xs text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-sdaGreen-600 shrink-0" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Location, Verified Contacts & Embedded Google Map */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact & Emergency Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-health-500 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  Contact & Inquiries
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-sdaGreen-500 animate-pulse" />
              </div>

              {/* Verified Phone */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Reception Telephone
                </span>
                <a 
                  href={`tel:${hospital.phone}`} 
                  className="flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-health-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-health-600 shrink-0" />
                  <span>{hospital.phone}</span>
                </a>
              </div>

              {/* Emergency Hotline */}
              {hospital.emergencyPhone && (
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Emergency Hotline / Direct Line
                  </span>
                  <a 
                    href={`tel:${hospital.emergencyPhone}`} 
                    className="flex items-center gap-2 text-sm font-bold text-rose-700 hover:underline"
                  >
                    <Phone className="w-4 h-4 text-rose-600 shrink-0 animate-pulse" />
                    <span>{hospital.emergencyPhone}</span>
                  </a>
                </div>
              )}

              {/* Verified Email if available */}
              {hospital.email && (
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </span>
                  <a 
                    href={`mailto:${hospital.email}`} 
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-health-700 truncate"
                  >
                    <Mail className="w-4 h-4 text-sdaAmber-500 shrink-0" />
                    <span className="truncate">{hospital.email}</span>
                  </a>
                </div>
              )}

              {/* Official Website link if available */}
              {hospital.website && (
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Official Website
                  </span>
                  <a 
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-health-50 text-xs font-bold text-health-700 transition-colors"
                  >
                    <span className="truncate">{hospital.website.replace('https://', '').replace('/', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              )}

              {/* Full Address */}
              <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Full Verified Address
                </span>
                <p className="leading-relaxed">
                  📍 {hospital.address}
                </p>
              </div>

            </div>

            {/* Embedded Google Map (Mandated Requirement: Embed individual map + Get Directions button) */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-health-600" />
                  <span>Exact Hospital Location</span>
                </h4>
                <span className="text-[10px] text-slate-400">Google Maps Embed</span>
              </div>

              {/* Google Maps iFrame without paid API key */}
              <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title={`${hospital.name} Map Location`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={hospital.googleMapsEmbedUrl}
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Prominent Get Directions Button */}
              <a
                href={hospital.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-navy-900 hover:bg-navy-800 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-health-400" />
                <span>Open in Google Maps & Get Directions</span>
              </a>
            </div>

            {/* Quick Switcher for Other Network Hospitals */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Browse All 10 Hospitals
              </h4>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1 text-xs">
                {MEDICAL_TRUST_HOSPITALS.map((h, i) => (
                  <Link
                    key={h.id}
                    to={`/hospitals/${h.id}`}
                    className={`block p-2 rounded-lg transition-colors ${
                      h.id === hospital.id 
                        ? 'bg-navy-900 text-white font-bold' 
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-2">{i + 1}. {h.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                        h.id === hospital.id ? 'bg-navy-800 text-slate-200' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {h.city}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Previous / Next Hospital Navigation Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/hospitals/${prevHospital.id}`}
            className="flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-health-600 transition-colors p-3 bg-white rounded-xl border border-slate-200 w-full sm:w-auto shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <div>
              <span className="text-[10px] text-slate-400 block font-normal">Previous Hospital</span>
              <span>{prevHospital.name} ({prevHospital.city})</span>
            </div>
          </Link>

          <Link
            to="/hospitals"
            className="text-xs font-bold text-health-700 hover:underline px-4 py-2"
          >
            View All 10 Hospitals Directory
          </Link>

          <Link
            to={`/hospitals/${nextHospital.id}`}
            className="flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-health-600 transition-colors p-3 bg-white rounded-xl border border-slate-200 w-full sm:w-auto text-right justify-end shadow-sm"
          >
            <div>
              <span className="text-[10px] text-slate-400 block font-normal">Next Hospital</span>
              <span>{nextHospital.name} ({nextHospital.city})</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}
