import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/home/home-page";
import { AnimatedPage } from "@/components/seo/animated-page";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<AnimatedPage>
			<HomePage />
		</AnimatedPage>
	);
}
