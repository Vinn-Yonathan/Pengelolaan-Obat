import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface RightImageLeftListProps {
  title: string;
  points: String[];
  imagePath: string;
}

const RightImageLeftList: React.FC<RightImageLeftListProps> = ({
  title,
  points,
  imagePath,
}) => {
  const rImageRef = useRef(null);
  const lListRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rImageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: rImageRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );

    gsap.fromTo(
      lListRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lListRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-full flex-wrap md:flex-nowrap flex flex-row mb-40 px-8 sm:px-12 md:px-28 lg:px-16 xl:px-20 justify-center">
      <div className="w-full flex flex-grow flex-col" ref={lListRef}>
        <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent text-center text-3xl sm:text-4xl font-bold mb-10 px-5 sm:px-14">
          {title}
        </h1>
        <ul className="xl:px-20">
          {points.map((point, idx) => (
            <li key={idx} className="text-black list-disc mx-10 py-3">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={imagePath}
        alt="obat-rusak"
        ref={rImageRef}
        className="xl:mr-32 mt-10 md:mt-0 md:max-w-80 lg:max-w-96 rounded-ss-3xl rounded-ee-3xl object-cover hover:shadow-orange-300 hover:shadow-lg duration-500"
      />
    </div>
  );
};

export default RightImageLeftList;
