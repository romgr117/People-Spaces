import { ButtonLink } from '../components/CallToAction'
import { PageHero } from '../components/PageHero'

export function NotFound() {
  return (
    <>
      <title>Page not found · People + Spaces</title>
      <PageHero eyebrow="404" title="This room doesn't exist (yet)" note="let's find you somewhere better">
        <ButtonLink to="/">Back to the moodboard</ButtonLink>
      </PageHero>
    </>
  )
}
