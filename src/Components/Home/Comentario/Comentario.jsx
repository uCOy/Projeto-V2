import React from 'react';
import {useState,useEffect} from 'react';
import api from '../../Services/api';
import CardComentario from './UIComentario/ComentarioCard';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';

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
            <section className="SEB">
            {/* SEB,SB,SECB = Section do Body */}
            <ul className="UB">
                {/* UB,ULB = UL do Body */}
                <p className="PBB">Comentários dos Clientes</p>
                {/* LB,LIB = P do Body */}
            </ul>              
            </section>
            <section className="SECB">           
            {/* SECB,SEB,SB = Section do Body */}
            {comment.map((comment) =>(
              <CardComentario comments={comment} key={comment.id}/>
            ) )}  
            </section>
        </div>
    )
}

export default Comentario;