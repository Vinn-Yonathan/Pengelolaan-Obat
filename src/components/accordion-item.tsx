import React from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center p-3"
        onClick={toggleAccordion}
      >
        <span
          className={`font-semibold text-start transition-all duration-300 ${
            isOpen
              ? "bg-gradient-to-br bg-clip-text from-red-500 via-orange-300 to-amber-300 text-transparent"
              : "text-black"
          }`}
        >
          {title}
        </span>
        {isOpen ? (
          <img src="assets/icons/keyboard-arrow-up.svg" alt="arrow-up" />
        ) : (
          <img src="assets/icons/keyboard-arrow-down.svg" alt="arrow-down" />
        )}
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-black">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
