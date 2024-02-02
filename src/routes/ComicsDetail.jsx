import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-use"
import Layout from "../components/Layout";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ComicsDetail() {
    // 호버시 true
    const [prevOpen, setPrevOpen] = useState(false);
    const [nextOpen, setNextOpen] = useState(false);

    // 링크에서 보낸 comics 배열 state 받기
    const location = useLocation();
    const comics = location.state.usr.comics;
    // const param = useParams();
    // console.log(param);
    const { id } = useParams();
    const item = comics?.find((comic) => comic.id === parseInt(id));
    // 몇번째 인덱스인지? (prev, next를 위해)
    const index = comics.indexOf(item);
    const next = index > 0 ? comics[index - 1] : null;
    const prev = index < comics?.length -1 ? comics[index + 1] : null;
    // console.log("current", index);
    // console.log("next", next);
    // console.log("prev", prev);

  return (
    <Layout>
        <div className="w-full h-10 bg-main-dark flex justify-center">
            <div className="uppercase text-sm font-semibold grid grid-cols-2 gap-4 text-white">
                {/* prev */}
                <div className="relative cursor-pointer"
                onMouseEnter={() => setPrevOpen(true)} onMouseLeave={() => setPrevOpen(false)} >
                    <Link to={`/comics/${prev?.id}`} state={{comics}}>
                        <div className="flex h-full items-center space-x-1" >
                            <FaArrowLeft />
                            <span>prev</span>
                        </div>
                    </Link>
                    <AnimatePresence>
                    { prevOpen && (
                        <motion.div
                        initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 15}}
                        transition={{duration: 0.3, ease:"easeOut"}}
                        className="absolute right-0 top-10 w-40 h-72 bg-white p-2">
                            <img className="w-full h-52 object-cover"
                            src={`${prev?.thumbnail?.path}.${prev?.thumbnail?.extension}`} alt="prev image" />
                            <h2 className="text-sm py-2 text-black">{prev?.title.substr(0, 28)}</h2>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                {/* next */}
                <div className="relative cursor-pointer" onMouseEnter={() => setNextOpen(true)} onMouseLeave={() => setNextOpen(false)}>
                    <Link to={`/comics/${next?.id}`} state={{comics}}>
                        <div className="flex h-full items-center space-x-1" >
                            <span>next</span>
                            <FaArrowRight />
                        </div>
                    </Link>
                    <AnimatePresence>
                        { nextOpen && (
                            <motion.div
                            initial={{opacity: 0, y: 15}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 15}}
                            transition={{duration: 0.3, ease:"easeOut"}}
                            className="absolute left-0 top-10 w-40 h-72 bg-white p-2">
                                <img className="w-full h-52 object-cover"
                                src={`${next?.thumbnail?.path}.${next?.thumbnail?.extension}`} alt="next image" />
                                <h2 className="text-sm py-2 text-black">{next?.title.substr(0, 28)}</h2>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>        
    </Layout>
  )
}