export function JsonLd({ data }: { data: unknown }) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be emitted as script text for search engines.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
