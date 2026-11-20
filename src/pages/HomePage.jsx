import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustIntroSection from '../components/home/TrustIntroSection';
import MissionVisionValuesSection from '../components/home/MissionVisionValuesSection';
import HospitalListingSection from '../components/home/HospitalListingSection';
import IndiaMapSection from '../components/home/IndiaMapSection';
import LeadershipSection from '../components/home/LeadershipSection';
import OurProfessionalsSection from '../components/home/OurProfessionalsSection';
import CommunityMissionSection from '../components/home/CommunityMissionSection';
import CareersEducationSection from '../components/home/CareersEducationSection';
import NewsStoriesSection from '../components/home/NewsStoriesSection';
import ContactSection from '../components/home/ContactSection';

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction to the Medical Trust & Heritage */}
      <TrustIntroSection />

      {/* 3. Mission, Vision and Values */}
      <MissionVisionValuesSection />

      {/* 4. Hospital Listing Section (10 Hospitals + Separate Nursing College) */}
      <HospitalListingSection />

      {/* 5. India Hospital Location Map */}
      <IndiaMapSection />

      {/* 6. Leadership and Management */}
      <LeadershipSection />

      {/* 7. Our Professionals */}
      <OurProfessionalsSection />

      {/* 8. Community & Mission */}
      <CommunityMissionSection />

      {/* 9. Careers & Education (Featuring College of Nursing Ottapalam) */}
      <CareersEducationSection />

      {/* 10. News & Stories (WP REST API ready) */}
      <NewsStoriesSection />

      {/* 11. Contact Information */}
      <ContactSection />
    </div>
  );
}
