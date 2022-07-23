import React from "react";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  Our Company
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src="logo.png"
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
	  { /* <Achievements /> */ }
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

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
