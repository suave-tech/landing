import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "ETHEREUM" },
  { skillClass: "p50", skillPercent: "50", skillName: "BTC" },
  { skillClass: "p100", skillPercent: "100", skillName: "GIT" },
  { skillClass: "p70", skillPercent: "70", skillName: "ETHERS.JS" },
  { skillClass: "p50", skillPercent: "50", skillName: "SOLIDITY" },
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
