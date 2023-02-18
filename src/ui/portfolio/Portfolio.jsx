import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioModalItem from "./modal";

const Portfolio = () => {
  const PORTFOLIO_ITEMS = [
    {
      company: "zeroDAO",
      link: "zerodao.com",
      img: "/img/companies/ZD-logo-3d.png",
      preview: "/img/companies/zerodao-preview.png",
      languages: "NextTS, Solidity, Typescript, SQL",
      description: "zeroDAO is the decentralized governor of the ZERO network, enabling cross-chain messaging for trade or even more complex scripting.",
      type: "Blockchain"
    },
    {
      company: "VMEX Finance",
      link: "vmex.finance",
      img: "/img/companies/vmex-logo.svg",
      preview: "/img/companies/vmex-preview.png",
      languages: "NextTS, Solidity, Typescript, SQL",
      description: "VMEX Finance is a decentralized, next-generation lending and borrowing protocol.",
      type: "Blockchain"
    },
    {
      company: "DataEarn",
      link: "app.dataearn.com",
      img: "/img/companies/dataearn-logo(1).png",
      preview: "/img/companies/dataearn-preview.png",
      languages: "NextTS, Python, Django, SQL",
      description: "DataEarn is building a way to allow individuals to access, understand, protect, and monetize their data.",
      type: "Web App",
      padding: 'p-6'
    },
    {
      company: "Raycon",
      link: "rayconglobal.com",
      img: "/img/companies/raycon-logo(1).png",
      preview: "/img/companies/raycon-screenshot.png",
      languages: "Javascript, React, Shopify, HTML, CSS",
      description: "Raycon is an innovative sound system company, specializing in headphones.",
      type: "Website",
      padding: 'p-4'
    },
    {
      company: "Vita Films",
      link: "vitafilmllc.com",
      img: "/img/companies/vita-logo.png",
      preview: "/img/companies/vita-preview.png",
      languages: "Nextjs, CSS",
      description: "Vita Film is a videography and media company specializing in outdoor, wedding, and commercial spaces.",
      type: "Website",
      padding: 'p-4'
    },
    {
      company: "Bonanza Exorsa",
      link: "bonanzaexorsa.com",
      img: "/img/companies/bonanza-3d-logo.png",
      preview: "/img/companies/bonanza-preview.png",
      languages: "NextTS, Solidity, Typescript",
      description: "Bonanza Exorsa is a metaphysical brand using NFT's.",
      type: "Blockchain",
      padding: 'p-4'
    },
    {
      company: "Live Duel",
      link: "liveduel.com",
      img: "/img/companies/liveduel-logo.png",
      preview: "/img/companies/liveduel-preview.png",
      languages: "NextTS, Solidity, Typescript, SQL",
      description: "LiveDuel combines live streaming and interactive content like our prediction exchange and live trivia game show using blockchain technology.",
      type: "Blockchain",
      padding: 'p-2'
    },
    {
      company: "Sports Roulette ATL",
      link: "sportsrouletteatl.com",
      img: "/img/companies/sra-logo.png",
      preview: "/img/companies/sra-preview.png",
      languages: "NextTS, CSS",
      description: "Sports Roulette ATL is a fun sports league for adults looking to casually network.",
      type: "Website"
    },
    {
      company: "Lazar Stucco",
      link: "lazarstucco.com",
      img: "/img/companies/lazar-logo.png",
      preview: "/img/companies/lazar-preview.png",
      languages: "HTML, CSS",
      description: "Lazar Stucco is an experienced contractor working with European Stucco for residential and commercial construction. ",
      type: "Website",
      padding: 'p-4'
    }
  ]

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>BLOCKCHAIN</Tab>
        <Tab>WEBSITES</Tab>
        {/* <Tab>ECOMMERCE</Tab>
        <Tab>MOBILE</Tab> */}
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
