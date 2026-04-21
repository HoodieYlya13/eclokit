import type { Metadata } from "next";
import { YnsLink } from "@/components/yns-link";

export const metadata: Metadata = {
	title: "Politique de Confidentialité | EcloKit",
	description: "Découvrez comment EcloKit protège et traite vos données personnelles conformément au RGPD.",
};

export default function PrivacyPage() {
	return (
		<main className="w-full bg-background py-20 px-6 md:px-12 min-h-screen pt-36 md:pt-48">
			<article className="max-w-4xl mx-auto">
				<header className="mb-16 text-center">
					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight md:leading-18">
						Politique de Confidentialité
					</h1>
					<div className="h-1 w-20 bg-primary mx-auto rounded-full" />
				</header>

				<div className="prose prose-sm md:prose-base prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none prose-headings:text-foreground">
					<section>
						<p className="lead font-medium text-foreground italic">
							Conformément au Règlement Général sur la Protection des Données (RGPD, n°2016/679) et à la Loi
							Informatique et Libertés n°78-17 du 6 janvier 1978 modifiée, EcloKit s'engage à protéger les
							données personnelles de ses utilisateurs.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Responsable du traitement de vos données personnelles</h2>
						<p>
							Les données personnelles vous concernant recueillies à partir de ce site internet font l'objet
							d'un traitement automatisé dont le responsable est :
						</p>
						<div className="bg-card/50 p-6 rounded-2xl border border-border/50 not-prose mb-8">
							<ul className="space-y-2 text-sm md:text-base">
								<li>
									<strong className="text-foreground">EcloKit</strong>
								</li>
								<li>
									<span className="text-muted-foreground">Adresse : </span>3 rue Marconi, 57070 METZ
								</li>
								<li>
									<span className="text-muted-foreground">E-mail : </span>
									<a href="mailto:contact@eclokit.com" className="text-primary hover:underline">
										contact@eclokit.com
									</a>
								</li>
								<li>
									<span className="text-muted-foreground">Délégué à la Protection des Données (DPO) : </span>
									Lina Losson —{" "}
									<a href="mailto:lina-losson@EcloKit.com" className="text-primary hover:underline">
										lina-losson@EcloKit.com
									</a>
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">
							À quel moment vos données personnelles sont-elles collectées ?
						</h2>
						<p>
							Durant l'utilisation de ce site internet, EcloKit est susceptible de collecter vos données à
							caractère personnel à différents endroits ou moments lorsque :
						</p>
						<ul>
							<li>vous naviguez sur les pages du site,</li>
							<li>vous souscrivez à un abonnement box,</li>
							<li>vous remplissez un questionnaire lors de votre inscription ou de votre renouvellement,</li>
							<li>vous vous abonnez à notre Newsletter,</li>
							<li>vous entrez en contact avec nous via la rubrique « Contact »,</li>
							<li>
								vous utilisez l’application mobile EcloKit (navigation, interactions, publications de
								contenus, utilisation des fonctionnalités communautaires).
							</li>
						</ul>
						<p>
							EcloKit veille à ne collecter que les données strictement nécessaires à la fourniture des
							produits que vous souhaitez utiliser.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Objectifs du traitement de vos données personnelles</h2>
						<p>
							Les données personnelles collectées font l'objet d'un traitement informatique dont les objectifs
							sont les suivants :
						</p>
						<ul>
							<li>Gérer votre abonnement et l'expédition de vos box,</li>
							<li>Traiter et suivre vos commandes et paiements,</li>
							<li>
								Élaborer des statistiques et analyses de fréquentation afin d'améliorer la qualité des
								services proposés,
							</li>
							<li>
								Vous informer sur les produits, événements, services et offres d'EcloKit si vous êtes abonné à
								la Newsletter,
							</li>
							<li>
								Vous envoyer des messages de prospection commerciale, à condition que vous ayez donné votre
								accord,
							</li>
							<li>
								Assurer la sécurité de l'accès à vos données personnelles et détecter d'éventuelles tentatives
								d'intrusion informatique,
							</li>
							<li>Gérer vos avis et retours via les questionnaires auxquels vous participez,</li>
							<li>
								<strong>Dans le cadre de l’utilisation de l’application mobile EcloKit :</strong>
								<ul className="mt-2 pl-6">
									<li>
										Permettre le fonctionnement des fonctionnalités communautaires (publication de contenus,
										interactions entre utilisateurs),
									</li>
									<li>Personnaliser l’expérience utilisateur (contenus recommandés, préférences),</li>
									<li>Améliorer l’application et ses fonctionnalités,</li>
									<li>Assurer la modération des contenus et le respect des règles d’utilisation,</li>
									<li>Analyser l’usage de l’application à des fins statistiques.</li>
								</ul>
							</li>
						</ul>
						<p>
							Pour chaque finalité énoncée ci-dessus, le traitement de vos données personnelles est légalement
							fondé :
						</p>
						<ul>
							<li>sur le fait qu'il est nécessaire à l'exécution du contrat d'abonnement,</li>
							<li>sur le fait qu'il est nécessaire au respect d'une obligation légale,</li>
							<li>sur le fait que vous avez donné votre consentement au traitement,</li>
							<li>sur un intérêt légitime reconnu pour EcloKit (prévention de la fraude, sécurité, etc.).</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Nature des données personnelles collectées</h2>
						<p>EcloKit est susceptible de collecter :</p>
						<ul>
							<li>
								<strong>Des données d'identification :</strong> noms, prénoms, adresse postale, adresse
								e-mail, numéro de téléphone,
							</li>
							<li>
								<strong>Des données de paiement :</strong> traitées via notre prestataire sécurisé Stripe
								(EcloKit ne conserve pas vos coordonnées bancaires),
							</li>
							<li>
								<strong>Des données de préférences créatives :</strong> collectées via le questionnaire
								obligatoire, utilisées à titre purement indicatif,
							</li>
							<li>
								<strong>Des données d’utilisation de l’application :</strong> interactions, contenus publiés
								(photos, commentaires), historique d’activité,
							</li>
							<li>
								<strong>Des données techniques :</strong> type d’appareil, système d’exploitation,
								identifiants techniques.
							</li>
						</ul>
						<p>
							Le non-renseignement de certains champs obligatoires peut avoir pour conséquence l'impossibilité
							pour EcloKit de vous fournir le service concerné.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Destinataires de vos données personnelles</h2>
						<p>
							Les données sont exclusivement destinées à EcloKit. Elles sont néanmoins susceptibles d'être
							transmises :
						</p>
						<ul>
							<li>à des sociétés sous-traitantes (hébergement, paiements, Newsletter),</li>
							<li>
								à des partenaires commerciaux,{" "}
								<strong>uniquement si vous avez donné votre accord explicite</strong>.
							</li>
						</ul>
						<div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 mt-6">
							<p className="text-sm md:text-base font-medium">
								Dans le cadre de partenariats commerciaux, EcloKit peut transmettre certaines données à des
								partenaires uniquement avec votre consentement préalable, libre et explicite. Vous pouvez
								retirer votre consentement à tout moment.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Durées de conservation de vos données personnelles</h2>
						<ul>
							<li>
								<strong>Actions marketing et prospection :</strong> 3 ans maximum à compter de la fin de la
								relation commerciale.
							</li>
							<li>
								<strong>Aspects contractuels et comptables :</strong> 10 ans maximum conformément au Code de
								commerce.
							</li>
							<li>
								<strong>Application mobile :</strong> toute la durée d’utilisation du service, puis
								suppression sous 3 ans après la dernière activité.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Protection de vos données personnelles</h2>
						<p>
							EcloKit met en œuvre des mesures de sécurité appropriées afin de protéger vos données
							personnelles contre toute destruction, perte, modification, divulgation ou accès non autorisé.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Vos droits</h2>
						<p>Conformément au RGPD, vous disposez à tout moment des droits suivants :</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-8">
							{[
								"Droit d'accès",
								"Droit de rectification",
								"Droit à l'effacement",
								"Droit d'opposition",
								"Droit à la limitation",
								"Droit à la portabilité",
								"Droit de ne pas faire l'objet d'une décision automatisée",
								"Droit de retrait du consentement",
							].map((right) => (
								<div
									key={right}
									className="bg-muted/30 p-4 rounded-xl text-sm font-medium border border-border/30"
								>
									{right}
								</div>
							))}
						</div>
						<p>
							Pour exercer l'un de ces droits, vous pouvez contacter le DPO :{" "}
							<a href="mailto:lina-losson@EcloKit.com" className="text-primary hover:underline">
								lina-losson@EcloKit.com
							</a>
						</p>
						<p className="text-sm text-muted-foreground">
							Afin d'éviter toute usurpation d'identité, une copie recto-verso d'une pièce d'identité valide
							devra être jointe à votre demande. EcloKit s'engage à répondre dans un délai maximum d'un mois.
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
						<YnsLink href="/privacy" className="text-foreground border-b-2 border-primary pb-1">
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
