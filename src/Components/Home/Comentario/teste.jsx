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

const Slider2 = () => {

    const [slider, setSlider] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const slider = await api.get('/comments') 
               setSlider(slider.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])
  
    return (
    <div className="DS">
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
      {slider.map((comments) =>(
                <SwiperSlide>            
                <ul className="comments-box">
                    <li className="user-name">{comments.name}</li>
                    <li className="user-comment">{comments.comentario}</li>
                </ul> 
            </SwiperSlide>
      ) )}  
      </Swiper>
    </div>
    )
  };
  
  export default Slider2;