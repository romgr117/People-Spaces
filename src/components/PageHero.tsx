import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  note?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, note, children }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-24 lg:pb-20">
      <Reveal>
        <p className="eyebrow flex items-center gap-4 text-ink-soft">
          <span className="h-px w-10 bg-current" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] tracking-[0.06em] uppercase sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {note && <p className="mt-4 font-script text-2xl text-olive sm:text-3xl">{note}</p>}
        {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">{children}</div>}
      </Reveal>
    </section>
  )
}
