#!/usr/bin/env node

/**
 * RAIX Blog Updater
 * 
 * This script reads Markdown files from posts/ folder and updates
 * the JavaScript bundle with new blog post data.
 * 
 * Usage: node update-blog.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 RAIX Blog Updater\n');

// Simple frontmatter parser
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content: content };
  }
  
  const frontmatter = match[1];
  const markdown = match[2];
  
  const data = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      data[key] = value;
    }
  });
  
  return { data, content: markdown };
}

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Lists
  const lines = html.split('\n');
  let inList = false;
  let inOrderedList = false;
  const processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('- ')) {
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
      }
      processedLines.push('<li>' + line.trim().substring(2) + '</li>');
    }
    else if (/^\d+\.\s/.test(line.trim())) {
      if (!inOrderedList) {
        processedLines.push('<ol>');
        inOrderedList = true;
      }
      processedLines.push('<li>' + line.trim().replace(/^\d+\.\s/, '') + '</li>');
    }
    else {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        processedLines.push('</ol>');
        inOrderedList = false;
      }
      
      if (line.trim() && !line.trim().startsWith('<')) {
        processedLines.push('<p>' + line + '</p>');
      } else {
        processedLines.push(line);
      }
    }
  }
  
  if (inList) processedLines.push('</ul>');
  if (inOrderedList) processedLines.push('</ol>');
  
  return processedLines.join('\n');
}

// Calculate reading time
function calculateReadTime(content) {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

// Convert posts
function convertPosts() {
  const postsDir = path.join(__dirname, 'posts');
  
  if (!fs.existsSync(postsDir)) {
    console.error('❌ Error: posts/ directory not found!');
    console.log('   Create a posts/ folder and add your .md files there.\n');
    process.exit(1);
  }
  
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md') && !file.startsWith('_'));
  
  if (files.length === 0) {
    console.error('❌ Error: No markdown files found in posts/');
    console.log('   Add .md files to the posts/ folder.\n');
    process.exit(1);
  }
  
  console.log(`📝 Found ${files.length} markdown file(s)\n`);
  
  const posts = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = parseFrontmatter(fileContents);
    const htmlContent = markdownToHtml(content);
    const slug = filename.replace(/\.md$/, '');
    const readTime = calculateReadTime(content);
    
    console.log(`  ✓ ${filename}`);
    
    return {
      id: slug,
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: htmlContent,
      author: data.author || 'Roberto',
      date: data.date || new Date().toISOString(),
      category: data.category || 'Uncategorized',
      image: data.image || '/hero-image.png',
      readTime
    };
  });
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return posts;
}

// Update the JavaScript file
function updateJavaScriptFile(posts) {
  const jsFile = path.join(__dirname, 'assets', 'index-BbDnSrII.js');
  
  if (!fs.existsSync(jsFile)) {
    console.error('\n❌ Error: JavaScript file not found!');
    console.log('   Expected: assets/index-BbDnSrII.js\n');
    process.exit(1);
  }
  
  let jsContent = fs.readFileSync(jsFile, 'utf8');
  
  // Create the posts data as a JavaScript object
  const postsJson = JSON.stringify(posts, null, 2);
  
  // Replace the blog posts data in the JS file
  // Look for the pattern where blog posts are defined
  const postsPattern = /const blogPosts\s*=\s*\[[\s\S]*?\];/;
  const postsArrayPattern = /const blogPostsArray\s*=\s*\[[\s\S]*?\];/;
  
  if (postsPattern.test(jsContent)) {
    jsContent = jsContent.replace(postsPattern, `const blogPosts = ${postsJson};`);
  } else if (postsArrayPattern.test(jsContent)) {
    jsContent = jsContent.replace(postsArrayPattern, `const blogPostsArray = ${postsJson};`);
  } else {
    console.error('\n❌ Error: Could not find blog posts definition in JavaScript file');
    console.log('   The file structure may have changed.\n');
    process.exit(1);
  }
  
  fs.writeFileSync(jsFile, jsContent, 'utf8');
  console.log('\n✅ JavaScript file updated successfully!');
}

// Main execution
try {
  const posts = convertPosts();
  updateJavaScriptFile(posts);
  
  console.log(`\n📊 Summary:`);
  console.log(`   - ${posts.length} blog post(s) processed`);
  console.log(`   - JavaScript bundle updated`);
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Test locally (open index.html in browser)`);
  console.log(`   2. Push to Git or drag-and-drop to Netlify`);
  console.log(`\n✨ Done!\n`);
  
} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}

