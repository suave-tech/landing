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
      delay: .5,
      duration: 0.5
    }
  }
}
const divVariants = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity:1,
    transition: {
      duration: .5,
      ease:'easeInOut'
    }
  }
}

const svgVariants={
  hidden:{},
  visible:{
    transition:{
      staggerChildren:.5,
      delayChildren:0.2,
    }
  }
}
const pathVariants = {
  hidden: {
    
    pathLength:0,
    strokeDashoffset:1
  },
  visible: {
    
    pathLength: 1,
    strokeDashoffset:0,
    transition: {
      duration: .5,
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
      delay:0.5,
      duration:.5
    }
  }
}

const PortfolioModalItem = ({ img, company, languages, link, about, goals, challenges, conclusion, preview, type, state, setState, padding }) => {

  /// controls modal open when clicking on company icon
  const [isOpen, setIsOpen] = useState(false);
  const modalContentRef = useRef(null);

  // refs for use in animation of element when in view
  const [ref0, inView0] = useInView({threshold: 0.2, triggerOnce: true})
  // ref for svg line 
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  //ref for Challenges
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  //ref for line
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })

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
              <div className="header-row">
                <div className="left-side">
                  <img src='img/logo.png' className="modal-logo" alt='sauve' />
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
                <div className="company-logo">
                  <motion.img
                    variants={logoVariant}
                    initial='hidden'
                    animate='visible'
                    src={`${img}`} className=" " />
                </div>
                  <div className="close-modal" onClick={toggle}>
                    <motion.img initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ duration: 0.5 }} src="/img/exit.png" alt="close icon" className="m-3"/>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="slate">
                <div className="content">
                  <motion.img
                    variants={divVariants}
                    initial='hidden'
                    animate={inView0 ? 'visible' : 'hidden'}
                    src={preview[0] || "img/logo.png"} alt={`${company} preview`} className="cover" />
                  <motion.div
                    ref={ref0}
                    variants={divVariants}
                    initial='hidden'
                    animate={inView0 ? 'visible' : 'hidden'}
                    className="col container m-auto d-flex justify-content-between flex-column">
                    <div className="m-3">
                      <h4 className="project-label " style={{color:"#ffb400"}}>About</h4>
                      <span className="ft-wt-600 uppercase col">{about ? about : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed in atque incidunt, reiciendis saepe neque quibusdam delectus iusto illum eius quia velit. Nihil explicabo iure est inventore omnis laboriosam, odio dicta, dolores quaerat natus fugit saepe perferendis doloremque quam."}</span>
                    </div>
                    <div className="m-3">
                      <h4 className="project-label" style={{color:"#ffb400"}}>Goals</h4>
                      <span className="ft-wt-600 uppercase ">{goals ? goals : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quasi a dicta ratione, placeat harum, at fugit atque illum dolorum voluptates eius doloribus maiores quia laudantium! Omnis in molestiae quae aliquid ut iusto! Nobis odio iusto dicta soluta sit veritatis."}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="slate">
                <div className="svg-container">
                  <motion.svg
                    ref={ref3}
                    variants={svgVariants} 
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"} viewBox="0 0 1151 510" fill="none">
                    {/* <!-- hexagon at the top left --> */}
                    <motion.path variants={pathVariants} d="M21.5 32.5L40 41.5V61L21.5 71L3 61V41.5L21.5 32.5Z" stroke="#ffb400" stroke-width="200" />
                    {/* Vertical line */}
                    <motion.path variants={pathVariants} d="M21.5 71V468" stroke="#ffb400" stroke-width="5" />
                    {/* <!-- hexagon at the bottom left --> */}
                    <motion.path variants={pathVariants} d="M21.5 468L40 478V497L21.5 507L3 497V478L21.5 468Z" stroke="#ffb400" stroke-width="5" />
                  </motion.svg>
                </div>
              </div>
              <div className="slate">
                <div className="content chal">
                  <motion.div
                    ref={ref4}
                    variants={divVariants}
                    initial="hidden"
                    animate={inView4 ? 'visible' : 'hidden'}
                    className="challenges col container">
                    <div className="m-3">
                      <h4 style={{color:"#ffb400"}}>Challenges</h4>
                      <p>{ challenges ? challenges : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora."}</p>
                    </div>
                  </motion.div>
                  <motion.img 
                    ref={ref4}
                    variants={divVariants}
                    initial='hidden'
                    animate={inView4 ? 'visible' : 'hidden'}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="cover" src={`${preview[1]}`} alt="site" />
                </div>
              </div>
              <div className="slate">
                <div className="svg-container ">
                  <motion.svg
                    ref={ref1}
                    variants={svgVariants} 
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"} viewBox="0 0 1151 510" fill="none">
                    {/* <!-- hexagon at the top right --> */}
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5L1147.5 32.5V13L1130 3L1111 13V32.5L1130 41.5Z" stroke="#ffb400" stroke-width="5" />
                    {/* Horizontal and vertical lines */}
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M1130 41.5V259.25H187.275V468" stroke="#ffb400" stroke-width="5" />
                    <motion.path transform="scale(-1, 1) translate(-1151, 0)" variants={pathVariants} d="M187.275 468L205.775 478V497L187.275 507L168.775 497V478L187.275 468Z" stroke="#ffb400" stroke-width="5" />
                  </motion.svg>
                </div>
              </div>
              <div className="slate">
                <div className="content">
                  <motion.img 
                    ref={ref2}
                    variants={divVariants}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    src={`${preview[2]}`} alt="site" />
                  <motion.div
                    ref={ref2}
                    variants={divVariants}
                    initial='hidden'
                    animate={inView2 ? 'visible' : 'hidden'}
                    transition={{ ease: 'easeOut', duration: 1.5, delay: 1 }} className="col container challenges">
                    <div className="m-3 ">
                      <h4 style={{color:"#ffb400"}}>Conclusion</h4>
                      <p>{conclusion ? conclusion : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate eos iure rerum laborum minima iusto amet voluptatum, repellat quod sed impedit ut dicta! Aperiam quia iure nihil voluptatum voluptatibus, porro reprehenderit nulla quam dolore exercitationem pariatur molestias! Assumenda, tempora."}</p>
                    </div>
                  </motion.div>
                </div>
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
