"use client";

import { useEffect } from "react";
import { useBlogViews } from "@/hooks/use-blog-views";

export function BlogViewTracker({ slug }: { slug: string }) {
	const { incrementView } = useBlogViews(slug);

	// Use a ref to ensure we only increment once per mount in dev
	useEffect(() => {
		incrementView();
	}, [incrementView]); // Empty dependency array to run only once on mount

	return null;
}
