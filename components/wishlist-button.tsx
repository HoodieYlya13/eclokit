"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/components/wishlist-context";
import { cn } from "@/lib/utils";

type WishlistButtonProps = {
	product: {
		id: string;
		name: string;
		slug: string;
		image: string;
		price: string;
	};
	className?: string;
	iconClassName?: string;
};

export function WishlistButton({ product, className, iconClassName }: WishlistButtonProps) {
	const { toggleWishlist, isInWishlist } = useWishlist();
	const active = isInWishlist(product.id);

	return (
		<button
			type="button"
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				toggleWishlist({
					id: product.id,
					name: product.name,
					slug: product.slug,
					image: product.image,
					price: product.price,
				});
			}}
			className={cn(
				"group flex items-center justify-center rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-all hover:scale-110 active:scale-95 shadow-sm cursor-pointer",
				className,
			)}
			aria-label={active ? "Retirer des favoris" : "Ajouter aux favoris"}
		>
			<Heart
				className={cn(
					"size-5 transition-colors",
					active ? "fill-primary text-primary" : "text-foreground group-hover:text-primary",
					iconClassName,
				)}
			/>
		</button>
	);
}
