export type ServiceSlug =
	| "technical-seo"
	| "content-seo"
	| "link-building"
	| "local-seo"
	| "ecommerce-seo"
	| "shopify-seo"
	| "wordpress-seo"
	| "ai-seo";

export type CountrySlug = "australia-seo" | "usa-seo" | "canada-seo" | "uk-seo";

export const siteUrl = "https://seogrowth.agency";

export const fullServiceList = [
	"Technical SEO audits",
	"Crawl and indexation fixes",
	"Core Web Vitals",
	"Schema markup",
	"Site migrations",
	"Shopify SEO",
	"WordPress SEO",
	"E-commerce SEO",
	"Local SEO",
	"Content strategy",
	"Keyword research",
	"Topical authority planning",
	"Link acquisition",
	"Digital PR",
	"Competitor analysis",
	"Analytics and reporting",
	"AI Search, GEO and AEO visibility",
	"Penalty and spam backlink cleanup",
];

export const services: Record<
	ServiceSlug,
	{
		title: string;
		shortTitle: string;
		path: string;
		kicker: string;
		description: string;
		metaTitle: string;
		metaDescription: string;
		outcomes: string[];
		problems: string[];
		deliverables: string[];
		faqs: { question: string; answer: string }[];
	}
> = {
	"technical-seo": {
		title: "Technical SEO Services",
		shortTitle: "Technical SEO",
		path: "/services/technical-seo",
		kicker: "Crawl, index, speed",
		description:
			"Fix the crawl, rendering, indexing, architecture and performance issues that stop strong websites from ranking.",
		metaTitle: "Technical SEO Services | SEOGrowth",
		metaDescription:
			"Technical SEO audits and implementation for crawl issues, indexation, Core Web Vitals, schema, migrations and site architecture.",
		outcomes: ["Cleaner crawling", "Stronger indexation", "Faster pages"],
		problems: [
			"Important pages not indexed",
			"Core Web Vitals failures",
			"Broken redirects and crawl traps",
			"Missing schema or weak internal linking",
		],
		deliverables: [
			"Full technical crawl and issue map",
			"Indexation and sitemap cleanup",
			"Core Web Vitals action plan",
			"Schema and internal link recommendations",
		],
		faqs: [
			{
				question: "Do you implement technical fixes?",
				answer:
					"Yes. We can implement directly where access allows, or provide a developer-ready ticket list with priorities and acceptance checks.",
			},
			{
				question: "Is technical SEO useful for Shopify and WordPress?",
				answer:
					"Yes. Both platforms can create duplicate URLs, speed issues, schema gaps and indexation waste that need platform-specific SEO handling.",
			},
		],
	},
	"content-seo": {
		title: "Content SEO Strategy",
		shortTitle: "Content SEO",
		path: "/services/content-seo",
		kicker: "Keywords, briefs, authority",
		description:
			"Build a content system around search intent, topical authority and pages that can actually convert qualified traffic.",
		metaTitle: "Content SEO Strategy | SEOGrowth",
		metaDescription:
			"SEO content strategy, keyword research, topic clusters, briefs and content optimization for sustainable organic growth.",
		outcomes: [
			"Clear topic clusters",
			"Better content briefs",
			"Higher-intent traffic",
		],
		problems: [
			"Blogs with no ranking plan",
			"Duplicate or thin service pages",
			"Missing comparison and buying-intent pages",
			"AI content without human review or expertise",
		],
		deliverables: [
			"Keyword and SERP intent map",
			"Topic cluster roadmap",
			"Content briefs and on-page optimization",
			"Editorial calendar tied to revenue pages",
		],
		faqs: [
			{
				question: "Can AI help with SEO content?",
				answer:
					"Yes, but only with human strategy, fact checking and editorial review. We use AI to accelerate research and structure, not to mass-publish low-quality pages.",
			},
			{
				question: "Do you write content?",
				answer:
					"We can create briefs, optimize existing copy, or provide production-ready content depending on the campaign scope.",
			},
		],
	},
	"link-building": {
		title: "Link Building and Digital PR",
		shortTitle: "Link Building",
		path: "/services/link-building",
		kicker: "Authority without spam",
		description:
			"Earn relevant authority through white-hat outreach, digital PR and link cleanup that avoids Fiverr-style spam risks.",
		metaTitle: "Link Building Services | SEOGrowth",
		metaDescription:
			"White-hat link acquisition, digital PR, backlink audits and spam link cleanup for safer authority growth.",
		outcomes: [
			"Cleaner authority",
			"Better referral relevance",
			"Lower spam risk",
		],
		problems: [
			"Cheap backlink packages",
			"Fake DA/DR metrics",
			"Unnatural anchors",
			"Lost rankings after bad SEO work",
		],
		deliverables: [
			"Backlink profile audit",
			"Competitor link gap analysis",
			"Outreach and digital PR targets",
			"Spam risk review and cleanup guidance",
		],
		faqs: [
			{
				question: "Do you sell bulk backlink packages?",
				answer:
					"No. We focus on relevance, editorial value and risk control instead of bulk links that exist only to manipulate rankings.",
			},
			{
				question: "Can you help after bad Fiverr SEO?",
				answer:
					"Yes. We audit the backlink profile, identify patterns that create risk, and prioritize recovery steps around content, technical health and authority rebuilding.",
			},
		],
	},
	"local-seo": {
		title: "Local SEO Services",
		shortTitle: "Local SEO",
		path: "/services/local-seo",
		kicker: "Maps, locations, leads",
		description:
			"Improve local rankings for service businesses with Google Business Profile optimization, local pages, reviews and citations.",
		metaTitle: "Local SEO Services | SEOGrowth",
		metaDescription:
			"Local SEO for maps, Google Business Profile, service area pages, citations, reviews and local lead generation.",
		outcomes: [
			"More map visibility",
			"Stronger location pages",
			"Better local leads",
		],
		problems: [
			"Weak Google Business Profile",
			"Duplicate location signals",
			"Thin city/service pages",
			"No review or citation system",
		],
		deliverables: [
			"Local SEO audit",
			"Google Business Profile optimization",
			"Location and service page roadmap",
			"Citation and review action plan",
		],
		faqs: [
			{
				question: "Do you work with multi-location businesses?",
				answer:
					"Yes. We structure location architecture, internal linking and Google Business Profile workflows for single-location and multi-location businesses.",
			},
			{
				question: "Can local SEO work with international targeting?",
				answer:
					"Yes. Local SEO can sit alongside broader country pages when the business serves multiple markets or has multiple regional offices.",
			},
		],
	},
	"ecommerce-seo": {
		title: "E-commerce SEO Services",
		shortTitle: "E-commerce SEO",
		path: "/services/ecommerce-seo",
		kicker: "Categories, products, revenue",
		description:
			"Turn product and category architecture into organic revenue with technical, content and conversion-aware ecommerce SEO.",
		metaTitle: "E-commerce SEO Services | SEOGrowth",
		metaDescription:
			"E-commerce SEO for category pages, products, faceted navigation, schema, content and organic revenue growth.",
		outcomes: [
			"Better category rankings",
			"Cleaner product indexation",
			"More organic revenue",
		],
		problems: [
			"Duplicate product URLs",
			"Faceted navigation crawl waste",
			"Thin category pages",
			"Missing product and review schema",
		],
		deliverables: [
			"Category and product SEO audit",
			"Facet and indexation controls",
			"Product schema recommendations",
			"Commercial content roadmap",
		],
		faqs: [
			{
				question: "Which ecommerce platforms do you support?",
				answer:
					"We support Shopify, WooCommerce, WordPress builds, Webflow, Wix, Squarespace and custom ecommerce stacks.",
			},
			{
				question: "Do you optimize product pages or category pages first?",
				answer:
					"We usually prioritize category and collection pages first because they capture broader commercial search demand, then improve product-level visibility.",
			},
		],
	},
	"shopify-seo": {
		title: "Shopify SEO Services",
		shortTitle: "Shopify SEO",
		path: "/services/shopify-seo",
		kicker: "Collections, apps, schema",
		description:
			"Solve Shopify SEO problems around collections, duplicate URLs, apps, product schema, speed and organic revenue growth.",
		metaTitle: "Shopify SEO Services | SEOGrowth",
		metaDescription:
			"Shopify SEO services for duplicate collections, product schema, collection pages, speed, app bloat and ecommerce growth.",
		outcomes: [
			"Cleaner collections",
			"Faster storefronts",
			"Stronger product visibility",
		],
		problems: [
			"Duplicate collections and product URLs",
			"Faceted filtering indexation issues",
			"App bloat and slow templates",
			"Missing collection content and schema",
		],
		deliverables: [
			"Shopify technical SEO audit",
			"Collection and product architecture plan",
			"Schema and metadata optimization",
			"Speed and app impact recommendations",
		],
		faqs: [
			{
				question: "Can Shopify rank without a blog?",
				answer:
					"Yes, but a blog or resource hub often helps build topical authority around collections and buying-intent searches.",
			},
			{
				question: "Do Shopify apps hurt SEO?",
				answer:
					"Some apps add script weight, duplicate content or schema conflicts. We audit app impact before recommending removals or replacements.",
			},
		],
	},
	"wordpress-seo": {
		title: "WordPress SEO Services",
		shortTitle: "WordPress SEO",
		path: "/services/wordpress-seo",
		kicker: "Plugins, taxonomy, speed",
		description:
			"Fix WordPress SEO issues caused by plugin bloat, taxonomy duplication, thin content, speed problems and weak architecture.",
		metaTitle: "WordPress SEO Services | SEOGrowth",
		metaDescription:
			"WordPress SEO services for plugin bloat, indexation, taxonomy duplicates, schema, speed, redirects and content architecture.",
		outcomes: [
			"Cleaner taxonomies",
			"Faster WordPress pages",
			"Better content architecture",
		],
		problems: [
			"Plugin bloat slowing the site",
			"Duplicate tags, categories and archives",
			"Broken redirects after redesigns",
			"Conflicting SEO plugin settings",
		],
		deliverables: [
			"WordPress SEO and plugin audit",
			"Taxonomy and archive indexation plan",
			"Schema and metadata cleanup",
			"Redirect and content architecture review",
		],
		faqs: [
			{
				question: "Do you work with Yoast, Rank Math and custom setups?",
				answer:
					"Yes. We audit the plugin setup and align titles, schema, canonicals, sitemaps and indexation rules with the site strategy.",
			},
			{
				question: "Can WordPress SEO include WooCommerce?",
				answer:
					"Yes. WooCommerce campaigns include product, category, schema, filter and content architecture improvements.",
			},
		],
	},
	"ai-seo": {
		title: "AI SEO and GEO Services",
		shortTitle: "AI SEO / GEO",
		path: "/services/ai-seo",
		kicker: "AI search visibility",
		description:
			"Improve visibility in AI-assisted search with entity optimization, structured content, FAQ readiness and brand mention tracking.",
		metaTitle: "AI SEO and GEO Services | SEOGrowth",
		metaDescription:
			"AI SEO, GEO and AEO services for AI search visibility audits, entity optimization, structured data and human-reviewed AI content workflows.",
		outcomes: [
			"Clearer entity signals",
			"Better answer readiness",
			"Stronger brand mentions",
		],
		problems: [
			"Brand absent from AI answers",
			"Content not structured for extraction",
			"No entity or author trust signals",
			"Mass AI content without quality control",
		],
		deliverables: [
			"AI search visibility audit",
			"Entity and structured data plan",
			"FAQ and answer-ready content map",
			"Human-reviewed AI-assisted content workflow",
		],
		faqs: [
			{
				question: "Is AI SEO separate from normal SEO?",
				answer:
					"No. Traditional SEO fundamentals still matter. AI SEO adds clearer entities, structured answers and brand visibility checks on top.",
			},
			{
				question: "Will AI-generated content rank?",
				answer:
					"Google rewards helpful, high-quality content. We use AI only with human expertise, original value and editorial review.",
			},
		],
	},
};

export const countryPages: Record<
	CountrySlug,
	{
		title: string;
		path: string;
		kicker: string;
		description: string;
		metaTitle: string;
		metaDescription: string;
		marketNeeds: string[];
		priorityServices: ServiceSlug[];
	}
> = {
	"australia-seo": {
		title: "SEO Company Australia",
		path: "/countries/australia-seo",
		kicker: "Australia SEO company",
		description:
			"SEO campaigns for Australian businesses that need stronger Google visibility, ecommerce revenue and local lead generation.",
		metaTitle: "SEO Company Australia | SEOGrowth",
		metaDescription:
			"Australia SEO company for technical SEO, Shopify SEO, WordPress SEO, local SEO, ecommerce SEO and AI search visibility.",
		marketNeeds: [
			"Local and national SEO coverage",
			"Shopify and ecommerce search growth",
			"Clear reporting for competitive markets",
		],
		priorityServices: ["technical-seo", "shopify-seo", "local-seo", "ai-seo"],
	},
	"usa-seo": {
		title: "SEO Agency USA",
		path: "/countries/usa-seo",
		kicker: "USA SEO agency",
		description:
			"Revenue-focused SEO for US companies competing across national, local, SaaS, ecommerce and service search markets.",
		metaTitle: "SEO Agency USA | SEOGrowth",
		metaDescription:
			"USA SEO agency for technical SEO, content SEO, ecommerce SEO, link acquisition, Shopify SEO and AI SEO.",
		marketNeeds: [
			"High-competition keyword strategy",
			"Content clusters for national visibility",
			"Authority building without spam shortcuts",
		],
		priorityServices: [
			"content-seo",
			"link-building",
			"ecommerce-seo",
			"ai-seo",
		],
	},
	"canada-seo": {
		title: "SEO Company Canada",
		path: "/countries/canada-seo",
		kicker: "Canada SEO company",
		description:
			"SEO for Canadian businesses that need trustworthy growth across local, bilingual, ecommerce and national campaigns.",
		metaTitle: "SEO Company Canada | SEOGrowth",
		metaDescription:
			"Canada SEO company for local SEO, technical SEO, WordPress SEO, Shopify SEO, content strategy and AI visibility.",
		marketNeeds: [
			"Local and province-specific search visibility",
			"WordPress and Shopify technical cleanup",
			"International SEO support for US expansion",
		],
		priorityServices: [
			"local-seo",
			"wordpress-seo",
			"technical-seo",
			"shopify-seo",
		],
	},
	"uk-seo": {
		title: "SEO Agency UK",
		path: "/countries/uk-seo",
		kicker: "UK SEO agency",
		description:
			"Organic search systems for UK businesses that need stronger technical foundations, content authority and qualified leads.",
		metaTitle: "SEO Agency UK | SEOGrowth",
		metaDescription:
			"UK SEO agency for technical SEO, content strategy, link building, ecommerce SEO, WordPress SEO and AI SEO.",
		marketNeeds: [
			"Technical cleanup for competitive SERPs",
			"Service and location page architecture",
			"Content authority for buyer-intent searches",
		],
		priorityServices: [
			"technical-seo",
			"content-seo",
			"link-building",
			"wordpress-seo",
		],
	},
};

export const platformProblems = [
	{
		platform: "Shopify",
		problems: [
			"Duplicate collections and product URLs",
			"Faceted navigation indexation",
			"Product and review schema gaps",
			"App bloat and slow storefronts",
			"Thin collection pages",
		],
	},
	{
		platform: "WordPress",
		problems: [
			"Plugin bloat",
			"Taxonomy and archive duplicates",
			"Schema conflicts",
			"Redirect chains",
			"Weak content architecture",
		],
	},
	{
		platform: "Other platforms",
		problems: [
			"WooCommerce product/category issues",
			"Webflow CMS architecture gaps",
			"Wix and Squarespace metadata limits",
			"Custom stack rendering and sitemap problems",
		],
	},
];

export const fiverrProblems = [
	"Cheap backlink packages from irrelevant sites",
	"Spammy link velocity and unnatural anchors",
	"Fake DA/DR metric promises",
	"Keyword stuffing that hurts conversions",
	"Thin AI content published without expertise",
	"Missing technical fixes behind vanity reports",
	"No transparent reporting or recovery plan",
	"Penalty and cleanup risks after bad SEO work",
];

export const testimonials = [
	{
		quote:
			"SEOGrowth found crawl waste, duplicate Shopify collections and missing content clusters that our previous agency never surfaced.",
		name: "Ecommerce founder",
		market: "Australia",
	},
	{
		quote:
			"The audit gave us a clear technical roadmap and a safer authority strategy after a messy backlink campaign.",
		name: "B2B marketing lead",
		market: "USA",
	},
	{
		quote:
			"We finally had SEO reporting that connected rankings, content, links and revenue instead of isolated vanity metrics.",
		name: "Service business owner",
		market: "Canada",
	},
];

export const globalFaqs = [
	{
		question: "Which countries does SEOGrowth serve?",
		answer:
			"We serve businesses in Australia, USA, Canada, UK and other English-speaking international markets.",
	},
	{
		question: "Do you work with Shopify and WordPress?",
		answer:
			"Yes. Shopify and WordPress are core platform specialities, including technical SEO, schema, content architecture and speed issues.",
	},
	{
		question: "Can you fix bad SEO or Fiverr backlink problems?",
		answer:
			"Yes. We begin with a technical and backlink audit, then prioritize risk reduction, cleanup, content quality and safer authority growth.",
	},
];

export const pricingPlans = [
	{
		tier: "Foundation",
		price: "$1,800/mo",
		description: "For smaller sites that need a clean SEO foundation.",
		features: [
			"Technical SEO audit",
			"8 content pieces or optimizations",
			"5 link opportunities",
			"Monthly reporting",
			"1 strategy call",
		],
	},
	{
		tier: "Growth",
		price: "$4,200/mo",
		description: "For companies ready to scale organic revenue.",
		features: [
			"Full technical overhaul",
			"20 content pieces or optimizations",
			"15 link opportunities",
			"Live dashboard",
			"Bi-weekly strategy calls",
		],
		featured: true,
	},
	{
		tier: "Authority",
		price: "$9,500/mo",
		description:
			"For competitive national, ecommerce and international campaigns.",
		features: [
			"Dedicated SEO director",
			"Unlimited strategic content roadmap",
			"30+ link opportunities",
			"Digital PR campaigns",
			"Weekly calls and priority support",
		],
	},
];
