import { BlogList } from '@/components/blog/BlogList';
import { getAllPosts } from '@/lib/mdx';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Articles
        </h1>
        <BlogList posts={posts} />
      </div>
    </main>
  );
}