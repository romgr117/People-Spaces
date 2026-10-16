import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { peopleRow } from '../assets/images'
import { nav, site } from '../content/site'
import { Logo } from './Logo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-24 bg-olive text-paper">
      {/* A crowd of line-drawn people, repeated across the width */}
      <div
        aria-hidden
        className="h-28 bg-repeat-x opacity-90 sm:h-36"
        style={{ backgroundImage: `url(${peopleRow})`, backgroundSize: 'auto 100%' }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-10 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="space-y-6">
          <Logo light className="h-6 w-auto" />
          <p className="eyebrow max-w-[14rem] leading-loose text-paper/80">{site.motto.join(' ')}</p>
          <Link
            to="/"
            className="eyebrow inline-flex items-center gap-3 rounded-full border border-paper/40 px-5 py-3 transition-colors hover:bg-paper hover:text-olive"
          >
            <ArrowLeft className="size-4" strokeWidth={1.25} />
            Back to the moodboard
          </Link>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-5 text-paper/60">Explore</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-5 text-paper/60">Say hello</p>
          <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
            {site.email}
          </a>
          <ul className="eyebrow mt-8 space-y-2 text-paper/80">
            {site.sectors.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-paper/60 sm:px-8 lg:px-12">
          © {year} {site.name}. Inspired by people, shaped by spaces.
        </p>
      </div>
    </footer>
  )
}
