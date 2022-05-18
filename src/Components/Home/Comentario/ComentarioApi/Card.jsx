import React from 'react';
import './Card.css';
import './ResponsividadeComentario.css';

function CardComment ({comments}) {

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

export default CardComment;