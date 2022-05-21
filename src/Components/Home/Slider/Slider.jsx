import {useState,useEffect} from 'react';
import api from '../../Services/api';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {

  const [slider, setSlider] =  useState([]);

     useEffect(() => {   
         const getSearch = async () => {
           try {
             const slider = await api.get('/slider') 
             setSlider(slider.data);
            } catch (error){
              console.log(error);
            }}
            getSearch();

     }, [])

  return (
  <div className="DS">
    {/* DS = Div do Slider */} 
    <p className="PB">Venha Conferir nossos Produtos</p>
    {/* PB = P do Body */}
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 6500 }}
      pagination={{ clickable: true }}
      grabCursor={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
    {slider.map((slider) =>(
              <SwiperSlide><img className="IS" src={slider.url}/></SwiperSlide>
    ) )}  
    </Swiper>
    <p className="PB">Temos Cabeceiras e Poltronas</p>
    {/* PB = P do Body */}
  </div>
  )
};

export default Slider;