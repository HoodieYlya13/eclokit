"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "./section-header";

export function PartnerContactForm() {
	const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("submitting");
		setTimeout(() => {
			setStatus("success");
		}, 1500);
	};

	if (status === "success") {
		return (
			<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto text-center">
				<div className="max-w-xl mx-auto bg-primary/5 rounded-3xl p-12 border border-primary/10 animate-fade-in-up">
					<div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center mx-auto mb-6">
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
						</svg>
					</div>
					<h3 className="text-2xl font-bold text-foreground mb-4">Demande envoyée !</h3>
					<p className="text-muted-foreground leading-relaxed">
						Merci de votre intérêt pour EcloKit. Notre équipe étudiera votre proposition avec la plus grande
						attention et reviendra vers vous très prochainement.
					</p>
					<Button
						variant="outline"
						className="mt-8 rounded-full border-primary/20 hover:bg-primary/5"
						onClick={() => setStatus("idle")}
					>
						Retour au formulaire
					</Button>
				</div>
			</section>
		);
	}

	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
			<SectionHeader badge="Contact" title="Prêt à collaborer ?" centered />

			<div className="max-w-2xl mx-auto">
				<p className="text-center text-muted-foreground mb-12 -mt-12 text-lg">
					Laissez-nous vos coordonnées et nous vous recontacterons pour construire votre projet sur-mesure.
				</p>

				<form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="companyName" className="text-xs uppercase tracking-widest font-bold">
								Nom de l'entreprise
							</Label>
							<Input
								id="companyName"
								placeholder="Votre marque"
								className="rounded-xl border-border/50 bg-background focus:ring-primary/20 h-12"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold">
								Adresse email professionnelle
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="contact@votreentreprise.fr"
								className="rounded-xl border-border/50 bg-background focus:ring-primary/20 h-12"
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold">
							Parlez-nous de vos produits
						</Label>
						<Textarea
							id="message"
							placeholder="Dites-nous en plus sur votre univers créatif..."
							className="rounded-xl border-border/50 bg-background focus:ring-primary/20 min-h-[150px] resize-none"
							required
						/>
					</div>

					<div className="flex justify-center pt-4">
						<Button
							type="submit"
							disabled={status === "submitting"}
							className="rounded-full px-12 py-8 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background w-full sm:w-auto"
						>
							{status === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
