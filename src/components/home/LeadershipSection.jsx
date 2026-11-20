import React from 'react';
import { 
  Users, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  UserCheck,
  Building
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { LEADERSHIP_TEAM, TRUST_DETAILS } from '../../data/teamData';

export default function LeadershipSection() {
  const officers = LEADERSHIP_TEAM.filter(m => m.category === 'Officer');
  const staff = LEADERSHIP_TEAM.filter(m => m.category === 'Office Staff');

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Governance & Administration"
          badgeColor="health"
          title="Leadership & Trust Management"
          subtitle="Governed by the Southern Asia Division of Seventh-day Adventists and dedicated executive officers."
        />

        {/* Ownership & Trust Governance Card */}
        <div id="ownership-management" className="mb-16 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health-500/20 text-health-300 text-xs font-bold uppercase tracking-wider border border-health-500/30">
                <ShieldCheck className="w-4 h-4 text-health-400" />
                <span>Legal Structure & Public Charity</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ownership & Trust Constitution
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                The Medical Trust is a public charitable trust bearing <strong className="text-white underline decoration-health-400 underline-offset-4">Registration No. 515 of 1999</strong>. 
                This institution is owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division through its legally constituted agency, <strong>The Medical Trust of the Seventh-day Adventists</strong>.
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Management of this institution is entrusted to a <strong>Board of Trustees / Management</strong> which carries out its responsibilities in harmony with the policies of the General Conference of Seventh-day Adventists, Southern Asia Division and the coordinating role of the Medical Trust of the Seventh-day Adventists.
              </p>

              <div className="p-3.5 rounded-xl bg-navy-950/80 border border-white/10 text-xs text-slate-400 italic">
                ℹ️ Official Board Notice: <em>"List of Trustees will be shared once it is finalized."</em>
              </div>
            </div>

            <div className="lg:col-span-4 bg-navy-950 p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
              <div className="text-xs font-bold text-sdaAmber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                <span>Statutory Summary</span>
              </div>
              <div className="space-y-2 text-slate-300">
                <p><strong>Entity:</strong> The Medical Trust of the Seventh-day Adventists</p>
                <p><strong>Legal Status:</strong> Public Charitable Trust</p>
                <p><strong>Reg. No:</strong> 515 of 1999</p>
                <p><strong>Division:</strong> Southern Asia Division of SDA</p>
                <p><strong>Operating Units:</strong> 10 Hospitals & 1 Nursing College</p>
              </div>
            </div>

          </div>
        </div>

        {/* Executive Officers */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-navy-900">Executive Officers</h3>
              <p className="text-xs text-slate-500">Principal office-bearers of the Medical Trust</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              Meet Our Team
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officers.map((officer) => (
              <div 
                key={officer.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-health-400 shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 group"
              >
                <div>
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md border-2 border-white ring-4 ring-slate-100 mb-5 bg-slate-100 flex items-center justify-center">
                    {officer.image ? (
                      <img 
                        src={officer.image} 
                        alt={officer.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-slate-400" />
                    )}
                  </div>

                  <div className="text-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-navy-50 text-navy-800">
                      {officer.role}
                    </span>
                    <h4 className="text-lg font-bold text-navy-900 mt-2">
                      {officer.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {officer.organization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 text-center leading-relaxed mb-4">
                    {officer.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <a 
                    href={`tel:${officer.phone}`} 
                    className="flex items-center gap-2 text-slate-600 hover:text-navy-900 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-health-600 shrink-0" />
                    <span>{officer.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${officer.email}`} 
                    className="flex items-center gap-2 text-slate-600 hover:text-navy-900 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-sdaAmber-600 shrink-0" />
                    <span className="truncate">{officer.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Administration & Accounting Staff */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-navy-900">Office Administration & Finance</h3>
            <p className="text-xs text-slate-500">Central operational staff at the Trust headquarters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {staff.map((person) => (
              <div 
                key={person.id}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:bg-white hover:border-health-300 hover:shadow-sm transition-all"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-white border border-slate-200 flex items-center justify-center">
                  {person.image ? (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserCheck className="w-8 h-8 text-slate-400" />
                  )}
                </div>

                <div className="flex-grow text-center sm:text-left space-y-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2 py-0.5 rounded">
                      {person.role}
                    </span>
                    <h4 className="text-base font-bold text-navy-900 mt-1">
                      {person.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600">
                    {person.bio}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                    <a href={`tel:${person.phone}`} className="flex items-center gap-1 hover:text-navy-900">
                      <Phone className="w-3 h-3 text-health-600" />
                      <span>{person.phone}</span>
                    </a>
                    <a href={`mailto:${person.email}`} className="flex items-center gap-1 hover:text-navy-900 truncate">
                      <Mail className="w-3 h-3 text-sdaAmber-600" />
                      <span className="truncate">{person.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
