import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { ServiceCardGrid } from "@/components/seo/service-card-grid";
import { breadcrumbJsonLd, routeHead } from "@/lib/seo";

export const Route = createFileRoute("/seo-outsourcing")({
	component: SeoOutsourcingPage,
	head: () =>
		routeHead({
			title: "SEO Outsourcing Company | SEOGrowth",
			description:
				"SEO outsourcing support for businesses that need expert technical SEO, content, links, Shopify SEO, WordPress SEO and reporting without hiring in-house.",
			path: "/seo-outsourcing",
		}),
});

function SeoOutsourcingPage() {
	return (
		<AnimatedPage>
			<JsonLd
				data={breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "SEO Outsourcing", path: "/seo-outsourcing" },
				])}
			/>
			<PageHero
				kicker="SEO outsourcing company"
				title="Outsource SEO without outsourcing accountability"
				description="Use SEOGrowth as an expert SEO execution partner for technical audits, content systems, Shopify and WordPress fixes, links, reporting and AI search visibility."
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Best fit"
					title="When outsourcing SEO makes sense"
					description="This page serves buyers searching for SEO outsourcing company, outsourced SEO services and expert SEO fulfillment."
				/>
				<ProblemGrid
					items={[
						{
							title: "For growing companies",
							points: [
								"No in-house technical SEO specialist",
								"Content team needs SEO briefs and priorities",
								"Developers need clear SEO tickets",
								"Leadership needs revenue-focused reporting",
							],
						},
						{
							title: "For agencies",
							points: [
								"Overflow technical SEO audits",
								"Shopify and WordPress problem solving",
								"Backlink risk review and cleanup",
								"Specialist support without full-time hiring",
							],
						},
						{
							title: "What stays transparent",
							points: [
								"Clear deliverables",
								"Monthly priorities",
								"Implementation notes",
								"Reporting tied to organic outcomes",
							],
						},
					]}
				/>
			</section>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Execution stack"
					title="Outsourced SEO services"
					description="Pick a focused workstream or combine them into a complete organic growth campaign."
				/>
				<ServiceCardGrid
					slugs={[
						"technical-seo",
						"content-seo",
						"link-building",
						"shopify-seo",
					]}
				/>
			</section>
			<section className="seo-reveal border-rule border-b bg-paper px-6 py-16 lg:px-12">
				<h2 className="max-w-[14ch] font-serif text-[clamp(38px,5vw,64px)] leading-[1] tracking-[-0.02em]">
					Need white-label support?
				</h2>
				<p className="mt-6 max-w-[58ch] text-[15px] text-muted-text leading-[1.75]">
					SEOGrowth is positioned as a direct-client agency first, but can
					support agencies that need specialist SEO execution. Start with a free
					audit so we can scope the work accurately.
				</p>
				<Link
					to="/free-seo-audit"
					className="mt-8 inline-flex bg-acid px-8 py-3.5 font-bold font-sans text-[13px] text-ink uppercase tracking-[0.06em] no-underline transition-colors hover:bg-acid-hover"
				>
					Request outsourcing audit
				</Link>
			</section>
			<AuditCta title="Scope your outsourced SEO execution." />
		</AnimatedPage>
	);
}
