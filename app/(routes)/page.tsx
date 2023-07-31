import getBillboard from "@/actions/get-billboard"
import Container  from "../components/ui/container"
import Billboard from "../components/billboard";

const HomePage = async () => {
  const billboard = await getBillboard("b0baf98d-9f14-429b-a99c-bd5b737134d7")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
    </Container>
  )
} 

export default HomePage