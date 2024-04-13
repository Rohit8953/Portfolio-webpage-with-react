import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Aboutme from "./Components/Aboutme";
import Skilltest from "./Components/Skilltest";
import Progressreport from"./Components/Report_card/Progressreport"
import Myresume from "./Components/Resume/Myresume";
import Myproject from "./Components/Projects/Myproject";
import Contactme from "./Components/ContactMe/Contactme";
import Footer from "./Components/Footerhai/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Portfoliocontext } from "./Portfoliocontext";

function App(){
      const{ 
          changebg
     }=useContext(Portfoliocontext);

     useEffect(()=>{
          AOS.init({
              duration:1000,
          });
        
         },[]);
  return(
       <div className={changebg?'bg-white overflow-hidden':' bg-black overflow-hidden'}>
            <Navbar/> 
            <Hero/> 
            <Aboutme/>
            <Skilltest/>
            <Progressreport/>
            <Myresume/>
            <Myproject/>
            <Contactme/>
            <Footer/>
       </div>
  );
}
export default App;

