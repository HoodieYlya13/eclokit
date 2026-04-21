"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type WishlistItem = {
	id: string;
	name: string;
	slug: string;
	image: string;
	price: string;
};

type WishlistContextType = {
	items: WishlistItem[];
	addToWishlist: (product: WishlistItem) => void;
	removeFromWishlist: (productId: string) => void;
	toggleWishlist: (product: WishlistItem) => void;
	isInWishlist: (productId: string) => boolean;
	itemCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<WishlistItem[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// Load from localStorage
	useEffect(() => {
		const saved = localStorage.getItem("yns_wishlist");
		if (saved) {
			try {
				setItems(JSON.parse(saved));
			} catch (e) {
				console.error("Failed to parse wishlist", e);
			}
		}
		setIsLoaded(true);
	}, []);

	// Save to localStorage
	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem("yns_wishlist", JSON.stringify(items));
		}
	}, [items, isLoaded]);

	const isInWishlist = (productId: string) => items.some((item) => item.id === productId);

	const addToWishlist = (product: WishlistItem) => {
		if (!isInWishlist(product.id)) {
			setItems((prev) => [...prev, product]);
			toast.success(`${product.name} ajouté à vos favoris !`);
		}
	};

	const removeFromWishlist = (productId: string) => {
		const item = items.find((i) => i.id === productId);
		setItems((prev) => prev.filter((i) => i.id !== productId));
		if (item) {
			toast.success(`${item.name} retiré de vos favoris.`);
		}
	};

	const toggleWishlist = (product: WishlistItem) => {
		if (isInWishlist(product.id)) {
			removeFromWishlist(product.id);
		} else {
			addToWishlist(product);
		}
	};

	return (
		<WishlistContext.Provider
			value={{
				items,
				addToWishlist,
				removeFromWishlist,
				toggleWishlist,
				isInWishlist,
				itemCount: items.length,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
}

export function useWishlist() {
	const context = useContext(WishlistContext);
	if (context === undefined) {
		throw new Error("useWishlist must be used within a WishlistProvider");
	}
	return context;
}
