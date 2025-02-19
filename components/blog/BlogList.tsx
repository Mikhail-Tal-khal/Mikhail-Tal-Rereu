import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
  }>;
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          image={post.image}
          excerpt={post.excerpt}
        />
        
      ))}
    </div>
  );
}

{/* <BlogCard 
  image="injectionDependency.png" 
  title="Understanding Dependency Injection"
  date="01 Aug 2024"
  excerpt="Learn about dependency injection patterns"
  slug="dependency-injection"
/> */}