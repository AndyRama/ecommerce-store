import getBillboard from "@/actions/get-billboard"
import Container  from "../components/ui/container"
import Billboard from "../components/billboard";
import getProducts from "@/actions/get-products";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true})
  const billboard = await getBillboard("b0baf98d-9f14-429b-a99c-bd5b737134d7")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products}/>
      </div>
    </Container>
  )
} 

export default HomePage