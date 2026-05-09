import { Link } from "@tanstack/react-router";

export function Logo() {
	return (
		<Link
			to="/"
			className="flex items-center gap-2 font-extrabold font-sans text-[15px] text-ink uppercase tracking-[0.08em] no-underline"
		>
			<span className="relative -top-[1px] inline-block h-2 w-2 shrink-0 rounded-full bg-acid" />
			SEOGrowth
		</Link>
	);
}
