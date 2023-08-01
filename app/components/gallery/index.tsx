"use client"

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { Image as ImageType } from "@/types"

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
    <Tab.Group as="div" className="flex flex-cols-reverse"> 
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="gird grid-cols-4 gap-6 ">
          { images.map((image) => {
            <GalleryTab />
          })}
        </Tab.List>
      </div>
    </Tab.Group>
  )
}

export default Gallery