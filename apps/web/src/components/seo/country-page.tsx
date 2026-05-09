import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { ServiceCardGrid } from "@/components/seo/service-card-grid";
import {
	type CountrySlug,
	countryPages,
	globalFaqs,
	services,
} from "@/content/seo-site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function CountryPage({ slug }: { slug: CountrySlug }) {
	const page = countryPages[slug];

	return (
		<AnimatedPage>
			<JsonLd
				data={[
					{
						"@context": "https://schema.org",
						"@type": "ProfessionalService",
						name: page.title,
						description: page.description,
						areaServed: page.title.replace("SEO ", ""),
					},
					faqJsonLd(globalFaqs),
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: page.title, path: page.path },
					]),
				]}
			/>
			<PageHero
				kicker={page.kicker}
				title={page.title}
				description={`${page.description} We combine international SEO services with market-specific keyword targeting, technical cleanup and revenue-focused reporting.`}
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Market priorities"
					title="What this campaign should focus on"
					description="Country pages are built around real buyer intent, not copied location text."
				/>
				<ProblemGrid
					items={[
						{
							title: "Market needs",
							points: page.marketNeeds,
						},
						{
							title: "Priority services",
							points: page.priorityServices.map(
								(slug) => services[slug].shortTitle,
							),
						},
						{
							title: "International SEO",
							points: [
								"Country-specific keyword research",
								"Clean internal linking between market pages",
								"Technical setup for global expansion",
							],
						},
					]}
				/>
			</section>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Best fit services"
					title="SEO services for this market"
					description="These services form the first recommended campaign stack for this country."
				/>
				<ServiceCardGrid slugs={page.priorityServices} />
			</section>
			<FaqSection faqs={globalFaqs} />
			<AuditCta title={`Get a free ${page.title} audit.`} />
		</AnimatedPage>
	);
}
