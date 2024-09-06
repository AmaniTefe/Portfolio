import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Systems"
            subTitle="Wolkite Uninversity (2012-2016)"
            result="3.11/4"
            des="Graduated with a BSc in Information Systems in the year 2016 E.C by completing 4 years of education and with a CGPA of 3.11/4"
          />
          <ResumeCard
            title="Preparatory School Education (Grade 11-12)"
            subTitle="Blessed G/Michael Catholic Secondary School"
            result="536/700"
            des="Finished my secondary school with the EUEEC examination with score of 536 out of 700."
          />
          <ResumeCard
            title="Secondary School Education (Grade 9-10)"
            subTitle="Blessed G/Michael Catholic Secondary School"
            result="4/4"
            des="Finished my secondary school with the EUEEC examination with score of Straight A's in all 9 subjects"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold hidden ">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Primary School Education (Grade 7-8)"
            subTitle="Blessed G/Michael Catholic primary School"
            result="73%"
            des="Finished my secondary school with the EUEEC examination with score of Straight A's in all 9 subjects"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
