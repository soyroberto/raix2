#!/usr/bin/env node

/**
 * Simple Blog Post Generator for RAIX
 * Converts Markdown files to posts.json
 * 
 * Usage: node generate-posts.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🚀 RAIX Blog Post Generator\n');

// Parse frontmatter
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { data: {}, content };
  
  const data = {};
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx > 0) {
      data[line.substring(0, idx).trim()] = line.substring(idx + 1).trim();
    }
  });
  
  return { data, content: match[2] };
}

// Convert markdown to HTML
function md2html(md) {
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .split('\n')
    .map(line => {
      if (line.trim().startsWith('- ')) return '<li>' + line.trim().substring(2) + '</li>';
      if (line.trim() && !line.trim().startsWith('<')) return '<p>' + line + '</p>';
      return line;
    })
    .join('\n')
    .replace(/(<li>.*<\/li>\n)+/g, match => '<ul>' + match + '</ul>');
}

// Main
const postsDir = path.join(__dirname, 'posts');
const outputFile = path.join(__dirname, 'assets', 'posts.json');

if (!fs.existsSync(postsDir)) {
  console.error('❌ posts/ folder not found!\n');
  process.exit(1);
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));

if (files.length === 0) {
  console.error('❌ No .md files found in posts/\n');
  process.exit(1);
}

console.log(`📝 Found ${files.length} post(s):\n`);

const posts = files.map(file => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const { data, content: md } = parseFrontmatter(content);
  const slug = file.replace('.md', '');
  
  console.log(`   ✓ ${file}`);
  
  return {
    id: slug,
    slug,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content: md2html(md),
    author: data.author || 'Roberto',
    date: data.date || new Date().toISOString().split('T')[0],
    category: data.category || 'General',
    image: data.image || '/hero-image.png',
    readTime: Math.ceil(md.split(/\s+/).length / 200) + ' min read'
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

console.log(`\n✅ Generated: ${outputFile}`);
console.log(`📊 Total posts: ${posts.length}\n`);
console.log('🚀 Ready to deploy!\n');

