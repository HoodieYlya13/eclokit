import "@/app/globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { CartProvider } from "@/app/cart/cart-context";
import { CartSidebar } from "@/app/cart/cart-sidebar";
import { Footer } from "@/app/footer";
import { ChatBot } from "@/components/chat-bot";
import { ErrorOverlayRemover, NavigationReporter } from "@/components/devtools";
import { NewsletterPopup } from "@/components/newsletter-popup";
import { BottomSection } from "@/components/sections/bottom-section";
import { commerce, getStoreFaviconUrl, meGetCached } from "@/lib/commerce";
import { getCartCookieJson } from "@/lib/cookies";
import { StoreJsonLd } from "@/lib/json-ld";
import { Header } from "./header";

const montserrat = Montserrat({
	variable: "--font-body",
	subsets: ["latin"],
	style: ["normal", "italic"],
	weight: ["400", "500", "600", "700"],
});

const tanBuster = localFont({
	src: "../public/fonts/TAN-BUSTER-Regular.otf",
	variable: "--font-display",
	display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
	const me = await meGetCached();
	const storeName = me.store.settings?.storeName || "EcloKit";
	const faviconUrl = getStoreFaviconUrl(me.store.settings) ?? "/favicon.ico";

	return {
		title: storeName,
		description: me.store.settings?.storeDescription || "EcloKit",
		icons: {
			icon: [
				{ url: faviconUrl, sizes: "any", type: "image/svg+xml" },
				{ url: faviconUrl, sizes: "192x192", type: "image/png" },
			],
			apple: [{ url: faviconUrl, sizes: "180x180" }],
			shortcut: faviconUrl,
		},
		manifest: "/manifest.webmanifest",
	};
}

async function getInitialCart() {
	const cartCookie = await getCartCookieJson();

	if (!cartCookie?.id) {
		return { cart: null, cartId: null };
	}

	try {
		const cart = await commerce.cartGet({ cartId: cartCookie.id });
		return { cart: cart ?? null, cartId: cartCookie.id };
	} catch {
		return { cart: null, cartId: cartCookie.id };
	}
}

async function CartProviderWrapper({ children }: { children: React.ReactNode }) {
	const { cart, cartId } = await getInitialCart();

	return (
		<CartProvider initialCart={cart} initialCartId={cartId}>
			<div className="flex min-h-screen flex-col">
				<Header />
				<main className="flex-1 w-full">
					{children}
					<BottomSection />
				</main>
				<Footer />
			</div>
			<CartSidebar />
			<ChatBot />
			<NewsletterPopup />
		</CartProvider>
	);
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const env = process.env.VERCEL_ENV || "development";

	return (
		<html lang="fr" data-scroll-behavior="smooth">
			<body className={`${tanBuster.variable} ${montserrat.variable} antialiased`}>
				<Suspense>
					<StoreJsonLd />
				</Suspense>
				<Suspense>
					<CartProviderWrapper>{children}</CartProviderWrapper>
				</Suspense>
				{env === "development" && (
					<>
						<NavigationReporter />
						<ErrorOverlayRemover />
					</>
				)}
			</body>
		</html>
	);
}
