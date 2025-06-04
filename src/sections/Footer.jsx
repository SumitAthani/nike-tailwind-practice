import React from "react";
import { footerLogo } from "../assets/images";
import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section id="contact-us" className="text-white-400 ">
      <div className="flex max-lg:flex-col ">
        {" "}
        <div>
          <img src={footerLogo} alt="" height={46} width={150} />
          <p className="max-w-sm mt-5 leading-7 font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4 mt-7">
            <div className="bg-white h-[45px] w-[45px] flex justify-center items-center rounded-full">
              <img src={facebook} alt="" />
            </div>
            <div className="bg-white h-[45px] w-[45px] flex justify-center items-center rounded-full">
              <img src={instagram} alt="" />
            </div>
            <div className="bg-white h-[45px] w-[45px] flex justify-center items-center rounded-full">
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-1 flex-wrap max-lg:mt-20 lg:gap-10 gap-20">
          {footerLinks.map((link) => {
            return (
              <div className="">
                <h4 className="font-montserrat text-2xl font-semibold mb-5">
                  {link.title}
                </h4>
                <ul>
                  {link.links.map((link) => (
                    <li
                      className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
