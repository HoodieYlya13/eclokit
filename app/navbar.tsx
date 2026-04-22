"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { YnsLink } from "@/components/yns-link";
import { cn } from "@/lib/utils";

type Category = { title: string; slug: string };

export function Navbar({ categories = [], className }: { categories?: Category[]; className?: string }) {
	const isMobile = className?.includes("flex-col");

	if (isMobile) {
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
					href="/subscriptions"
					className="hover:text-primary transition-colors"
					activeClassName="text-foreground border-b-2 border-primary pb-1"
				>
					Abonnements
				</YnsLink>
				<div className="flex flex-col space-y-4">
					<YnsLink
						prefetch={"eager"}
						href="/products"
						className="font-bold text-foreground"
						activeClassName="text-primary"
					>
						Boutique
					</YnsLink>
					<div className="pl-4 flex flex-col space-y-3 border-l border-border">
						{categories.map((category) => (
							<YnsLink
								key={category.slug}
								href={`/category/${category.slug}`}
								className="text-muted-foreground hover:text-primary transition-colors text-sm"
							>
								{category.title}
							</YnsLink>
						))}
					</div>
				</div>
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
					href="/become-partner"
					className="hover:text-primary transition-colors"
					activeClassName="text-foreground border-b-2 border-primary pb-1"
				>
					Devenir partenaire
				</YnsLink>
				<YnsLink
					prefetch={"eager"}
					href="/about"
					className="hover:text-primary transition-colors"
					activeClassName="text-foreground border-b-2 border-primary pb-1"
				>
					À propos
				</YnsLink>
			</nav>
		);
	}

	return (
		<nav className={cn("hidden lg:flex items-center gap-8", className)}>
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
				href="/subscriptions"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Abonnements
			</YnsLink>

			<NavigationMenu className="[&_[data-slot=navigation-menu-viewport]]:border-none">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary px-0 text-sm font-medium transition-colors border-none shadow-none focus:bg-transparent h-auto py-0">
							<YnsLink
								prefetch={"eager"}
								href="/products"
								className="mr-1"
								activeClassName="text-foreground border-b-2 border-primary pb-1"
							>
								Boutique
							</YnsLink>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[240px] gap-1 p-4 bg-background/95 backdrop-blur-sm border border-border shadow-2xl rounded-2xl">
								{categories.map((category) => (
									<li key={category.slug}>
										<NavigationMenuLink asChild>
											<YnsLink
												href={`/category/${category.slug}`}
												className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-primary/10 hover:text-primary focus:bg-primary/10"
											>
												<div className="text-sm font-medium leading-none">{category.title}</div>
											</YnsLink>
										</NavigationMenuLink>
									</li>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

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
				href="/become-partner"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				Devenir partenaire
			</YnsLink>
			<YnsLink
				prefetch={"eager"}
				href="/about"
				className="hover:text-primary transition-colors"
				activeClassName="text-foreground border-b-2 border-primary pb-1"
			>
				À propos
			</YnsLink>
		</nav>
	);
}
