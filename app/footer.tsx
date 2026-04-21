import { cacheLife } from "next/cache";
import { FooterNewsletterForm } from "@/components/footer-newsletter-form";
import { SocialLinks } from "@/components/social-links";
import { YnsLink } from "@/components/yns-link";
import { commerce } from "@/lib/commerce";

async function FooterCollections() {
	"use cache";
	cacheLife("hours");

	const collections = await commerce.collectionBrowse({ limit: 5 });

	return (
		<ul className="space-y-4 text-sm text-muted-foreground font-medium">
			{collections.data.map((collection) => (
				<li key={collection.id}>
					<YnsLink
						prefetch={"eager"}
						href={`/collection/${collection.slug}`}
						className="hover:text-primary transition-colors"
					>
						{collection.name}
					</YnsLink>
				</li>
			))}
		</ul>
	);
}

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

export function Footer() {
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
					<h4 className="font-display font-semibold mb-6">Boutique</h4>
					<FooterCollections />

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

				{/* Information links */}
				<div className="md:col-span-2">
					<h4 className="font-display font-semibold mb-6">Informations</h4>
					<ul className="space-y-4 text-sm text-muted-foreground font-medium">
						<li>
							<YnsLink href="/#philosophy" className="hover:text-primary transition-colors">
								À propos
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/contact" className="hover:text-primary transition-colors">
								Contact
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/subscriptions" className="hover:text-primary transition-colors">
								Abonnements
							</YnsLink>
						</li>
						<li>
							<YnsLink href="/blog" className="hover:text-primary transition-colors">
								Blog
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
						Abonnez-vous pour recevoir des nouvelles de nos box, des offres exclusives et des conseils de
						créativité.
					</p>
					<FooterNewsletterForm />
				</div>
			</div>

			{/* Bottom bar */}
			<div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
				<p>&copy; {new Date().getFullYear()} EcloKit. Tous droits réservés.</p>
				<div className="flex space-x-6 mt-4 md:mt-0">
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
