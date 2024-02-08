import { useQuery } from "react-query"
import { apiGetMunhwa } from "../api"

export default function Munhwa() {
    const { data, isLoading } = useQuery("getMunhaw", apiGetMunhwa);
    console.log(data);
  return (
    <div>
        {
            data?.result.item.map((item, index) => (
                <div key={index}>
                    {item.ccbaAdmin[0]}
                </div>
            ))
        }
    </div>
  )
}