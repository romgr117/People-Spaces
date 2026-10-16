import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SwatchImage } from '../components/SwatchImage'
import { swatches } from '../content/site'

// Placeholder projects until real photography is ready
const projects = [
  { name: 'A home by the sea', sector: 'Residential', swatch: swatches.fabric },
  { name: 'Neighbourhood café', sector: 'Hospitality', swatch: swatches.terrazzo },
  { name: 'Studio workplace', sector: 'Commercial', swatch: swatches.stone },
  { name: 'Townhouse refresh', sector: 'Residential', swatch: swatches.linen },
]

export function Portfolio() {
  return (
    <>
      <title>Portfolio · People + Spaces</title>

      <PageHero eyebrow="Portfolio" title="Spaces for real life" note="our first stories are being written">
        <p>We're photographing our first projects now. Here's a glimpse of the materials behind them.</p>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1} className={i % 2 ? 'sm:mt-20' : ''}>
            <article>
              <div className="relative">
                <SwatchImage swatch={p.swatch} className="aspect-[4/3] w-full rounded-sm" />
                <span className="eyebrow absolute top-4 left-4 rounded-full bg-paper/85 px-3 py-1.5">Coming soon</span>
              </div>
              <p className="eyebrow mt-6 text-ink-soft">{p.sector}</p>
              <h2 className="mt-2 font-display text-2xl tracking-[0.12em] uppercase">{p.name}</h2>
            </article>
          </Reveal>
        ))}
      </section>

      <div className="pt-24">
        <CallToAction title="Could your space be our next story?" />
      </div>
    </>
  )
}
