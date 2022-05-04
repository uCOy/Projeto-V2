import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import img from './sofa-cinza.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className="DS">
      {/* DS = Div do Slider */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className="IS" src={img}/></SwiperSlide>
        <SwiperSlide><img className="IS" src={img}/></SwiperSlide>
        <SwiperSlide><img className="IS" src={img}/></SwiperSlide>
        {/* IS = Imagem do Slider */}
      </Swiper>
    </div>
  )
};

export default Slider;

