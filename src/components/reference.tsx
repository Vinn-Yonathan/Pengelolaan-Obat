import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Reference: React.FC = () => {
  const referenceRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      referenceRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: referenceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div className="max-w-full px-8 md:px-16 xl:px-32 2xl:px-64">
      <hr className="border-t-2 border-black py-2" />
      <div ref={referenceRef}>
        <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent text-2xl font-bold py-2">
          REFERENSI :
        </h1>
        <ul className="text-black">
          <li className="py-3 text-sm list-disc mx-4">
            <a
              href="https://standarobat.pom.go.id/site/product/book/detail/pedoman-mengenal-obat-kedaluwarsa-danatau-rusak-di-rumah-tangga-dan-cara-penanganannya-1"
              className="hover:text-black hover:underline"
            >
              https://standarobat.pom.go.id/site/product/book/detail/pedoman-mengenal-obat-kedaluwarsa-danatau-rusak-di-rumah-tangga-dan-cara-penanganannya-1
            </a>
          </li>
          <li className="py-3 text-sm list-disc mx-4">
            Kementerian Kesehatan RI. 2021. Cara menyimpan Obat. Jakarta :
            Direktorat Jenderal Kefarmasian dan Alat Kesehatan Kemenkes RI.
          </li>
          <li className="py-3 text-sm list-disc mx-4">
            Kementerian Kesehatan RI. 2020. Gerakan Masyarakat Cerdas
            Menggunakan Obat (GeMa CerMat). Jakarta : Direktorat Jenderal
            Kefarmasian dan Alat Kesehatan Kemenkes RI.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reference;
