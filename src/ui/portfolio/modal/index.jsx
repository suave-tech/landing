import React, { useState } from "react";
import Modal from "react-modal";

const PortfolioModalItem = ({ img, company, languages, link, description, preview, type, state, setState, padding }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    if (isOpen || state) {
      document.body.classList.remove("no-scroll"); // Enable scrolling
    } else {
      document.body.classList.add("no-scroll"); // Disable scrolling
    }
    if (setState) {
      setState(!state);
    } else {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <figure onClick={toggle} className="logo p-2">
        <img src={img || "img/logo.png"} alt="Portolio" height={"300"} className={`cover rounded ${padding ? padding : ''}`} />
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
            <div className="slate">
              <h3 className="company">{company}</h3>
              <div className="d-flex">
                <img src={preview || "img/logo.png"} alt={`${company} preview`} className="cover" />
                <div className="col container open-sans-font">
                  <div className="row align-items-center my-5">
                    <h4 className="project-label ">About</h4>
                    <span className="ft-wt-600 uppercase col">{description}</span>
                  </div>
                  <div className="row align-items-center my-5">
                    <h4 className="project-label \">Mission</h4>
                    <span className="ft-wt-600 uppercase ">{languages}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slate">
              <div className="d-flex align-items-center">
                <div className="challenges">
                  <h4>Challenges</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora.</p>
                </div>
                <img className="wire_animation" src="/img/logo.png"></img>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioModalItem;
