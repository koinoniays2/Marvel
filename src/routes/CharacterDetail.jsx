import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import { useQuery } from "react-query";
import { apiGetCharacterDtail } from "../api";

export default function CharacterDetail() {
    let detail;
    const { id } = useParams(); // useParams으로 주소의 id값 가져오기
    const { data, isLoading } = useQuery(["GetCharacterDtail", { id }], apiGetCharacterDtail);
    if(!isLoading) {
      detail = data?.data.results[0];
    }
    console.log(detail);

  return (
    <Layout>
        <div className="relative w-full flex justify-center py-16" style={{
          backgroundSize: "cover", backgroundPosition: "center",
          backgroundImage: `url('${detail?.thumbnail.path}.${detail?.thumbnail.extension}')`}}>
            <div className="max-w-7xl w-full h-full grid grid-cols-[1fr_2fr] z-10">
              {/* 왼쪽 : 이미지 */}
              <div className="w-full h-full">
                <img className="w-[90%] aspect-[2/3] object-cover" src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`} alt="character_image" />
              </div>
              {/* 오른쪽 */}
              <div className="w-full h-full flex flex-col text-white space-y-8">
                <h1 className="text-xl font-semibold">{detail?.name}</h1>
                <div>
                  <h2 className="text-xl font-semibold">Published</h2>
                  <p>{detail?.modified?.substr(0, 10)}</p>
                </div>
                {/* 코믹스 */}
                <div>
                  <h2 className="text-xl font-semibold">Comics</h2>
                  {detail?.comics?.items?.slice(0, 5).map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </div>
                {/* 이벤츠*/}
                <div>
                  <h2 className="text-xl font-semibold">Events</h2>
                  {detail?.events?.items?.slice(0, 5).map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Description</h2>
                  <p>{detail?.description ? detail?.description : "-" }</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-main-dark/90"></div>
        </div>
        <div className="w-full flex justify-center">
            {/* <div className="max-w-7xl w-full h-80 bg-red-500"></div> */}
        </div>
    </Layout>
  )
}
