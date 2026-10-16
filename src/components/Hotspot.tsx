import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import type { Hotspot as HotspotData } from '../content/site'

type HotspotProps = { hotspot: HotspotData; index: number }

/** A cream pill with a "+" button, pinned to a material on the moodboard. */
export function Hotspot({ hotspot, index }: HotspotProps) {
  return (
    <motion.div
      className="absolute z-10"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 + index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={hotspot.to}
        className="group flex -translate-x-[22px] -translate-y-1/2 items-center gap-3 rounded-full bg-paper/85 py-1.5 pr-5 pl-1.5 whitespace-nowrap shadow-[0_6px_20px_-6px_rgb(60_45_30/0.35)] backdrop-blur-sm transition-all duration-300 ease-soft hover:bg-olive hover:text-paper hover:shadow-[0_10px_28px_-6px_rgb(60_45_30/0.45)] focus-visible:bg-olive focus-visible:text-paper"
      >
        <span className="relative grid size-8 place-items-center rounded-full bg-olive text-paper transition-colors duration-300 group-hover:bg-paper group-hover:text-olive">
          <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-olive group-hover:hidden" />
          <Plus
            aria-hidden
            strokeWidth={1.5}
            className="relative size-4 transition-transform duration-500 ease-soft group-hover:rotate-90"
          />
        </span>
        <span className="eyebrow pt-px">{hotspot.label}</span>
      </Link>
    </motion.div>
  )
}
