import React, { useState, useEffect } from 'react';
import Slider from '../../Components/Home/Slider/Slider';
import Comentario from '../../Components/Home/Comentario/Comentario';
import ImagensSecundarias from '../../Components/Home/ImagensSecundarias/ImagensSecundarias';
import Slider2 from '../../Components/Home/Comentario/teste';

const PagesIndex = () =>{
  
  return(
    <div>
        <Slider/>
        <ImagensSecundarias/>
        <Slider2/>
    </div>
  )
}

export default PagesIndex;