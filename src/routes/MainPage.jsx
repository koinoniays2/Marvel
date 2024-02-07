import { useInfiniteQuery, useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import BounceLoader from "react-spinners/BounceLoader"
import Button from "../components/Button";
import { testimonials } from "../lib/menus";

export default function MainPage() {
  // Comics Fetch {data-불러온 데이터, isLoading-로딩상태(true, false)}
  const {data, isLoading} = useQuery(["getComics"], apiGetComics); // ["쿼리 키"], 함수(데이터를 구분하기 위해)
  //console.log(isLoading, data);
  let lists; // fetch 요청한 배열을 받기 위한 변수
  if(!isLoading) { // 데이터가 불러와진 상태(false)가 됐을 때 데이터 담기
    lists = data?.data.results;
  }

  // Events Fetch
  const {data:dataEvents, isLoading:isLoadingEvents, 
    fetchNextPage, //fetchNextPage : 다음페이지를 불러옴(버튼온클릭)
    hasNextPage, // hasNextPage: 다음페이지 여부(more버튼 히든)
    isFetchingNextPage} // isFetchingNextPage: 다음페이지를 불러오는 중인지 판별(true, false)
  // useInfiniteQuery: key, query function에 pageParam을 기본으로 제공해줌
  = useInfiniteQuery(
    ["getEvents"], // 쿼리키, 캐시에 참조하는 레퍼런스
    ({pageParam = 0}) => apiGetEvents({pageParam}), // 현재 어떤 페이지에 있는지 확인할 수 있는 파라미터(0이 없으면(기본값이 없으면) undefined)
    // api 요청할 때 기본값으로 넣어서 사용 가능
    {
    getNextPageParam:(lastPage, allPages) => { // 다음페이지(새 데이터)를 불러올 때 마지막 페이지와 전체 페이지를 받아온다
      console.log(lastPage);
      console.log(allPages);
      const limit = lastPage?.data?.limit;
      const count = lastPage?.data?.count;
      if(count === limit) {
        const nextPage = allPages.length;
        return nextPage;
      }else {
        return null;
      }
    } //리턴값을 pageParam으로 전달해줌
  });
  // let events;
  // if(!isLoadingEvents) {
  //   events = dataEvents?.data.results;
  // }
  console.log(dataEvents);

  // Characters Fetch
  const {data:dataCharacters, isLoading:isLoadingCharacters} = useQuery(["getCharacters", { limit: 10 }], apiGetCharacters); //api.js로 limit 값 보내기
  let characters;
  if(!isLoadingCharacters) {
    characters = dataCharacters?.data.results;
  }

  return (
    <>
      <Layout>
        {/* 메인 슬라이드 컴포넌트 */}
        <MainSlide testimonials={testimonials}/>
        {/* 코믹스 섹션 */}
        <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg"
        mainTitle="available now"
        subTitle="NEW ON MARVEL UNLIMITED"
        description="Read these plus 30,000+ digital comics for $9.99 a month!"
        btnTxt="get marvel unlimited"
        />
        {/* Comics 리스트 캐러셀 */}
        <ListCarousel lists={lists}/>
        {/* 이벤트 */}
        <section className="w-full flex justify-center">
          <div className="max-w-7xl grid-cols-1 w-full grid md:grid-cols-[7fr_3fr]">
            {/* 1. 왼쪽 */}
            <div className="w-full h-full">
              {/* 타이틀 */}
              <TitleRotate text="The Events" />
              {/* 이벤트 API에서 불러오기 */}
              <div className="w-full">
              { dataEvents?.pages.map((page) => 
                page?.data.results.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center border-b-2 py-4 space-x-6">
                    <img src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="thumbnail" 
                    className="w-72 object-cover"/>
                    <div className="flex flex-col justify-center space-y-4">
                      <h2 className="text-xl font-semibold">{item?.title}</h2>
                      <p>{item?.description}</p>
                      <p className="text-gray-500">{item.start?.substr(0, 10)}</p>
                    </div>
                  </div>
                ))
              )}
              </div>
              {
                hasNextPage &&
                <div className="w-full flex justify-center pb-8 pt-4">
                  <Button text="load more"onClick={() => fetchNextPage()} isFetching={isFetchingNextPage} />
                </div>
              }
            </div>
            {/* 2. 오른쪽 */}
            <div className="w-full h-full ml-8 mb-16">
              <div className="relative flex flex-col justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" fill="none" stroke="#C6A972" strokeWidth="3"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg>
                <div className="space-y-2 py-6
                flex flex-col justify-center w-[80%]">
                  <h2 className="text-3xl font-bold text-center">THE HYPE BOX</h2>
                  <p className="text-sm text-center">Can’t-miss news and updates from across the Marvel Universe</p>
                </div>
                {
                  dataEvents?.pages.map((page) => 
                  page?.data.results?.map((item, index) => (
                    <div key={index} className="flex items-center py-4 space-x-6">
                      <img src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`} alt="thumbnail" 
                      className="w-24 object-cover"/>
                      <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-xl font-semibold">{item?.title}</h2>
                        {/* <p>{item?.description}</p> */}
                        <p className="text-gray-500">{item.start?.substr(0, 10)}</p>
                      </div>
                    </div>
                  ))
                )}
                <svg className="absolute right-0 bottom-[-32px]" xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" fill="none" stroke="#C6A972" strokeWidth="3" transform="scale(-1, -1)"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg>
              </div>
            </div>
          </div>
        </section>
        {/* 캐릭터 */}
        <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/new_com_20240131_set_01.jpg"
        mainTitle="on sale 1/31"
        subTitle="new comics this week"
        description="Check out the newest Marvel comics coming out this week!"
        btnTxt="print subscription"
        />
        {/* Characters 리스트 캐러셀 */}
        { isLoadingCharacters ? (<Layout7> 
          <div className="w-full flex justify-center py16">
            <BounceLoader color="red" />
          </div>
        </Layout7>) : (
        <ListCarousel lists={characters} />
        )
          }
        {/* 마블 인사이더 */}
        <section className="w-full h-80 flex justify-center bg-black">
          <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-[4fr_6fr]">
          {/* 왼쪽 */}
            <div className="w-full h-full ">
              <div className="w-full h-full">
                <img className="h-full w-full object-cover"
                src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="marvel_insider"/>
              </div>
            </div>
          {/* 오른쪽 */}
            <div className="w-full h-full flex flex-col text-white items-center justify-center space-y-2">
              <h3 className="text-red-600 uppercase">marvel insider</h3>
              <h4 className="text-2xl font-semibold">Watch, Earn, Redeem!</h4>
              <p>Get rewarded for doing what you already do as a fun</p>
              <div className="py-4">
                <Button text="join now"/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
