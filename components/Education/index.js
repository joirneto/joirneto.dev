import React from "react";
import EducationItem from "./EducationItem";

const degrees = [
  {
    degree: "Postgraduate MBA",
    subject: "Information Security",
    institution: "Descomplica Faculdade Digital",
  },
  {
    degree: "Postgraduate Specialization",
    subject: "Data Systems Projects",
    institution: "Descomplica Faculdade Digital",
  },
  {
    degree: "Degree",
    subject: "Computer Engineering",
    institution: "Federal University of Ceará",
  },
  {
    degree: "Degree",
    subject: "Bachelor of Education in Pedagogy",
    institution: "State University of Vale do Acaraú",
  },
];

const Education = () => {
  return (
    <div>
      <h3 className="text-orange text-4xl text-center font-bold uppercase mt-10 mb-5">
        My Education
      </h3>
      <div className="mx-8 lg:grid lg:grid-cols-2 leading-none bg-white roudend-lg shadow-lg py-6">
        {degrees.map((degree, i) => (
          <EducationItem key={"i" + i} degree={degree} />
        ))}
      </div>
    </div>
  );
};

export default Education;
