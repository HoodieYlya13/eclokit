"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cookie, Settings, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const COOKIE_CONSENT_NAME = "yns_cookie_consent";

export function CookieConsent({ initialConsent }: { initialConsent?: string | null }) {
	const [status, setStatus] = useState<string | null>(initialConsent || "loading");
	const [view, setView] = useState<"info" | "personalize">("info");
	const [preferences, setPreferences] = useState({
		necessary: true,
		audience: true,
		marketing: true,
	});

	useEffect(() => {
		if (initialConsent !== undefined) {
			setStatus(initialConsent);
			return;
		}
		const saved = document.cookie
			.split("; ")
			.find((row) => row.startsWith(`${COOKIE_CONSENT_NAME}=`))
			?.split("=")[1];
		setStatus(saved || null);
	}, [initialConsent]);

	const handleSave = (newStatus: string) => {
		const oneYear = 31536000;
		document.cookie = `${COOKIE_CONSENT_NAME}=${newStatus}; max-age=${oneYear}; path=/; sameSite=lax`;
		setStatus(newStatus);
		// Dispatch event to notify other components (Newsletter, etc.)
		window.dispatchEvent(new Event("cookie_consent_updated"));
	};

	const handleAcceptAll = () => handleSave("accepted");
	const handleRefuseAll = () => handleSave("refused");
	const handleSavePreferences = () => handleSave("personalized");

	if (status !== null) return null;

	return (
		<AnimatePresence>
			<div className="fixed inset-0 z-1000 flex items-end sm:items-center justify-center p-4 sm:p-6">
				{/* Backdrop */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="absolute inset-0 bg-black/60 backdrop-blur-md"
				/>

				{/* Modal */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					className="relative w-full max-w-2xl bg-background border border-border shadow-2xl rounded-3xl overflow-hidden"
				>
					<div className="p-8 sm:p-10">
						<div className="flex items-center gap-4 mb-6">
							<div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
								<Cookie size={28} />
							</div>
							<h2 className="text-2xl font-display font-bold">Gestion des cookies</h2>
						</div>

						{view === "info" ? (
							<div className="space-y-8">
								<div className="space-y-4">
									<p className="text-lg leading-relaxed text-foreground/90 font-medium">
										Nous utilisons des cookies nécessaires au bon fonctionnement du site ainsi que, avec votre
										consentement, des cookies de mesure d’audience et des cookies marketing afin d’améliorer
										votre expérience et vous proposer des contenus adaptés à vos centres d’intérêt.
									</p>
									<div className="flex items-center gap-2 text-primary font-semibold text-sm bg-primary/5 w-fit px-4 py-2 rounded-full">
										<ShieldCheck size={16} />
										<span>Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment.</span>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 pt-4">
									<Button
										onClick={handleAcceptAll}
										className="flex-1 h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20"
									>
										Tout accepter
									</Button>
									<Button
										variant="outline"
										onClick={handleRefuseAll}
										className="flex-1 h-14 rounded-2xl text-base font-bold hover:bg-destructive/5 hover:text-destructive hover:border-destructive/30 transition-all"
									>
										Tout refuser
									</Button>
									<Button
										variant="ghost"
										onClick={() => setView("personalize")}
										className="h-14 px-6 rounded-2xl text-muted-foreground hover:text-primary transition-all flex gap-2"
									>
										<Settings size={18} />
										Personnaliser
									</Button>
								</div>
							</div>
						) : (
							<div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
								<div className="space-y-6">
									<PreferenceToggle
										title="Cookies nécessaires"
										description="Essentiels pour naviguer et utiliser les fonctionnalités de base."
										enabled={preferences.necessary}
										disabled
									/>
									<PreferenceToggle
										title="Mesure d'audience"
										description="Nous permettent de suivre l'utilisation du site pour l'améliorer."
										enabled={preferences.audience}
										onChange={(val) => setPreferences((p) => ({ ...p, audience: val }))}
									/>
									<PreferenceToggle
										title="Cookies marketing"
										description="Utilisés pour vous proposer des publicités pertinentes."
										enabled={preferences.marketing}
										onChange={(val) => setPreferences((p) => ({ ...p, marketing: val }))}
									/>
								</div>

								<div className="flex gap-3 pt-6 border-t border-border">
									<Button
										onClick={handleSavePreferences}
										className="flex-1 h-14 rounded-2xl text-base font-bold"
									>
										Enregistrer mes choix
									</Button>
									<Button
										variant="ghost"
										onClick={() => setView("info")}
										className="h-14 px-6 rounded-2xl text-muted-foreground"
									>
										Retour
									</Button>
								</div>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}

function PreferenceToggle({
	title,
	description,
	enabled,
	onChange,
	disabled = false,
}: {
	title: string;
	description: string;
	enabled: boolean;
	onChange?: (enabled: boolean) => void;
	disabled?: boolean;
}) {
	return (
		<div className="flex items-start justify-between gap-6 p-4 rounded-2xl bg-secondary/30 border border-border/50">
			<div className="space-y-1">
				<h4 className="font-bold text-foreground">{title}</h4>
				<p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
			</div>
			<Switch
				checked={enabled}
				onCheckedChange={onChange}
				disabled={disabled}
				className="mt-1 data-[state=checked]:bg-primary"
			/>
		</div>
	);
}
