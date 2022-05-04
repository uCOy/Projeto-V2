import React from 'react';

import Slider from './Slider/Slider';
import Comentario from './Comentario/Comentario';
import ImagensSecundarias from './ImagensSecundarias/ImagensSecundarias';

function Index () {
    return(
        <div>
            <Slider/>
            <ImagensSecundarias/>
            <Comentario/>
        </div>
    )
}

export default Index;