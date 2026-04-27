"use client";

import { ArrowLeft, HeartOff, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WishlistButton } from "@/components/wishlist-button";
import { useWishlist } from "@/components/wishlist-context";
import { YnsLink } from "@/components/yns-link";
import { CURRENCY, LOCALE } from "@/lib/constants";
import { formatMoney } from "@/lib/money";
import { YNSMedia } from "@/lib/yns-media";

export default function WishlistPage() {
	const { items, itemCount } = useWishlist();

	if (itemCount === 0) {
		return (
			<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
				<div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mb-8">
					<HeartOff className="w-10 h-10 text-muted-foreground" />
				</div>
				<h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Votre liste est vide</h1>
				<p className="text-muted-foreground max-w-md mb-10 leading-relaxed">
					Vous n'avez pas encore ajouté de coups de cœur à votre liste d'envies. Explorez nos créations et
					commencez à rêver !
				</p>
				<Button
					asChild
					size="lg"
					className="rounded-full px-10 py-7 text-base font-bold uppercase tracking-widest"
				>
					<YnsLink href="/products">Continuer mes achats</YnsLink>
				</Button>
			</div>
		);
	}

	return (
		<main className="min-h-screen pt-36 md:pt-48 pb-24 px-6 md:px-12 bg-background">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
					<div>
						<YnsLink
							href="/products"
							className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary mb-4 transition-colors"
						>
							<ArrowLeft size={16} />
							Boutique
						</YnsLink>
						<h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">Ma Liste d'Envies</h1>
						<p className="text-muted-foreground mt-4 text-lg">
							{itemCount} article{itemCount > 1 ? "s" : ""} enregistré{itemCount > 1 ? "s" : ""}
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
					{items.map((item) => (
						<div key={item.id} className="group relative flex flex-col">
							<YnsLink
								prefetch={"eager"}
								href={`/product/${item.slug}`}
								className="block relative aspect-square rounded-2xl overflow-hidden mb-5"
							>
								<YNSMedia
									src={item.image}
									alt={item.name}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<WishlistButton product={item} className="absolute top-4 right-4 z-10" />
							</YnsLink>

							<div className="flex-1 flex flex-col">
								<div className="flex justify-between items-start mb-2">
									<YnsLink
										href={`/product/${item.slug}`}
										className="font-display text-2xl hover:text-primary transition-colors pr-4"
									>
										{item.name}
									</YnsLink>
									<span className="font-semibold whitespace-nowrap pt-1">
										{formatMoney({ amount: BigInt(item.price), currency: CURRENCY, locale: LOCALE })}
									</span>
								</div>

								<Button
									asChild
									variant="outline"
									className="mt-auto w-full rounded-full border-foreground/10 hover:bg-foreground hover:text-background transition-all group/btn h-12"
								>
									<YnsLink href={`/product/${item.slug}`} className="flex items-center gap-2">
										<ShoppingBag
											size={18}
											className="transition-transform group-hover/btn:-translate-y-0.5"
										/>
										Voir le produit
									</YnsLink>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
