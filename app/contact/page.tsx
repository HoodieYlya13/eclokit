import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
	title: "Contact | EcloKit",
	description: "Contactez-nous pour toute question ou demande de collaboration.",
};

export default function ContactPage() {
	return <ContactSection />;
}
