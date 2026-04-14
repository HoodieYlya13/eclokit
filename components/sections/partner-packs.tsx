import { Check } from "lucide-react";
import { SectionHeader } from "./section-header";

type Pack = {
	id: string;
	name: string;
	price: string;
	availability?: string;
	features: string[];
};

const packs: Pack[] = [
	{
		id: "pack1",
		name: "Pack Découverte",
		price: "300 €",
		features: [
			"Placement produit dans la box",
			"Logo et marque sur le site (mois en cours)",
			"1 story Instagram dédiée",
			"Mention dans le tuto vidéo",
			"Encart dans la newsletter mensuelle",
			"Partage d'un code promo exclusif",
		],
	},
	{
		id: "pack2",
		name: "Pack Influence",
		price: "600 €",
		features: [
			"Contenu du Pack 1 inclus",
			"1 article de blog dédié",
			"1 post feed supplémentaire sur nos réseaux",
			"Mise en vente de vos produits à l'unité sur notre e-commerce",
		],
	},
	{
		id: "pack3",
		name: "Pack Premium",
		price: "1 400 €",
		features: [
			"Contenu du Pack 2 inclus",
			"Article de blog Sponsorisé (mis en avant)",
			"Bannière premium sur la page d'accueil",
			"Intégration dans 3 box mensuelles sur l'année",
		],
	},
	{
		id: "pack4",
		name: "Pack Signature",
		price: "2 000 €",
		availability: "À partir de la deuxième année",
		features: ["Visibilité Pack 1 incluse", "1 box complète dédiée exclusivement à vos produits"],
	},
];

export function PartnerPacks() {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto border-t border-border">
			<SectionHeader badge="Visibilité & Influence" title="Faites rayonner votre marque" centered />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{packs.map((pack) => (
					<div
						key={pack.id}
						className="group flex flex-col p-8 rounded-[15px] bg-background border border-border/50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
					>
						{pack.availability && (
							<div className="absolute top-0 right-0 left-0 bg-primary/10 py-1 px-4 text-[10px] font-bold uppercase tracking-widest text-primary text-center">
								{pack.availability}
							</div>
						)}
						<div className="flex flex-col h-full gap-6 mt-4">
							<div>
								<h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
									{pack.name}
								</h3>
								<div className="text-2xl md:text-3xl lg:text-4xl font-display text-primary">{pack.price}</div>
							</div>

							<ul className="flex-1 space-y-4">
								{pack.features.map((feature, idx) => (
									<li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-tight">
										<Check className="shrink-0 w-4 h-4 text-primary" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
