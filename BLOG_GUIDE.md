# RAIX Blog - Markdown Blog System Guide

Complete guide for adding and managing blog posts using Markdown files.

## Overview

Your blog now uses a **Markdown-based system** that automatically generates blog posts from `.md` files. This means you can write blog posts in simple Markdown format, and they'll automatically appear on your website.

### How It Works

1. Write a blog post in Markdown (`.md` file)
2. Save it in the `posts/` folder
3. Commit and push to GitHub
4. **Netlify automatically builds and deploys** your updated blog
5. Your new post appears on https://raix.au/blog

**No manual coding required!** Just write Markdown and push to Git.

---

## Quick Start: Adding a New Blog Post

### Step 1: Create a New Markdown File

```bash
cd /path/to/your/raix/repository
cd posts/
```

Create a new file with a descriptive name (use lowercase and hyphens):
```bash
touch my-new-blog-post.md
```

### Step 2: Use the Template

Copy the template structure from `posts/_template.md` or use this basic format:

```markdown
---
title: Your Amazing Blog Post Title
excerpt: A compelling 1-2 sentence summary that appears in the blog listing.
author: Roberto
date: 2025-01-20
category: Copilot Studio
image: /hero-image.png
---

# Your Amazing Blog Post Title

Your introduction paragraph goes here...

## First Main Section

Content for your first section...

## Second Main Section

More content here...

## Conclusion

Wrap up your post with key takeaways.
```

### Step 3: Write Your Content

Write your blog post using Markdown formatting (see Markdown Guide below).

### Step 4: Commit and Push

```bash
git add posts/my-new-blog-post.md
git commit -m "Add new blog post: My Amazing Title"
git push origin main
```

### Step 5: Wait for Deployment

- Netlify will automatically detect the push
- It will run `pnpm build` which generates your blog post
- Deployment takes 1-2 minutes
- Your post will appear at: `https://raix.au/blog/my-new-blog-post`

---

## Frontmatter Fields

The section between `---` at the top of your Markdown file is called "frontmatter". It contains metadata about your post.

### Required Fields

```yaml
---
title: Your Blog Post Title
excerpt: Brief summary for the blog listing page
author: Roberto
date: 2025-01-20
category: Copilot Studio
---
```

| Field | Description | Example |
|-------|-------------|---------|
| `title` | The main title of your blog post | `Getting Started with Copilot Studio` |
| `excerpt` | 1-2 sentence summary (appears in blog listing) | `Learn how to set up Microsoft Copilot Studio...` |
| `author` | Author name (usually "Roberto") | `Roberto` |
| `date` | Publication date in YYYY-MM-DD format | `2025-01-20` |
| `category` | Category for filtering | `Copilot Studio`, `Cybersecurity`, or `AI & Automation` |

### Optional Fields

```yaml
image: /hero-image.png
```

| Field | Description | Default |
|-------|-------------|---------|
| `image` | Featured image URL | `/hero-image.png` |

---

## Categories

Use one of these categories for consistency:

- **Copilot Studio** - Microsoft Copilot Studio tutorials, tips, and guides
- **Cybersecurity** - Security best practices, threat analysis, compliance
- **AI & Automation** - AI tools, workflow automation, productivity

To add a new category, just use it in your frontmatter. It will automatically appear in the filter buttons.

---

## Markdown Formatting Guide

### Headings

```markdown
# H1 - Main Title (use only once at the very top)
## H2 - Major Sections
### H3 - Subsections
```

### Text Formatting

```markdown
**Bold text** for emphasis
*Italic text* for definitions or technical terms
`inline code` for technical terms or commands
```

### Lists

**Bullet Lists:**
```markdown
- First item
- Second item
- Third item
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Links

```markdown
[Link text](https://example.com)
[Contact me](/#contact)
```

### Images

```markdown
![Alt text](/path/to/image.png)
```

To add custom images:
1. Place image in `/client/public/images/`
2. Reference as `/images/your-image.png`

### Blockquotes

```markdown
> This is a quote or important callout
```

### Code Blocks

````markdown
```javascript
const example = "code block";
```
````

---

## Writing Best Practices

### Content Guidelines

**Length:**
- Aim for 800-1500 words
- Comprehensive but not overwhelming
- Break long sections into subsections

**Tone:**
- Conversational yet professional
- Use "I" and "you" to connect with readers
- Share personal experience and insights

**Structure:**
1. **Introduction** - Hook the reader, explain what they'll learn
2. **Main Content** - 3-5 major sections with clear headings
3. **Practical Examples** - Real-world scenarios from your experience
4. **Best Practices** - Actionable tips and recommendations
5. **Conclusion** - Summarize key takeaways, call-to-action

**Audience:**
- Australian businesses (SMBs and enterprises)
- Decision-makers and IT professionals
- Looking for practical, actionable advice

### SEO Tips

- Use your main keyword in the title
- Include relevant keywords naturally in headings
- Write descriptive excerpts (appears in search results)
- Use descriptive link text (not "click here")
- Keep URLs short and descriptive (filename becomes URL)

### Formatting Tips

- **Short paragraphs** - 3-4 sentences maximum
- **Subheadings** - Every 200-300 words
- **Bullet points** - For lists and key points
- **Bold text** - For important concepts
- **Examples** - Include real-world scenarios
- **Call-to-action** - Link to contact form at the end

---

## File Naming Conventions

**Good filenames:**
- `getting-started-copilot-studio.md`
- `cybersecurity-essentials-2025.md`
- `ai-workflow-automation.md`

**Bad filenames:**
- `My New Post.md` (spaces, capitals)
- `post1.md` (not descriptive)
- `2025-01-20-blog.md` (unnecessary date prefix)

**Rules:**
- Use lowercase letters only
- Use hyphens (`-`) instead of spaces
- Be descriptive but concise
- No special characters
- The filename becomes the URL slug

---

## Testing Your Post Locally (Optional)

If you want to preview your post before pushing to Git:

### Step 1: Generate Posts

```bash
cd /path/to/your/raix/repository
npm run generate:posts
```

This creates `client/src/generated/posts.json` from your Markdown files.

### Step 2: Start Dev Server

```bash
pnpm dev
```

### Step 3: View in Browser

Open http://localhost:3000/blog in your browser to see your posts.

---

## Troubleshooting

### Post Not Appearing

**Check:**
1. Is the file in the `posts/` folder?
2. Does it have the `.md` extension?
3. Is the frontmatter formatted correctly (between `---`)?
4. Did you commit and push to GitHub?
5. Did Netlify deployment succeed? (Check Netlify dashboard)

### Build Errors

If Netlify build fails:

1. Check the Netlify deploy log for errors
2. Verify your Markdown syntax is correct
3. Ensure all required frontmatter fields are present
4. Check for special characters in frontmatter values

### Formatting Issues

If your post looks wrong:

1. Check Markdown syntax (headings, lists, etc.)
2. Ensure proper spacing around headings
3. Verify links are formatted correctly: `[text](url)`
4. Check that code blocks use triple backticks

---

## Advanced: Custom Images

### Adding Custom Images

1. **Add image to repository:**
   ```bash
   cp /path/to/your-image.png client/public/images/
   ```

2. **Reference in Markdown:**
   ```markdown
   ![Description](/images/your-image.png)
   ```

3. **Or use in frontmatter:**
   ```yaml
   image: /images/your-image.png
   ```

### Image Guidelines

- **Format:** PNG or JPG
- **Size:** Optimize for web (< 500KB)
- **Dimensions:** 1200x630px for featured images (optimal for social sharing)
- **Naming:** Use descriptive, lowercase names with hyphens

---

## Netlify Configuration

Your repository is configured to automatically build on every push to `main`.

### Build Settings (Already Configured)

- **Build command:** `pnpm build`
- **Publish directory:** `dist/public`
- **Node version:** 22.x

When you push to GitHub, Netlify:
1. Pulls your code
2. Installs dependencies (`pnpm install`)
3. Runs `npm run generate:posts` (converts Markdown to JSON)
4. Runs `vite build` (builds the React app)
5. Deploys to https://raix.au

**No manual intervention needed!**

---

## Example Workflow

Here's a complete example of adding a new blog post:

```bash
# 1. Navigate to your repository
cd ~/raix

# 2. Pull latest changes
git pull origin main

# 3. Create new blog post
cat > posts/microsoft-365-security-tips.md << 'EOF'
---
title: 10 Microsoft 365 Security Tips for Australian Businesses
excerpt: Essential security configurations every Australian business should implement in Microsoft 365 to protect against modern threats.
author: Roberto
date: 2025-01-25
category: Cybersecurity
---

# 10 Microsoft 365 Security Tips for Australian Businesses

Microsoft 365 is the backbone of many Australian businesses, but are you using it securely? Here are 10 essential security tips...

## 1. Enable Multi-Factor Authentication

MFA is your first line of defense...

[Rest of your content]
EOF

# 4. Commit and push
git add posts/microsoft-365-security-tips.md
git commit -m "Add blog post: Microsoft 365 security tips"
git push origin main

# 5. Wait 1-2 minutes for Netlify to deploy

# 6. View your post
# Visit: https://raix.au/blog/microsoft-365-security-tips
```

---

## Need Help?

- **Template:** See `posts/_template.md` for a complete example
- **Examples:** Check existing posts in `posts/` folder
- **Markdown:** https://www.markdownguide.org/basic-syntax/
- **Issues:** Check Netlify deploy logs for build errors

---

## Summary

**To add a new blog post:**

1. Create a `.md` file in `posts/` folder
2. Add frontmatter (title, excerpt, date, category, author)
3. Write content in Markdown
4. Commit and push to GitHub
5. Netlify automatically builds and deploys
6. Post appears on https://raix.au/blog

**That's it!** No coding, no manual builds, just write and publish.

Happy blogging! 🚀

