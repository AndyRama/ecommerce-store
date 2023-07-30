"use client"

import { usePathname } from 'next/navigation'

interface MainNavProps {
  data: any
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({ 
    href: `/category/${route.id}`,
    Label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      routes.map((route)=> {
        
      })
      main-nav
    </nav>
  )
}

export default MainNav