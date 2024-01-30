import React, { useState } from 'react'
import NoticeDisney from './NoticeDisney';
import { testimonials } from '../lib/menus';
import Facebook from '../assets/Facebook';
import Insta from '../assets/Insta';
import Pinterest from '../assets/Pinterest';
import { motion } from "framer-motion"
import Button from './Button';

const Card = ({ 
    image, 
    title, 
    link, 
    text, 
    selected, 
    setSelected, 
    position
}) => {
    const offset = position <= selected ? 0 : 100; 
    return (
        <div className="w-full h-full flex justify-center">
            <motion.div 
                initial={false}
                style={{
                    zIndex: position
                }}
                animate={{
                    x: `${offset}%`
                }}
                transition={{
                    duration: 0.25, 
                    ease: "easeOut" 
                }}
                onClick={() => setSelected(position)}
                className="absolute top-0 left-0 w-full min-h-full p-8 flex flex-col justify-center items-center">
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                        <img className="w-full h-full object-fill object-center" src={image} alt={title} />
                    </div>
                    <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
                        <h1 className="text-4xl font-bold uppercase">echo comics</h1>
                        <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, eos!</p>
                        <Button link={link} text={text} />
                    </div>
            </motion.div>
        </div>
    )
}

const SelectedBtns = ({numTracks, setSelected, selected}) => {
    return (
        <div className="flex space-x-2">  
            {numTracks.map((item, index, array) => (
                <button 
                    onClick={() => setSelected(index)} 
                    key={index}
                    className="h-2 w-full bg-slate-300 relative"
                >
                    {
                        selected === index ? (

                            <motion.span 
                                className="absolute top-0 left-0 bg-red-600 w-full h-full"
                                initial={{
                                    width: "0%"
                                }}
                                animate={{
                                    width: "100%"
                                }}
                                transition={{
                                    duration: 5, 
                                    ease: "easeOut"
                                }}
                                onAnimationComplete={() => {
                                    setSelected(selected === array.length - 1 ? 0 : selected + 1)
                                }}
                               >
                            </motion.span>
                        ):(
                            <span className="absolute top-0 left-0 bg-red-600" style={{
                                width: selected > index ? "100%" : "0%"
                            }}>

                            </span>
                        )
                    }
                   <p 
                   className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${selected === index && "text-red-600"} uppercase`}> 
                    {item.title}
                   </p>
                </button>
            ))}
        </div>
    )
}
export default function MainSlide() {
    const [selected, setSelected ] = useState(0);
  return (
    <section className="w-full flex flex-col overflow-hidden">
                <NoticeDisney />
                    {/* 그림영역 */}
                    <div className="relative w-full h-[560px]">
                        {
                            testimonials.map((item, index) => (
                                // 5개중의 1개 아이템 
                                <Card 
                                    key={index} 
                                    {...item} 
                                    selected={selected} 
                                    setSelected={setSelected} 
                                    position={index}
                                />
                            ))
                        }
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
  )
}
