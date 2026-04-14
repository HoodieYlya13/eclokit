import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { PartnerAdvantages } from "@/components/sections/partner-advantages";
// import { PartnerContactForm } from "@/components/sections/partner-contact-form";
import { PartnerPacks } from "@/components/sections/partner-packs";
import { PartnersInfo } from "@/components/sections/partners-info";

const partnerData = {
	title: "Devenir Partenaire : Rayonnez au cœur de la création",
	introduction:
		"Chez EcloKit, nous ne choisissons pas nos partenaires au hasard. Nous croyons au beau qui fait du bien et à la haute qualité. Nous collaborons exclusivement avec des entreprises qui partagent nos valeurs : engagement éthique, savoir-faire européen et passion pour le fait-main.",
};

export const metadata: Metadata = {
	title: "Devenir Partenaire | EcloKit",
	description: partnerData.introduction,
};

export default function BecomePartnerPage() {
	return (
		<>
			<AboutHero title={partnerData.title} introduction={partnerData.introduction} />

			<PartnerAdvantages />

			<PartnerPacks />

			<PartnersInfo />

			{/* <PartnerContactForm /> */}
		</>
	);
}
