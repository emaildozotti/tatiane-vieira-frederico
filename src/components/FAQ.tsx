import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 8 FAQ)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'd\u00favidas frequentes',
  heading: 'D\u00favidas antes de dar o primeiro passo?',
  faqs: [
    {
      q: 'Ser\u00e1 que vai doer mexer no passado?',
      a: 'O processo \u00e9 acompanhado e seguro. Voc\u00ea n\u00e3o precisa reviver tudo. A gente trabalha no ritmo que o seu ps\u00edquico sustenta. Mexer no que d\u00f3i n\u00e3o significa sofrer mais. Significa parar de carregar sozinha.',
    },
    {
      q: 'J\u00e1 fiz terapia e n\u00e3o funcionou. Qual a diferen\u00e7a?',
      a: 'A maioria dos processos trabalha uma camada. O M\u00e9todo MRE integra tr\u00eas: a investiga\u00e7\u00e3o do inconsciente, a revela\u00e7\u00e3o dos padr\u00f5es simb\u00f3licos e o suporte energ\u00e9tico. Quando as tr\u00eas se encontram, o ciclo muda.',
    },
    {
      q: 'Preciso acreditar em Reiki ou espiritualidade para funcionar?',
      a: 'N\u00e3o. A camada energ\u00e9tica \u00e9 um suporte ao processo, n\u00e3o uma cren\u00e7a obrigat\u00f3ria. O que sustenta o m\u00e9todo \u00e9 a psican\u00e1lise. As outras camadas complementam, no seu ritmo e abertura.',
    },
    {
      q: 'Quanto tempo leva o processo?',
      a: 'N\u00e3o existe prazo fixo. Cada mulher tem seu tempo ps\u00edquico. O importante \u00e9 respeitar o ritmo sem pressa e sem estagna\u00e7\u00e3o. A sess\u00e3o de clareza ajuda a estimar o caminho.',
    },
    {
      q: 'As sess\u00f5es s\u00e3o online ou presenciais?',
      a: 'Ambas as op\u00e7\u00f5es est\u00e3o dispon\u00edveis. As sess\u00f5es online s\u00e3o por v\u00eddeo, em ambiente reservado. As presenciais acontecem em Belo Horizonte. Na sess\u00e3o de clareza definimos o formato ideal para voc\u00ea.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <div
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span className="eyebrow-ultra" style={{ color: 'var(--color-secondary)' }}>
              {COPY.eyebrow}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <div className="flex flex-col gap-0">
          {COPY.faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)`,
                  ...(i === COPY.faqs.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-primary) 12%, transparent)` }
                    : {}),
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '1.25rem 0',
                  }}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-base md:text-lg"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-primary)',
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: 'var(--color-secondary)' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed pb-6"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-primary)',
                          fontWeight: 300,
                          lineHeight: 1.85,
                          opacity: 0.8,
                          maxWidth: '680px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
