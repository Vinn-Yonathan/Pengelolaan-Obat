import React, { useState } from "react";
import { Link } from "react-scroll";
import { useEffect } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBlur, setBlur] = useState(false);
  const [windowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-6 fixed top-0 w-screen left-0 text-sm z-10 transition duration-200 ${
        isBlur
          ? `${
              windowWidth < 768 && isOpen
                ? `bg-transparent`
                : `backdrop-blur-lg bg-opacity-20 bg-white`
            }`
          : "bg-transparent"
      }`}
    >
      <div className="container flex space-x-8 items-center md:justify-center justify-between mx-auto">
        <div className="font-bold bg-gradient-to-br bg-clip-text from-red-500 via-orange-400 to-amber-300 text-transparent">
          <img
            src="assets/Logo Ma Chung.png"
            alt="logo Ma Chung"
            className="max-w-12 mr-8"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src="assets\icons\hamburger.svg" alt="Menu Icon" />
          </button>
        </div>

        {/* Nav full screen */}
        <div className={`w-full md:flex md:items-center md:w-auto hidden`}>
          <ul className="flex space-x-10 items-center text-center">
            <li>
              <Link
                to="hero"
                smooth={true}
                offset={-100}
                duration={500}
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
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
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
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
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
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
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
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
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
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
                className="text-black cursor-pointer font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-sm"
              >
                Batas Penggunaan Obat
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`w-full fixed inset-0 transform ${
          isOpen
            ? "translate-x-0 bg-amber-200 bg-opacity-90"
            : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <img src="assets/icons/close.svg" alt="close" />
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-5 text-black">
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={-100}
              duration={500}
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
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
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
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
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
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
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
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
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
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
              className="text-black font-bold hover:bg-gradient-to-br hover:bg-clip-text hover:from-red-500 hover:via-orange-400 hover:to-amber-300 hover:text-transparent hover:font-extrabold hover:duration-300 text-base"
            >
              Batas Penggunaan Obat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
