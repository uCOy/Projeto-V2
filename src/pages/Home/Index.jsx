import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '../../Components/Home/Slider/Slider';
import Comentario from '../../Components/Home/Comentario/Comentario';
import ImagensSecundarias from '../../Components/Home/ImagensSecundarias/ImagensSecundarias';

const PagesIndex = () =>{
  
  return(
    <div>
        <Slider/>
        <ImagensSecundarias/>
        <Comentario/>
    </div>
  )

    // const[promotions, setPromotions] = useState([]);

    // useEffect( () => {

    //   axios.get('http://localhost:5000/promotions')
    //     .then(
    //       (response) =>{
    //       console.log(response.data);
    //       setPromotions(response.data);
    //       }
    //     );

    // }, [] );

    // return(
    //     <>
    //       {promotions.map( (promotions) =>(
    //         <Index promotion={promotions} key={promotions.id} />
    //       ) )}
    //     </>
    // )
}

export default PagesIndex;