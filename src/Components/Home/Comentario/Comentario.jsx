import React from 'react';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';

function Comentario() {
    return(
        <div>
            <section className="SEB">
            {/* SEB,SB,SECB = Section do Body */}
            <ul className="UB">
                {/* UB,ULB = UL do Body */}
                <li className="LB">Comentários dos Clientes</li>
                {/* LB,LIB = P do Body */}
            </ul>              
            </section>
            <section className="SECB">
                {/* SECB,SEB,SB = Section do Body */}
                <ul className="ULB">
                    {/* ULB,UB = UL do Body */}
                    <li className="LIB">Joao</li> {/* LB,LIB = LI do Body */}
                    <li className="LC">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla optio id libero</li>
                    {/* LC = LI Comentário  */}
                </ul>
                <ul className="ULB">
                    {/* ULB,UB = UL do Body */}
                    <li className="LIB">Pedro</li> {/* LB,LIB = LI do Body */}
                    <li className="LC">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla optio id libero</li>
                    {/* LC = LI Comentário  */} 
                </ul>    
                <ul className="ULB">
                    {/* ULB,UB = UL do Body */}
                    <li className="LIB">Augusto</li> {/* LB,LIB = LI do Body */}
                    <li className="LC">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla optio id libero</li>
                    {/* LC = LI Comentário  */} 
                </ul>            
            </section>
        </div>
    )
}

export default Comentario;