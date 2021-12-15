import React from "react";

const personalInfoContent = [
  { meta: "Phone", metaInfo: "+1-512-572-2071" },
  { meta: "Email", metaInfo: "pubkeygroup@gmail.com" },
  { meta: "Fax", metaInfo: "+1-512-539-2870" },
  { meta: "Langages", metaInfo: "English" }
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
    <p></p>
      <li> 
          <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                      Address
                    </h3>

        <div>Pubkey Group LLC<br />#1081<br />1201 Barbara Johnson Blvd<br />STE 700<br />Austin, TX 78723</div>
      </li>
    </ul>
  );
};

export default PersonalInfo;
