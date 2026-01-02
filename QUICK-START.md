# 🚀 QUICK START GUIDE
## Get Your Marketing Website Running in 30 Minutes

**For:** FIJI CAB CONNECT Marketing Website  
**Goal:** Get development environment setup and running

---

## ⚡ 30-MINUTE SETUP

### **STEP 1: Navigate to Project Folder** (2 min)

```bash
# Open PowerShell and navigate to project
cd D:\Projects\10_Recycle\FCC\FIJI-CAB-CONNECT\04-MARKETING-WEBSITE
```

---

### **STEP 2: Initialize Next.js Project** (5 min)

```bash
# Create Next.js app with TypeScript and Tailwind
npx create-next-app@latest . --typescript --tailwind --app --no-src

# Answer prompts:
# ✔ Would you like to use TypeScript? › Yes
# ✔ Would you like to use ESLint? › Yes  
# ✔ Would you like to use Tailwind CSS? › Yes
# ✔ Would you like to use `src/` directory? › No
# ✔ Would you like to use App Router? › Yes
# ✔ Would you like to customize the default import alias? › No
```

**Wait for installation to complete...**

---

### **STEP 3: Install Additional Packages** (2 min)

```bash
# Install Heroicons for icons
npm install @heroicons/react
```

---

### **STEP 4: Start Development Server** (1 min)

```bash
# Start the dev server
npm run dev
```

**Open browser:** http://localhost:3000

✅ You should see the default Next.js welcome page!

---

### **STEP 5: Create Folder Structure** (5 min)

```bash
# Create component folders
mkdir components
mkdir components\layout
mkdir components\home
mkdir components\forms
mkdir components\ui

# Create lib folder
mkdir lib

# Create public subfolders
mkdir public\logo
mkdir public\images
```

---

### **STEP 6: Create Design Tokens File** (5 min)

Create file: `lib/design-tokens.ts`

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
}

export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
  body: 'text-base md:text-lg leading-relaxed',
}

export const spacing = {
  section: 'py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16',
  card: 'p-6 md:p-8',
}
```

---

### **STEP 7: Update Tailwind Config** (3 min)

Edit `tailwind.config.ts`:

```typescript
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

### **STEP 8: Configure Next.js for Static Export** (2 min)

Edit `next.config.js`:

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

### **STEP 9: Add Google Font** (3 min)

Edit `app/layout.tsx` (find it and update the import):

```typescript
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

// In the return statement, update the html tag:
<html lang="en" className={plusJakarta.variable}>
```

---

### **STEP 10: Test Everything** (2 min)

```bash
# Restart dev server (Ctrl+C then restart)
npm run dev

# Open in browser
# http://localhost:3000

# Check for errors in terminal
```

✅ **If no errors, you're ready to start building!**

---

## 📋 WHAT YOU'VE ACCOMPLISHED

After these 30 minutes, you have:

- ✅ Next.js 14 project initialized
- ✅ TypeScript configured
- ✅ Tailwind CSS setup with brand colors
- ✅ Plus Jakarta Sans font loaded
- ✅ Project folder structure created
- ✅ Design tokens defined
- ✅ Development server running
- ✅ Ready to build components!

---

## 🎯 WHAT'S NEXT?

### **Option 1: Continue Setup (Recommended)**

Follow the DEVELOPMENT-ROADMAP.md:
- Day 1-2: Build layout components (Header, Footer)
- Day 3-5: Build homepage sections
- Day 6-7: Add forms and polish

### **Option 2: Test Build**

```bash
# Build the site
npm run build

# Preview the built site
npx serve out
```

### **Option 3: Ask for Help**

If you're stuck or have questions, report back with:
- What step you completed
- What errors you're seeing (if any)
- Screenshots if helpful

---

## 🛠️ COMMON ISSUES & FIXES

### **Issue: "npx: command not found"**

**Fix:** Node.js not installed. Install from: https://nodejs.org/

---

### **Issue: Port 3000 already in use**

**Fix:** 
```bash
# Kill the process using port 3000
# Or use a different port:
npm run dev -- -p 3001
```

---

### **Issue: Module not found errors**

**Fix:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

---

### **Issue: Tailwind styles not working**

**Fix:**
1. Make sure you saved `tailwind.config.ts`
2. Restart dev server
3. Clear browser cache

---

## ✅ VERIFICATION CHECKLIST

Before moving forward, verify:

- [ ] `npm run dev` starts without errors
- [ ] Can access http://localhost:3000
- [ ] No red errors in terminal
- [ ] Browser console has no errors
- [ ] Folder structure created
- [ ] `lib/design-tokens.ts` exists
- [ ] Tailwind config updated
- [ ] Next.js config updated
- [ ] Font is loading (check in browser DevTools)

---

## 📞 NEED HELP?

**Stuck on a step?** Report back with:

```
Step Number: [which step]
Error Message: [paste error]
What I tried: [what you did]
Screenshot: [if helpful]
```

---

## 🚀 YOU'RE READY!

Once you complete these 30 minutes of setup, you're ready to start building the actual website!

**Next:** Read DEVELOPMENT-ROADMAP.md and start Day 1 tasks.

**Good luck!** 🌐

---

**END OF QUICK START GUIDE**
