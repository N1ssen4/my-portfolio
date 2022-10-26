import React from "react";
import { IdentificationIcon } from "@heroicons/react/24/solid";
interface AboutContent {
  content: string;
}
const About = (props: AboutContent) => {
  return (
    <>
      <div className="flex space-x-2">
        <IdentificationIcon className="h-[35px] w-[35px] text-white" />
        <p className="my-auto font-Lato font-bold text-white">About me</p>
      </div>
      <p className="font-Dosis leading-6 mix-blend-normal">{props.content}</p>
    </>
  );
};

export default About;
