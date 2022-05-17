import React from 'react';
import CardComment from '../../Card/Card';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';

function Comentario() {

    const [comments, setComments] =  useState([]);
        const[ comment, setComment] = useState('');
    

         useEffect(() => {
           const params = {};
           if (comment) {
             params.title_like = comment;}
             
             const getComment = async () => {
               try {
                 const Comments = await api.get('/comments')
                 setComments(Comments.data);
                } catch (error){
                  console.log(error);
                }}
                getComment();

         }, [comment])

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
            {comments.map((comments) =>(
            <CardComment comment={comments} key={comments.id}/>
           ) )} 
        </div>
    )
}

export default Comentario;