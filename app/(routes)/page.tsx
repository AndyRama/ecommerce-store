import { Container } from "lucide-react"
import Billboard from "../components/billboard"

const HomePage= () => {
  return (
    <Container>
      <div 
        className="space-y-10 pb-10"
      >
        <Billboard data={""}/>
      </div>
    </Container>
  )
} 

export default HomePage