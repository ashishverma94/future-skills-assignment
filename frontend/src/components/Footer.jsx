import { footerLinks } from "../utils/data";
import IconMain from "../assets/icons-main.png";

const Footer = () => {
  return (
    <footer className="w-full text-white mb-2 h-max flex justify-center">
      <div className="bg-[black] w-[99%]  px-6 flex md:flex-row flex-col rounded-bl-[20px] rounded-br-[20px] h-max items-center ">
        <div className=" h-min flex flex-col md:flex-row w-full md:w-[75%]">
          <div className=" flex gap-1 flex-col border-black px-[50px] py-[50px] border-[2px] h-full w-1/4">
            <h1 className=" text-[20px] font-[600] space-x-1">Abstract</h1>
            {footerLinks[0].map((item) => (
              <p key={item} className="text-[14px] cursor-pointer hover:text-[15px]">
                {item}
              </p>
            ))}
          </div>
          <div className=" flex gap-1 flex-col border-black px-[50px] py-[50px] border-[2px] h-full w-1/4">
            <h1 className=" text-[20px] font-[600] space-x-1">Resources</h1>
            {footerLinks[1].map((item) => (
              <p key={item} className="text-[14px] cursor-pointer hover:text-[15px]">
                {item}
              </p>
            ))}
          </div>
          <div className=" flex gap-1 flex-col border-black px-[50px] py-[50px] border-[2px] h-full w-1/4">
            <h1 className=" text-[20px] font-[600] space-x-1">Community</h1>
            {footerLinks[2].map((item) => (
              <p key={item} className="text-[14px] cursor-pointer hover:text-[15px]">
                {item}
              </p>
            ))}
          </div>
          <div className=" flex gap-1 flex-col border-black px-[50px] py-[50px] border-[2px] h-full w-1/4">
            <h1 className=" text-[20px] font-[600] space-x-1">Resources</h1>
            {footerLinks[3].map((item) => (
              <p key={item} className="text-[14px] cursor-pointer hover:text-[15px]">
                {item}
              </p>
            ))}
            <h1 className=" text-[14px] mt-3 font-[600] space-x-1">
              Contact Us
            </h1>
            <h1 className=" text-[12px] font-[600] ">info@abstract.com</h1>
          </div>
        </div>
        <div className=" h-full flex items-end justify-center w-full md:w-[25%]">
          <div className=" w-[300px] flex flex-col justify-end items-start h-[300px] py-5">
            <img src={IconMain} alt="icon-main" className="h-[40px]" />
            <p>&copy; Copyright 2022</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
