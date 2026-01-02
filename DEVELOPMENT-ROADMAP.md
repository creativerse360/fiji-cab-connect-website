# 🌐 MARKETING WEBSITE - DEVELOPMENT ROADMAP
## FIJI CAB CONNECT - Step-by-Step Implementation Guide

**Date Started:** January 2, 2026  
**Target Completion:** January 23, 2026 (3 weeks)  
**Investment:** ₹21,500  
**Status:** 🚀 READY TO START

---

## 📋 QUICK PROJECT INFO

```yaml
Project Name: FIJI CAB CONNECT Marketing Website
Domain: fijicabconnect.com
Tech Stack: Next.js 14 + TypeScript + Tailwind CSS
Deployment: Static Export (Netlify/Vercel)
Timeline: 3 weeks (21 days)
```

---

## 🎯 PROJECT GOALS

1. ✅ **Establish Online Presence** - Professional website for Fiji market
2. ✅ **Generate Driver Leads** - Collect applications from drivers
3. ✅ **Build Trust** - Showcase safety, reliability, and transparency
4. ✅ **SEO Foundation** - Rank for "taxi fiji", "cab booking fiji"
5. ✅ **Mobile-First** - Perfect experience on all devices

---

## 📊 WEEK-BY-WEEK BREAKDOWN

### **WEEK 1: FOUNDATION & SETUP** (Days 1-7)

```
✅ Day 1: Project Setup
   - Initialize Next.js project
   - Install dependencies
   - Configure Tailwind CSS
   - Setup design tokens
   - Create folder structure

✅ Day 2: Design System
   - Implement brand colors
   - Setup typography (Plus Jakarta Sans)
   - Create reusable components (buttons, cards)
   - Add Heroicons

✅ Day 3: Layout Components
   - Build Header component (navigation)
   - Build Footer component
   - Add mobile menu (hamburger)
   - Setup routing

✅ Day 4-5: Homepage - Part 1
   - Hero section (headline, CTAs, background)
   - How It Works section (3 steps)
   - Features section (4-6 cards)

✅ Day 6-7: Homepage - Part 2
   - For Drivers section
   - Contact form implementation
   - Service areas (optional)
   - Final CTA section
```

---

### **WEEK 2: CONTENT & POLISH** (Days 8-14)

```
✅ Day 8: Legal Pages
   - Privacy Policy page
   - Terms & Conditions page
   - Cookie policy (optional)

✅ Day 9: Content Review
   - Replace all placeholder text
   - Proofread entire site
   - Check grammar and spelling
   - Verify all content follows brand voice

✅ Day 10: SEO Implementation
   - Add metadata to all pages
   - Implement schema markup
   - Generate sitemap.xml
   - Configure robots.txt
   - Add Open Graph images

✅ Day 11: Form Integration
   - Connect contact form to email service
   - Add validation
   - Success/error messages
   - Test submissions

✅ Day 12: Mobile Optimization
   - Test on 375px (iPhone SE)
   - Test on 768px (iPad)
   - Fix spacing issues
   - Optimize touch targets
   - Test mobile menu

✅ Day 13-14: Cross-Browser Testing
   - Chrome (desktop + mobile)
   - Safari (desktop + iOS)
   - Firefox
   - Edge
   - Fix any issues
```

---

### **WEEK 3: DEPLOYMENT & LAUNCH** (Days 15-21)

```
✅ Day 15: Performance Optimization
   - Optimize images (WebP, compression)
   - Lazy loading implementation
   - Run Lighthouse audit
   - Fix performance issues
   - Target: 90+ score

✅ Day 16: Accessibility Audit
   - WCAG AA compliance check
   - Add skip links
   - Verify keyboard navigation
   - Test with screen reader
   - Fix contrast issues

✅ Day 17: Domain Setup
   - Register fijicabconnect.com
   - Configure DNS
   - Setup email forwarding
   - SSL certificate

✅ Day 18: Deployment
   - Build production version
   - Deploy to hosting (Netlify/Vercel)
   - Verify deployment
   - Test live site

✅ Day 19: Post-Launch Setup
   - Google Search Console
   - Submit sitemap
   - Google Analytics setup
   - Monitor for errors

✅ Day 20: Final Testing
   - Test all forms
   - Test all links
   - Test on real devices
   - Fix any bugs

✅ Day 21: Client Handover
   - Documentation
   - Training session (30 min)
   - Final approval
   - LAUNCH! 🚀
```

---

## 🛠️ TECHNICAL SETUP GUIDE

### **STEP 1: Initialize Project**

```bash
# Navigate to marketing website folder
cd FIJI-CAB-CONNECT/04-MARKETING-WEBSITE

# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --app --no-src

# Install dependencies
npm install

# Install additional packages
npm install @heroicons/react
npm install @types/node @types/react @types/react-dom
```

**Configuration during setup:**
- ✅ TypeScript: Yes
- ✅ ESLint: Yes
- ✅ Tailwind CSS: Yes
- ✅ App Router: Yes
- ✅ Import alias: Yes (@/*)

---

### **STEP 2: Project Structure**

Create this folder structure:

```
04-MARKETING-WEBSITE/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Sitemap generator
│   ├── robots.ts               # Robots.txt generator
│   │
│   ├── privacy/
│   │   └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── ForDrivers.tsx
│   │   └── ContactCTA.tsx
│   │
│   ├── forms/
│   │   └── ContactForm.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
│
├── lib/
│   ├── design-tokens.ts        # Brand colors, fonts, spacing
│   ├── schemas.ts              # Schema.org markup
│   └── utils.ts                # Helper functions
│
├── public/
│   ├── logo/
│   │   ├── logo-horizontal.svg
│   │   ├── logo-icon.svg
│   │   └── logo-white.svg
│   │
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   └── og-image.jpg
│   │
│   ├── favicon.ico
│   └── robots.txt
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

### **STEP 3: Configure Design Tokens**

Create `lib/design-tokens.ts`:

```typescript
// FIJI CAB CONNECT Design Tokens
export const colors = {
  primary: {
    main: '#10b981',      // Emerald Green
    hover: '#059669',
    light: '#d1fae5',
    dark: '#047857',
  },
  secondary: {
    main: '#0891b2',      // Ocean Blue
    hover: '#0e7490',
    light: '#cffafe',
    dark: '#155e75',
  },
  accent: {
    main: '#f59e0b',      // Amber Gold
    hover: '#d97706',
    light: '#fef3c7',
    dark: '#b45309',
  },
  neutral: {
    darkest: '#1f2937',
    dark: '#374151',
    medium: '#6b7280',
    light: '#d1d5db',
    lighter: '#f3f4f6',
    lightest: '#f9fafb',
    white: '#ffffff',
  },
}

export const typography = {
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
  small: 'text-sm md:text-base',
}

export const spacing = {
  section: 'py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16',
  card: 'p-6 md:p-8',
  grid: 'gap-6 md:gap-8 lg:gap-12',
}

export const components = {
  card: 'bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300',
  button: {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200',
    secondary: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200',
    accent: 'bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200',
  },
}
```

---

### **STEP 4: Configure Tailwind**

Update `tailwind.config.js`:

```javascript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981',
          hover: '#059669',
          light: '#d1fae5',
          dark: '#047857',
        },
        secondary: {
          DEFAULT: '#0891b2',
          hover: '#0e7490',
          light: '#cffafe',
          dark: '#155e75',
        },
        accent: {
          DEFAULT: '#f59e0b',
          hover: '#d97706',
          light: '#fef3c7',
          dark: '#b45309',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

### **STEP 5: Configure Next.js**

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // SEO-friendly URLs
}

module.exports = nextConfig
```

---

## 📄 PAGE CONTENT OUTLINE

### **1. HOMEPAGE**

#### Hero Section:
```
Headline: "Ride Anywhere in Fiji"
Subheadline: "Fast, safe, and affordable rides across the Fiji Islands. Book in seconds."

CTAs:
- "Download App" (primary) → Links to Phase 1 app
- "Become a Driver" (secondary) → Scrolls to driver section

Background: Gradient (emerald green to ocean blue) or Fiji beach image
```

#### How It Works (3 Steps):
```
1. Book Your Ride
   Icon: MapPinIcon (Heroicons)
   Text: "Enter pickup and drop-off locations. Get instant fare estimate."

2. Driver Accepts
   Icon: UserIcon
   Text: "Get matched with verified local drivers. See their details and ratings."

3. Reach Your Destination
   Icon: CheckCircleIcon
   Text: "Track your driver in real-time and arrive safely."
```

#### Features (6 Cards):
```
1. Safe & Verified Drivers (ShieldCheckIcon)
2. Transparent Pricing (CurrencyDollarIcon)
3. 24/7 Availability (ClockIcon)
4. Local Drivers (MapIcon)
5. Real-Time Tracking (SignalIcon)
6. Easy Booking (DevicePhoneMobileIcon)
```

#### For Drivers Section:
```
Headline: "Drive with Fiji Cab Connect"
Description: "Earn on your schedule. Join Fiji's fastest-growing ride-hailing platform."

Benefits:
- Flexible working hours
- Weekly payouts
- Grow your income
- Be your own boss
- Full support from our team

CTA: "Apply as Driver" → Contact form
```

#### Service Areas:
```
"Currently serving major destinations in Viti Levu:
• Nadi (Airport)
• Suva
• Lautoka
• Nausori
• Denarau
• Sigatoka

Expanding across Fiji Islands soon!"
```

---

### **2. PRIVACY POLICY PAGE**

Content structure:
```
- Informational Notice Disclaimer
- What Information We Collect
- How We Use Your Information
- Data Storage and Security
- Your Rights
- Contact Information
- Last Updated Date
```

**Tone:** Clear, simple, informational (not legally binding)

---

### **3. TERMS & CONDITIONS PAGE**

Content structure:
```
- Informational Notice Disclaimer
- Services Provided "As-Is"
- User Responsibilities
- Prohibited Activities
- Limitation of Liability
- Changes to Terms
- Contact Information
- Last Updated Date
```

**Tone:** Clear, simple, informational (not legally binding)

---

## 🎨 DESIGN SPECIFICATIONS

### Color Usage:

```
Primary (Emerald Green #10b981):
✅ Primary CTAs ("Book Now", "Download App")
✅ Active navigation items
✅ Success messages
✅ Logo accent

Secondary (Ocean Blue #0891b2):
✅ Secondary CTAs ("Become a Driver")
✅ Links
✅ Info messages
✅ Section accents

Accent (Amber Gold #f59e0b):
✅ "Book Now" urgent CTAs
✅ Pricing highlights
✅ Special offers
```

### Typography:

```
Font: Plus Jakarta Sans (Google Fonts)

Headings:
- H1: 56px (desktop), 36px (mobile), Bold 700
- H2: 40px (desktop), 28px (mobile), Bold 700
- H3: 32px (desktop), 24px (mobile), Semibold 600

Body:
- Large: 18px (lead paragraphs)
- Regular: 16px (standard text)
- Small: 14px (captions, fine print)

Line Heights:
- Headings: 1.2
- Body: 1.5
```

### Spacing:

```
Section Padding:
- Desktop: 96px top/bottom
- Mobile: 64px top/bottom

Component Spacing:
- Between sections: 80px
- Between cards: 32px
- Card padding: 32px
```

---

## 🔍 SEO IMPLEMENTATION

### Every Page Must Have:

```typescript
export const metadata: Metadata = {
  title: '[Page Title] | FIJI CAB CONNECT',
  description: '[150-160 character description with keywords]',
  keywords: 'fiji taxi, cab booking fiji, nadi taxi, suva taxi, fiji transport',
  openGraph: {
    title: '[Page Title]',
    description: '[Description]',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://fijicabconnect.com/[page-url]',
  },
}
```

### Target Keywords:

```
Primary:
- "fiji taxi"
- "cab booking fiji"
- "nadi taxi"
- "suva taxi"

Secondary:
- "ride hailing fiji"
- "fiji transport"
- "taxi service fiji"
- "book cab fiji"
```

---

## ✅ QUALITY CHECKLIST

### Before Launch:

#### Content:
- [ ] All placeholder text replaced
- [ ] No "Lorem ipsum"
- [ ] Spell check completed
- [ ] Grammar check completed
- [ ] All links working
- [ ] Contact info verified
- [ ] Brand voice consistent

#### Design:
- [ ] Colors match brand exactly
- [ ] Typography consistent
- [ ] Icons (not numbers) used
- [ ] Images optimized (WebP)
- [ ] Spacing consistent
- [ ] Mobile responsive

#### Technical:
- [ ] All pages have metadata
- [ ] Schema markup added
- [ ] sitemap.xml generated
- [ ] robots.txt configured
- [ ] Forms working
- [ ] 404 page exists
- [ ] Favicon added
- [ ] SSL certificate active

#### Performance:
- [ ] Lighthouse score >90
- [ ] Page load <3 seconds
- [ ] Images lazy loaded
- [ ] Core Web Vitals passing

#### Accessibility:
- [ ] WCAG AA compliant
- [ ] Keyboard navigation works
- [ ] Skip to main content link
- [ ] Alt text on all images
- [ ] Color contrast passes
- [ ] Focus indicators visible

#### SEO:
- [ ] Google Search Console setup
- [ ] Sitemap submitted
- [ ] Meta descriptions on all pages
- [ ] Alt text on images
- [ ] Heading hierarchy correct
- [ ] Canonical URLs set

---

## 🚀 DEPLOYMENT GUIDE

### Option 1: Netlify (Recommended)

```bash
# 1. Build the site
npm run build

# 2. Deploy to Netlify
# - Connect GitHub repo
# - Build command: npm run build
# - Publish directory: out
# - Auto-deploy on push

# 3. Configure domain
# - Add custom domain: fijicabconnect.com
# - SSL automatically provisioned
```

### Option 2: Vercel

```bash
# 1. Build the site
npm run build

# 2. Deploy to Vercel
# - Install Vercel CLI: npm i -g vercel
# - Run: vercel
# - Follow prompts

# 3. Configure domain
# - Add domain in Vercel dashboard
# - Update DNS records
```

---

## 📊 POST-LAUNCH MONITORING

### Week 1 After Launch:

```
✅ Monitor Google Analytics
   - Track unique visitors
   - Track page views
   - Track time on site

✅ Check Google Search Console
   - Monitor indexing
   - Check for crawl errors
   - View search queries

✅ Test Contact Form
   - Submit test inquiry
   - Verify email received
   - Check response time

✅ Monitor Performance
   - Run daily Lighthouse audits
   - Check Core Web Vitals
   - Monitor uptime

✅ Gather Feedback
   - Ask 5 people to use the site
   - Note any confusion
   - Fix critical issues
```

---

## 💰 COST BREAKDOWN

```
Logo Design:             ₹5,000
Website Development:     ₹15,000
Domain (1 year):         ₹1,500
-----------------------------------
TOTAL:                   ₹21,500

INCLUDED:
✅ 3 logo concepts + revisions
✅ Complete website (3 pages)
✅ Contact form setup
✅ SEO optimization
✅ Mobile responsive
✅ SSL certificate (free)
✅ 1 month hosting (free tier)
✅ Domain setup
✅ 30-min training session
```

---

## 🎯 SUCCESS METRICS

### Month 1 Goals:

```
Traffic:
- 500+ unique visitors
- 50% from organic search
- Average 2-3 pages per session

Engagement:
- Average time on site: 2+ minutes
- Bounce rate: <60%

Conversions:
- 20+ driver inquiries
- 10+ contact form submissions

SEO:
- Indexed in Google
- Appear for "fiji taxi" searches
- 5+ organic keywords ranking
```

---

## 📞 SUPPORT & RESOURCES

### Helpful Links:

```
Documentation:
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Heroicons: https://heroicons.com

SEO Tools:
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev

Design:
- Google Fonts: https://fonts.google.com/specimen/Plus+Jakarta+Sans
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/
```

---

## 🚀 READY TO START?

### Your Next Steps:

```
1. ✅ Read this roadmap completely
2. ✅ Setup development environment
3. ✅ Initialize Next.js project
4. ✅ Create design tokens
5. ✅ Start with Week 1, Day 1 tasks
6. ✅ Report progress daily
7. ✅ Ask questions when stuck
```

---

## 💪 YOU GOT THIS!

This is a clear, step-by-step plan. Follow it day by day, and in 3 weeks you'll have a professional, high-performing marketing website for FIJI CAB CONNECT.

**Remember:**
- ✅ One step at a time
- ✅ Test as you build
- ✅ Mobile-first always
- ✅ SEO from day one
- ✅ Quality over speed

**Good luck! Let's build something great!** 🌐🚖

---

**END OF DEVELOPMENT ROADMAP**
