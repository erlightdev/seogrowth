const ITEMS = [
	"Technical SEO",
	"Core Web Vitals",
	"Link Building",
	"Content Strategy",
	"Keyword Research",
	"Competitor Analysis",
	"On-Page Optimisation",
	"Local SEO",
	"E-commerce SEO",
	"Digital PR",
	"Schema Markup",
	"Site Architecture",
];

export function TickerTape() {
	const tickerItems = ["first", "second"].flatMap((set) =>
		ITEMS.map((item) => ({ id: `${set}-${item}`, label: item })),
	);

	return (
		<div
			className="overflow-hidden bg-ink py-2.5 text-acid"
			style={{ contain: "layout" }}
		>
			<div
				className="flex animate-ticker whitespace-nowrap"
				style={{ width: "max-content" }}
			>
				{tickerItems.map(({ id, label }) => (
					<span
						key={id}
						className="inline-flex shrink-0 items-center gap-2.5 px-12 font-mono text-[11px] uppercase tracking-[0.08em]"
					>
						<span className="text-[18px] text-acid/30">+</span>
						{label}
					</span>
				))}
			</div>
		</div>
	);
}
