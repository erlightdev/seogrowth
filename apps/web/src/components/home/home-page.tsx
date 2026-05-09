import { Link } from "@tanstack/react-router";

import {
	countryPages,
	fiverrProblems,
	fullServiceList,
	pricingPlans,
	services,
} from "@/content/seo-site";

const featuredServices = [
	services["technical-seo"],
	services["shopify-seo"],
	services["wordpress-seo"],
	services["ai-seo"],
	services["link-building"],
	services["ecommerce-seo"],
];

const markets = Object.values(countryPages);

const growthMetrics = [
	["Organic sessions", "128,440", "+24.3%"],
	["Tracked keywords", "2,841", "+312"],
	["Qualified leads", "417", "+47.2%"],
	["Revenue lift", "$2.14M", "attributed"],
];

const heroBars = [18, 22, 19, 31, 36, 42, 48, 56, 64, 72, 78, 88].map(
	(height, position) => ({
		id: `hero-bar-${position}-${height}`,
		height,
	}),
);

const proofBars = [22, 24, 29, 35, 42, 48, 54, 61, 69, 75, 83, 91].map(
	(height, position) => ({
		id: `proof-bar-${position}-${height}`,
		height,
	}),
);

const tickerItems = ["first", "second"].flatMap((set) =>
	fullServiceList.slice(0, 12).map((item) => ({
		id: `${set}-${item}`,
		label: item,
	})),
);

const process = [
	[
		"Audit",
		"Crawl, indexation, content, links, platform problems and AI visibility are checked before tactics start.",
	],
	[
		"Prioritize",
		"Work is ranked by revenue impact, implementation effort and risk, not by a generic SEO checklist.",
	],
	[
		"Execute",
		"Technical fixes, content briefs, authority building and platform cleanup move in parallel.",
	],
	[
		"Report",
		"Dashboards connect rankings, traffic, leads and organic revenue so the next sprint is obvious.",
	],
];

export function HomePage() {
	return (
		<main className="bg-paper text-ink">
			<Hero />
			<SignalBar />
			<ServiceMatrix />
			<MarketSection />
			<ProblemSection />
			<ProcessSection />
			<ProofSection />
			<PricingSection />
			<FinalCta />
		</main>
	);
}

function Hero() {
	return (
		<section className="relative overflow-hidden border-rule border-b pt-[60px]">
			<div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(10,10,8,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,8,.35)_1px,transparent_1px)] [background-size:48px_48px]" />
			<div className="relative mx-auto grid min-h-[calc(100dvh-60px)] max-w-7xl grid-cols-1 border-rule lg:grid-cols-[1.08fr_0.92fr] lg:border-x">
				<div className="flex flex-col justify-between px-5 pt-14 pb-10 md:px-8 lg:px-12 lg:pt-20 lg:pb-12">
					<div className="max-w-[760px]">
						<div className="mb-8 flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-2 border border-rule bg-paper/80 px-3 py-1.5 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
								<span className="h-1.5 w-1.5 rounded-full bg-acid" />
								SEO agency for AU, USA, Canada and UK
							</span>
							<Link
								to="/fiverr-seo-problems"
								className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em] no-underline transition-colors hover:text-ink"
							>
								Bad SEO recovery →
							</Link>
						</div>
						<h1 className="max-w-[11ch] text-balance font-serif text-[clamp(54px,8.4vw,118px)] leading-[0.86] tracking-[-0.035em]">
							Organic growth without the guesswork.
						</h1>
						<p className="mt-8 max-w-[62ch] text-pretty text-[16px] text-muted-text leading-[1.8] md:text-[18px]">
							SEOGrowth fixes technical SEO, Shopify and WordPress problems,
							spammy backlink damage, content gaps and AI search visibility with
							one measurable organic growth system.
						</p>
						<div className="mt-10 flex flex-wrap items-center gap-3">
							<Link
								to="/free-seo-audit"
								className="inline-flex translate-y-0 bg-ink px-7 py-4 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.09em] no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-acid-dark hover:text-ink active:translate-y-0"
							>
								Get free SEO audit
							</Link>
							<Link
								to="/services"
								className="inline-flex border border-rule px-7 py-[15px] font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition duration-300 hover:border-ink hover:bg-paper active:translate-y-px"
							>
								View complete service list
							</Link>
						</div>
					</div>
					<div className="mt-14 grid gap-px bg-rule sm:grid-cols-4">
						{growthMetrics.map(([label, value, delta]) => (
							<div key={label} className="bg-paper py-5 pr-5">
								<div className="font-serif text-[34px] leading-none tracking-[-0.03em]">
									{value}
								</div>
								<div className="mt-2 font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
									{label} / {delta}
								</div>
							</div>
						))}
					</div>
				</div>

				<aside className="relative min-h-[560px] overflow-hidden border-rule border-t bg-ink text-paper lg:border-t-0 lg:border-l">
					<div className="absolute inset-x-6 top-8 flex items-center justify-between border-paper/10 border-b pb-4 lg:inset-x-10">
						<span className="font-mono text-[10px] text-paper/40 uppercase tracking-[0.12em]">
							live audit model
						</span>
						<span className="font-mono text-[10px] text-acid uppercase tracking-[0.12em]">
							+ indexed
						</span>
					</div>
					<div className="absolute inset-x-6 top-28 lg:inset-x-10">
						<div className="grid h-[240px] grid-cols-12 items-end gap-2">
							{heroBars.map((bar) => (
								<div
									key={bar.id}
									className="relative bg-paper/[0.08]"
									style={{ height: `${bar.height}%` }}
								>
									<div className="absolute inset-x-0 bottom-0 h-1/2 bg-acid/55" />
								</div>
							))}
						</div>
						<div className="mt-8 grid gap-px bg-paper/10">
							{[
								["Shopify duplicate collections", "High"],
								["WordPress taxonomy waste", "Medium"],
								["AI answer visibility", "Open"],
								["Fiverr backlink risk", "Review"],
							].map(([item, status]) => (
								<div
									key={item}
									className="grid grid-cols-[1fr_auto] gap-4 bg-ink py-4"
								>
									<span className="font-mono text-[11px] text-paper/55 uppercase tracking-[0.08em]">
										{item}
									</span>
									<span className="font-mono text-[11px] text-acid uppercase tracking-[0.08em]">
										{status}
									</span>
								</div>
							))}
						</div>
					</div>
					<div className="absolute right-6 bottom-8 left-6 border-paper/10 border-t pt-6 lg:right-10 lg:left-10">
						<p className="max-w-[34ch] text-[14px] text-paper/50 leading-[1.7]">
							The free audit is built to find the blocker first: platform,
							content, authority, local, ecommerce or AI search.
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
}

function SignalBar() {
	return (
		<div className="overflow-hidden border-rule border-b bg-ink py-3 text-acid">
			<div className="mx-auto flex max-w-7xl whitespace-nowrap border-paper/10 lg:border-x">
				<div className="animate-ticker">
					{tickerItems.map((item) => (
						<span
							key={item.id}
							className="inline-flex items-center gap-3 px-8 font-mono text-[11px] uppercase tracking-[0.08em]"
						>
							<span className="text-paper/20">+</span>
							{item.label}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

function ServiceMatrix() {
	return (
		<section id="services" className="border-rule border-b">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				<SectionHeader
					kicker="Complete SEO service list"
					title="A practical stack, not a menu of random tactics."
					description="The homepage now works as a ranking hub. Service pages handle specific intent; the audit ties every path to one conversion."
				/>
				<div className="grid gap-px bg-rule lg:grid-cols-[1.2fr_0.8fr]">
					<div className="grid gap-px bg-rule md:grid-cols-2">
						{featuredServices.map((service, index) => (
							<Link
								key={service.path}
								to={service.path}
								className={`group bg-paper p-7 text-ink no-underline transition duration-300 hover:bg-[#f0efe8] md:p-9 ${
									index === 0 ? "md:col-span-2" : ""
								}`}
							>
								<div className="mb-10 flex items-center justify-between">
									<span className="font-mono text-[11px] text-muted-text">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="font-mono text-[11px] text-muted-text transition-transform group-hover:translate-x-1">
										→
									</span>
								</div>
								<h3 className="text-balance font-serif text-[34px] leading-[0.98] tracking-[-0.03em]">
									{service.shortTitle}
								</h3>
								<p className="mt-5 max-w-[52ch] text-[14px] text-muted-text leading-[1.7]">
									{service.description}
								</p>
							</Link>
						))}
					</div>
					<div className="bg-[#ebe9df] p-7 md:p-9 lg:p-10">
						<div className="sticky top-24">
							<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
								Platform problems
							</div>
							<h3 className="mt-5 max-w-[10ch] font-serif text-[46px] leading-[0.95] tracking-[-0.03em]">
								Shopify, WordPress, AI and bad links.
							</h3>
							<ul className="mt-8 grid gap-4">
								{[
									"Duplicate collections and product URLs",
									"Plugin bloat and taxonomy waste",
									"Cheap backlinks and fake DA promises",
									"Content that AI tools can’t confidently cite",
								].map((item) => (
									<li
										key={item}
										className="flex gap-3 text-[14px] leading-[1.6]"
									>
										<span className="mt-2 h-1.5 w-1.5 shrink-0 bg-acid" />
										{item}
									</li>
								))}
							</ul>
							<Link
								to="/free-seo-audit"
								className="mt-9 inline-flex bg-ink px-6 py-3.5 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition duration-300 hover:bg-acid-dark hover:text-ink active:translate-y-px"
							>
								Audit my site
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function MarketSection() {
	return (
		<section className="border-rule border-b">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				<SectionHeader
					kicker="Country SEO pages"
					title="Built for markets where buyers actually search."
					description="Each country page is a real entry point with localized keyword positioning, not copied location text."
				/>
				<div className="grid gap-px bg-rule md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1fr_0.9fr]">
					{markets.map((market, index) => (
						<Link
							key={market.path}
							to={market.path}
							className={`group min-h-[260px] bg-paper p-7 text-ink no-underline transition duration-300 hover:bg-[#f3f3e6] md:p-9 ${
								index === 0 ? "lg:row-span-2 lg:min-h-[520px]" : ""
							}`}
						>
							<div className="flex h-full flex-col justify-between">
								<div>
									<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
										{market.kicker}
									</div>
									<h3 className="mt-5 max-w-[9ch] font-serif text-[42px] leading-[0.95] tracking-[-0.03em]">
										{market.title}
									</h3>
								</div>
								<p className="mt-8 text-[14px] text-muted-text leading-[1.65]">
									{market.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

function ProblemSection() {
	return (
		<section className="border-rule border-b bg-[#eceae1]">
			<div className="mx-auto grid max-w-7xl gap-px bg-rule lg:grid-cols-[0.9fr_1.1fr] lg:border-rule lg:border-x">
				<div className="bg-[#eceae1] p-7 md:p-10 lg:p-12">
					<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
						Fiverr SEO recovery
					</div>
					<h2 className="mt-5 max-w-[11ch] font-serif text-[clamp(42px,5vw,72px)] leading-[0.92] tracking-[-0.035em]">
						Bad SEO has a pattern.
					</h2>
					<p className="mt-7 max-w-[58ch] text-[15px] text-muted-text leading-[1.75]">
						Cheap SEO usually fails in the same places: links, reporting,
						content quality and technical diagnosis. This page turns that into a
						clear recovery path.
					</p>
					<Link
						to="/fiverr-seo-problems"
						className="mt-9 inline-flex border border-ink px-6 py-3.5 font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition duration-300 hover:bg-ink hover:text-paper active:translate-y-px"
					>
						Review Fiverr SEO problems
					</Link>
				</div>
				<div className="grid gap-px bg-rule sm:grid-cols-2">
					{fiverrProblems.slice(0, 8).map((problem, index) => (
						<div key={problem} className="bg-paper p-6 md:p-8">
							<div className="mb-8 font-mono text-[10px] text-muted-text">
								{String(index + 1).padStart(2, "0")}
							</div>
							<p className="text-[15px] leading-[1.55]">{problem}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ProcessSection() {
	return (
		<section id="process" className="border-rule border-b">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				<SectionHeader
					kicker="How the work moves"
					title="Four steps, one accountable growth system."
					description="No black-box retainers. Each month starts with the highest-impact issue and ends with a measurable next action."
				/>
				<div className="grid gap-px bg-rule lg:grid-cols-4">
					{process.map(([title, body], index) => (
						<div
							key={title}
							className="min-h-[280px] bg-paper p-7 md:p-9 lg:p-10"
						>
							<div className="mb-16 flex items-center justify-between">
								<span className="font-serif text-[72px] text-ink/[0.07] leading-none tracking-[-0.06em]">
									0{index + 1}
								</span>
								<span className="h-2 w-2 bg-acid" />
							</div>
							<h3 className="font-bold text-[18px] tracking-[-0.01em]">
								{title}
							</h3>
							<p className="mt-4 text-[14px] text-muted-text leading-[1.7]">
								{body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ProofSection() {
	return (
		<section id="results" className="border-rule border-b">
			<div className="mx-auto grid max-w-7xl gap-px bg-rule lg:grid-cols-[1fr_1fr] lg:border-rule lg:border-x">
				<div className="bg-ink p-7 text-paper md:p-10 lg:p-12">
					<div className="font-mono text-[10px] text-paper/35 uppercase tracking-[0.12em]">
						Case study signal
					</div>
					<h2 className="mt-5 max-w-[10ch] font-serif text-[clamp(44px,5vw,76px)] leading-[0.9] tracking-[-0.035em]">
						Numbers worth keeping.
					</h2>
					<div className="mt-14 grid gap-px bg-paper/10">
						{[
							["NorthPeak SaaS", "+418% organic traffic"],
							["Archouse Commerce", "+274% organic revenue"],
							["Vantage Legal", "-42% cost per lead"],
						].map(([name, metric]) => (
							<div
								key={name}
								className="grid grid-cols-[1fr_auto] gap-5 bg-ink py-5"
							>
								<span className="font-bold text-[16px]">{name}</span>
								<span className="font-mono text-[11px] text-acid uppercase tracking-[0.08em]">
									{metric}
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="bg-paper p-7 md:p-10 lg:p-12">
					<div className="relative h-[360px] overflow-hidden border border-rule bg-[#f1f0ea]">
						<div className="absolute inset-8 grid grid-cols-12 items-end gap-2">
							{proofBars.map((bar) => (
								<div
									key={bar.id}
									className="relative bg-ink/[0.08]"
									style={{ height: `${bar.height}%` }}
								>
									<div className="absolute inset-x-0 bottom-0 h-[38%] bg-acid" />
								</div>
							))}
						</div>
						<div className="absolute right-6 bottom-6 left-6 flex items-center justify-between border-rule border-t pt-4">
							<span className="font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
								Organic sessions
							</span>
							<span className="font-mono text-[11px] text-acid-dark uppercase tracking-[0.1em]">
								+24.3% this month
							</span>
						</div>
					</div>
					<p className="mt-6 max-w-[52ch] text-[14px] text-muted-text leading-[1.7]">
						The reporting view is intentionally plain: search visibility,
						content output, platform fixes and revenue impact in one place.
					</p>
				</div>
			</div>
		</section>
	);
}

function PricingSection() {
	return (
		<section id="pricing" className="border-rule border-b">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				<SectionHeader
					kicker="Starting prices"
					title="Transparent enough to qualify. Flexible enough to scope properly."
					description="International, ecommerce and cleanup campaigns may need custom scope after the audit."
				/>
				<div className="grid gap-px bg-rule lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
					{pricingPlans.map((plan) => (
						<div
							key={plan.tier}
							className={`flex min-h-[500px] flex-col p-7 md:p-9 lg:p-10 ${
								plan.featured ? "bg-ink text-paper" : "bg-paper text-ink"
							}`}
						>
							<div
								className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
									plan.featured ? "text-paper/40" : "text-muted-text"
								}`}
							>
								{plan.tier}
							</div>
							<div className="mt-8 font-serif text-[58px] leading-none tracking-[-0.04em]">
								{plan.price}
							</div>
							<p
								className={`mt-5 min-h-[54px] text-[14px] leading-[1.65] ${
									plan.featured ? "text-paper/55" : "text-muted-text"
								}`}
							>
								{plan.description}
							</p>
							<ul className="mt-10 grid gap-3">
								{plan.features.map((feature) => (
									<li
										key={feature}
										className="flex gap-3 text-[14px] leading-[1.5]"
									>
										<span className="mt-2 h-1.5 w-1.5 shrink-0 bg-acid" />
										{feature}
									</li>
								))}
							</ul>
							<Link
								to="/free-seo-audit"
								className={`mt-auto inline-flex justify-center px-6 py-3.5 font-bold font-sans text-[12px] uppercase tracking-[0.08em] no-underline transition duration-300 active:translate-y-px ${
									plan.featured
										? "bg-acid text-ink hover:bg-acid-hover"
										: "border border-ink text-ink hover:bg-ink hover:text-paper"
								}`}
							>
								Start with audit
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function FinalCta() {
	return (
		<section className="border-rule border-b bg-ink text-paper">
			<div className="mx-auto grid max-w-7xl gap-px bg-paper/10 lg:grid-cols-[1.15fr_0.85fr] lg:border-paper/10 lg:border-x">
				<div className="bg-ink p-7 md:p-10 lg:p-12">
					<div className="font-mono text-[10px] text-paper/35 uppercase tracking-[0.12em]">
						Free SEO audit
					</div>
					<h2 className="mt-5 max-w-[11ch] font-serif text-[clamp(48px,6vw,88px)] leading-[0.88] tracking-[-0.035em]">
						Find the blocker first.
					</h2>
				</div>
				<div className="flex flex-col justify-end bg-ink p-7 md:p-10 lg:p-12">
					<p className="max-w-[48ch] text-[15px] text-paper/55 leading-[1.75]">
						Send your site for a free review covering technical SEO, content,
						Shopify, WordPress, backlinks, Fiverr SEO issues, local search and
						AI visibility.
					</p>
					<Link
						to="/free-seo-audit"
						className="mt-9 inline-flex w-fit bg-acid px-8 py-4 font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition duration-300 hover:bg-acid-hover active:translate-y-px"
					>
						Request free audit
					</Link>
				</div>
			</div>
		</section>
	);
}

function SectionHeader({
	kicker,
	title,
	description,
}: {
	kicker: string;
	title: string;
	description: string;
}) {
	return (
		<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-5 py-14 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-16">
			<div>
				<div className="mb-5 flex items-center gap-2 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
					<span className="h-px w-5 bg-muted-text" />
					{kicker}
				</div>
				<h2 className="max-w-[15ch] text-balance font-serif text-[clamp(40px,5vw,72px)] leading-[0.92] tracking-[-0.035em]">
					{title}
				</h2>
			</div>
			<p className="max-w-[58ch] text-pretty text-[15px] text-muted-text leading-[1.75] lg:justify-self-end">
				{description}
			</p>
		</div>
	);
}
