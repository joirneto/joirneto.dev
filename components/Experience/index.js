import React from "react";
import ExperienceItem from "./ExperienceItem";

const positions = [
  {
    position: "Digital Solutions Consultant - Full Stack Developer",
    institution: "Banco do Brasil S/A",
    employmentType: "Part Time",
    startDate: "June 2023",
    endDate: "Present",
    profileHeadline:
      "Software engineer | Back-End | Javascript | Node.js | Serverless | AWS cloud | AdonisJs | NextJs",
    description:
      "Development, maintenance, and management of web applications used nationally by Banco do Brasil employees.",
  },
  {
    position: "Developer Backend | AWS Clould",
    institution: "SCIS - Development",
    employmentType: "Self Employed",
    startDate: "April 2022",
    endDate: "Present",
    profileHeadline:
      "Software engineer | Back-End | Javascript | Node.js | Serverless | AWS cloud",
    description:
      "Implement and maintain software components. Implement and maintain microservices, supporting integrations with frontend and cloud environment (AWS). Develop web solutions based on the framework (NodeJS, React, Serverless, and AWS Cloud). Create RESTful API services.",
  },
  {
    position: "Developer Front End | React",
    institution: "SCIS - Development",
    employmentType: "Self Employed",
    startDate: "December 2021",
    endDate: 'April 2022',
    profileHeadline:
      "Software engineer | Front-End | Javascript | React.js",
    description:
      "Implement and maintain software components. Develop web solutions based on the framework (JavaScript, ReactJS, Redux, SAGA, CSS, and HTML).",
  },
];

const Experience = () => {
  return (
    <div>
      <h3 className="text-orange text-4xl text-center font-bold uppercase mt-10 mb-5">
        My Experience
      </h3>
      <div className="mx-8 lg:grid lg:grid-cols-2 leading-none bg-white roudend-lg shadow-lg py-6">
        {positions.map((position, i) => (
          <ExperienceItem key={"i" + i} position={position} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
