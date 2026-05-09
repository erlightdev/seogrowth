export interface NavLink {
	label: string;
	href: string;
}

export const NAV_LINKS: NavLink[] = [
	{ label: "Services", href: "/services" },
	{ label: "Countries", href: "/countries/australia-seo" },
	{ label: "Outsourcing", href: "/seo-outsourcing" },
	{ label: "Fiverr Problems", href: "/fiverr-seo-problems" },
];

export function NavLinks() {
	return (
		<nav className="hidden items-center gap-10 lg:flex">
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
