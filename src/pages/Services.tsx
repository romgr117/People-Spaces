import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SwatchImage } from '../components/SwatchImage'
import { swatches, type Swatch } from '../content/site'

// TODO: draft copy, to be refined with the studio
const sectors: { title: string; swatch: Swatch; body: string; examples: string[] }[] = [
  {
    title: 'Residential',
    swatch: swatches.greenTile,
    body: 'Homes shaped around the way you actually live: your rituals, your routines, the people you invite over and the things you love.',
    examples: ['Full home interiors', 'Kitchens & living spaces', 'Bedrooms & retreats', 'Refreshes & styling'],
  },
  {
    title: 'Commercial',
    swatch: swatches.terrazzo,
    body: 'Workplaces and shops that support the people inside them, and tell the story of the business to everyone who walks through the door.',
    examples: ['Offices & studios', 'Retail & showrooms', 'Brand environments', 'Space planning'],
  },
  {
    title: 'Hospitality',
    swatch: swatches.boucle,
    body: 'Cafés, restaurants and hotels designed to create memorable experiences, and to feel completely at home in their own identity.',
    examples: ['Cafés & restaurants', 'Hotels & guesthouses', 'Bars & lounges', 'Concept development'],
  },
]

const disciplines = [
  'Concept & mood',
  'Space planning',
  'Colour & materials',
  'Lighting design',
  'Furniture & joinery',
  'Styling & finishing',
]

export function Services() {
  return (
    <>
      <title>Our services · People + Spaces</title>

      <PageHero eyebrow="Our services" title="Residential, commercial & hospitality" note="every space has a story to tell">
        <p>
          Whether it is a home, a workplace, a shop, a café or a hotel, every space has a purpose to fulfil. We design
          for the people who will experience it.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-3 md:gap-8 lg:px-12">
        {sectors.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <article className="flex h-full flex-col">
              <SwatchImage
                swatch={s.swatch}
                className="aspect-[4/5] w-full rounded-sm shadow-[0_24px_40px_-24px_rgb(60_45_30/0.55)]"
              />
              <h2 className="mt-8 font-display text-2xl tracking-[0.14em] uppercase">{s.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{s.body}</p>
              <ul className="mt-5 space-y-2 border-t border-ink/15 pt-5 text-sm">
                {s.examples.map((e) => (
                  <li key={e} className="flex items-center gap-3">
                    <span className="text-olive">+</span>
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mt-24 bg-olive text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Reveal>
            <h2 className="eyebrow text-paper/70">What we can help with</h2>
            <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {disciplines.map((d) => (
                <li key={d} className="font-display text-xl tracking-[0.12em] uppercase">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="pt-20">
        <CallToAction />
      </div>
    </>
  )
}
