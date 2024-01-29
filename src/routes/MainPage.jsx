import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";

export default function MainPage() {
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  //console.log(isLoading, data); // 로딩상태(true, false), 데이터
  // ["쿼리 키"], 함수
  let lists; // fetch 요청한 배열을 받기 위한 변수
  // 데이터가 불러와진 상태(false)가 됐을 때 데이터 담기
  if(!isLoading) {
    lists = data?.data.results;
  }

  const {data:dataEvents, isLoading:isLoadingEvents} = useQuery(["getEvents"], apiGetEvents);
  let events;
  if(!isLoadingEvents) {
    events = dataEvents?.data.results;
  }

  return (
    <>
      <Layout>
        {/* 메인 슬라이드 컴포넌트 */}
        <MainSlide />
        {/* 코믹스 섹션 */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        {/* 리스트 캐러셀 */}
        <ListCarousel lists={lists}/>
        {/*  */}
        <section className="w-full flex justify-center">
          <div className="max-w-7xl w-full grid grid-cols-[7fr_3fr]">
            {/* 1. 왼쪽 */}
            <div className="w-full h-full">
              {/* 타이틀 */}
              <TitleRotate text="The Events" />
              {/* 이벤트 API에서 불러오기 */}
              <div className="w-full">
                {
                  events?.map((item, index) => (
                    <div key={index} className="flex items-center border-b-2 py-4 space-x-6">
                      <img src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="thumbnail" 
                      className="w-72 object-cover"/>
                      <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-xl font-semibold">{item?.title}</h2>
                        <p>{item?.description}</p>
                        <p className="text-gray-500">{item.start?.substr(0, 10)}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* 2. 오른쪽 */}
            <div className="w-full h-full">
              <div className="relative flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" fill="none" stroke="#C6A972" stroke-width="3"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg>
                <div className="absolute top-4 left-[50%] translate-x-[-50%] space-y-2 border-b-2 py-6
                flex flex-col justify-center w-[80%]">
                  <h2 className="text-3xl font-bold text-center">THE HYPE BOX</h2>
                  <p className="text-sm text-center">Can’t-miss news and updates from across the Marvel Universe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
