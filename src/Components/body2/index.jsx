import React from "react";
import './style.css';
import hoddie1 from '../../images/hoddie1.png';
import hooddie2 from '../../images/hooddie2.png';
import hoodie4 from '../../images/hoodie4.png';
import hoodie5 from '../../images/hoodie5.png';
import { LiaStarSolid } from "react-icons/lia";



const Images = () =>{
    return(
        <div>
            <div className="images-container">
                <img src={hoddie1} alt="The first hoodie"/>
                <img src={hooddie2} alt="The second hoodie" />
                <img src={hoodie4} alt="The third hoodie" />
                <img src={hoodie5} alt="The fourth hoodie"/>
            </div>

            <div className="icon-containers">
            <div className="left-content">
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <LiaStarSolid />
            <p>4.8/5 (56564)</p>
            </div>
            <div className="right-content">
                <p>Loved by <span>250,000+</span></p>
                <p>Blanket hoodie fanatics across the Globe</p>
            </div>
            </div>
        </div>
    )
}
export default Images;