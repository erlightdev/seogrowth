import { Link } from "@tanstack/react-router";

export function AuditCta({
	title = "Find the SEO problems holding growth back.",
	description = "Send your site for a free SEO audit covering technical issues, content gaps, platform problems, backlinks and AI search visibility.",
	cta = "Get Free SEO Audit",
}: {
	title?: string;
	description?: string;
	cta?: string;
}) {
	return (
		<section className="seo-reveal border-rule border-y bg-ink px-6 py-16 text-paper lg:px-12">
			<div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<div className="mb-4 font-mono text-[11px] text-paper/40 uppercase tracking-[0.12em]">
						Free SEO audit
					</div>
					<h2 className="max-w-[14ch] font-serif text-[clamp(38px,5vw,68px)] leading-[1] tracking-[-0.02em]">
						{title}
					</h2>
				</div>
				<div>
					<p className="mb-8 max-w-[48ch] text-[15px] text-paper/55 leading-[1.75]">
						{description}
					</p>
					<Link
						to="/free-seo-audit"
						className="inline-flex bg-acid px-8 py-3.5 font-bold font-sans text-[13px] text-ink uppercase tracking-[0.06em] no-underline transition-colors hover:bg-acid-hover"
					>
						{cta}
					</Link>
				</div>
			</div>
		</section>
	);
}
