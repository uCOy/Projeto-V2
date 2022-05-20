import React from 'react';
import './ComentarioCard.css';
import '../ResponsividadeComentario.css';

function CardComentario ({comments}) {

    return(
        <div>
            <ul className="comments-box">
                {/* ULB,UB = UL do Body */}
                <li className="user-name">{comments.name}</li> {/* LB,LIB = LI do Body */}
                <li className="user-comment">{comments.comentario}</li>
                {/* LC = LI Comentário  */}
            </ul> 
        </div>
    )
}

export default CardComentario;