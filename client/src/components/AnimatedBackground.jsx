import { useMemo } from 'react';

// Animated hero background: drifting gradient blobs, a faint grid and twinkling particles.
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-10 h-96 w-96 animate-blob rounded-full bg-brand-600/30 blur-3xl" />
      <div
        className="absolute -right-24 top-1/3 h-96 w-96 animate-blob rounded-full bg-accent-500/25 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ animationDelay: '-8s' }}
      />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float rounded-full bg-white/70"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
