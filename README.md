# Adventist Health India — Official Website

Official web application for **The Medical Trust of the Seventh-day Adventists (Adventist Health India)**, an affiliate of the worldwide Church of Seventh-day Adventists (Southern Asia Division).

---

## 🏥 Institutional Scope
- **Operating Authority:** The Medical Trust of the Seventh-day Adventists
- **Legal Status:** Public Charitable Trust bearing **Registration No. 515 of 1999**
- **Parent Body:** General Conference of Seventh-day Adventists, Southern Asia Division
- **Network Scope:** **10 Hospitals** across India + **1 College of Nursing** (Ottapalam, Kerala)

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 18 + JavaScript
- **Build System:** Vite 6
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with custom healthcare palette
- **Iconography:** Lucide React
- **CMS Integration:** Prepared headless client for WordPress REST API (`/wp-json/wp/v2/`)

---

## 🎨 Design System
- **Deep Navy:** `#0c2340` (Hero, headers, structural contrast)
- **Healthcare Blue:** `#0284c7` (Accents, buttons, primary brand blue)
- **Medical Green:** `#16a34a` (Values accent, healthcare vitality)
- **Amber / Gold:** `#d97706` (Heritage flame accent from logo)
- **White / Ice:** `#ffffff` and `#f8fafc` (Clean clinical readability)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

---

## 🔌 WordPress REST API CMS Integration
The client is prepared in `src/services/wordpressApi.js`:
- Endpoint configurable via `VITE_WP_API_URL` in `.env`.
- Supports fetching dynamic posts, categories, pages, and submitting contact forms.
- Features resilient fallback data if the external CMS is offline or undergoing deployment.
