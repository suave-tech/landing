import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useRef } from "react";
import Modal from "react-modal";
import Carousel from "./Carousel.jsx";

///// variant objects to control animations

const headerChild = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5
    }
  }
}
const divVariants = {
  hidden: {},
  visible: {
    transition: {
      duration:.75,
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

const logoVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.3
    }
  }
}

const PortfolioModalItem = ({ img, company, languages, link, description, preview, type, state, setState, padding }) => {

  /// controls modal open when clicking on company icon
  const [isOpen, setIsOpen] = useState(false);
  const modalContentRef = useRef(null);

  // refs for use in animation of element when in view
  // ref for svg line 
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  //ref for Challenges
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true })
  //ref for line
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: true })

  //function open Model also disable scrolling on portfolio page underneath
  function toggle() {
    if (isOpen || state) {
      document.body.classList.remove("no-scroll"); // Enable scrolling

    } else {
      document.body.classList.add("no-scroll"); // Disable scrolling
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
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
        <div ref={modalContentRef} >
          <div className="box_inner justify-content-center">
            <div className="project-header container-fluid ">
              <div className="row justify-content-around">
                <div className="col ms-5">
                  <img
                    variants={headerChild}
                    src='img/logo.png' className="modal-logo" alt='sauve' />
                  <motion.h1
                    variants={headerChild}
                    initial="hidden"
                    animate="visible"
                    className="company ">{company}</motion.h1>
                  <motion.h3
                    variants={headerChild}
                    initial="hidden"
                    animate="visible"
                    className="company-h3">{type}</motion.h3>
                </div>
                <div className="col align-self-center text-center">
                  <motion.img
                    variants={logoVariant}
                    initial='hidden'
                    animate='visible'
                    src={`${img}`} className="company-logo" />
                </div>
                <div className="col d-flex justify-content-end pt-2">
                  <div  className="close-modal" onClick={toggle}>
                    <motion.img initial={{scale:1}} animate={{scale:1.3}} transition={{duration:0.5}}src="/img/exit.png" alt="close icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="slate">
                <div className="d-flex">
                  <motion.img
                    variants={headerChild}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={preview[1] || "img/logo.png"} alt={`${company} preview`} className="cover" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="col container open-sans-font">
                    <div className="row align-items-center my-5 mx-2">
                      <h4 className="project-label ">About</h4>
                      <span className="ft-wt-600 uppercase col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed in atque incidunt, reiciendis saepe neque quibusdam delectus iusto illum eius quia velit. Nihil explicabo iure est inventore omnis laboriosam, odio dicta, dolores quaerat natus fugit saepe perferendis doloremque quam.</span>
                    </div>
                    <div className="row align-items-center my-5 mx-2">
                      <h4 className="project-label \">Mission</h4>
                      <span className="ft-wt-600 uppercase ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quasi a dicta ratione, placeat harum, at fugit atque illum dolorum voluptates eius doloribus maiores quia laudantium! Omnis in molestiae quae aliquid ut iusto! Nobis odio iusto dicta soluta sit veritatis.</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="slate">
                <div className="svg-container">
                  <motion.svg
                    ref={ref3}
                    variants={divVariants} initial="hidden"
                    animate={inView3 ? "visible" : "hidden"} viewBox="0 0 1151 510" fill="none">
                    {/* <!-- hexagon at the top left --> */}
                    <motion.path variants={pathVariants} d="M21.5 32.5L40 41.5V61L21.5 71L3 61V41.5L21.5 32.5Z" stroke="#ffb400" stroke-width="5" />
                    {/* Vertical line */}
                    <motion.path variants={pathVariants} d="M21.5 71V468" stroke="#ffb400" stroke-width="5" />
                    {/* <!-- hexagon at the bottom left --> */}
                    <motion.path variants={pathVariants} d="M21.5 468L40 478V497L21.5 507L3 497V478L21.5 468Z" stroke="#ffb400" stroke-width="5" />
                  </motion.svg>
                </div>
              </div>
              <div className="slate">
                <motion.div className="d-flex align-items-center">
                  <motion.div
                    ref={ref4}
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="challenges col container mx-4">
                    <h4>Challenges</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora.</p>
                  </motion.div>
                  <motion.img ref={ref4}
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="cover" src={`${preview[0]}`} alt="site" />
                </motion.div>
              </div>
              <div className="slate ">
                <div className="svg-container ">
                  <motion.svg
                    ref={ref1}
                    variants={divVariants} initial="hidden"
                    animate={inView1 ? "visible" : "hidden"} viewBox="0 0 1151 510" fill="none">
                    {/* <!-- hexagon at the top right --> */}
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5L1147.5 32.5V13L1130 3L1111 13V32.5L1130 41.5Z" stroke="#ffb400" stroke-width="5" />
                    {/* Horizontal and vertical lines */}
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5V259.25H187.275V468" stroke="#ffb400" stroke-width="5" />
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)"  variants={pathVariants} d="M187.275 468L205.775 478V497L187.275 507L168.775 497V478L187.275 468Z" stroke="#ffb400" stroke-width="5" />
                  </motion.svg>
                </div>
              </div>
              <div className="slate">
                <motion.div className="d-flex align-items-center">
                  <motion.img ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="cover" src={`${preview[2]}`} alt="site" />
                  <motion.div
                    ref={ref2}
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="col container open-sans-font">
                    <div className="mx-2">
                      <h4>Conclusion</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              <div className="slate">
                <Carousel preview={preview} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioModalItem;
