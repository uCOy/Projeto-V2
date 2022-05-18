import React from 'react';
import {useState,useEffect} from 'react';
import api from '../../Services/api';
import CardComment from './ComentarioApi/Card';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';

function Comentario() {

    const [promotions, setPromotions] =  useState([]);
    const[ search, setSearch] = useState('');


     useEffect(() => {
       const params = {};
       if (search) {
         params.title_like = search;}
         
         const getSeach = async () => {
           try {
             const promotions = await api.get('/comments') 
             setPromotions(promotions.data);
            } catch (error){
              console.log(error);
            }}
            getSeach();

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
            {promotions.map((comment) =>(
              <CardComment comments={comment} key={comment.id}/>
            ) )}  
            </section>
        </div>
    )
}

export default Comentario;