import { cacheLife } from "next/cache";
import { YnsLink } from "@/components/yns-link";

export async function Navbar({ className }: { className?: string }) {
	"use cache";
	cacheLife("hours");

	return (
		<nav className={className}>
			<YnsLink
				prefetch={"eager"}
				href="/"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Accueil
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/#subscriptions"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Abonnements
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/blog"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Blog
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/about"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				À propos
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/contact"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Contact
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/products"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Boutique
			</YnsLink>
		</nav>
	);
}
