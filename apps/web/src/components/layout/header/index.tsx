import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export default function Header() {
	return (
		<>
			<a
				href="/free-seo-audit"
				className="block border-rule border-b bg-acid text-ink no-underline transition-colors hover:bg-acid-hover"
			>
				<div className="site-container flex h-[var(--announcement-height)] items-center justify-between gap-4 border-ink/10 px-6 lg:border-x lg:px-12">
					<span className="truncate font-mono text-[10px] text-ink/70 uppercase tracking-[0.12em]">
						Free SEO audit slots open for Shopify, WordPress and bad backlink
						recovery
					</span>
					<span className="shrink-0 font-bold font-sans text-[11px] text-ink uppercase tracking-[0.08em]">
						Book audit →
					</span>
				</div>
			</a>
			<header className="sticky top-0 z-[100] border-rule border-b bg-paper">
				<div className="site-container flex h-[var(--nav-height)] items-center justify-between border-rule px-6 lg:border-x lg:px-12">
					<Logo />
					<NavLinks />
					<div className="flex items-center gap-3">
						<a
							href="/free-seo-audit"
							className="hidden cursor-pointer border-none bg-ink px-5 py-2 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink sm:inline-flex"
						>
							Free Audit →
						</a>
						<MobileNav />
					</div>
				</div>
			</header>
		</>
	);
}
