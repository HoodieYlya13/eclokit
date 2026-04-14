import { BarChart3, PackageCheck, ShoppingBag, Users } from "lucide-react";
import { SectionHeader } from "./section-header";

const advantages = [
	{
		title: "Testez vos produits en conditions réelles",
		description:
			"Placez vos nouveautés ou produits phares entre les mains d'une audience captive. C'est l'opportunité idéale pour valider un lancement ou écouler vos stocks dormants intelligemment, tout en générant un contenu authentique et des avis concrets qui rassureront vos futurs acheteurs et boosteront votre image de marque.",
		icon: PackageCheck,
	},
	{
		title: "Accédez à une audience qualifiée et active",
		description:
			"Avec plus de 5 000 lecteurs actifs par mois sur notre blog et une communauté sociale engagée, nous garantissons une exposition maximale. Vos produits sont présentés à des acheteurs ciblés ayant un intérêt prouvé pour votre univers, assurant ainsi une mémorisation forte et une visibilité de haute qualité.",
		icon: Users,
	},
	{
		title: "Générez un rachat massif sur votre site",
		description:
			"Notre modèle est conçu pour la conversion directe. Nous ne nous arrêtons pas à la découverte : via nos liens trackés et nos recommandations, nous constatons qu'en moyenne 50% de nos clients effectuent un rachat sur le site de nos partenaires. C'est un moteur de croissance immédiat.",
		icon: ShoppingBag,
	},
	{
		title: "Garantie de ROI et performance mesurable",
		description:
			"Chaque campagne fait l'objet d'un suivi rigoureux. Nous vous fournissons des KPI concrets comme les taux d'engagement, les clics et les retours d'expérience clients. Travailler avec EcloKit, c'est choisir un investissement publicitaire transparent, rentable et surtout piloté par des indicateurs de performance réels et vérifiables.",
		icon: BarChart3,
	},
];

export function PartnerAdvantages() {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto border-t border-border">
			<SectionHeader title="Pourquoi devenir partenaire EcloKit ?" badge="" centered />

			<div className="max-w-3xl mx-auto text-center mb-20 -mt-10">
				<p className="text-xl text-muted-foreground leading-relaxed italic">
					"Ne vous contentez pas d'être vus : soyez adoptés. EcloKit n'est pas qu'un support publicitaire,
					c'est un canal de vente directe et un levier d'acquisition client performant pour votre marque."
				</p>
			</div>

			<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
				{advantages.map((item, index) => {
					const Icon = item.icon;
					return (
						<div key={item.title} className="group flex flex-col items-center text-center">
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/50 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 shadow-sm group-hover:shadow-primary/20">
								<Icon className="h-7 w-7 text-primary transition-colors duration-500 group-hover:text-background" />
							</div>
							<h3 className="mb-4 text-lg font-bold leading-tight">{item.title}</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
						</div>
					);
				})}
			</div>

			{/* <div className="mt-24 max-w-4xl mx-auto bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10 text-center animate-fade-in-up">
				<h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
					Un partenariat basé sur des valeurs communes
				</h3>
				<p className="text-lg text-muted-foreground leading-relaxed">
					Nous sélectionnons nos partenaires avec soin. Nous cherchons des entreprises qui, comme nous,
					placent l'éthique et la qualité au centre de leur stratégie. Si vous partagez cet ADN, vous avez
					tout à gagner à collaborer avec nous pour construire une relation commerciale durable et fructueuse.
				</p>
			</div> */}
		</section>
	);
}
