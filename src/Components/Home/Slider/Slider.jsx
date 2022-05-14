import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import Slider1 from './Img/SLIDER 900.png';
import Slider2 from './Img/SLIDER.png';
import Slider3 from './Img/Slider3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css';

import 'swiper/css/autoplay';

const Slider = () => {
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
      <SwiperSlide><img className="IS" src={Slider1}/></SwiperSlide>
      <SwiperSlide><img className="IS" src={Slider2}/></SwiperSlide>
      <SwiperSlide><img className="IS" src={Slider3}/></SwiperSlide>
      {/* IS = Imagem do Slider */}
    </Swiper>
    <p className="PB">Temos Cabeceiras e Poltronas</p>
    {/* PB = P do Body */}
  </div>
  )
};

export default Slider;