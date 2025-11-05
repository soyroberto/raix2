# RAIX Website - Markdown Blog System

Complete source code for the RAIX website with Markdown-based blog system.

## 🚀 Quick Deploy to Netlify

### Option 1: Connect to GitHub (Recommended)

1. **Push this code to your GitHub repository:**
   ```bash
   cd /path/to/raix-markdown-blog
   git init
   git add .
   git commit -m "Initial commit with Markdown blog system"
   git remote add origin https://github.com/soyroberto/raix.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect Netlify to GitHub:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your `raix` repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Configure custom domain:**
   - In Netlify dashboard → Domain settings
   - Add `raix.au` as custom domain
   - Update DNS as instructed

### Option 2: Manual Deploy

1. Build the site:
   ```bash
   pnpm install
   pnpm build
   ```

2. Deploy `dist/public` folder to Netlify via drag-and-drop

## 📝 Adding New Blog Posts

See **[BLOG_GUIDE.md](BLOG_GUIDE.md)** for complete instructions.

**Quick start:**
1. Create a new `.md` file in `posts/` folder
2. Use the template from `posts/_template.md`
3. Commit and push to GitHub
4. Netlify automatically builds and deploys

## 📁 Project Structure

```
raix-markdown-blog/
├── posts/                          # Markdown blog posts
│   ├── _template.md               # Blog post template
│   ├── getting-started-copilot-studio.md
│   ├── cybersecurity-essentials-2025.md
│   └── ai-workflow-automation.md
├── scripts/
│   └── generate-posts.js          # Converts .md to JSON
├── client/                         # React source code
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Homepage
│   │   │   ├── Blog.tsx           # Blog listing
│   │   │   └── BlogPost.tsx       # Individual post
│   │   └── generated/
│   │       └── posts.json         # Generated from .md files
│   └── public/                     # Static assets
├── package.json                    # Dependencies and scripts
├── netlify.toml                    # Netlify configuration
├── BLOG_GUIDE.md                   # Complete blogging guide
└── README.md                       # This file
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Generate blog posts from Markdown
npm run generate:posts

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## 📚 Documentation

- **[BLOG_GUIDE.md](BLOG_GUIDE.md)** - Complete guide for adding and managing blog posts
- **[posts/_template.md](posts/_template.md)** - Blog post template with examples

## ✨ Features

- ✅ Markdown-based blog posts
- ✅ Automatic post generation
- ✅ Search functionality
- ✅ Category filtering
- ✅ LinkedIn sharing
- ✅ Working contact form (Web3Forms)
- ✅ Responsive design
- ✅ SEO-friendly
- ✅ Auto-deployment via Netlify

## 🔧 Technologies

- **Frontend:** React 18, Vite 7, Tailwind CSS 4
- **Blog System:** Markdown, gray-matter, marked
- **Deployment:** Netlify
- **Form:** Web3Forms

## 📞 Support

For questions or issues, refer to the [BLOG_GUIDE.md](BLOG_GUIDE.md) or contact Roberto.

---

**Live Site:** https://raix.au

