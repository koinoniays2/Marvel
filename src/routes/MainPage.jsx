import { useQuery } from "react-query";
import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetComics } from "../api";

export default function MainPage(){
    const { data, isLoading } = useQuery(["getComics"], apiGetComics);
    // console.log(isLoading, data); // 로딩상태(true, false), 데이터
    // ["쿼리 키"], 함수

    return (
        <>
            <Layout>
                {/* 메인 슬라이드 컴포넌트 */}
                <MainSlide />
                {/* 코믹스 섹션 */}
                <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
                <Layout7>
                    <div className="w-full h-60 bg-red-500">
                    </div>
                </Layout7>
            </Layout>  
        </>
        )
    }

    