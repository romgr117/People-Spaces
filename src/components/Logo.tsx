import { logo } from '../assets/images'

type LogoProps = { className?: string; light?: boolean }

/** The PEOPLE + SPACES wordmark. Pass `light` to show it in white on dark backgrounds. */
export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <img
      src={logo}
      alt="People + Spaces"
      width={606}
      height={100}
      className={`select-none ${light ? 'invert' : ''} ${className}`}
      draggable={false}
    />
  )
}
