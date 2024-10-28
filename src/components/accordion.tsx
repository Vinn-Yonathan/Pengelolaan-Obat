import React, { useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import AccordionItem from "./accordion-item";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AccordionProps {
  items: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    console.log(index);
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      accordionRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 80%",
          toggleActions: "play none none none ",
        },
      }
    );
  }, []);

  return (
    <div
      className="max-w-full px-8 md:px-16 xl:px-32 2xl:px-64"
      ref={accordionRef}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => handleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
