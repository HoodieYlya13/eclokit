import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/lib/blog-data";

export function BlogList({ posts }: { posts: BlogPost[] }) {
	return (
		<div className="flex flex-col gap-10">
			{posts.map((post, index) => (
				<BlogCard key={post.slug} post={post} index={index} />
			))}
		</div>
	);
}
