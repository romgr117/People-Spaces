import { MotionConfig } from 'motion/react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { PageLayout, RootLayout } from './components/Layouts'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <PageLayout />,
        // Inner pages are code-split so the moodboard loads as fast as possible
        children: [
          { path: 'about', lazy: () => import('./pages/About').then((m) => ({ Component: m.About })) },
          { path: 'approach', lazy: () => import('./pages/Approach').then((m) => ({ Component: m.Approach })) },
          { path: 'services', lazy: () => import('./pages/Services').then((m) => ({ Component: m.Services })) },
          { path: 'portfolio', lazy: () => import('./pages/Portfolio').then((m) => ({ Component: m.Portfolio })) },
          { path: 'shop', lazy: () => import('./pages/Shop').then((m) => ({ Component: m.Shop })) },
          { path: 'contact', lazy: () => import('./pages/Contact').then((m) => ({ Component: m.Contact })) },
          { path: '*', lazy: () => import('./pages/NotFound').then((m) => ({ Component: m.NotFound })) },
        ],
      },
    ],
  },
], { basename: import.meta.env.BASE_URL })

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}
