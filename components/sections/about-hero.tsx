import { HeroBackground } from "./hero-background";
import { SectionHeader } from "./section-header";

export function AboutHero({ title, introduction }: { title: string; introduction: string }) {
	return (
		<section className="relative w-full min-h-dvh flex flex-col items-center justify-center pt-36 md:pt-48 pb-20 overflow-hidden">
			<HeroBackground />

			<div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 z-10 text-center">
				<SectionHeader title={title} badge={introduction} centered inversed oneLiner />
			</div>

			<div className="absolute left-[10%] bottom-[15%] w-24 h-24 pointer-events-none opacity-20 rotate-45 animate-pulse-slow">
				<svg
					className="w-full h-full"
					fill="none"
					stroke="var(--primary)"
					strokeWidth="1.5"
					viewBox="0 0 100 100"
				>
					<path d="M35 15 L65 15 L65 35 L85 35 L85 65 L65 65 L65 85 L35 85 L35 65 L15 65 L15 35 L35 35 Z" />
				</svg>
			</div>
		</section>
	);
}
