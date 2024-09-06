import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Achievement from "./Achievement";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="MY RESUME" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-9">
          <li
            onClick={() => setEducationData(true) & setAchievementData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

          <li
            onClick={() => setEducationData(false) & setAchievementData(true)}
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {achievementData && <Achievement />}
    </section>
  );
};

export default Resume;
