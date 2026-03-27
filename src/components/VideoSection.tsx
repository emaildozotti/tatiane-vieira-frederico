import { FadeIn } from './FadeIn'
import { SITE } from '../site.config'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 3 Video)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'Voc\u00ea n\u00e3o precisa de mais conselhos.',
  headingEm: 'Precisa de algu\u00e9m que entenda.',
  preText: 'Tatiane viveu a mesma travessia. Conhece o labirinto da autoanula\u00e7\u00e3o por dentro. Neste v\u00eddeo, ela fala sobre o que ningu\u00e9m te contou sobre o processo de voltar a ser quem voc\u00ea \u00e9.',
  postText: 'Se o que voc\u00ea ouviu fez sentido, o pr\u00f3ximo passo \u00e9 entender como o processo funciona.',
}
// ════════════════════════════════════════════════════════════════════

export default function VideoSection() {
  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: `radial-gradient(color-mix(in srgb, var(--color-secondary) 7%, transparent) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container-ultra">
        <div className="flex flex-col items-center gap-10 md:gap-12">

          <FadeIn>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight text-center"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-off-white)',
                fontWeight: 400,
              }}
            >
              {COPY.heading}{' '}
              <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
            </h2>
          </FadeIn>

          <FadeIn>
            <p
              className="text-base md:text-lg leading-relaxed text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              "{COPY.preText}"
            </p>
          </FadeIn>

          {/* Video embed — 9:16 vertical */}
          <FadeIn delay={0.15}>
            <iframe
              src={SITE.videoUrl}
              title={`${SITE.nomeCurto} — video de apresentacao`}
              width={300}
              height={533}
              style={{
                border: 'none',
                borderRadius: '16px 4px 16px 4px',
                display: 'block',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="text-sm md:text-base text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-warm)',
                fontWeight: 300,
                opacity: 0.7,
                maxWidth: '440px',
                margin: '0 auto',
              }}
            >
              {COPY.postText}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
