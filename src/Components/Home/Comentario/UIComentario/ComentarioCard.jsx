import React from 'react';
import './ComentarioCard.css';
import './ResponsividadeComentario.css';

function CardComentario ({comments}) {

    return(
        <div>
            <ul className="ULB">
                {/* ULB,UB = UL do Body */}
                <li className="LIB">{comments.name}</li> {/* LB,LIB = LI do Body */}
                <li className="LC">{comments.comentario}</li>
                {/* LC = LI Comentário  */}
            </ul> 
        </div>
    )
}

export default CardComentario;