import { Link } from "@tanstack/react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";

import {
	caseStudies,
	countryPages,
	fiverrProblems,
	fullServiceList,
	pricingPlans,
	services,
} from "@/content/seo-site";

gsap.registerPlugin(useGSAP);

const featuredServices = [
	services["technical-seo"],
	services["shopify-seo"],
	services["wordpress-seo"],
	services["ai-seo"],
	services["link-building"],
	services["ecommerce-seo"],
];

const markets = Object.values(countryPages);

const predictionBars = [
	{ week: "w1", score: 42 },
	{ week: "w2", score: 61 },
	{ week: "w3", score: 52 },
	{ week: "w4", score: 78 },
	{ week: "w5", score: 84 },
	{ week: "w6", score: 91 },
	{ week: "w7", score: 48 },
];

const focusCurve = [
	{ day: "Mon", focus: 44 },
	{ day: "Tue", focus: 48 },
	{ day: "Wed", focus: 41 },
	{ day: "Thu", focus: 68 },
	{ day: "Fri", focus: 76 },
	{ day: "Sat", focus: 58 },
];

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
		<main className="min-w-0 overflow-x-hidden bg-paper text-ink">
			<Hero />
			<SignalBar />
			<ServiceMatrix />
			<MarketSection />
			<ProblemSection />
			<ProcessSection />
			<CaseStudiesSection />
			<ProofSection />
			<PricingSection />
			<FinalCta />
		</main>
	);
}

function Hero() {
	const heroRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.from(".hero-copy > *", {
				y: 20,
				opacity: 0,
				duration: 0.8,
				stagger: 0.14,
				ease: "power3.out",
			});
			gsap.from(".hero-card", {
				y: 36,
				opacity: 0,
				duration: 0.8,
				stagger: 0.16,
				delay: 0.25,
				ease: "power2.out",
			});
		},
		{ scope: heroRef },
	);

	return (
		<section
			ref={heroRef}
			className="relative isolate overflow-hidden border-rule border-b bg-paper px-4 py-16 text-ink sm:px-6 lg:px-8"
		>
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(10,10,8,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,8,.35)_1px,transparent_1px)] [background-size:48px_48px]" />
			<div className="site-container">
				<div className="hero-copy mx-auto mb-14 max-w-3xl text-center">
					<p className="mb-5 font-mono text-[10px] text-muted-text uppercase tracking-[0.14em]">
						Predictive SEO audit system
					</p>
					<h1 className="mx-auto max-w-5xl text-balance font-serif font-normal text-[50px] leading-[0.92] tracking-[-0.035em] text-ink sm:text-[70px] lg:text-[96px]">
						See your next SEO result{" "}
						<span className="hero-gradient-text italic">
							before you reach it.
						</span>
					</h1>
					<p className="mx-auto mt-7 max-w-2xl text-pretty text-[16px] text-muted-text leading-[1.8] md:text-[18px]">
						SEOGrowth predicts the blockers most likely to slow rankings next:
						technical debt, content gaps, platform issues, backlink risk and AI
						visibility shifts.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Link
							to="/free-seo-audit"
							className="inline-flex bg-ink px-7 py-4 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-acid-dark hover:text-ink"
						>
							Get free SEO audit
						</Link>
						<Link
							to="/services"
							className="inline-flex border border-rule bg-paper px-7 py-[15px] font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition duration-300 hover:border-ink"
						>
							View services
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
					<div className="hero-card flex flex-col border border-rule bg-paper p-3 shadow-[0_24px_70px_-48px_rgba(10,10,8,0.45)] transition-transform duration-300 hover:-translate-y-1">
						<div className="mb-6 flex h-[280px] flex-col overflow-hidden border border-rule bg-[#ebe9df] p-6">
							<p className="text-sm font-medium text-muted-text">
								Predicted SEO score
							</p>
							<h3 className="mt-1 font-serif text-5xl font-normal text-ink">8.4</h3>
							<p className="mt-1 font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
								Based on current trends
							</p>
							<div className="mt-auto h-36">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={predictionBars}>
										<XAxis
											dataKey="week"
											axisLine={false}
											tickLine={false}
											tick={{ fill: "#5a5a52", fontSize: 10 }}
										/>
										<Tooltip cursor={{ fill: "rgba(132,204,22,0.08)" }} />
										<Bar
											dataKey="score"
											fill="#0a0a08"
											radius={0}
											animationDuration={900}
										/>
									</BarChart>
								</ResponsiveContainer>
							</div>
						</div>
						<div className="px-5 pb-5">
							<h4 className="mb-2 font-serif text-2xl text-ink italic">
								Performance output
							</h4>
							<p className="text-sm text-muted-text leading-relaxed">
								Forecasts how technical cleanup and content velocity affect
								organic growth.
							</p>
						</div>
					</div>

					<div className="hero-card flex flex-col border border-rule bg-paper p-3 shadow-[0_24px_70px_-48px_rgba(10,10,8,0.45)] transition-transform duration-300 hover:-translate-y-1">
						<div className="relative mb-6 h-[280px] overflow-hidden border border-rule bg-ink p-6 text-paper">
							<div className="relative z-10 grid grid-cols-2 gap-3">
								<div className="border border-paper/10 bg-paper/[0.06] p-4">
									<div className="mb-2 flex h-6 w-6 items-center justify-center bg-acid/15">
										<span className="h-2 w-2 rounded-full bg-acid" />
									</div>
									<h3 className="font-serif text-3xl font-normal text-paper">76%</h3>
									<p className="mt-1 text-[11px] text-paper/55">
										Ranking stability
									</p>
								</div>
								<div className="flex flex-col justify-end border border-paper/10 bg-paper/[0.06] p-4">
									<p className="mb-1 font-mono text-[10px] text-paper/40 uppercase tracking-[0.1em]">
										Next lift
									</p>
									<h3 className="font-serif text-3xl text-paper italic">
										24%
										<span className="ml-1 font-sans text-sm text-acid not-italic">
											↑
										</span>
									</h3>
								</div>
							</div>
							<div className="absolute right-6 bottom-6 left-6 h-32">
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart data={focusCurve}>
										<defs>
											<linearGradient id="focusFill" x1="0" x2="0" y1="0" y2="1">
												<stop offset="0%" stopColor="#84cc16" stopOpacity={0.24} />
												<stop offset="100%" stopColor="#84cc16" stopOpacity={0} />
											</linearGradient>
										</defs>
										<CartesianGrid stroke="rgba(245,243,238,0.1)" vertical={false} />
										<Tooltip cursor={{ stroke: "#84cc16", strokeWidth: 1 }} />
										<Area
											type="monotone"
											dataKey="focus"
											stroke="#84cc16"
											strokeWidth={3}
											fill="url(#focusFill)"
											animationDuration={900}
										/>
									</AreaChart>
								</ResponsiveContainer>
							</div>
						</div>
						<div className="px-5 pb-5">
							<h4 className="mb-2 font-serif text-2xl text-ink italic">
								Next ranking shift
							</h4>
							<p className="text-sm text-muted-text leading-relaxed">
								Interactive trend signals show where momentum is rising or
								about to soften.
							</p>
						</div>
					</div>

					<div className="hero-card flex flex-col border border-rule bg-paper p-3 shadow-[0_24px_70px_-48px_rgba(10,10,8,0.45)] transition-transform duration-300 hover:-translate-y-1">
						<div className="mb-6 flex min-h-[280px] flex-col border border-rule bg-[#ebe9df] p-6">
							<div className="mb-6 flex items-start justify-between">
								<div>
									<p className="text-sm font-medium text-muted-text">
										Audit readiness
									</p>
									<h3 className="mt-1 font-serif text-6xl font-normal text-ink">
										78<span className="text-2xl text-muted-text">%</span>
									</h3>
								</div>
								<span className="border border-rule bg-paper px-2 py-1 font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
									Active
								</span>
							</div>
							<p className="mb-8 font-serif text-muted-text italic">
								Search system consistency over the past week
							</p>
							<div className="space-y-4">
								{[
									["Technical health", "88%", "bg-acid-dark"],
									["Content coverage", "86%", "bg-acid"],
									["Authority risk", "65%", "bg-muted-text"],
								].map(([label, value, color]) => (
									<div key={label} className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className={`h-1.5 w-1.5 rounded-full ${color}`} />
											<span className="text-sm font-medium text-ink">
												{label}
											</span>
										</div>
										<span className="text-sm font-medium text-muted-text">
											{value}
										</span>
									</div>
								))}
							</div>
							<div className="mt-auto">
								<span className="inline-flex items-center gap-1.5 border border-rule bg-paper px-3 py-1.5 text-xs font-medium text-muted-text">
									<span className="text-acid-dark">✓</span>
									Balanced
								</span>
							</div>
						</div>
						<div className="px-5 pb-5">
							<h4 className="mb-2 font-serif text-2xl text-ink italic">
								Stability forecast
							</h4>
							<p className="text-sm text-muted-text leading-relaxed">
								Maps platform, content and link risk before the next sprint
								starts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function SignalBar() {
	return (
		<div className="overflow-hidden border-rule border-b bg-ink py-3 text-acid">
			<div className="site-container flex min-w-0 overflow-hidden whitespace-nowrap border-paper/10 lg:border-x">
				<div className="w-max shrink-0 animate-ticker">
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
			<div className="site-container border-rule lg:border-x">
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
			<div className="site-container border-rule lg:border-x">
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
			<div className="site-container grid gap-px bg-rule lg:grid-cols-[0.9fr_1.1fr] lg:border-rule lg:border-x">
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
			<div className="site-container border-rule lg:border-x">
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

function CaseStudiesSection() {
	return (
		<section id="case-studies" className="border-rule border-b bg-[#eceae1]">
			<div className="site-container border-rule lg:border-x">
				<SectionHeader
					kicker="Case studies"
					title="Proof across SaaS, Shopify and local services."
					description="These are structured as organic growth stories: the problem, the work, the commercial metric and the service path a visitor can follow next."
				/>
				<div className="grid gap-px bg-rule lg:grid-cols-[1.1fr_0.9fr]">
					<div className="grid gap-px bg-rule">
						{caseStudies.map((study, index) => (
							<Link
								key={study.name}
								to={study.path}
								className="group grid gap-8 bg-paper p-7 text-ink no-underline transition duration-300 hover:bg-[#f3f3e6] md:grid-cols-[0.72fr_1.28fr] md:p-9"
							>
								<div>
									<div className="mb-5 flex items-center justify-between">
										<span className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
											{String(index + 1).padStart(2, "0")} / {study.market}
										</span>
										<span className="font-mono text-[12px] text-muted-text transition-transform group-hover:translate-x-1">
											→
										</span>
									</div>
									<h3 className="max-w-[9ch] font-serif text-[42px] leading-[0.92] tracking-[-0.035em]">
										{study.name}
									</h3>
									<div className="mt-4 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
										{study.category}
									</div>
								</div>
								<div>
									<p className="max-w-[62ch] text-[15px] text-muted-text leading-[1.7]">
										{study.summary}
									</p>
									<div className="mt-8 grid gap-px bg-rule sm:grid-cols-3">
										{study.metrics.map(([value, label]) => (
											<div key={label} className="bg-paper py-4 pr-4">
												<div className="font-serif text-[34px] leading-none tracking-[-0.035em]">
													{value}
												</div>
												<div className="mt-2 font-mono text-[10px] text-muted-text uppercase tracking-[0.08em]">
													{label}
												</div>
											</div>
										))}
									</div>
									<div className="mt-7 flex flex-wrap gap-2">
										{study.work.map((item) => (
											<span
												key={item}
												className="border border-rule px-3 py-1.5 font-mono text-[10px] text-muted-text uppercase tracking-[0.08em]"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="relative overflow-hidden bg-ink p-7 text-paper md:p-10 lg:p-12">
						<div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,rgba(200,245,58,.6)_1px,transparent_1px)] [background-size:28px_28px]" />
						<div className="relative sticky top-24">
							<div className="font-mono text-[10px] text-paper/35 uppercase tracking-[0.12em]">
								Ranking motion
							</div>
							<h3 className="mt-5 max-w-[10ch] font-serif text-[54px] leading-[0.9] tracking-[-0.04em]">
								Small fixes. Compounding curves.
							</h3>
							<div className="mt-12 grid h-[260px] grid-cols-9 items-end gap-2">
								{[24, 31, 28, 44, 53, 61, 74, 82, 94].map((height) => (
									<div
										key={`case-rank-${height}`}
										className="relative bg-paper/10"
										style={{ height: `${height}%` }}
									>
										<div className="absolute inset-x-0 bottom-0 h-[44%] animate-pulse bg-acid/65" />
									</div>
								))}
							</div>
							<p className="mt-8 text-[14px] text-paper/50 leading-[1.7]">
								The case studies are deliberately linked to service pages so
								proof, problem and conversion stay connected for visitors and
								crawlers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function ProofSection() {
	return (
		<section id="results" className="border-rule border-b">
			<div className="site-container grid gap-px bg-rule lg:grid-cols-[1fr_1fr] lg:border-rule lg:border-x">
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
			<div className="site-container border-rule lg:border-x">
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
			<div className="site-container grid gap-px bg-paper/10 lg:grid-cols-[1.15fr_0.85fr] lg:border-paper/10 lg:border-x">
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
				<h2 className="max-w-3xl text-balance font-serif text-[clamp(40px,5vw,72px)] leading-[0.92] tracking-[-0.035em]">
					{title}
				</h2>
			</div>
			<p className="max-w-[58ch] text-pretty text-[15px] text-muted-text leading-[1.75] lg:justify-self-end">
				{description}
			</p>
		</div>
	);
}
