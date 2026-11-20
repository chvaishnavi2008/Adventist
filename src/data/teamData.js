/**
 * Leadership & Office Staff Data
 * Source: Medical Trust of the Seventh-day Adventists (ABOUT US.docx and Ownership & Management.docx)
 */

export const TRUST_DETAILS = {
  name: "The Medical Trust of the Seventh-day Adventists",
  publicBrand: "Adventist Health India",
  registrationNo: "Registration No. 515 of 1999",
  trustType: "Public Charitable Trust",
  parentBody: "General Conference of Seventh-day Adventists, Southern Asia Division",
  governance: "Board of Trustees / Management",
  foundedDivisionYear: "1863 (Global SDA Church) / 1866 (Battle Creek Medical Work)",
  trustRegYear: "1999",
  administrativeOffice: {
    title: "Administrative Office",
    entity: "Southern Asia Division of Seventh-day Adventists",
    address: "Jeevan Jyothi Campus, HCF, Hosur – 635110, Tamil Nadu, India",
    phone: "+91-04344-263800 / 263801",
    extensions: "Ext. 861, 865"
  },
  registeredOffice: {
    title: "Registered Office",
    entity: "The Medical Trust of the Seventh-day Adventists",
    address: "AA148, 3rd Avenue, Annanagar, Chennai – 600 040, Tamil Nadu, India",
    phone: "+91-04344-263800"
  }
};

export const LEADERSHIP_TEAM = [
  {
    id: "john-victor-chinta",
    name: "John Victor Chinta",
    role: "Chairman",
    organization: "The Medical Trust of the Seventh-day Adventists",
    phone: "+91 9989666698",
    email: "chjohnvictor@sudadventist.org",
    image: "/images/leader-john-victor.jpeg",
    bio: "Guiding the strategic vision and spiritual mission of Adventist healthcare across the Southern Asia Division.",
    category: "Officer"
  },
  {
    id: "alamgir-khan",
    name: "Alamgir Khan",
    role: "Secretary",
    organization: "The Medical Trust of the Seventh-day Adventists",
    phone: "+91-9422022386",
    email: "medicaltrustsecretary@sudadventist.org",
    image: "/images/leader-alamgir-khan.jpeg",
    bio: "Overseeing institutional administration, secretarial affairs, and coordinating operations across all Trust hospitals.",
    category: "Officer"
  },
  {
    id: "edward-prasad-pilli",
    name: "Edward Prasad Pilli",
    role: "Treasurer",
    organization: "The Medical Trust of the Seventh-day Adventists",
    phone: "+91-9010553081",
    email: "medicaltrusttreasurer@sudadventist.org",
    image: "/images/leader-edward-prasad.jpeg",
    bio: "Managing financial stewardship, fiscal governance, resource allocation, and accountability for trust institutions.",
    category: "Officer"
  },
  {
    id: "sonia-ann-khan",
    name: "Sonia Ann Khan",
    role: "Office Administrative Assistant",
    organization: "The Medical Trust of the Seventh-day Adventists",
    phone: "+91-9130080386",
    email: "medicaltrustadminsec@sudadventist.org",
    image: "/images/staff-sonia-khan.jpeg",
    bio: "Coordinating central executive communications, institutional documentation, and office administrative liaison.",
    category: "Office Staff"
  },
  {
    id: "ravindra-babu-g",
    name: "Ravindra Babu G",
    role: "Chief Accountant",
    organization: "The Medical Trust of the Seventh-day Adventists",
    phone: "+91-9885221544",
    email: "medicaltrustaccounts@sudadventist.org",
    image: null, // Note: No photo provided in source documents
    bio: "Heading institutional accounting, audits, regulatory filings, and financial records for the Medical Trust.",
    category: "Office Staff"
  }
];

export const CORE_VALUES = [
  {
    id: "spirit-of-jesus",
    title: "Spirit of Jesus",
    description: "We serve humanity by the example of Jesus who was a compassionate healer without discrimination.",
    badge: "Compassionate Healing",
    iconName: "Heart"
  },
  {
    id: "commitment",
    title: "Commitment",
    description: "We dedicate our talents and skills for the betterment of the society.",
    badge: "Social Impact",
    iconName: "Award"
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "We will make all our actions transparent and with integrity.",
    badge: "Transparency",
    iconName: "ShieldCheck"
  },
  {
    id: "quality",
    title: "Quality",
    description: "We will maintain and set highest standards of quality.",
    badge: "Clinical Excellence",
    iconName: "CheckCircle2"
  },
  {
    id: "ethical",
    title: "Ethical",
    description: "We shall maintain a professional environment adhering to our ethics.",
    badge: "Professional Standards",
    iconName: "Scale"
  }
];
