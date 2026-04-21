"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
// import { JigglingButton } from "./jiggling-button";
import { SectionHeader } from "./section-header";

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function SubscriptionCountdown() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			// Next month's 15th
			const target = new Date(now.getFullYear(), now.getMonth() + 1, 15, 0, 0, 0);
			const difference = target.getTime() - now.getTime();

			if (difference <= 0) {
				return { days: 0, hours: 0, minutes: 0, seconds: 0 };
			}

			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		};

		// Initial calculation
		setTimeLeft(calculateTimeLeft());

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const timeUnits = [
		{ label: "Jours", value: timeLeft?.days ?? 0 },
		{ label: "Heures", value: timeLeft?.hours ?? 0 },
		{ label: "Minutes", value: timeLeft?.minutes ?? 0 },
		{ label: "Secondes", value: timeLeft?.seconds ?? 0 },
	];

	return (
		<section className="relative py-32 px-6 md:px-12 w-full overflow-hidden flex flex-col items-center justify-center bg-background border-t border-border/50">
			{/* Decorative blurred blobs */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 size-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

			{/* Jiggling decorative images - Only on large screens */}
			{/* <div className="hidden lg:block absolute top-10 right-10 md:top-20 md:right-[10%] w-32 h-32 md:w-56 md:h-56 pointer-events-none z-0">
				<JigglingButton delay={0.1}>
					<Image src="/img/brush.png" alt="Pinceau décoratif" fill className="object-contain opacity-80" />
				</JigglingButton>
			</div>
			<div className="hidden lg:block absolute bottom-10 left-10 md:bottom-24 md:left-[10%] w-32 h-32 md:w-56 md:h-56 pointer-events-none z-0">
				<JigglingButton delay={0.3}>
					<Image src="/img/paint.png" alt="Peinture décorative" fill className="object-contain opacity-80" />
				</JigglingButton>
			</div> */}

			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-16 px-4">
				<SectionHeader
					badge="Prochain coffret créatif"
					title="Votre prochain voyage créatif approche"
					centered
					noMarginBottom
				/>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
					{timeUnits.map((unit, index) => (
						<motion.div
							key={unit.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="flex flex-col items-center justify-center p-6 md:p-10 rounded-4xl bg-background/60 backdrop-blur-md border border-border shadow-sm transition-colors hover:border-primary/30 hover:shadow-md"
						>
							<motion.span
								key={unit.value}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								className="text-4xl md:text-6xl font-display font-medium text-foreground mb-3"
							>
								{unit.value.toString().padStart(2, "0")}
							</motion.span>
							<span className="text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/80">
								{unit.label}
							</span>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mt-4 w-full flex justify-center"
				>
					<Button
						asChild
						size="lg"
						className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-2xl hover:shadow-primary/20 bg-foreground text-background max-w-[280px] md:max-w-none text-center"
					>
						<YnsLink href="/subscriptions">Découvrez nos abonnements</YnsLink>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
