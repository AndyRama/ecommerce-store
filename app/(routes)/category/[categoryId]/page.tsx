import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"

import Container from "@/app/components/ui/container"
import Billboard from "@/app/components/billboard"

export const revalidate = 0

interface CategoryPageProps {
  params: {
    categoryId: string
    sizeId: string 
    colorId: string 
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
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      <Container> 
        <Billboard 
          data={ category.billboard }
         />
         <div className="px-4 sm:px-6 lg:px-8 pb-24" >

         </div>
      </Container>
    </div>
  )
}

export default CategoryPage