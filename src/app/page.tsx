'use client'

import { useEffect, useState } from 'react'
import { Hero } from '@/components/Hero'
import Countdown from '@/components/Countdown'
import TopBar from '@/components/TopBar'
import Strip from '@/components/Strip'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      <TopBar />
      <Countdown />
      <Hero />
      <Strip />

      {/* PAIN SECTION */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">Por que você ainda não está lucrando?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ borderRight: '1px solid var(--border)' }}>
            <div className="scroll-reveal" style={{ padding: '60px 48px' }}>
              <h3 className="font-display text-3xl font-bold mb-8">❌ Onde a maioria trava</h3>
              <ul className="space-y-4">
                {[
                  'Tem equipamento, tem vontade — mas não sabe cobrar sem sentir que está "pedindo demais"',
                  'Assiste tutorial atrás de tutorial, mas na hora de fechar um cliente congela',
                  'Entrega o trabalho e o cliente some — sem feedback, sem indicação',
                  'Não sabe se o problema é a câmera, o software ou simplesmente como se vender',
                  'Trata audiovisual como segundo plano porque nunca teve método de verdade',
                ].map((item, i) => (
                  <li key={i} className="text-base text-mid leading-relaxed flex gap-3 stagger-item">
                    <span className="flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal" style={{ padding: '60px 48px' }}>
              <h3 className="font-display text-3xl font-bold mb-8">✓ O que muda depois do workshop</h3>
              <ul className="space-y-4">
                {[
                  'Um processo claro do briefing à entrega — sem depender de improviso',
                  'Saber precificar, apresentar proposta e fechar sem pedir desconto',
                  'Sair do dia 17 com um projeto real desenvolvido do zero',
                  'Entender onde está o dinheiro no audiovisual mesmo para quem está começando',
                  'Contato direto com um profissional ativo no mercado de Brasília',
                ].map((item, i) => (
                  <li key={i} className="text-base text-mid leading-relaxed flex gap-3 stagger-item">
                    <span className="flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">Para quem é este workshop</p>
          <h2 className="font-display text-5xl font-bold mb-12 scroll-reveal">
            Feito pra quem quer <span style={{ color: 'var(--accent-dark)', fontStyle: 'italic' }}>resultados reais</span> com audiovisual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ background: 'var(--cream)' }}>
            {[
              { icon: '🎥', title: 'Iniciantes', desc: 'Você tem câmera ou celular, ama criar conteúdo visual, mas ainda não sabe por onde começar a cobrar pelo seu trabalho.' },
              { icon: '🛠', title: 'Freelancers', desc: 'Já pega alguns trabalhos, mas sente que está na fase "amigo que filma barato" e quer se profissionalizar de vez.' },
              { icon: '📱', title: 'Criadores de conteúdo', desc: 'Cria para redes sociais e quer expandir seus serviços para clientes — marcas, eventos, produtos — com qualidade e método.' },
            ].map((card, i) => (
              <div key={i} className="stagger-item p-8" style={{ background: 'var(--cream)', border: '1px solid var(--border-light)', borderLeft: i === 0 ? '1px solid var(--border-light)' : undefined, borderRight: i === 2 ? '1px solid var(--border-light)' : undefined }}>
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-mid text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section id="programa" className="py-20" style={{ background: 'var(--charcoal)', color: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-4 scroll-reveal opacity-80">O que você vai aprender</p>
          <h2 className="font-display text-5xl font-bold mb-12 scroll-reveal">
            Dois dias que mudam como você trabalha
          </h2>
          <p className="text-lg mb-12 scroll-reveal opacity-75">Cada dia foi pensado com intenção. O primeiro te dá a base e a visão. O segundo coloca tudo em prática com um projeto real.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                day: 'Dia 01',
                title: 'Alinhamento e Aprendizado',
                date: 'Sexta-feira, 16 de Maio',
                items: ['Como o mercado de audiovisual funciona em Brasília e onde estão as oportunidades reais', 'Fundamentos de captação: enquadramentos, luz e áudio que vendem', 'Como montar um portfólio que atrai clientes sem precisar de anos de experiência', 'Precificação: como calcular o valor do seu trabalho e apresentar com confiança', 'Captação de clientes: do primeiro contato ao fechamento do contrato', 'Fluxo de trabalho profissional — o que todo cliente espera e poucos freelancers entregam'],
              },
              {
                day: 'Dia 02',
                title: 'Mão na Massa',
                date: 'Sábado, 17 de Maio',
                items: ['Briefing na prática: como levantar as necessidades do cliente de forma estruturada', 'Planejamento de produção: cronograma, roteiro e checklist', 'Captação ao vivo: filmagem supervisionada com feedback em tempo real', 'Fluxo de edição orientado: organização, corte, cor e entrega', 'Entrega profissional: formatos, nomenclatura e comunicação pós-projeto', 'Apresentação dos projetos e próximos passos de cada participante'],
              },
            ].map((card, i) => (
              <div key={i} className="stagger-item border rounded" style={{ borderColor: 'rgba(245,240,232,0.12)' }}>
                <div style={{ background: 'rgba(200,169,126,0.15)', padding: '24px 32px', borderBottom: '1px solid rgba(245,240,232,0.08)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">{card.day}</p>
                  <h3 className="font-display text-3xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-75">{card.date}</p>
                </div>
                <div style={{ padding: '32px' }}>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm opacity-75 leading-relaxed">
                        <span className="flex-shrink-0 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">O que você leva embora</p>
          <h2 className="font-display text-5xl font-bold mb-12 scroll-reveal">
            Não é teoria. É <span style={{ color: 'var(--accent-dark)', fontStyle: 'italic' }}>método aplicado.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ul className="space-y-5">
              {[
                { num: '01', text: 'Um projeto completo desenvolvido por você — do briefing à entrega, com orientação ao vivo no dia 17.' },
                { num: '02', text: 'Um método de precificação real que você sai usando — sem chutes, sem subvalorizações.' },
                { num: '03', text: 'Clareza sobre onde buscar clientes no mercado de Brasília e como se apresentar com credibilidade.' },
                { num: '04', text: 'Acesso a materiais e templates usados em projetos reais — proposta, contrato e checklist de produção.' },
              ].map((item, i) => (
                <li key={i} className="stagger-item flex gap-6 p-6 border rounded" style={{ borderColor: 'var(--border-light)', background: 'var(--cream)' }}>
                  <span className="font-display text-3xl font-bold opacity-60" style={{ color: 'var(--accent-dark)' }}>{item.num}</span>
                  <span className="text-mid text-base leading-relaxed font-light">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MENTOR SECTION */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">Quem vai te guiar</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="scroll-reveal" style={{ aspectRatio: '4/5', background: 'var(--charcoal)', borderRadius: '3px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '24px' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,24,0.8) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '48px', opacity: '0.2' }}>📷</div>
                <div style={{ fontSize: '11px', color: 'rgba(245,240,232,0.3)', textAlign: 'center' }}>Foto não disponível</div>
              </div>
              <div style={{ position: 'relative', zIndex: 1, background: 'var(--accent)', color: 'var(--charcoal)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px' }}>
                Instrutor
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-display text-5xl font-bold mb-2 scroll-reveal">Daniel Dutra</h3>
              <p className="text-accent-dark text-sm font-bold uppercase tracking-widest mb-6 scroll-reveal">Fotojornalista & Profissional de Audiovisual · Brasília</p>
              <p className="text-mid text-base leading-relaxed font-light mb-6 scroll-reveal">
                Profissional ativo no mercado audiovisual de Brasília, com passagem por coberturas editoriais e eventos de alto nível. Combina visão técnica de quem trabalha na área com a capacidade de ensinar o que realmente funciona no dia a dia de quem está construindo sua carreira.
              </p>
              <p className="text-mid text-base leading-relaxed font-light mb-6 scroll-reveal">
                O workshop <em>Vivendo de Audiovisual</em> nasce da própria trajetória: um método construído na prática, não no teórico — pensado para encurtar o caminho de quem quer fazer disso uma renda real.
              </p>
              <div className="flex flex-wrap gap-2 scroll-reveal">
                {['Fotojornalismo', 'Cobertura editorial', 'Produção audiovisual', 'Brasília', 'Eventos'].map((tag, i) => (
                  <span key={i} className="text-sm border rounded-full px-4 py-1.5" style={{ borderColor: 'var(--border)', color: 'var(--mid)', background: 'var(--warm-white)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section id="investimento" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">Investimento</p>
          <h2 className="font-display text-5xl font-bold mb-12 scroll-reveal">
            Uma decisão que se paga no primeiro cliente.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              {[
                '2 dias de imersão presencial — aprendizado e prática supervisionada em sequência',
                'Projeto real desenvolvido no Dia 2 — você sai com algo concreto no portfólio',
                'Templates de proposta, contrato e checklist — usados em projetos reais',
                'Método de precificação prático — sai calculando seu valor já na segunda-feira',
                'Acesso ao instrutor durante os dois dias com feedback personalizado',
                'Turma pequena e exclusiva — atenção real, não sala de 200 pessoas',
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 stagger-item">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" viewBox="0 0 12 12" fill="none">
                    <polyline points="2,6 5,9 10,3" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-mid text-base leading-relaxed font-light">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="stagger-item p-10 rounded" style={{ background: 'var(--charcoal)', color: 'var(--cream)', height: 'fit-content' }}>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-6">Investimento Total</p>
              <div className="rounded px-4 py-3 mb-6 text-center" style={{ background: 'rgba(200,169,126,0.15)', border: '1px solid rgba(200,169,126,0.3)' }}>
                <p className="text-sm font-medium">⚡ Vagas limitadas — turma reduzida</p>
              </div>
              <div className="mb-6">
                <div className="font-display text-5xl font-bold">
                  <span className="text-lg">R$</span> 650 <span className="text-lg opacity-75">à vista</span>
                </div>
                <p className="text-sm opacity-75 mt-2">ou em até 12x sem juros no cartão</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }} className="my-6" />
              <ul className="space-y-3 mb-8 text-sm opacity-80">
                {[
                  '2 dias de workshop presencial',
                  'Material de apoio digital',
                  'Templates profissionais',
                  'Projeto desenvolvido no Dia 2',
                  'Acesso direto ao instrutor',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: 'var(--accent)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-4 font-bold text-sm rounded" style={{ background: 'var(--accent)', color: 'var(--charcoal)' }}>
                Garantir minha vaga agora
              </button>
              <p className="text-xs opacity-50 text-center mt-4">🔒 Pagamento seguro via Hotmart</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: 'var(--cream)', borderTop: '1px solid var(--border-light)' }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-4 scroll-reveal">Dúvidas frequentes</p>
          <h2 className="font-display text-4xl font-bold mb-12 scroll-reveal">Antes de fechar, tire suas dúvidas</h2>

          <div className="space-y-0 border-t" style={{ borderColor: 'var(--border-light)' }}>
            {[
              { q: 'Preciso ter equipamento profissional para participar?', a: 'Não. O workshop foi pensado para quem está começando. Um celular com câmera decente já é suficiente para participar do Dia 2. O foco é no método e no processo — não no equipamento.' },
              { q: 'Onde vai acontecer o workshop presencialmente?', a: 'O endereço exato será enviado por e-mail após a confirmação da inscrição. O workshop acontece em Brasília/DF.' },
              { q: 'Qual o horário dos dois dias?', a: 'Os horários serão confirmados com os participantes inscritos. Planeje os dois dias completos em sua agenda — sexta 16 e sábado 17 de maio.' },
              { q: 'Funciona para quem nunca filmou nada profissionalmente?', a: 'Sim. O Dia 1 foi estruturado exatamente para alinhar a base — mercado, fundamentos e método — antes de partir para a prática no Dia 2. Você não precisa de experiência anterior.' },
              { q: 'As vagas são realmente limitadas?', a: 'Sim. A turma é intencionalmente pequena para garantir atenção individual durante o Dia 2. Quando as vagas fecharem, não haverá lista de espera para esta edição.' },
            ].map((faq, i) => (
              <details key={i} className="group border-b scroll-reveal" style={{ borderColor: 'var(--border-light)' }}>
                <summary className="flex justify-between items-center cursor-pointer font-medium py-6 px-0 hover:opacity-75 transition-opacity">
                  {faq.q}
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div style={{ paddingBottom: '24px', color: 'var(--mid)', fontSize: '15px', lineHeight: '1.8', fontWeight: 300 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--charcoal)', color: 'var(--cream)' }} className="py-24 text-center relative overflow-hidden">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,169,126,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <p className="text-xs font-semibold uppercase tracking-wide mb-6 scroll-reveal opacity-75">Última chamada</p>
          <h2 className="font-display text-6xl font-bold mb-6 scroll-reveal">Sua câmera pode ser sua <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>renda.</em></h2>
          <p className="text-lg mb-12 scroll-reveal opacity-75">16 e 17 de Maio · Presencial · Brasília · Vagas limitadas</p>
          <button className="scroll-reveal px-12 py-4 text-lg font-bold rounded" style={{ background: 'var(--accent)', color: 'var(--charcoal)' }}>
            Quero minha vaga agora →
          </button>
          <p className="text-sm opacity-50 mt-6">🔒 Pagamento seguro · Hotmart</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111110', color: 'rgba(245,240,232,0.25)' }} className="text-center py-8 text-xs tracking-wide">
        <div className="max-w-6xl mx-auto px-6">
          <p>© 2025 Vivendo de Audiovisual · Todos os direitos reservados · <a href="#" className="opacity-75 hover:opacity-100">Política de Privacidade</a></p>
        </div>
      </footer>
    </>
  )
}
