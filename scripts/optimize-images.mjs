// Converts the source PNGs in /Resources into web-friendly WebP files in src/assets/images.
// Run with: npm run images
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'Resources'
const OUT = 'src/assets/images'

// Single materials cut out of the moodboard (left, top, width, height in the 1920×1080 image)
const swatches = {
  linen: [125, 155, 195, 270],
  terrazzo: [380, 150, 260, 340],
  'green-tile': [865, 190, 305, 305],
  fabric: [1355, 275, 265, 375],
  boucle: [962, 552, 300, 300],
  stone: [330, 720, 210, 205],
  brass: [1658, 780, 145, 145],
}

// Free-standing items on the transparent moodboard layer (left, top, width, height).
// The brass sphere sits on the terrazzo, so it's cut out with a circular mask.
const pieces = {
  linen: { box: [88, 114, 272, 341] },
  terrazzo: { box: [368, 135, 245, 366] },
  sphere: { box: [660, 193, 152, 152], mask: 'circle' },
  'green-tile': { box: [858, 184, 314, 318] },
  fabric: { box: [1345, 266, 283, 254] },
  boucle: { box: [958, 553, 308, 304] },
  smear: { box: [1642, 181, 188, 292] },
  brass: { box: [1651, 774, 158, 158] },
}

const jobs = [
  ...Object.entries(swatches).map(([name, [left, top, width, height]]) => ({
    from: 'People+Spaces_Moodboard-background.png',
    to: `swatch-${name}.webp`,
    extract: { left, top, width, height },
    width,
    quality: 90,
  })),

  // Moodboard layers: paper texture + transparent items (shadows are added in CSS)
  { from: 'People+Spaces_Moodboard-justbackground.png', to: 'paper.webp', width: 1920, quality: 70 },
  { from: 'People+Spaces_Moodboard-transparent.png', to: 'moodboard-items.webp', width: 1920, quality: 85 },
  { from: 'People+Spaces_Moodboard-transparent.png', to: 'moodboard-items-sm.webp', width: 1280, quality: 82 },

  // Before / after
  { from: 'Images (various)/EmptyRoom_1.png', to: 'room-before.webp', width: 1536, quality: 80 },
  { from: 'Images (various)/EmptyRoom_2.png', to: 'room-after.webp', width: 1536, quality: 80 },

  // Line-art people (white on transparent)
  { from: 'Images (various)/Characters_1.png', to: 'people-1.webp', width: 1536, quality: 85 },
  { from: 'Images (various)/Characters_2.png', to: 'people-2.webp', width: 1536, quality: 85 },
  // A single row of standing people, used as a repeating band
  { from: 'Images (various)/Characters_2.png', to: 'people-row.webp', extract: { left: 0, top: 16, width: 1536, height: 472 }, width: 1536, quality: 85 },
  // Line-art makers (black on white, blended with multiply)
  { from: 'Images (various)/Characters_4-black.png', to: 'makers-ink.webp', width: 1536, quality: 85 },

  // Individual cut-out pieces (with transparency) for the portrait moodboard on phones
  ...Object.entries(pieces).map(([name, { box: [left, top, width, height], mask }]) => ({
    from: 'People+Spaces_Moodboard-transparent.png',
    to: `piece-${name}.webp`,
    extract: { left, top, width, height },
    mask,
    width,
    quality: 88,
  })),
]

await mkdir(OUT, { recursive: true })

// Logo: the source PNG is black on an opaque white box, so turn its lightness into transparency
{
  const src = sharp(path.join(SRC, 'Identity/People+Spaces_Logo_1.png'))
  const { width, height } = await src.metadata()
  const alpha = await src.clone().greyscale().negate().toColourspace('b-w').raw().toBuffer()
  await sharp({ create: { width, height, channels: 3, background: '#222222' } })
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png()
    .toFile(path.join(OUT, 'logo.png'))
  console.log(`${'logo.png'.padEnd(26)} ${width}x${height}`)
}

for (const job of jobs) {
  const input = path.join(SRC, job.from)
  const output = path.join(OUT, job.to)
  let image = sharp(input)
  if (job.extract) image = image.extract(job.extract)
  if (job.mask === 'circle') {
    const { width: w, height: h } = job.extract
    const circle = Buffer.from(`<svg width="${w}" height="${h}"><circle cx="${w / 2}" cy="${h / 2}" r="${w / 2 - 4}"/></svg>`)
    image = sharp(await image.png().toBuffer()).composite([{ input: circle, blend: 'dest-in' }])
  }
  const info = await image
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, alphaQuality: 90, effort: 6 })
    .toFile(output)
  console.log(`${job.to.padEnd(26)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}
