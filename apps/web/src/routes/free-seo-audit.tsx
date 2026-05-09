import { createFileRoute } from "@tanstack/react-router";
import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditForm } from "@/components/seo/audit-form";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { breadcrumbJsonLd, routeHead } from "@/lib/seo";

export const Route = createFileRoute("/free-seo-audit")({
	component: FreeSeoAuditPage,
	head: () =>
		routeHead({
			title: "Free SEO Audit | SEOGrowth",
			description:
				"Request a free SEO audit for technical issues, Shopify SEO, WordPress SEO, backlinks, Fiverr SEO problems, AI visibility and organic growth opportunities.",
			path: "/free-seo-audit",
		}),
});

function FreeSeoAuditPage() {
	return (
		<AnimatedPage>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Free SEO Audit", path: "/free-seo-audit" },
				])}
			/>
			<PageHero
				kicker="Free SEO audit"
				title="Show us the site. We’ll find the blockers."
				description="Request a free audit covering technical SEO, content gaps, Shopify or WordPress issues, backlinks, Fiverr SEO problems, AI visibility and international growth opportunities."
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Audit coverage"
					title="What the review includes"
					description="The form stays simple. The audit looks at the full SEO system behind your site."
				/>
				<ProblemGrid
					items={[
						{
							title: "Technical",
							points: [
								"Crawl and indexation",
								"Core Web Vitals",
								"Schema and metadata",
								"Redirects and architecture",
							],
						},
						{
							title: "Growth",
							points: [
								"Keyword and content gaps",
								"Platform-specific issues",
								"Local, ecommerce or country targeting",
								"AI search visibility opportunities",
							],
						},
						{
							title: "Risk",
							points: [
								"Spam backlinks",
								"Fiverr SEO damage",
								"Thin AI content",
								"Reporting and tracking gaps",
							],
						},
					]}
				/>
			</section>
			<section className="grid grid-cols-1 border-rule border-b bg-paper lg:grid-cols-[0.85fr_1.15fr]">
				<div className="seo-reveal border-rule border-b p-8 lg:border-r lg:border-b-0 lg:p-12">
					<div className="font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
						Request form
					</div>
					<h2 className="mt-4 max-w-[12ch] font-serif text-[clamp(38px,5vw,64px)] leading-[1] tracking-[-0.02em]">
						Start the audit
					</h2>
					<p className="mt-6 max-w-[42ch] text-[14px] text-muted-text leading-[1.7]">
						This is a front-end lead form for the first build. Hook it to your
						CRM, email service or backend endpoint when you are ready.
					</p>
				</div>
				<div className="p-6 lg:p-12">
					<AuditForm />
				</div>
			</section>
		</AnimatedPage>
	);
}
