"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterPopup() {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [acceptMarketing, setAcceptMarketing] = useState(false);

	useEffect(() => {
		if (typeof document === "undefined") return;

		const hasSeenPopup = document.cookie
			.split("; ")
			.find((row) => row.startsWith("newsletter_popup_closed="));

		if (!hasSeenPopup) {
			const timer = setTimeout(() => {
				dialogRef.current?.showModal();
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, []);

	const closePopup = () => {
		document.cookie = "newsletter_popup_closed=true; max-age=86400; path=/";
		dialogRef.current?.close();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!acceptMarketing) return;

		console.log("Newsletter signed up successfully!");
		closePopup();
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === dialogRef.current) closePopup();
	};

	return (
		<dialog
			ref={dialogRef}
			onClick={handleBackdropClick}
			className="fixed inset-0 m-auto p-0 rounded-3xl backdrop:bg-black/50 backdrop:backdrop-blur-sm shadow-2xl animate-fade-in-up border-0 max-w-lg w-[calc(100%-2rem)] bg-background text-foreground z-50"
			onCancel={closePopup}
		>
			<div className="relative p-8 md:p-12 flex flex-col gap-6 items-center text-center">
				<button
					onClick={closePopup}
					className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
					aria-label="Fermer"
					type="button"
				>
					<X size={20} />
				</button>

				<div className="text-center space-y-2 mt-4">
					<h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">-10%</h2>
					<p className="text-xl font-bold">Sur votre première box</p>
					<p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2 text-balance">
						Abonnez-vous à notre newsletter et recevez un code promo de -10% pour commencer votre aventure
						créative.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4 w-full">
					<div className="flex flex-col gap-2">
						<Label htmlFor="newsletter-email-popup" className="sr-only">
							Adresse email
						</Label>
						<Input
							id="newsletter-email-popup"
							type="email"
							placeholder="Votre adresse email..."
							required
							className="rounded-full h-14 px-6 text-base"
						/>
					</div>

					<div className="flex items-start space-x-3 text-left">
						<Checkbox
							id="marketing-consent"
							checked={acceptMarketing}
							onCheckedChange={(c) => setAcceptMarketing(c as boolean)}
							className="mt-1"
							required
						/>
						<Label
							htmlFor="marketing-consent"
							className="text-xs md:text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer"
						>
							J’accepte de recevoir des offres et communications commerciales d’EcloKit
						</Label>
					</div>

					<Button
						type="submit"
						className="w-full rounded-full h-14 text-sm font-bold uppercase tracking-widest mt-2 hover:scale-[1.02] transition-transform shadow-xl"
					>
						Je profite de l'offre
					</Button>
				</form>

				<p className="text-[10px] text-muted-foreground/60 w-full mt-4">
					En vous inscrivant, vous acceptez notre politique de confidentialité. Le code vous sera envoyé par
					email.
				</p>
			</div>
		</dialog>
	);
}
