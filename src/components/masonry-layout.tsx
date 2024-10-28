import React, { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MasonryCardProps {
  title: string;
  points: string[];
  imgPath: string;
}

const cards = [
  {
    title: "Penyebab Obat Rusak",
    points: ["Udara yang lembab", "Sinar matahari", "Suhu", "Goncangan fisik"],
    imgPath: "src/assets/obat-sinar.jpg",
  },
  {
    title: "Pertimbangan penyimpanan obat",
    points: [
      "Bentuk dan jenis sediaan",
      "Mudah atau tidaknya meledak/terbakar",
      "Stabilitas, narkotika dan psikotropika disimpan dalam lemari khusus.",
    ],
    imgPath: "src/assets/jenis-obat.jpg",
  },
  {
    title: "Tujuan penyimpanan obat",
    points: [
      "Memelihara mutu obat.",
      "Menghindari penyalahgunaan dan penggunaan yang salah.",
      "Menjaga kelangsungan persediaan.",
      "Memudahkan pencarian dan pengawasan.",
    ],
    imgPath: "src/assets/simpan-obat.jpg",
  },
  {
    title: "Dampak Penyimpanan Obat yang Salah",
    points: [
      "Obat dapat mengalami kerusakan fisik maupun kimia.",
      "Mutu obat tidak dapat terpelihara.",
      "Terjadi penggunaan yang tidak bertanggung jawab.",
      "Tidak terjaganya ketersediaan.",
      "Mempersulit pengawasan",
    ],
    imgPath: "src/assets/obat-expired.jpg",
  },
];

const MasonryCard: React.FC<MasonryCardProps> = ({
  title,
  points,
  imgPath,
}) => {
  return (
    <div className="masonry-card relative mb-6 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-10">
        <div
          className={`absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
      </div>
      <div className="relative p-6">
        <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
        <ul className="list-disc text-sm">
          {points.map((point, index) => (
            <li key={index} className="text-black">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MasonryLayout: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <div className="columns-1 sm:columns-2 mx-8 md:mx-16 xl:mx-32 2xl:mx-64 gap-6 p-6">
      {cards.map((card, index) => (
        <div key={index} ref={(el) => (cardsRef.current[index] = el!)}>
          <MasonryCard
            title={card.title}
            points={card.points}
            imgPath={card.imgPath}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
