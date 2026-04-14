import { Search } from "lucide-react";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { ProductCardLarge } from "@/components/sections/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { commerce } from "@/lib/commerce";
import { SearchForm } from "./search-form";
import { SearchPagination } from "./search-pagination";

const PRODUCTS_PER_PAGE = 12;

type SearchPageProps = {
	searchParams: Promise<{ q?: string; page?: string }>;
};

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
	const { q } = await searchParams;
	return {
		title: q ? `Recherche : ${q} — EcloKit` : "Recherche — EcloKit",
		description: q ? `Résultats de recherche pour "${q}"` : "Rechercher dans notre boutique",
	};
}

function SearchResultsSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{Array.from({ length: 6 }).map((_, i) => (
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

async function SearchResults({ query, page }: { query: string; page?: string }) {
	"use cache";
	cacheLife("seconds");

	const currentPage = Math.max(1, Number(page) || 1);
	const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

	const results = await commerce.productBrowse({
		query,
		active: true,
		limit: PRODUCTS_PER_PAGE,
		offset,
	});

	const totalPages = Math.ceil(results.meta.count / PRODUCTS_PER_PAGE);

	if (results.data.length === 0) {
		return (
			<div className="text-center py-16">
				<Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
				<h2 className="font-display text-2xl mb-2">Aucun produit trouvé</h2>
				<p className="text-muted-foreground">
					Essayez de rechercher autre chose ou parcourez nos collections.
				</p>
			</div>
		);
	}

	return (
		<>
			<p className="text-muted-foreground mb-8">
				{results.data.length} produit{results.data.length !== 1 ? "s" : ""} trouvé
				{results.data.length !== 1 ? "s" : ""} pour &ldquo;{query}
				&rdquo;
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{results.data.map((product) => (
					<ProductCardLarge key={product.id} product={product} />
				))}
			</div>
			<SearchPagination currentPage={currentPage} totalPages={totalPages} query={query} />
		</>
	);
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const { q, page } = await searchParams;
	const query = q?.trim() ?? "";

	return (
		<div className="max-w-7xl mx-auto px-6 md:px-12 py-16 pt-36 md:pt-48">
			<div className="mb-12">
				<h1 className="font-display text-4xl md:text-5xl mb-6">Rechercher des produits</h1>
				<SearchForm initialQuery={query} />
			</div>

			{query ? (
				<Suspense fallback={<SearchResultsSkeleton />}>
					<SearchResults query={query} page={page} />
				</Suspense>
			) : (
				<div className="text-center py-16">
					<Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
					<h2 className="font-display text-2xl mb-2">Rechercher des produits</h2>
					<p className="text-muted-foreground">Entrez un terme de recherche pour trouver des produits.</p>
				</div>
			)}
		</div>
	);
}
