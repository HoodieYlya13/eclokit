"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Gift, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NewsletterTrigger() {
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const checkVisibility = () => {
			const isSubscribed = document.cookie
				.split("; ")
				.find((row) => row.startsWith("newsletter_subscribed="));
			setIsVisible(!isSubscribed);
		};

		checkVisibility();
		window.addEventListener("newsletter_subscribed_updated", checkVisibility);
		return () => window.removeEventListener("newsletter_subscribed_updated", checkVisibility);
	}, []);

	// Re-appear on navigation
	useEffect(() => {
		setIsDismissed(false);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && !isDismissed && (
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: 100, opacity: 0 }}
					transition={{ type: "spring", damping: 20, stiffness: 100 }}
					className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group cursor-pointer"
					onClick={() => window.dispatchEvent(new Event("newsletter_popup_open"))}
				>
					{/* Close Button - Small Bubble */}
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setIsDismissed(true);
						}}
						className="absolute -top-2.5 -left-2.5 size-6 bg-background text-foreground rounded-full border border-border shadow-lg flex items-center justify-center hover:bg-neutral-100 transition-all z-50 transform hover:scale-110 active:scale-95 cursor-pointer"
						aria-label="Fermer"
					>
						<X size={12} strokeWidth={2.5} />
					</button>

					{/* Main Trigger Area */}
					<div
						className="px-1.5 py-2.5 flex flex-col items-center gap-1 hover:pr-3 transition-all bg-foreground text-background rounded-l-lg shadow-2xl"
						style={{ writingMode: "vertical-rl" }}
					>
						<div className="flex flex-row items-center gap-1.5 rotate-180">
							<Gift className="size-3.5 text-primary animate-pulse rotate-90" />
							<span className="text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">
								Code de bienvenue
							</span>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
