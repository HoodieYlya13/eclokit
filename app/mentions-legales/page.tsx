import type { Metadata } from "next";
import { YnsLink } from "@/components/yns-link";

export const metadata: Metadata = {
	title: "Mentions Légales | EcloKit",
	description:
		"Identification de l'entreprise et conditions d'utilisation du site et de l'habitation EcloKit.",
};

export default function MentionsLegalesPage() {
	return (
		<main className="w-full bg-background py-20 px-6 md:px-12 min-h-screen pt-36 md:pt-48">
			<article className="max-w-4xl mx-auto">
				<header className="mb-16 text-center">
					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight md:leading-18">
						Mentions Légales
					</h1>
					<div className="h-1 w-20 bg-primary mx-auto rounded-full" />
				</header>

				<div className="prose prose-sm md:prose-base prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none prose-headings:text-foreground">
					<section>
						<p className="lead font-medium text-foreground italic">
							Conformément à la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique
							(LCEN), les présentes mentions légales définissent les conditions d'utilisation du site
							www.eclokit.com et de l’application mobile EcloKit.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">1. Identification de l'entreprise</h2>
						<div className="bg-card/50 p-6 rounded-2xl border border-border/50 not-prose mb-8">
							<ul className="space-y-2 text-sm md:text-base">
								<li>
									<strong className="text-foreground">EcloKit</strong>
								</li>
								<li>
									<span className="text-muted-foreground">Forme juridique : </span>SAS
								</li>
								<li>
									<span className="text-muted-foreground">Capital social : </span>10 000 EUR
								</li>
								<li>
									<span className="text-muted-foreground">Siège social : </span>3 rue Marconi, 57070 METZ
								</li>
								<li>
									<span className="text-muted-foreground">Numéro RCS : </span>En cours d'immatriculation
								</li>
								<li>
									<span className="text-muted-foreground">SIRET : </span>123 456 789
								</li>
								<li>
									<span className="text-muted-foreground">TVA : </span>FR12345678912
								</li>
								<li>
									<span className="text-muted-foreground">Email : </span>
									<a href="mailto:contact@EcloKit.com" className="text-primary hover:underline">
										contact@EcloKit.com
									</a>
								</li>
								<li>
									<span className="text-muted-foreground">Téléphone : </span>03 87 38 41 79
								</li>
								<li>
									<span className="text-muted-foreground">Directeur de la publication : </span>HELLO Loanne
								</li>
							</ul>
						</div>

						<h3 className="text-xl font-bold mt-8 mb-4">Hébergement du site</h3>
						<div className="bg-muted/30 p-6 rounded-2xl border border-border/30 not-prose">
							<p className="mb-2">
								<strong className="text-foreground">Ce site est hébergé par Vercel Inc.</strong>
							</p>
							<ul className="space-y-1 text-sm text-muted-foreground">
								<li>Adresse : 440 N Barranca Ave #4133 Covina, CA 91723</li>
								<li>
									Site Web :{" "}
									<a
										href="https://vercel.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline"
									>
										https://vercel.com
									</a>
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">2. Conditions Générales de Vente</h2>
						<p>
							EcloKit propose la vente de box créatives sous forme d'abonnement à destination des particuliers
							(B2C). Les relations commerciales entre EcloKit et ses Clients sont régies par les{" "}
							<YnsLink href="/cgv" className="text-primary hover:underline font-medium">
								Conditions Générales de Vente
							</YnsLink>{" "}
							disponibles sur le site www.eclokit.com.
						</p>
						<p>
							Conformément à la loi LCEN et au Code de la consommation, EcloKit s'engage à informer ses
							Clients de manière claire, transparente et loyale sur les produits et services proposés en
							ligne.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">3. Protection des données personnelles et cookies</h2>
						<p>
							EcloKit collecte des données personnelles dans le cadre de la gestion des abonnements et des
							commandes. Ces données sont traitées conformément au Règlement Général sur la Protection des
							Données (RGPD) et à la Loi Informatique et Libertés.
						</p>
						<ul>
							<li>
								<strong>Délégué à la Protection des Données (DPO) :</strong> Lina Losson
							</li>
							<li>
								<strong>Contact DPO :</strong>{" "}
								<a href="mailto:lina-losson@ecloKit.com" className="text-primary hover:underline">
									lina-losson@ecloKit.com
								</a>
							</li>
						</ul>
						<p>
							Le Client dispose de droits sur ses données personnelles (accès, rectification, etc.),
							exerçables en contactant le DPO. En cas de litige, vous pouvez contacter la CNIL (www.cnil.fr).
						</p>

						<h3 className="text-xl font-bold mt-8">Cookies</h3>
						<p>
							Le site et l'application utilisent des cookies pour faciliter la navigation et personnaliser
							votre expérience. Ces cookies enregistrent des informations relatives à la navigation (audience,
							maintien de session, partage social).
						</p>
						<p>
							Vous pouvez vous opposer à l’enregistrement de cookies via le gestionnaire de cookies ou les
							paramètres de votre navigateur. Certains services peuvent être limités sans ces cookies.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">4. Propriété intellectuelle</h2>
						<p>
							L'ensemble des contenus présents sur le site et l’application (textes, images, logos, etc.) sont
							la propriété exclusive d'EcloKit ou de leurs auteurs respectifs.
						</p>
						<p>
							Toute reproduction ou exploitation sans autorisation écrite préalable d'EcloKit est strictement
							interdite et passible de poursuites pour contrefaçon. Les images de tiers restent la propriété
							de leurs auteurs respectifs.
						</p>
					</section>
				</div>

				<footer className="mt-20 pt-10 border-t border-border">
					<div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
						<YnsLink href="/mentions-legales" className="text-foreground border-b-2 border-primary pb-1">
							Mentions Légales
						</YnsLink>
						<YnsLink href="/cgv" className="hover:text-primary transition-colors">
							CGV
						</YnsLink>
						<YnsLink href="/privacy" className="hover:text-primary transition-colors">
							Politique de confidentialité
						</YnsLink>
						<YnsLink href="/terms" className="hover:text-primary transition-colors">
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
