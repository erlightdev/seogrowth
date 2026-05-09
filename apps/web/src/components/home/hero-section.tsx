const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
const HEIGHTS = [12, 15, 18, 20, 22, 28, 32, 38, 45, 52, 61, 72];

const METRICS = [
	{
		label: "ORGANIC SESSIONS",
		value: "128,440",
		delta: "▲ +24.3%",
		positive: true,
	},
	{
		label: "KEYWORD RANKINGS",
		value: "2,841",
		delta: "▲ +312",
		positive: true,
	},
	{ label: "DOMAIN RATING", value: "DR 74", delta: "▲ +18", positive: true },
	{ label: "BOUNCE RATE", value: "38.2%", delta: "▼ -11%", positive: false },
];

export function HeroSection() {
	return (
		<section className="border-rule border-b bg-paper">
			<div className="site-container grid min-h-[calc(100vh-var(--header-height))] grid-cols-1 border-rule lg:grid-cols-2 lg:border-x">
				{/* Left — copy */}
				<div className="flex flex-col justify-between border-rule border-b px-6 pt-20 pb-14 lg:border-r lg:border-b-0 lg:px-12 lg:pt-24 lg:pb-16">
					<div>
						<div className="mb-8 flex items-center gap-2.5 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="inline-block h-px w-6 bg-muted-text" />
							Performance SEO Agency
						</div>

						<h1 className="mb-10 font-normal font-serif text-[clamp(52px,6vw,88px)] leading-[0.95] tracking-[-0.02em]">
							Rank higher.
							<br />
							<em className="text-muted-text italic">Grow faster.</em>
							<br />
							Stay there.
						</h1>

						<p className="mb-12 max-w-[38ch] text-[16px] text-muted-text leading-[1.7]">
							Data-driven SEO strategies that compound over time. We build
							organic search systems that generate leads while you sleep — no
							fluff, no vanity metrics, only revenue.
						</p>

						<div className="flex flex-wrap items-center gap-4">
							<a
								href="/free-seo-audit"
								className="bg-acid px-8 py-3.5 font-bold font-sans text-[13px] text-ink uppercase tracking-[0.06em] no-underline transition-all hover:-translate-y-px hover:bg-acid-hover"
							>
								Get Free Audit
							</a>
							<a
								href="#results"
								className="border border-rule bg-transparent px-7 py-[13px] font-normal font-sans text-[13px] text-ink uppercase tracking-[0.04em] no-underline transition-colors hover:border-ink"
							>
								See Case Studies
							</a>
						</div>
					</div>

					{/* Stats row */}
					<div className="mt-16 grid grid-cols-1 gap-4 border-rule border-t pt-6 sm:grid-cols-3 sm:gap-0">
						<div className="border-rule pb-2 sm:border-r">
							<div className="mb-1 font-normal font-serif text-[40px] leading-none tracking-[-0.02em]">
								340%
							</div>
							<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
								Avg traffic lift
							</div>
						</div>
						<div className="border-rule pb-2 sm:border-r sm:pl-6">
							<div className="mb-1 font-normal font-serif text-[40px] leading-none tracking-[-0.02em]">
								2.4×
							</div>
							<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
								Revenue from organic
							</div>
						</div>
						<div className="pb-2 sm:pl-6">
							<div className="mb-1 font-normal font-serif text-[40px] leading-none tracking-[-0.02em]">
								180
							</div>
							<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
								Clients worldwide
							</div>
						</div>
					</div>
				</div>

				{/* Right — chart panel */}
				<div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden bg-ink p-6 lg:p-12">
					<div className="absolute top-16 right-6 left-6 lg:right-12 lg:left-12">
						<div className="mb-4 font-mono text-[10px] text-white/35 uppercase tracking-[0.08em]">
							Organic traffic growth — client composite
						</div>
						<div className="flex h-[200px] items-end gap-1.5">
							{HEIGHTS.map((height, index) => {
								const isActive = index === HEIGHTS.length - 1;

								return (
									<div
										key={`${MONTHS[index]}-${height}`}
										className={`group relative flex-1 cursor-pointer border-t-2 transition-colors ${
											isActive
												? "border-acid bg-acid/15"
												: "border-white/15 bg-white/[0.08] hover:bg-white/[0.12]"
										}`}
									>
										<div
											className={`absolute inset-x-0 bottom-0 bg-acid transition-[height] duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
												isActive ? "opacity-50" : "opacity-[0.18]"
											}`}
											style={{ height: `${height}%` }}
										/>
									</div>
								);
							})}
						</div>
						<div className="mt-2 flex gap-1.5">
							{MONTHS.map((month) => (
								<div
									key={month}
									className="flex-1 text-center font-mono text-[9px] text-white/25 tracking-[0.05em]"
								>
									{month}
								</div>
							))}
						</div>
					</div>

					<div className="relative z-10 mt-auto">
						{METRICS.map(({ label, value, delta, positive }) => (
							<div
								key={label}
								className="flex items-center justify-between gap-4 border-white/[0.08] border-t py-3"
							>
								<span className="font-mono text-[11px] text-white/50 uppercase tracking-[0.06em]">
									{label}
								</span>
								<span className="font-medium font-mono text-[13px] text-white">
									{value}
								</span>
								<span
									className={`font-mono text-[11px] tracking-[0.04em] ${positive ? "text-acid" : "text-[#ff6b55]"}`}
								>
									{delta}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
