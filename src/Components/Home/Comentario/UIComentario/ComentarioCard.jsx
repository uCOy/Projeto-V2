import React from 'react';
import './ComentarioCard.css';

function CardComentario ({comments}) {

    return(
        <>
            <ul className="comments-box">
                <li className="user-name">{comments.name}</li>
                <li className="user-comment">{comments.comentario}</li>
            </ul> 
        </>
    )
}

export default CardComentario;