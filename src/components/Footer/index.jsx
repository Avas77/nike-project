import React from "react";
import { footerLogo } from "../../assets/images";
import {
  copyrightSign,
  facebook,
  instagram,
  twitter,
} from "../../assets/icons";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black padding-x padding-t pb-8">
      <div className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="nike logo" width={150} height={46} />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h3 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                Products
              </h3>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Air Force 1
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Air Max 1
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Air Jordan 1
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Air Force 2
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Nike Waffle Racer
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Nike Cortez
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                Help
              </h3>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  About us
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  FAQs
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  How it works
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Privacy policy
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  Payment policy
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                Get in touch
              </h3>
              <ul>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  customer@nike.com
                </li>
                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                  +92554862354
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright" width={20} height={20} />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
