import React from "react";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <div className="px-6 pt-6 w-screen bg-gradient-to-br from-amber-100 via-amber-300 to-red-400">
      <div className="flex flex-wrap item-center justify-around ">
        <div>
          <h5 className="font-bold text-black">Our Team</h5>
          <ul className="text-black">
            <li>Michael Resta Surya Yanuar, S.Farm, M.Farm</li>
            <li>Fibe Yulinda Cesa,S.Farm,M.Biomed</li>
            <li>Apt. Annisa Lazuardy,S.Si.,M.Farm</li>
            <li>Hendry Setiawan,ST.,M.Kom</li>
            <li>Christ Ester Lintang Pramadhani</li>
            <li>Cevin Albert Yonathan</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-end text-black">Our Content</h5>
          <ul className="flex flex-col items-end">
            <li>
              <Link
                to="hero"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="tandaobatrusak"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Tanda Obat Rusak
              </Link>
            </li>
            <li>
              <Link
                to="pembuanganwadahkemasan"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Pembuangan Kemasan
              </Link>
            </li>
            <li>
              <Link
                to="pemusnahanobat"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Pemusnahan Obat
              </Link>
            </li>

            <li>
              <Link
                to="penyimpananobat"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Penyimpanan Obat
              </Link>
            </li>

            <li>
              <Link
                to="bataspenggunaanobat"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black hover:text-slate-950 hover:font-bold hover:duration-200 text-base cursor-pointer"
              >
                Batas Penggunaan Obat
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h6 className="text-center flex justify-center text-black text-sm py-6">
        &copy;{new Date().getFullYear()}. All rights reserved.
      </h6>
    </div>
  );
};

export default Footer;
