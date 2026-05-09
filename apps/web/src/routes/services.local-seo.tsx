import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/seo/service-page";
import { services } from "@/content/seo-site";
import { routeHead } from "@/lib/seo";

const service = services["local-seo"];

export const Route = createFileRoute("/services/local-seo")({
	component: () => <ServicePage slug="local-seo" />,
	head: () =>
		routeHead({
			title: service.metaTitle,
			description: service.metaDescription,
			path: service.path,
		}),
});
