import Image from "next/image";

const partners = [
	{ name: "Cléopâtre", src: "/img/partners/cleopatre.png" },
	{ name: "Crayola", src: "/img/partners/crayola.png" },
	{ name: "DAS", src: "/img/partners/das.png" },
	{ name: "DMC", src: "/img/partners/dmc.png" },
	{ name: "Faber-Castell", src: "/img/partners/faber-castell.png" },
	{ name: "Fimo", src: "/img/partners/fimo.png" },
	{ name: "Phildar", src: "/img/partners/phildar.png" },
];

export function PartnersSlider() {
	const quantity = partners.length;

	return (
		<div className="banner w-full 2xl:w-1/2">
			<div className="slider3D" style={{ "--quantity": quantity } as React.CSSProperties}>
				{partners.map((partner, index) => (
					<div
						key={partner.name}
						className="slider3D_item"
						style={{ "--position": index + 1 } as React.CSSProperties}
					>
						<div className="relative w-full aspect-square">
							<Image
								className="slider3D_img object-contain"
								src={partner.src}
								alt={partner.name}
								fill
								sizes="(max-width: 768px) 100px, 200px"
								priority
							/>
						</div>
					</div>
				))}
			</div>

			<div className="content">
				{/* <h1 data-content="PARTENAIRES" className="font-display">
						PARTENAIRES
					</h1>
				<div className="author">
					<h2 className="font-display text-primary text-2xl">EcloKit</h2>
					<p className="text-xs tracking-[0.4em] uppercase opacity-70">
							L'excellence au service de vos mains
						</p>
				</div> */}
				<div className="model" />
			</div>
		</div>
	);
}
