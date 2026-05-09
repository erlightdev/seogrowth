import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ReactNode } from "react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AnimatedPage({ children }: { children: ReactNode }) {
	const scope = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				gsap.set(".seo-reveal", { clearProps: "all" });
				return;
			}

			gsap.utils.toArray<HTMLElement>(".seo-reveal").forEach((element) => {
				gsap.from(element, {
					autoAlpha: 0,
					y: 18,
					duration: 0.65,
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 86%",
						once: true,
					},
				});
			});
		},
		{ scope },
	);

	return <div ref={scope}>{children}</div>;
}
