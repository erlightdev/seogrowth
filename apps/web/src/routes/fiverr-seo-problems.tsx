import { createFileRoute } from "@tanstack/react-router";
import { AnimatedPage } from "@/components/seo/animated-page";
import { AuditCta } from "@/components/seo/audit-cta";
import { FaqSection } from "@/components/seo/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { ProblemGrid } from "@/components/seo/problem-grid";
import { SectionHeading } from "@/components/seo/section-heading";
import { fiverrProblems } from "@/content/seo-site";
import { breadcrumbJsonLd, faqJsonLd, routeHead } from "@/lib/seo";

const faqs = [
	{
		question: "Is Fiverr SEO always bad?",
		answer:
			"No. The problem is not the marketplace itself; it is low-quality SEO work such as spam backlinks, fake metrics, keyword stuffing and thin content with no technical diagnosis.",
	},
	{
		question: "Can bad backlinks be fixed?",
		answer:
			"Often yes. The first step is a backlink and traffic audit, then prioritizing cleanup, risk reduction and stronger replacement signals.",
	},
	{
		question: "What should I do after cheap SEO work?",
		answer:
			"Pause new link orders, collect reports and URLs from the provider, and request a full SEO audit before making more changes.",
	},
];

export const Route = createFileRoute("/fiverr-seo-problems")({
	component: FiverrSeoProblemsPage,
	head: () =>
		routeHead({
			title: "Fiverr SEO Problems and Recovery | SEOGrowth",
			description:
				"Organized guide to Fiverr SEO problems including cheap backlinks, spam links, fake metrics, keyword stuffing, thin AI content and recovery steps.",
			path: "/fiverr-seo-problems",
		}),
});

function FiverrSeoProblemsPage() {
	return (
		<AnimatedPage>
			<JsonLd
				data={[
					faqJsonLd(faqs),
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{
							name: "Fiverr SEO Problems",
							path: "/fiverr-seo-problems",
						},
					]),
				]}
			/>
			<PageHero
				kicker="Bad SEO recovery"
				title="Fiverr SEO problems, organized"
				description="A practical recovery hub for businesses dealing with cheap backlink packages, fake authority promises, keyword stuffing, thin AI content and SEO work that created more risk than growth."
				primaryCta="Recover from bad SEO work"
			/>
			<section className="border-rule border-b bg-paper">
				<SectionHeading
					kicker="Risk list"
					title="What usually goes wrong"
					description="The fastest way to recover is to separate real SEO work from tactics that only look busy in a report."
				/>
				<ProblemGrid
					items={[
						{
							title: "Common Fiverr SEO problems",
							points: fiverrProblems,
						},
						{
							title: "What we audit first",
							points: [
								"Backlink quality and anchor patterns",
								"Traffic and ranking drops",
								"Indexation and crawl health",
								"Content quality and duplication",
								"Technical blockers ignored by prior work",
							],
						},
						{
							title: "Recovery plan",
							points: [
								"Stop risky link building",
								"Prioritize technical fixes",
								"Replace thin pages with useful content",
								"Build safer authority signals",
								"Report on recovery by traffic and leads",
							],
						},
					]}
				/>
			</section>
			<FaqSection faqs={faqs} />
			<AuditCta
				title="Recover from bad SEO work."
				description="Send your site for a free review of backlink risk, Fiverr SEO issues, technical damage and the fastest recovery priorities."
				cta="Recover from bad SEO work"
			/>
		</AnimatedPage>
	);
}
