"use client";

import { Bot, HelpCircle, MessageCircle, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Message = {
	id: string;
	text: string;
	sender: "user" | "bot";
	timestamp: Date;
};

const PREDEFINED_QUESTIONS = [
	{
		id: "q1",
		text: "Quels sont les délais de livraison ?",
		answer:
			"Nous expédions vos colis avec soin sous 24h à 48h. La livraison prend généralement 3 à 5 jours ouvrés en France métropolitaine.",
	},
	{
		id: "q2",
		text: "Comment fonctionne l'abonnement ?",
		answer:
			"C'est simple ! Chaque mois, vous recevez un kit DIY surprise avec tout le nécessaire (argile, outils, guide) pour créer une pièce unique. Sans engagement, vous pouvez suspendre à tout moment. ",
	},
	{
		id: "q3",
		text: "Où puis-je trouver les tutoriels ?",
		answer:
			"Chaque kit contient un QR code qui vous mène directement à notre plateforme vidéo exclusive. Vous y trouverez des pas-à-pas détaillés et des conseils d'experts !",
	},
	{
		id: "q4",
		text: "Comment vous contacter ?",
		answer:
			"Vous pouvez nous écrire directement à contact@eclokit.fr. Notre équipe de passionnés vous répondra sous 24h avec le sourire !",
	},
];

export function ChatBot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "welcome",
			text: "Bonjour ! ✨ Je suis l'assistant EcloBot. Comment puis-je vous aider dans votre aventure créative aujourd'hui ?",
			sender: "bot",
			timestamp: new Date(),
		},
	]);
	const [isTyping, setIsTyping] = useState(false);
	const [hasConsentChoice, setHasConsentChoice] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		const checkConsent = () => {
			const consent = document.cookie
				.split("; ")
				.find((row) => row.startsWith("yns_cookie_consent="))
				?.split("=")[1];
			setHasConsentChoice(!!consent);
		};
		checkConsent();
		window.addEventListener("cookie_consent_updated", checkConsent);
		return () => window.removeEventListener("cookie_consent_updated", checkConsent);
	}, []);

	useEffect(() => {
		if (isOpen && messages.length > 0) scrollToBottom();
	}, [isOpen, messages.length, scrollToBottom]);

	if (!hasConsentChoice) return null;

	const handleQuestionClick = (question: (typeof PREDEFINED_QUESTIONS)[0]) => {
		const userMsg: Message = {
			id: Date.now().toString(),
			text: question.text,
			sender: "user",
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMsg]);
		setIsTyping(true);

		// Simulate bot thinking/typing
		setTimeout(() => {
			const botMsg: Message = {
				id: (Date.now() + 1).toString(),
				text: question.answer,
				sender: "bot",
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, botMsg]);
			setIsTyping(false);
		}, 1000);
	};

	return (
		<div
			className={cn(
				"fixed bottom-6 right-6 z-300 flex flex-col items-end pointer-events-none",
				isOpen && "inset-0 sm:inset-auto sm:bottom-6 sm:right-6",
			)}
		>
			{/* Chat Window */}
			<div
				className={cn(
					"transition-all duration-300 origin-bottom-right flex flex-col bg-background shadow-2xl overflow-hidden",
					// Responsive sizing: Full screen on mobile, floating on desktop
					"fixed inset-0 w-full h-dvh z-301 sm:static sm:w-[400px] sm:h-auto sm:max-h-[80vh] sm:rounded-2xl sm:border sm:border-border sm:mb-4 sm:z-auto",
					isOpen
						? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
						: "scale-90 opacity-0 translate-y-10 pointer-events-none",
				)}
			>
				{/* Header */}
				<div className="bg-foreground px-6 py-5 sm:py-5 text-background flex items-center justify-between shrink-0">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
							<Bot className="h-6 w-6 text-foreground" />
						</div>
						<div>
							<h3 className="text-sm font-semibold tracking-wide uppercase">EcloBot</h3>
							<p className="text-[10px] opacity-70 uppercase tracking-widest flex items-center gap-1">
								<span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
								En ligne
							</p>
						</div>
					</div>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center sm:hidden"
						aria-label="Fermer le chat"
					>
						<X className="size-6" />
					</button>
				</div>

				{/* Messages Area */}
				<div className="flex-1 overflow-y-auto px-6 py-8 sm:py-6 space-y-6 bg-secondary/10">
					{messages.map((msg) => (
						<div
							key={msg.id}
							className={cn("flex w-full", msg.sender === "user" ? "justify-end" : "justify-start")}
						>
							<div
								className={cn(
									"max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm",
									msg.sender === "user"
										? "bg-foreground text-background rounded-tr-none"
										: "bg-background text-foreground border border-border rounded-tl-none",
								)}
							>
								{msg.text}
							</div>
						</div>
					))}
					{isTyping && (
						<div className="flex justify-start">
							<div className="bg-background border border-border rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
								<div className="flex gap-1">
									<span className="h-1.5 w-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
									<span className="h-1.5 w-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
									<span className="h-1.5 w-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
								</div>
							</div>
						</div>
					)}
					<div ref={messagesEndRef} />
				</div>

				{/* Quick Questions */}
				<div className="p-6 sm:p-4 border-t border-border bg-background shrink-0">
					<p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2 px-2">
						<HelpCircle className="h-3 w-3" /> Questions fréquentes
					</p>
					<div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto pb-2">
						{PREDEFINED_QUESTIONS.map((q) => (
							<button
								key={q.id}
								type="button"
								onClick={() => handleQuestionClick(q)}
								className="text-xs border border-border px-4 py-2.5 rounded-full hover:bg-secondary transition-colors text-left font-medium"
							>
								{q.text}
							</button>
						))}
					</div>
				</div>

				{/* Input Mock */}
				{/* <div className="p-6 sm:p-4 bg-secondary/5 border-t border-border flex gap-3 shrink-0 pb-10 sm:pb-4">
					<div className="flex-1 bg-background border border-border rounded-full px-5 py-3 text-sm text-muted-foreground flex items-center italic opacity-60">
						Tapez votre message ici...
					</div>
					<button
						type="button"
						className="h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center opacity-30 cursor-not-allowed"
					>
						<Send className="h-5 w-5" />
					</button>
				</div> */}
			</div>

			{/* Floating Toggle Button - Hidden when open on mobile */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className={cn(
					"h-16 w-16 relative rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 pointer-events-auto",
					isOpen
						? "opacity-0 scale-50 pointer-events-none sm:opacity-100 sm:scale-100 sm:pointer-events-auto bg-background text-foreground border border-border"
						: "bg-foreground text-background",
				)}
				aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
			>
				{isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
				{!isOpen && (
					<span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce shadow-md">
						1
					</span>
				)}
			</button>
		</div>
	);
}
