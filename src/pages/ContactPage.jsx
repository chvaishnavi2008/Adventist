import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/home/ContactSection';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-health-400 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact The Medical Trust
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Get in touch with our central administrative office in Hosur, registered office in Chennai, or connect directly with our 10 network hospitals.
          </p>
        </div>
      </div>

      <ContactSection isStandalonePage={true} />

    </div>
  );
}
