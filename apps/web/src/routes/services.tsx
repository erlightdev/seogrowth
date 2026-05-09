import { createFileRoute } from "@tanstack/react-router";
import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { ServiceCardGrid } from "@/components/seo/service-card-grid";
import {
	fullServiceList,
	globalFaqs,
	platformProblems,
} from "@/content/seo-site";
import { breadcrumbJsonLd, faqJsonLd, routeHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
	component: ServicesPage,
	head: () =>
		routeHead({
			title: "SEO Services | SEOGrowth",
			description:
				"Complete SEO services including technical SEO, Shopify SEO, WordPress SEO, ecommerce SEO, local SEO, content, links and AI SEO.",
			path: "/services",
		}),
});

function ServicesPage() {
	return (
		<AnimatedPage>
			<JsonLd
				data={[
					faqJsonLd(globalFaqs),
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "Services", path: "/services" },
					]),
				]}
			/>
			<PageHero
				kicker="Complete SEO service list"
				title="Full-service SEO execution"
				description="A complete SEO service stack for technical issues, content gaps, ecommerce growth, local search, AI visibility, safer links and bad SEO recovery."
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Service menu"
					title="Everything needed to rank and convert"
					description="Use this as the complete SEO service list for buyers comparing agencies, freelancers and outsourcing partners."
				/>
				<div className="site-container grid grid-cols-1 gap-px bg-rule md:grid-cols-2 lg:grid-cols-3 lg:border-rule lg:border-x">
					{fullServiceList.map((item) => (
						<div key={item} className="seo-reveal bg-paper p-6">
							<span className="mr-3 font-mono text-[11px] text-acid">+</span>
							<span className="font-bold text-[15px]">{item}</span>
						</div>
					))}
				</div>
			</section>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Core services"
					title="SEO pages built for ranking"
					description="Each service page targets a specific search intent and links back to the free audit conversion path."
				/>
				<ServiceCardGrid />
			</section>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Platform SEO"
					title="Shopify, WordPress and other CMS fixes"
					description="Most SEO problems are platform-specific. The campaign should diagnose the actual system before prescribing generic tactics."
				/>
				<ProblemGrid
					items={platformProblems.map((item) => ({
						title: item.platform,
						points: item.problems,
					}))}
				/>
			</section>
			<FaqSection faqs={globalFaqs} />
			<AuditCta />
		</AnimatedPage>
	);
}
