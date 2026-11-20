import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Heart, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Compass, 
  Target, 
  Scale, 
  ArrowRight,
  Phone,
  Mail,
  Users
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { LEADERSHIP_TEAM, CORE_VALUES, TRUST_DETAILS } from '../data/teamData';

export default function AboutPage() {
  const officers = LEADERSHIP_TEAM.filter(m => m.category === 'Officer');
  const staff = LEADERSHIP_TEAM.filter(m => m.category === 'Office Staff');

  const timelineMilestones = [
    {
      year: "1863",
      title: "Organization of the Seventh-day Adventist Church",
      desc: "The Seventh-day Adventist Church was formally organized in Battle Creek, Michigan, uniting communities with a commitment to faith, education, and holistic wellbeing."
    },
    {
      year: "1866",
      title: "Battle Creek Healthcare Beginnings",
      desc: "Under the direct guidance of James and Ellen White, the church opened its first healthcare institution, emphasizing disease prevention through pure water, nutrition, exercise, and spiritual renewal."
    },
    {
      year: "1876",
      title: "Dr. John Harvey Kellogg & Global Recognition",
      desc: "Under the medical direction of Dr. John Harvey Kellogg, the Battle Creek Sanitarium became an internationally acclaimed center for surgery, physiotherapy, and dietary innovation."
    },
    {
      year: "Early 1900s",
      title: "Missionary Doctors Arrive in India",
      desc: "Pioneer Adventist missionary doctors arrived in India, establishing clinics and dispensaries in remote and medically underserved frontiers despite severe financial constraints."
    },
    {
      year: "1999",
      title: "Incorporation of The Medical Trust (Reg. 515 of 1999)",
      desc: "The Medical Trust of the Seventh-day Adventists was constituted as a registered Public Charitable Trust under the Southern Asia Division to govern and coordinate institutions nationally."
    },
    {
      year: "Present",
      title: "10 Hospitals & 1 College of Nursing",
      desc: "Directly operating 10 hospitals and the Seventh Day Adventist College of Nursing across 8 Indian states, delivering Christ-like compassionate healing without discrimination."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-navy-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-health-400 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            About The Medical Trust
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            An affiliate of the worldwide Seventh-day Adventist Church (Southern Asia Division), operating 10 hospitals and 1 College of Nursing in India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* SECTION 1: Heritage & Historical Narrative */}
        <section id="history" className="space-y-12">
          
          <SectionHeader
            badge="Heritage & Roots"
            badgeColor="health"
            title="Over 160 Years of Wholistic Medical Healing"
            subtitle="From the 1866 Battle Creek health reform to modern medical centers spanning India."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src="/images/legacy-history.jpeg" 
                  alt="James and Ellen White - Founders of Adventist Health" 
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-4 bg-navy-950 text-white text-xs">
                  <span className="font-bold text-sdaAmber-400 block">James & Ellen White (1866)</span>
                  <p className="text-slate-300 mt-0.5">Founders who recognized the close link between physical, emotional, and spiritual wellbeing.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2">
                <span className="font-bold text-navy-900 block text-sm">Worldwide Healthcare Network</span>
                <p>The Medical Trust is part of a global church affiliate operating more than 700 healthcare institutions worldwide.</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
              <p>
                The Seventh-day Adventist Church was organized formally in <strong className="text-navy-900">1863</strong>. One of the leading founders of the church, <strong className="text-navy-900">Mrs. Ellen G. White</strong>, recognized the close relationship of physical wellbeing with emotional and spiritual wellbeing.
              </p>

              <p>
                In <strong className="text-navy-900">1866</strong>, under the direction of James and Ellen White, they opened a new kind of healthcare center in Battle Creek, Michigan, USA. It was one institution that not only treated disease but also taught people how to prevent disease through good nutrition, exercise, and sanitation. It was a place where each person was valued as a sacred creation of God.
              </p>

              <div className="p-4 rounded-xl bg-health-50 border-l-4 border-health-600 text-xs sm:text-sm text-navy-950 italic">
                "Within years under the leadership of Dr. John Harvey Kellogg the institution gained international recognition. Soon the work spread around the world including India."
              </div>

              <p>
                In the early part of the 1900s, missionary doctors established health centres throughout India. Over the years, these institutions have stood firm and provided much-needed healthcare in remote locations by overcoming financial constraints.
              </p>

              <p>
                Today, the Southern Asia Division of SDA operates 13 hospitals across the country through two managing trusts: <strong className="text-navy-900">METAS</strong> and <strong className="text-navy-900">The Medical Trust of the Seventh-day Adventists</strong>. The Medical Trust directly operates 10 hospitals and 1 College of Nursing.
              </p>
            </div>

          </div>

          {/* Historical Timeline */}
          <div className="pt-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">Historical Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineMilestones.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
                  <span className="text-2xl font-black text-health-600 block mb-2">{item.year}</span>
                  <h4 className="text-base font-bold text-navy-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* SECTION 2: Mission, Vision and 5 Core Values */}
        <section id="mission-values" className="space-y-12 pt-8 border-t border-slate-200">
          
          <SectionHeader
            badge="Foundational Purpose"
            badgeColor="green"
            title="Mission, Vision & Core Values"
            subtitle="Christ-guided principles steering every medical decision, surgery, and rural outreach."
          />

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 rounded-2xl border border-navy-800 space-y-4 shadow-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-health-500/20 text-health-300 text-xs font-bold uppercase tracking-wider">
                Our Vision
              </span>
              <h3 className="text-2xl font-bold text-white">Inspiring Healthier Lives</h3>
              <p className="text-base text-slate-200 font-light italic leading-relaxed">
                "Our vision is to be a leading provider of quality healthcare with a commitment to educate the masses in healthy living."
              </p>
            </div>

            <div className="bg-gradient-to-br from-health-900 to-navy-900 text-white p-8 rounded-2xl border border-health-800 space-y-4 shadow-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-sdaGreen-500/20 text-sdaGreen-300 text-xs font-bold uppercase tracking-wider">
                Our Mission
              </span>
              <h3 className="text-2xl font-bold text-white">Wholistic Healthcare Across India</h3>
              <p className="text-base text-slate-200 font-light italic leading-relaxed">
                "The Mission of the Medical Trust of Seventh Day Adventists is, to establish, operate and support institutions across the country in providing wholistic healthcare facility by committed and inspired personnel."
              </p>
            </div>
          </div>

          {/* The 5 Values with Christ the Healer Art */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img 
                    src="/images/values-compassion.jpeg" 
                    alt="Christ the Compassionate Healer" 
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="p-3 bg-navy-950 text-white text-center text-xs">
                    <span className="font-bold">Spirit of Jesus</span>
                    <p className="text-[11px] text-slate-400">Compassionate healer without discrimination</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl font-bold text-navy-900">The 5 Core Organizational Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CORE_VALUES.map((val) => (
                    <div key={val.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-navy-900">{val.title}</h4>
                        <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {val.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* SECTION 3: Leadership & Governance */}
        <section id="leadership" className="space-y-12 pt-8 border-t border-slate-200">
          
          <SectionHeader
            badge="Trust Administration"
            badgeColor="amber"
            title="Leadership & Trust Governance"
            subtitle="Governed under the Southern Asia Division of Seventh-day Adventists (Trust Reg. 515 of 1999)."
          />

          {/* Ownership & Trust Box */}
          <div id="governance" className="bg-navy-900 text-white rounded-2xl p-8 border border-navy-800 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-health-500/20 text-health-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-health-400" />
              <span>Public Charitable Trust Registration</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Ownership & Management Constitution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The Medical Trust is a public charitable trust bearing <strong className="text-white underline decoration-health-400 underline-offset-4">Registration No. 515 of 1999</strong>. 
              This institution is owned and operated by the General Conference of Seventh-day Adventists, Southern Asia Division through its legally constituted agency, <strong>The Medical Trust of the Seventh-day Adventists</strong>.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Management of this institution is entrusted to a <strong>Board of Trustees / Management</strong> which carries out its responsibilities in harmony with the policies of the General Conference of Seventh-day Adventists, Southern Asia Division and the coordinating role of the Medical Trust of the Seventh-day Adventists.
            </p>
            <div className="p-3 bg-navy-950 text-xs text-slate-400 rounded-xl italic">
              ℹ️ Official Board Notice: <em>"List of Trustees will be shared once it is finalized."</em>
            </div>
          </div>

          {/* Executive Officers Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-navy-900">Meet Our Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {officers.map((officer) => (
                <div key={officer.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 shadow border-2 border-white ring-2 ring-slate-100 bg-slate-100 flex items-center justify-center">
                      <img 
                        src={officer.image} 
                        alt={officer.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="text-center mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy-50 text-navy-800">
                        {officer.role}
                      </span>
                      <h4 className="text-base font-bold text-navy-900 mt-1">{officer.name}</h4>
                      <p className="text-[11px] text-slate-500">{officer.organization}</p>
                    </div>
                    <p className="text-xs text-slate-600 text-center leading-relaxed mb-4">
                      {officer.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1 text-xs">
                    <a href={`tel:${officer.phone}`} className="flex items-center gap-1.5 text-slate-700 hover:text-navy-900">
                      <Phone className="w-3.5 h-3.5 text-health-600" />
                      <span>{officer.phone}</span>
                    </a>
                    <a href={`mailto:${officer.email}`} className="flex items-center gap-1.5 text-slate-700 hover:text-navy-900 truncate">
                      <Mail className="w-3.5 h-3.5 text-sdaAmber-600" />
                      <span className="truncate">{officer.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {staff.map((person) => (
                <div key={person.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-sm">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 flex items-center justify-center border border-slate-200">
                    {person.image ? (
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8 text-slate-400" />
                    )}
                  </div>
                  <div className="space-y-1.5 text-center sm:text-left flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2 py-0.5 rounded">
                      {person.role}
                    </span>
                    <h4 className="text-sm font-bold text-navy-900">{person.name}</h4>
                    <p className="text-xs text-slate-600">{person.bio}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-xs text-slate-600">
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

        </section>

      </div>

    </div>
  );
}
