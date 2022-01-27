import React from "react";
import "./Layout.css";
import logo from "./../../assets/imgs/logo.jpg";
import bg from "./../../assets/imgs/bg.avif";

const TopSection = () => {
  return (
    <div className="px-5 py-3">
      <nav className="flex justify-between items-center m-auto px-6">
        <img className="w-12 h-10" src={logo} alt="" />

        <ul className="flex justify-center text-lg font-sans font-bold items-center">
          <li className="mr-7 cursor-pointer ">
            <a
              className="text-black hover:text-orange-500 transition "
              href="https://rickandmortyapi.com/documentation/"
            >
              Docs
            </a>
          </li>
          <li className="mr-7 cursor-pointer">
            <a
              className="text-black hover:text-orange-500 transition "
              href="https://rickandmortyapi.com/about/"
            >
              About
            </a>
          </li>
          <li className="rounded-lg transition cursor-pointer px-2 py-0.5 border font-normal border-orange-500 hover:bg-orange-500 ">
            <a
              className=" text-black hover:text-white transition "
              href="https://rickandmortyapi.com/help-us"
            >
              HELP US
            </a>
          </li>
        </ul>
      </nav>

      <section className="h-80 flex justify-center relative items-center">
        <h2 className="font-bold text-8xl mt-24 z-10 text-neutral-800">
          The Rick and Morty API
        </h2>
        <div className="w-full h-full mt-10 absolute">
          <img
            className="overflow-hidden w-full h-full object-cover opacity-25"
            src={bg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default TopSection;
