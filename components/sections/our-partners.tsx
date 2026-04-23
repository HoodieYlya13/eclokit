import Image from "next/image";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
import { SectionHeader } from "./section-header";

export function OurPartners() {
	return (
		<section className="py-20 px-6 md:px-12 w-full max-w-screen-2xl mx-auto relative z-50 bg-background border-t border-border/50">
			<SectionHeader badge="Nos marques partenaires" title="À l'honneur ce mois-ci" centered />
			<div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
				{/* Partner 1: Left */}
				<div
					className="w-full md:w-1/3 flex flex-col items-center gap-4 animate-fade-in-up order-2 md:order-1"
					style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
				>
					<a
						href="https://blog.lafourmicreative.fr/2023/08/03/creer-sa-propre-palette-daquarelle-grace-a-la-pate-a-modeler-das/"
						target="_blank"
						rel="noopener noreferrer"
						className="size-40 md:size-72 rounded-2xl border border-border/50 flex items-center justify-center p-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
					>
						<Image
							src="/img/partners/das.png"
							alt="DAS"
							width={120}
							height={60}
							className="object-contain"
							style={{ width: "auto", height: "auto" }}
							loading="lazy"
						/>
					</a>
					<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Argile</span>
				</div>

				{/* Partner 2: Center (Top of Podium) */}
				<div
					className="w-full md:w-1/3 flex flex-col items-center gap-4 animate-fade-in-up order-1 md:order-2"
					style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
				>
					<a
						href="https://www.faber-castell.fr/"
						target="_blank"
						rel="noopener noreferrer"
						className="size-48 md:size-90 rounded-2xl border-2 border-primary/20 flex items-center justify-center p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative shadow-xl"
					>
						<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-widest whitespace-nowrap">
							À l'honneur
						</div>
						<Image
							src="/img/partners/faber-castell.png"
							alt="Faber-Castell"
							width={180}
							height={80}
							className="object-contain"
							style={{ width: "auto", height: "auto" }}
							loading="lazy"
						/>
					</a>
					<span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Peintures</span>
				</div>

				{/* Partner 3: Right */}
				<div
					className="w-full md:w-1/3 flex flex-col items-center gap-4 animate-fade-in-up order-3"
					style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
				>
					<a
						href="https://www.colles-cleopatre.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="size-40 md:size-72 rounded-2xl border border-border/50 flex items-center justify-center p-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
					>
						<Image
							src="/img/partners/cleopatre.png"
							alt="Cléopâtre"
							width={120}
							height={60}
							className="object-contain"
							style={{ width: "auto", height: "auto" }}
							loading="lazy"
						/>
					</a>
					<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Vernis</span>
				</div>
			</div>

			<div className="mt-20 flex justify-center">
				<Button
					asChild
					variant="outline"
					className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] bg-foreground text-background hover:bg-background hover:text-foreground transition-all border-border"
				>
					<YnsLink href="/become-partner">Devenir partenaire</YnsLink>
				</Button>
			</div>
		</section>
	);
}
