import React, { useState, useEffect } from 'react';
import Index from '../../Components/Index/PaginaIndex';
import axios from 'axios';
import Slider from '../../Components/Index/Slider/Slider';

const PagesIndex = () =>{
  
  return(
    <div>
      <Index/>
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