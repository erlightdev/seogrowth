import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { TestimonialsCarousel } from "@/components/seo/testimonials-carousel";
import { type ServiceSlug, services } from "@/content/seo-site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export function ServicePage({ slug }: { slug: ServiceSlug }) {
	const service = services[slug];

	return (
		<AnimatedPage>
			<JsonLd
				data={[
					serviceJsonLd({
						name: service.title,
						description: service.description,
						path: service.path,
					}),
					faqJsonLd(service.faqs),
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "Services", path: "/services" },
						{ name: service.title, path: service.path },
					]),
				]}
			/>
			<PageHero
				kicker={service.kicker}
				title={service.title}
				description={service.description}
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="What we solve"
					title="SEO problems this service fixes"
					description="Each campaign starts with diagnosis, then moves into the highest-impact implementation work first."
				/>
				<ProblemGrid
					items={[
						{ title: "Common blockers", points: service.problems },
						{ title: "Campaign deliverables", points: service.deliverables },
						{ title: "Expected outcomes", points: service.outcomes },
					]}
				/>
			</section>
			<TestimonialsCarousel />
			<FaqSection faqs={service.faqs} />
			<AuditCta
				title={`Audit your ${service.shortTitle.toLowerCase()} opportunity.`}
				description={`Send your website for a free review of ${service.shortTitle.toLowerCase()} issues, priorities and growth opportunities.`}
			/>
		</AnimatedPage>
	);
}
