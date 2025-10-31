# RAIX Website - Clean Deployment Package

This is a clean, ready-to-deploy static website for RAIX (Cyber & AI Consultancy).

## What's Included

```
raix-clean-deploy/
├── index.html          # Main website file
├── assets/
│   ├── index-CUCj_SKy.js      # JavaScript bundle
│   ├── index-WURnHpln.css     # CSS styles
│   ├── hero-image.png         # Hero section illustration
│   └── raix-logo.svg          # SVG logo
└── README.md           # This file
```

## Features

✅ **Working Contact Form** - Integrated with Web3Forms (API key: daac3f83-bef1-43b2-9d23-a632900aef97)
✅ **Responsive Design** - Works on all devices
✅ **Brand Colors** - Bright blue background with purple accents
✅ **SVG Logo** - Scalable vector graphics for crisp display
✅ **All Sections** - About, Services, Why Me, Contact

## Deployment Options

### Option 1: GitHub Pages (Recommended - Simplest)

1. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it `raix` (or any name you prefer)
   - Make it Public
   - Don't initialize with README

2. **Push these files**:
   ```bash
   cd raix-clean-deploy
   git init
   git add .
   git commit -m "Initial commit: RAIX website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/raix.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Click Save

4. **Your site will be live at**: `https://YOUR_USERNAME.github.io/raix/`

5. **Point your custom domain** (raix.au):
   - In GitHub Pages settings, add custom domain: `raix.au`
   - In your DNS provider, add a CNAME record:
     - Type: CNAME
     - Name: `@` (or `www`)
     - Value: `YOUR_USERNAME.github.io`

### Option 2: Azure Static Web Apps (Keep Current Setup)

1. **Replace all files in your current repository**
2. **Update workflow file** (`.github/workflows/azure-static-web-apps-*.yml`):
   ```yaml
   app_location: "/"
   skip_app_build: true
   output_location: ""
   ```
3. **Push to main branch**

### Option 3: Netlify (Alternative - Also Very Simple)

1. **Go to** https://app.netlify.com/drop
2. **Drag and drop** the entire `raix-clean-deploy` folder
3. **Your site is live immediately!**
4. **Add custom domain** in Site settings

## Testing Locally

You can test the website locally using any simple HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## Contact Form

The contact form sends submissions to your Web3Forms account. You'll receive emails at the address you configured in Web3Forms.

## Support

If you need to make changes to the website, you can:
- Edit `index.html` directly for content changes
- Modify `assets/index-WURnHpln.css` for styling changes
- Replace images in the `assets/` folder

---

**Created by Manus AI** | Ready to deploy in under 5 minutes!

