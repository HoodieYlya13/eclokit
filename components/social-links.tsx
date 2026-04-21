import { cn } from "@/lib/utils";

// Social Icons
function InstagramIcon() {
	return (
		<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
			<path
				clipRule="evenodd"
				d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.484 2h.08zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function PinterestIcon() {
	return (
		<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
			<path
				clipRule="evenodd"
				d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.858-2.433-4.59 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.133-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function FacebookIcon() {
	return (
		<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
			<path
				clipRule="evenodd"
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function TikTokIcon() {
	return (
		<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
			<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
		</svg>
	);
}

function YouTubeIcon() {
	return (
		<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
			<path
				clipRule="evenodd"
				d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

export function SocialLinks({ className }: { className?: string }) {
	return (
		<div className={cn("flex space-x-4", className)}>
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noopener noreferrer"
				className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
				aria-label="Instagram"
			>
				<InstagramIcon />
			</a>
			<a
				href="https://pinterest.com"
				target="_blank"
				rel="noopener noreferrer"
				className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
				aria-label="Pinterest"
			>
				<PinterestIcon />
			</a>
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noopener noreferrer"
				className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
				aria-label="Facebook"
			>
				<FacebookIcon />
			</a>
			<a
				href="https://tiktok.com"
				target="_blank"
				rel="noopener noreferrer"
				className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
				aria-label="TikTok"
			>
				<TikTokIcon />
			</a>
			<a
				href="https://youtube.com"
				target="_blank"
				rel="noopener noreferrer"
				className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
				aria-label="YouTube"
			>
				<YouTubeIcon />
			</a>
		</div>
	);
}
