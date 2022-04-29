import React, {useState, useEffect} from 'react';
import axios from 'axios';


function L (){

    const[comments, setComments] = useState([]);
    
    useEffect( () => {
    
      axios.get('http://localhost:5000/comments')
        .then(
          (response) =>{
          console.log(response.data);
          setComments(response.data);
          }
        );
    
    }, [] );

    return(
        <>
          {comments.map( (comments) =>(
            <Index comment={comments} key={comments.id} />
          ) )}
        </>
    )
}

export default L;