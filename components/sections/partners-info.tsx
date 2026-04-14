import { PartnerContactForm } from "./partner-contact-form";
import { PartnersSlider } from "./partners-slider";
import { SectionHeader } from "./section-header";

export function PartnersInfo() {
	return (
		<section className="min-h-svh w-full flex flex-col justify-center items-center border-t border-border py-20">
			<SectionHeader badge="Ils nous font déjà confiance" title="Nos partenaires" centered noMarginBottom />

			<div className="relative flex flex-col justify-center items-center 2xl:flex-row-reverse size-full">
				<PartnersSlider />

				<PartnerContactForm />
			</div>
		</section>
	);
}
