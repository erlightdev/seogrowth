import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/seo/service-page";
import { services } from "@/content/seo-site";
import { routeHead } from "@/lib/seo";

const service = services["technical-seo"];

export const Route = createFileRoute("/services/technical-seo")({
	component: () => <ServicePage slug="technical-seo" />,
	head: () =>
		routeHead({
			title: service.metaTitle,
			description: service.metaDescription,
			path: service.path,
		}),
});
