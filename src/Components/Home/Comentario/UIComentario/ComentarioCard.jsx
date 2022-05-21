import React from 'react';
import './ComentarioCard.css';
import '../ResponsiveComment.css';

function CardComentario ({comments}) {

    return(
        <>
            <ul className="comments-box">
                {/* ULB,UB = UL do Body */}
                <li className="user-name">{comments.name}</li> {/* LB,LIB = LI do Body */}
                <li className="user-comment">{comments.comentario}</li>
                {/* LC = LI Comentário  */}
            </ul> 
        </>
    )
}

export default CardComentario;