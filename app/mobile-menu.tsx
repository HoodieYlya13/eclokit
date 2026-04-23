"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
	children: React.ReactNode;
}

export function MobileMenu({ children }: MobileMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			{/* Burger Button */}
			<button
				type="button"
				className="xl:hidden -ml-2 p-2 text-foreground hover:text-primary transition-colors z-60"
				onClick={() => setIsOpen(true)}
				aria-label="Ouvrir le menu"
			>
				<Menu className="w-6 h-6" />
			</button>

			{/* Full Screen Overlay */}
			<div
				className={cn(
					"fixed inset-0 z-500 transition-opacity duration-300",
					isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
				)}
			>
				{/* Backdrop background */}
				<div
					className="absolute inset-0 bg-background/60 backdrop-blur-md"
					onClick={() => setIsOpen(false)}
				/>

				{/* Panel sliding from left */}
				<div
					className={cn(
						"absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-r border-border shadow-2xl transition-transform duration-500 ease-in-out flex flex-col p-6",
						isOpen ? "translate-x-0" : "-translate-x-full",
					)}
				>
					{/* Close Button Row */}
					<div className="flex items-center justify-between mb-12">
						<span className="font-display text-2xl font-bold text-foreground">EcloKit</span>
						<button
							type="button"
							className="p-2 text-foreground hover:text-primary transition-colors"
							onClick={() => setIsOpen(false)}
							aria-label="Fermer le menu"
						>
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Navigation Links with auto-close logic */}
					<div
						className="flex-1"
						onClick={(e) => {
							if ((e.target as HTMLElement).closest("a")) setIsOpen(false);
						}}
					>
						{children}
					</div>

					{/* Bottom Footer Info */}
					<div className="mt-auto pt-8 border-t border-border">
						<p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
							Votre dose de créativité mensuelle
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
