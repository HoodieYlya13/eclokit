export function Philosophy() {
	return (
		<section className="pb-10 pt-20 px-6 md:px-12 w-full bg-card relative overflow-hidden">
			{/* Decorative blur */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

			<div className="max-w-6xl mx-auto relative z-10">
				{/* Section header */}
				<div className="text-center mb-16">
					<h2 className="font-display text-5xl md:text-7xl mb-6 text-foreground">
						The <span className="italic text-primary">EcloKit</span> Philosophy
					</h2>
					<div className="w-24 h-px bg-primary mx-auto" />
				</div>

				{/* Two-column text */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-lg leading-relaxed font-light text-muted-foreground">
					<div>
						<p className="mb-6 first-letter:text-5xl first-letter:font-display first-letter:mr-2 first-letter:mt-2.5 first-letter:float-left first-letter:text-primary first-letter:leading-none">
							<span className="font-bold">
								Eclokit, ce sont des box DIY complètes et multimarques, pensées pour vous permettre de créer
								facilement, sans stress ni matériel à chercher.
							</span>{" "}
							Chaque box réunit une sélection de produits issus de différentes marques créatives, pour vous
							offrir une expérience variée, qualitative et unique dans l’univers des loisirs créatifs.
						</p>
						<p>
							Chaque kit vous accompagne pas à pas pour transformer un moment simple en une véritable
							parenthèse créative.{" "}
							<span className="font-bold">
								Imaginées par une équipe 100 % féminine, nos box allient créativité, accessibilité et
								engagement.
							</span>
						</p>
					</div>

					<div className="flex flex-col justify-between">
						<p className="mb-6">
							En choisissant Eclokit, vous créez à votre rythme tout en soutenant une initiative qui{" "}
							<span className="font-bold">reverse 5 % de ses bénéfices</span> à une association engagée dans
							la lutte contre les discriminations faites aux femmes.
						</p>
						<div>
							<blockquote className="font-display text-2xl italic text-foreground mb-4">
								&ldquo;Créer de ses mains n&apos;est pas seulement une activité, c&apos;est un rituel de
								reconnexion à soi.&rdquo;
							</blockquote>
							<cite className="text-sm font-medium uppercase tracking-widest not-italic text-primary">
								&mdash; L&apos;équipe EcloKit
							</cite>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
