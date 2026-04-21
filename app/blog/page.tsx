import { AboutHero } from "@/components/sections/about-hero";
import { BlogList } from "@/components/sections/blog-list";
import { blogPosts, mapAPIPostToBlogPost } from "@/lib/blog-data";
import { commerce } from "@/lib/commerce";

export const metadata = {
	title: "Blog | EcloKit",
	description: "Nos récents posts et guides créatifs.",
};

export default async function BlogPage() {
	// Fetch from API first
	const apiResult = await commerce.postBrowse({ limit: 10 }).catch(() => null);

	let displayPosts = blogPosts; // Fallback

	if (apiResult?.data && apiResult.data.length > 0) {
		const mappedApiPosts = apiResult.data.map(mapAPIPostToBlogPost);
		// If API returns posts, use them. You could also merge them if preferred.
		displayPosts = mappedApiPosts;
	}

	return (
		<>
			<AboutHero
				title="Nos récents posts"
				introduction="Inspirations, guides et astuces pour vos projets créatifs."
			/>

			<div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
				<BlogList posts={displayPosts} />
			</div>
		</>
	);
}
