import React, { useState } from "react";
import NoticeDisney from "./NoticeDisney";
import Tumb from "../assets/Tumb";
import Insta from "../assets/Insta";
import Twitter from "../assets/Twitter";
import { motion } from "framer-motion";
import Button from "./Button";
import TitleRotate from "./TitleRotate";

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex">
      {/* testimonials 배열을 순회하며 각각의 버튼 렌더링 */}
      {numTracks.map((item, index, array) => (
        <button
          key={index}
          onClick={() => setSelected(index)} // 버튼 클릭 시 버튼 인덱스로 변경
          className="h-2 w-1/5 border-r-4 border-white bg-slate-300 relative"
        >
          {selected === index ? (
            <motion.span
              className="absolute top-0 left-0 bg-red-600 w-full h-full"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "easeOut",
              }}
              onAnimationComplete={() => { // 애니메이션이 완료될 때 다음 선택된 버튼으로 변경
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
            ></motion.span>
          ) : (
            // 선택되지 않은 버튼인 경우
            <span
              className="absolute top-0 left-0 bg-red-600"
              style={{
                width: selected > index ? "100%" : "0%",
              }}
            ></span>
          )}
          <p
            className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${
              selected === index && "text-red-600"
            } uppercase truncate`}
          >
            {item.title}
          </p>
        </button>
      ))}
    </div>
  );
};

const Card = ({logoImage, image, title, link1, link2, btn1, btn2, desc, selected, setSelected, position}) => {
  const offset = position <= selected ? 0 : 100; // testimonials요소의 position(인덱스) <= 선택된 버튼
  return (
    <div className="w-full h-full flex justify-center">
      {/* Framer Motion을 사용한 이미지 이동 효과 적용 */}
      <motion.div className="absolute top-0 left-0 w-full min-h-full p-8 flex flex-col justify-center items-center"
        initial={false}
        style={{
          zIndex: position,
        }}
        animate={{
          x: `${offset}%`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        onClick={() => setSelected(position)}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          {/* 백그라운드 이미지 */}
          <img className="w-full h-full object-cover md:object-center" src={image} alt={title} />
          {/* 텍스트 */}
          <div className="absolute max-w-7xl w-full h-full flex flex-col justify-center p-5 text-white space-y-4 ">
            {
              logoImage ?
              <div className="">
                <img src={logoImage} alt="slide_logo" className="h-12 object-contain" />
              </div>
              : (
              <TitleRotate text={"MARVEL"}/>
              )
            }
              
            <h1 className="text-3xl md:text-4xl font-bold uppercase">{title && title}</h1>
            <p className="md:text-lg truncate">
              {desc ? desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit Exercitationem, eos!"}
            </p>
            <div className="flex space-x-4">
              {link1 && <Button link={link1} text={btn1} />}
              {link2 && <Button link={link2} text={btn2} />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function MainSlide({ testimonials }) {
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full flex flex-col overflow-hidden">
      <NoticeDisney />
      {/* 그림영역 */}
      <div className="relative w-full h-[560px]">
        {testimonials.map((item, index) => (
          // testimonials배열 요소 5개 각각의 대한것을 Card 컴포넌트에 넘기기
          <Card
            key={index}
            {...item}
            selected={selected}
            setSelected={setSelected}
            position={index} // 각각의 아이템에 z-index를 위해
          />
        ))}
      </div>
      {/* 버튼영역 */}
      <div className="w-full h-20 flex justify-center">
        <div className="max-w-7xl h-full w-full grid grid-cols-4">
          {/* 1: 75% grid-cols-3 */}
          <div className="col-span-3 -translate-y-12 bg-white z-30 border-l-4 border-white text-sm font-bold">
            <SelectedBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* 2: 25% grid-cols-1 */}
          <div className="flex w-full h-full p-5 justify-end space-x-4 items-center z-30">
            <Tumb />
            <Insta />
            <Twitter />
          </div>
        </div>
      </div>
    </section>
  );
}
