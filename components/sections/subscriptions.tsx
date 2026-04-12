import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { commerce } from "@/lib/commerce";
import { ProductCardLarge } from "./product-card";
import { SectionHeader } from "./section-header";

type SubscriptionsProps = {
	limit?: number;
};

function SubscriptionsSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
			{Array.from({ length: 3 }).map((_, i) => (
				<div key={i}>
					<Skeleton className="aspect-[4/5] mb-6" />
					<div className="flex justify-between">
						<div>
							<Skeleton className="h-8 w-40 mb-2" />
							<Skeleton className="h-4 w-24" />
						</div>
						<Skeleton className="h-6 w-16" />
					</div>
				</div>
			))}
		</div>
	);
}

async function SubscriptionsContent({ limit = 3 }: SubscriptionsProps) {
	"use cache";
	cacheLife("minutes");

	const collection = await commerce.collectionGet({ idOrSlug: "subscriptions" });

	if (!collection?.productCollections?.length) return null;

	const products = (
		await Promise.all(
			collection.productCollections
				.slice(0, limit)
				.map((pc) => commerce.productGet({ idOrSlug: pc.product.id })),
		)
	).filter((p): p is NonNullable<typeof p> => p !== null);

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
			{products.map((product) => (
				<ProductCardLarge key={product.id} product={product} />
			))}
		</div>
	);
}

export function Subscriptions({ limit = 3 }: SubscriptionsProps) {
	return (
		<section
			id="subscriptions"
			className="py-10 px-6 md:px-12 w-full max-w-screen-2xl mx-auto relative z-50 bg-background border-t border-border"
		>
			<SectionHeader badge="Nos abonnements" title="Votre créativité, votre rythme" centered />
			<Suspense fallback={<SubscriptionsSkeleton />}>
				<SubscriptionsContent limit={limit} />
			</Suspense>
		</section>
	);
}
