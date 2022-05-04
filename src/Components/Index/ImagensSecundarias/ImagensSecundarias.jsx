import React from 'react';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import ImgA from './sofa azul.png';
import ImgB from './sofa-cinza.png';

function ImagensSecundarias() {
    return(
        <div>
            <p className="PB">Venha Conhecer nossos Produtos</p>
            {/* PB = P do Body */}
            <div className="DIB">
                {/* DB,DIB = Div do Body */}
                <li className="LMG"><img className="IMG" src={ImgA} alt=""/></li>
                <li className="LIMG"><img className="IMG" src={ImgB} alt=""/></li>
                {/* LIMG,LMG = LI Img */}
            </div>
        </div>
    )
}

export default ImagensSecundarias;