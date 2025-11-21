# 🚀 Quick Start Guide

## Get Your Website Live in 10 Minutes

### Step 1: Download & Extract (2 min)
1. Download the website folder
2. Extract to your computer
3. Open Terminal/Command Prompt

### Step 2: Install & Test (3 min)
```bash
cd mancini-website
npm install
npm run dev
```
Visit: http://localhost:3000

**Your website is running locally!** ✅

### Step 3: Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Initial commit - Mancini Tech website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 4: Deploy to Render (3 min)
1. Go to https://render.com (sign up if needed)
2. Click "New +" → "Static Site"
3. Connect your GitHub repo
4. Render auto-detects settings from render.yaml
5. Click "Create Static Site"

**Your website is LIVE!** 🎉

You'll get a URL like: `https://mancini-tech-solutions.onrender.com`

### Step 5: Add Custom Domain (Optional)
1. In Render dashboard, go to Settings
2. Click "Custom Domain"
3. Add: `www.mancinitechsolutions.com`
4. Follow DNS instructions
5. SSL certificate auto-generates

---

## Customization Checklist

### Content Updates
- [ ] Update email in Footer.jsx: `jon@mancinitechsolutions.com`
- [ ] Update phone in Footer.jsx: `(555) 123-4567`
- [ ] Replace social media links in Footer.jsx
- [ ] Update About section with your actual story
- [ ] Add real portfolio project images
- [ ] Adjust pricing if needed

### Branding
- [ ] Consider updating color scheme in tailwind.config.js
- [ ] Add your logo image to replace the "M" icon
- [ ] Update meta tags in index.html

### Functionality
- [ ] Set up contact form backend (EmailJS, Formspree, etc.)
- [ ] Integrate real AI chat (Voiceflow, Claude API, Chatbase)
- [ ] Add Google Analytics
- [ ] Set up email newsletter (Mailchimp, ConvertKit)

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
git add .
git commit -m "Update content"
git push             # Auto-deploys to Render
```

---

## Need Help?

**Issues with setup?**
- Make sure Node.js 18+ is installed
- Try `npm install --legacy-peer-deps` if install fails
- Check README.md for detailed troubleshooting

**Want to customize?**
- All components are in `/src/components/`
- Edit text, colors, and content directly
- Changes auto-refresh in dev mode

**Ready to add AI features?**
- See README.md "Next Steps - AI Integration"
- Start with Chatbase for easiest setup
- Move to Claude API for full control

---

**Your new website is ready to go! 🎊**

Just follow the 4 steps above and you'll be live in minutes.
