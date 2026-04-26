import Image from "next/image";

export function HeroBackground({ isPriority = true }: { isPriority?: boolean }) {
	return (
		<div className="absolute inset-0 z-0 overflow-hidden @container-[size]">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100cqh] h-[100cqw] rotate-90 md:w-full md:h-full md:rotate-0">
				<Image
					src="/img/background.png"
					alt="Hero Background"
					fill
					className="object-cover"
					sizes="100vmax"
					priority={isPriority}
					fetchPriority={isPriority ? "high" : "low"}
				/>
			</div>

			<div className="absolute inset-0 bg-background/10 dark:bg-black/20" />
		</div>
	);
}
