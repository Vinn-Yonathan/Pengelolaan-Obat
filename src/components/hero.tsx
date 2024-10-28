import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="max-w-full overflow-hidden pt-36 pb-40 flex flex-row mx-8 sm:mx-12 md:mx-14 lg:mx-16 xl:mx-18 md:justify-around min-h-[20vh] md:min-h-[80vh] lg:min-h-[100vh] mb-5 justify-center items-center">
      <div className="max-w-full flex flex-col">
        <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-300 to-amber-200 text-transparent uppercase font-bold text-[2.1rem] sm:text-5xl text-center lg:text-start break-words">
          Batas Penggunaan Obat dan Pemusnahan Obat Rusak
        </h1>
        <p className="text-slate-600 2xl:text-xl xl:text-lg text-base mt-4 xl:pr-60 lg:pr-32 text-center md:text-start">
          <strong className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent">
            Obat rusak
          </strong>{" "}
          adalah obat yang tidak bisa terpakai lagi, karena mutu obat rusak
          secara fisik maupun kimiawi, sementara{" "}
          <strong className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent">
            obat kadaluwarsa
          </strong>{" "}
          adalah obat yang sudah melewati tanggal kadaluwarsa yang tercantum
          pada kemasan.
        </p>
      </div>
      <img
        src="assets\hero-image.svg"
        alt="hero-image"
        className="w-full h-auto object-cover max-w-96 hidden lg:block lg:mr-5"
      />
    </div>
  );
};

export default Hero;
