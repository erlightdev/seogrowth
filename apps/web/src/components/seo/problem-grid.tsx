export function ProblemGrid({
	items,
}: {
	items: { title: string; points: string[] }[];
}) {
	return (
		<div className="site-container grid grid-cols-1 gap-px bg-rule md:grid-cols-2 lg:grid-cols-3 lg:border-rule lg:border-x">
			{items.map((item) => (
				<div key={item.title} className="seo-reveal bg-paper p-8 lg:p-10">
					<h3 className="mb-6 font-bold text-[20px] tracking-[-0.01em]">
						{item.title}
					</h3>
					<ul className="grid gap-3">
						{item.points.map((point) => (
							<li
								key={point}
								className="flex gap-3 text-[14px] text-muted-text leading-[1.55]"
							>
								<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
								{point}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
