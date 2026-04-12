"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";

export const YnsLink = ({
	exactHrefMatch,
	activeClassName,
	className,
	prefetch,
	...props
}: Omit<ComponentPropsWithRef<typeof Link>, "prefetch"> & {
	exactHrefMatch?: boolean;
	activeClassName?: string;
	prefetch?: boolean | "eager";
}) => {
	const router = useRouter();
	const strHref = typeof props.href === "string" ? props.href : props.href.href;

	const pathname = usePathname();
	const isActive =
		strHref && (exactHrefMatch || strHref === "/" ? pathname === strHref : pathname.startsWith(strHref));

	const conditionalPrefetch = () => {
		if (strHref && prefetch === "eager") {
			void router.prefetch(strHref);
		}
	};

	const handleHrefClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (strHref?.startsWith("/#") && pathname === "/") {
			const id = strHref.split("#")[1];
			const element = document.getElementById(id);
			if (element) {
				e.preventDefault();
				window.history.pushState(null, "", strHref);
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
		props.onClick?.(e);
	};

	return (
		<Link
			{...props}
			prefetch={!!prefetch}
			className={cn(className, isActive && activeClassName)}
			onClick={handleHrefClick}
			{...(strHref &&
				prefetch === "eager" && {
					onMouseEnter: (e) => {
						conditionalPrefetch();
						return props.onMouseEnter?.(e);
					},
					onPointerEnter: (e) => {
						conditionalPrefetch();
						return props.onPointerEnter?.(e);
					},
					onTouchStart: (e) => {
						conditionalPrefetch();
						return props.onTouchStart?.(e);
					},
					onFocus: (e) => {
						conditionalPrefetch();
						return props.onFocus?.(e);
					},
				})}
		/>
	);
};
