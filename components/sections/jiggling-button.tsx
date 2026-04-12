"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type JigglingButtonProps = {
	children: React.ReactNode;
	delay?: number;
};

export function JigglingButton({ children, delay = 0 }: JigglingButtonProps) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() => {
				setCount((prev) => prev + 1);
			},
			5000 + Math.random() * 4000,
		); // Jiggle every 5-9 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			animate={
				count > 0
					? {
							rotate: [0, -2, 2, -1, 1, 0],
							scale: [1, 1.03, 1.03, 1],
						}
					: {}
			}
			transition={{
				duration: 0.6,
				delay: delay,
				ease: "easeInOut",
			}}
			key={count}
			className="w-full h-full"
		>
			{children}
		</motion.div>
	);
}
