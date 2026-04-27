import { Link2 } from "lucide-react";
import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogViewTracker } from "@/components/blog/blog-view-tracker";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
import { blogPosts } from "@/lib/blog-data";
import { YNSMedia } from "@/lib/yns-media";

// Custom Icons to match brand/image
function XIcon({ className }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
			<path d="M18.901 1.153h3.68l-8.04 9.19 9.457 12.504h-7.406l-5.8-7.584-6.638 7.584H.47l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
		</svg>
	);
}

function FacebookIcon({ className }: { className?: string }) {
	return (
		<svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
			<path
				clipRule="evenodd"
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

export const metadata: Metadata = {
	title: "Travailler l’argile avec DAS les bases essentielles — EcloKit",
	description:
		"Découvrez les bases essentielles pour travailler l'argile DAS : techniques, types d'argiles et outils indispensables.",
};

export default function ClayDASPage() {
	// Get latest posts for footer (excluding current one)
	const latestPosts = blogPosts
		.filter((p) => p.slug !== "travailler-argile-das-bases-essentielles")
		.slice(0, 4);

	return (
		<article className="min-h-screen font-body pb-24 pt-36 md:pt-48">
			<BlogViewTracker slug="travailler-argile-das-bases-essentielles" />
			{/* Top Bar / Category */}
			<div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-start justify-between gap-8">
				<div className="flex-1 space-y-6">
					<div className="flex items-center gap-2 text-sm font-bold tracking-widest text-foreground/60 uppercase">
						<span>#Argile</span>
						<span>/</span>
						<span className="text-foreground">#DAS</span>
						<span>/</span>
						<span className="text-foreground">#DIY</span>
					</div>

					<h1 className="font-display text-4xl md:text-6xl text-foreground leading-tight max-w-2xl">
						Travailler l’argile avec DAS les bases essentielles
					</h1>

					<div className="space-y-1">
						<p className="text-lg font-bold text-foreground">Par Clara Pischedda</p>
						<p className="text-sm text-muted-foreground uppercase tracking-widest">
							20 mars • 2 min de lecture
						</p>
						<p className="text-xs text-muted-foreground italic">Dernière mise à jour : 12 avr.</p>
					</div>

					<p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
						Le travail de l’argile séduit de plus en plus d’adeptes du DIY en Europe. Accessible, relaxant et
						créatif, il permet de réaliser des objets décoratifs, utilitaires ou artistiques.
						<br />
						<br />
						Pour bien débuter ou progresser, il est essentiel de choisir une argile de qualité et de
						comprendre les bases techniques. La DAS, très répandue en Europe, constitue une excellente porte
						d’entrée grâce à sa simplicité d’utilisation et sa polyvalence.
					</p>
				</div>

				<div className="w-full md:w-[45%] flex flex-col gap-8">
					{/* Featured Image Placeholder */}
					<div className="aspect-square w-full rounded-[40px] overflow-hidden relative group">
						<YNSMedia
							src="/img/clay-tools.png"
							alt="Outils en bois et accessoires pour travailler l'argile"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-700"
							priority
						/>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 py-12">
				{/* Sidebar */}
				<aside className="space-y-12 lg:sticky lg:top-32 self-start">
					<div className="space-y-4">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/40">
							Partager l'article
						</h3>
						<div className="flex gap-3">
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-white transition-colors"
								aria-label="Partager sur X"
							>
								<XIcon className="size-4" />
							</button>
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-white transition-colors"
								aria-label="Copier le lien"
							>
								<Link2 size={16} />
							</button>
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-white transition-colors"
								aria-label="Partager sur Facebook"
							>
								<FacebookIcon className="size-4" />
							</button>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/40">Sommaire</h3>
						<nav className="flex flex-col gap-3">
							<a
								href="#qualite"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								1. Pourquoi choisir une argile de qualité ?
							</a>
							<a
								href="#techniques"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								2. Les techniques de base à connaître
							</a>
							<a
								href="#types"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								3. Les différents types d’argiles
							</a>
							<a
								href="#pourquoi-das"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								4. Pourquoi choisir la DAS
							</a>
						</nav>
					</div>
				</aside>

				{/* Main Content */}
				<div className="space-y-32">
					{/* Section 1 */}
					<section id="qualite" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-foreground">
							1. Pourquoi choisir une argile de qualité ?
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
							<div className="space-y-8">
								<p className="text-muted-foreground leading-relaxed">
									Comme pour le crochet avec la laine, la qualité de l’argile influence directement :
								</p>
								<ul className="space-y-4 text-muted-foreground list-disc pl-6">
									<li>La facilité de modelage</li>
									<li>La précision des formes</li>
									<li>La résistance après séchage</li>
									<li>Le rendu final</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									Une argile de qualité comme la DAS permet d’éviter les fissures, les bulles d’air et les
									déformations, particulièrement fréquentes chez les débutants.
								</p>
							</div>

							<div className="space-y-8">
								{/* Image Placeholder */}
								<div className="aspect-video w-full bg-slate-100 rounded-[40px] overflow-hidden relative group shadow-lg">
									<YNSMedia
										src="/img/clay-modeling.webp"
										alt="Comparaison de qualité d'argile"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>
							</div>
						</div>
					</section>

					{/* Section 2 */}
					<section id="techniques" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-foreground">
							2. Les techniques de base à connaître absolument
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
							<div className="space-y-8">
								<div className="space-y-6">
									<div className="space-y-2">
										<h4 className="text-lg font-bold text-foreground">Le modelage à la main</h4>
										<p className="text-muted-foreground leading-relaxed text-sm">
											C’est la base : façonner l’argile avec les doigts pour créer des formes simples ou
											organiques.
										</p>
									</div>
									<div className="space-y-2">
										<h4 className="text-lg font-bold text-foreground">La technique du colombin</h4>
										<p className="text-muted-foreground leading-relaxed text-sm">
											Elle consiste à assembler des boudins d’argile pour créer des structures (pots, vases).
										</p>
									</div>
									<div className="space-y-2">
										<h4 className="text-lg font-bold text-foreground">La plaque (ou slab)</h4>
										<p className="text-muted-foreground leading-relaxed text-sm">
											Permet de créer des formes plates à l’aide d’un rouleau, idéale pour objets décoratifs.
										</p>
									</div>
									<div className="space-y-2">
										<h4 className="text-lg font-bold text-foreground">L’assemblage</h4>
										<p className="text-muted-foreground leading-relaxed text-sm">
											Coller différentes pièces entre elles avec de la barbotine (argile + eau).
										</p>
									</div>
									<div className="space-y-2">
										<h4 className="text-lg font-bold text-foreground">Le lissage</h4>
										<p className="text-muted-foreground leading-relaxed text-sm">
											Essentiel pour un rendu propre, il permet d’éliminer les imperfections avant séchage.
										</p>
									</div>
								</div>
								<p className="text-lg font-medium text-foreground italic border-l-4 border-primary pl-4">
									👉 Ces bases permettent de réaliser la majorité des créations en argile.
								</p>
							</div>

							<div className="space-y-8">
								{/* Image Placeholder */}
								<div className="aspect-square w-full bg-slate-100 rounded-[40px] overflow-hidden relative group shadow-lg">
									<YNSMedia
										src="/img/clay.png"
										alt="Argile"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>

								<div className="flex justify-center mt-10">
									<Button
										asChild
										variant="outline"
										className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] hover:bg-background transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
									>
										<YnsLink href="/product/pate-a-modeler-autodurcissante-pain-de-1-kg-blanc-das">
											Voir notre argile
										</YnsLink>
									</Button>
								</div>
							</div>
						</div>
					</section>

					{/* Section 3 */}
					<section id="types" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-foreground">
							3. Les différents types d’argiles et leurs différences
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="p-8 rounded-[32px] bg-slate-50 space-y-4">
								<h3 className="text-xl font-bold text-foreground">L’argile autodurcissante</h3>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Sèche à l’air libre</li>
									<li>• Facile à utiliser</li>
									<li>• Idéale pour débutants</li>
								</ul>
								<p className="text-xs text-primary font-bold uppercase tracking-wider">
									La DAS fait partie de cette catégorie
								</p>
							</div>
							<div className="p-8 rounded-[32px] bg-slate-50 space-y-4">
								<h3 className="text-xl font-bold text-foreground">L’argile naturelle</h3>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Nécessite une cuisson (four céramique)</li>
									<li>• Très résistante</li>
									<li>• Plus technique</li>
								</ul>
							</div>
							<div className="p-8 rounded-[32px] bg-slate-50 space-y-4">
								<h3 className="text-xl font-bold text-foreground">La porcelaine</h3>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Fine et élégante</li>
									<li>• Plus difficile à travailler</li>
									<li>• Résultat haut de gamme</li>
								</ul>
							</div>
						</div>

						<div className="flex justify-center mt-10">
							<Button
								asChild
								variant="outline"
								className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] hover:bg-background transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
							>
								<YnsLink href="/product/trousse-de-modelage-8-outils-crealia">Voir nos outils</YnsLink>
							</Button>
						</div>
					</section>

					{/* Section 4 */}
					<section id="pourquoi-das" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-foreground">
							4. Pourquoi choisir la DAS pour débuter et progresser
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div className="space-y-8">
								<p className="text-muted-foreground leading-relaxed">
									La DAS présente plusieurs avantages qui en font la chouchoute des créateurs DIY :
								</p>
								<ul className="space-y-4 text-muted-foreground list-disc pl-6 text-lg">
									<li>Facile à modeler</li>
									<li>Ne nécessite pas de cuisson</li>
									<li>Accessible en prix</li>
									<li>Adaptée à de nombreux projets (déco, DIY, objets utiles)</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									Elle permet de se concentrer sur la créativité sans contraintes techniques importantes.
									C'est l'alliée idéale pour transformer vos idées en objets concrets dès votre première
									séance.
								</p>
							</div>

							<div className="relative">
								{/* Image Placeholder */}
								<div className="aspect-square w-full overflow-hidden relative group">
									<YNSMedia
										src="/img/partners/das.png"
										alt="DAS - Partenaire EcloKit"
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-10">
							<Button
								asChild
								variant="outline"
								className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] hover:bg-background transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
							>
								<YnsLink href="/#le-coquetier-lapin">Voir notre box argile</YnsLink>
							</Button>
						</div>
					</section>
				</div>
			</div>

			{/* Recent Articles Footer */}
			<section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
				<div className="text-center space-y-4 mb-16">
					<h2 className="font-display text-4xl md:text-5xl text-foreground">
						Nos derniers articles Idée DIY
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-6">
					{latestPosts.map((post, index) => (
						<BlogCard key={post.slug} post={post} index={index} />
					))}
				</div>
			</section>
		</article>
	);
}
