const options = {
	country: ["Australia", "USA", "Canada", "UK", "Other"],
	platform: ["Shopify", "WordPress", "WooCommerce", "Webflow", "Wix", "Other"],
	issue: [
		"Traffic drop",
		"No rankings",
		"Technical SEO",
		"Backlinks / Fiverr SEO",
		"AI visibility",
		"Ecommerce SEO",
		"Local SEO",
		"Other",
	],
	budget: ["Under $2k/mo", "$2k-$5k/mo", "$5k-$10k/mo", "$10k+/mo"],
};

export function AuditForm() {
	return (
		<form className="seo-reveal grid gap-px bg-rule">
			<div className="grid grid-cols-1 gap-px md:grid-cols-2">
				<label className="bg-paper p-5">
					<span className="mb-2 block font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
						Name
					</span>
					<input
						required
						name="name"
						className="w-full border-rule border-b bg-transparent py-2 text-[16px] outline-none"
					/>
				</label>
				<label className="bg-paper p-5">
					<span className="mb-2 block font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
						Email
					</span>
					<input
						required
						type="email"
						name="email"
						className="w-full border-rule border-b bg-transparent py-2 text-[16px] outline-none"
					/>
				</label>
			</div>
			<label className="bg-paper p-5">
				<span className="mb-2 block font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
					Website URL
				</span>
				<input
					required
					type="url"
					name="website"
					placeholder="https://example.com"
					className="w-full border-rule border-b bg-transparent py-2 text-[16px] outline-none placeholder:text-muted-text/40"
				/>
			</label>
			<div className="grid grid-cols-1 gap-px md:grid-cols-2">
				<SelectField label="Country" name="country" values={options.country} />
				<SelectField
					label="Platform"
					name="platform"
					values={options.platform}
				/>
				<SelectField label="Main issue" name="issue" values={options.issue} />
				<SelectField
					label="Monthly budget"
					name="budget"
					values={options.budget}
				/>
			</div>
			<label className="bg-paper p-5">
				<span className="mb-2 block font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
					What should we look at first?
				</span>
				<textarea
					name="message"
					rows={5}
					className="w-full resize-y border-rule border-b bg-transparent py-2 text-[16px] outline-none"
				/>
			</label>
			<div className="bg-paper p-5">
				<button
					type="submit"
					className="w-full cursor-pointer border-none bg-acid p-4 font-bold font-sans text-[13px] text-ink uppercase tracking-[0.08em] transition-colors hover:bg-acid-hover"
				>
					Request free SEO audit
				</button>
			</div>
		</form>
	);
}

function SelectField({
	label,
	name,
	values,
}: {
	label: string;
	name: string;
	values: string[];
}) {
	return (
		<label className="bg-paper p-5">
			<span className="mb-2 block font-mono text-[10px] text-muted-text uppercase tracking-[0.1em]">
				{label}
			</span>
			<select
				name={name}
				className="w-full border-rule border-b bg-transparent py-2 text-[16px] outline-none"
			>
				{values.map((value) => (
					<option key={value}>{value}</option>
				))}
			</select>
		</label>
	);
}
