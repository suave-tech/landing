import React from "react";

const personalInfoContent = [
  { meta: "Phone", metaInfo: "+1-470-610-0091" },
  { meta: "Email", metaInfo: "contact@suavetech.solutions" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
      <li> 
        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
          Address
        </h3>
        <div>Suave Tech Solutions, LLC<br />#2537<br />312 W. 2nd St<br />Casper, WY 82601</div>
      </li>
    </ul>
  );
};

export default PersonalInfo;
