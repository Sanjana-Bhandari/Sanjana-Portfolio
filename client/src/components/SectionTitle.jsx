import Reveal from './Reveal';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent-400">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-400" />
    </Reveal>
  );
}
