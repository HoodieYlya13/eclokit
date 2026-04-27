import { Search } from "lucide-react";
import Image from "next/image";
import { WishlistHeaderLink } from "@/components/wishlist-header-link";
import { YnsLink } from "@/components/yns-link";
import { commerce } from "@/lib/commerce";
import { CartButton } from "./cart-button";
import { HeaderClient } from "./header-client";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export async function Header() {
	const categoriesResult = await commerce.categoriesBrowse({ limit: 100 }).catch(() => ({ data: [] }));
	const categories = (categoriesResult?.data || [])
		.filter((c) => c.active && c.slug !== "coffret créatif")
		.map((c) => ({
			title: c.name,
			slug: c.slug,
		}));

	return (
		<HeaderClient className="fixed top-6 md:top-10 inset-x-4 md:inset-x-10 px-6 py-4 md:px-12 rounded-full z-100 border border-secondary/50 shadow-xl">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<MobileMenu>
						<Navbar
							categories={categories}
							className="flex flex-col space-y-6 text-lg font-medium tracking-wide mt-4"
						/>
					</MobileMenu>

					{/* Logo */}
					<YnsLink
						prefetch={"eager"}
						href="/"
						className="text-2xl md:text-3xl font-display font-bold tracking-tight flex flex-row items-center gap-2"
					>
						<Image
							priority
							src="/logo.png"
							alt="Logo"
							width={75}
							height={75}
							className="size-[50px] md:size-[75px]"
						/>
						<span className="hidden 2xl:flex text-foreground">EcloKit</span>
					</YnsLink>
				</div>

				<Navbar
					categories={categories}
					className="hidden xl:flex space-x-12 text-sm font-medium items-center tracking-wide text-muted-foreground"
				/>

				<div className="flex items-center space-x-4 md:space-x-6">
					<YnsLink
						href="/search"
						className="hover:text-primary transition-colors text-foreground"
						aria-label="Search"
					>
						<Search className="size-5" />
					</YnsLink>
					{/* <button
						type="button"
						className="hover:text-primary transition-colors text-foreground"
						aria-label="Notifications"
					>
						<Bell className="w-5 h-5" />
					</button> */}
					<WishlistHeaderLink />
					<CartButton />
				</div>
			</div>
		</HeaderClient>
	);
}
