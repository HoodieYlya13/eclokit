import { Heart, Leaf, type LucideIcon, ShieldCheck, Users } from "lucide-react";

type Feature = {
	title: string;
	description: string;
	icon?: LucideIcon;
};

type ProductFeaturesProps = {
	features?: Feature[];
};

const defaultFeatures: Feature[] = [
	{
		title: "La juste dose, rien de plus",
		description:
			"Fini les placards qui débordent. Chaque coffret est dosé avec précision pour réaliser votre projet de A à Z. Vous recevez l'essentiel, sans aucun surplus, pour une création 100% plaisir et zéro encombrement.",
		icon: Leaf,
	},
	{
		title: "Le Club des Créateurs",
		description:
			"Rejoignez une communauté passionnée : partagez vos chefs-d'œuvre, relevez nos défis et collectionnez des éclopoints pour débloquer des cadeaux. Ici, on fabrique des objets, mais on tisse aussi des liens entre fans de DIY.",
		icon: Users,
	},
	{
		title: "L'excellence entre vos mains",
		description:
			"De l’emballage au contenu, nous privilégions le savoir-faire européen. Chaque produit est sélectionné avec cœur pour sa qualité, accompagné de tutoriels inédits confectionnés avec soin dans notre atelier pour un résultat haut de gamme.",
		icon: ShieldCheck,
	},
	{
		title: "Une création engagée",
		description:
			"Nous croyons au beau qui fait du bien. Nos fournisseurs sont européens et choisis pour leur éthique. Nous soutenons la cause des femmes en reversant une partie de nos bénéfices à la Fondation des Femmes à Paris.",
		icon: Heart,
	},
];

const defaultIcons = [Leaf, Users, ShieldCheck, Heart];

export function ProductFeatures({ features = defaultFeatures }: ProductFeaturesProps) {
	return (
		<section className="mt-20 border-t border-border pt-16">
			<h2 className="mb-12 text-center text-3xl font-medium tracking-tight">Nos valeurs</h2>
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{features.map((feature, index) => {
					const Icon = feature.icon ?? defaultIcons[index % defaultIcons.length];
					return (
						<div key={feature.title} className="group flex flex-col items-center text-center">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground">
								<Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary-foreground" />
							</div>
							<h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">{feature.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
