# RAIX Website with Blog - Deployment Package

Updated RAIX website now includes a fully functional blog section!

## What's New

### Blog Features
- **Blog Listing Page** (`/blog`) - Grid view of all blog posts
- **Individual Post Pages** (`/blog/{post-id}`) - Full blog post content
- **Search Functionality** - Search posts by title and content
- **Category Filters** - Filter by Copilot Studio, Cybersecurity, AI & Automation
- **LinkedIn Sharing** - Share posts directly to LinkedIn
- **Comments Section** - Placeholder for future comment integration

### Sample Blog Posts Included
1. **Getting Started with Microsoft Copilot Studio** - Comprehensive guide for Australian businesses
2. **Cybersecurity Essentials for Australian Businesses in 2025** - Best practices and Essential Eight framework
3. **Automating Business Workflows with AI** - Practical examples and ROI insights

## File Structure

```
raix-with-blog/
├── index.html                      # Main website
├── assets/
│   ├── index-BbDnSrII.js          # JavaScript bundle (includes blog)
│   ├── index-Cz79VI6j.css         # CSS styles
│   ├── hero-image.png             # Hero illustration
│   └── raix-logo.svg              # SVG logo
└── README.md                       # This file
```

## Deployment to Netlify

### Quick Update (Recommended)

1. **Go to your Netlify dashboard**: https://app.netlify.com
2. **Find your site**: timely-hotteok-de187e
3. **Click "Deploys"** tab
4. **Drag and drop** the entire `raix-with-blog` folder into the deploy zone
5. **Done!** Your blog will be live in seconds

### Alternative: Git Deployment

If you want to deploy via Git:

1. **Update your repository**:
   ```bash
   cd raix-with-blog
   git init
   git add .
   git commit -m "Add blog section with 3 sample posts"
   git push origin main
   ```

2. **Netlify will auto-deploy** if connected to your repo

## Testing Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Then visit: http://localhost:8000
```

## Blog Management

### Adding New Blog Posts

Currently, blog posts are hardcoded in the React components. To add new posts:

1. Edit `client/src/pages/Blog.tsx` - Add to `blogPosts` array
2. Edit `client/src/pages/BlogPost.tsx` - Add to `blogPosts` object
3. Rebuild: `pnpm build`
4. Redeploy

### Future: Markdown-Based Blog

For easier blog management, consider:
- **Headless CMS** (Contentful, Strapi, Sanity)
- **Git-based CMS** (Netlify CMS, Decap CMS)
- **Static Site Generator** (Next.js, Astro with Markdown)

## Comments Integration

The comments section is currently a placeholder. To add real comments:

**Recommended Options:**
- **Giscus** (GitHub Discussions-based, free)
- **Disqus** (Popular, free tier available)
- **Utterances** (GitHub Issues-based, lightweight)

## Features Summary

✅ **Blog Navigation** - Added to main header
✅ **Search** - Real-time search across posts
✅ **Categories** - Filter by topic
✅ **LinkedIn Sharing** - One-click sharing
✅ **Responsive Design** - Mobile-friendly
✅ **SEO-Friendly** - Proper metadata and structure
✅ **Author Attribution** - Posts by Roberto
✅ **Reading Time** - Estimated time to read
✅ **Back Navigation** - Easy return to blog listing

## Contact Form

The contact form still works with Web3Forms (API key: daac3f83-bef1-43b2-9d23-a632900aef97).

## Support

For questions or updates, contact Roberto via the website contact form.

---

**Created by Manus AI** | Blog section added with full functionality!

