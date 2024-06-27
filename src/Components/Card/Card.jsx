import React from "react";
import img1 from "../../assets/netflix.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

import './Card.css'


const Card = ({element}) => {
  // const date = new Date();
  return (
    <div>
      <div className="card-cont">
        <img src={element.urlToImage} alt="IMAGE" />
        <br />
        <div className="under-box">
        <CiCalendar />
        <span>June 29th, 2021</span>
        <h3 className="chtext">{element.title}</h3>
        <p className="ctext">
          {element.description}
        </p>
        <a className="atext" href="#"><p>Read more <IoIosArrowRoundForward className="f-arrow" /> </p></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
