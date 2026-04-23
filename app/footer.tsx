import { cacheLife } from "next/cache";
import { try_ as safe } from "safe-try";
import { FooterNewsletterForm } from "@/components/footer-newsletter-form";
import { SocialLinks } from "@/components/social-links";
import { YnsLink } from "@/components/yns-link";
import { commerce } from "@/lib/commerce";

async function FooterLegalPages() {
	"use cache";
	cacheLife("hours");

	const pages = await commerce.legalPageBrowse();

	if (pages.data.length === 0) {
		return null;
	}

	return (
		<div>
			<h3 className="text-sm font-semibold text-foreground">Legal</h3>
			<ul className="mt-4 space-y-3">
				{pages.data.map((page) => (
					<li key={page.id}>
						<YnsLink
							prefetch={"eager"}
							href={`/legal${page.path}`}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							{page.title}
						</YnsLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export async function Footer() {
	const [_, bestSellers] = await safe(commerce.collectionGet({ idOrSlug: "best-sellers" }));
	const bestSellersSlug = bestSellers?.slug || "best-sellers";

	return (
		<footer className="bg-background pt-20 pb-10 px-6 md:px-12 border-t border-border text-foreground">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
				{/* Brand section */}
				<div className="md:col-span-4 pr-8">
					<h3 className="font-display text-3xl font-bold mb-6">EcloKit</h3>
					<p className="text-muted-foreground mb-8 font-light max-w-sm">
						Box de loisirs créatifs clé en main mensuels multi-marque pour découvrir et prendre du temps pour
						vous.
					</p>
					<SocialLinks />
				</div>

				{/* Shop links */}
				<div className="md:col-span-2">
					<h4 className="font-display font-semibold mb-6">Menu</h4>
					<ul className="space-y-4 text-sm text-muted-foreground font-medium">
						<li>
							<YnsLink href="/" className="hover:text-primary transition-colors">
								Accueil
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/subscriptions" className="hover:text-primary transition-colors">
								Abonnements
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/products" className="hover:text-primary transition-colors">
								Boutique
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/blog" className="hover:text-primary transition-colors">
								Blog
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/become-partner" className="hover:text-primary transition-colors">
								Devenir partenaire
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/about" className="hover:text-primary transition-colors">
								À propos
							</YnsLink>
						</li>
					</ul>

					{/* Support */}
					{/* TODO: re-add when fixed */}
					{/* <div>
						<h3 className="text-sm font-semibold text-foreground">Support</h3>
						<ul className="mt-4 space-y-3">
							<li>
								<YnsLink
									prefetch={"eager"}
									href="/faq"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									FAQ
								</YnsLink>
							</li>
						</ul>
					</div> */}

					{/* Legal */}
					{/* TODO: re-add when fixed */}
					{/* <FooterLegalPages /> */}
				</div>

				{/* Useful links */}
				<div className="md:col-span-2">
					<h4 className="font-display font-semibold mb-6">Liens utiles</h4>
					<ul className="space-y-4 text-sm text-muted-foreground font-medium">
						<li>
							<YnsLink
								href={`/collection/${bestSellersSlug}`}
								className="hover:text-primary transition-colors"
							>
								Coups de coeur
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/contact" className="hover:text-primary transition-colors">
								Contact
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/faq" className="hover:text-primary transition-colors">
								FAQ
							</YnsLink>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div className="md:col-span-4">
					<h4 className="font-display font-semibold mb-6">Restons en contact</h4>
					<p className="text-sm text-muted-foreground mb-6 font-light">
						Abonnez-vous pour recevoir des nouvelles de nos box, des offres exclusives et des conseils DIY.
					</p>
					<FooterNewsletterForm />
				</div>
			</div>

			{/* Bottom bar */}
			<div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
				<p>&copy; {new Date().getFullYear()} EcloKit. Tous droits réservés.</p>
				<div className="grid w-full md:w-auto md:grid-cols-2 gap-2 lg:grid-cols-4 mt-4 md:mt-0 text-left md:text-center">
					<YnsLink href="/mentions-legales" className="hover:text-foreground">
						Mentions légales
					</YnsLink>
					<YnsLink href="/cgv" className="hover:text-foreground">
						Conditions générales de ventes
					</YnsLink>
					<YnsLink href="/privacy" className="hover:text-foreground">
						Politique de confidentialité
					</YnsLink>
					<YnsLink href="/terms" className="hover:text-foreground">
						Conditions générales d'utilisation
					</YnsLink>
				</div>
			</div>
		</footer>
	);
}
