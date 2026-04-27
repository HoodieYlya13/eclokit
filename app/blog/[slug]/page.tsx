import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogViewTracker } from "@/components/blog/blog-view-tracker";
import { YnsLink } from "@/components/yns-link";
import { blogPosts, mapAPIPostToBlogPost } from "@/lib/blog-data";
import { commerce } from "@/lib/commerce";
import { YNSMedia } from "@/lib/yns-media";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const apiResult = await commerce.postBrowse({ limit: 100 }).catch(() => null);
	const apiSlugs = apiResult?.data.map((post) => ({ slug: post.slug })) || [];
	const mockSlugs = blogPosts.map((post) => ({ slug: post.slug }));

	// Merge slugs, prioritizing API
	const allSlugs = [...apiSlugs, ...mockSlugs.filter((m) => !apiSlugs.some((a) => a.slug === m.slug))];
	return allSlugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	let post = null;
	const apiPost = await commerce.postGet({ idOrSlug: slug }).catch(() => null);

	if (apiPost) {
		post = mapAPIPostToBlogPost(apiPost);
	} else {
		post = blogPosts.find((p) => p.slug === slug);
	}

	if (!post) return { title: "Post non trouvé" };

	return {
		title: `${post.title} — EcloKit`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({ params }: Props) {
	const { slug } = await params;

	let post = null;
	const apiPost = await commerce.postGet({ idOrSlug: slug }).catch(() => null);

	if (apiPost) {
		post = mapAPIPostToBlogPost(apiPost);
	} else {
		post = blogPosts.find((p) => p.slug === slug);
	}

	if (!post) notFound();

	return (
		<article className="min-h-screen bg-background">
			<BlogViewTracker slug={slug} />
			{/* Hero Section */}
			<div className="relative h-[60vh] min-h-[400px] w-full pt-36 md:pt-48">
				<YNSMedia src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
				<div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

				<div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6">
					<div className="max-w-4xl w-full text-center space-y-6">
						<YnsLink
							href="/blog"
							className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm hover:scale-105 transition-transform"
						>
							<ArrowLeft size={14} />
							Retour au blog
						</YnsLink>
						<h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight">{post.title}</h1>
					</div>
				</div>
			</div>

			{/* Meta Section */}
			<div className="max-w-4xl mx-auto px-6 py-12 flex flex-wrap justify-center gap-8 border-b border-border/50">
				<div className="flex items-center gap-3">
					<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
						{post.author.initial}
					</div>
					<div className="flex flex-col">
						<span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
							Auteur
						</span>
						<span className="text-sm font-bold">{post.author.name}</span>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="size-10 rounded-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
						<Calendar size={18} />
					</div>
					<div className="flex flex-col">
						<span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
							Publié le
						</span>
						<span className="text-sm font-bold">{post.date} 2024</span>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="size-10 rounded-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
						<Clock size={18} />
					</div>
					<div className="flex flex-col">
						<span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
							Temps de lecture
						</span>
						<span className="text-sm font-bold">{post.readingTime}</span>
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className="max-w-3xl mx-auto px-6 py-20">
				<div
					className="prose prose-lg prose-headings:font-display prose-headings:text-[#3F3478] prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none"
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</div>

			{/* Footer CTA */}
			<div className="max-w-7xl mx-auto px-6 pb-24">
				<div className="bg-primary/5 rounded-[40px] p-12 text-center space-y-6">
					<h2 className="font-display text-3xl md:text-4xl text-foreground">
						Prêt à commencer votre propre projet ?
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
						Découvrez nos kits prêts à l'emploi et tout le matériel nécessaire pour donner vie à vos idées
						créatives.
					</p>
					<YnsLink
						href="/products"
						className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-xl transition-all"
					>
						Voir nos collections
					</YnsLink>
				</div>
			</div>
		</article>
	);
}
