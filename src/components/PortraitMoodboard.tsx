import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { PORTRAIT_HEIGHT, portraitPieces, type Piece } from '../content/site'

const ease = [0.22, 1, 0.36, 1] as const

/** The moodboard for phones: materials laid out as a tall flat-lay, where each linked material is tappable. */
export function PortraitMoodboard() {
  return (
    <div className="mx-auto w-full max-w-lg px-4">
      <nav aria-label="Main" className="relative" style={{ aspectRatio: `100 / ${PORTRAIT_HEIGHT}` }}>
        {portraitPieces.map((piece, i) => (
          <PieceView key={piece.src} piece={piece} index={i} />
        ))}
      </nav>
    </div>
  )
}

function PieceView({ piece, index }: { piece: Piece; index: number }) {
  const position = {
    left: `${piece.x}%`,
    top: `${(piece.y / PORTRAIT_HEIGHT) * 100}%`,
    width: `${piece.w}%`,
  }

  // Each piece is "placed" on the table: it settles from slightly larger and more rotated
  const image = (
    <motion.img
      src={piece.src}
      alt=""
      draggable={false}
      className="flat-lay-shadow block w-full select-none"
      style={{ aspectRatio: piece.aspect }}
      initial={{ opacity: 0, scale: 1.12, rotate: piece.rotate + 6 }}
      animate={{ opacity: 1, scale: 1, rotate: piece.rotate }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease }}
    />
  )

  if (!piece.link) {
    return (
      <div aria-hidden className="pointer-events-none absolute" style={position}>
        {image}
      </div>
    )
  }

  const [pillX, pillY] = piece.link.pill
  return (
    <Link
      to={piece.link.to}
      className="group absolute block transition-transform duration-300 ease-soft active:scale-[0.97]"
      style={position}
    >
      {image}
      <motion.span
        className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-paper/90 py-1 pr-3.5 pl-1 whitespace-nowrap shadow-[0_6px_18px_-6px_rgb(60_45_30/0.4)] backdrop-blur-sm group-active:bg-olive group-active:text-paper"
        style={{ left: `${pillX}%`, top: `${pillY}%` }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + index * 0.06, duration: 0.5, ease }}
      >
        <span className="relative grid size-6 place-items-center rounded-full bg-olive text-paper">
          <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-olive" />
          <Plus aria-hidden strokeWidth={1.5} className="relative size-3.5" />
        </span>
        <span className="eyebrow pt-px text-[10px]">{piece.link.label}</span>
      </motion.span>
    </Link>
  )
}
