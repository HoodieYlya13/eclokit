"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
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
			<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto pt-36 md:pt-48">
				<div className="max-w-2xl mx-auto bg-primary/5 rounded-3xl p-12 border border-primary/10 text-center animate-fade-in-up">
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
					<h3 className="text-2xl font-bold text-foreground mb-4">Message envoyé !</h3>
					<p className="text-muted-foreground leading-relaxed">
						Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais (généralement
						sous 24h à 48h).
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
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto pt-36 md:pt-48">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
				<div className="space-y-12">
					<div className="space-y-8">
						<div className="flex items-start gap-6">
							<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
								<Phone size={24} />
							</div>
							<div>
								<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Téléphone</h3>
								<p className="text-xl font-medium">03 87 25 78 61</p>
							</div>
						</div>

						<div className="flex items-start gap-6">
							<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
								<Mail size={24} />
							</div>
							<div>
								<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Email</h3>
								<p className="text-xl font-medium">contact@eclokit.fr</p>
							</div>
						</div>

						<div className="flex items-start gap-6">
							<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
								<MapPin size={24} />
							</div>
							<div>
								<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Adresse</h3>
								<p className="text-xl font-medium leading-relaxed">
									3 rue Marconi
									<br />
									57070 Metz, France
								</p>
							</div>
						</div>
					</div>

					<div className="w-full aspect-video rounded-3xl overflow-hidden border border-border shadow-inner bg-muted">
						<iframe
							title="EcloKit Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.2348704489036!2d6.212784077495422!3d49.10117837136599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794ddc9581e8ac3%3A0xc00ad4037fb95c3b!2s3%20Rue%20Marconi%2C%2057070%20Metz!5e0!3m2!1sfr!2sfr!4v1776206638991!5m2!1sfr!2sfr"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>

				<div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/10 shadow-sm">
					<div className="mb-10 text-center lg:text-left">
						<h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Envoyez-nous un message</h2>
						<p className="text-muted-foreground">
							Une question ? Un projet ? Nous sommes là pour vous répondre et vous accompagner.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold">
									Votre nom
								</Label>
								<Input
									id="name"
									placeholder="Prénom Nom"
									className="rounded-xl border-border/50 bg-background focus:ring-primary/20 h-12"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold">
									Adresse email
								</Label>
								<Input
									id="email"
									type="email"
									placeholder="email@exemple.com"
									className="rounded-xl border-border/50 bg-background focus:ring-primary/20 h-12"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold">
								Sujet de votre message
							</Label>
							<Input
								id="subject"
								placeholder="Comment pouvons-nous vous aider ?"
								className="rounded-xl border-border/50 bg-background focus:ring-primary/20 h-12"
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold">
								Votre message
							</Label>
							<Textarea
								id="message"
								placeholder="Dites-nous tout..."
								className="rounded-xl border-border/50 bg-background focus:ring-primary/20 min-h-[150px] resize-none"
								required
							/>
						</div>

						<div className="pt-4">
							<Button
								type="submit"
								disabled={status === "submitting"}
								className="rounded-full px-12 py-8 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.05] active:scale-[0.95] shadow-xl hover:shadow-primary/20 bg-foreground text-background w-full"
							>
								{status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
