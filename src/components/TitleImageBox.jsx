import React from "react";
import TitleRotate from "./TitleRotate";
import Button from "./Button";
{/* 코믹스 섹션 */}
export default function TitleImageBox({imgUrl, mainTitle, subTitle, description, btnTxt}) {
  return (
    <section className="w-full">
      {/* 이미지로 된 타이틀 */}
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
        }}
        className="relative w-full h-[500px] flex justify-end bg-main-dark"
      >
        {/* 오른쪽에 배경이미지 */}
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 14% 100%)",
          }}
          className="w-[55%] h-full"
        >
          <img
            className="w-full h-full object-cover object-center"
            src={imgUrl}
            alt="comics_title_img"
          />
        </div>
        {/* 절대포지션 부모요소 전체 선택 */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="max-w-7xl w-full h-full flex flex-col justify-center text-white space-y-4">
            <div className="p-5 space-y-2">
              {/* 사선으로 된 제목 */}
              <TitleRotate text={mainTitle} />
              <h1 className="text-3xl md:text-4xl font-bold uppercase">
                {subTitle}
              </h1>
              <p className="truncate md:text-lg">{description}</p>
            </div>
            <div className="pl-5">
              <Button outline="outline" text={btnTxt} />
            </div>
          </div>
        </div>
      </div>
      {/* 코믹스 리스트 */}
    </section>
  );
}
