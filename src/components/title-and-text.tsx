import React from "react";

interface TitleAndTextProps {
  title: string;
  text: string;
}

const TitleAndText: React.FC<TitleAndTextProps> = ({ title, text }) => {
  return (
    <div>
      <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent text-center px-5 text-3xl sm:text-4xl font-bold mt-10 mb-10">
        {title}
      </h1>
      <p className="text-black text-justify sm:text-center px-10 md:px-40 lg:px-50 xl:px-60">
        {text}
      </p>
    </div>
  );
};

export default TitleAndText;
