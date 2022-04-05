import React from "react";
import OurPrograms from "../Components/OurPrograms";
import AboutSection from "../Components/AboutSection";
import Header from "../Components/Header";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AboutUs = () => {


    let history = useHistory();

    useEffect(() => {
          
        const token = localStorage.getItem("user-info")
        if(token != null){
          history.push("/login");
        }else{
    
        history.push("/aboutus");
        }
        },[])


    return (
        
        <div>
        <Header/>
        <AboutSection/>
        <OurPrograms/>
        </div>
    )

  
}

export default AboutUs;