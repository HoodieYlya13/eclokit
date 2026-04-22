import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/sections/product-grid";
import { commerce } from "@/lib/commerce";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const products = await commerce.productBrowse({ limit: 100, active: true });

	// Find the category from the products to get its proper name
	const categoryName = products.data.find((p) => p.category?.slug === slug)?.category?.name;

	if (!categoryName) {
		return { title: "Catégorie non trouvée — EcloKit" };
	}

	return {
		title: `${categoryName} — EcloKit`,
		description: `Découvrez tous nos produits dans la catégorie ${categoryName}.`,
	};
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
	"use cache";
	cacheLife("minutes");

	const { slug } = await params;
	const result = await commerce.productBrowse({ limit: 100, active: true });

	const filteredProducts = result.data.filter((p) => p.category?.slug === slug);
	const categoryName =
		filteredProducts[0]?.category?.name || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");

	if (filteredProducts.length === 0) {
		// We can't be 100% sure if it exists or not just from browse if no products are assigned
		// but for now let's show notFound if empty
		notFound();
	}

	return (
		<main className="pt-36 md:pt-48 pb-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				<h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">{categoryName}</h1>
				<p className="mt-4 text-muted-foreground text-lg italic">
					Explorer nos articles pour vos projets de {categoryName.toLowerCase()}
				</p>
			</div>

			<ProductGrid
				products={filteredProducts}
				title=""
				description={`${filteredProducts.length} produits`}
				showViewAll={false}
			/>
		</main>
	);
}
