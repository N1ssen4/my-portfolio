import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";
import Box from "@mui/material/Box";
import BorderLinearProgress from "@mui/material/LinearProgress";
export interface SkillInfo {
  skillinfo: {
    skilltitle: string;
    skillnumber: number;
  }[];
}
const Skills = (props: SkillInfo) => {
  const { skillinfo } = props;

  return (
    <>
      <div className="flex space-x-2">
        <AcademicCapIcon className="h-[35px] w-[35px] text-white" />
        <p className="my-auto font-Lato font-bold text-white">
          Education & skills
        </p>
      </div>
      <div className="space-y-3 font-Lato text-white">
        <p className="font-bold ">Computer Science</p>
        <p> Københavns Erhversakademi 2020-2023</p>
        <p className="font-bold ">Student</p>
        <p> Glasaxe Gymnasium 2014-2017</p>
      </div>
      {skillinfo.map((item) => (
        <div key={""} className="flex justify-between">
          <p className="w-[150px] font-Dosis leading-6 text-white">
            {item.skilltitle}
          </p>
          <Box className="my-auto" sx={{ width: "50%" }}>
            <BorderLinearProgress
              variant="determinate"
              value={item.skillnumber}
            />
          </Box>
        </div>
      ))}
    </>
  );
};

export default Skills;
