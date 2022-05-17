import React from 'react';
import './Card.css';
import axios from 'axios';

function CardComment () {

    return(
        <div>
            <section className="SECB">
                {/* SECB,SEB,SB = Section do Body */}
                <ul className="ULB">
                    {/* ULB,UB = UL do Body */}
                    <li className="LIB"></li> {/* LB,LIB = LI do Body */}
                    <li className="LC"></li>
                    {/* LC = LI Comentário  */}
                </ul> 
            </section>
        </div>
    )
}

export default CardComment;