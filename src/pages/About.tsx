import { people1 } from '../assets/images'
import { CallToAction } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <>
      <title>About us · People + Spaces</title>

      <PageHero
        eyebrow="About us"
        title="Because good spaces are not just designed. They are lived."
        note="Inspired by people, shaped by spaces"
      />

      {/* People first */}
      <section className="bg-olive text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-12 lg:py-24">
          <Reveal className="space-y-6 text-lg leading-relaxed text-paper/85">
            <h2 className="font-display text-3xl leading-tight tracking-[0.06em] text-paper uppercase sm:text-4xl">
              We believe that the best interiors begin with people.
            </h2>
            <p>
              How we live, move, rest, work, gather, create and connect is deeply personal. The spaces we inhabit
              should reflect that. Whether it is a home, a workplace, a shop, a café or a hotel, every space has a
              story to tell and a purpose to fulfil.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={people1} alt="" className="w-full" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-lg leading-relaxed text-ink-soft sm:px-8 lg:py-24">
        <Reveal>
          <p>
            Your morning rituals, your favourite colours, the way you spend a Sunday, the books you read, the people
            you invite over, the things you collect, the work you do, even the little habits you might never think to
            mention — all of these things tell a story about how a space should work for you, or the people who will
            experience it.
          </p>
        </Reveal>

        <Reveal className="my-16 text-center">
          <p className="font-display text-3xl tracking-[0.08em] text-ink uppercase sm:text-4xl">
            That is where our <span className="text-olive">+</span> comes in.
          </p>
        </Reveal>

        <Reveal className="space-y-6">
          <p>
            For us, design is both <strong className="font-normal text-ink">people + science</strong>. Behind every
            beautiful space is a surprising amount of thinking: ergonomics, proportions, spatial planning, visual
            balance, colour theory, material relationships, lighting, circulation and countless small calculations
            that make a room feel effortless when everything finally comes together.
          </p>
          <p>But there is another side to it.</p>
        </Reveal>

        <Reveal className="my-12">
          <p className="font-script text-4xl text-olive sm:text-5xl">The fun part.</p>
        </Reveal>

        <Reveal className="space-y-6">
          <p>
            We believe design should be collaborative, curious and a little bit playful. Getting to know you is just
            as important as getting to know the space. We ask questions, listen carefully, notice the details and
            sometimes dig a little deeper — not to be nosy, but because the more we understand what makes you, your
            business or your project unique, the more personal the result can become.
          </p>
          <p>
            From there, we explore. We brainstorm. We mix ideas, colours, textures and unexpected details. We
            challenge the obvious and look for the things that feel uniquely yours.
          </p>
          <p>Because ultimately, we are not interested in creating spaces that simply look good.</p>
        </Reveal>

        <Reveal className="my-16 border-y border-ink/15 py-12 text-center">
          <p className="font-display text-3xl tracking-[0.08em] text-ink uppercase sm:text-4xl">
            We want to create spaces that feel right.
          </p>
        </Reveal>

        <Reveal className="space-y-6">
          <p>
            Spaces that make sense for the way people live, work and connect. Spaces that support everyday life,
            inspire curiosity, create memorable experiences and feel completely at home in their own identity.
          </p>
          <p className="pt-6 text-ink">
            <span className="font-display tracking-[0.12em] uppercase">People + spaces.</span> The science of how we
            experience space, with a little creative magic in between.
          </p>
        </Reveal>
      </section>

      <CallToAction />
    </>
  )
}
