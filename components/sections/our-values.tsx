import { Heart, Leaf, type LucideIcon, ShieldCheck, Users } from "lucide-react";
import { Button } from "../ui/button";
import { YnsLink } from "../yns-link";
import { SectionHeader } from "./section-header";

type Value = {
	title: string;
	description: string;
	icon?: LucideIcon;
};

type OurValuesProps = {
	values?: Value[];
};

const defaultValues: Value[] = [
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

export function OurValues({ values = defaultValues }: OurValuesProps) {
	return (
		<section className="py-20 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col items-center">
			<SectionHeader title="Bien plus qu’un DIY: notre philosophie" badge="Nos valeurs" centered />
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{values.map((value, index) => {
					const Icon = value.icon ?? defaultIcons[index % defaultIcons.length];
					return (
						<div key={value.title} className="group flex flex-col items-center text-center">
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-foreground">
								<Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-secondary" />
							</div>
							<h3 className="mb-2 text-lg font-medium">{value.title}</h3>
							<p className="text-sm text-muted-foreground">{value.description}</p>
						</div>
					);
				})}
			</div>
			{/* todo: add a button linking to /about with this text "En savoir plus sur Eclokit" */}
			<Button
				asChild
				variant="outline"
				size="lg"
				className="rounded-full mt-10 px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] bg-foreground text-background hover:bg-background hover:text-foreground transition-all border-border"
			>
				<YnsLink href="/about">En savoir plus sur Eclokit</YnsLink>
			</Button>
		</section>
	);
}
