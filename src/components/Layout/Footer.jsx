import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col  items-center bg-gray-900 p-7">
      <a
        href="https://github.com/mohmmad-owais"
        className="text-gray-600 hover:text-orange-500 cursor-pointer"
      >
        Github
      </a>
      <h2 className="text-white transition cursor-pointer ">
        <span className="text-gray-600">by</span> Mohammad Owais{" "}
        <span className="text-gray-600">2022</span>{" "}
      </h2>
    </div>
  );
};

export default Footer;
