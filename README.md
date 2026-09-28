<div align="center">

<img src="./website_logo.svg" alt="MPM Services" width="220" />

# Melbourne Property Management & Services

### Professional property services website for Melbourne, Victoria

Professional **Steam Cleaning · Strip & Polish · Property Maintenance**

<p>
  <a href="https://mpm-services.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Site-mpm--services.vercel.app-E2231A?style=for-the-badge&logo=vercel&logoColor=white" alt="Live site" />
  </a>
  <a href="./web/">
    <img src="https://img.shields.io/badge/App-Next.js-111111?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js app" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-555555?style=for-the-badge" alt="License" />
  </a>
</p>

</div>

---

## Overview

A modern, responsive website built for **Melbourne Property Management and Services (MPM Services)**.

The website is centred around three core services:

- **Steam Cleaning**
- **Strip & Polish**
- **Property Maintenance**

The goal is to give the business a stronger digital presence while making it simple for visitors to understand the services, explore the work, check coverage, read FAQs, and request a quote.

---

## 🌐 Live Site

### Deployed Website

**https://mpm-services.vercel.app/**

### Business Website

**https://mpmservices.com.au**

---

## ✨ Key Features

### Service-first experience

Each core service has a dedicated page with service information, benefits, process details, FAQs, imagery, and SEO metadata.

### Responsive design

Built for desktop, tablet, and mobile with responsive navigation, mobile actions, flexible layouts, touch-friendly controls, and accessibility-focused interactions.

### 🖼️ Gallery

A service-based gallery with category filtering for:

🧼 **Steam Cleaning**  
✨ **Strip & Polish**  
🔧 **Property Maintenance**

Illustrative imagery is intentionally not presented as verified completed client work.

### 📋 Quote & Contact

Visitors can request a quote, send a contact message, call the business, email the business, and access the company's social channels.

### ♿ Accessibility

The interface includes semantic HTML, keyboard focus states, accessible labels, skip-to-content navigation, appropriate ARIA attributes, and reduced-motion support.

---

## 🔎 SEO

SEO is built into the application architecture.

The project includes:

- Page-specific metadata
- Canonical URLs
- Open Graph metadata
- Twitter cards
- Sitemap generation
- Robots configuration
- Organization structured data
- LocalBusiness structured data
- WebSite structured data
- BreadcrumbList structured data
- FAQPage structured data

Core site and SEO configuration lives in:

~~~text
web/lib/site.ts
web/lib/seo.ts
~~~

---

## 🧱 Project Structure

~~~text
.
├── website_logo.svg
├── LICENSE
├── README.md
│
└── web/
    ├── app/
    │   ├── about/
    │   ├── contact/
    │   ├── faq/
    │   ├── gallery/
    │   ├── privacy/
    │   ├── quote/
    │   ├── reviews/
    │   ├── service-areas/
    │   ├── services/
    │   ├── terms/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── robots.ts
    │   └── sitemap.ts
    │
    ├── components/
    │   ├── forms/
    │   ├── gallery/
    │   ├── layout/
    │   ├── sections/
    │   ├── services/
    │   └── ui/
    │
    ├── lib/
    │   ├── mock-data/
    │   ├── seo.ts
    │   └── site.ts
    │
    ├── public/
    │   └── images/
    │
    ├── next.config.ts
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    └── README.md
~~~

---

## 🛠️ Tech Stack

### Core

<p>
  <img src="https://skillicons.dev/icons?i=nextjs,react,typescript" alt="Next.js React TypeScript" />
</p>

### Development

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,npm,git,github" alt="Node.js npm Git GitHub" />
</p>

### Deployment

<p>
  <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
</p>

### Styling

Custom CSS with a reusable design-token system covering:

~~~text
Colours
Typography
Spacing
Responsive breakpoints
Borders & radii
Shadows
Transitions
Motion
~~~

---

## 🎨 Design Direction

The visual system is built around the MPM Services branding:

~~~text
Primary Red      #E2231A
Strong Red       #C41E16
Dark             #1A1A1A
Warm Background  #FAF9F6
Surface          #FFFFFF
~~~

Typography:

~~~text
Headings → Manrope
Body     → Inter
~~~

The design aims for a professional, clean, warm, and service-focused presentation rather than a generic corporate template.

---

## 📸 Content & Imagery

Service imagery is stored under:

~~~text
web/public/images/
~~~

The current asset library includes imagery for:

- Steam Cleaning
- Strip & Polish
- Property Maintenance
- Gallery
- About / general property work
- Brand identity

Where imagery is illustrative, the site intentionally identifies it as such.

---

## 📍 Service Coverage

The published service-area content currently focuses on:

### Melbourne, VIC, Australia

Additional suburbs can be added once they are verified for publication.

---

## 📞 Business Details

**MPM Services**  
Melbourne, VIC 3000, Australia

**Phone:** +61 451 460 307  
**Email:** info@mpmservices.com.au

**Facebook:**  
https://www.facebook.com/Melbournepropertymanagementandservices/

**Instagram:**  
https://www.instagram.com/mpm_services

---

## 🚀 Getting Started

### Requirements

- Node.js 18+
- npm

### Clone

~~~bash
git clone https://github.com/livelyfun/Melbourne-Property-Management-and-Services-Australia.git
cd Melbourne-Property-Management-and-Services-Australia
~~~

### Enter the web application

~~~bash
cd web
~~~

### Install dependencies

~~~bash
npm install
~~~

### Start development

~~~bash
npm run dev
~~~

Open:

~~~text
http://localhost:3000
~~~

---

## 📦 Available Commands

| Command | Description |
|---|---|
| npm run dev | Start the development server |
| npm run build | Create a production build |
| npm run start | Start the production server |
| npm run lint | Run ESLint |

---

## 🧩 Component Architecture

The application uses reusable React components for consistent behaviour and presentation.

~~~text
Navbar
Footer
MobileBottomBar

Hero
ServicesSection
ResultsSection
WhySection
ProcessSection
ReviewsTeaser
CoverageSection
FaqHomeSection
CtaSection

ServiceCard
GalleryGrid
ImageCard

ContactForm
QuoteForm

PageHeader
SectionHeading
FAQAccordion
Reveal
Icon
~~~

This keeps individual pages focused on composition while shared UI, behaviour, and styling remain reusable.

---

## 🗂️ Content Architecture

Business information, navigation, services, gallery content, FAQs, and service-area data are separated from page composition.

~~~text
web/lib/
├── site.ts
├── seo.ts
└── mock-data/
    ├── services.ts
    ├── gallery.ts
    ├── faqs.ts
    └── service-areas.ts
~~~

This makes content updates easier without restructuring the application.

---

## 📌 Project Status

**Deployed and actively maintainable.**

Current hosted version:

### https://mpm-services.vercel.app/

The project is structured for future additions such as verified customer reviews, additional verified service areas, client-approved photography, production integrations, and further SEO/content improvements.

---

## 📄 License

This repository is released under a proprietary **All Rights Reserved** license.

Source code, design, content, branding, graphics, images, configuration, and other project materials may not be copied, modified, redistributed, republished, or reused without permission from the rights holder.

See [LICENSE](./LICENSE) for the complete terms.

---

<div align="center">

### MPM Services

**Steam Cleaning · Strip & Polish · Property Maintenance**

</div>