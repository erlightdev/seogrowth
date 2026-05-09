import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { testimonials } from "@/content/seo-site";

export function TestimonialsCarousel() {
	return (
		<section className="border-rule border-b bg-paper">
			<div className="site-container border-rule px-6 py-16 lg:border-x lg:px-12">
				<div className="seo-reveal mb-8 flex items-end justify-between gap-8">
					<div>
						<div className="mb-4 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							Client signal
						</div>
						<h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							Useful audits.
							<br />
							<em className="text-muted-text">Cleaner execution.</em>
						</h2>
					</div>
				</div>
				<Swiper
					spaceBetween={1}
					slidesPerView={1}
					breakpoints={{
						768: { slidesPerView: 2 },
						1100: { slidesPerView: 3 },
					}}
					className="seo-reveal bg-rule"
				>
					{testimonials.map((item) => (
						<SwiperSlide key={`${item.name}-${item.market}`} className="h-auto">
							<figure className="h-full bg-paper p-8 lg:p-10">
								<blockquote className="min-h-[128px] font-serif text-[28px] leading-[1.12] tracking-[-0.02em]">
									“{item.quote}”
								</blockquote>
								<figcaption className="mt-8 font-mono text-[11px] text-muted-text uppercase tracking-[0.08em]">
									{item.name} / {item.market}
								</figcaption>
							</figure>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
