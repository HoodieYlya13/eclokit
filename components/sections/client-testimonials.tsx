import { Star } from "lucide-react";
import { SectionHeader } from "./section-header";

const testimonials = [
	{
		name: "Sophie Delay",
		rating: 5,
		review:
			"J’ai reçu une box EcloKits pour mon anniversaire et c’était une super surprise ! C’est la première fois que je testais et j’ai adoré du début à la fin. Tout est hyper bien expliqué, le matériel est de qualité et surtout j’ai passé un vrai moment de détente. Franchement, ça m’a donné envie de continuer !",
	},
	{
		name: "Chloé Dupuis",
		rating: 5,
		review:
			"Je suis abonnée depuis quelques mois maintenant et j’adore le concept. Chaque mois, j’attends ma box avec impatience dans ma boîte aux lettres ! C’est devenu mon petit moment à moi, et j’aime découvrir une nouvelle activité à chaque fois. Je ne m’en lasse pas.",
	},
	{
		name: "Léa Da Silva",
		rating: 5,
		review:
			"Ce que j’aime le plus avec EcloKits, c’est de découvrir (ou redécouvrir) des marques et des techniques que je n’aurais jamais testées seule. Ça me permet de sortir de ma zone de confort et d’essayer plein de choses différentes sans devoir tout acheter séparément. C’est hyper inspirant !",
	},
];

export function ClientTestimonials() {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto overflow-hidden border-t border-border">
			<SectionHeader badge="Témoignages" title="C'est nos clients qui en parlent le mieux" centered />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
				{testimonials.map((testimonial, index) => (
					<div
						key={testimonial.name}
						className="group relative bg-background border border-border/50 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
						style={{
							animation: `fadeInUp 0.8s ease-out ${index * 0.15}s forwards`,
							opacity: 0,
						}}
					>
						<div className="flex gap-1 mb-6">
							{[...Array(testimonial.rating)].map((_, i) => (
								<Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
							))}
						</div>

						<blockquote className="flex-1 flex flex-col">
							<p className="text-foreground/80 leading-relaxed italic italic-quotes before:content-['“'] after:content-['”'] mb-8 text-lg">
								{testimonial.review}
							</p>

							<div className="mt-auto flex items-center gap-4 pt-6 border-t border-border/10">
								<div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center font-display font-bold text-primary shrink-0">
									{testimonial.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</div>
								<cite className="not-italic">
									<span className="block font-display font-bold text-xl text-foreground">
										{testimonial.name}
									</span>
									<span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
										Cliente EcloKits
									</span>
								</cite>
							</div>
						</blockquote>
					</div>
				))}
			</div>
		</section>
	);
}
