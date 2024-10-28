import "./App.css";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Carousel from "./components/carousel";
import LeftImageRightList from "./components/left-image-right-list";
import gsap from "gsap";
import Accordion from "./components/accordion";
import RightImageLeftList from "./components/right-image-left-list";
import TitleAndText from "./components/title-and-text";
import MasonryLayout from "./components/masonry-layout";
import Card from "./components/card";
import Footer from "./components/footer";

const accordionItemsKerusakan = [
  {
    title: "Tanda Kerusakan Obat Tablet",
    content:
      "Timbul noda bintik-bintik; hancur/menjadi bubuk; terlepas dari kemasan; lembap, lembek, basah, dan lengket",
  },
  {
    title: "Tanda Kerusakan Obat Serbuk",
    content:
      "Timbul noda bintik-bintik; lembap, lembek, basah, dan lengket; kemasan lembap",
  },
  {
    title: "Tanda Kerusakan Obat Kapsul",
    content:
      "Cangkang kapsul menjadi lembek; terbuka sehingga isinya keluar; cangkang kapsul melekat satu sama lain maupun dengan kemasan",
  },
  {
    title: "Tanda Kerusakan Obat Cairan",
    content:
      "Keruh; mengental; mengendap; memisah; kemasan lembap atau berembun",
  },
  {
    title: "Tanda Kerusakan Obat Salep, gel, krim",
    content:
      "Mengental; mengendap; memisah; mengeras; kemasan lengket; isi bocor",
  },
  {
    title: "Tanda Kerusakan Produk Steril (termasuk injeksi)",
    content:
      "Injeksi: cairan tidak kembali menjadi suspensi setelah dikocok; kemasan bernoda; kemasan berembun; ada bagian yang hilang, rusak atau bengkok",
  },
  {
    title: "Tanda Kerusakan Obat Aerosol",
    content: "Isi sudah habis; wadah penyok",
  },
];

const accordionItemsPenyimpanan = [
  {
    title: "Cara Penyimpanan Obat Tablet & Kapsul",
    content:
      "Hindari menyimpan tablet atau kapsul di tempat yang panas atau lembab.",
  },
  {
    title: "Cara Penyimpanan Obat Cair (sirup dan suspense)",
    content:
      "Hindari menyimpan obat dalam bentuk cair di dalam lemari pendingin (freezer) agar tidak beku, kecuali jika ditentukan pada etiket atau kemasan obat.",
  },
  {
    title: "Cara Penyimpanan Obat Sediaan Vagina & Anus",
    content:
      "Sediaan obat yang digunakan dengan memasukkan ke dalam vagina (Ovula) atau anus (Suppositoria) disimpan dalam lemari es karena dalam suhu kamar akan mencair.",
  },
  {
    title: "Cara Penyimpanan Obat Aerosol / Spray",
    content:
      "Hindari menyimpan di tempat suhu tinggi untuk sediaan bentuk aerosol atau spray karena dapat menyebabkan ledakan.",
  },
];

const accordionItemsBUD = [
  {
    title: "Ketentuan BUD Obat Oral Mengandung Air",
    content:
      "Contoh : Sirup, Suspensi, Emulsi. BUD-nya tidak lebih dari 14 hari pada suhu 2-8⁰ C (suhu kulkas)",
  },
  {
    title: "Ketentuan BUD Obat Sirup Kering",
    content: "Contoh : Sirup Antibiotik. BUD-nya 7-4 hari setelah diencerkan",
  },
  {
    title: "Ketentuan BUD Obat Topikal",
    content:
      "Contoh : Krim, Gel, dan Salep. BUD-nya 30 hari setelah tutup kemasan dibuka",
  },
  {
    title: "Ketentuan BUD Obat Tetes Mata Minidose",
    content: "BUD-nya 3×24 jam setelah tutup kemasan dibuka",
  },
  {
    title: "Ketentuan BUD Obat Tetes Mata / Tetes Telinga",
    content: "BUD-nya 28 hari setelah tutup kemasan dibuka",
  },
  {
    title: "Ketentuan BUD Obat Racikan Padat",
    content:
      "Contoh: Puyer, Kapsul. BUD-nya 25% dari ED atau 180 hari setelah peracikan",
  },
  {
    title: "Ketentuan BUD Obat Injeksi Insulin",
    content:
      "BUD-nya 28 hari di suhu ruang, 60 hari di suhu 2-8° C (suhu kulkas)",
  },
];

function App() {
  return (
    <div className="App min-h-screen w-screen bg-white from-white to-amber-50 scroll-smooth overflow-hidden">
      <header>
        <NavBar />
      </header>

      <main className="pt-8 bg-gradient-to-br">
        <section id="hero">
          <Hero />
        </section>

        <section id="tandaobatrusak">
          <LeftImageRightList
            title="Tanda-tanda Umum Obat Kadaluwarsa dan/ atau Rusak"
            points={[
              "Telah melewati tanggal kadaluwarsa yang tercantum pada kemasan",
              "Kemasan terkoyak atau rusak (pecah, retak atau berlubang)",
              "Label pada kemasan tidak lengkap, ada yang hilang atau tidak terbaca",
              "Berubah warna, bau, dan rasa",
            ]}
            imagePath={"src/assets/obat-rusak.jpg"}
          />
        </section>

        <section className="mb-40">
          <Accordion items={accordionItemsKerusakan} />
        </section>

        <section id="pembuanganwadahkemasan">
          <RightImageLeftList
            title="Pembuangan Wadah dan Kemasan"
            points={[
              "Hilangkan seluruh informasi pribadi dari kemasan obat yang sudah kosong untuk melindungi identitas dan data probadi, seperti nama dan taggal lahir pasien",
              "Untuk menghindari penyalahgunaan bekas wadah obat hendaknya dibuang dengan cara dirusak (botol), digunting (pot plastik, boks, dus atau tube), atau dipecah (botol kaca) lalu kemudian dibuang di tempat sampah.",
            ]}
            imagePath={"src/assets/buang-obat.jpg"}
          />
        </section>

        <section className="mb-40" id="pemusnahanobat">
          <h1 className="bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent text-center px-5 text-3xl sm:text-4xl font-bold mt-10 mb-10">
            Pemusnahan Obat - Obatan
          </h1>
          <Carousel />
        </section>

        <section className="mb-20" id="penyimpananobat">
          <TitleAndText
            title="Penyimpanan Obat"
            text="Penyimpanan obat merupakan suatu kegiatan menyimpan dan memelihara dengan cara menempatkan obat dan perbekalan kesehatan yang diterima pada tempat yang dinilai aman dari pencurian serta gangguan fisik yang dapat merusak mutu obat dan perbekalan kesehatan. Penyimpanan obat yang tepat sangat penting untuk menjaga efektifitas obat. Umumnya obat harus disimpan di tempat sejuk dan kering. Beberapa obat memerlukan penyimpanan dengan suhu khusus seperti di lemari es atau bahkan freezer. Tidak semua obat perlu diletakkan pada lemari es. Baca ketentuan pada kemasan obat atau menanyakan pada apoteker untuk penyimpanan obat."
          />
        </section>

        <section className="mb-40">
          <MasonryLayout />
        </section>

        <section className="mb-20">
          <LeftImageRightList
            title="Bagaimana cara menyimpan obat di rumah?"
            points={[
              "Ikuti petunjuk penyimpanan pada label / kemasan.",
              "Simpan obat dalam kemasan asli dan dalam wadah tertutup rapat. Jangan pernah mengganti kemasan botol ke botol lain. Tidak melepas etiket pada wadah obat, karena tercantum nama, cara penggunaan, dan informasi penting lainnya.",
              "Simpan obat pada suhu kamar dan hindari sinar matahari langsung.",
              "Jangan menyimpan obat di tempat panas atau lembab.",
              "Jangan menyimpan obat bentuk cair dalam lemari pendingin agar tidak beku, kecuali jika tertulis pada etiket obat.",
              "Jangan menyimpan obat yang telah kadaluarsa atau rusak.",
              "Jangan meninggalkan obat di dalam mobil untuk jangka lama.",
              "Dijauhkan dari jangkauan anak-anak.",
              "Perhatikan tanda-tanda kerusakan obat dalam penyimpanan, seperti perubahan warna, bau, penggumpalan.",
              "Periksa secara rutin tanggal kadaluarsa dan kondisi obat.",
            ]}
            imagePath="src/assets/rumah.jpg"
          />
        </section>

        <section className="mb-40">
          <p className="text-black text-justify px-10 sm:px-25 md:px-35 lg:px-50 xl:px-60 mb-10">
            Penyimpanan obat yang tepat sangat penting untuk menjaga efektifitas
            obat. Umumnya obat harus disimpan di tempat sejuk dan kering.
            Beberapa obat memerlukan penyimpanan dengan suhu khusus seperti di
            lemari es atau bahkan freezer. Tidak semua obat perlu diletakkan
            pada lemari es. Baca ketentuan pada kemasan obat atau menanyakan
            pada apoteker untuk penyimpanan obat.
          </p>
          <Accordion items={accordionItemsPenyimpanan} />
        </section>

        <section className="mb-20" id="bataspenggunaanobat">
          <TitleAndText
            title="Batas Penggunaan Obat"
            text="BUD (Beyond Use Date) adalah batas waktu penggunaan produk obat setelah diracik atau setelah kemasan primernya dibuka/dirusak. Kemasan primer adalah kemasan yang langsung bersentuhan dengan bahan obat. BUD tidak selalu tercantum dalam kemasan obat. Beyond Use Date (BUD) Berbeda dengan Expired Date (ED). Expired Date (ED) adalah batas waktu penggunaan obat setelah diproduksi oleh pabrik farmasi sebelum kemasan primernya dibuka. ED selalu tercantum pada kemasan obat. Tujuan mengetahui BUD obat adalah mampu menentukan suatu produk obat masih berada dalam keadaan steril/bebas dari cemaran mikroba sehingga aman untuk digunakan. Cara mengetahui BUD obat, cek informasi pada kemasan atau brosur obat."
          />
          <div className="mb-10"></div>
          <Card
            title="Catatan:"
            text="Tanggal kadaluwarsa biasanya tertera di kemasan obat, umumnya tertulis dengan tulisan: “EXP”; “Exp. Date”; “Best Before”; “Baik digunakan sebelum”. Contoh: Jika tertulis “20/06/2020” artinya setelah tanggal 20 Juni 2020 obat sudah tidak boleh digunakan. Jika tertulis “Mei 2014”, maka obat masih dapat digunakan sampai tanggal 31 Mei 2014, setelah tanggal tersebut sudah tidak boleh digunakan."
            imgPath="src/assets/expired-date.jpg"
          />
        </section>

        <section className="pb-16">
          <Accordion items={accordionItemsBUD} />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
