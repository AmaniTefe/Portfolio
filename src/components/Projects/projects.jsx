import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./projectscard";
import Backup from "../../Utils/backup.jpg";
import Sentimental from "../../Utils/sentimental.jpg";
import fase_recognition from "../../Utils/facial_recognition.jpg";
import cims from "../../Utils/cims.jpg";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="MY PROJECTS" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Web Based Court Information Management System"
          des=" A modern Web based solution for the paper based court information management system. built using REACT and MUI for the front end, NodeJs and Express for the backend and SQL for the database."
          src={cims}
          link="https://github.com/AmaniTefe/CIMS"
        />

        <ProjectsCard
          title="Sentimental Analysis using twitter dataset"
          des=" Trains and Analyzes the dataset then ditermines whether the tweets are Positive, Negative or Neutral. Built using python and python libraries like numpy, nltk, wordcloud and many more."
          src={Sentimental}
          link="https://github.com/AmaniTefe/Sentimental-Analysis-using-Twitter-dataset"
        />
        <ProjectsCard
          title="Face Recognition System"
          des=" A face recognition system that accurately identifies individuals using the available camera, after being trained with photos of the subjects along with their names. Built using python and python libraries like cv2 and re."
          src={fase_recognition}
          link="https://github.com/AmaniTefe/Real-Time-Face-Recognition-System"
        />
        <ProjectsCard
          title="Executable Script for Automated MySQL Database Backups"
          des=" A batch file that automates the process of creating differential backups for a MySQL database, ensuring only changes since the last full backup are saved, providing efficient and secure data protection."
          src={Backup}
          link="https://github.com/AmaniTefe/Executable-Script-for-Automated-MySQL-Database-Backups"
        />
      </div>
    </section>
  );
};

export default Projects;
