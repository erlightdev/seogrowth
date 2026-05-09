import { createFileRoute, Link } from "@tanstack/react-router";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies } from "@/content/seo-site";
import { breadcrumbJsonLd, routeHead } from "@/lib/seo";

const trustSignals = [
	[
		"Measurement",
		"Traffic, lead and revenue claims are tied to source reports, not isolated ranking screenshots.",
	],
	[
		"Attribution",
		"Each case separates organic search movement from paid campaigns, direct traffic and one-off launch spikes.",
	],
	[
		"Transferability",
		"Every result is paired with the specific SEO work that created it, so prospects can map it to their site.",
	],
];

const rankBars = [26, 34, 29, 48, 56, 63, 74, 82, 91].map(
	(height, position) => ({
		id: `case-page-rank-${position}-${height}`,
		height,
	}),
);

export const Route = createFileRoute("/case-studies")({
	component: CaseStudiesPage,
	head: () =>
		routeHead({
			title: "SEO Case Studies | SEOGrowth",
			description:
				"SEO case studies with clear problems, actions, metrics and trust notes across SaaS, Shopify ecommerce and local services.",
			path: "/case-studies",
		}),
});

function CaseStudiesPage() {
	return (
		<AnimatedPage>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Case Studies", path: "/case-studies" },
				])}
			/>
			<main className="min-w-0 overflow-x-hidden bg-paper pt-[60px] text-ink">
				<Hero />
				<CaseSwiper />
				<TrustSection />
				<CompactComparison />
				<AuditCta
					title="Bring us the site. We’ll show the real growth path."
					description="The free audit connects your current SEO blockers to the kind of work shown in these case studies: technical cleanup, content strategy, platform fixes, safer links and better reporting."
				/>
			</main>
		</AnimatedPage>
	);
}

function Hero() {
	return (
		<section className="border-rule border-b">
			<div className="site-container grid min-h-[62dvh] gap-px bg-rule lg:grid-cols-[1.08fr_0.92fr] lg:border-rule lg:border-x">
				<div className="bg-paper p-6 md:p-10 lg:p-12">
					<div className="mb-8 flex items-center gap-2 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
						<span className="h-px w-6 bg-muted-text" />
						SEO case studies
					</div>
					<h1 className="max-w-[11ch] text-balance font-serif text-[clamp(56px,8vw,112px)] leading-[0.86] tracking-[-0.04em]">
						Proof with the work attached.
					</h1>
					<p className="mt-8 max-w-[64ch] text-[17px] text-muted-text leading-[1.8]">
						Prospects do not need vague wins. They need to see the problem, the
						fixes, the numbers and why the result can be trusted. This page
						keeps that path clear and compact.
					</p>
					<div className="mt-10 flex flex-wrap gap-3">
						<Link
							to="/free-seo-audit"
							className="bg-ink px-7 py-4 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink"
						>
							Get free SEO audit
						</Link>
						<a
							href="#case-study-details"
							className="border border-rule px-7 py-[15px] font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition-colors hover:border-ink"
						>
							View case details
						</a>
					</div>
				</div>
				<div className="relative overflow-hidden bg-ink p-6 text-paper md:p-10 lg:p-12">
					<div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(245,243,238,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(245,243,238,.4)_1px,transparent_1px)] [background-size:34px_34px]" />
					<div className="relative flex h-full min-h-[420px] flex-col justify-end">
						<div className="grid h-[250px] grid-cols-9 items-end gap-2">
							{rankBars.map((bar) => (
								<div
									key={bar.id}
									className="relative bg-paper/10"
									style={{ height: `${bar.height}%` }}
								>
									<div className="absolute inset-x-0 bottom-0 h-[42%] animate-pulse bg-acid/70" />
								</div>
							))}
						</div>
						<div className="mt-9 grid gap-px bg-paper/10">
							{caseStudies.map((study) => (
								<div
									key={study.name}
									className="grid grid-cols-[1fr_auto] bg-ink py-4"
								>
									<span className="font-mono text-[11px] text-paper/50 uppercase tracking-[0.08em]">
										{study.name}
									</span>
									<span className="font-mono text-[11px] text-acid uppercase tracking-[0.08em]">
										{study.heroMetric}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function CaseSwiper() {
	return (
		<section id="case-study-details" className="border-rule border-b">
			<div className="site-container min-w-0 border-rule lg:border-x">
				<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-14 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
					<div>
						<div className="mb-5 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
							Compact proof system
						</div>
						<h2 className="max-w-[12ch] font-serif text-[clamp(42px,5vw,76px)] leading-[0.9] tracking-[-0.04em]">
							Swipe through the cases.
						</h2>
					</div>
					<p className="max-w-[62ch] text-[15px] text-muted-text leading-[1.75] lg:justify-self-end">
						Swiper keeps the page compact while each slide keeps the complete
						conversion argument: problem, work, numbers, trust note and the next
						service path.
					</p>
				</div>
				<Swiper
					modules={[Pagination, Keyboard, A11y]}
					spaceBetween={1}
					slidesPerView={1}
					keyboard={{ enabled: true }}
					pagination={{ clickable: true }}
					breakpoints={{
						900: { slidesPerView: 1.12 },
						1180: { slidesPerView: 1.22 },
					}}
					className="case-study-swiper min-w-0 bg-rule"
				>
					{caseStudies.map((study) => (
						<SwiperSlide key={study.name} className="h-auto">
							<article className="grid h-full min-h-[620px] gap-px bg-rule pb-10 lg:grid-cols-[0.82fr_1.18fr]">
								<div className="flex flex-col justify-between bg-ink p-7 text-paper md:p-10">
									<div>
										<div className="flex items-center justify-between">
											<span className="font-mono text-[10px] text-paper/40 uppercase tracking-[0.12em]">
												{study.market} / {study.category}
											</span>
											<span className="font-mono text-[10px] text-acid uppercase tracking-[0.12em]">
												{study.period}
											</span>
										</div>
										<h3 className="mt-8 max-w-[9ch] font-serif text-[clamp(46px,5vw,76px)] leading-[0.88] tracking-[-0.04em]">
											{study.name}
										</h3>
									</div>
									<div>
										<div className="grid gap-px bg-paper/10">
											{study.metrics.map(([value, label]) => (
												<div
													key={label}
													className="grid grid-cols-[auto_1fr] items-end gap-5 bg-ink py-5"
												>
													<span className="font-serif text-[44px] leading-none tracking-[-0.04em]">
														{value}
													</span>
													<span className="pb-1 font-mono text-[10px] text-paper/45 uppercase tracking-[0.08em]">
														{label}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="grid gap-px bg-rule">
									<div className="bg-paper p-7 md:p-10">
										<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
											Problem
										</div>
										<p className="mt-4 max-w-[74ch] text-[16px] leading-[1.7]">
											{study.problem}
										</p>
									</div>
									<div className="grid gap-px bg-rule md:grid-cols-2">
										<div className="bg-paper p-7 md:p-10">
											<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
												What changed
											</div>
											<ul className="mt-6 grid gap-4">
												{study.actions.map((action) => (
													<li
														key={action}
														className="flex gap-3 text-[14px] leading-[1.6]"
													>
														<span className="mt-2 h-1.5 w-1.5 shrink-0 bg-acid" />
														{action}
													</li>
												))}
											</ul>
										</div>
										<div className="bg-[#eceae1] p-7 md:p-10">
											<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
												Why it is trustworthy
											</div>
											<p className="mt-6 text-[14px] text-muted-text leading-[1.7]">
												{study.trust}
											</p>
											<div className="mt-8 flex flex-wrap gap-2">
												{study.work.map((item) => (
													<span
														key={item}
														className="border border-rule bg-paper px-3 py-1.5 font-mono text-[10px] text-muted-text uppercase tracking-[0.08em]"
													>
														{item}
													</span>
												))}
											</div>
											<Link
												to={study.path}
												className="mt-8 inline-flex bg-ink px-5 py-3.5 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink"
											>
												View related service →
											</Link>
										</div>
									</div>
								</div>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

function TrustSection() {
	return (
		<section className="border-rule border-b bg-[#eceae1]">
			<div className="site-container grid gap-px bg-rule lg:grid-cols-[0.8fr_1.2fr] lg:border-rule lg:border-x">
				<div className="bg-[#eceae1] p-7 md:p-10 lg:p-12">
					<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
						Trust layer
					</div>
					<h2 className="mt-5 max-w-[10ch] font-serif text-[clamp(42px,5vw,72px)] leading-[0.9] tracking-[-0.04em]">
						No black-box wins.
					</h2>
					<p className="mt-7 max-w-[50ch] text-[15px] text-muted-text leading-[1.75]">
						A good case study should reduce perceived risk. These signals make
						the page easier for prospects to believe before they book an audit.
					</p>
				</div>
				<div className="grid gap-px bg-rule md:grid-cols-3">
					{trustSignals.map(([title, body]) => (
						<div key={title} className="bg-paper p-7 md:p-9">
							<div className="mb-12 h-2 w-2 bg-acid" />
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

function CompactComparison() {
	return (
		<section className="border-rule border-b">
			<div className="site-container border-rule lg:border-x">
				<div className="grid gap-px bg-rule lg:grid-cols-3">
					{[
						[
							"Before",
							"Scattered pages, weak measurement, unclear priority and SEO work that looked busy but did not explain revenue impact.",
						],
						[
							"During",
							"Technical fixes, content mapping, platform cleanup and authority work moved in focused monthly sprints.",
						],
						[
							"After",
							"Cleaner crawling, stronger commercial pages, safer authority signals and reporting that connected SEO to pipeline.",
						],
					].map(([title, body]) => (
						<div key={title} className="bg-paper p-7 md:p-10">
							<div className="font-serif text-[52px] leading-none tracking-[-0.04em]">
								{title}
							</div>
							<p className="mt-6 text-[14px] text-muted-text leading-[1.7]">
								{body}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
