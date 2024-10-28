import React from "react";
import { useState } from "react";

const Carousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    {
      id: 0,
      title: "Tablet, Pil, Puyer, Salep dan Krim",
      points: [
        "Ambil obat dari kemasan aslinya",
        "Buat obat menjadi berbentuk tidak utuh (dihancurkan)",
        "Campurkan obat dengan barang yang tidak enak seperti ampas kopi, tanah, atau bahan kotor lain. Dengan begitu obat menjadi tidak menarik bagi anak-anak, hewan peliharaan, maupun orang-orang yang sengaja mencari obat di bak sampah",
        "Taruh campuran dalam wadah yang bisa ditutup (plastik yang bisa ditutup Kembali, kaleng kosong, atau wadah lain) untuk menjaga agar obat tidak bocor atau tumpah",
        "Buang wadah ke tempat sampah",
      ],
      bgImage: "src/assets/page1.jpg",
    },
    {
      id: 1,
      title: "Sirup dan Cairan Obat Luar",
      points: [
        "Periksa apakah sudah terdapat endapan di botol. Apabila ada endapan atau obat sudah mengental, tambahkan air dan kocok untuk melarutkan endapan.",
        "Tuang cairan ke dalam plastik",
        "Tambahkan barang padat yang tidak enak seperti ampas kopi, tanah, atau bahan kotor lain",
        "Tutup plastik dengan rapat",
        "Buang plastik ke tempat sampah",
      ],
      bgImage: "src/assets/page2.jpg",
    },
    {
      id: 2,
      title: "Wadah dan Kemasan",
      points: [
        "Hilangkan seluruh informasi pribadi dari kemasan obat yang sudah kosong untuk melindungi identitas dan data probadi, seperti nama dan taggal lahir pasien",
        "Untuk menghindari penyalahgunaan bekas wadah obat hendaknya dibuang dengan cara dirusak (botol), digunting (pot plastik, boks, dus atau tube), atau dipecah (botol kaca) lalu kemudian dibuang di tempat sampah.",
      ],
      bgImage: "src/assets/page3.jpg",
    },
    {
      id: 3,
      title: "Antibiotika",
      points: [
        "Dalam setiap petunjuk penggunaannya, antibiotika harus diminum sampai habis. Namun apabila dalam keadaan tertentu terdapat sisa harus diperhatikan pembuangannya karena pembuangan antibiotika yang tidak tepat akan membahayakan kesehatan. ",
        "Antibiotik yang dibuang langsung ke saluran pembuangan air atau ditimbun ditanah akan membuat lingkungan terpapar oleh antibiotik, sehingga mencemari air minum dan tanaman yang tumbuh. Jika air minum dan makanan yang mengandung antibiotika dikonsumsi, maka dapat terjadi resistensi antibiotika.",
        "Cara membuang obat antibiotika: mengikuti cara pembuangan obat dirumah tangga.",
      ],
      bgImage: "src/assets/page4.jpg",
    },
    {
      id: 4,
      title: "Inhaler atau Aerosol",
      points: [
        "Jika sudah kosong, dapat dibuang langsung ke tempat sampah.",
        "Jika belum kosong namun sudah tidak diperlukan, dapat dikembalikan ke rumah sakit/dokter/puskesmas/klinik agar bisa dibuang dengan aman.",
        "Yang perlu diperhatikan: Pastikan wadah/botol sudah kosong. Jangan dilubangi, digepengkan atau dibakar karena dapat meledak",
      ],
      bgImage: "src/assets/page5.jpg",
    },
    {
      id: 5,
      title: "Obat Kanker (Sitotoksik, Sitostatik, Antineoplastik)",
      points: [
        "Obat kanker dapat merusak sel kanker maupun sel sehat sehingga sangat berbahaya. Jika mendapatkan obat kanker yang diminum dirumah, maka cara pembuangannya: ",
        "Sisa obat,sisa kemasan,serta sarung tangan dan wadah yang bersentuhan dengan obat kanker tersebut dikumpulkan dalam wadah tertutup rapat.",
        "Kembalikan ke rumah sakit tempat mendapatkan obat.",
      ],
      bgImage: "src/assets/page6.jpg",
    },
    {
      id: 6,
      title: "Benda-benda tajam",
      points: [
        "Tempatkan jarum dan benda-benda tajam lain pada wadah khusus pembuangan benda tajam (sharp disposal container) segera setelah digunakan. Bila tidak ada wadah khusus, dapat menggunakan toples plastik.",
        "Serahkan wadah tersebut kepada institusi Kesehatan terdekat yang dapat menerima limbah kesehatan, misalnya rumah sakit, puskesmas, atau klinik.",
        "Hal yang perlu diperhatikan bila tertusuk jarum atau terkena benda tajam lain bekas digunakan oleh orang lain, segera cuci bagian yang tertusuk dengan air atau sabun atau antiseptic (alcohol atau pembersih tangan antiseptik). Hubungi dokter atau puskesmas/ klinik/rumah sakit terdekat.",
      ],
      bgImage: "src/assets/page7.jpg",
    },
  ];

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="overflow-hidden relative w-full pb-16">
      {/* Page Content */}
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((page) => (
          <div
            key={page.id}
            className="relative w-full px-8 md:px-16 xl:px-32 2xl:px-64 flex-shrink-0 min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]"
          >
            <div className="relative w-full h-full bg-black rounded-lg shadow-md text-center bg-cover bg-center bg-opacity-60 md:bg-opacity-50 shadow-lg shadow-orange-200">
              <img
                src={`${page.bgImage}`}
                alt="background"
                className="w-full h-full object-cover absolute mix-blend-overlay rounded-lg"
              />
              <h2 className="md:text-3xl text-xl text-white font-semibold mb-4 pt-10 px-4">
                {page.title}
              </h2>
              <ul className="list-disc text-white list-inside text-left p-5">
                {page.points.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Page Indicator */}
      <div className=" flex flex-wrap justify-center space-x-2 mx-5 mt-6 mb-4">
        {pages.map((page, index) => (
          <div
            className={`w-20 h-7 md:w-20 lg:w-28 mb-2 lg:h-10 rounded-full bg-cover bg-center cursor-pointer bg-black ${
              index === currentPage ? "opacity-100" : "opacity-50"
            }`}
            style={{ backgroundImage: `url(${page.bgImage})` }}
            onClick={() => handlePageChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
