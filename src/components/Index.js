import React from "react";
import ResponsiveContainer from "../containers/Index";
import Footer from "./Footer";
import WorksDone from "./WorksDone";
import WorksDoneSplited from "./WorksDoneSplited";
import WhoIam from "./WhoIam";

const HomepageLayout = () => (
  <ResponsiveContainer>
    <WhoIam />
    <WorksDoneSplited />
    <WorksDone />
    <Footer />
  </ResponsiveContainer>
);

export default HomepageLayout;
