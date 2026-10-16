import { motion } from 'motion/react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { paper } from '../assets/images'
import { Footer } from './Footer'
import { Header } from './Header'

/** Paper texture behind everything, plus scroll restoration between pages. */
export function RootLayout() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-paper bg-cover bg-center"
        style={{ backgroundImage: `url(${paper})` }}
      />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

/** Header + content + footer, used by every page except the moodboard. */
export function PageLayout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
