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

			ScrollTrigger.batch(".seo-reveal", {
				start: "top 86%",
				once: true,
				onEnter: (elements) => {
					gsap.fromTo(
						elements,
						{ autoAlpha: 0, y: 18 },
						{
							autoAlpha: 1,
							y: 0,
							duration: 0.65,
							ease: "power2.out",
							overwrite: "auto",
							stagger: 0.08,
						},
					);
				},
			});
		},
		{ scope },
	);

	return <div ref={scope}>{children}</div>;
}
