import React from 'react';
import './ImgSec.css';
import './ResponsividadeImgSec.css';
import ImgA from './Img/ImgA.png';
import ImgB from './Img/ImgB.png';

function ImagensSecundarias() {
    return(
        <div>
            <div className="images-sec-local">
                <li className="image-distance"><img className="image-sec" src={ImgA} alt=""/></li>
                <li id="image-distance"><img className="image-sec" src={ImgB} alt=""/></li>
            </div>
        </div>       
    )
}

export default ImagensSecundarias;