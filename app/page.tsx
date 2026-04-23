import { HashScrollFix } from "@/components/hash-scroll-fix";
import { BestSellers } from "@/components/sections/best-sellers";
import { BoxOfTheMonth } from "@/components/sections/box-of-the-month";
import { ClientTestimonials } from "@/components/sections/client-testimonials";
import { CommunitySection } from "@/components/sections/community-section";
import { Hero } from "@/components/sections/hero";
// import { NewArrivals } from "@/components/sections/new-arrivals";
import { OurPartners } from "@/components/sections/our-partners";
import { OurValues } from "@/components/sections/our-values";
// import { Philosophy } from "@/components/sections/philosophy";
// import { Subscriptions } from "@/components/sections/subscriptions";
import { SubscriptionCountdown } from "@/components/sections/subscription-countdown";

export default function Home() {
	return (
		<>
			<HashScrollFix />
			<Hero />
			<BoxOfTheMonth />
			<OurPartners />
			<ClientTestimonials />
			<SubscriptionCountdown />
			{/* <Subscriptions limit={3} /> */}
			<OurValues />
			<BestSellers limit={4} />
			<CommunitySection />
			{/* <NewArrivals limit={4} />
			<Philosophy /> */}
		</>
	);
}
