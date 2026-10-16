import { Header } from '../components/Header'
import { Moodboard } from '../components/Moodboard'
import { site } from '../content/site'

export function Home() {
  return (
    <div className="relative flex min-h-svh flex-col board:block board:h-svh board:overflow-hidden">
      <title>People + Spaces · Interiors for a brighter everyday</title>
      <h1 className="sr-only">
        {site.name}: {site.tagline}
      </h1>

      <Header className="board:absolute board:inset-x-0 board:top-0" />
      <p className="eyebrow px-5 pb-2 text-ink-soft sm:px-8 md:hidden">{site.tagline}</p>

      <Moodboard />

      <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-x-6 gap-y-6 px-5 pt-8 pb-6 sm:px-8 board:pointer-events-none board:absolute board:inset-x-0 board:bottom-0 board:grid-cols-[1fr_auto_1fr] board:px-12 board:pb-8">
        <div>
          <p className="eyebrow space-y-1 text-[12px] leading-relaxed text-ink-soft">
            {site.motto.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <span className="mt-4 block h-px w-14 bg-ink-soft/60" />
        </div>

        <p className="col-span-2 row-start-1 text-center font-script text-xl text-olive sm:text-2xl board:col-span-1 board:col-start-2 board:pb-1">
          Because good spaces are not just designed. They are lived.
        </p>

        <div className="justify-self-end text-right">
          <ul className="eyebrow space-y-2 text-[10px] text-ink-soft">
            {site.sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <span className="mt-4 ml-auto block h-px w-14 bg-ink-soft/60" />
        </div>
      </div>
    </div>
  )
}
