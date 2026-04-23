"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";

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
		<section className="relative py-32 px-6 md:px-20 w-full overflow-hidden flex flex-col items-center justify-center bg-primary">
			{/* Top Torn Edge */}
			<div className="absolute top-0 left-0 right-0 h-10 z-20 pointer-events-none">
				<svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full fill-background">
					<path d="M0 100L14.7 85C29.3 70 58.7 40 88 35C117.3 30 146.7 50 176 60C205.3 70 234.7 70 264 65C293.3 60 322.7 50 352 45C381.3 40 410.7 40 440 45C469.3 50 498.7 60 528 65C557.3 70 586.7 70 616 65C645.3 60 674.7 50 704 45C733.3 40 762.7 40 792 45C821.3 50 850.7 60 880 65C909.3 70 938.7 70 968 65C997.3 60 1026.7 50 1056 45C1085.3 40 1114.7 40 1144 45C1173.3 50 1202.7 60 1232 65C1261.3 70 1290.7 70 1320 65C1349.3 60 1378.7 50 1409.3 45L1440 40V0H0V100Z" />
				</svg>
			</div>

			{/* Bottom Torn Edge */}
			<div className="absolute bottom-0 left-0 right-0 h-10 z-20 pointer-events-none rotate-180">
				<svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full fill-background">
					<path d="M0 100L14.7 85C29.3 70 58.7 40 88 35C117.3 30 146.7 50 176 60C205.3 70 234.7 70 264 65C293.3 60 322.7 50 352 45C381.3 40 410.7 40 440 45C469.3 50 498.7 60 528 65C557.3 70 586.7 70 616 65C645.3 60 674.7 50 704 45C733.3 40 762.7 40 792 45C821.3 50 850.7 60 880 65C909.3 70 938.7 70 968 65C997.3 60 1026.7 50 1056 45C1085.3 40 1114.7 40 1144 45C1173.3 50 1202.7 60 1232 65C1261.3 70 1290.7 70 1320 65C1349.3 60 1378.7 50 1409.3 45L1440 40V0H0V100Z" />
				</svg>
			</div>

			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-16 px-4 text-center">
				<div className="flex flex-col items-center gap-4">
					<span className="font-semibold tracking-[0.4em] text-background uppercase mb-2 block animate-fade-in-up text-xs md:text-sm opacity-90">
						Prochain coffret créatif
					</span>
					<h2 className="font-display text-5xl md:text-7xl text-background leading-[1.1] drop-shadow-xl max-w-6xl">
						Votre prochain voyage créatif approche
					</h2>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
					{timeUnits.map((unit, index) => (
						<motion.div
							key={unit.label}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							className="flex flex-col items-center justify-center p-6 md:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group transition-all"
						>
							<motion.span
								key={unit.value}
								className="text-5xl md:text-8xl font-display font-bold text-background mb-2"
							>
								{unit.value.toString().padStart(2, "0")}
							</motion.span>
							<span className="text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.3em] text-background">
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
						variant="outline"
						size="lg"
						className="rounded-full px-8 md:px-16 py-6 md:py-10 text-[0.7rem] md:text-sm font-bold uppercase tracking-[0.25em] bg-background text-primary hover:bg-foreground hover:text-background transition-all border-border"
					>
						<YnsLink href="/subscriptions">Découvrez nos abonnements</YnsLink>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
