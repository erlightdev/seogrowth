const SERVICES = [
	{
		num: "01",
		icon: "◈",
		title: "Technical SEO",
		body: "Deep crawl analysis, Core Web Vitals, schema markup, site architecture overhaul. We fix what Google penalises before it costs you rankings.",
	},
	{
		num: "02",
		icon: "◉",
		title: "Content Strategy",
		body: "Topic clusters, keyword intelligence, editorial calendars. Content that ranks on page one and converts visitors into buyers.",
	},
	{
		num: "03",
		icon: "◎",
		title: "Link Acquisition",
		body: "White-hat outreach, digital PR, and data-driven link targeting. We build authority that compounds month over month.",
	},
	{
		num: "04",
		icon: "◆",
		title: "Local & E-comm SEO",
		body: "Google Business Profile, localised content, product page optimisation. Dominate maps and category pages where buyers decide.",
	},
];

export function ServicesSection() {
	return (
		<section id="services" className="border-rule border-b bg-paper">
			<div className="site-container border-rule lg:border-x">
				{/* Header */}
				<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
					<div>
						<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="inline-block h-px w-4 bg-muted-text" />
							What we do
						</div>
						<h2 className="font-normal font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							Full-spectrum
							<br />
							<em className="text-muted-text italic">SEO execution</em>
						</h2>
					</div>
					<p className="max-w-[42ch] self-end text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
						Every engagement is built around one goal: measurable revenue from
						organic search. We pair strategic clarity with technical depth.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2 lg:grid-cols-4">
					{SERVICES.map(({ num, icon, title, body }) => (
						<div
							key={num}
							className="group cursor-pointer bg-paper p-8 transition-colors hover:bg-[#f3f3e6] lg:p-10"
						>
							<div className="mb-6 font-mono text-[11px] text-muted-text tracking-[0.08em]">
								{num}
							</div>
							<div className="mb-6 text-[28px] leading-none">{icon}</div>
							<div className="mb-4 font-bold font-sans text-[18px] tracking-[-0.01em]">
								{title}
							</div>
							<p className="mb-6 text-[14px] text-muted-text leading-[1.65]">
								{body}
							</p>
							<div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-text uppercase tracking-[0.08em] transition-all duration-200 group-hover:gap-2.5 group-hover:text-ink">
								Learn more →
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
