"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderContextType {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	isSolid: boolean;
	setIsSolid: (isSolid: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function useHeader() {
	const context = useContext(HeaderContext);
	if (!context) {
		throw new Error("useHeader must be used within a HeaderProvider");
	}
	return context;
}

interface HeaderClientProps {
	children: React.ReactNode;
	className?: string;
}

export function HeaderClient({ children, className }: HeaderClientProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [isSolid, setIsSolid] = useState(false);

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
		<HeaderContext.Provider value={{ isOpen, setIsOpen, isSolid, setIsSolid }}>
			<header
				className={cn(
					className,
					"transition-all duration-300 ease-in-out",
					!isVisible && "-translate-y-[150%] md:-translate-y-[200%]",
					isSolid ? "bg-background" : "bg-background/40 backdrop-blur-2xl",
				)}
			>
				{children}
			</header>
		</HeaderContext.Provider>
	);
}
