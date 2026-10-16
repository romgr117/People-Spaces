import type { Swatch } from '../content/site'

type SwatchImageProps = { swatch: Swatch; className?: string }

/** A close-up of one material from the moodboard. */
export function SwatchImage({ swatch, className = '' }: SwatchImageProps) {
  return <img src={swatch.src} alt={swatch.name} loading="lazy" className={`bg-stone object-cover ${className}`} />
}
