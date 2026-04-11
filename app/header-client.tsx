"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderClientProps {
	children: React.ReactNode;
	className?: string;
}

export function HeaderClient({ children, className }: HeaderClientProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY < 10) {
				setIsVisible(true);
				setLastScrollY(currentScrollY);
				return;
			}

			if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false);
			else if (currentScrollY < lastScrollY) setIsVisible(true);

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<header
			className={cn(
				className,
				"transition-transform duration-300 ease-in-out",
				!isVisible && "-translate-y-[150%] md:-translate-y-[200%]",
			)}
		>
			{children}
		</header>
	);
}
