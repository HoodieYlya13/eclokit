"use client";

import { useEffect } from "react";

export function HashScrollFix() {
	useEffect(() => {
		const handleHashScroll = () => {
			const { hash } = window.location;
			if (hash) {
				const id = hash.replace("#", "");
				const element = document.getElementById(id);
				if (element) {
					setTimeout(() => {
						element.scrollIntoView({ behavior: "smooth" });
					}, 100);
				}
			}
		};

		handleHashScroll();

		window.addEventListener("hashchange", handleHashScroll);
		return () => window.removeEventListener("hashchange", handleHashScroll);
	}, []);

	return null;
}
