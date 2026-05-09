import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import "../index.css";

export type RouterAppContext = Record<string, never>;

export const Route = createRootRouteWithContext<RouterAppContext>()({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "SEOGrowth — Performance SEO Agency",
			},
			{
				name: "description",
				content:
					"Data-driven SEO strategies that compound over time for companies serious about organic growth.",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
		],
	}),
});

function RootComponent() {
	return (
		<>
			<HeadContent />
			<div className="grid min-h-svh grid-rows-[auto_1fr_auto]">
				<Header />
				<div className="min-w-0">
					<Outlet />
				</div>
				<Footer />
			</div>
			<TanStackRouterDevtools position="bottom-left" />
		</>
	);
}
