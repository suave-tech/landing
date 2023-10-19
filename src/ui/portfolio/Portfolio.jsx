import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { PORTFOLIO_ITEMS } from "../../utils/companies";
import PortfolioModalItem from "./modal";
import Project from "./page/index"

const Portfolio = () => {
  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>BLOCKCHAIN</Tab>
        <Tab>WEBSITES</Tab>
        <Tab>ECOMMERCE</Tab>
        {/* <Tab>MOBILE</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            {PORTFOLIO_ITEMS.map((el) => (
              <li
                className="direction-reveal"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="0"
              >
                <PortfolioModalItem {...el} />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* BLOCKCHAIN */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type.toLowerCase() === 'blockchain').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem {...el} />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* WEBSITES */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type.toLowerCase().includes('web')).map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem {...el} />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* ECOMMERCE */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type.toLowerCase() === 'ecommerce').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem {...el} />
              </li>
            ))}
          </ul>
        </TabPanel>
        
        {/* APP */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type.toLowerCase() === 'app').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem {...el} />
              </li>
            ))}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
