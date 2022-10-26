import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

interface ContactContent {
  SOME: { SOMEtitle: string; SOMElink: string }[]
}
const Contact = (props: ContactContent) => {
    const {SOME} = props;

  return (
    <>
      <div className="flex pt-6">
        <p className="my-auto font-Dosis text-xl font-bold">
          Below are the different places where you can get in contact with me.
          You are always welcome to reach out if you have any questions or
          oportunities you think my profile would fit.
        </p>
      </div>
      <div className="flex flex-row pt-6">
        <label className="my-auto w-[150px] font-Dosis text-white" htmlFor={""}>
          Telephone
        </label>
        <div className="flex justify-end">
          <SocialIcon network="telegram" url={"tel:045 60667271"} />
        </div>
      </div>
      <div className="flex flex-row">
        <label className="my-auto w-[150px] font-Dosis text-white" htmlFor={""}>
          Email
        </label>
        <div className="flex justify-end">
          <SocialIcon url={"mailto:Mads.Rosenlund@hotmail.com"} />
        </div>
      </div>
      {SOME.map((item) => (
        <div key={""} className="flex flex-row">
          <label
            className="my-auto w-[150px] font-Dosis text-white"
            htmlFor={item.SOMEtitle}
          >
            {" "}
            {item.SOMEtitle}{" "}
          </label>
          <div className="flex justify-end">
            <SocialIcon key={item.SOMEtitle} url={item.SOMElink} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Contact;
