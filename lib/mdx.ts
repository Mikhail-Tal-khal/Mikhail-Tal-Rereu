import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDir = path.join(process.cwd(), 'content/blog');

export async function getAllPosts() {
  const files = fs.readdirSync(contentDir);
  
  return Promise.all(
    files.map(async (filename) => {
      const { frontmatter } = await getPostFromSlug(filename.replace('.mdx', ''));
      return {
        slug: filename.replace('.mdx', ''),
        ...frontmatter,
      };
    })
  );
}

export async function getPostFromSlug(slug: string) {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8');
  const { content, frontmatter } = parseMDX(raw);
  const source = await serialize(content);
  
  return {
    content: source,
    frontmatter: {
      ...frontmatter,
      slug,
    },
  };
}

function parseMDX(raw: string): { content: string; frontmatter: any } {
  const { content, data } = matter(raw);
  return { content, frontmatter: data };
}
