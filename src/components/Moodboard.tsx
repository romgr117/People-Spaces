import { MoveRight } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useState, type PointerEvent } from 'react'
import { moodboard, moodboardSm } from '../assets/images'
import { hotspots } from '../content/site'
import { Hotspot } from './Hotspot'

const DRIFT = 10 // px the board drifts with the pointer on wide screens

export function Moodboard() {
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  const x = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const y = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * -2 * DRIFT)
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * -2 * DRIFT)
  }

  return (
    <>
      <div
        className="board-viewport"
        onPointerMove={handlePointerMove}
        onScroll={(e) => setScrolled(e.currentTarget.scrollLeft > 40)}
      >
        <motion.div
          className="board"
          style={{ x, y }}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={moodboard}
            srcSet={`${moodboardSm} 1280w, ${moodboard} 1920w`}
            sizes="(min-width: 768px) and (min-aspect-ratio: 4/3) 100vw, 140vh"
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

      <p
        aria-hidden
        className={`eyebrow mt-2 flex items-center justify-center gap-3 text-ink-soft transition-opacity duration-500 board:hidden ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Swipe to explore
        <MoveRight strokeWidth={1} className="size-5 animate-[nudge_1.6s_ease-in-out_infinite]" />
      </p>
    </>
  )
}
