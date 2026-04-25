'use client'

export default function Strip() {
  const items = [
    'Captação',
    'Edição',
    'Planejamento',
    'Precificação',
    'Entrega ao cliente',
    'Primeiros projetos',
    'Posicionamento',
    'Portfólio',
  ]

  return (
    <div className="bg-charcoal overflow-hidden py-5">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 flex-shrink-0">
            <span className="font-display italic text-sm text-cream/50">{item}</span>
            <span className="font-body text-xs uppercase tracking-widest text-accent font-bold">·</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
