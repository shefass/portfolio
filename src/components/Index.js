import React from "react";
import ResponsiveContainer from "../containers/Index";
import Footer from "./Footer";
import WorksDoneSplited from "./WorksDoneSplited";
import WhoIam from "./WhoIam";

const HomepageLayout = () => (
  <ResponsiveContainer>
    <WhoIam />
    <WorksDoneSplited />
    <Footer />
  </ResponsiveContainer>
);

export default HomepageLayout;
