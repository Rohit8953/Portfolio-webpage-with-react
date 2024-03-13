import React, { useContext, useState } from "react";
import "../hhover.css";
import { data4 } from "../../DATACMP/data";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';
import { Portfoliocontext } from "../../Portfoliocontext";

const Sidebar = () => {
  const{
    changebg,
    
   }=useContext(Portfoliocontext);
const [side, setside] = useState(true);

  return (
    <div className=" fixed z-50 left-2 top-[20%] md:hidden bg-white bg-opacity-20 rounded-md backdrop-filter  backdrop-blur-3xl  h-fit  w-fit transition-all duration-300">
      <div style={{color: changebg ? 'black' : 'white'}} className=" w-full flex flex-row justify-end">
        {side ? (
          <IoReorderThreeOutline
            className="text-4xl mx-auto"
            onClick={() => setside(false)}
          />
        ) : (
          <ImCross className="my-2 relative right-4 " onClick={() => setside(true)} />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-5 mb-2">
        {data4.map((data) => {
          return (
           
            <div>
              <Link to={data.ids} activeClass="active" smooth={true} className="flex flex-row justify-center items-center mx-2 cursor-pointer ">
                <p className="text-3xl text-[#0ef] hover:scale-110 transition-all duration-200 hover:text-white">{data.icons}</p>
                <p>{!side?<p  style={{color: changebg ? 'black' : 'white'}} className="text-2xl ml-2" >{data.name}</p> : ""}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
