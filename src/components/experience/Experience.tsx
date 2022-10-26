import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import React from "react";

export interface JobInfo {
jobinfo: { 
  jobtitle: string;
  company: string;
  employmenttime: string;
  jobdescription: string; 
}[]
}
const Experience = (props: JobInfo) => {
  const { jobinfo } = props;
  return (
    <>
      <div className="flex space-x-2 ">
        <BuildingOffice2Icon className="h-[35px] w-[35px] text-white" />
        <p className="my-auto font-Lato font-bold text-white">Experience</p>
      </div>
      {jobinfo.map((item) => (
        <div key={""} className="space-y-3 font-Dosis leading-6 text-white">
          <div className="flex place-content-between">
            <div>
              <p className="text-[20px] font-semibold">{item.jobtitle}</p>
              <p className="text-[14px]">{item.company}</p>
            </div>
            <p className="font-semibold mix-blend-normal">
              {item.employmenttime}
            </p>
          </div>
          <p>{item.jobdescription}</p>
        </div>
      ))}
    </>
  );
};

export default Experience;
