"use client";

import { useState } from "react";
import { toast } from "sonner";

export function FooterNewsletterForm() {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		console.log("Newsletter signed up from footer:", email);
		toast.success("Inscription réussie ! Merci pour votre abonnement.");
		setEmail("");

		// Set subscribed cookie (1 year)
		document.cookie = "newsletter_subscribed=true; max-age=31536000; path=/";
		// Dispatch event to hide trigger button if visible
		window.dispatchEvent(new Event("newsletter_subscribed_updated"));
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
			<div className="relative">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Votre adresse email"
					required
					className="w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
				/>
			</div>
			<button
				type="submit"
				className="self-start text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors mt-2"
			>
				S'inscrire
			</button>
		</form>
	);
}
