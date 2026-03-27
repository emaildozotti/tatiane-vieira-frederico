import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 7 Depoimentos)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'quem já percorreu esse caminho',
  heading: 'O processo funciona.',
  headingEm: 'Quem viveu sabe.',
  testimonials: [
    {
      text: 'Eu chegava nas sessões achando que o problema era o meu casamento. Em três meses, entendi que o problema era eu não existir dentro dele. A Tatiane não me deu conselhos. Me ajudou a ouvir o que eu estava engolindo há anos. Hoje digo o que penso sem aquele medo de ser abandonada.',
      name: 'C. M., 38 anos',
      highlight: 'o problema era eu não existir dentro dele',
    },
    {
      text: 'Fiz terapia por dois anos antes e saía das sessões sem saber o que tinha acontecido. Com o Método MRE, a segunda sessão já me fez enxergar um padrão que eu repetia desde a infância. Não foi fácil olhar para aquilo, mas pela primeira vez senti que o processo era real, não só conversa.',
      name: 'R. S., 42 anos',
      highlight: 'pela primeira vez senti que o processo era real',
    },
    {
      text: 'Eu era a pessoa que resolvia tudo para todo mundo e não conseguia pedir um copo de água para si mesma. Achava que era força. A Tatiane me mostrou que era medo. Hoje tenho limites que eu sustento sem culpa. Parece pouco escrito assim, mas quem vivia como eu vivia sabe o tamanho disso.',
      name: 'A. L., 35 anos',
      highlight: 'Achava que era força. A Tatiane me mostrou que era medo.',
    },
  ],
}
// ════════════════════════════════════════════════════════════════════

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % COPY.testimonials.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [])

  const t = COPY.testimonials[current]

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
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
            className="text-3xl md:text-4xl mb-12 md:mb-16"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative min-h-[320px] md:min-h-[260px]">
            {/* Giant quote mark */}
            <div
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '120px',
                lineHeight: 1,
                color: 'var(--color-secondary)',
                opacity: 0.2,
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 pt-10 md:pt-12 pl-4 md:pl-8"
              >
                <p
                  className="text-base md:text-lg leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 300,
                    maxWidth: '680px',
                    lineHeight: 1.85,
                  }}
                >
                  {t.text.split(t.highlight).map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <strong style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
                          {t.highlight}
                        </strong>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </p>
                <span
                  className="eyebrow-ultra"
                  style={{ color: 'var(--color-secondary)', opacity: 0.7 }}
                >
                  {t.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>

        {/* Progress bars */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mt-10">
            {COPY.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-500 cursor-pointer"
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '2px',
                  backgroundColor: 'var(--color-secondary)',
                  opacity: i === current ? 1 : 0.3,
                  border: 'none',
                  padding: 0,
                  borderRadius: '1px',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
