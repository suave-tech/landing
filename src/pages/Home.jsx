import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../ui/hero/Hero";
// import Index from "../ui/about/index";
import Portfolio from "../ui/portfolio/Portfolio";
// import Blog from "../ui/blog/Blog";
import Contact from "../ui/components/Contact";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  // { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Works" },
  { icon: "fa-envelope", menuName: "Contact" }
];

const Home = () => {
  return (
    <div className="yellow">
      <Tabs>
        <div className="header">
          <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">
          <TabPanel className="home">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>

          <TabPanel className="portfolio professional">
            <div
              className="title-section text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                our <span>works</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            <div
              className="container grid-gallery main-content"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Portfolio />
            </div>
          </TabPanel>

          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with us. We are always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions!
                  </p>
                </div>

                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
