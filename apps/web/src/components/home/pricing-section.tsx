const PLANS = [
	{
		tier: "Starter",
		name: "Foundation",
		price: "1,800",
		dark: false,
		features: [
			{ text: "Technical SEO audit", muted: false },
			{ text: "8 content pieces/month", muted: false },
			{ text: "5 link acquisitions/month", muted: false },
			{ text: "Monthly reporting", muted: true },
			{ text: "1 strategy call/month", muted: true },
		],
		cta: "Get Started →",
		ctaStyle:
			"border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
	},
	{
		tier: "Most Popular",
		name: "Growth",
		price: "4,200",
		dark: true,
		features: [
			{ text: "Full technical overhaul", muted: false },
			{ text: "20 content pieces/month", muted: false },
			{ text: "15 link acquisitions/month", muted: false },
			{ text: "Live dashboard access", muted: false },
			{ text: "Bi-weekly strategy calls", muted: false },
		],
		cta: "Start Growing →",
		ctaStyle: "border border-acid bg-acid text-ink hover:bg-acid-hover",
	},
	{
		tier: "Enterprise",
		name: "Authority",
		price: "9,500",
		dark: false,
		features: [
			{ text: "Dedicated SEO director", muted: false },
			{ text: "Unlimited content", muted: false },
			{ text: "30+ links/month", muted: false },
			{ text: "Digital PR campaigns", muted: false },
			{ text: "Weekly calls + Slack access", muted: false },
		],
		cta: "Contact Us →",
		ctaStyle:
			"border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
	},
];

export function PricingSection() {
	return (
		<section id="pricing" className="border-rule border-b bg-paper">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				{/* Header */}
				<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
					<div>
						<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="inline-block h-px w-4 bg-muted-text" />
							Investment
						</div>
						<h2 className="font-normal font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							Transparent
							<br />
							<em className="text-muted-text italic">pricing</em>
						</h2>
					</div>
					<p className="max-w-[42ch] self-end text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
						No lock-in contracts after 3 months. Cancel with 30 days' notice. We
						earn renewal by results, not legalese.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-px bg-rule lg:grid-cols-3">
					{PLANS.map(({ tier, name, price, dark, features, cta, ctaStyle }) => (
						<div
							key={name}
							className={`p-8 lg:px-10 lg:py-12 ${dark ? "bg-ink text-paper" : "bg-paper text-ink"}`}
						>
							<div
								className={`mb-4 font-mono text-[10px] uppercase tracking-[0.12em] ${dark ? "text-white/40" : "text-muted-text"}`}
							>
								{tier}
							</div>
							<div className="mb-2 font-extrabold font-sans text-[24px] tracking-[-0.02em]">
								{name}
							</div>
							<div className="my-6 font-normal font-serif text-[52px] leading-none tracking-[-0.03em]">
								<sup className="align-super font-normal font-sans text-[20px]">
									$
								</sup>
								{price}
								<span
									className={`font-mono font-normal text-[13px] ${dark ? "text-white/40" : "text-muted-text"}`}
								>
									/mo
								</span>
							</div>

							<ul className="my-6 lg:mb-10">
								{features.map(({ text, muted }) => (
									<li
										key={text}
										className={`border-b py-2 text-[14px] ${dark ? "border-white/[0.08]" : "border-rule"} flex items-center gap-2 font-medium before:shrink-0 before:font-mono before:text-[12px] before:text-acid before:content-['—'] ${muted && !dark ? "text-muted-text" : ""}`}
									>
										{text}
									</li>
								))}
							</ul>

							<button
								type="button"
								className={`w-full cursor-pointer p-3.5 font-bold font-sans text-[12px] uppercase tracking-[0.08em] transition-all ${ctaStyle}`}
							>
								{cta}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
