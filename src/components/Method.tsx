import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 4 Metodo)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'm\u00e9todo mre',
  heading: 'Tr\u00eas camadas. Um s\u00f3 processo de reconex\u00e3o.',
  intro: 'A maioria das abordagens trabalha uma camada por vez. O M\u00e9todo MRE integra tr\u00eas ao mesmo tempo, porque a reconex\u00e3o real acontece quando mente, s\u00edmbolo e energia se encontram.',
  pillars: [
    {
      title: 'Camada Ps\u00edquica (Psican\u00e1lise)',
      body: 'Investiga\u00e7\u00e3o do inconsciente. As cren\u00e7as, os padr\u00f5es, as hist\u00f3rias que voc\u00ea carrega sem saber. Aqui a gente olha para o que est\u00e1 por tr\u00e1s dos comportamentos que se repetem.',
      expanded: false,
    },
    {
      title: 'Camada Simb\u00f3lica (Maha Lilah e Contoterapia)',
      body: 'Os arqu\u00e9tipos e as narrativas que voc\u00ea vive sem perceber. Atrav\u00e9s do jogo e das hist\u00f3rias, revelamos padr\u00f5es que a fala sozinha n\u00e3o alcan\u00e7a.',
      expanded: true,
    },
    {
      title: 'Camada Energ\u00e9tica (Reiki)',
      body: 'O corpo tamb\u00e9m guarda o que a mente tenta organizar. O suporte vibracional sustenta voc\u00ea enquanto as outras camadas trabalham. Sem catarses desnecess\u00e1rias.',
      expanded: false,
    },
  ],
  pillarCentralLabel: 'pilar central',
  naoPrometo: 'N\u00e3o prometo cura em 24 horas. N\u00e3o vendo f\u00f3rmulas m\u00e1gicas. E n\u00e3o substituo tratamento psiqui\u00e1trico. Prometo presen\u00e7a, escuta e um processo honesto, no seu tempo.',
  transition: 'O m\u00e9todo \u00e9 a ferramenta. Mas o diferencial \u00e9 quem segura o processo.',
}
// ════════════════════════════════════════════════════════════════════

export default function Method() {
  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
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
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
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

        <FadeIn delay={0.2}>
          <p
            className="text-base md:text-lg leading-relaxed mb-14 md:mb-20"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text-main)',
              fontWeight: 300,
              maxWidth: '560px',
              opacity: 0.8,
            }}
          >
            {COPY.intro}
          </p>
        </FadeIn>

        {/* Pillars */}
        <div className="flex flex-col gap-0">
          {COPY.pillars.map((pillar, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10"
                style={{
                  borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)`,
                  ...(i === COPY.pillars.length - 1
                    ? { borderBottom: `1px solid color-mix(in srgb, var(--color-secondary) 20%, transparent)` }
                    : {}),
                }}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-5">
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        color: 'var(--color-secondary)',
                        opacity: 0.6,
                        paddingTop: '2px',
                        minWidth: '28px',
                        fontStyle: 'normal',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3
                        className={pillar.expanded ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}
                        style={{
                          fontFamily: 'var(--font-display)',
                          color: 'var(--color-primary)',
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                        {pillar.expanded && (
                          <span
                            style={{
                              marginLeft: '12px',
                              fontSize: '11px',
                              fontFamily: 'var(--font-sans)',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: 'var(--color-secondary)',
                              fontStyle: 'normal',
                              verticalAlign: 'middle',
                              opacity: 0.8,
                            }}
                          >
                            {COPY.pillarCentralLabel}
                          </span>
                        )}
                      </h3>
                      <p
                        className={pillar.expanded ? 'text-base md:text-lg' : 'text-sm md:text-base'}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: 'var(--color-text-main)',
                          fontWeight: pillar.expanded ? 400 : 300,
                          lineHeight: 1.8,
                          opacity: 0.85,
                          maxWidth: pillar.expanded ? '600px' : '540px',
                        }}
                      >
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Not promised */}
        <FadeIn delay={0.35}>
          <div
            className="mt-12 md:mt-14 p-6 md:p-8"
            style={{
              backgroundColor: 'var(--color-bg-warm)',
              borderRadius: '4px 16px 4px 16px',
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.naoPrometo}
            </p>
          </div>
        </FadeIn>

        {/* Transition */}
        <FadeIn delay={0.4}>
          <p
            className="mt-12 text-base md:text-lg"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-primary)',
              fontWeight: 300,
              opacity: 0.7,
              fontStyle: 'italic',
            }}
          >
            {COPY.transition}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
