import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 5 Sobre)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  eyebrow: 'sobre tatiane',
  heading: 'Eu guio esse caminho',
  headingEm: 'porque j\u00e1 percorri.',
  paragraphs: [
    'Eu sei o que \u00e9 se perder tentando caber na expectativa dos outros. Vivi o labirinto da autoanula\u00e7\u00e3o como quem vive no autom\u00e1tico, sem perceber que j\u00e1 n\u00e3o reconhecia a mulher no espelho. As perdas e as rela\u00e7\u00f5es desafiadoras n\u00e3o foram escolha. Mas foram mat\u00e9ria-prima.',
    'O ponto de virada n\u00e3o veio de um livro. Veio da minha pr\u00f3pria pele. Validei cada ferramenta que ofere\u00e7o primeiro em mim. O Reiki, a Maha Lilah, a Contoterapia. Nenhuma delas entrou no meu m\u00e9todo por teoria. Entrou porque me devolveu algo que eu achava perdido.',
    'Hoje eu sustento o espa\u00e7o que ningu\u00e9m sustentou para mim. Um espa\u00e7o seguro de escuta ativa, onde nenhuma mulher precisa se anular para ser acolhida. Minha certeza n\u00e3o vem de diploma. Vem da travessia.',
  ],
  transition: 'Se voc\u00ea quer saber como o processo funciona na pr\u00e1tica, o pr\u00f3ximo bloco explica passo a passo.',
  ctaText: 'Quero come\u00e7ar meu processo',
}
// ════════════════════════════════════════════════════════════════════

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      className="section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-stretch">

          {/* Copy — mobile: first */}
          <div className="flex flex-col gap-7 order-1 md:order-2">
            <FadeIn>
              <div className="flex items-center gap-4 mb-2">
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
                className="text-3xl md:text-4xl leading-tight"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primary)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {COPY.heading}{' '}
                <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-main)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                {COPY.paragraphs[0]}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="pl-5"
                style={{ borderLeft: `2px solid color-mix(in srgb, var(--color-secondary) 50%, transparent)` }}
              >
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  {COPY.paragraphs[1]}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text-main)',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  opacity: 0.85,
                }}
              >
                {COPY.paragraphs[2]}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className="pt-2 pb-4"
                style={{ borderTop: `1px solid color-mix(in srgb, var(--color-secondary) 25%, transparent)` }}
              >
                <span
                  className="eyebrow-ultra"
                  style={{ color: 'var(--color-primary)', opacity: 0.55 }}
                >
                  {SITE.credenciais}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-primary)',
                  fontWeight: 300,
                  opacity: 0.65,
                  fontStyle: 'italic',
                }}
              >
                {COPY.transition}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href={SITE.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer rounded-sm text-sm font-medium tracking-wide self-start"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-off-white)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                {COPY.ctaText}
              </a>
            </FadeIn>
          </div>

          {/* Photo — mobile: second */}
          <div className="flex justify-center md:justify-start order-2 md:order-1 md:self-stretch">
            <FadeIn delay={0.1}>
              <div className="relative w-full h-full" style={{ minHeight: '480px' }}>
                {!imgError ? (
                  <img
                    src={SITE.fotoAbout}
                    alt={SITE.nomeCurto}
                    onError={() => setImgError(true)}
                    className="object-cover object-top w-full h-full"
                    style={{
                      borderRadius: '16px 4px 16px 4px',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '480px',
                      borderRadius: '16px 4px 16px 4px',
                      background: `linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary-dark) 100%)`,
                      opacity: 0.3,
                    }}
                  />
                )}
                {/* Decorative line */}
                <div
                  className="absolute -left-4 top-8 bottom-8"
                  style={{
                    width: '2px',
                    backgroundColor: 'var(--color-secondary)',
                    opacity: 0.4,
                  }}
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
