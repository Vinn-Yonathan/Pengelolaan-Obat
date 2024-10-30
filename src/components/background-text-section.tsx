import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BackgroundTextSectionProps {
  text: string;
  path: string;
}

const BackgroundTextSection: React.FC<BackgroundTextSectionProps> = ({
  text,
  path,
}) => {
  const textRefs = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRefs.current && triggerRef.current) {
        const triggerPoint = triggerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPoint < windowHeight) {
          gsap.to(textRefs.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
      }
    };
    if (textRefs.current) {
      gsap.set(textRefs.current, { opacity: 0, y: 50 });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      ref={triggerRef}
      className="relative flex justify-center items-center bg-center bg-cover mt-6 min-h-[250px] w-full bg-opacity-50"
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0 z-1"></div>
      <p
        ref={textRefs}
        className="text-white px-56 xl:px-18 lg:px-16 md:px-14 sm:px-12 text-center xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs z-10"
      >
        {text}
      </p>
    </div>
  );
};

export default BackgroundTextSection;
