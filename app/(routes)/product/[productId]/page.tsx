import getProducts from "@/actions/get-products"

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({
  params
}) => {
  const Product = {}
  const suggestedProducts =await getProducts({
    categoryId: Product?.category?.id
  })
  return (
    <div> 
      Indivdual Product
    </div>
  )
}

export default ProductPage