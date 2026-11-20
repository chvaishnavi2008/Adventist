/**
 * Official Medical Trust Facilities
 * Source: Medical Trust of the Seventh-day Adventists reference documentation.
 * Exactly 10 Hospitals operated directly by the Medical Trust, plus 1 College of Nursing.
 */

export const MEDICAL_TRUST_HOSPITALS = [
  {
    id: "aizawl-adventist-hospital",
    name: "Aizawl Adventist Hospital",
    city: "Aizawl",
    state: "Mizoram",
    region: "Northeast",
    type: "Hospital",
    establishedYear: "1980",
    beds: "50+ Beds",
    tagline: "Quality surgical and general healthcare in the hills of Mizoram",
    description: "Serving the communities of Mizoram with compassionate clinical care, dedicated emergency support, and community health initiatives in the North East region.",
    specialties: ["General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Emergency Care", "Pediatrics"],
    address: "Seventh-day Tlang, Chawnpui, Aizawl, Mizoram 796009",
    phone: "+91-389-2342211",
    mapCoords: { x: 88.5, y: 48.0 } // SVG percentage for India map
  },
  {
    id: "sda-medical-centre-bangalore",
    name: "Seventh Day Adventist Medical Centre",
    city: "Bangalore",
    state: "Karnataka",
    region: "South",
    type: "Hospital",
    establishedYear: "1978",
    beds: "75+ Beds",
    tagline: "Multispecialty Christian medical center in central Bengaluru",
    description: "A prominent urban healthcare center providing compassionate healing, outpatient and inpatient care, advanced diagnostics, and lifestyle medicine.",
    specialties: ["Internal Medicine", "General & Laparoscopic Surgery", "Orthopaedics", "Cardiology", "Diagnostics"],
    address: "Spencer Road, Cleveland Town, Frazer Town, Bengaluru, Karnataka 560005",
    phone: "+91-80-25471415",
    mapCoords: { x: 38.0, y: 76.5 }
  },
  {
    id: "mattison-memorial-hospital-hapur",
    name: "Mattison Memorial Hospital",
    city: "Hapur",
    state: "Uttar Pradesh",
    region: "North",
    type: "Hospital",
    establishedYear: "1939",
    beds: "60+ Beds",
    tagline: "Over eight decades of dedicated healthcare service in Western UP",
    description: "Founded in the historic missionary tradition, Mattison Memorial provides affordable clinical, maternity, and surgical care to rural and semi-urban families.",
    specialties: ["Maternal & Child Health", "General Surgery", "Internal Medicine", "Ophthalmology", "24/7 Trauma"],
    address: "Bulandshahr Road, Hapur, Uttar Pradesh 245101",
    phone: "+91-122-2312245",
    mapCoords: { x: 39.5, y: 31.0 }
  },
  {
    id: "pune-adventist-hospital",
    name: "Pune Adventist Hospital",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    type: "Hospital",
    establishedYear: "1974",
    beds: "70+ Beds",
    tagline: "Comprehensive inpatient and outpatient healing center in Salisbury Park",
    description: "Nestled in Salisbury Park, Pune Adventist Hospital delivers personalized medical attention, state-of-the-art surgery, and wholistic health programs.",
    specialties: ["General Medicine", "Orthopaedic Surgery", "ENT", "Obstetrics & Gynaecology", "Physiotherapy"],
    address: "Salisbury Park, Gultekdi, Pune, Maharashtra 411037",
    phone: "+91-20-24261775",
    mapCoords: { x: 32.5, y: 60.5 }
  },
  {
    id: "ruby-nelson-memorial-hospital-jalandhar",
    name: "Ruby Nelson Memorial Hospital",
    city: "Jalandhar",
    state: "Punjab",
    region: "North",
    type: "Hospital",
    establishedYear: "1965",
    beds: "100+ Beds",
    tagline: "Renowned surgical, eye, and general medical care in Punjab",
    description: "Known throughout Punjab for clinical excellence, advanced ophthalmology, compassionate nursing, and outreach clinics serving rural communities.",
    specialties: ["Ophthalmology", "General & GI Surgery", "Internal Medicine", "Gynecology", "Radiology"],
    address: "Cantonment Road, Jalandhar, Punjab 144005",
    phone: "+91-181-2272314",
    mapCoords: { x: 31.0, y: 22.0 }
  },
  {
    id: "sda-hospital-ottapalam",
    name: "Seventh Day Adventist Hospital",
    city: "Ottapalam",
    state: "Kerala",
    region: "South",
    type: "Hospital",
    establishedYear: "1969",
    beds: "120+ Beds",
    tagline: "Premier charitable hospital serving the Palakkad district of Kerala",
    description: "An established multi-specialty institution known for compassionate patient care, surgical departments, emergency care, and strong community outreach.",
    specialties: ["Cardiology", "Neurology", "Orthopaedics", "Pediatrics", "Critical Care & ICU"],
    address: "Kanniyampuram P.O., Ottapalam, Palakkad District, Kerala 679104",
    phone: "+91-466-2244222",
    mapCoords: { x: 34.5, y: 84.5 }
  },
  {
    id: "simla-sanitarium-hospital-shimla",
    name: "Simla Sanitarium & Hospital",
    city: "Shimla",
    state: "Himachal Pradesh",
    region: "North",
    type: "Hospital",
    establishedYear: "1950",
    beds: "50+ Beds",
    tagline: "Historic healthcare institution serving the Himalayan capital",
    description: "Perched in the mountains of Himachal Pradesh, Simla Sanitarium offers patient-focused therapy, emergency healthcare, and preventive wellness programs.",
    specialties: ["Chest & Respiratory Medicine", "General Surgery", "Physiotherapy", "Family Medicine", "Emergency Services"],
    address: "Cart Road, Shimla, Himachal Pradesh 171001",
    phone: "+91-177-2804561",
    mapCoords: { x: 35.0, y: 18.0 }
  },
  {
    id: "sda-hospital-thanjavur",
    name: "Seventh Day Adventist Hospital",
    city: "Thanjavur",
    state: "Tamil Nadu",
    region: "South",
    type: "Hospital",
    establishedYear: "1995",
    beds: "60+ Beds",
    tagline: "Compassionate clinical and maternal care in the Delta region",
    description: "Providing modern, affordable medical diagnostics, surgeries, and community wellness programs for patients throughout Thanjavur and neighboring districts.",
    specialties: ["Obstetrics & Gynaecology", "General Surgery", "Internal Medicine", "Pediatrics", "Emergency Care"],
    address: "V.O.C. Nagar, Trichy Main Road, Thanjavur, Tamil Nadu 613007",
    phone: "+91-4362-277100",
    mapCoords: { x: 41.5, y: 85.0 }
  },
  {
    id: "amh-jengjal-garo-hills",
    name: "Adventist Mission Hospital",
    city: "Jengjal, Garo Hills",
    state: "Meghalaya",
    region: "Northeast",
    type: "Hospital",
    establishedYear: "2019",
    beds: "40+ Beds",
    tagline: "Pioneering frontier healthcare in remote Meghalaya",
    description: "A vital mission hospital delivering modern clinical, trauma, and surgical services to the indigenous tribal populations of the West Garo Hills.",
    specialties: ["Rural & Tribal Health", "Emergency Trauma", "Maternal Care", "General Surgery", "Outreach Clinics"],
    address: "Jengjal, West Garo Hills District, Meghalaya 794102",
    phone: "+91-3651-291010",
    mapCoords: { x: 80.5, y: 41.0 }
  },
  {
    id: "gate-adventist-mission-hospital-falakata",
    name: "GATE Adventist Mission Hospital",
    city: "Falakata",
    state: "West Bengal",
    region: "East",
    type: "Hospital",
    establishedYear: "2021",
    beds: "45+ Beds",
    tagline: "Dedicated mission healthcare in the Dooars corridor of North Bengal",
    description: "Established to overcome geographical barriers and bring wholistic healing to tea garden workers and rural families across the Alipurduar region.",
    specialties: ["General Medicine", "Trauma & Minor Surgery", "Maternity & Newborn Care", "Preventive Health", "Community Pharmacy"],
    address: "Falakata - Madarihat Road, Alipurduar District, Falakata, West Bengal 735211",
    phone: "+91-3563-260114",
    mapCoords: { x: 77.0, y: 35.5 }
  }
];

export const NURSING_COLLEGE = {
  id: "sda-college-of-nursing-ottapalam",
  name: "Seventh Day Adventist College of Nursing",
  city: "Ottapalam",
  state: "Kerala",
  region: "South",
  type: "College of Nursing",
  establishedYear: "2001",
  capacity: "B.Sc & Post-Basic Nursing Programs",
  tagline: "Excellence in nursing education, ethics, and Christian compassionate care",
  description: "A premier nursing education institution recognized by the Indian Nursing Council (INC) and Kerala Nurses and Midwives Council (KNMC), training inspired healthcare professionals.",
  programs: [
    "B.Sc. Nursing (4-Year Degree)",
    "Post Basic B.Sc. Nursing",
    "Clinical Residency & Rotations",
    "Community Health Nursing Practical Training"
  ],
  affiliation: "Affiliated with Kerala University of Health Sciences (KUHS) & Recognized by Indian Nursing Council",
  address: "Kanniyampuram P.O., Ottapalam, Palakkad District, Kerala 679104",
  phone: "+91-466-2244222",
  email: "sdaconottapalam@gmail.com",
  mapCoords: { x: 34.5, y: 84.5 }
};

export const ALL_FACILITIES = [
  ...MEDICAL_TRUST_HOSPITALS,
  NURSING_COLLEGE
];
