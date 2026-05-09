export function FaqSection({
	faqs,
}: {
	faqs: { question: string; answer: string }[];
}) {
	return (
		<section className="border-rule border-b bg-paper">
			<div className="seo-reveal grid grid-cols-1 gap-px bg-rule lg:grid-cols-3">
				<div className="bg-paper p-8 lg:p-12">
					<div className="font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
						FAQ
					</div>
					<h2 className="mt-4 font-serif text-[44px] leading-[1] tracking-[-0.02em]">
						Questions before the audit
					</h2>
				</div>
				<div className="bg-paper lg:col-span-2">
					{faqs.map((faq) => (
						<details
							key={faq.question}
							className="group border-rule border-b p-6 open:bg-[#f3f3e6] lg:p-8"
						>
							<summary className="cursor-pointer list-none font-bold text-[17px] tracking-[-0.01em]">
								{faq.question}
							</summary>
							<p className="mt-4 max-w-[72ch] text-[14px] text-muted-text leading-[1.7]">
								{faq.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
