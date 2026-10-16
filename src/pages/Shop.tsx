import { makersInk } from '../assets/images'
import { ButtonLink } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'

export function Shop() {
  return (
    <>
      <title>The shop · People + Spaces</title>

      <PageHero eyebrow="The shop" title="Something lovely is on its way" note="pardon the dust">
        <p>
          A curated collection of the pieces, materials and little details we love, chosen to bring a brighter
          everyday into your own space.
        </p>
        <div className="mt-8">
          <ButtonLink to="/contact">Ask us to let you know</ButtonLink>
        </div>
      </PageHero>

      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <img
          src={makersInk}
          alt="Line drawings of people at work: painting, hanging a light, carrying timber, beside an ‘under construction’ sign."
          className="w-full mix-blend-multiply"
          loading="lazy"
        />
      </Reveal>
    </>
  )
}
