import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioModalItem from "./modal";

const Portfolio = () => {
  const PORTFOLIO_ITEMS = [
    {
      company: "zeroDAO",
      link: "zerodao.com",
      img: "/img/ZD-logo-3d.png",
      languages: "NextTS, Solidity, Typescript, SQL",
      description: "description",
      type: "blockchain"
    },
    {
      company: "VMEX Finance",
      link: "vmex.finance",
      img: "/img/vmex-logo.svg",
      languages: "NextTS, Solidity, Typescript, SQL",
      description: "description",
      type: "blockchain"
    },
    {
      company: "Bonanza Exorsa",
      link: "bonanzaexorsa.com",
      img: "/img/bonanza-3d-logo.png",
      languages: "NextTS, Solidity, Typescript",
      description: "description",
      type: "blockchain"
    },
    {
      company: "DataEarn",
      link: "dataearn.com",
      img: "/img/dataearn-logo.svg",
      languages: "NextTS, Python, Django, SQL",
      description: "description",
      type: "websites"
    },
    {
      company: "Sports Roulette ATL",
      link: "sportsrouletteatl.com",
      img: "/img/sra-logo.png",
      languages: "NextTS, CSS",
      description: "description",
      type: "websites"
    },
    {
      company: "D Customs",
      link: "https://www.preview.com",
      img: "",
      languages: "Nextjs, CSS",
      description: "description",
      type: "websites"
    },
    {
      company: "Raycon",
      link: "raycon.com",
      img: "",
      languages: "Liquid, HTML, CSS",
      description: "description",
      type: "ecommerce"
    },
    {
      company: "Upwife",
      link: "upwife.com",
      img: "",
      languages: "React Native, Typescript",
      description: "description",
      type: "app"
    }
  ]

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>BLOCKCHAIN</Tab>
        <Tab>WEBSITES</Tab>
        <Tab>ECOMMERCE</Tab>
        <Tab>MOBILE</Tab>
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
                <PortfolioModalItem 
                  company={el.company}
                  link={el.link}
                  img={el.img}
                  languages={el.languages}
                  description={el.description}
                />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* BLOCKCHAIN */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type === 'blockchain').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem 
                  company={el.company}
                  link={el.link}
                  img={el.img}
                  languages={el.languages}
                  description={el.description}
                />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* WEBSITES */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type === 'websites').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem 
                  company={el.company}
                  link={el.link}
                  img={el.img}
                  languages={el.languages}
                  description={el.description}
                />
              </li>
            ))}
          </ul>
        </TabPanel>

        {/* ECOMMERCE */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type === 'ecommerce').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem 
                  company={el.company}
                  link={el.link}
                  img={el.img}
                  languages={el.languages}
                  description={el.description}
                />
              </li>
            ))}
          </ul>
        </TabPanel>
        
        {/* APP */}
        <TabPanel>
          <ul className="row grid justify-content-center">
          {PORTFOLIO_ITEMS.filter((el) => el.type === 'app').map((el) => (
            <li
            className="direction-reveal"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="0"
          >
                <PortfolioModalItem 
                  company={el.company}
                  link={el.link}
                  img={el.img}
                  languages={el.languages}
                  description={el.description}
                />
              </li>
            ))}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
