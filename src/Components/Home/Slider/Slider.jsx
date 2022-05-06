import { Navigation, Pagination, Scrollbar, A11y,} from 'swiper';
import '../PaginaIndex.css';
import '../ResponsividadeIndex.css';
import img from '../Img/sofa azul.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css';

const Slider = () => {
  return (
  <div className="DS">
    <p className="PB">Venha Conferir nossos Produtos</p>
    {/* DS = Div do Slider */} 
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      grabCursor={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
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