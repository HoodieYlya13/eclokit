import Image from "next/image";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
import { SectionHeader } from "./section-header";

export function BoxOfTheMonth() {
	return (
		<section className="py-10 px-6 md:px-12 w-full max-w-screen-2xl mx-auto relative z-50 bg-background border-t border-border/50">
			<SectionHeader badge="L'Expérience Créative du Mois" title="Le Coquetier Lapin" centered />

			<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mt-12">
				{/* Text Content */}
				<div className="md:col-span-7 order-1 md:order-1 space-y-8">
					<div className="space-y-4">
						<p className="text-xl font-medium text-foreground leading-relaxed">
							Sublimez votre table de Pâques avec une création faite de vos propres mains.
						</p>
						<p className="text-muted-foreground font-light text-lg leading-relaxed">
							Ce mois-ci, nous vous invitons à travailler l'argile avec un projet de modelage exclusif : un
							coquetier aux lignes minimalistes et organiques. Une parenthèse créative pour concevoir un objet
							de décoration durable et unique.
						</p>
					</div>

					<div className="space-y-6">
						<h3 className="text-xs font-bold uppercase tracking-widest text-primary">
							Le programme de votre kit :
						</h3>
						<ul className="space-y-6">
							<li className="flex gap-4">
								<span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
									1
								</span>
								<div>
									<h4 className="font-semibold text-foreground">Façonnez</h4>
									<p className="text-muted-foreground text-sm">
										Apprivoisez l’argile DAS pour sculpter les courbes de votre lapin.
									</p>
								</div>
							</li>
							<li className="flex gap-4">
								<span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
									2
								</span>
								<div>
									<h4 className="font-semibold text-foreground">Personnalisez</h4>
									<p className="text-muted-foreground text-sm">
										Donnez vie à votre pièce avec la finesse des pigments Faber-Castell (finition unie,
										mouchetée ou graphique).
									</p>
								</div>
							</li>
							<li className="flex gap-4">
								<span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
									3
								</span>
								<div>
									<h4 className="font-semibold text-foreground">Protégez</h4>
									<p className="text-muted-foreground text-sm">
										Appliquez le vernis Cléopâtre pour un fini professionnel et éclatant.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-secondary/30 rounded-2xl border border-secondary/50">
							<p className="text-sm font-medium text-foreground mb-3">
								Le résultat : Un objet design qui éblouira vos invités et apportera une touche de poésie
								artisanale à votre table de fête.
							</p>
							<p className="text-xs text-muted-foreground italic">
								<strong>Inclus :</strong> Matières premières, outils de modelage, tutoriel vidéo et guide
								écrit.
							</p>
						</div>

						<div className="flex justify-center pt-4">
							<Button
								asChild
								className="rounded-full px-10 py-7 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-lg hover:shadow-primary/20 bg-foreground"
							>
								<YnsLink href="/products" className="text-background">
									Je découvre les offres
								</YnsLink>
							</Button>
						</div>
					</div>
				</div>

				{/* Image Content */}
				<div className="md:col-span-5 order-2 md:order-2">
					<div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
						<Image
							alt="Le Coquetier Lapin - Box du mois"
							src="/img/box-of-the-month.jpeg"
							fill
							className="object-cover hover:scale-105 transition-transform duration-700"
							sizes="(max-width: 768px) 100vw, 40vw"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
