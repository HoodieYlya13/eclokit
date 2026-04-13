import { SectionHeader } from "./section-header";

export function AboutHero({ title, introduction }: { title: string; introduction: string }) {
	return (
		<section className="relative w-full min-h-dvh flex flex-col items-center justify-center pt-36 md:pt-48 pb-20 overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_-20%,var(--secondary)_0%,transparent_70%)] opacity-30" />
				<div className="hidden md:block absolute right-0 top-1/4 w-96 h-96 opacity-10 animate-float">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="var(--primary)"
							d="M45.7,-76.8C59.6,-69.1,71.5,-57.4,79,-43.3C86.5,-29.2,89.5,-12.6,88.1,3.5C86.7,19.6,80.9,35.2,71.2,48.2C61.5,61.2,47.9,71.6,33.1,77.4C18.3,83.2,2.3,84.4,-14.1,81.4C-30.5,78.4,-47.2,71.3,-59.8,59.3C-72.4,47.3,-80.8,30.5,-84.6,12.7C-88.4,-5.1,-87.6,-23.9,-79.8,-39.6C-72,-55.3,-57.2,-67.9,-41.6,-74.6C-26,-81.3,-9.6,-82.1,3.4,-88.1C16.4,-94,31.8,-84.5,45.7,-76.8Z"
							transform="translate(100 100)"
						/>
					</svg>
				</div>
			</div>

			<div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 z-10 text-center">
				<SectionHeader title={title} badge="Notre Histoire" centered inversed />
				<div className="max-w-3xl mx-auto mt-12 animate-fade-in-up">
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">{introduction}</p>
				</div>
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
