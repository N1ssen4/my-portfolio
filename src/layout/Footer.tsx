import React from "react";
import { SocialIcon } from "react-social-icons";
interface FooterContent {
  SOME: { SOMEtitle?: string; SOMElink: string }[];
}
const Footer = (props: FooterContent) => {
  const {SOME} = props;
  return (
    <div className="bg-[rgb(0,7,4)]/70 font-Dosis pb-4 pt-4">
      <div>
        <div className="space-y-3 text-center text-white md:hidden ">
          <p>Develoved by Mads Rosenlund Nissen</p>
          <p>Made with Typescript, React, NextJS and Tailwindcss</p>
          <div className="space-x-3">
            {SOME.map((item) => (
              <div key={""} className="inline justify-center">
                <div className="inline-block">
                  <SocialIcon key={item.SOMEtitle} url={item.SOMElink} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden space-y-3 text-center text-white md:block">
          <p>Develoved by Mads Rosenlund Nissen</p>
          <p>Made with Typescript, React, NextJS and Tailwindcss</p>
          <div className="space-x-3">
            {SOME.map((item) => (
              <div key={""} className="inline justify-center">
                <div className="inline-block">
                  <SocialIcon key={item.SOMEtitle} url={item.SOMElink} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
