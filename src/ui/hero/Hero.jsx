import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../components/Contact";

const heroContent = {
  heroImage: "/img/logo.png",
  heroMobileImage: "/img/logo.png",
  heroTitleName: "Suave Tech Solutions",
  heroDesignation: "Crypto Consortium",
  heroDescriptions: `We are a New York City based development team experienced in web, mobile, and blockchain application development as well as other software development needs. Our mission is to empower businesses through innovative tech solutions, while providing exceptional client support and delivering measurable results.
  Consult with us today!`,
  heroBtn: "Contact us",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
            backgroundColor: "#1d1d1d",
            backgroundPosition: "center",
            backgroundSize: "300px 300px"
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <img
              src={`${heroContent.heroMobileImage}`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              Introducing {heroContent.heroTitleName}.
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for Contact Form */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="Contact Dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  CONTACT <span>US</span>
                </h1>
                <span className="title-bg absolute">CONTACT</span>
              </div>
              {/* End title */}
              <div
                className="contact container"
              >
                <div className="row">
                  {/*  Contact Form Starts  */}
                  <div className="col-12 mb-6">
                    <ContactForm />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
