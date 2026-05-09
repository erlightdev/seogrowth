import { Link } from "@tanstack/react-router";

export function PageHero({
	kicker,
	title,
	description,
	primaryCta = "Get Free SEO Audit",
}: {
	kicker: string;
	title: string;
	description: string;
	primaryCta?: string;
}) {
	return (
		<section className="grid min-h-[68vh] grid-cols-1 border-rule border-b pt-[60px] lg:grid-cols-[1.35fr_0.65fr]">
			<div className="seo-reveal flex flex-col justify-end border-rule border-b px-6 py-16 lg:border-r lg:border-b-0 lg:px-12 lg:py-20">
				<div className="mb-8 flex items-center gap-2.5 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
					<span className="inline-block h-px w-6 bg-muted-text" />
					{kicker}
				</div>
				<h1 className="max-w-[13ch] font-serif text-[clamp(48px,7vw,92px)] leading-[0.95] tracking-[-0.02em]">
					{title}
				</h1>
				<p className="mt-8 max-w-[56ch] text-[16px] text-muted-text leading-[1.75]">
					{description}
				</p>
				<div className="mt-10 flex flex-wrap gap-4">
					<Link
						to="/free-seo-audit"
						className="bg-acid px-8 py-3.5 font-bold font-sans text-[13px] text-ink uppercase tracking-[0.06em] no-underline transition-all hover:-translate-y-px hover:bg-acid-hover"
					>
						{primaryCta}
					</Link>
					<Link
						to="/services"
						className="border border-rule px-7 py-[13px] font-normal font-sans text-[13px] text-ink uppercase tracking-[0.04em] no-underline transition-colors hover:border-ink"
					>
						View services
					</Link>
				</div>
			</div>
			<div className="seo-reveal bg-ink p-6 text-paper lg:p-12">
				<div className="flex h-full min-h-[320px] flex-col justify-end">
					<div className="font-mono text-[10px] text-paper/35 uppercase tracking-[0.12em]">
						Search growth system
					</div>
					<div className="mt-8 grid gap-px bg-paper/10">
						{["Audit", "Fix", "Build", "Measure"].map((item, index) => (
							<div
								key={item}
								className="flex items-center justify-between bg-ink py-4"
							>
								<span className="font-mono text-[11px] text-paper/45">
									0{index + 1}
								</span>
								<span className="font-bold text-[18px]">{item}</span>
								<span className="h-2 w-2 rounded-full bg-acid" />
							</div>
						))}
					</div>
					<p className="mt-8 max-w-[34ch] text-[14px] text-paper/50 leading-[1.7]">
						Every page connects back to the same promise: identify the real SEO
						blocker, fix it, and compound organic growth over time.
					</p>
				</div>
			</div>
		</section>
	);
}
