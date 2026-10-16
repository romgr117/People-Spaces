import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Reveal } from './Reveal'

type CallToActionProps = { title?: string; label?: string; to?: string }

export function CallToAction({
  title = 'Tell us about the space, and the people in it.',
  label = 'Start a conversation',
  to = '/contact',
}: CallToActionProps) {
  return (
    <Reveal className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col items-start gap-8 border-t border-ink/15 pt-14 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl font-display text-3xl leading-tight tracking-[0.06em] uppercase sm:text-4xl">{title}</p>
        <ButtonLink to={to}>{label}</ButtonLink>
      </div>
    </Reveal>
  )
}

export function ButtonLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="eyebrow group inline-flex shrink-0 items-center gap-3 rounded-full bg-olive px-6 py-4 text-paper transition-colors hover:bg-olive-deep"
    >
      {children}
      <ArrowRight strokeWidth={1.25} className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
