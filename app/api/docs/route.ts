import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface DocFrontmatter {
  title: string;
  description?: string;
  image?: string;
  category?: string;
  slug: string;
}

function getDocs(dir: string): { slug: string; frontmatter: DocFrontmatter }[] {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return [];
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });
  const docs: { slug: string; frontmatter: DocFrontmatter }[] = [];

  for (const item of items) {
    if (item.isDirectory()) {
      docs.push(...getDocs(path.join(dir, item.name))); // Recursively get docs from subdirectories
    } else if (item.isFile() && item.name.endsWith(".mdx")) {
      const filePath = path.join(dir, item.name);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = item.name.replace(/\.mdx$/, ""); // Extract slug from filename

      docs.push({
        slug,
        frontmatter: data as DocFrontmatter
      });
    }
  }

  return docs;
}

export async function GET(req: NextRequest) {
  try {
    const docsDir = path.join(process.cwd(), 'content/docs');
    const docs = getDocs(docsDir);
    return NextResponse.json(docs, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load documents' }, { status: 500 });
  }
}