'use client'

import { Clapper } from './Clapper'

export function Hero() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--warm-white)' }}>
      <div style={{ content: "''", position: 'absolute', top: '-60px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 rounded mb-8 animate-fade-in-up" style={{ background: 'var(--charcoal)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          Workshop Presencial · Brasília
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight" style={{ color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>
              Pare de fazer<br />
              audiovisual por<br />
              <em style={{ color: 'var(--accent-dark)', fontStyle: 'italic' }}>hobby.</em>
            </h1>

            <p className="text-lg leading-relaxed font-light max-w-md" style={{ color: 'var(--mid)' }}>
              Em 2 dias intensivos você aprende a transformar sua câmera em uma fonte de renda real — do primeiro cliente à entrega profissional.
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-8 py-6">
              {[
                { label: 'Formato', value: 'Presencial' },
                { label: 'Datas', value: '16 e 17 de Maio' },
                { label: 'Vagas', value: 'Limitadas' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--muted)' }}>{item.label}</span>
                  <span className="font-display text-xl font-bold" style={{ color: item.value === 'Limitadas' ? 'var(--accent-dark)' : 'var(--charcoal)' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#investimento"
                className="inline-flex items-center justify-center gap-2 px-9 py-4.5 font-medium transition-all duration-200 rounded text-white relative overflow-hidden group hover:after:translate-x-0"
                style={{ background: 'var(--charcoal)' }}
              >
                <span className="relative z-10">Garantir minha vaga</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10 group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#programa" className="inline-flex items-center justify-center gap-2 px-9 py-4.5 font-medium transition-all duration-200 rounded border" style={{ borderColor: 'var(--border)', color: 'var(--mid)' }}>
                Ver o programa completo
              </a>
            </div>
          </div>

          {/* Right: Clapper animation */}
          <div className="hidden lg:flex items-center justify-center">
            <Clapper />
          </div>
        </div>

        {/* Mobile clapper */}
        <div className="lg:hidden flex items-center justify-center mt-12 py-8">
          <Clapper />
        </div>
      </div>
    </section>
  )
}
