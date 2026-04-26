"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Hero } from "./hero";
import { HeroBackground } from "./hero-background";

const MagicBoxScene = dynamic(() => import("../ui/magic-box-scene"), {
	ssr: false,
	loading: () => null,
});

// Decorative wavy lines SVG
function DecorativeWavyLines() {
	return (
		<div
			className="absolute left-0 top-1/3 -translate-y-1/2 w-32 h-24 sm:w-48 sm:h-32 opacity-60 dark:opacity-40 pointer-events-none z-0 animate-float"
			style={{ animationDelay: "0.5s" }}
		>
			<svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 200 100">
				<path d="M0 30 Q 30 60 60 30 T 120 30 T 180 30" className="text-primary" />
				<path d="M0 60 Q 30 90 60 60 T 120 60 T 180 60" className="text-primary" />
			</svg>
		</div>
	);
}

// Decorative cross shape SVG
function DecorativeCross() {
	return (
		<div className="absolute right-[5%] top-[15%] w-24 h-24 sm:w-32 sm:h-32 pointer-events-none opacity-60 dark:opacity-40 z-0 rotate-12 animate-pulse-slow">
			<svg
				className="w-full h-full"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				viewBox="0 0 100 100"
			>
				<path
					d="M35 15 L65 15 L65 35 L85 35 L85 65 L65 65 L65 85 L35 85 L35 65 L15 65 L15 35 L35 35 Z"
					className="text-primary"
				/>
			</svg>
		</div>
	);
}

export function MagicBoxSection() {
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<section className="w-full min-h-screen min-h-dvh bg-background flex items-center md:items-end justify-center py-20 pt-36 md:py-0 md:pt-48 relative overflow-hidden">
			<HeroBackground />
			<DecorativeWavyLines />
			<DecorativeCross />
			<div className="absolute inset-0 z-0 hidden md:block">{isHome && <MagicBoxScene />}</div>
			<Hero />
		</section>
	);
}
