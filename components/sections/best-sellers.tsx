import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { commerce } from "@/lib/commerce";
import { ProductCard } from "../product-card";
import { SectionHeader } from "./section-header";

type BestSellersProps = {
	limit?: number;
};

function BestSellersSkeleton() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
			{Array.from({ length: 4 }).map((_, i) => (
				<div key={i} className="flex flex-col">
					<Skeleton className="aspect-square mb-5 rounded-sm" />
					<div className="text-center">
						<Skeleton className="h-6 w-24 mx-auto mb-2" />
						<Skeleton className="h-4 w-16 mx-auto" />
					</div>
				</div>
			))}
		</div>
	);
}

async function BestSellersContent({ limit = 3 }: BestSellersProps) {
	"use cache";
	cacheLife("minutes");

	const collection = await commerce.collectionGet({ idOrSlug: "best-sellers" });

	if (!collection?.productCollections?.length) return null;

	const products = (
		await Promise.all(
			collection.productCollections
				.slice(0, limit)
				.map((pc) => commerce.productGet({ idOrSlug: pc.product.id })),
		)
	).filter((p): p is NonNullable<typeof p> => p !== null);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export function BestSellers({ limit = 3 }: BestSellersProps) {
	return (
		<section className="py-20 px-6 md:px-12 w-full max-w-screen-2xl mx-auto relative z-50 bg-background border-t border-border">
			<SectionHeader badge="Pour ceux qui en veulent encore" title="Vos coups de cœur à l'unité" centered />
			<Suspense fallback={<BestSellersSkeleton />}>
				<BestSellersContent limit={limit} />
			</Suspense>
		</section>
	);
}
