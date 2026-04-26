import { Link2, Play } from "lucide-react";
import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
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
	title: 'Cet été, on oublie le combo "Bronzette & Ennui" ! — EcloKit',
	description:
		"Découvrez nos 3 activités DIY pour occuper vos journées d'été : colliers de perles, broderie et crochet.",
};

export default function SummerDIYPage() {
	// Get latest posts for footer (excluding current one)
	const latestPosts = blogPosts.filter((p) => p.slug !== "ete-diy-bronze-ennui").slice(0, 4);

	return (
		<article className="min-h-screen font-body pb-24 pt-36 md:pt-48">
			{/* Top Bar / Category */}
			<div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-start justify-between gap-8">
				<div className="flex-1 space-y-6">
					<div className="flex items-center gap-2 text-sm font-bold tracking-widest text-[#3F3478]/60 uppercase">
						<span>#IdeeDIY</span>
						<span>/</span>
						<span className="text-[#3F3478]">#summer</span>
					</div>

					<h1 className="font-display text-4xl md:text-6xl text-[#3F3478] leading-tight max-w-2xl">
						Cet été, on oublie le combo "Bronzette & Ennui" !
					</h1>

					<div className="space-y-1">
						<p className="text-lg font-bold text-[#3F3478]">Par Loanne HELLO</p>
						<p className="text-sm text-muted-foreground uppercase tracking-widest">6 Juin 2026</p>
					</div>

					<p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
						Soyons honnêtes : on adore toutes bouquiner au soleil ou peaufiner notre bronzage pendant des
						heures. Mais entre nous, au bout du troisième jour sur le transat, on commence un peu à tourner en
						rond, non ? Cette année, nous avons décidé de pimenter nos vacances et de troquer l'oisiveté
						contre la créativité.
					</p>
				</div>

				<div className="w-full md:w-[45%] flex flex-col gap-8">
					{/* Featured Image */}
					<div className="aspect-square w-full bg-slate-100 rounded-[40px] overflow-hidden relative group shadow-2xl">
						<YNSMedia
							src="/img/girl-reading.png"
							alt="Fille qui lit au soleil"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-700"
							priority
						/>
						<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 py-12">
				{/* Sidebar */}
				<aside className="space-y-12 lg:sticky lg:top-32 self-start">
					<div className="space-y-4">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#3F3478]/40">
							Partager l'article
						</h3>
						<div className="flex gap-3">
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-[#3F3478] hover:text-white transition-colors"
								aria-label="Partager sur X"
							>
								<XIcon className="size-4" />
							</button>
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-[#3F3478] hover:text-white transition-colors"
								aria-label="Copier le lien"
							>
								<Link2 size={16} />
							</button>
							<button
								type="button"
								className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-[#3F3478] hover:text-white transition-colors"
								aria-label="Partager sur Facebook"
							>
								<FacebookIcon className="size-4" />
							</button>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#3F3478]/40">Sommaire</h3>
						<nav className="flex flex-col gap-3">
							<a
								href="#perles"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								1. Les colliers de perles : Le retour du "Summer Joy"
							</a>
							<a
								href="#broderie"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								2. La broderie pour sublimer son summer body
							</a>
							<a
								href="#crochet"
								className="text-sm font-medium hover:text-primary transition-colors leading-snug"
							>
								3. Le crochet : Notre Bob fait main pour le soleil
							</a>
						</nav>
					</div>
				</aside>

				{/* Main Content */}
				<div className="space-y-32">
					{/* Section 1 */}
					<section id="perles" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-[#3F3478]">
							1. Les colliers de perles : Le retour du "Summer Joy"
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
							<div className="space-y-8">
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Pourquoi on adore ?</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Parce que c'est ultra-rapide, terriblement satisfaisant et que cela nous permet de pimper
										nos tenues de plage avec une touche de couleur unique. C’est le projet parfait à glisser
										dans votre sac de voyage pour créer en terrasse.
									</p>
								</div>
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Tuto</h4>
									<p className="text-muted-foreground leading-relaxed text-sm text-balance">
										On a craqué pour le collier de perles pendentif cœur, la grande tendance de cet été ! On
										opte pour le super{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											tuto de Perles & Co
										</a>{" "}
										pour apprendre la technique pas à pas.
									</p>
								</div>
								{/* Necklace Image */}
								<div className="aspect-592/217 w-full relative group">
									<YNSMedia
										src="/img/necklace.png"
										alt="Collier de perles avec pendentif cœur"
										fill
										className="object-contain group-hover:scale-105 transition-transform duration-700"
									/>
								</div>
							</div>

							<div className="space-y-8 md:pt-12">
								{/* Tutorial Video Thumbnail */}
								<a
									href="https://www.youtube.com/watch?v=-UjxcOWnVq8"
									target="_blank"
									rel="noopener noreferrer"
									className="aspect-video w-full bg-slate-50 rounded-[40px] overflow-hidden relative group shadow-lg block"
								>
									<YNSMedia
										src="/img/youtube-video-thumbnail.png"
										alt="Tuto Bijoux Débutant"
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
										<div className="size-16 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
											<Play size={32} fill="currentColor" />
										</div>
									</div>
								</a>
								<div className="space-y-4 uppercase">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Matériel</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Pour dénicher les plus belles perles (miyuki, rocailles ou perles d'eau douce), on se rend
										chez{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											Cultura
										</a>{" "}
										pour l'essentiel, ou chez{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											Perles & Co
										</a>{" "}
										pour un choix de pro absolument incroyable.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Section 2 */}
					<section id="broderie" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-[#3F3478]">
							2. La broderie pour sublimer son summer body
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div className="space-y-8">
								{/* Embroidery Image */}
								<div className="aspect-3/4 w-full bg-slate-50 rounded-[40px] overflow-hidden relative group shadow-lg">
									<YNSMedia
										src="/img/woman.png"
										alt="Femme portant un bikini avec broderies fleurs"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Matériel</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Le Matériel : Pour des fils qui résistent vaillamment au soleil et au chlore, on fait
										confiance au coton mouliné de chez{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											DMC
										</a>
										.
									</p>
								</div>
							</div>

							<div className="space-y-12">
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Pourquoi on adore ?</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										La broderie, c'est pour nous l'art de la patience et de la poésie. Cet été, on délaisse
										son tambour classique pour s'attaquer à son dressing de vacances. Broder son maillot,
										c'est l'assurance d'avoir une pièce que personne d'autre n'aura sur le sable !
									</p>
								</div>
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Tuto</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Pour broder sur une matière élastique comme le lycra, notre astuce est d'utiliser un
										stabilisateur hydrosoluble de chez{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											Mondial Tissus
										</a>
										. On dessine un petit motif (un soleil, un coquillage ou un mot doux) sur l'épingle sur
										son maillot, on brode au point de tige ou de chaînette, puis on rince à l'eau : le papier
										disparaît et la broderie reste !
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Section 3 */}
					<section id="crochet" className="space-y-12 scroll-mt-32">
						<h2 className="font-display text-3xl md:text-5xl text-[#3F3478]">
							3. Le crochet : Notre Bob fait main pour le soleil
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
							<div className="space-y-8">
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Pourquoi on adore ?</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Le crochet n'est plus du tout réservé à nos grands-mères ! C'est une activité nomade hyper
										relaxante qui nous apporte une vraie fierté : celle de porter un accessoire que nous avons
										fabriqué nous-mêmes de A à Z.
									</p>
								</div>
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Tuto</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										On craque pour le tuto{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											Crochet Daisy Granny Square Bucket Hat Tutorial
										</a>
										, parfait pour être stylé tout l'été et éviter l'insolation.
									</p>
								</div>
								{/* Yarn Illustration */}
								<div className="aspect-[672/258] w-full relative group">
									<YNSMedia
										src="/img/pelote&crochet.png"
										alt="Illustration crochet et pelote de laine"
										fill
										className="object-contain group-hover:rotate-6 transition-transform duration-500"
									/>
								</div>
							</div>

							<div className="space-y-8 md:pt-12">
								{/* Crochet Tutorial Video Thumbnail */}
								<a
									href="https://www.youtube.com/watch?v=epIiqdwTHQc"
									target="_blank"
									rel="noopener noreferrer"
									className="aspect-video w-full bg-slate-50 rounded-[40px] overflow-hidden relative group shadow-lg block"
								>
									<YNSMedia
										src="/img/youtube-video-thumbnail2.png"
										alt="Tuto Crochet Bucket Hat"
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
										<div className="size-16 rounded-full bg-white/90 flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
											<Play size={32} fill="currentColor" />
										</div>
									</div>
								</a>
								<div className="space-y-4">
									<h4 className="text-lg font-bold text-[#3F3478]">Le Matériel</h4>
									<p className="text-muted-foreground leading-relaxed text-sm">
										Pour trouver des pelotes de coton frais et des crochets ergonomiques qui ne fatiguent pas
										les mains, on file sur{" "}
										<a href="#" className="font-bold underline decoration-primary/30">
											Hobbii.fr
										</a>
										. Leur gamme "Rainbow Cotton" est idéale pour les projets d'été.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			{/* Recent Articles Footer */}
			<section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
				<div className="text-center space-y-4 mb-16">
					<h2 className="font-display text-4xl md:text-5xl text-[#3F3478]">Nos derniers articles Idée DIY</h2>
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
