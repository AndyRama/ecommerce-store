import { Product } from "@/types"
import Currency from "@/app/components/ui/currency"


interface InfoProps {
  data: Product
}

const Info: React.FC<InfoProps> = ( {
  data
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-beteween" >
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
    </div>
  )
}
export default Info