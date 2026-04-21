"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";

const SHORTS = [
	{ id: "CHeBmXWwCHs", title: "DIY Creation 1" },
	{ id: "G-xkPtiuqT0", title: "DIY Creation 2" },
	{ id: "a8uHJR9lpzo", title: "DIY Creation 3" },
];

export function CommunitySection() {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto relative overflow-hidden bg-background border-t border-border">
			{/* Decorative Elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

			<SectionHeader badge="Eclokit, partout avec vous" title="Rejoignez la communauté DIY" centered />

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
				{/* Left Side: Socials & Shorts */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="lg:col-span-7 space-y-8"
				>
					<div className="space-y-4">
						<h3 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
							Ne ratez aucune création, <br />
							<span className="text-primary italic">suivez-nous sur nos réseaux !</span>
						</h3>
						<SocialLinks />
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{SHORTS.map((short) => (
							<div
								key={short.id}
								className="aspect-9/16 rounded-2xl overflow-hidden shadow-lg border border-border group relative bg-muted"
							>
								<iframe
									width="100%"
									height="100%"
									src={`https://www.youtube.com/embed/${short.id}?autoplay=0&controls=1&rel=0&modestbranding=1`}
									title={short.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								/>
							</div>
						))}
					</div>
				</motion.div>

				{/* Right Side: App Promotion */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="lg:col-span-5"
				>
					<div className="relative group rounded-3xl p-8 md:p-12 overflow-hidden border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-2xl">
						{/* Subtle background glow */}
						<div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />

						<div className="relative z-10 space-y-8 flex flex-col items-center text-center">
							<div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden">
								<Image
									src="/img/app.gif"
									alt="EcloKit Mobile App"
									fill
									className="object-cover"
									unoptimized // Required for animated GIFs in some environments
								/>
							</div>

							<div className="space-y-4">
								<p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
									Avec l’application, débloquez des{" "}
									<span className="text-primary font-bold">contenus exclusifs</span>, relevez des challenges
									pour gagner des <span className="text-primary font-bold">EcloPoints</span> et échangez avec
									des milliers de passionnés de DIY.
								</p>
							</div>
							<Button
								size="lg"
								className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-7 text-base sm:text-lg rounded-2xl shadow-xl hover:scale-105 transition-all group whitespace-normal h-auto leading-tight"
								asChild
							>
								<a href="https://www.apple.com/fr/app-store/" target="_blank" rel="noopener noreferrer">
									<Download className="w-6 h-6 mr-2 group-hover:animate-bounce shrink-0" />
									<span>Téléchargez l’app et rejoignez l’aventure !</span>
								</a>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
