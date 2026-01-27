import React from "react";
import PageOneCard from "./PageOneCard";
import passport from '../assets/passport.jpg';

const PageOne: React.FC = () => {
 

  return (
    <>
     <div id="pageOne" className="flex flex-row items-center p-12 bg-white rounded-xl">
    <PageOneCard name="Ibukun Dada" role="Developer" />
    <img
          src={passport} 
          alt="Dada Ibukun, Professional Developer"
          className="rounded-full object-cover border-lemon-400 p-4"
        />
        </div>
    </>
  );
};

export default PageOne;
