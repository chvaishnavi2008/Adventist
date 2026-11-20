import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { TRUST_DETAILS } from '../../data/teamData';
import { MEDICAL_TRUST_HOSPITALS, NURSING_COLLEGE } from '../../data/hospitalsData';
import { wordpressApi } from '../../services/wordpressApi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: 'Headquarters (Medical Trust Office)',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate/attempt submission through WordPress REST API handler
    const simulatedData = new FormData();
    Object.keys(formData).forEach(k => simulatedData.append(k, formData[k]));
    
    await wordpressApi.submitContactForm('1', simulatedData);
    
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Direct Inquiries"
          badgeColor="health"
          title="Get In Touch With The Medical Trust"
          subtitle="Connect with our administrative headquarters, registered office, or individual healthcare institutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Registered & Administrative Offices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Administrative Office Card */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-sm hover:border-health-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-health-50 text-health-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2 py-0.5 rounded">
                    Central Operations
                  </span>
                  <h4 className="text-base font-bold text-navy-900 mt-0.5">
                    Administrative Office
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <p className="font-semibold text-slate-800">
                  Southern Asia Division of Seventh-day Adventists
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sdaAmber-500 shrink-0 mt-0.5" />
                  <span>Jeevan Jyothi Campus, HCF, Hosur – 635110, Tamil Nadu, India</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-health-600 shrink-0 mt-0.5" />
                  <span>
                    Reception: <strong>+91-04344-263800</strong> / 263801<br />
                    <span className="text-slate-500 font-normal">(Extension: 861, 865)</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Registered Office Card */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200/90 shadow-sm hover:border-health-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-navy-50 text-navy-900">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-800 bg-navy-50 px-2 py-0.5 rounded">
                    Statutory Entity
                  </span>
                  <h4 className="text-base font-bold text-navy-900 mt-0.5">
                    Registered Office
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <p className="font-semibold text-slate-800">
                  The Medical Trust of the Seventh-day Adventists
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-sdaAmber-500 shrink-0 mt-0.5" />
                  <span>AA148, 3rd Avenue, Annanagar, Chennai – 600 040, Tamil Nadu, India</span>
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-health-600 shrink-0 mt-0.5" />
                  <span>+91-04344-263800</span>
                </p>
              </div>
            </div>

            {/* Hours & Help Desk Notice */}
            <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 space-y-1 border border-slate-200">
              <div className="font-bold text-navy-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-health-600" />
                <span>Office Hours & Reception Assistance</span>
              </div>
              <p>
                Monday to Thursday: 8:30 AM – 5:30 PM | Friday: 8:30 AM – 1:30 PM (Closed Saturdays). Hospital emergency departments operate 24/7.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200/90">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-sdaGreen-100 text-sdaGreen-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Message Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to The Medical Trust of the Seventh-day Adventists. Your message has been routed to the administrative office in Hosur.
                </p>
                <Button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      facility: 'Headquarters (Medical Trust Office)',
                      subject: '',
                      message: ''
                    });
                  }}
                  variant="outline"
                  size="sm"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Please fill out the form below. Your message will be handled with strict confidentiality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Ramesh Kumar"
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Institution / Office
                    </label>
                    <select
                      name="facility"
                      value={formData.facility}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600"
                    >
                      <option value="Headquarters (Medical Trust Office)">Medical Trust Headquarters (Hosur)</option>
                      <option value={NURSING_COLLEGE.name}>🎓 Seventh Day Adventist College of Nursing (Ottapalam)</option>
                      <optgroup label="Direct Hospitals (10)">
                        {MEDICAL_TRUST_HOSPITALS.map((h) => (
                          <option key={h.id} value={h.name}>{h.name} ({h.city})</option>
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
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="General Inquiry, Medical Service, Nursing Admissions, etc."
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify your query or medical inquiry..."
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-health-600 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="health"
                    size="md"
                    disabled={submitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    {submitting ? 'Transmitting Message...' : 'Send Official Inquiry'}
                  </Button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
