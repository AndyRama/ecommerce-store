"use client"

import Button from "@/app/components/ui/button"
import { Color, Size } from "@/types"
import { Dialog } from "@headlessui/react"
import { Plus } from "lucide-react"
import { useState } from "react"


interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}
const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors
}) => {

  const [open , setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = ()=> setOpen(false)

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button> 
      <Dialog open={open} as="div" className="relative z-40 lg:hiden" onClose={onClose} >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position  */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className=" relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl" >

          </Dialog.Panel>       
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters