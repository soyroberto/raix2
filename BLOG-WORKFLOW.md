# RAIX Blog Workflow - Simple & Working

This is the **tested, working solution** for managing your blog.

## 📁 What You Have

```
raix-final/
├── index.html              # Your website
├── assets/
│   ├── posts.json         # Blog posts (generated)
│   ├── index-*.js         # JavaScript
│   └── index-*.css        # Styles
├── posts/
│   ├── _template.md       # Template for new posts
│   ├── post-1.md          # Your blog posts
│   └── post-2.md
├── generate-posts.js       # Conversion script
├── hero-image.png
├── raix-logo.svg
└── BLOG-WORKFLOW.md        # This file
```

## ✍️ Adding a New Blog Post

### Step 1: Create Markdown File

```bash
cd posts/
cp _template.md my-new-post.md
```

Edit `my-new-post.md`:

```markdown
---
title: My New Blog Post
excerpt: A brief description of the post
author: Roberto
date: 2025-01-20
category: Copilot Studio
image: /hero-image.png
---

# My New Blog Post

Your content here...

## Section 1

More content...
```

### Step 2: Generate JSON

```bash
node generate-posts.mjs
```

This creates/updates `assets/posts.json` with all your posts.

### Step 3: Deploy

**Option A: Netlify Drag & Drop** (Easiest)
1. Go to https://app.netlify.com/sites/timely-hotteok-de187e/deploys
2. Drag the entire `raix-final` folder
3. Done!

**Option B: Git Push**
```bash
git add .
git commit -m "Add new blog post"
git push origin main
```

## 🎯 Complete Example

```bash
# 1. Create new post
cat > posts/copilot-tips.md << 'EOF'
---
title: 5 Copilot Studio Tips
excerpt: Quick tips for better chatbots
author: Roberto
date: 2025-01-20
category: Copilot Studio
---

# 5 Copilot Studio Tips

Here are my top tips...
EOF

# 2. Generate
node generate-posts.mjs

# 3. Test locally
open index.html

# 4. Deploy to Netlify
# Drag folder to Netlify
```

## 📝 Post Template

```markdown
---
title: Your Post Title Here
excerpt: One sentence summary (shows in listing)
author: Roberto
date: 2025-01-20
category: Copilot Studio
image: /hero-image.png
---

# Your Post Title

Introduction paragraph...

## Main Section

Content here...

### Subsection

More details...

## Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up...
```

## 📂 Categories

Choose one:
- `Copilot Studio`
- `Cybersecurity`
- `AI & Automation`

## ✅ Checklist

Before deploying:
- [ ] Created/edited `.md` file in `posts/`
- [ ] Ran `node generate-posts.mjs`
- [ ] Checked `assets/posts.json` was updated
- [ ] Tested locally (optional)
- [ ] Deployed to Netlify

## 🔧 Troubleshooting

**Posts not showing?**
- Did you run `generate-posts.js`?
- Check `assets/posts.json` exists
- Make sure you deployed the updated files

**Script errors?**
- Check frontmatter format (between `---`)
- Ensure all required fields present
- No special characters in filenames

**Deployment issues?**
- Drag the entire folder, not just files
- Don't set build commands on Netlify
- This is pre-built, no compilation needed

## 🚀 That's It!

No build process, no dependencies, no errors. Just:
1. Write Markdown
2. Run script
3. Deploy

---

**Questions?** Check `posts/_template.md` for examples.

