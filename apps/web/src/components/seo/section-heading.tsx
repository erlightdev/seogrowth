export function SectionHeading({
	kicker,
	title,
	description,
}: {
	kicker: string;
	title: string;
	description: string;
}) {
	return (
		<div className="seo-reveal grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
			<div>
				<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
					<span className="h-px w-4 bg-muted-text" />
					{kicker}
				</div>
				<h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
					{title}
				</h2>
			</div>
			<p className="max-w-[48ch] text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
				{description}
			</p>
		</div>
	);
}
