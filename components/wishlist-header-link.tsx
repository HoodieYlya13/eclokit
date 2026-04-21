"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/components/wishlist-context";
import { YnsLink } from "@/components/yns-link";

export function WishlistHeaderLink() {
	const { itemCount } = useWishlist();

	return (
		<YnsLink
			href="/wishlist"
			className="relative hover:text-primary transition-colors text-foreground flex items-center justify-center"
			aria-label="Favoris"
		>
			<Heart className="size-5" />
			{itemCount > 0 && (
				<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-background animate-in zoom-in duration-300">
					{itemCount}
				</span>
			)}
		</YnsLink>
	);
}
