import React, { useEffect } from "react";
import ScrollToTop from "./ui/components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import Routes from "./Routes";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
