import getProducts from "@/actions/get-products"

export const revalidate = 0

interface CategoryPageProps {
  params: {
    colorId: string | undefined
    sizeId: string | undefined
    categoryId: string
  }, 
  searchParams: {
    colorId: string
    sizeId : string
  }
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: params.colorId,
    sizeId: params.sizeId,
  })
  
  return (
    <div>
      Category
    </div>
  )
}

export default CategoryPage