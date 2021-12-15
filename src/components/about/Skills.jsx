import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "95", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "25", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "100", skillName: "ETHEREUM" },
  { skillClass: "p95", skillPercent: "95", skillName: "BTC" },
  { skillClass: "p50", skillPercent: "80", skillName: "GIT" },
  { skillClass: "p65", skillPercent: "100", skillName: "ETHERS.JS" },
  { skillClass: "p45", skillPercent: "100", skillName: "SOLIDITY" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
