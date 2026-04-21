"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";
import { addToCart } from "@/app/cart/actions";
import { useCart } from "@/app/cart/cart-context";
import { QuantitySelector } from "@/app/product/[slug]/quantity-selector";
import { TrustBadges } from "@/app/product/[slug]/trust-badges";
import { VariantSelector } from "@/app/product/[slug]/variant-selector";
import { useVolumePricing, VolumePricingDisplay, type VolumeTier } from "@/app/product/[slug]/volume-pricing";
import { WishlistButton } from "@/components/wishlist-button";
import { CURRENCY, LOCALE } from "@/lib/constants";
import { formatMoney } from "@/lib/money";

type Variant = {
	id: string;
	price: string;
	images: string[];
	combinations: {
		variantValue: {
			id: string;
			value: string;
			colorValue: string | null;
			variantType: {
				id: string;
				type: "string" | "color";
				label: string;
			};
		};
	}[];
};

type AddToCartButtonProps = {
	variants: Variant[];
	product: {
		id: string;
		name: string;
		slug: string;
		images: string[];
	};
	volumePricingTiers?: VolumeTier[];
	isSubscription?: boolean;
};

export function AddToCartButton({
	variants,
	product,
	volumePricingTiers = [],
	isSubscription = false,
}: AddToCartButtonProps) {
	const searchParams = useSearchParams();
	const [quantity, setQuantity] = useState(1);
	const [isPending, startTransition] = useTransition();
	const { openCart, dispatch } = useCart();

	const selectedVariant = useMemo(() => {
		if (variants.length === 1) {
			return variants[0];
		}

		if (searchParams.size === 0) {
			return undefined;
		}

		const paramsOptions: Record<string, string> = {};
		searchParams.forEach((valueName, key) => {
			paramsOptions[key] = valueName;
		});

		return variants.find((variant) =>
			variant.combinations.every(
				(combination) =>
					paramsOptions[combination.variantValue.variantType.label] === combination.variantValue.value,
			),
		);
	}, [variants, searchParams]);

	const { resolvedTiers, volumePrice } = useVolumePricing(volumePricingTiers, selectedVariant?.id, quantity);

	const unitPrice = volumePrice ?? selectedVariant?.price;
	const totalPrice = unitPrice ? BigInt(unitPrice) * BigInt(quantity) : null;

	const buttonText = useMemo(() => {
		if (isPending) return "Ajout en cours...";
		if (!selectedVariant) return "Sélectionnez les options";
		if (isSubscription) return "S'abonner";
		if (totalPrice)
			return `Ajouter au panier — ${formatMoney({ amount: totalPrice, currency: CURRENCY, locale: LOCALE })}`;
		return "Ajouter au panier";
	}, [isPending, selectedVariant, totalPrice, isSubscription]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!selectedVariant) return;

		openCart();

		startTransition(async () => {
			dispatch({
				type: "ADD_ITEM",
				item: {
					quantity,
					productVariant: {
						id: selectedVariant.id,
						price: selectedVariant.price,
						images: selectedVariant.images,
						product: {
							...product,
							isSubscription,
						},
					},
				},
			});

			await addToCart(selectedVariant.id, quantity);
			toast.success(`${product.name} ajouté au panier !`);
			setQuantity(1);
		});
	};

	return (
		<div className="space-y-8">
			{variants.length > 1 && <VariantSelector variants={variants} selectedVariantId={selectedVariant?.id} />}

			<QuantitySelector quantity={quantity} onQuantityChange={setQuantity} disabled={isPending} />

			<VolumePricingDisplay tiers={resolvedTiers} quantity={quantity} volumePrice={volumePrice} />

			<form onSubmit={handleSubmit} className="flex gap-3">
				<button
					type="submit"
					disabled={isPending || !selectedVariant}
					className="flex-1 h-14 bg-foreground text-background py-4 px-8 rounded-full text-base font-medium tracking-wide hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{buttonText}
				</button>
				<WishlistButton
					product={{
						id: product.id,
						name: product.name,
						slug: product.slug,
						image: product.images[0] || "",
						price: selectedVariant?.price || "0",
					}}
					className="h-14 w-14 border-2 border-foreground/10"
					iconClassName="size-6"
				/>
			</form>

			<TrustBadges />
		</div>
	);
}
