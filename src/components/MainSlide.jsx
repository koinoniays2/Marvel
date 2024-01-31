import React, { useState } from "react";
import NoticeDisney from "./NoticeDisney";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinterest from "../assets/Pinterest";
import { motion } from "framer-motion";
import Button from "./Button";

const Card = ({logoImage, image, title, link1, link2, btn1, btn2, desc, selected, setSelected, position}) => {
  const offset = position <= selected ? 0 : 100;
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
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
          {/* 백그라운드 이미지 */}
          <img className="w-full h-full object-cover object-center" src={image} alt={title} />
          {/* 텍스트 */}
          <div className="absolute max-w-7xl w-full h-full flex flex-col justify-center text-white space-y-4">
            {logoImage && (
              <div className="h-16">
                <img src={logoImage} alt="slide_logo" className="h-full object-cover" />
              </div>
            )}
            <h1 className="text-4xl font-bold uppercase">{title && title}</h1>
            <p className="text-xl">
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

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {/* testimonials 배열을 순회하며 각각의 버튼 렌더링 */}
      {numTracks.map((item, index, array) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className="h-2 w-full bg-slate-300 relative"
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
            } uppercase`}
          >
            {item.title}
          </p>
        </button>
      ))}
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
          // 5개중의 1개 아이템
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
          <div className="col-span-3 -translate-y-12 bg-white z-30 text-sm font-bold">
            <SelectedBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* 2: 25% grid-cols-1 */}
          <div className="flex w-full h-full justify-end space-x-4 items-center">
            <Facebook />
            <Insta />
            <Pinterest />
          </div>
        </div>
      </div>
    </section>
  );
}
