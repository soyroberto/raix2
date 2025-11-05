# RAIX Website - Manual Deployment Guide

Simple workflow for adding blog posts and deploying to Netlify.

## 🎯 Overview

This is a **pre-built static website**. No build process needed on Netlify - just drag and drop!

## 📝 Adding a New Blog Post

### Step 1: Create Markdown File

1. Go to the `posts/` folder
2. Create a new `.md` file (e.g., `my-new-post.md`)
3. Use this template:

```markdown
---
title: Your Post Title
excerpt: Brief summary of your post
author: Roberto
date: 2025-01-20
category: Copilot Studio
image: /hero-image.png
---

# Your Post Title

Your content here...

## Section 1

More content...
```

### Step 2: Convert to JSON

Run the conversion script:

```bash
node convert-posts.js
```

This will:
- Read all `.md` files from `posts/` folder
- Convert them to HTML
- Generate `assets/posts.json`

### Step 3: Deploy to Netlify

**Option A: Drag and Drop (Easiest)**
1. Go to https://app.netlify.com/sites/timely-hotteok-de187e/deploys
2. Drag the entire `raix-manual-deploy` folder onto the page
3. Wait 10 seconds - done!

**Option B: Git (If you prefer)**
1. Push files to your GitHub repository
2. Configure Netlify to deploy from the repository **without building**
3. Set publish directory to `/` (root)
4. Leave build command empty

## 📁 File Structure

```
raix-manual-deploy/
├── index.html              # Main page
├── assets/
│   ├── posts.json         # Generated blog posts (DO NOT EDIT MANUALLY)
│   ├── *.css              # Styles
│   └── *.js               # JavaScript
├── posts/
│   ├── _template.md       # Template for new posts
│   ├── post-1.md          # Your blog posts
│   └── post-2.md
├── convert-posts.js        # Conversion script
├── hero-image.png          # Images
├── raix-logo.svg
└── DEPLOY.md               # This file
```

## 🔄 Complete Workflow Example

```bash
# 1. Add a new blog post
cat > posts/my-new-post.md << 'EOF'
---
title: My New Post
excerpt: This is my new post
author: Roberto
date: 2025-01-20
category: Cybersecurity
---

# My New Post

Content here...
EOF

# 2. Convert to JSON
node convert-posts.js

# 3. Deploy to Netlify
# Go to Netlify and drag-and-drop the folder
```

## ✅ Checklist Before Deploying

- [ ] Created/edited `.md` file in `posts/` folder
- [ ] Ran `node convert-posts.js`
- [ ] Verified `assets/posts.json` was updated
- [ ] Deployed folder to Netlify

## 🎨 Blog Post Template

See `posts/_template.md` for a complete example with:
- Proper frontmatter format
- Markdown formatting examples
- Writing tips
- SEO guidelines

## 📋 Frontmatter Fields

| Field | Required | Example | Description |
|-------|----------|---------|-------------|
| `title` | Yes | `Getting Started with Copilot Studio` | Post title |
| `excerpt` | Yes | `Learn how to...` | Brief summary (1-2 sentences) |
| `author` | Yes | `Roberto` | Author name |
| `date` | Yes | `2025-01-20` | Publication date (YYYY-MM-DD) |
| `category` | Yes | `Copilot Studio` | Category for filtering |
| `image` | No | `/hero-image.png` | Featured image |

## 📂 Categories

Use one of these categories:
- **Copilot Studio** - Microsoft Copilot Studio content
- **Cybersecurity** - Security best practices and tips
- **AI & Automation** - AI tools and workflow automation

## 🚫 What NOT to Do

- ❌ Don't edit `assets/posts.json` manually
- ❌ Don't try to build on Netlify (it's pre-built)
- ❌ Don't forget to run `convert-posts.js` after editing posts
- ❌ Don't use special characters in filenames

## 🆘 Troubleshooting

### Posts not showing up?
1. Check if you ran `convert-posts.js`
2. Verify `assets/posts.json` exists and contains your posts
3. Make sure you deployed the updated files

### Conversion script errors?
1. Check frontmatter format (must be between `---`)
2. Ensure all required fields are present
3. Check for typos in field names

### Netlify deployment issues?
1. Make sure you're deploying the entire folder
2. Don't set a build command - it's pre-built!
3. Set publish directory to `/` or leave empty

## 🎯 Quick Reference

**Add post:**
1. Create `.md` file in `posts/`
2. Run `node convert-posts.js`
3. Deploy to Netlify

**That's it!** No complex build process, no dependencies, just simple files.

## 📞 Need Help?

Check the template file: `posts/_template.md`

---

**Live Site:** https://raix.au
**Netlify Dashboard:** https://app.netlify.com/sites/timely-hotteok-de187e

