import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  ShieldCheck,
  Building2,
  Stethoscope
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { NURSING_COLLEGE, MEDICAL_TRUST_HOSPITALS } from '../data/hospitalsData';

export default function CareersPage() {
  const careerPathways = [
    {
      title: "Physicians & Medical Specialists",
      specialty: "Clinical Leadership",
      desc: "Opportunities for specialists committed to wholistic patient care across surgery, internal medicine, cardiology, orthopaedics, and maternal health.",
      requirements: "Recognized Post-Graduate Medical Degree (MD/MS/DNB) with valid state medical council registration."
    },
    {
      title: "Registered Staff Nurses & Midwives",
      specialty: "Nursing Care",
      desc: "Bedside nursing, emergency trauma response, ICU critical care, and operating room nursing upholding professional ethics and Christian compassion.",
      requirements: "B.Sc. Nursing or GNM with State Nursing Council Registration. Graduates of INC-recognized institutions welcomed."
    },
    {
      title: "Allied Health & Diagnostic Technicians",
      specialty: "Laboratory & Diagnostics",
      desc: "Laboratory technologists, radiology and ultrasound technicians, ECG technologists, and pharmacy dispensers delivering diagnostic precision.",
      requirements: "Recognized Diploma or Degree in Medical Laboratory Technology (DMLT/BMLT) or relevant allied health field."
    },
    {
      title: "Hospital Administration & Fiscal Stewardship",
      specialty: "Healthcare Operations",
      desc: "Hospital superintendents, finance and accounts officers, patient liaison staff, and facility engineers supporting charitable healthcare operations.",
      requirements: "Background in healthcare administration, commerce, hospital management, or public health governance."
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
            <span className="text-white">Careers & Education</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Careers & Nursing Education
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Discover academic programs at the Seventh Day Adventist College of Nursing and meaningful healthcare career opportunities across our 10 network hospitals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* NURSING COLLEGE PROMINENT SHOWCASE */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-md p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sdaGreen-100 text-sdaGreen-800 inline-block border border-sdaGreen-200">
                Academic Healthcare Institution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {NURSING_COLLEGE.name}
              </h2>
              <p className="text-xs font-semibold text-slate-500">
                Ottapalam, Palakkad District, Kerala • INC & KNMC Recognized
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {NURSING_COLLEGE.description} Operates in direct clinical coordination with the adjacent 120-bed Seventh Day Adventist Hospital, providing students with intensive clinical rotations, modern skill laboratories, and spiritual mentorship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <strong className="text-navy-900 block">B.Sc. Nursing (4 Years)</strong>
                  <span className="text-slate-500">Full undergraduate degree with hospital residency</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <strong className="text-navy-900 block">Post Basic B.Sc. Nursing (2 Years)</strong>
                  <span className="text-slate-500">Advanced professional program for GNM nurses</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/nursing-college"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-sdaGreen-700 hover:bg-sdaGreen-800 text-white shadow-sm transition-all"
                >
                  <span>View Nursing College Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${NURSING_COLLEGE.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-navy-900 border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Admissions: {NURSING_COLLEGE.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-navy-950 text-white p-7 rounded-2xl shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white">Admissions & Prospectus</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Admissions for eligible Plus-Two and GNM candidates open annually. Prospective students may contact the Ottapalam campus directly.
              </p>
              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-navy-800">
                <p>📍 Kanniyampuram P.O., Ottapalam, Kerala</p>
                <p>📞 Phone: {NURSING_COLLEGE.phone}</p>
                <p>✉️ Email: {NURSING_COLLEGE.email}</p>
              </div>
            </div>

          </div>
        </section>

        {/* CAREER INFORMATION SECTION (Verified, no fake job ads) */}
        <section className="space-y-8">
          <SectionHeader
            badge="Professional Careers"
            badgeColor="health"
            title="Healthcare Career Pathways"
            subtitle="Join a dedicated network of medical and nursing professionals guided by ethics and faith."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPathways.map((path, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2.5 py-0.5 rounded">
                    {path.specialty}
                  </span>
                  <span className="text-xs text-slate-400">10 Hospitals Network</span>
                </div>

                <h3 className="text-lg font-bold text-navy-900">
                  {path.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {path.desc}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                  <strong>Typical Prerequisites:</strong> {path.requirements}
                </div>
              </div>
            ))}
          </div>

          {/* How to Apply / Official Inquiries */}
          <div className="bg-navy-900 text-white p-8 rounded-2xl border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-sdaAmber-400">
                Official Career Submissions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Submit Your Professional Profile & Credentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Physicians, surgeons, nursing staff, and administrative personnel interested in serving across our 10 institutions may submit their CV to the administrative secretariat in Hosur.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:medicaltrustadminsec@sudadventist.org?subject=Medical%20Trust%20Career%20Inquiry"
                className="px-6 py-3.5 rounded-xl bg-health-600 hover:bg-health-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email CV to Secretariat</span>
              </a>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
}
