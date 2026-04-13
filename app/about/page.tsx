import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { Commitments } from "@/components/sections/commitments";
import { SectionHeader } from "@/components/sections/section-header";
import { TeamSection } from "@/components/sections/team-section";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";

const aboutData = {
	pageTitle: "À Propos d'EcloKit",
	heroSection: {
		title: "L'Art de Créer, Tout Simplement",
		introduction:
			"Bienvenue chez EcloKit, votre nouvelle source d’inspiration créative. Nous croyons que la créativité ne devrait jamais être une source de stress ou de complication, mais un plaisir pur et accessible. Vous avez l'envie, nous avons le savoir-faire. Fini les heures passées à chercher le bon pinceau ou la couleur de fil idéale : nous avons conçu EcloKit pour transformer chaque intention en une réalisation concrète, sans aucune contrainte.",
		cta: "Découvrir nos coffrets créatifs",
	},
	conceptSection: {
		title: "Le Concept EcloKit : L'Excellence au service de vos mains",
		description:
			"Chez EcloKit, nous ne nous contentons pas de remplir des boîtes. Nous créons des coffrets créatifs d'exception. Notre secret ? Un concept multi-marques inédit. Nous sélectionnons avec une exigence absolue le matériel et les fournisseurs prestigieux. En ouvrant votre coffret EcloKit, vous aurez le plaisir de retrouver vos marques préférées ou de faire des découvertes exclusives.",
		qualityAssurance:
			"Chaque outil, chaque matière est rigoureusement testé pour sa qualité supérieure. Nous sourçons nos produits en Europe, en choisissant des partenaires qui partagent nos valeurs d’excellence. Avec EcloKit, vous accédez au meilleur de l'univers DIY, dans un format clé-en-main.",
	},
	engagementsSection: {
		title: "Nos Engagements : Créer avec Conscience",
		introText:
			"Parce que créer ne devrait pas se faire au détriment de la planète, EcloKit s'engage concrètement à chaque étape de votre projet.",
		commitments: [
			{
				label: 'Zéro Gaspillage : La "Juste Dose"',
				description:
					"Nous luttons contre la surconsommation de matériel. Chaque coffret contient la quantité exacte de fournitures nécessaire à votre réalisation. Résultat : rien n'est jeté, rien ne finit au fond d'un placard. Vous créez utile, vous créez responsable.",
			},
			{
				label: "Sourcing Éthique & Européen",
				description:
					"Nous privilégions les circuits courts. Nos emballages et nos fournisseurs sont sélectionnés pour leurs valeurs et leur provenance.",
			},
			{
				label: "Solidarité : Soutenir les Femmes",
				description:
					"EcloKit est une aventure née de la vision de trois femmes. Il nous tenait donc à cœur de soutenir celles qui en ont besoin. C'est pourquoi nous reversons une partie de nos bénéfices à la Fondation des Femmes de Paris. En choisissant nos coffrets, vous participez directement au financement de projets qui font bouger les lignes.",
			},
		],
	},
	teamSection: {
		title: "Les Visages derrière EcloKit",
		members: [
			{
				name: "Loanne Hello",
				role: "La Visionnaire",
				bio: "Fondatrice et Cheffe de projet, Loanne est l'étincelle à l'origine d'EcloKit. Passionnée par l’entrepreneuriat et le DIY, elle insuffle la stratégie et veille à la direction artistique de chaque coffret. Pour elle, chaque client doit pouvoir ressentir la ferté de dire : 'C’est moi qui l'ai fait'.",
			},
			{
				name: "Lina Losson",
				role: "La Plume et la Structure",
				bio: "Responsable du contenu, Lina est la garante de l’expérience EcloKit. C’est elle qui structure nos guides et veille à ce que chaque étape de votre création soit d’une clarté absolue. Sa mission : transformer la complexité technique en un jeu d’enfant pour un résultat professionnel.",
			},
			{
				name: "Clara Pischedda",
				role: "L'Architecte Digitale",
				bio: "Experte en développement, Clara donne vie à l’univers EcloKit sur vos écrans. Derrière la fluidité de notre site et la force de notre communauté digitale, c’est elle qui œuvre. Son dynamisme et sa curiosité technique permettent à EcloKit de rester à la pointe de l'innovation créative.",
			},
		],
	},
	footerCta: {
		text: "Rejoignez la communauté EcloKit et libérez votre potentiel créatif dès aujourd'hui.",
		buttonLabel: "Je commence l’aventure",
	},
};

export const metadata: Metadata = {
	title: aboutData.pageTitle,
	description: aboutData.heroSection.introduction,
};

export default function AboutPage() {
	return (
		<main className="w-full">
			<AboutHero title={aboutData.heroSection.title} introduction={aboutData.heroSection.introduction} />

			<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<SectionHeader title={aboutData.conceptSection.title} badge="Notre Concept" />
					<div className="flex flex-col gap-8">
						<p className="text-lg text-muted-foreground leading-relaxed">
							{aboutData.conceptSection.description}
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							{aboutData.conceptSection.qualityAssurance}
						</p>
					</div>
				</div>
			</section>

			<Commitments
				title={aboutData.engagementsSection.title}
				introText={aboutData.engagementsSection.introText}
				commitments={aboutData.engagementsSection.commitments}
			/>

			<TeamSection title={aboutData.teamSection.title} members={aboutData.teamSection.members} />

			<section className="py-32 px-6 md:px-12 w-full max-w-screen-2xl mx-auto text-center border-t border-border">
				<div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
					<h2 className="font-display text-4xl md:text-5xl leading-tight">{aboutData.footerCta.text}</h2>
					<Button
						asChild
						className="rounded-full px-12 py-8 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
					>
						<YnsLink href="/#subscriptions">{aboutData.footerCta.buttonLabel}</YnsLink>
					</Button>
				</div>
			</section>
		</main>
	);
}
