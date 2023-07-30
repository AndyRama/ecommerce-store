"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'

interface MainNavProps {
  data: any
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({ 
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav 
      className='mx-6 flex items-center space-x-4 lg:space-x-6'
    >
      {routes.map((route)=> {
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transistion-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
        </Link>
      })}
      main-nav
    </nav>
  )
}

export default MainNav