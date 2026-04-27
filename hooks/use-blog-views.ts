"use client";

import { useEffect, useState } from "react";
import { blogPosts } from "@/lib/blog-data";

export function useBlogViews(slug: string) {
	const baseViews = blogPosts.find((p) => p.slug === slug)?.views || 0;
	const [localViews, setLocalViews] = useState(0);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		const storedViews = localStorage.getItem(`blog_views_${slug}`);
		if (storedViews) {
			setLocalViews(Number.parseInt(storedViews, 10));
		}

		const storedLiked = localStorage.getItem(`blog_liked_${slug}`);
		if (storedLiked === "true") {
			setIsLiked(true);
		}
	}, [slug]);

	const incrementView = () => {
		const stored = localStorage.getItem(`blog_views_${slug}`);
		const currentLocal = stored ? Number.parseInt(stored, 10) : 0;
		const nextLocal = currentLocal + 1;
		setLocalViews(nextLocal);
		localStorage.setItem(`blog_views_${slug}`, nextLocal.toString());
	};

	const toggleLike = () => {
		const nextLiked = !isLiked;
		setIsLiked(nextLiked);
		localStorage.setItem(`blog_liked_${slug}`, nextLiked.toString());
	};

	return {
		totalViews: baseViews + localViews,
		incrementView,
		isLiked,
		toggleLike,
	};
}
