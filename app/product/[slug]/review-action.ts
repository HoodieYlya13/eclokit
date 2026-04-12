"use server";

import { commerce } from "@/lib/commerce";

type ReviewState = {
	success: boolean;
	message: string;
	error?: string;
} | null;

export async function submitReview(_prev: ReviewState, formData: FormData): Promise<ReviewState> {
	const slug = formData.get("slug");
	const author = formData.get("author");
	const email = formData.get("email");
	const content = formData.get("content");
	const rating = formData.get("rating");

	if (!slug || typeof slug !== "string") {
		return { success: false, message: "", error: "Produit non trouvé." };
	}

	if (!author || typeof author !== "string" || !author.trim()) {
		return { success: false, message: "", error: "Veuillez entrer votre nom." };
	}

	if (!email || typeof email !== "string") {
		return { success: false, message: "", error: "Veuillez entrer un email valide." };
	}

	if (!content || typeof content !== "string" || !content.trim()) {
		return { success: false, message: "", error: "Veuillez écrire un avis." };
	}

	const ratingNum = Number(rating);
	if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
		return { success: false, message: "", error: "Veuillez sélectionner une note." };
	}

	try {
		await commerce.productReviewCreate(
			{ idOrSlug: slug },
			{ author: author.trim(), email, content: content.trim(), rating: ratingNum },
		);

		return { success: true, message: "Merci pour votre avis ! Il apparaîtra une fois approuvé." };
	} catch {
		return { success: false, message: "", error: "Une erreur s'est produite. Veuillez réessayer." };
	}
}
