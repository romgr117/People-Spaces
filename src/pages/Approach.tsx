import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { roomAfter, roomBefore } from '../assets/images'
import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

const people = ['Morning rituals', 'Favourite colours', 'Slow Sundays', 'The things you collect', 'How you gather']
const science = ['Ergonomics', 'Proportion', 'Spatial planning', 'Colour theory', 'Lighting', 'Circulation']

const steps = [
  {
    title: 'Getting to know you',
    body: 'We ask questions, listen carefully and notice the details. The more we understand what makes you, your business or your project unique, the more personal the result.',
  },
  {
    title: 'Exploring',
    body: 'We brainstorm. We mix ideas, colours, textures and unexpected details, challenge the obvious and look for the things that feel uniquely yours.',
  },
  {
    title: 'The science',
    body: 'Ergonomics, proportions, spatial planning, visual balance, material relationships and lighting: the careful thinking behind a space that works.',
  },
  {
    title: 'Coming together',
    body: 'Countless small calculations, so that the finished room feels effortless, and completely at home in its own identity.',
  },
]

export function Approach() {
  return (
    <>
      <title>Our approach · People + Spaces</title>

      <PageHero eyebrow="Our approach" title={<>People + science</>} note="with a little creative magic in between">
        <p>
          Behind every beautiful space is a surprising amount of thinking. And beside it, the fun part: getting to
          know the people who will live, work and gather there.
        </p>
      </PageHero>

      {/* People + Science */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <Reveal className="rounded-sm bg-paper/70 p-8 shadow-[0_20px_40px_-24px_rgb(60_45_30/0.4)] sm:p-10">
            <h2 className="eyebrow text-olive">People</h2>
            <ul className="mt-6 space-y-3 font-script text-2xl">
              {people.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <p aria-hidden className="text-center font-display text-6xl text-olive">
            +
          </p>
          <Reveal delay={0.1} className="rounded-sm bg-olive p-8 text-paper sm:p-10">
            <h2 className="eyebrow text-paper/70">Science</h2>
            <ul className="mt-6 space-y-3 font-display text-xl tracking-[0.12em] uppercase">
              {science.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl tracking-[0.08em] uppercase sm:text-4xl">How we work</h2>
        </Reveal>
        <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="border-t border-ink/20 pt-6">
                <span className="font-script text-3xl text-olive">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg tracking-[0.14em] uppercase">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Before / after */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl tracking-[0.08em] uppercase sm:text-4xl">From shell to space</h2>
            <p className="eyebrow text-ink-soft">Drag to compare</p>
          </div>
          <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgb(60_45_30/0.5)]">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={roomBefore} alt="The room before: bare concrete walls and floor" />}
              itemTwo={<ReactCompareSliderImage src={roomAfter} alt="The room after: smooth white walls and oak flooring" />}
              className="aspect-[3/2]"
            />
            <span className="eyebrow pointer-events-none absolute z-10 top-4 left-4 rounded-full bg-paper/85 px-3 py-1.5">
              Before
            </span>
            <span className="eyebrow pointer-events-none absolute z-10 top-4 right-4 rounded-full bg-paper/85 px-3 py-1.5">
              After
            </span>
          </div>
        </Reveal>
      </section>

      <CallToAction />
    </>
  )
}
