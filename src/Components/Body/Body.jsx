import React from 'react';
import './Body.css';
import SliderC from './sofa azul.png';
import SliderD from './sofa-cinza.png';

function Index({comments}){
    return(
        <div>
            <body>
                {/* <section className="SB">
                    SB,SEB,SECB = Section do Body 
                    <div className="DB">
                        DB,DIB = Div do Body 
                        <img id="BannerImages" src={SliderA} alt="" className="selected"/>
                        <img id="BannerImages" src={SliderB} alt=""/>
                        <img id="BannerImages" src={SliderC} alt=""/>
                        <img id="BannerImages" src={SliderD} alt=""/>
                    </div>
                </section> */}
                <p className="PB">Venha Conhecer nossos Produtos</p>
                {/* PB = P do Body */}
                <div className="DIB">
                    {/* DB,DIB = Div do Body */}
                    <li className="LMG"><img className="IMG" src={SliderC} alt=""/></li>
                    <li className="LIMG"><img className="IMG" src={SliderD} alt=""/></li>
                    {/* LIMG,LMG = LI Img */}
                </div>
                <section className="SEB">
                    {/* SEB,SB,SECB = Section do Body */}
                    <ul className="UB">
                        {/* UB,ULB = UL do Body */}
                        <li className="LB">Comentários dos Clientes</li>
                        {/* LB,LIB = LI do Body */}
                    </ul>              
                </section>
                <section className="SECB">
                    {/* SECB,SEB,SB = Section do Body */}
                        <ul className="ULB">
                            {/* ULB,UB = UL do Body */}
                            <li className="LIB">{comments.name}</li> {/* LB,LIB = LI do Body */}
                            <li className="LC">Lorem reiciendis iste tempore deserunt rebo cumque? Praesentium, culpa?</li>
                            {/* LC = LI Comentário  */}
                        </ul>
                        <ul className="ULB">
                            {/* ULB,UB = UL do Body */}
                            <li className="LIB">{comments.name}</li> {/* LB,LIB = LI do Body */}
                            <li className="LC">Lorem Imunt tenetur voluptate ratione, facilis temporibus? Quaerat.</li>
                            {/* LC = LI Comentário  */} 
                        </ul>    
                        <ul className="ULB">
                            {/* ULB,UB = UL do Body */}
                            <li className="LIB">Reginaldo Andrade Palhares</li> {/* LB,LIB = LI do Body */}
                            <li className="LC">lorem lique praesentium perferendis soluta asperioecto adipisci. Nemo.</li>
                            {/* LC = LI Comentário  */} 
                        </ul>            
                </section>
            </body>
        </div>
    )
}

export default Index;