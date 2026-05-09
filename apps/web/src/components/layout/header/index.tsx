import { Logo } from "./logo";
import { NavLinks } from "./nav-links";

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-[100] border-rule border-b bg-paper">
			<div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between border-rule px-6 lg:border-x lg:px-12">
				<Logo />
				<NavLinks />
				<a
					href="/free-seo-audit"
					className="cursor-pointer border-none bg-ink px-5 py-2 font-bold font-sans text-[12px] text-paper uppercase tracking-[0.08em] no-underline transition-colors hover:bg-acid-dark hover:text-ink"
				>
					Free Audit →
				</a>
			</div>
		</header>
	);
}
