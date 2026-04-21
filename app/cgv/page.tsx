import type { Metadata } from "next";
import { YnsLink } from "@/components/yns-link";

export const metadata: Metadata = {
	title: "Conditions Générales de Vente (CGV) | EcloKit",
	description:
		"Consultez les Conditions Générales de Vente d'EcloKit, votre abonnement de box créatives DIY.",
};

export default function CGVPage() {
	return (
		<main className="w-full bg-background py-20 px-6 md:px-12 min-h-screen pt-36 md:pt-48">
			<article className="max-w-4xl mx-auto">
				<header className="mb-16 text-center">
					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight md:leading-18">
						Conditions Générales de Vente
					</h1>
					<div className="h-1 w-20 bg-primary mx-auto rounded-full" />
				</header>

				<div className="prose prose-sm md:prose-base prose-headings:font-display prose-headings:font-bold prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none prose-headings:text-foreground">
					<section>
						<h2 className="text-2xl md:text-3xl">Préambule</h2>
						<p>
							Conformément à la loi pour la Confiance dans l'Économie Numérique (LCEN, n°2004-575 du 21 juin
							2004), qui encadre les pratiques commerciales sur internet, EcloKit est tenu d'informer le
							Client de manière claire, transparente et loyale sur les produits et services proposés en ligne.
							Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations
							contractuelles entre EcloKit et ses Clients dans le cadre des achats effectués sur le site
							www.eclokit.com.
						</p>
						<p>
							Les présentes Conditions Générales de Vente (ci-après « CGV ») ont pour objet de définir les
							droits et obligations de EcloKit SAS (ci-après « le Vendeur ») et de toute personne physique
							majeure agissant à des fins personnelles (ci-après « le Client ») dans le cadre de la vente de
							biens proposés par le Vendeur.
						</p>
						<p>
							Ces CGV sont consultables à tout moment sur le site internet www.eclokit.com ou jointes à tout
							devis ou contrat. Le fait pour le Client de passer commande implique l’acceptation sans réserve
							des présentes CGV.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Identification du vendeur</h2>
						<div className="bg-card/50 p-6 rounded-2xl border border-border/50 not-prose mb-8">
							<ul className="space-y-2 text-sm md:text-base">
								<li>
									<strong className="text-foreground">EcloKit SAS</strong>
								</li>
								<li>
									<span className="text-muted-foreground">Capital social : </span>10.000 EUR
								</li>
								<li>
									<span className="text-muted-foreground">Adresse : </span>3 rue Marconi, 57070 Metz
								</li>
								<li>
									<span className="text-muted-foreground">SIRET : </span>123 456 789
								</li>
								<li>
									<span className="text-muted-foreground">TVA : </span>FR12345678912
								</li>
								<li>
									<span className="text-muted-foreground">Email : </span>
									<a href="mailto:contact@eclokit.com" className="text-primary hover:underline">
										contact@eclokit.com
									</a>
								</li>
								<li>
									<span className="text-muted-foreground">Téléphone : </span>03 87 38 41 79
								</li>
								<li>
									<span className="text-muted-foreground">Représentant légal : </span>HELLO Loanne
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
						<h2 className="text-2xl md:text-3xl">Article 1 : Produits et abonnements</h2>
						<p>
							EcloKit propose la vente de box créatives sous forme d’abonnement. Chaque box mensuelle contient
							un kit DIY complet permettant au Client de réaliser une activité créative (matériel,
							instructions et accessoires nécessaires).
						</p>
						<p>
							L’abonnement EcloKit fonctionne sur une base mensuelle avec prélèvement automatique sur une
							durée déterminée, selon le type d’abonnement choisi par le Client et est reconduit tacitement.
							Chaque mois, le Client reçoit une box différente, dont le contenu est déterminé par le Vendeur.
							Le contenu des box n’est pas personnalisable sauf indication contraire.
						</p>

						<h3 className="text-xl">1.1. Collecte de données — Questionnaire de préférences</h3>
						<p>
							Lors de la souscription à un abonnement EcloKit, le Client est invité à compléter un
							questionnaire de préférences créatives. Ce questionnaire est obligatoire pour finaliser la
							souscription. Il est également proposé au Client à chaque renouvellement de son abonnement.
						</p>
						<p>
							Les données collectées via ce questionnaire sont utilisées à titre purement indicatif et
							permettent à EcloKit de mieux orienter sa sélection de box. Elles ne constituent pas un
							engagement du Vendeur quant à la personnalisation du contenu de la box. Ces données sont
							traitées conformément à la politique de confidentialité d'EcloKit et aux dispositions du
							Règlement Général sur la Protection des Données (RGPD).
						</p>

						<h3 className="text-xl">1.2. Formules d'abonnement disponibles</h3>
						<p>EcloKit propose trois formules d'abonnement :</p>
						<ul>
							<li>
								<strong>Abonnement mensuel :</strong> 39,90 € par mois. Sans engagement, résiliable à tout
								moment avant le 10 du mois depuis l'espace client. À défaut de résiliation dans ce délai,
								l'abonnement est reconduit tacitement pour le mois suivant.
							</li>
							<li>
								<strong>Abonnement 6 mois :</strong> 36,90 € par mois, soit 221,40 € pour la période. Souscrit
								avec un engagement ferme sur 6 mois. Le Client bénéficie néanmoins de son droit de
								rétractation de 14 jours à compter de la souscription, conformément à l'article L221-18 du
								Code de la consommation.
							</li>
							<li>
								<strong>Abonnement annuel :</strong> 34,90 € par mois, soit 418,80 € pour la période. Souscrit
								avec un engagement ferme sur 12 mois. Le droit de rétractation de 14 jours s'applique dans les
								mêmes conditions que l'abonnement 6 mois.
							</li>
						</ul>
						<p>
							Pour les abonnements 6 mois et annuels, aucune résiliation anticipée ne pourra être effectuée en
							dehors de la période de rétractation, sauf dispositions légales contraires.
						</p>

						<h3 className="text-xl">1.3. Application mobile EcloKit</h3>
						<p>
							EcloKit met à disposition une application mobile dédiée aux loisirs créatifs, accessible
							gratuitement à tout utilisateur. Cette application permet notamment de consulter des contenus
							créatifs, de partager ses créations, d’interagir avec une communauté et d’accéder à des
							fonctionnalités participatives.
						</p>
						<p>
							Certaines fonctionnalités ou contenus peuvent être réservés aux Clients disposant d’un
							abonnement actif. L’utilisation de l’application est soumise à l’acceptation des Conditions
							Générales d’Utilisation (CGU) disponibles sur l’application et le site internet.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 2 : Disponibilité</h2>
						<p>
							Les offres de produits sont valables tant qu’elles sont visibles sur le site ou mentionnées dans
							les documents commerciaux, dans la limite des stocks disponibles. En cas d’indisponibilité après
							passation de commande, le Vendeur informera le Client dans les meilleurs délais et proposera
							soit un produit de remplacement, soit l’annulation de la commande avec remboursement intégral
							sous 14 jours de délai.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 3 : Fixation du prix</h2>
						<p>
							Les prix indiqués sont en euros (€) et s’entendent toutes taxes comprises (TTC), hors frais de
							livraison. Le Vendeur se réserve le droit de modifier ses prix à tout moment. Toutefois, le prix
							appliqué sera celui en vigueur au moment de la commande validée.
						</p>
						<p>
							EcloKit peut proposer des offres promotionnelles ponctuelles, telles que des remises de
							bienvenue (10% sur la première commande via newsletter). Les offres sont valables selon les
							conditions précisées sur le site et ne sont pas cumulables sauf mention contraire.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 4 : Frais de livraison</h2>
						<p>
							Les frais de livraison sont précisés au Client avant la validation finale de la commande et
							figurent sur la confirmation de commande. Ils sont calculés en fonction de la distance de
							l’adresse de livraison et viennent s’ajouter aux prix des abonnements/produits, sauf indication
							contraire.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 5 : Processus de commande</h2>
						<ol>
							<li>Le Client sélectionne le ou les produits souhaités et les ajoute au panier.</li>
							<li>
								Le Client vérifie le récapitulatif de la commande (produits, quantités, prix, frais
								éventuels).
							</li>
							<li>Le Client renseigne les informations de facturation et de livraison.</li>
							<li>
								Le Client valide la commande après avoir pris connaissance et accepté sans réserve les
								présentes CGV.
							</li>
							<li>
								Le Vendeur envoie un e-mail de confirmation de commande et/ou un justificatif d’achat et les
								présentes CGV en PDF.
							</li>
						</ol>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 6 : Validation de la commande</h2>
						<p>
							Toute commande sera considérée comme définitive après le paiement intégral du prix ou selon les
							conditions de paiement convenues. Le Vendeur se réserve le droit de refuser ou d’annuler toute
							commande en cas de fraude, d’incident de paiement ou de litige antérieur avec le Client.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 7 : Paiement</h2>
						<p>
							Le règlement des achats peut s’effectuer par : Carte bancaire (Visa, Mastercard, PayPal,
							ApplePay, GooglePay). Le montant à régler tient compte des éventuels rabais, remises ou
							ristournes accordés par le Vendeur.
						</p>
						<h3 className="text-xl">7.1. Sécurisation</h3>
						<p>
							Le Vendeur met en place des procédures pour assurer la sécurité des transactions (plateforme de
							paiement sécurisée, protocole SSL, etc.).
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 8 : Livraison</h2>
						<p>
							Les délais de livraison sont donnés à titre indicatif (3 à 6 jours) et ne constituent pas un
							engagement ferme. Les livraisons seront effectuées tous les 15 du mois et opérées par Mondial
							Relay.
						</p>
						<p>
							Dans le cadre d’un abonnement, le Client est tenu d’indiquer tout changement d’adresse au plus
							tard le 10 du mois précédant la période concernée.
						</p>
						<h3 className="text-xl">8.1. Réception des produits</h3>
						<p>
							À la réception, le Client doit vérifier l’état du colis. Toute anomalie (avarie, produits
							manquants, colis endommagé) doit être notifiée au transporteur et au Vendeur dans un délai de 48
							heures ouvrées.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 9 : Droit de rétractation</h2>
						<p>
							Conformément à l’article L221-18 du Code de la consommation, le Client dispose d’un délai de 14
							jours à compter de la réception du produit pour exercer son droit de rétractation.
						</p>
						<p>Pour exercer ce droit, le Client doit informer le Vendeur de sa décision sans ambiguïté.</p>
						<div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 not-prose my-6">
							<p className="text-sm md:text-base mb-4 font-medium italic">
								Un formulaire type de rétractation est disponible pour faciliter votre démarche.
							</p>
							<button
								type="button"
								disabled
								className="text-xs font-bold uppercase tracking-widest bg-foreground text-background px-6 py-3 rounded-full opacity-50 cursor-not-allowed"
							>
								Formulaire de rétractation (PDF bientôt disponible)
							</button>
						</div>

						<h3 className="text-xl">9.1. Retour des produits</h3>
						<p>
							Le Client renvoie les produits dans leur état d’origine à l’adresse communiquée par le Vendeur,
							à ses frais. Le remboursement sera effectué sous 14 jours après réception.
						</p>
						<h3 className="text-xl">9.2. Exceptions</h3>
						<p>
							Le droit de rétractation ne s’applique pas aux biens nettement personnalisés, périssables, ou
							descellés pour des raisons d’hygiène.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 10 : Garanties et SAV</h2>
						<p>
							Le Vendeur est tenu des défauts de conformité (articles L217-4 et suivants du Code de la
							consommation) et des vices cachés (articles 1641 et suivants du Code civil).
						</p>
						<h3 className="text-xl">10.1. Garantie légale de conformité</h3>
						<p>
							Le Client bénéficie d'une garantie légale de conformité de 2 ans à compter de la délivrance du
							bien.
						</p>
						<h3 className="text-xl">10.2. Garantie contre les vices cachés</h3>
						<p>
							Le Client bénéficie de la garantie contre les vices cachés et dispose d'un délai de 2 ans à
							compter de la découverte du vice.
						</p>
						<h3 className="text-xl">10.3. Exclusions de garantie</h3>
						<p>
							La garantie ne couvre pas les dommages résultant d’une mauvaise utilisation, d’un entretien
							défectueux ou d’une usure normale.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 11 : Responsabilité</h2>
						<p>
							La responsabilité du Vendeur est engagée uniquement en cas de faute prouvée. Le Vendeur ne
							saurait être tenu responsable de tout dommage indirect ou préjudice financier.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 12 : Données personnelles</h2>
						<p>
							Le Vendeur s’engage à respecter la confidentialité des données personnelles (RGPD). EcloKit a
							désigné un Délégué à la Protection des Données (DPO) :{" "}
							<a href="mailto:lina-losson@eclokit.com" className="text-primary hover:underline">
								lina-losson@eclokit.com
							</a>
							.
						</p>
						<p>
							Le Client dispose d’un droit d’accès, de rectification, d’opposition et de suppression de ses
							données en contactant le Vendeur. Il peut également introduire une réclamation auprès de la CNIL
							(www.cnil.fr).
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 13 : Règlement des litiges</h2>
						<p>
							Les présentes CGV sont soumises au droit français. En cas de litige, le Client peut recourir
							gratuitement à un médiateur de la consommation : <strong>AME CONSO</strong> (197 Bd
							Saint-Germain, 75007 Paris - www.mediationconso-ame.com).
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 14 : Cookies</h2>
						<p>
							Le site utilise des cookies pour améliorer l’expérience utilisateur. Le Client peut modifier ses
							paramètres via son navigateur.
						</p>
					</section>

					<section>
						<h2 className="text-2xl md:text-3xl">Article 15 : Propriété intellectuelle</h2>
						<p>
							EcloKit est une marque déposée. Le site et ses contenus sont la propriété exclusive de la
							société EcloKit. Toute reproduction est interdite sans accord préalable.
						</p>
					</section>
				</div>

				<footer className="mt-20 pt-10 border-t border-border">
					<div className="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
						<YnsLink href="/mentions-legales" className="hover:text-primary transition-colors">
							Mentions Légales
						</YnsLink>
						<YnsLink href="/cgv" className="text-foreground border-b-2 border-primary pb-1">
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
