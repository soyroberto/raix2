#!/usr/bin/env node

/**
 * Standalone Markdown to JSON converter
 * No dependencies required - uses only Node.js built-ins
 * 
 * Usage: node convert-posts.js
 */

const fs = require('fs');
const path = require('path');

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
    
    // Unordered list
    if (line.trim().startsWith('- ')) {
      if (!inList) {
        processedLines.push('<ul>');
        inList = true;
      }
      processedLines.push('<li>' + line.trim().substring(2) + '</li>');
    }
    // Ordered list
    else if (/^\d+\.\s/.test(line.trim())) {
      if (!inOrderedList) {
        processedLines.push('<ol>');
        inOrderedList = true;
      }
      processedLines.push('<li>' + line.trim().replace(/^\d+\.\s/, '') + '</li>');
    }
    // End of list
    else {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        processedLines.push('</ol>');
        inOrderedList = false;
      }
      
      // Paragraphs
      if (line.trim() && !line.trim().startsWith('<')) {
        processedLines.push('<p>' + line + '</p>');
      } else {
        processedLines.push(line);
      }
    }
  }
  
  // Close any open lists
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

// Main conversion function
function convertPosts() {
  const postsDir = path.join(__dirname, 'posts');
  const outputFile = path.join(__dirname, 'assets', 'posts.json');
  
  console.log('📁 Reading posts from:', postsDir);
  
  if (!fs.existsSync(postsDir)) {
    console.error('❌ Posts directory not found!');
    process.exit(1);
  }
  
  const files = fs.readdirSync(postsDir)
    .filter(file => file.endsWith('.md') && !file.startsWith('_'));
  
  console.log(`📝 Found ${files.length} markdown files`);
  
  const posts = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = parseFrontmatter(fileContents);
    const htmlContent = markdownToHtml(content);
    const slug = filename.replace(/\.md$/, '');
    const readTime = calculateReadTime(content);
    
    console.log(`  ✓ Converted: ${filename}`);
    
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
  
  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Write to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  
  console.log(`\n✅ Successfully generated ${posts.length} blog posts`);
  console.log(`📄 Output: ${outputFile}`);
  console.log('\n🚀 You can now deploy the files to Netlify!');
}

// Run the converter
try {
  convertPosts();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

