import { Search } from "lucide-react";
import Image from "next/image";
import { YnsLink } from "@/components/yns-link";
import { CartButton } from "./cart-button";
import { HeaderClient } from "./header-client";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export function Header() {
	return (
		<HeaderClient className="fixed top-6 md:top-10 inset-x-4 md:inset-x-10 px-6 py-4 md:px-12 bg-background rounded-full z-100 border border-secondary/50 shadow-xl">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<MobileMenu>
						<Navbar className="flex flex-col space-y-6 text-lg font-medium tracking-wide mt-4" />
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
						<span className="hidden xl:flex text-foreground">EcloKit</span>
					</YnsLink>
				</div>

				<Navbar className="hidden lg:flex space-x-12 text-sm font-medium items-center tracking-wide text-muted-foreground" />

				<div className="flex items-center space-x-4 md:space-x-6">
					<YnsLink
						href="/search"
						className="hover:text-primary transition-colors text-foreground"
						aria-label="Search"
					>
						<Search className="w-5 h-5" />
					</YnsLink>
					{/* <button
						type="button"
						className="hover:text-primary transition-colors text-foreground"
						aria-label="Notifications"
					>
						<Bell className="w-5 h-5" />
					</button> */}
					<CartButton />
				</div>
			</div>
		</HeaderClient>
	);
}
