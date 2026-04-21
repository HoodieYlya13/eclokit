import type { Metadata } from "next";
import { YnsLink } from "@/components/yns-link";

export const metadata: Metadata = {
	title: "Conditions Générales d’Utilisation (CGU) | EcloKit",
	description: "Consultez les conditions d'utilisation du site et de l'application EcloKit.",
};

export default function TermsPage() {
	return (
		<main className="w-full bg-background py-20 px-6 md:px-12 min-h-screen pt-36 md:pt-48">
			<article className="max-w-4xl mx-auto">
				<header className="mb-16 text-center">
					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight md:leading-18">
						Conditions Générales d'Utilisation
					</h1>
					<div className="h-1 w-20 bg-primary mx-auto rounded-full" />
				</header>

				<div className="prose prose-sm md:prose-base prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none prose-headings:text-foreground">
					<section>
						<h2 className="text-2xl md:text-3xl">1. Objet</h2>
						<p>
							Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») ont pour objet de définir
							les modalités et conditions d’accès et d’utilisation du site internet www.EcloKit.com (ci-après
							le « Site ») et de l’application mobile EcloKit (ci-après l’« Application »), édités par EcloKit
							SAS.
						</p>
						<p>
							Le Site et l’Application permettent aux utilisateurs d’accéder à des contenus créatifs, de gérer
							leur compte, de partager des créations et d’interagir avec une communauté autour des activités
							DIY proposées par EcloKit.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">2. Éditeur</h2>
						<div className="bg-card/50 p-6 rounded-2xl border border-border/50 not-prose mb-8">
							<ul className="space-y-2 text-sm md:text-base">
								<li>
									<strong className="text-foreground">EcloKit SAS</strong>
								</li>
								<li>
									<span className="text-muted-foreground">Adresse : </span>3 rue Marconi, 57070 METZ
								</li>
								<li>
									<span className="text-muted-foreground">E-mail : </span>
									<a href="mailto:contact@ecloKit.com" className="text-primary hover:underline">
										contact@ecloKit.com
									</a>
								</li>
								<li>
									<span className="text-muted-foreground">Téléphone : </span>03 87 38 41 79
								</li>
								<li>
									<span className="text-muted-foreground">SIRET : </span>123 456 789
								</li>
								<li>
									<span className="text-muted-foreground">Directeur de la publication : </span>HELLO Loanne
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">3. Accès au Site et à l’Application</h2>
						<p>
							Le Site et l’Application sont accessibles gratuitement à tout utilisateur disposant d’un accès à
							Internet et d’un équipement compatible. Certaines fonctionnalités peuvent nécessiter la création
							d’un compte utilisateur.
						</p>
						<p>
							EcloKit se réserve le droit de modifier, suspendre ou interrompre tout ou partie du Site ou de
							l’Application à tout moment, notamment pour des raisons de maintenance ou de mise à jour.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">4. Création de compte</h2>
						<p>
							L’accès à certaines fonctionnalités nécessite la création d’un compte. L’utilisateur s’engage à
							fournir des informations exactes, complètes et à jour lors de son inscription.
						</p>
						<p>
							L’Utilisateur choisit un identifiant (adresse e-mail) ainsi qu’un mot de passe personnel et
							confidentiel. L’utilisateur est seul responsable de la confidentialité de ses identifiants et de
							toute utilisation de son compte. En cas d’utilisation frauduleuse, l’utilisateur doit en
							informer immédiatement EcloKit.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">5. Utilisation des services</h2>
						<p>
							L’utilisateur s’engage à utiliser le Site et l’Application conformément aux lois et règlements
							en vigueur. Il est strictement interdit de :
						</p>
						<ul>
							<li>publier des contenus illégaux, violents, diffamatoires ou discriminatoires,</li>
							<li>usurper l’identité d’un tiers,</li>
							<li>diffuser des contenus publicitaires non autorisés (spam),</li>
							<li>porter atteinte aux droits de propriété intellectuelle,</li>
							<li>perturber le fonctionnement du Site ou de l’Application,</li>
							<li>utiliser les services à des fins frauduleuses.</li>
						</ul>
						<p>
							EcloKit se réserve le droit de supprimer tout contenu non conforme et de suspendre ou supprimer
							un compte utilisateur sans préavis en cas de violation des présentes CGU.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">6. Contenus publiés par les utilisateurs</h2>
						<p>
							L’utilisateur peut publier du contenu sur le Site et/ou l’Application (photos, textes,
							commentaires). L’utilisateur demeure propriétaire de ses contenus.
						</p>
						<div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 my-6">
							<p className="text-sm md:text-base font-medium">
								En publiant sur le Site ou l’Application, l’utilisateur accorde à EcloKit une licence non
								exclusive, gratuite et mondiale permettant d’utiliser ces contenus à des fins de
								communication, de promotion et d’animation de la communauté.
							</p>
						</div>
						<p>L’utilisateur garantit disposer de tous les droits nécessaires sur les contenus publiés.</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">7. Responsabilité</h2>
						<p>
							EcloKit met en œuvre tous les moyens raisonnables pour assurer le bon fonctionnement du Site et
							de l’Application. Toutefois, l’éditeur ne garantit pas une disponibilité continue, l’absence de
							bugs ou de virus.
						</p>
						<p>
							EcloKit ne saurait être tenu responsable des dommages indirects résultant de l’utilisation du
							Site ou de l’Application, ni des contenus publiés par les utilisateurs.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">8. Données personnelles</h2>
						<p>
							L’utilisation du Site et de l’Application implique la collecte et le traitement de données
							personnelles conformément à la{" "}
							<YnsLink href="/privacy" className="text-primary hover:underline">
								Politique de Confidentialité
							</YnsLink>{" "}
							d’EcloKit.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">9. Propriété intellectuelle</h2>
						<p>
							L’ensemble des éléments présents sur le Site et l’Application (textes, images, logos, code,
							etc.) sont la propriété exclusive d’EcloKit SAS, sauf mention contraire. Toute reproduction ou
							exploitation sans autorisation préalable est strictement interdite.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">10. Suspension et suppression de compte</h2>
						<p>
							EcloKit se réserve le droit de suspendre ou supprimer un compte utilisateur en cas de
							non-respect des présentes CGU, de comportement frauduleux ou d’atteinte à l’image de la marque.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">11. Modification des CGU</h2>
						<p>
							EcloKit se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
							informés des modifications par tout moyen approprié.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">12. Droit applicable et litiges</h2>
						<p>
							Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable sera
							privilégiée. À défaut, les tribunaux compétents seront ceux du ressort du siège social
							d’EcloKit.
						</p>
					</section>
				</div>

				<footer className="mt-20 pt-10 border-t border-border">
					<div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
						<YnsLink href="/mentions-legales" className="hover:text-primary transition-colors">
							Mentions Légales
						</YnsLink>
						<YnsLink href="/cgv" className="hover:text-primary transition-colors">
							CGV
						</YnsLink>
						<YnsLink href="/privacy" className="hover:text-primary transition-colors">
							Politique de confidentialité
						</YnsLink>
						<YnsLink href="/terms" className="text-foreground border-b-2 border-primary pb-1">
							CGU
						</YnsLink>
					</div>
					<div className="mt-10 flex justify-center">
						<YnsLink
							href="/"
							className="text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-all"
						>
							Retour à l'accueil
						</YnsLink>
					</div>
				</footer>
			</article>
		</main>
	);
}
