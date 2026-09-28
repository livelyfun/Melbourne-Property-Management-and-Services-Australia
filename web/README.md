# MPM Services Web Application

This directory contains the web application for **Melbourne Property Management and Services (MPM Services)**.

## 🌐 Live Site

**https://mpm-services.vercel.app/**

## 🛠️ Stack

- Next.js 16
- React 19
- TypeScript
- Custom CSS design system
- Vercel deployment

## 🧭 Routes

~~~text
/
├── /about
├── /contact
├── /faq
├── /gallery
├── /privacy
├── /quote
├── /reviews
├── /service-areas
├── /services
│   └── /services/[slug]
└── /terms
~~~

## 🎯 Core Services

- Steam Cleaning
- Strip & Polish
- Property Maintenance

## 🚀 Development

From the web directory:

~~~bash
npm install
npm run dev
~~~

Then open:

~~~text
http://localhost:3000
~~~

## 📦 Production

~~~bash
npm run build
npm run start
~~~

## 🧱 Structure

~~~text
web/
├── app/          # Routes and page-level configuration
├── components/  # Reusable UI and page sections
├── lib/          # Site configuration, SEO and content
├── public/       # Images and static assets
└── package.json
~~~

## 🔎 SEO

The application includes page metadata, canonical URLs, Open Graph data, sitemap and robots configuration, and structured data for the business, website, breadcrumbs, and FAQs.

## 📄 License

The project is covered by the proprietary **All Rights Reserved** license defined in the repository root: [LICENSE](../LICENSE).