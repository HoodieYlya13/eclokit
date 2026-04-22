"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { YnsLink } from "@/components/yns-link";
import type { BlogPost } from "@/lib/blog-data";
import { YNSMedia } from "@/lib/yns-media";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
	const [isLiked, setIsLiked] = useState(false);

	const handleLike = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsLiked(!isLiked);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
		>
			<YnsLink
				href={`/blog/${post.slug}`}
				className="group block rounded-[30px] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
			>
				<div className="flex flex-col md:flex-row min-h-[400px]">
					{/* Left Section (Content - 60%) */}
					<div className="flex-1 p-8 md:p-10 flex flex-col justify-between md:w-[60%]">
						<div>
							{/* Author Header */}
							<div className="flex items-center gap-3 mb-6">
								<div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
									{post.author.initial}
								</div>
								<div className="flex flex-col">
									<span className="text-sm font-semibold text-foreground">{post.author.name}</span>
									<div className="flex items-center gap-3 text-xs text-muted-foreground">
										<span className="flex items-center gap-1">
											<Calendar size={12} />
											{post.date}
										</span>
										<span className="flex items-center gap-1">
											<Clock size={12} />
											{post.readingTime}
										</span>
									</div>
								</div>
							</div>

							{/* Article Title */}
							<h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
								{post.title}
							</h3>

							{/* Excerpt */}
							<p className="text-muted-foreground line-clamp-3 leading-relaxed mb-6">{post.excerpt}</p>
						</div>

						{/* Footer Stats */}
						<div className="flex justify-between items-center pt-6 border-t border-border/10">
							<div className="flex gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
								<span className="flex items-center gap-1.5">
									<Eye size={14} className="text-primary/60" />
									{post.views} vues
								</span>
								<span className="flex items-center gap-1.5">
									<MessageCircle size={14} className="text-primary/60" />
									{post.commentsCount} commentaire
								</span>
							</div>

							<button
								type="button"
								onClick={handleLike}
								className={`p-2.5 rounded-full transition-all duration-300 ${isLiked ? "bg-red-50 text-red-500 scale-110" : "bg-secondary/30 text-muted-foreground hover:bg-red-50 hover:text-red-500"}`}
							>
								<Heart size={20} fill={isLiked ? "currentColor" : "none"} />
							</button>
						</div>
					</div>

					{/* Right Section (Visual - 40%) */}
					<div className="relative h-64 md:h-auto md:w-[40%] overflow-hidden">
						<YNSMedia
							src={post.imageUrl}
							alt={post.title}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-700"
						/>
						{/* Overlay for depth */}
						<div className="absolute inset-0 bg-linear-to-l from-black/5 to-transparent pointer-events-none" />
					</div>
				</div>
			</YnsLink>
		</motion.div>
	);
}
