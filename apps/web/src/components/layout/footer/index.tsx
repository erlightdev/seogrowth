export default function Footer() {
	const services = [
		["Technical SEO", "/services/technical-seo"],
		["Shopify SEO", "/services/shopify-seo"],
		["WordPress SEO", "/services/wordpress-seo"],
		["AI SEO / GEO", "/services/ai-seo"],
		["Complete Services", "/services"],
	];

	const company = [
		["SEO Outsourcing", "/seo-outsourcing"],
		["Fiverr SEO Problems", "/fiverr-seo-problems"],
		["Free SEO Audit", "/free-seo-audit"],
		["Case Studies", "/case-studies"],
		["Pricing", "/#pricing"],
	];

	const countries = [
		["Australia SEO", "/countries/australia-seo"],
		["USA SEO", "/countries/usa-seo"],
		["Canada SEO", "/countries/canada-seo"],
		["UK SEO", "/countries/uk-seo"],
		["International SEO", "/services"],
	];

	return (
		<footer className="bg-ink px-6 pt-20 pb-8 text-paper lg:px-12">
			<div className="site-container">
				<div className="mb-16 grid grid-cols-1 gap-8 border-white/10 border-b pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
					<div>
						<div className="mb-4 flex items-center gap-2 font-extrabold font-sans text-[18px] uppercase tracking-[0.06em]">
							<span className="relative -top-[1px] inline-block h-2 w-2 rounded-full bg-acid" />
							SEOGrowth Agency
						</div>
						<p className="mb-8 max-w-[30ch] text-[14px] text-white/45 leading-[1.7]">
							Organic search that compounds. Built for companies serious about
							long-term growth.
						</p>
						<div className="font-mono text-[11px] text-white/35 tracking-[0.06em]">
							hello@seogrowth.agency
						</div>
					</div>

					<FooterColumn title="Services" links={services} />
					<FooterColumn title="Company" links={company} />
					<FooterColumn title="Countries" links={countries} />
				</div>

				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="font-mono text-[11px] text-white/25 tracking-[0.06em]">
						© {new Date().getFullYear()} SEOGrowth Agency — All rights reserved
					</div>
					<div className="flex gap-8">
						<a
							href="/free-seo-audit"
							className="font-mono text-[11px] text-white/30 tracking-[0.06em] no-underline transition-colors hover:text-white/60"
						>
							Audit
						</a>
						<a
							href="/services"
							className="font-mono text-[11px] text-white/30 tracking-[0.06em] no-underline transition-colors hover:text-white/60"
						>
							Services
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
	return (
		<div>
			<div className="mb-6 font-mono text-[10px] text-white/30 uppercase tracking-[0.12em]">
				{title}
			</div>
			<ul className="flex flex-col gap-3">
				{links.map(([label, href]) => (
					<li key={href}>
						<a
							href={href}
							className="text-[14px] text-white/60 no-underline transition-colors hover:text-acid"
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
