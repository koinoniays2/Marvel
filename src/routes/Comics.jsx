import React from 'react'
import MainSlide from '../components/MainSlide'
import TitleRotate from '../components/TitleRotate'
import Layout from '../components/Layout'
import { testimonials2 } from '../lib/menus'
import { useQuery } from 'react-query'
import { apiGetComics } from '../api'
import { Link } from 'react-router-dom'

export default function Comics() {
  const {data, isLoading} = useQuery(["getComics"], apiGetComics);
  let comicsData;
  if(!isLoading) {
    comicsData = data?.data?.results;
  }
  // console.log(comicsData);
  return (
    <>
    <Layout>
        <MainSlide testimonials={testimonials2}/>
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <TitleRotate text="Comics" />
              <div className="w-full grid grid-cols-6 gap-4 py-4">
              {
                comicsData?.filter((item) => !item.thumbnail?.path.includes("image_not_available"))
                .map((item, index, array) => (
                  // Link로 array를 state로 보내기(useLocation으로 받기)
                  <Link to={`/comics/${item.id}`} state={{comics: array}}>
                    <div key={index} className="w-full group cursor-pointer">
                      <img className="w-full h-72 object-center object-cover group-hover:-translate-y-3 duration-300" 
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} />
                      <div className="p-2">
                        <p className="truncate font-bold group-hover:text-red-500">{item?.title}</p>
                        <p className="text-gray-500">{ item?.modified?.includes("-0001") ? "" :
                        item?.modified?.substr(0, 10)
                        }</p>
                      </div>
                    </div>
                  </Link>
                ))
              }
              </div>
          </div>
        </div>
    </Layout>
    </>
  )
}
