import React from "react";
import "../App.css";
import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import JoinUs from "../Components/JoinUs";
import Membership from "../Components/Membership";
import OurPrograms from "../Components/OurPrograms";

const Home = () => {
    return (
       <div>
    <Banner/>
    <AboutSection/>
    <Membership/>
    <JoinUs/>
    <OurPrograms/>
    </div>
    )

  
}

export default Home;