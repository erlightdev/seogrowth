import { createFileRoute } from "@tanstack/react-router";

import { ServicePage } from "@/components/seo/service-page";
import { services } from "@/content/seo-site";
import { routeHead } from "@/lib/seo";

const service = services["ai-seo"];

export const Route = createFileRoute("/services/ai-seo")({
	component: () => <ServicePage slug="ai-seo" />,
	head: () =>
		routeHead({
			title: service.metaTitle,
			description: service.metaDescription,
			path: service.path,
		}),
});
