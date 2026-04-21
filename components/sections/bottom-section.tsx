"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { YnsLink } from "../yns-link";

const getBottomSectionContent = (pathname: string) => {
	switch (pathname) {
		case "/about":
			return {
				text: "Découvrez l'envers du décor et notre mission.",
				buttonLabel: "Notre Histoire",
				href: "/about",
			};
		case "/subscriptions":
			return {
				text: "Prêt à recevoir votre box créative chaque mois ?",
				buttonLabel: "S'abonner maintenant",
				href: "/subscriptions",
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
					className="rounded-full px-12 py-8 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background"
				>
					<YnsLink href={href}>{buttonLabel}</YnsLink>
				</Button>
			</div>
		</section>
	);
}
