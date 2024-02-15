import { useQuery } from "react-query"
import { expressTest } from "../api"

export default function ExpressTest() {
  const { data } = useQuery("expressTest", expressTest);
  console.log(data);
  return (
    <div>ExpressTest</div>
  )
}