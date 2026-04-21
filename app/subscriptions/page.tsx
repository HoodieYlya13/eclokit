import type { Metadata } from "next";
import { Subscriptions } from "@/components/sections/subscriptions";

export const metadata: Metadata = {
	title: "Abonnements - EcloKit",
	description:
		"Découvrez nos abonnements mensuels de box créatives. Choisissez le rythme qui vous convient pour cultiver votre créativité.",
};

export default function SubscriptionsPage() {
	return <Subscriptions limit={3} />;
}
