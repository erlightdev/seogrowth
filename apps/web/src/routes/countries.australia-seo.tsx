import { createFileRoute } from "@tanstack/react-router";

import { CountryPage } from "@/components/seo/country-page";
import { countryPages } from "@/content/seo-site";
import { routeHead } from "@/lib/seo";

const page = countryPages["australia-seo"];

export const Route = createFileRoute("/countries/australia-seo")({
	component: () => <CountryPage slug="australia-seo" />,
	head: () =>
		routeHead({
			title: page.metaTitle,
			description: page.metaDescription,
			path: page.path,
		}),
});
