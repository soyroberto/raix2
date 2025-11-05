#!/usr/bin/env python3
"""
RAIX Blog Post Generator
Converts Markdown files to posts.json

Usage: python3 generate-posts.py
"""

import os
import json
import re
from datetime import datetime

print('\n🚀 RAIX Blog Post Generator\n')

def parse_frontmatter(content):
    """Extract frontmatter from markdown"""
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)$', content, re.DOTALL)
    if not match:
        return {}, content
    
    data = {}
    for line in match.group(1).split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            data[key.strip()] = value.strip()
    
    return data, match.group(2)

def md_to_html(md):
    """Simple markdown to HTML conversion"""
    html = md
    html = re.sub(r'^### (.*)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.*)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.*)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
    html = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', html)
    html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)
    
    lines = []
    for line in html.split('\n'):
        line = line.strip()
        if line.startswith('- '):
            lines.append('<li>' + line[2:] + '</li>')
        elif line and not line.startswith('<'):
            lines.append('<p>' + line + '</p>')
        else:
            lines.append(line)
    
    html = '\n'.join(lines)
    html = re.sub(r'(<li>.*</li>\n)+', lambda m: '<ul>' + m.group(0) + '</ul>', html)
    
    return html

# Main
posts_dir = 'posts'
output_file = 'assets/posts.json'

if not os.path.exists(posts_dir):
    print('❌ posts/ folder not found!\n')
    exit(1)

files = [f for f in os.listdir(posts_dir) if f.endswith('.md') and not f.startswith('_')]

if not files:
    print('❌ No .md files found in posts/\n')
    exit(1)

print(f'📝 Found {len(files)} post(s):\n')

posts = []
for filename in files:
    with open(os.path.join(posts_dir, filename), 'r', encoding='utf-8') as f:
        content = f.read()
    
    data, md = parse_frontmatter(content)
    slug = filename.replace('.md', '')
    
    print(f'   ✓ {filename}')
    
    posts.append({
        'id': slug,
        'slug': slug,
        'title': data.get('title', 'Untitled'),
        'excerpt': data.get('excerpt', ''),
        'content': md_to_html(md),
        'author': data.get('author', 'Roberto'),
        'date': data.get('date', datetime.now().strftime('%Y-%m-%d')),
        'category': data.get('category', 'General'),
        'image': data.get('image', '/hero-image.png'),
        'readTime': f"{max(1, len(md.split()) // 200)} min read"
    })

posts.sort(key=lambda x: x['date'], reverse=True)

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(posts, f, indent=2, ensure_ascii=False)

print(f'\n✅ Generated: {output_file}')
print(f'📊 Total posts: {len(posts)}\n')
print('🚀 Ready to deploy!\n')

