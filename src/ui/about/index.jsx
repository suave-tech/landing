import React from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

const index = () => {
  return (
    <section className="main-content">
      <div className="container">

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              What We Do
            </h3>
          </div>
          
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
      </div>
    </section>
  );
};

export default index;
