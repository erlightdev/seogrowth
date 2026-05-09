import { services } from "@/content/seo-site";

export interface NavLink {
	label: string;
	href: string;
}

export const NAV_LINKS: NavLink[] = [
	{ label: "Countries", href: "/countries/australia-seo" },
	{ label: "Outsourcing", href: "/seo-outsourcing" },
	{ label: "Case Studies", href: "/case-studies" },
	{ label: "Fiverr Problems", href: "/fiverr-seo-problems" },
];

const primaryServices = [
	services["technical-seo"],
	services["shopify-seo"],
	services["wordpress-seo"],
	services["ai-seo"],
];

const secondaryServices = [
	services["content-seo"],
	services["link-building"],
	services["local-seo"],
	services["ecommerce-seo"],
];

const rankBars = [32, 44, 38, 58, 66, 74, 86].map((height, position) => ({
	id: `mega-rank-${position}-${height}`,
	height,
}));

export function NavLinks() {
	return (
		<nav className="hidden h-[var(--nav-height)] items-center gap-10 lg:flex">
			<div className="group flex h-full items-center">
				<a
					href="/services"
					className="flex h-full items-center font-normal text-[13px] text-muted-text uppercase tracking-[0.04em] no-underline transition-colors hover:text-ink"
				>
					Services
				</a>
				<div className="pointer-events-none fixed inset-x-0 top-[var(--active-header-height)] border-rule border-b bg-paper opacity-0 shadow-[0_24px_70px_-48px_rgba(10,10,8,0.45)] transition duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
					<div className="site-container grid grid-cols-[1.2fr_0.95fr_0.85fr] gap-px border-rule bg-rule lg:border-x">
						<div className="bg-paper p-8">
							<div className="mb-6 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
								Core service pages
							</div>
							<div className="grid gap-px bg-rule">
								{primaryServices.map((service) => (
									<a
										key={service.path}
										href={service.path}
										className="group/link grid grid-cols-[1fr_auto] gap-5 bg-paper py-4 text-ink no-underline transition-colors hover:bg-[#f3f3e6]"
									>
										<span>
											<span className="block font-bold text-[17px] tracking-[-0.01em]">
												{service.shortTitle}
											</span>
											<span className="mt-1 block max-w-[52ch] text-[12px] text-muted-text leading-[1.55]">
												{service.description}
											</span>
										</span>
										<span className="font-mono text-[12px] text-muted-text transition-transform group-hover/link:translate-x-1">
											→
										</span>
									</a>
								))}
							</div>
						</div>
						<div className="bg-paper p-8">
							<div className="mb-6 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
								More SEO services
							</div>
							<div className="grid gap-3">
								{secondaryServices.map((service) => (
									<a
										key={service.path}
										href={service.path}
										className="flex items-center justify-between border-rule border-b py-3 font-bold text-[14px] text-ink no-underline transition-colors hover:text-acid-dark"
									>
										{service.title}
										<span className="font-mono text-muted-text">→</span>
									</a>
								))}
							</div>
							<a
								href="/services"
								className="mt-8 inline-flex bg-ink px-5 py-3 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink"
							>
								Complete SEO service list →
							</a>
						</div>
						<div className="relative overflow-hidden bg-ink p-8 text-paper">
							<div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(245,243,238,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(245,243,238,.4)_1px,transparent_1px)] [background-size:28px_28px]" />
							<div className="relative">
								<div className="mb-6 flex items-center justify-between">
									<span className="font-mono text-[10px] text-paper/40 uppercase tracking-[0.12em]">
										Ranking signals
									</span>
									<span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
								</div>
								<div className="grid h-32 grid-cols-7 items-end gap-2">
									{rankBars.map((bar) => (
										<div
											key={bar.id}
											className="relative overflow-hidden bg-paper/10"
											style={{ height: `${bar.height}%` }}
										>
											<div className="absolute inset-x-0 bottom-0 h-1/2 animate-pulse bg-acid/70" />
										</div>
									))}
								</div>
								<div className="mt-7 grid gap-px bg-paper/10">
									{[
										["Technical blockers", "fixed"],
										["Content gaps", "mapped"],
										["Authority risk", "cleaned"],
									].map(([label, value]) => (
										<div
											key={label}
											className="grid grid-cols-[1fr_auto] bg-ink py-3"
										>
											<span className="font-mono text-[10px] text-paper/45 uppercase tracking-[0.08em]">
												{label}
											</span>
											<span className="font-mono text-[10px] text-acid uppercase tracking-[0.08em]">
												{value}
											</span>
										</div>
									))}
								</div>
								<p className="mt-6 text-[13px] text-paper/50 leading-[1.65]">
									Use the free audit to see which service page matches the real
									ranking problem first.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{NAV_LINKS.map(({ label, href }) => (
				<a
					key={label}
					href={href}
					className="font-normal text-[13px] text-muted-text uppercase tracking-[0.04em] no-underline transition-colors hover:text-ink"
				>
					{label}
				</a>
			))}
		</nav>
	);
}
