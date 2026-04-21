import { Star } from "lucide-react";
import { SectionHeader } from "./section-header";

const testimonials = [
	{
		brand: "Faber-Castell",
		rating: 5,
		comment:
			"C'est la troisième fois que nous prenons le Pack Influence et certainement pas la dernière. Nous sommes ravis du retour sur investissement et de la qualité du contenu produit. EcloKit est devenu pour nous un partenaire stratégique incontournable pour piloter notre visibilité et nos ventes annuelles avec efficacité.",
	},
	{
		brand: "DAS",
		rating: 5,
		comment:
			"L'impact sur nos ventes a été immédiat. Depuis l'intégration de nos produits dans les box, nous avons constaté une réelle différence avec l'acquisition de nombreux nouveaux clients. Le taux de rachat sur notre propre site après chaque campagne est un indicateur de performance qui prouve la valeur du concept.",
	},
	{
		brand: "Cléopâtre",
		rating: 5,
		comment:
			"Nous testions ce concept pour la première fois après avoir entendu d'excellents échos. Nous sommes vraiment surpris par la qualité d'exécution et l'engagement de la communauté. C'est une solution commerciale clé en main, idéale pour faire découvrir nos gammes de manière authentique et générer des résultats concrets.",
	},
];

export function PartnerTestimonials() {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto border-t border-border">
			<SectionHeader badge="Témoignages" title="C’est eux qui en parlent le mieux" centered />

			<div className="max-w-3xl mx-auto text-center mb-16 -mt-10">
				<p className="text-lg text-muted-foreground leading-relaxed">
					Au-delà des chiffres, voici l'expérience concrète de ceux qui nous font confiance pour leur
					stratégie de marque.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<div
						key={testimonial.brand}
						className="group relative bg-background border border-border/50 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up flex flex-col"
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						<div className="flex gap-1 mb-6">
							{[...Array(testimonial.rating)].map((_, i) => (
								<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
							))}
						</div>

						<blockquote className="flex-1 flex flex-col">
							<p className="text-muted-foreground leading-relaxed italic italic-quotes before:content-['“'] after:content-['”'] mb-8">
								{testimonial.comment}
							</p>
							<cite className="mt-auto block not-italic font-display font-bold text-xl md:text-2xl pt-4 border-t border-border/10">
								{testimonial.brand}
							</cite>
						</blockquote>
					</div>
				))}
			</div>
		</section>
	);
}
