import { Link } from 'react-router'
import { site } from '../content/site'
import { Logo } from './Logo'
import { Menu } from './Menu'

type HeaderProps = { className?: string }

export function Header({ className = '' }: HeaderProps) {
  return (
    <header className={`z-30 flex items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12 lg:py-7 ${className}`}>
      <Link to="/" aria-label="People + Spaces home" className="shrink-0">
        <Logo className="h-[18px] w-auto sm:h-6 lg:h-7" />
      </Link>
      <div className="flex items-center gap-10">
        <p className="eyebrow hidden md:block">{site.tagline}</p>
        <Menu />
      </div>
    </header>
  )
}
