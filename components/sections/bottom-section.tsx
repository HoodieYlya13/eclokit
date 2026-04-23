"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { YnsLink } from "../yns-link";

const getBottomSectionContent = (pathname: string) => {
	switch (pathname) {
		case "/about":
			return {
				text: "Vous partagez nos valeurs ? Collaborez avec nous",
				buttonLabel: "Devenir partenaire",
				href: "/become-partner",
			};
		case "/subscriptions":
			return {
				text: "Vous préférez acheter à l'unité ?",
				buttonLabel: "Découvrez la boutique",
				href: "/products",
			};
		case "/products":
			return {
				text: "Vous préférez un kit complet sans prise de tête ?",
				buttonLabel: "Découvrez les abonnements",
				href: "/subscriptions",
			};
		case "/become-partner":
			return {
				text: "Vous voulez en savoir plus sur nous ?\t",
				buttonLabel: "Découvrez nos valeurs",
				href: "/about",
			};
		default:
			return {
				text: "Libérez votre potentiel créatif dès aujourd'hui.",
				buttonLabel: "Je commence l’aventure",
				href: "/subscriptions",
			};
	}
};

export function BottomSection() {
	const pathname = usePathname();
	const { text, buttonLabel, href } = getBottomSectionContent(pathname);

	return (
		<section className="py-32 px-6 md:px-12 w-full max-w-screen-2xl mx-auto text-center border-t border-border">
			<div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
				<h2 className="text-4xl md:text-5xl leading-tight">{text}</h2>
				<Button
					asChild
					variant="outline"
					className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] hover:bg-background transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
				>
					<YnsLink href={href}>{buttonLabel}</YnsLink>
				</Button>
			</div>
		</section>
	);
}
