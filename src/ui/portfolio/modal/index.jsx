import React, { useState } from "react";
import Modal from "react-modal";

const PortfolioModalItem = ({ img, company, languages, link, description, state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if(setState) setState(!state)
    else setIsOpen(!isOpen);
  }

  return (
    <>
                  <figure onClick={toggle}>
                <img src={img || "img/logo.png"} alt="Portolio" height="300" className="cover" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">{company}</span>
                </div>
              </figure>
    <Modal
    isOpen={state || isOpen}
    onRequestClose={toggle}
    contentLabel="My dialog"
    className="custom-modal dark"
    overlayClassName="custom-overlay dark"
    closeTimeoutMS={500}
  >
    <div>
      <button className="close-modal" onClick={toggle}>
        <img src="/img/cancel.svg" alt="close icon" />
      </button>

      <div className="box_inner portfolio">
      <div className="slideshow">
      <figure>
        <figcaption>
          <h3>{company}</h3>
          <div className="row open-sans-font">
            <div className="col-12 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link}
                </a>
              </span>
            </div>
            
            <div className="col-12 mb-2">
              <i className="fa fa-align-left pr-2"></i>
              <span className="project-label">Description </span>:{" "}
              <span className="ft-wt-600 uppercase">{description}</span>
            </div>

            <div className="col-12 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">{languages}</span>
            </div>
          </div>
        </figcaption>

        <img src={img || "img/logo.png"} alt="Portolio" />
      </figure>
    </div>
      </div>
    </div>
  </Modal>
  </>

  );
};

export default PortfolioModalItem;
