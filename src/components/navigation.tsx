'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white mix-blend-difference">
      <Link href="/" className="text-xl font-bold tracking-wider">
        <div>Saif Amer</div>
        <div className="text-sm font-normal uppercase">Filmmaker</div>
      </Link>
      <div className="flex gap-8 text-sm">
        <Link
          href="/work"
          className={cn(
            'hover:opacity-70 transition-opacity',
            pathname === '/work' && 'underline'
          )}
        >
          WORK
        </Link>
        <Link
          href="/about"
          className={cn(
            'hover:opacity-70 transition-opacity',
            pathname === '/about' && 'underline'
          )}
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className={cn(
            'hover:opacity-70 transition-opacity',
            pathname === '/contact' && 'underline'
          )}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  )
}

