import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Navigation,
  Send, 
  CheckCircle2, 
  Info,
  ShieldCheck
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';

export default function ContactSection({ isStandalonePage = false }) {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: 'Headquarters (Medical Trust Office - Hosur)',
    subject: '',
    message: ''
  });

  const [messageComposed, setMessageComposed] = useState(false);

  const handleChange = (e) => {
    setInquiryData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleComposeMail = (e) => {
    e.preventDefault();
    // Direct mailto link generation - transparent and requires no fake backend
    const recipient = "medicaltrustadminsec@sudadventist.org";
    const subject = encodeURIComponent(`[${inquiryData.facility}] ${inquiryData.subject || 'Website Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${inquiryData.name}\n` +
      `Phone: ${inquiryData.phone}\n` +
      `Email: ${inquiryData.email}\n` +
      `Institution of Interest: ${inquiryData.facility}\n\n` +
      `Inquiry:\n${inquiryData.message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setMessageComposed(true);
  };

  return (
    <section id="contact" className={`py-16 lg:py-24 ${isStandalonePage ? 'bg-slate-50' : 'bg-slate-50 border-t border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Direct Inquiries & Offices"
          badgeColor="health"
          title="Contact The Medical Trust"
          subtitle="Reach our administrative headquarters in Hosur, statutory registered office in Chennai, or any of our 10 network hospitals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (6 cols): Official Offices & Direct Links */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Administrative Office Card */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-health-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-health-50 text-health-600 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2.5 py-0.5 rounded border border-health-100">
                    Central Administrative Headquarters
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-navy-900 mt-1">
                    Administrative Office
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                <p className="font-bold text-navy-900 text-sm">
                  Southern Asia Division of Seventh-day Adventists
                </p>
                
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sdaAmber-500 shrink-0 mt-0.5" />
                  <span>Jeevan Jyothi Campus, HCF, Hosur – 635110, Tamil Nadu, India</span>
                </p>

                <p className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-health-600 shrink-0 mt-0.5" />
                  <span>
                    Reception Telephone: <a href="tel:+9104344263800" className="font-bold text-navy-900 hover:text-health-600 hover:underline">+91-04344-263800</a> / 263801<br />
                    <span className="text-slate-500 font-normal">(Extension: 861, 865)</span>
                  </span>
                </p>

                <p className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-sdaAmber-600 shrink-0 mt-0.5" />
                  <span>
                    Email: <a href="mailto:medicaltrustadminsec@sudadventist.org" className="font-semibold text-health-700 hover:underline">medicaltrustadminsec@sudadventist.org</a>
                  </span>
                </p>

                {/* Google Maps Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Southern+Asia+Division+Seventh-day+Adventists+Hosur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-health-700 hover:text-navy-900"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open Hosur Location in Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-health-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-navy-50 text-navy-900 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-800 bg-navy-50 px-2.5 py-0.5 rounded border border-navy-100">
                    Statutory Entity Registration
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-navy-900 mt-1">
                    Registered Office
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                <p className="font-bold text-navy-900 text-sm">
                  The Medical Trust of the Seventh-day Adventists
                </p>
                
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sdaAmber-500 shrink-0 mt-0.5" />
                  <span>AA148, 3rd Avenue, Annanagar, Chennai – 600040, Tamil Nadu, India</span>
                </p>

                <p className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-health-600 shrink-0 mt-0.5" />
                  <span>
                    Phone: <a href="tel:+9104344263800" className="font-bold text-navy-900 hover:text-health-600">+91-04344-263800</a>
                  </span>
                </p>

                {/* Google Maps Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=AA148+3rd+Avenue+Annanagar+Chennai+600040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-health-700 hover:text-navy-900"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open Chennai Location in Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Callout */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-sm">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-health-600" />
                <span>Administrative Office Hours</span>
              </div>
              <p>
                Monday to Thursday: 8:30 AM – 5:30 PM | Friday: 8:30 AM – 1:30 PM.<br />
                Closed on Saturdays (Sabbath). Hospital emergency departments at all 10 institutions operate 24 hours daily.
              </p>
            </div>

          </div>

          {/* Right Column (6 cols): Direct Email Composer / Message Dispatch */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-health-50 text-health-700 border border-health-200 mb-2">
                <Mail className="w-3.5 h-3.5 text-health-600" />
                <span>Direct Email Dispatch</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Send an Inquiry to the Administrative Office
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Fill in the details below to open and send your inquiry directly through your email client to our central secretariat.
              </p>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={inquiryData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Ramesh Kumar"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={inquiryData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={inquiryData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Institution of Interest
                  </label>
                  <select
                    name="facility"
                    value={inquiryData.facility}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                  >
                    <option value="Medical Trust Headquarters (Hosur)">Medical Trust Headquarters (Hosur)</option>
                    <option value="Seventh Day Adventist College of Nursing (Ottapalam)">Seventh Day Adventist College of Nursing (Ottapalam)</option>
                    <optgroup label="The 10 Hospitals">
                      {MEDICAL_TRUST_HOSPITALS.map((h) => (
                        <option key={h.id} value={`${h.name} (${h.city})`}>
                          {h.name} – {h.city}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  name="subject"
                  value={inquiryData.subject}
                  onChange={handleChange}
                  placeholder="Medical inquiry, nursing admissions, administration, etc."
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message Details *
                </label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  value={inquiryData.message}
                  onChange={handleChange}
                  placeholder="Please state your inquiry with any relevant details..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-health-400" />
                  <span>Send via Email to medicaltrustadminsec@sudadventist.org</span>
                </button>
              </div>

              {messageComposed && (
                <div className="p-3 bg-sdaGreen-50 text-sdaGreen-800 rounded-xl text-xs flex items-center gap-2 border border-sdaGreen-200 mt-3">
                  <CheckCircle2 className="w-4 h-4 text-sdaGreen-600 shrink-0" />
                  <span>Email client opened. If it didn't open automatically, write to <strong>medicaltrustadminsec@sudadventist.org</strong>.</span>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
