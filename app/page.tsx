import { BestSellers } from "@/components/sections/best-sellers";
import { BoxOfTheMonth } from "@/components/sections/box-of-the-month";
import { CuratedEssentials } from "@/components/sections/curated-essentials";
import { Hero } from "@/components/sections/hero";
import { NewArrivals } from "@/components/sections/new-arrivals";
import { Philosophy } from "@/components/sections/philosophy";

export default function Home() {
	return (
		<>
			<Hero />
			<BoxOfTheMonth />
			<CuratedEssentials limit={3} />
			<BestSellers limit={4} />
			<NewArrivals limit={4} />
			<Philosophy />
		</>
	);
}
