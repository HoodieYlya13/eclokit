import { ArrowRight } from "lucide-react";
import { YnsLink } from "@/components/yns-link";

type SectionHeaderProps = {
	badge: string;
	title: string;
	viewAllLink?: string;
	viewAllText?: string;
	centered?: boolean;
	withBorder?: boolean;
	inversed?: boolean;
};

export function SectionHeader({
	badge,
	title,
	viewAllLink,
	viewAllText = "VOIR TOUS LES PRODUITS",
	centered = false,
	withBorder = false,
	inversed = false,
}: SectionHeaderProps) {
	if (inversed) {
		const outlineStyle = {
			textShadow:
				"-2px -2px 0 #fffaec, 2px -2px 0 #fffaec, -2px 2px 0 #fffaec, 2px 2px 0 #fffaec, 0 0 10px rgba(255, 250, 236, 0.5)",
		};
		return (
			<div className="flex flex-col justify-center items-center mb-16 gap-2">
				<h2 className="font-display text-4xl md:text-5xl text-foreground text-center" style={outlineStyle}>
					{title}
				</h2>
				<span className="font-semibold tracking-widest text-primary mb-2 block text-center bg-[#fffaec] rounded-lg p-4">
					{badge}
				</span>
			</div>
		);
	}

	if (centered) {
		return (
			<div className="flex flex-col justify-center items-center mb-16 gap-2">
				<span className="font-semibold tracking-widest text-primary uppercase mb-2 block">{badge}</span>
				<h2 className="font-display text-4xl md:text-5xl text-foreground text-center">{title}</h2>
			</div>
		);
	}

	return (
		<div
			className={`flex flex-col md:flex-row justify-between items-end mb-16 ${withBorder ? "border-b border-border pb-6" : ""}`}
		>
			<div>
				<span className="font-semibold tracking-widest text-primary uppercase mb-2 block">{badge}</span>
				<h2 className="font-display text-4xl md:text-5xl text-foreground">{title}</h2>
			</div>
			{viewAllLink && (
				<YnsLink
					href={viewAllLink}
					className="hidden md:flex items-center gap-2 text-sm font-medium tracking-wide hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
				>
					{viewAllText}
					<ArrowRight className="w-4 h-4" />
				</YnsLink>
			)}
		</div>
	);
}
