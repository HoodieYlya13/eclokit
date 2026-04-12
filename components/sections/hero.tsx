import Image from "next/image";
import { Button } from "@/components/ui/button";
import { YnsLink } from "@/components/yns-link";
import { HeroTypography } from "./hero-typography";
import { JigglingButton } from "./jiggling-button";

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
		<section className="relative w-full min-h-dvh flex flex-col items-center justify-center py-36 md:py-0 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
				{/* Mobile Background */}
				<div className="md:hidden absolute inset-0">
					<Image
						src="/img/background-rotated.jpeg"
						alt="Background Mobile"
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</div>
				{/* Desktop Background */}
				<div className="hidden md:block absolute inset-0">
					<Image
						src="/img/background.jpeg"
						alt="Background Desktop"
						fill
						className="object-cover"
						sizes="100vw"
						priority
					/>
				</div>
				<div className="absolute inset-0" />
			</div>
			{/* Decorative elements */}
			<DecorativeWavyLines />
			<DecorativeCross />

			{/* Main grid layout */}
			<div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 gap-8 h-full items-center">
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
								<YnsLink href="/#products">Nos abonnements</YnsLink>
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
		</section>
	);
}
