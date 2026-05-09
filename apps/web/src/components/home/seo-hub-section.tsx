import { Link } from "@tanstack/react-router";

import {
	countryPages,
	fiverrProblems,
	platformProblems,
	services,
} from "@/content/seo-site";

const countryEntries = Object.values(countryPages);
const serviceEntries = Object.values(services);

export function SeoHubSection() {
	return (
		<section className="border-rule border-b bg-paper">
			<div className="mx-auto max-w-7xl border-rule lg:border-x">
				<div className="seo-reveal grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
					<div>
						<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="h-px w-4 bg-muted-text" />
							SEO growth hub
						</div>
						<h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							Pages built for
							<br />
							<em className="text-muted-text">real search intent</em>
						</h2>
					</div>
					<p className="max-w-[48ch] text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
						The site now connects full-service SEO, platform SEO, country SEO,
						outsourcing intent, Fiverr problem recovery and AI search visibility
						into one crawlable structure.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-px bg-rule lg:grid-cols-3">
					<div className="seo-reveal bg-paper p-8 lg:p-10">
						<div className="mb-6 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
							Service pages
						</div>
						<div className="grid gap-3">
							{serviceEntries.map((service) => (
								<Link
									key={service.path}
									to={service.path}
									className="flex items-center justify-between border-rule border-b py-3 font-bold text-[14px] text-ink no-underline transition-colors hover:text-acid-dark"
								>
									{service.shortTitle}
									<span className="font-mono text-muted-text">→</span>
								</Link>
							))}
						</div>
					</div>
					<div className="seo-reveal bg-paper p-8 lg:p-10">
						<div className="mb-6 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
							Country pages
						</div>
						<div className="grid gap-3">
							{countryEntries.map((country) => (
								<Link
									key={country.path}
									to={country.path}
									className="flex items-center justify-between border-rule border-b py-3 font-bold text-[14px] text-ink no-underline transition-colors hover:text-acid-dark"
								>
									{country.title}
									<span className="font-mono text-muted-text">→</span>
								</Link>
							))}
						</div>
						<Link
							to="/seo-outsourcing"
							className="mt-8 inline-flex bg-ink px-5 py-3 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink"
						>
							SEO outsourcing company →
						</Link>
					</div>
					<div className="seo-reveal bg-ink p-8 text-paper lg:p-10">
						<div className="mb-6 font-mono text-[10px] text-paper/35 uppercase tracking-[0.12em]">
							Fiverr SEO problems
						</div>
						<ul className="grid gap-3">
							{fiverrProblems.slice(0, 5).map((problem) => (
								<li
									key={problem}
									className="flex gap-3 text-[13px] text-paper/60 leading-[1.55]"
								>
									<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
									{problem}
								</li>
							))}
						</ul>
						<Link
							to="/fiverr-seo-problems"
							className="mt-8 inline-flex bg-acid px-5 py-3 font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-hover"
						>
							Recover from bad SEO work →
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-3">
					{platformProblems.map((platform) => (
						<div key={platform.platform} className="seo-reveal bg-paper p-8">
							<div className="mb-4 font-bold text-[18px]">
								{platform.platform}
							</div>
							<p className="text-[14px] text-muted-text leading-[1.65]">
								{platform.problems.slice(0, 3).join(", ")}.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
