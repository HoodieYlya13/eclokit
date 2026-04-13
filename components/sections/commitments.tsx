import { Heart, Leaf, type LucideIcon, Recycle } from "lucide-react";
import { SectionHeader } from "./section-header";

const commitmentIcons: Record<string, LucideIcon> = {
	'Zéro Gaspillage : La "Juste Dose"': Recycle,
	"Sourcing Éthique & Européen": Leaf,
	"Solidarité : Soutenir les Femmes": Heart,
};

export function Commitments({
	title,
	commitments,
}: {
	title: string;
	commitments: { label: string; description: string }[];
}) {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto border-t border-border">
			<SectionHeader title={title} badge="Nos Engagements" centered />

			<div className="grid gap-12 md:grid-cols-3">
				{commitments.map((item) => {
					const Icon = commitmentIcons[item.label] ?? Leaf;
					return (
						<div key={item.label} className="group flex flex-col items-center text-center">
							<div className="mb-6 flex size-16 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-foreground group-hover:scale-110 shadow-lg shadow-primary/5">
								<Icon className="size-7 text-muted-foreground transition-colors group-hover:text-secondary" />
							</div>
							<h3 className="mb-4 text-xl font-medium tracking-tight h-12 flex items-center justify-center">
								{item.label}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
