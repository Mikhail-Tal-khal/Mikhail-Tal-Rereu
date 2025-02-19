import { getAllPosts, getPostFromSlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  // Await the params (in case it's a Promise) before using its properties
  const { slug } = await Promise.resolve(params);
  const { content, frontmatter } = await getPostFromSlug(slug);

  return (
    <article className="prose dark:prose-invert max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <div className="flex gap-4 mt-4 mb-8 text-gray-600 dark:text-gray-400">
        <time>{frontmatter.date}</time>
        <span>•</span>
        <span>{frontmatter.readingTime}</span>
      </div>
      <MDXRemote source={content} />
    </article>
  );
}
