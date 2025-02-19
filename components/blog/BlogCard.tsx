import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  date: string;
  slug: string;
  image: string;
  excerpt: string;
}

export function BlogCard({ title, date, slug, image, excerpt }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
      <Link href={`/blog/${slug}`} className="flex flex-col h-full">
        <div className="aspect-video relative bg-gray-100 dark:bg-gray-700">
          <Image
            src={`/images/blog/${image}`} // Corrected image path
            alt={title} // Fixed alt text
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <time className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {date}
          </time>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {excerpt}
          </p>
          <div className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            Read Article →
          </div>
        </div>
      </Link>
    </article>
  );
}