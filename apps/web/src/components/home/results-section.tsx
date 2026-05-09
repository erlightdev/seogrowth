"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const CASE_STUDIES = [
	{
		name: "NorthPeak SaaS",
		tag: "B2B Software",
		metrics: [
			{ val: "+418%", label: "Organic traffic" },
			{ val: "+$2.1M", label: "Pipeline attributed" },
		],
		data: {
			before: [
				8200, 8800, 9100, 9500, 9800, 10200, 10600, 11100, 11800, 12400, 13200,
				14000,
			],
			after: [
				14000, 18200, 24600, 31800, 38500, 44200, 50100, 55800, 62300, 68700,
				74200, 80400,
			],
		},
	},
	{
		name: "Archouse Commerce",
		tag: "E-commerce",
		metrics: [
			{ val: "+274%", label: "Organic revenue" },
			{ val: "3,200+", label: "Page-1 keywords" },
		],
		data: {
			before: [
				12000, 12400, 12100, 13200, 13800, 14100, 14600, 15200, 15800, 16100,
				16500, 17000,
			],
			after: [
				17000, 21500, 27800, 34200, 40600, 46800, 53200, 59700, 65400, 70900,
				76200, 82500,
			],
		},
	},
	{
		name: "Vantage Legal",
		tag: "Professional Services",
		metrics: [
			{ val: "+190%", label: "Lead volume" },
			{ val: "-42%", label: "Cost per lead" },
		],
		data: {
			before: [
				3100, 3300, 3200, 3500, 3600, 3800, 3900, 4100, 4200, 4400, 4500, 4700,
			],
			after: [
				4700, 6200, 8100, 10500, 12800, 14900, 16700, 18400, 20100, 21600,
				22900, 24200,
			],
		},
	},
];

function drawChart(
	canvas: HTMLCanvasElement,
	data: { before: number[]; after: number[] },
) {
	const dpr = window.devicePixelRatio || 1;
	canvas.width = canvas.offsetWidth * dpr;
	canvas.height = canvas.offsetHeight * dpr;
	const c = canvas.getContext("2d");
	if (!c) return;
	c.scale(dpr, dpr);

	const W = canvas.offsetWidth;
	const H = canvas.offsetHeight;
	const all = [...data.before, ...data.after];
	const max = Math.max(...all) * 1.1;
	const pad = { t: 20, r: 20, b: 30, l: 50 };
	const cW = W - pad.l - pad.r;
	const cH = H - pad.t - pad.b;

	c.clearRect(0, 0, W, H);

	// Grid
	for (let i = 0; i <= 4; i++) {
		const y = pad.t + cH - (i / 4) * cH;
		c.beginPath();
		c.moveTo(pad.l, y);
		c.lineTo(pad.l + cW, y);
		c.strokeStyle = "rgba(10,10,8,0.07)";
		c.lineWidth = 0.5;
		c.stroke();
		c.fillStyle = "rgba(10,10,8,0.35)";
		c.font = "9px JetBrains Mono, monospace";
		c.textAlign = "right";
		c.fillText(`${Math.round(((i / 4) * max) / 1000)}k`, pad.l - 8, y + 3);
	}

	const drawLine = (pts: number[], color: string, dashed: boolean) => {
		const xStep = cW / (pts.length - 1);
		c.beginPath();
		c.setLineDash(dashed ? [4, 4] : []);
		pts.forEach((v, i) => {
			const x = pad.l + i * xStep;
			const y = pad.t + cH - (v / max) * cH;
			i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
		});
		c.strokeStyle = color;
		c.lineWidth = 2;
		c.stroke();
		const lx = pad.l + (pts.length - 1) * xStep;
		const ly = pad.t + cH - (pts[pts.length - 1] / max) * cH;
		c.beginPath();
		c.arc(lx, ly, 4, 0, Math.PI * 2);
		c.fillStyle = color;
		c.fill();
	};

	drawLine(data.before, "rgba(10,10,8,0.25)", true);
	drawLine(data.after, "#c8f53a", false);

	c.font = "9px JetBrains Mono, monospace";
	c.setLineDash([]);
	c.textAlign = "left";
	c.fillStyle = "rgba(10,10,8,0.4)";
	c.fillText("BEFORE", pad.l + 5, pad.t + 15);
	c.fillStyle = "#8ab520";
	c.fillText("AFTER", pad.l + 60, pad.t + 15);
}

export function ResultsSection() {
	const [active, setActive] = useState(0);
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const redraw = useCallback((idx: number) => {
		if (canvasRef.current) drawChart(canvasRef.current, CASE_STUDIES[idx].data);
	}, []);

	useEffect(() => {
		redraw(active);
	}, [active, redraw]);
	useEffect(() => {
		const ro = new ResizeObserver(() => redraw(active));
		if (canvasRef.current) ro.observe(canvasRef.current);
		return () => ro.disconnect();
	}, [active, redraw]);

	return (
		<section id="results" className="border-rule border-b bg-paper">
			<div className="site-container border-rule lg:border-x">
				{/* Header */}
				<div className="grid grid-cols-1 items-end gap-8 border-rule border-b px-6 py-16 pb-10 lg:grid-cols-2 lg:px-12">
					<div>
						<div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-muted-text uppercase tracking-[0.12em]">
							<span className="inline-block h-px w-4 bg-muted-text" />
							Case studies
						</div>
						<h2 className="font-normal font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.02em]">
							Numbers
							<br />
							<em className="text-muted-text italic">worth sharing</em>
						</h2>
					</div>
					<p className="max-w-[42ch] self-end text-[15px] text-muted-text leading-[1.7] lg:justify-self-end">
						Results from actual clients across SaaS, e-commerce, professional
						services, and media verticals.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2">
					{/* Case study list */}
					<div className="border-rule border-b p-6 lg:border-r lg:border-b-0 lg:px-12 lg:py-20">
						{CASE_STUDIES.map((cs, i) => (
							<button
								type="button"
								key={cs.name}
								onClick={() => setActive(i)}
								className={`mb-6 w-full cursor-pointer border p-6 text-left transition-colors last:mb-0 ${
									active === i
										? "border-ink bg-ink/[0.02]"
										: "border-rule hover:border-ink"
								}`}
							>
								<div className="mb-4 flex items-start justify-between">
									<div className="font-bold text-[16px] tracking-[-0.01em]">
										{cs.name}
									</div>
									<div className="bg-ink/[0.05] px-2.5 py-1 font-mono text-[10px] text-muted-text uppercase tracking-[0.08em]">
										{cs.tag}
									</div>
								</div>
								<div className="mt-2 flex gap-6">
									{cs.metrics.map(({ val, label }) => (
										<div key={label} className="flex items-baseline gap-1">
											<div className="font-normal font-serif text-[28px] text-ink tracking-[-0.02em]">
												{val}
											</div>
											<div className="font-mono text-[10px] text-muted-text uppercase tracking-[0.06em]">
												{label}
											</div>
										</div>
									))}
								</div>
							</button>
						))}
					</div>

					{/* Chart */}
					<div className="p-6 lg:px-12 lg:py-20">
						<div className="relative mb-4 h-[280px] overflow-hidden border border-rule">
							<canvas ref={canvasRef} className="h-full w-full" />
						</div>
						<p className="font-mono text-[13px] text-muted-text tracking-[0.04em]">
							Monthly organic sessions before &amp; after engagement
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
