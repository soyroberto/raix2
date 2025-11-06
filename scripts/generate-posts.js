import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '../posts');
const outputFile = path.join(__dirname, '../client/src/generated/posts.json');

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all markdown files from posts directory
const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));

const posts = files.map(filename => {
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter and content
  const { data, content } = matter(fileContents);
  
  // Convert markdown to HTML
  const htmlContent = marked(content);
  
  // Generate slug from filename
  const slug = filename.replace(/\.md$/, '');
  
  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);
  
  return {
    id: slug,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    content: htmlContent,
    author: data.author || 'Roberto',
    date: data.date,
    category: data.category,
    image: data.image || '/hero-image.png',
    readTime: `${readTime} min read`
  };
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write to JSON file
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

console.log(`✅ Generated ${posts.length} blog posts from markdown files`);
console.log(`📝 Output: ${outputFile}`);

