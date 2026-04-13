import Image from "next/image";
import { SectionHeader } from "./section-header";

type Member = {
	name: string;
	role: string;
	bio: string;
};

const memberImages = ["/img/team/minus.png", "/img/team/metalina.png", "/img/team/clarx4.png"];

export function TeamSection({ title, members }: { title: string; members: Member[] }) {
	return (
		<section className="py-24 px-6 md:px-12 w-full max-w-screen-2xl mx-auto border-t border-border">
			<SectionHeader title={title} badge="L'Équipe" centered />

			<div className="grid gap-16 md:grid-cols-3">
				{members.map((member, index) => (
					<div key={member.name} className="flex flex-col group">
						<div className="relative aspect-square rounded-full mb-8 overflow-hidden transition-all duration-500">
							<Image
								src={memberImages[index] ?? memberImages[0]}
								alt={member.name}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="text-[1.2rem] font-medium tracking-tight h-12 flex items-center">
								{member.name}
							</h3>
							<span className="text-[0.65rem] font-serif uppercase tracking-[0.2em] text-primary mb-2">
								{member.role}
							</span>
							<p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-2">
								{member.bio}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
