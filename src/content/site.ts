import {
  swatchBoucle,
  swatchBrass,
  swatchFabric,
  swatchGreenTile,
  swatchLinen,
  swatchStone,
  swatchTerrazzo,
} from '../assets/images'

export const site = {
  name: 'People + Spaces',
  tagline: 'Interiors for a brighter everyday',
  motto: ['Design', 'for a more', 'human', 'tomorrow'],
  sectors: ['Residential', 'Commercial', 'Hospitality'],
  // TODO: replace with the studio's real details
  email: 'hello@example.com',
  instagram: '',
}

export type NavItem = { label: string; to: string }

export const nav: NavItem[] = [
  { label: 'About us', to: '/about' },
  { label: 'Our approach', to: '/approach' },
  { label: 'Our services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'The shop', to: '/shop' },
  { label: 'Contact', to: '/contact' },
]

/**
 * Clickable areas on the moodboard. `x`/`y` are percentages of the board image
 * (1920×1080) and mark the centre of the pill's "+" button.
 */
export type Hotspot = NavItem & { x: number; y: number; item: string }

export const hotspots: Hotspot[] = [
  { label: 'Our approach', to: '/approach', x: 9, y: 62, item: 'paint swatches' },
  { label: 'Portfolio', to: '/portfolio', x: 23, y: 27, item: 'terrazzo tiles' },
  { label: 'About us', to: '/about', x: 38, y: 21, item: 'brass sphere' },
  { label: 'Our services', to: '/services', x: 50, y: 39, item: 'green glazed tiles' },
  { label: 'The shop', to: '/shop', x: 75, y: 49, item: 'patterned fabric' },
  { label: 'Contact', to: '/contact', x: 85, y: 82, item: 'brushed brass' },
]

export type Swatch = { src: string; name: string }

/** Single materials, cut out of the moodboard by `npm run images`. */
export const swatches = {
  linen: { src: swatchLinen, name: 'Linen' },
  terrazzo: { src: swatchTerrazzo, name: 'Terrazzo' },
  greenTile: { src: swatchGreenTile, name: 'Green glazed tile' },
  fabric: { src: swatchFabric, name: 'Woven fabric' },
  boucle: { src: swatchBoucle, name: 'Bouclé' },
  stone: { src: swatchStone, name: 'Limestone' },
  brass: { src: swatchBrass, name: 'Brushed brass' },
} satisfies Record<string, Swatch>
