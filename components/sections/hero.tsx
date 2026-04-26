import Image from "next/image";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
import { HeroTypography } from "./hero-typography";
import { JigglingButton } from "./jiggling-button";

// Refresh badge with heart path
function RefreshBadge() {
	return (
		<div
			className="absolute -left-4 md:-left-24 top-0 md:top-12 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 pointer-events-none z-10 animate-float"
			style={{ animationDuration: "7s" }}
		>
			<svg className="w-full h-full absolute top-0 left-0 text-background" viewBox="0 0 100 100">
				<path
					d="M50 35 C 20 5 0 35 50 95 C 100 35 80 5 50 35"
					fill="none"
					stroke="currentColor"
					strokeDasharray="4 3"
					strokeWidth="0.8"
				/>
			</svg>
			<span className="text-[0.6rem] font-serif tracking-[0.2em] uppercase mt-2 text-background">
				EcloKit
			</span>
		</div>
	);
}

// Info pill with technology description
function InfoPill() {
	return (
		<div
			className="absolute -right-4 md:-right-24 bottom-10 md:bottom-20 w-48 h-24 border border-border rounded-[50%] flex items-center justify-center p-6 transform rotate-3 bg-background/40 backdrop-blur-sm z-50 animate-fade-in-delayed opacity-0"
			style={{ animationDelay: "0.8s" }}
		>
			<p className="text-[0.6rem] text-center font-serif leading-tight text-muted-foreground">
				Votre dose de créativité mensuelle
			</p>
		</div>
	);
}

// Hero images
function HeroImages() {
	return (
		<>
			{/* Left image - hands washing */}
			<div
				className="absolute left-6 bottom-32 md:left-24 md:bottom-48 w-40 h-40 md:w-56 md:h-56 z-30 opacity-0 animate-fade-in-delayed"
				style={{ animationDelay: "1.2s" }}
			>
				<Image
					alt="Ma box créative"
					src="https://www.designerpeople.com/wp-content/uploads/2024/07/Creative-Box-Designs-Thatll-Transform-Your-Packaging-Experience-1024x1024.webp"
					fill
					className="object-cover shadow-xl dark:shadow-black/60 ring-1 ring-white/20 dark:ring-white/10"
					sizes="(max-width: 768px) 160px, 224px"
				/>
			</div>

			{/* Right image - model with leaf */}
			<div
				className="absolute right-0 bottom-0 md:right-0 md:bottom-0 w-64 h-48 md:w-[28rem] md:h-[18rem] z-40 overflow-hidden opacity-0 animate-fade-in-delayed"
				style={{ animationDelay: "1.4s" }}
			>
				<Image
					alt="Ma box créative"
					src="https://joy-cadeaux.com/cdn/shop/files/5836188-47f1bbc578327d.jpg?v=1750708347"
					fill
					className="object-cover object-top hover:scale-105 transition-transform duration-700"
					sizes="(max-width: 768px) 256px, 448px"
					priority
				/>
			</div>
		</>
	);
}

export function Hero() {
	return (
		<>
			{/* Main grid layout */}
			<div className="mb-0 md:mb-10 relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
				{/* Center content */}
				<div className="relative text-center flex flex-col gap-6 items-center justify-center z-20">
					{/* Refresh badge */}
					<RefreshBadge />

					{/* Main typography */}
					<HeroTypography />

					{/* Hero Buttons */}
					<div
						className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-32 w-full max-w-sm sm:max-w-3xl mx-auto animate-fade-in-up opacity-0 relative z-50"
						style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
					>
						<JigglingButton>
							<Button
								asChild
								className="rounded-full px-8 py-7 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/5 bg-background text-foreground border border-border hover:bg-background/90 opacity-90 w-full"
							>
								<YnsLink href="/subscriptions">Nos abonnements</YnsLink>
							</Button>
						</JigglingButton>
						<JigglingButton delay={0.2}>
							<Button
								asChild
								className="rounded-full px-8 py-7 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/5 bg-background text-foreground border border-border hover:bg-background/90 opacity-90 w-full"
							>
								<YnsLink href="/blog">Notre blog</YnsLink>
							</Button>
						</JigglingButton>
					</div>

					{/* Info pill */}
					{/* <InfoPill /> */}
				</div>
			</div>

			{/* Floating images */}
			{/* <HeroImages /> */}
		</>
	);
}
