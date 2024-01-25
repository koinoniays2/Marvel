import React from "react";
 {/* 사선으로 된 제목 */}
export default function TitleRotate({text}) {
  return (
    <div className="relative w-80 h-20 flex items-center">
      {/* 텍스트 */}
      <span className="uppercase tracking-widest text-xl">{text}</span>
      {/* 사선 */}
      <div className="absolute left-0 top-[70px] w-20 h-[1px] bg-[#c6a972] origin-bottom-left -rotate-45"></div>
    </div>
  );
}
