import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../components/Contact";

const heroContent = {
  heroImage: "/img/logo.png",
  heroMobileImage: "/img/logo.png",
  heroTitleName: "Suave Tech Solutions",
  heroDesignation: "Crypto Consortium",
  heroDescriptions: `We are a development team experienced in web, mobile, and blockchain application development as well as other software development needs. Our mission is to empower businesses through expert consulting and creative tech solutions.`,
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
        />
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start pb-4">
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

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="Contact Dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="close-modal" onClick={() => setIsOpen(false)} style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
            <img src="/img/exit.png" alt="close icon" />
          </div>
          </div>

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  CONTACT <span>US</span>
                </h1>
                <span className="title-bg absolute">CONTACT</span>
              </div>
              <div
                className="contact container"
              >
                <div className="row">
                  <div className="col-12 mb-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
