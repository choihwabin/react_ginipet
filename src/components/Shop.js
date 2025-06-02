import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const Shop=()=> {
  return (
    <section className='shop'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/shop.png`} />
      </div>
      <h2>
        <span>지니펫 쇼핑</span>하러가기
      </h2>

      <p className='now_btn'>
        바로가기
      </p>

      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay:3000}}
      >
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/images/shop1.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&호주산양고기(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop2.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&국내산오리(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop3.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 유기농)</li>
          <li>유기농&균형과조화(1kg)</li>
          <li>22,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop4.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 오리지널)</li>
          <li>홍삼넣은 연어와 닭고기 (5kg)</li>
          <li>69,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop5.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&국내산오리(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop6.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&호주산양고기(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop7.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&호주산양고기(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      <SwiperSlide>
      <img src={`${process.env.PUBLIC_URL}/images/shop8.jpg`} className='shop_img'/>

        <ul className='shop_info'>
          <li>([사료] 홀리스틱)</li>
          <li>홍삼&호주산양고기(5.2kg)</li>
          <li>78,000<span>원</span></li>

          <li>
            <FontAwesomeIcon icon={faCartShopping} className='shop_icon'/>
            <FontAwesomeIcon icon={faHeart} className='shop_icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='shop_icon'/>
          </li>
        </ul>
      </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Shop;