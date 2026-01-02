# ☁️ CLOUDFLARE PAGES DEPLOYMENT GUIDE
## Deploy FIJI CAB CONNECT Website

**Deployment Platform:** Cloudflare Pages  
**Domain:** fijicabconnect.com  
**Cost:** FREE (Unlimited bandwidth!)

---

## 🚀 WHY CLOUDFLARE PAGES?

✅ **FREE hosting** with unlimited bandwidth  
✅ **Global CDN** - Fast loading worldwide  
✅ **Automatic HTTPS** - SSL included  
✅ **Git integration** - Auto-deploy on push  
✅ **Custom domains** - Easy DNS setup  
✅ **Edge functions** - For dynamic features

---

## 📋 PREREQUISITES

Before deploying:
- [ ] Website built and tested locally
- [ ] Git repository (GitHub/GitLab/Bitbucket)
- [ ] Cloudflare account (free)
- [ ] Domain registered: fijicabconnect.com

---

## 🎯 DEPLOYMENT STEPS

### Step 1: Push Code to Git

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: FIJI CAB CONNECT website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/fiji-cab-connect.git

# Push
git push -u origin main
```

---

### Step 2: Create Cloudflare Account

1. Go to [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up for **FREE account**
3. Verify email

---

### Step 3: Connect to Cloudflare Pages

1. In Cloudflare dashboard, go to **Pages**
2. Click **"Create a project"**
3. Click **"Connect to Git"**
4. Choose your Git provider (GitHub/GitLab/Bitbucket)
5. Authorize Cloudflare to access your repos
6. Select your repository

---

### Step 4: Configure Build Settings

```yaml
Project name: fiji-cab-connect
Production branch: main

Build settings:
  Framework preset: Next.js (Static Export)
  Build command: npm run build
  Build output directory: out
  
Environment variables:
  NODE_VERSION: 18
  BREVO_API_KEY: [your_brevo_api_key]
  BREVO_SENDER_EMAIL: info@fijicabconnect.com
  BREVO_RECIPIENT_EMAIL: mihussain1984@gmail.com
```

Click **"Save and Deploy"**

---

### Step 5: Wait for Build

- First build takes 2-5 minutes
- Watch build logs for any errors
- Once complete, you'll get a URL: `fiji-cab-connect.pages.dev`

---

### Step 6: Test Deployment

1. Visit your Cloudflare Pages URL
2. Test all pages:
   - Homepage
   - Privacy Policy
   - Terms & Conditions
3. Test contact form
4. Check mobile responsiveness
5. Run Lighthouse audit

---

### Step 7: Connect Custom Domain

#### A. Add Domain to Cloudflare

1. In Cloudflare dashboard, click **"Add site"**
2. Enter: `fijicabconnect.com`
3. Choose **FREE plan**
4. Cloudflare will scan your DNS records

#### B. Update Nameservers

1. Cloudflare will provide 2 nameservers like:
   ```
   brad.ns.cloudflare.com
   rita.ns.cloudflare.com
   ```
2. Go to your domain registrar (where you bought the domain)
3. Update nameservers to Cloudflare's nameservers
4. Wait 24-48 hours for propagation (usually faster)

#### C. Connect Domain to Pages

1. Go to **Pages** → **Your project** → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter: `fijicabconnect.com`
4. Click **"Continue"**
5. Cloudflare will create DNS records automatically

#### D. Add www Subdomain

1. Click **"Set up a custom domain"** again
2. Enter: `www.fijicabconnect.com`
3. Click **"Continue"**

---

### Step 8: Enable HTTPS

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set SSL/TLS encryption mode to **"Full (strict)"**
3. Go to **Edge Certificates**
4. Enable:
   - [ ] Always Use HTTPS
   - [ ] Automatic HTTPS Rewrites
   - [ ] Opportunistic Encryption
   - [ ] TLS 1.3

SSL certificate is **automatic and FREE**! 🎉

---

## 🔄 AUTOMATIC DEPLOYMENTS

Every time you push to `main` branch:
1. Cloudflare detects the push
2. Automatically builds your site
3. Deploys new version
4. Zero downtime!

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Cloudflare auto-deploys!
```

---

## 🌍 CONFIGURE DNS RECORDS

In Cloudflare DNS settings:

```
Type    Name    Content                    Proxy Status
────────────────────────────────────────────────────────
CNAME   @       fiji-cab-connect.pages.dev  Proxied
CNAME   www     fiji-cab-connect.pages.dev  Proxied
```

---

## ⚙️ ENVIRONMENT VARIABLES

Set these in Cloudflare Pages:
1. Go to **Settings** → **Environment variables**
2. Add:

```
Production:
  BREVO_API_KEY: xkeysib-...
  BREVO_SENDER_EMAIL: info@fijicabconnect.com
  BREVO_RECIPIENT_EMAIL: mihussain1984@gmail.com
  NEXT_PUBLIC_SITE_URL: https://fijicabconnect.com
```

---

## 📊 PERFORMANCE OPTIMIZATION

### Enable in Cloudflare:

1. **Speed** → **Optimization**
   - [ ] Auto Minify (CSS, HTML, JS)
   - [ ] Brotli compression
   - [ ] Early Hints

2. **Caching**
   - Cache Level: Standard
   - Browser Cache TTL: 4 hours

3. **Network**
   - [ ] HTTP/2
   - [ ] HTTP/3 (QUIC)
   - [ ] 0-RTT Connection

---

## 🧪 TESTING CHECKLIST

After deployment:

- [ ] Homepage loads correctly
- [ ] All images display
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Privacy page accessible
- [ ] Terms page accessible
- [ ] Mobile responsive
- [ ] HTTPS enabled (lock icon)
- [ ] No console errors
- [ ] Lighthouse score >90

---

## 📈 MONITORING

### Cloudflare Analytics

1. Go to **Analytics & Logs**
2. View:
   - Page views
   - Unique visitors
   - Bandwidth usage
   - Top pages
   - Countries
   - Threats blocked

### Google Analytics (Optional)

Add Google Analytics to `app/layout.tsx`:

```typescript
// Add in <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🚨 TROUBLESHOOTING

### Build Failed

**Check:**
- Node version (use 18+)
- Build command correct: `npm run build`
- Output directory: `out`
- All dependencies in `package.json`

**View build logs:**
Pages → Your project → Deployments → [Latest] → Build log

---

### Domain Not Working

**Check:**
- Nameservers updated at registrar
- 24-48 hours for DNS propagation
- DNS records correct in Cloudflare
- SSL/TLS mode: Full (strict)

**Test DNS:**
```bash
nslookup fijicabconnect.com
```

---

### Contact Form Not Working

**Check:**
- Environment variables set
- API route created
- Brevo API key valid
- Check Cloudflare Functions logs

---

## 💰 COST BREAKDOWN

```
Cloudflare Pages:     FREE ✅
Bandwidth:            UNLIMITED FREE ✅
SSL Certificate:      FREE ✅
CDN:                  FREE ✅
Builds:               500/month (free tier)
                      
Total Monthly:        $0 🎉
```

---

## 🎯 POST-DEPLOYMENT TASKS

- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test on real devices
- [ ] Share with client for approval
- [ ] Set up monitoring alerts
- [ ] Document for client handover

---

## 📞 SUPPORT

**Cloudflare:**
- Community: https://community.cloudflare.com/
- Docs: https://developers.cloudflare.com/pages/

**FIJI CAB CONNECT:**
- Email: mihussain1984@gmail.com
- Phone: +679 9680798

---

## 🎉 YOU'RE LIVE!

Your website is now:
- ✅ Deployed globally
- ✅ Blazing fast (CDN)
- ✅ Secure (HTTPS)
- ✅ Auto-deploying
- ✅ Completely FREE!

**Visit:** https://fijicabconnect.com

---

**Congratulations! 🚀🌐**
