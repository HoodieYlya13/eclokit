import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex h-dvh w-full items-center justify-center pt-36 md:pt-48">
			<Loader2 className="size-16 animate-spin text-primary" />
		</div>
	);
}
