"use client"

import Image from 'next/image'

import { Product } from '@/types'

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  return (
      <div className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
        {/* Image and Actions */}
        <div className='aspect-square rounded-xl bg-gray-100 relative'>
            <Image 
              src={data?.images?.[0]?.url}
              alt="Image"
              fill
              className='aspect-square object-cover rounded-md'
            />
          </div>
      </div>
  )
}

export default ProductCard