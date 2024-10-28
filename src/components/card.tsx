import React, { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CardProps {
  title: string;
  text: string;
  imgPath: string;
}

gsap.registerPlugin(ScrollTrigger);

const Card: React.FC<CardProps> = ({ title, text, imgPath }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );
  });

  return (
    <div
      className="relative mb-6 rounded-xl shadow-md overflow-hidden mx-8 md:mx-16 xl:mx-32 2xl:mx-64 p-6 outline outline-2 outline-black"
      ref={cardRef}
    >
      <div className="absolute inset-0 bg-white opacity-20">
        <div
          className={`absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
      </div>
      <div className="relative p-6">
        <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
};

export default Card;
