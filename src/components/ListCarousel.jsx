import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useMeasure } from "react-use";
import { useState } from "react";

const Listitem = ({item, CARD_WIDTH, CARD_HEIGHT, MARGIN}) => (
    <div className="shrink-0 group cursor-pointer" style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        margin: MARGIN
    }}>
        {/* 1. 이미지 박스 */}
        <div className="w-full h-[280px]">
            <img className="w-full h-full object-cover object-center duration-500 group-hover:-translate-y-3"
            src={`${item.thumbnail?.path}.${item.thumbnail.extension}`} alt="comic_image" />
        </div>
        {/* 2. 타이틀 */}
        <div>
            <h2 className="text-sm font-semibold duration-300 group-hover:text-red-600">
              {item.title ? item?.title.substr(0, 20) : item?.name.substr(0, 20)}</h2>
            <h4 className="text-sm text-gray-500">{item.modified.substr(0,10)}</h4>
        </div>
    </div>
)

export default function ListCarousel({lists}) {
    // motion
  const CARD_WIDTH = 195;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;

  const BREAKPOINT = {
    sm: 640,
    lg: 1024,
  };

  const [ref, {width}] = useMeasure();
  const[offset, setOffset] = useState(0);
  
  // 반응형
  const CARD_BUFFER = width > BREAKPOINT.lg ? 3 : width > BREAKPOINT.sm ? 2 : 1;
  // 이동이 가능한지에 따른 버튼 노출
  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);
  // 왼쪽 이동 함수
  const shiftLeft = () =>{
    if(!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE))
  }
  // 오른쪽 이동 함수
  const shiftRight = () => {
    if(!CAN_SHIFT_RIGHT) return;
    setOffset(pv => pv -= CARD_SIZE)
  }
  return (
    <section className="w-full flex justify-center">
      <div
        ref={ref}
        className="relative max-w-7xl w-full overflow-hidden bg-white -translate-y-12 p-2"
      >
        <motion.div
          animate={{
            x: offset,
          }}
          className="w-full flex"
        >
          {lists?.map((item, index) => (
            <Listitem
              item={item}
              key={index}
              CARD_WIDTH={CARD_WIDTH}
              CARD_HEIGHT={CARD_HEIGHT}
              MARGIN={MARGIN}
            />
          ))}
        </motion.div>
        {/* left 버튼 */}
        <motion.button
          initial={false}
          animate={{
            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
          }}
          onClick={shiftLeft}
          className="absolute left-0 top-[35%] bg-slate-500/50 p-3 pl-2 text-4xl text-white hover:pl-3 duration-100"
        >
          <FaAngleLeft />
        </motion.button>
        <motion.button
          initial={false}
          animate={{
            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
          }}
          onClick={shiftRight}
          className="absolute right-0 top-[35%] bg-slate-500/50 p-3 pr-2 text-4xl text-white hover:pr-3 duration-100"
        >
          <FaAngleRight />
        </motion.button>
      </div>
    </section>
  );
}
