import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import CardComentario from './UIComentario/ComentarioCard';
import './Comentario.css';
import './ResponsiveComment.css';

function Comentario() {

    const [comment, setComment] =  useState([]);
    const[ search, setSearch] = useState('');


     useEffect(() => {
       const params = {};
       if (search) {
         params.title_like = search;}
         
         const getSearch = async () => {
           try {
             const comment = await api.get('/comments') 
             setComment(comment.data);
            } catch (error){
              console.log(error);
            }}
            getSearch();

     }, [search])

    return(
        <div>
            <section className="comment-section">
            <ul className="ul-comment">
                <p className="p-title-comment">Comentários dos Clientes</p>
            </ul>              
            </section>
            <section className="comments-local">           
            {comment.map((comment) =>(
              <CardComentario comments={comment} key={comment.id}/>
            ) )}  
            </section>
        </div>
    )
}

export default Comentario;