import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";

import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export default function Header() {
	const [announcementOpen, setAnnouncementOpen] = useState(true);
	const activeHeaderHeight = announcementOpen
		? "var(--header-height)"
		: "var(--nav-height)";

	return (
		<>
			{announcementOpen ? (
				<div
					className="fixed inset-x-0 top-0 z-[101] border-rule border-b bg-acid text-ink transition-colors hover:bg-acid-hover"
					role="region"
					aria-label="Announcement"
				>
					<div className="site-container grid h-[var(--announcement-height)] grid-cols-[1fr_auto] items-center gap-3 border-ink/10 px-4 sm:px-6 lg:border-x lg:px-12">
						<a
							href="/free-seo-audit"
							className="min-w-0 text-ink no-underline"
						>
							<span className="block truncate font-mono text-[10px] text-ink/70 uppercase tracking-[0.12em] sm:hidden">
								Free SEO audit slots open
							</span>
							<span className="hidden truncate font-mono text-[10px] text-ink/70 uppercase tracking-[0.12em] sm:block">
								Free SEO audit slots open for Shopify, WordPress and bad
								backlink recovery
							</span>
						</a>
						<div className="flex items-center gap-2 sm:gap-4">
							<a
								href="/free-seo-audit"
								className="hidden shrink-0 font-bold font-sans text-[11px] text-ink uppercase tracking-[0.08em] no-underline sm:inline-flex"
							>
								Book audit →
							</a>
							<button
								type="button"
								aria-label="Close announcement"
								onClick={() => setAnnouncementOpen(false)}
								className="inline-flex h-7 w-7 items-center justify-center border border-ink/15 bg-transparent text-ink transition-colors hover:border-ink/40 hover:bg-ink/5 active:translate-y-px"
							>
								<X size={14} strokeWidth={1.9} />
							</button>
						</div>
					</div>
				</div>
			) : null}
			<header
				className="fixed inset-x-0 top-0 z-[100] border-rule border-b bg-paper"
				style={
					{
						top: announcementOpen ? "var(--announcement-height)" : "0px",
						"--active-header-height": activeHeaderHeight,
					} as CSSProperties
				}
			>
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
			<div
				aria-hidden="true"
				className={
					announcementOpen
						? "h-[var(--header-height)]"
						: "h-[var(--nav-height)]"
				}
			/>
		</>
	);
}
