import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  ArrowRight,
  Mail,
  Heart
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { NURSING_COLLEGE } from '../../data/hospitalsData';

export default function CareersEducationSection() {
  const careerTracks = [
    {
      title: "Medical Consultants & Specialists",
      desc: "Physicians, surgeons, and specialists committed to wholistic medicine across our 10 network hospitals.",
      badge: "Clinical Positions"
    },
    {
      title: "Registered Nurses & Midwives",
      desc: "Compassionate bedside caregivers, ICU nurses, and operating room professionals upholding ethical standards.",
      badge: "Nursing Staff"
    },
    {
      title: "Allied Health & Diagnostic Technicians",
      desc: "Radiology, laboratory sciences, physiotherapy, and pharmacy professionals delivering diagnostic precision.",
      badge: "Technical"
    },
    {
      title: "Hospital Administration & Operations",
      desc: "Stewardship-driven administrators, accountants, and coordinators maintaining our charitable trust mission.",
      badge: "Management"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Education & Careers"
          badgeColor="green"
          title="Nurturing Inspired Healthcare Professionals"
          subtitle="Empowering the next generation through the Seventh Day Adventist College of Nursing and fulfilling clinical careers."
        />

        {/* Highlight Banner: College of Nursing Ottapalam */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-8 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdaGreen-100 text-sdaGreen-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-sdaGreen-700" />
                <span>Premier Nursing Institution</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {NURSING_COLLEGE.name}
              </h3>
              
              <p className="text-xs font-semibold text-slate-500">
                Kanniyampuram P.O., Ottapalam, Palakkad District, Kerala 679104
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Affiliated with the renowned Seventh Day Adventist Hospital at Ottapalam, the College of Nursing provides academic rigor, extensive clinical rotations, and spiritual mentoring. Students learn the science of modern nursing combined with Christ-like bedside empathy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                  <span>Indian Nursing Council (INC) Recognized</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                  <span>Kerala Nursing Council (KNMC) Approved</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                  <span>Comprehensive Hands-on Hospital Residency</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                  <span>Values & Medical Ethics Focused</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-950 text-white p-7 rounded-2xl shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sdaAmber-400">
                Academic Inquiries
              </span>
              <h4 className="text-lg font-bold">
                Join the Nursing Ministry
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For admissions, syllabus, prospectus, and application guidelines, connect with our Ottapalam administration.
              </p>
              <div className="text-xs space-y-2 text-slate-200 pt-2 border-t border-navy-800">
                <p>📞 Phone: {NURSING_COLLEGE.phone}</p>
                <p>✉️ Email: {NURSING_COLLEGE.email}</p>
              </div>
              <Link 
                to="/nursing-college" 
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-sdaGreen-600 hover:bg-sdaGreen-700 text-white text-xs font-bold transition-all shadow-md"
              >
                View College of Nursing Page →
              </Link>
            </div>

          </div>
        </div>

        {/* Careers Opportunities Across 10 Hospitals */}
        <div>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-navy-900">Career Opportunities Across Our 10 Hospitals</h3>
              <p className="text-xs text-slate-500">Find your purpose in faith-driven, compassionate healthcare delivery</p>
            </div>
            <Link 
              to="/careers" 
              className="text-xs font-bold text-health-700 hover:text-navy-900 flex items-center gap-1"
            >
              <span>Explore Career Pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerTracks.map((track, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-health-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2 py-0.5 rounded-full inline-block mb-3">
                    {track.badge}
                  </span>
                  <h4 className="text-base font-bold text-navy-900 mb-2">
                    {track.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {track.desc}
                  </p>
                </div>
                <Link 
                  to="/careers" 
                  className="text-xs font-semibold text-navy-900 hover:text-health-600 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
                >
                  <span>Apply with Trust</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
