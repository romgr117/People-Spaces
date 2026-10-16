import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import type { PointerEvent } from 'react'
import { moodboard, moodboardSm } from '../assets/images'
import { hotspots } from '../content/site'
import { Hotspot } from './Hotspot'

const DRIFT = 10 // px the board drifts with the pointer

/** The full 16:9 moodboard, for screens wide enough to show it whole. */
export function Moodboard() {
  const reduceMotion = useReducedMotion()

  const x = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const y = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * -2 * DRIFT)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * -2 * DRIFT)
  }

  return (
    <div className="absolute inset-0 grid place-items-center overflow-hidden" onPointerMove={handlePointerMove}>
      <motion.div
        className="relative aspect-video w-[min(100vw,100svh*16/9)]"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={moodboard}
          srcSet={`${moodboardSm} 1280w, ${moodboard} 1920w`}
          sizes="100vw"
          alt="A moodboard of interior materials: linen, terrazzo, a brass sphere, green glazed tiles, rattan, woven fabric, oak, leather, bouclé, limestone, paint swatches and an olive branch."
          className="flat-lay-shadow pointer-events-none absolute inset-0 size-full select-none"
          draggable={false}
        />
        <nav aria-label="Main">
          {hotspots.map((h, i) => (
            <Hotspot key={h.to} hotspot={h} index={i} />
          ))}
        </nav>
      </motion.div>
    </div>
  )
}
