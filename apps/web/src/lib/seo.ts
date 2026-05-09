import { siteUrl } from "@/content/seo-site";

export function canonical(path: string) {
	return `${siteUrl}${path}`;
}

export function routeHead({
	title,
	description,
	path,
}: {
	title: string;
	description: string;
	path: string;
}) {
	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: canonical(path) },
		],
		links: [{ rel: "canonical", href: canonical(path) }],
	};
}

export function serviceJsonLd({
	name,
	description,
	path,
}: {
	name: string;
	description: string;
	path: string;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		provider: {
			"@type": "ProfessionalService",
			name: "SEOGrowth Agency",
			url: siteUrl,
		},
		url: canonical(path),
	};
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: canonical(item.path),
		})),
	};
}
