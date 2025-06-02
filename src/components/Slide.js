import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
function Slide(props) {
  return (
    <section className='slide'>
      <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay:3000}}
      pagination={{clickable:true}}
      effect="fade"
      fadeEffect={{crossFade:true}}
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/slide1.png`} alt='슬라이드이미지1'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/slide2.png`} alt='슬라이드이미지2' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slide;