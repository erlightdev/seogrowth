import { Link } from "@tanstack/react-router";

import { type ServiceSlug, services } from "@/content/seo-site";

export function ServiceCardGrid({ slugs }: { slugs?: ServiceSlug[] }) {
	const entries = (slugs ?? (Object.keys(services) as ServiceSlug[])).map(
		(slug) => services[slug],
	);

	return (
		<div className="site-container grid grid-cols-1 gap-px bg-rule md:grid-cols-2 lg:grid-cols-4 lg:border-rule lg:border-x">
			{entries.map((service, index) => (
				<Link
					key={service.path}
					to={service.path}
					className="seo-reveal group min-h-[280px] bg-paper p-8 text-ink no-underline transition-colors hover:bg-[#f3f3e6] lg:p-10"
				>
					<div className="mb-6 font-mono text-[11px] text-muted-text tracking-[0.08em]">
						{String(index + 1).padStart(2, "0")}
					</div>
					<div className="mb-4 font-bold text-[19px] tracking-[-0.01em]">
						{service.shortTitle}
					</div>
					<p className="mb-8 text-[14px] text-muted-text leading-[1.65]">
						{service.description}
					</p>
					<div className="font-mono text-[11px] text-muted-text uppercase tracking-[0.08em] transition-all group-hover:text-ink">
						Learn more →
					</div>
				</Link>
			))}
		</div>
	);
}
