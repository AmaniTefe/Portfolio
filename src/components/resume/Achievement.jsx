import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Achievemnt & Certificates
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Huawei Certified ICT Associate-Datacom (HCI-Datacom) from Huawei Academ"
            subTitle="Huawei Certificate (November 1,2023 - April 30,2024"
            result="Success"
            des="Certified in Huawei Certified ICT Associate-Datacom (HCI-Datacom) from Huawei Academ by completing 56 hourse of theory and 72 hourse of lab practices!"
          />
          <ResumeCard
            title="CERTIFIED IN GIT AND GITHUB MASTER COURSE Udemy"
            subTitle="Udemy Certificate (june 29,2024)"
            result="Success"
            des="Certified in GIT AND GITHUB MASTER by completing 11 total hours of theory and practice!"
          />
          <ResumeCard
            title="CERTIFIED IN JAVASCRIPT, NODEJS, MONGODB FOR FULL STACK WEB DEVELOPMENT"
            subTitle="Udemy Certificate (june 29,2024)"
            result="Success"
            des="Certified in JAVASCRIPT, NODEJS, MONGODB FOR FULL STACK WEB DEVELOPMENT by completing a total of 14 hours of theory and practice!"
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
            title="CERTIFIED IN REACT REDUX TOOLKIT COMPLETE GUIDE"
            subTitle="Udemy Certificate"
            result="Success"
            des="Certified in REACT REDUX TOOLKIT COMPLETE GUIDE by completing a total of 2 hours of theory and practice!"
          />
          <ResumeCard
            title="CERTIFIED IN BOOTSTRAP 4 ULTIMATE GUIDE"
            subTitle="Udemy Certificate"
            result="Success"
            des="Certified in BOOTSTRAP 4 ULTIMATE GUIDE by completing a total of 5.5 hours of theory and practice!"
          />
          <ResumeCard
            title="CERTIFIED IN MASTER PYTHONE WITH NUMPY FOR DATA SCIENCE AND MACHINE LEARNING"
            subTitle="Udemy Certificate"
            result="Success"
            des="Certified in MASTER PYTHONE WITH NUMPY FOR DATA SCIENCE AND MACHINE LEARNING by completing a total of 2 hours of theory and practice!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
