import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "react-modal";
import Carousel from "./Carousel";

const divVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1
    }
  }
}
const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.75,
      ease: 'easeInOut'
    }
  }
}

const slateVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const chalVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

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
          <div className="box_inner portfolio">
            <div className="project-header container border ">
              <div className="row">
                <div className="border col">
                  <img src='img/logo.png' className="modal-logo" alt='sauve' />

                  <h1 className="company ">
                    {company}
                  </h1>
                  <h3 className="company-h3">{type}</h3>
                </div>
                <div className="border col">
                  <img src={`${img}`} className="company-logo" />
                </div>
                <div className="border col">
                  <div className="close-modal" onClick={toggle}>
                    <img src="/img/exit.png" alt="close icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slate">
              <div className="d-flex">
                <img src={preview[1] || "img/logo.png"} alt={`${company} preview`} className="cover" />
                <div className="col container open-sans-font">
                  <div className="row align-items-center my-5 mx-2">
                    <h4 className="project-label ">About</h4>
                    <span className="ft-wt-600 uppercase col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed in atque incidunt, reiciendis saepe neque quibusdam delectus iusto illum eius quia velit. Nihil explicabo iure est inventore omnis laboriosam, odio dicta, dolores quaerat natus fugit saepe perferendis doloremque quam.</span>
                  </div>
                  <div className="row align-items-center my-5 mx-2">
                    <h4 className="project-label \">Mission</h4>
                    <span className="ft-wt-600 uppercase ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quasi a dicta ratione, placeat harum, at fugit atque illum dolorum voluptates eius doloribus maiores quia laudantium! Omnis in molestiae quae aliquid ut iusto! Nobis odio iusto dicta soluta sit veritatis.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="svg-container">
              <motion.svg variants={divVariants} initial="hidden" animate="visible" viewBox="0 0 1151 510" fill="none">
                {/* <!-- hexagon at the top right --> */}
                <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5L1147.5 32.5V13L1130 3L1111 13V32.5L1130 41.5Z" stroke="#ffb400" stroke-width="5" />
                {/* Horizontal and vertical lines */}
                <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5V259.25H21.5V468" stroke="#ffb400" stroke-width="5" />
                {/* <!-- hexagon at the bottom left --> */}
                <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M21.5 468L40 478V497L21.5 507L3 497V478L21.5 468Z" stroke="#ffb400" stroke-width="5" />
              </motion.svg>
            </div>
            <div className="slate">
              <motion.div variant={slateVariants} initial="hidden" animate="visible" className="d-flex align-items-center">
                <motion.div variant={chalVariants} initial="hidden" animate="visible" className="challenges">
                  <h4>Challenges</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora.</p>
                </motion.div>
                <motion.img initial="hidden" animate="visible" variant={chalVariants} className="cover" src={`${preview[2]}`} alt="site" />
              </motion.div>
            </div>
            <div className="slate">
              <Carousel preview={preview} />
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioModalItem;
