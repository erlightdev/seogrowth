import { Menu, X } from "lucide-react";
import { useState } from "react";

import { countryPages, services } from "@/content/seo-site";

import { NAV_LINKS } from "./nav-links";

const serviceLinks = [
	services["technical-seo"],
	services["shopify-seo"],
	services["wordpress-seo"],
	services["ai-seo"],
	services["content-seo"],
	services["link-building"],
	services["local-seo"],
	services["ecommerce-seo"],
];

const countryLinks = Object.values(countryPages);

export function MobileNav() {
	const [open, setOpen] = useState(false);

	const close = () => setOpen(false);

	return (
		<div className="lg:hidden">
			<button
				type="button"
				aria-label={open ? "Close navigation" : "Open navigation"}
				aria-expanded={open}
				onClick={() => setOpen((current) => !current)}
				className="inline-flex h-9 w-9 items-center justify-center border border-rule bg-paper text-ink transition-colors hover:border-ink active:translate-y-px"
			>
				{open ? (
					<X size={17} strokeWidth={1.8} />
				) : (
					<Menu size={17} strokeWidth={1.8} />
				)}
			</button>

			{open ? (
				<div className="fixed inset-x-0 top-[var(--active-header-height)] z-[99] max-h-[calc(100dvh-var(--active-header-height))] overflow-y-auto border-rule border-b bg-paper shadow-[0_24px_70px_-48px_rgba(10,10,8,0.55)]">
					<div className="site-container border-rule lg:border-x">
						<div className="grid gap-px bg-rule">
							<section className="bg-paper p-5">
								<div className="mb-4 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
									Services
								</div>
								<div className="grid gap-px bg-rule">
									{serviceLinks.map((service) => (
										<a
											key={service.path}
											href={service.path}
											onClick={close}
											className="grid grid-cols-[1fr_auto] gap-4 bg-paper py-4 text-ink no-underline transition-colors hover:bg-[#f3f3e6]"
										>
											<span>
												<span className="block font-bold text-[16px] tracking-[-0.01em]">
													{service.shortTitle}
												</span>
												<span className="mt-1 block text-[12px] text-muted-text leading-[1.55]">
													{service.kicker}
												</span>
											</span>
											<span className="font-mono text-[12px] text-muted-text">
												→
											</span>
										</a>
									))}
								</div>
							</section>

							<section className="bg-[#ebe9df] p-5">
								<div className="mb-4 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
									Markets
								</div>
								<div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
									{countryLinks.map((country) => (
										<a
											key={country.path}
											href={country.path}
											onClick={close}
											className="bg-paper p-4 text-ink no-underline transition-colors hover:bg-[#f3f3e6]"
										>
											<span className="block font-bold text-[15px]">
												{country.title}
											</span>
											<span className="mt-1 block font-mono text-[10px] text-muted-text uppercase tracking-[0.08em]">
												{country.kicker}
											</span>
										</a>
									))}
								</div>
							</section>

							<section className="bg-paper p-5">
								<div className="mb-4 font-mono text-[10px] text-muted-text uppercase tracking-[0.12em]">
									Navigation
								</div>
								<div className="grid gap-3">
									<a
										href="/services"
										onClick={close}
										className="flex items-center justify-between border-rule border-b py-3 font-bold text-[14px] text-ink no-underline"
									>
										Complete SEO service list
										<span className="font-mono text-muted-text">→</span>
									</a>
									{NAV_LINKS.map(({ label, href }) => (
										<a
											key={href}
											href={href}
											onClick={close}
											className="flex items-center justify-between border-rule border-b py-3 font-bold text-[14px] text-ink no-underline"
										>
											{label}
											<span className="font-mono text-muted-text">→</span>
										</a>
									))}
								</div>
							</section>

							<section className="relative overflow-hidden bg-ink p-5 text-paper">
								<div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(245,243,238,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(245,243,238,.4)_1px,transparent_1px)] [background-size:28px_28px]" />
								<div className="relative">
									<div className="mb-5 flex items-center justify-between">
										<span className="font-mono text-[10px] text-paper/40 uppercase tracking-[0.12em]">
											Ranking signals
										</span>
										<span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
									</div>
									<div className="grid h-24 grid-cols-7 items-end gap-2">
										{[32, 44, 38, 58, 66, 74, 86].map((height) => (
											<div
												key={`mobile-rank-${height}`}
												className="relative overflow-hidden bg-paper/10"
												style={{ height: `${height}%` }}
											>
												<div className="absolute inset-x-0 bottom-0 h-1/2 animate-pulse bg-acid/70" />
											</div>
										))}
									</div>
									<a
										href="/free-seo-audit"
										onClick={close}
										className="mt-6 inline-flex w-full justify-center bg-acid px-5 py-3.5 font-bold font-sans text-[12px] text-ink uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-hover"
									>
										Get free SEO audit
									</a>
								</div>
							</section>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
