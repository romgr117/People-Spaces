import * as Dialog from '@radix-ui/react-dialog'
import { Menu as MenuIcon, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { nav, site } from '../content/site'
import { Logo } from './Logo'

export function Menu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open menu"
        className="-m-2 grid size-11 place-items-center rounded-full transition-colors hover:bg-ink/5"
      >
        <MenuIcon strokeWidth={1} className="size-8" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-[2px] data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-paper px-6 pt-5 pb-8 shadow-2xl data-[state=closed]:animate-sheet-out data-[state=open]:animate-sheet-in sm:max-w-md sm:px-10">
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={close} aria-label="People + Spaces home">
              <Logo className="h-5 w-auto" />
            </NavLink>
            <Dialog.Close
              aria-label="Close menu"
              className="-m-2 grid size-11 place-items-center rounded-full transition-colors hover:bg-ink/5"
            >
              <X strokeWidth={1} className="size-7" />
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Pages on the People + Spaces website</Dialog.Description>

          <nav className="mt-14 flex-1">
            <ul className="space-y-1">
              {[{ label: 'The moodboard', to: '/' }, ...nav].map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={item.to}
                    end
                    onClick={close}
                    className={({ isActive }) =>
                      `group flex items-center gap-4 py-2 font-display text-3xl tracking-[0.12em] uppercase transition-colors ${
                        isActive ? 'text-olive' : 'hover:text-olive'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`h-px bg-current transition-all duration-500 ${
                            isActive ? 'w-8' : 'w-0 group-hover:w-8'
                          }`}
                        />
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2 text-sm text-ink-soft">
            <p className="font-script text-2xl text-ink">Spaces for real life</p>
            <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
