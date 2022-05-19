import React from 'react';
// import '../../PaginaIndex.css';
// import '../../ResponsividadeIndex.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function CardSlider ({sliders}) {
    return(
        <>
      <SwiperSlide><img className="IS" src={sliders.url}/></SwiperSlide>
      {/* <SwiperSlide><img className="IS" src={slider.url}/></SwiperSlide>
      <SwiperSlide><img className="IS" src={slider.url}/></SwiperSlide> */}
      {/* IS = Imagem do Slider */}
        </>
    )
}

export default CardSlider;