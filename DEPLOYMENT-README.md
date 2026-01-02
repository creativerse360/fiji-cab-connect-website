# 🚀 FIJI CAB CONNECT - Deployment Guide

This is the marketing website for **FIJI CAB CONNECT** - Fiji's first cab-hailing platform.

## 📋 Quick Info

- **Live Website:** [fijicabconnect.com](https://fijicabconnect.com)
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages (Recommended) or Vercel

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 🚀 Deployment Options

### **Option 1: Cloudflare Pages (RECOMMENDED)** ⭐

**Why Cloudflare?**
- ✅ Fast CDN (best for Fiji)
- ✅ Free SSL
- ✅ Automatic deployments from GitHub
- ✅ Free tier is generous

**Steps:**
1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub account
4. Select this repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Framework preset:** Next.js (Static HTML Export)
6. Deploy!

**Environment Variables (if needed):**
```
NEXT_PUBLIC_CONTACT_EMAIL=info@fijicabconnect.com
NEXT_PUBLIC_PHONE=+679 9680798
```

---

### **Option 2: Vercel (Alternative)**

**Steps:**
1. Push this repo to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Deploy!

---

## 📧 Contact Form Setup

The contact form uses **Brevo** for email delivery. You'll need to:

1. Create a Brevo account (free tier available)
2. Get your API key
3. Add to Cloudflare Pages environment variables:
   ```
   BREVO_API_KEY=your_api_key_here
   ```

See `BREVO-SETUP-GUIDE.md` for detailed instructions.

---

## 🔗 Custom Domain Setup

### **On Cloudflare Pages:**
1. Go to your Pages project
2. Click "Custom domains"
3. Add `fijicabconnect.com` and `www.fijicabconnect.com`
4. Update your domain's DNS settings as instructed

---

## 📱 Testing

Before deploying, test locally:

```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

---

## 🐛 Troubleshooting

### Build fails on Cloudflare Pages
- Make sure Node.js version is set to `18` or higher
- Check that all dependencies are in `package.json`

### Contact form not working
- Verify Brevo API key is set correctly
- Check Brevo account email sending limits

---

## 📞 Support

For questions or issues:
- **Email:** info@fijicabconnect.com
- **Phone:** +679 9680798

---

## 📄 License

ISC - © 2026 FIJI CAB CONNECT. All rights reserved.
