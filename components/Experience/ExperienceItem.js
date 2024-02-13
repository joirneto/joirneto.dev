import React from "react";

const ExperienceItem = ({ position }) => {
  return (
    <div className="border-dashed border-t lg:border-l lg:border-t-0 mx-6 px-6 lg:px-12 py-6">
      <h4 className="text-lg uppercase font-bold mb-2 text-orange">
        {position.position}
      </h4>
      <p className="text-sm uppercase">
        {position.description}
        <br />
        <br />
        <span className="text-sx normal-case font-bold">
          {position.institution}
        </span>
        <br />
        <span className="text-sx normal-case">{position.employmentType}</span>
        <br />
        <span className="text-sx normal-case">
          {position.startDate} - {position.endDate}
        </span>
        <br />
        <span className="text-sx normal-case">{position.profileHeadline}</span>
      </p>
    </div>
  );
};

export default ExperienceItem;
