import React, { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LeftImageRightListProps {
  title: string;
  points: String[];
  imagePath: string;
}

const LeftImageRightList: React.FC<LeftImageRightListProps> = ({
  title,
  points,
  imagePath,
}) => {
  const lImageRef = useRef(null);
  const rListRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lImageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: lImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );

    gsap.fromTo(
      rListRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rListRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-full flex-wrap md:flex-nowrap flex flex-row mb-20 mx-8 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-28 justify-center">
      <img
        src={imagePath}
        alt="obat-rusak"
        ref={lImageRef}
        className="mb-10 md:mb-0 md:max-w-80 lg:max-w-96 rounded-se-3xl rounded-es-3xl object-cover hover:shadow-orange-300 hover:shadow-lg duration-500"
      />
      <div className="flex flex-grow flex-col" ref={rListRef}>
        <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent text-center text-3xl sm:text-4xl font-bold mb-10 md:px-8 xl:px-0">
          {title}
        </h1>
        <ul className="xl:px-20">
          {points.map((point, idx) => (
            <li key={idx} className="text-black list-disc mx-10 ml-16 py-3">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftImageRightList;
