const STEPS = [
	{
		num: "01",
		title: "Discovery & Audit",
		body: "Full technical crawl, competitor gap analysis, and keyword opportunity mapping. We baseline everything.",
	},
	{
		num: "02",
		title: "Strategy Build",
		body: "90-day roadmap with prioritised actions, content briefs, and link targets. Board-ready projections included.",
	},
	{
		num: "03",
		title: "On-site Execution",
		body: "Direct implementation or dev handoff. Technical fixes, content publishing, and conversion optimisation in parallel.",
	},
	{
		num: "04",
		title: "Authority Building",
		body: "Targeted outreach campaigns, PR placements, and digital citations. Backlinks that move domain authority.",
	},
	{
		num: "05",
		title: "Report & Iterate",
		body: "Monthly live dashboards, fortnightly calls, and quarterly strategy reviews. Transparency at every layer.",
	},
];

export function ProcessSection() {
	return (
		<section id="process" className="border-rule border-b bg-paper">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				{/* Header */}
				<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
					<div>
						<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="inline-block h-px w-4 bg-muted-text" />
							How we work
						</div>
						<h2 className="font-normal font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							The growth
							<br />
							<em className="text-muted-text italic">system</em>
						</h2>
					</div>
					<p className="max-w-[42ch] self-end text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
						Five phases, rigorous execution, zero guesswork. Every action maps
						to a KPI before we start.
					</p>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2 lg:grid-cols-5">
					{STEPS.map(({ num, title, body }) => (
						<div key={num} className="relative bg-paper p-8 xl:p-12">
							<div className="absolute top-12 left-8 h-1.5 w-1.5 rounded-full bg-acid xl:left-12" />
							<div className="mb-4 font-normal font-serif text-[64px] text-ink/[0.06] leading-none tracking-[-0.04em]">
								{num}
							</div>
							<div className="mb-3 font-bold text-[15px] tracking-[-0.01em]">
								{title}
							</div>
							<p className="text-[13px] text-muted-text leading-[1.65]">
								{body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
