import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { DATA } from '../data/data';
import HeroFX from '../graphics/HeroFX.jsx';
import Orbits from '../graphics/Orbits.jsx';

const KPI_SEGMENTS = [
  { id: 1, label: 'Product Management', percent: 50, color: '#22d3ee' },
  { id: 2, label: 'AI / ML / Emerging Tech', percent: 25, color: '#f97316' },
  { id: 3, label: 'Software Development', percent: 10, color: '#38bdf8' },
  { id: 4, label: 'Business Intelligence', percent: 10, color: '#6366f1' },
  { id: 5, label: 'Others', percent: 5, color: '#14b8a6' },
];

const IMPACT_METRICS = [
  { value: '92%', label: 'Offline relevance', detail: 'Calibrated eval loops for grounded answers' },
  { value: '70%', label: 'Cost / request ↓', detail: 'Elastic inference, smart model routing' },
  { value: '3k+', label: 'Launch requests', detail: 'Product rollouts with GTM enablement' },
];

const HERO_PILLARS = (DATA.hero?.bullets || []).slice(0, 3);

const DONUT_CENTER = 80;
const DONUT_OUTER_RADIUS = 70;
const DONUT_INNER_RADIUS = 40;
const DONUT_GAP_DEG = 1.4;

const KPI_SEGMENT_PATHS = (() => {
  let cursor = -90;
  return KPI_SEGMENTS.map((segment) => {
    const sweep = (segment.percent / 100) * 360;
    const startAngle = cursor + DONUT_GAP_DEG;
    const endAngle = cursor + sweep - DONUT_GAP_DEG;
    const path = describeSegment(
      DONUT_CENTER,
      DONUT_OUTER_RADIUS,
      DONUT_INNER_RADIUS,
      startAngle,
      endAngle
    );
    cursor += sweep;
    return { ...segment, path };
  });
})();

function describeSegment(cx, outerR, innerR, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cx, outerR, startAngle);
  const endOuter = polarToCartesian(cx, cx, outerR, endAngle);
  const startInner = polarToCartesian(cx, cx, innerR, endAngle);
  const endInner = polarToCartesian(cx, cx, innerR, startAngle);
  const largeArc = endAngle - startAngle >= 180 ? 1 : 0;

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${endInner.x} ${endInner.y}`,
    'Z',
  ].join(' ');
}

function polarToCartesian(cx, cy, radius, angleDeg) {
  const angleRad = (Math.PI / 180) * angleDeg;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

export default function HomePage() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0b0d12]">
      <div className="absolute inset-0 -z-50 pointer-events-none" aria-hidden>
        <HeroFX />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <HeroColumn />
        <KPIVisualization />
      </div>
    </section>
  );
}

function HeroColumn() {
  return (
    <div className="relative space-y-8">
      <div className="absolute -inset-x-6 -top-10 bottom-10 -z-10 rounded-3xl border border-white/10 bg-white/[0.03] opacity-0 blur-3xl md:opacity-35" aria-hidden />

      <div className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden />
          AI Product Manager
        </span>

        <h1 className="font-display text-[46px] font-semibold leading-[1.08] tracking-tight text-white md:text-[72px]">
          <span className="block text-white/85">{DATA.name.split(' ')[0]}</span>
          <span className="block bg-gradient-to-r from-sky-400 via-teal-300 to-fuchsia-400 bg-clip-text text-transparent">
            {DATA.name.split(' ').slice(1).join(' ')}
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-zinc-100 md:text-2xl">
          I architect AI products that feel inevitable—strategic vision, ML rigor, and launch discipline wrapped in experiences users love.
        </p>
      </div>

      <p className="max-w-xl text-sm text-zinc-500 md:text-base">
        From 0→1 copilots to scaled decision systems, I orchestrate cross-functional teams so AI reaches production with trust, measurable lift, and cost clarity.
      </p>

      <div className="flex flex-wrap gap-2">
        {DATA.hero.chips.slice(0, 4).map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white/85"
          >
            {chip}
          </span>
        ))}
      </div>

      {HERO_PILLARS.length > 0 && (
        <div className="grid gap-3 md:grid-cols-3">
          {HERO_PILLARS.map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur-sm"
            >
              {pillar}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          onClick={() => (window.location.hash = '#projects')}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black shadow-[0_18px_45px_rgba(255,255,255,0.12)] transition-transform duration-200 ease-[0.22,1,0.36,1] hover:scale-[1.02]"
        >
          <span>View Projects</span>
          <ArrowRight className="h-4 w-4" />
        </button>

        <a
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition duration-200 ease-[0.22,1,0.36,1] hover:bg-white/10"
        >
          <Download className="h-4 w-4" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}

function KPIVisualization() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`relative w-full rounded-[32px] border border-white/12 bg-[#11151f]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-600 ease-[0.22,1,0.36,1] md:p-10 ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 left-4 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" aria-hidden />
        <div className="absolute inset-0 -z-10">
          <Orbits className="h-full w-full opacity-[0.18]" />
        </div>
      </div>

      <div className="relative z-10 space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">KPI snapshot</p>
            <h2 className="font-display text-[28px] font-semibold text-white md:text-[32px]">
              Focus spread across the product stack
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/65">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            100% allocation
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/10 opacity-60" aria-hidden />
            <svg
              viewBox="0 0 160 160"
              role="img"
              aria-label="Circular chart showing distribution across product management, AI and ML, software development, business intelligence, and other initiatives."
              className="relative z-10 h-full w-full drop-shadow-[0_20px_55px_rgba(34,211,238,0.35)]"
            >
              <circle cx="80" cy="80" r="74" fill="rgba(7,11,18,0.9)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
              {KPI_SEGMENT_PATHS.map((segment) => (
                <path key={segment.id} d={segment.path} fill={segment.color} opacity="0.95" />
              ))}
              <circle cx="80" cy="80" r="34" fill="#0b0d12" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
            </svg>
            <div className="pointer-events-none absolute inset-[34%] flex flex-col items-center justify-center text-center">
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/60">Total focus</span>
              <span className="mt-1 font-display text-3xl font-semibold text-white">100%</span>
              <span className="mt-1 text-[11px] text-white/60">Strategy · Delivery · Insight</span>
            </div>
          </div>

          <div className="space-y-3">
            {KPI_SEGMENTS.map((segment) => (
              <div
                key={segment.id}
                className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full text-xs font-semibold text-black"
                    style={{ background: segment.color }}
                  >
                    {segment.id}
                  </span>
                  <span className="font-medium tracking-tight text-white/95">{segment.label}</span>
                </div>
                <span className="text-xs font-semibold text-white/70">{segment.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-[#0c111a]/90 px-4 py-4 text-white shadow-[0_16px_30px_rgba(0,0,0,0.35)]"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Impact</p>
              <p className="mt-1 font-display text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/60">{metric.label}</p>
              <p className="mt-2 text-xs text-white/65">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
