import React from 'react';

function Insta(props) {
  return (
    <section className='instagram'>
      <h2>
        <img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt='인스타아이콘'/>
        지니펫<span> in 스타</span>
      </h2>

      <p>지니펫의 다양한 소식과 정보를 만나보세요</p>
      <div className='insta_img'>
        <img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} alt='sns타이틀'/>
        <img src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`} alt='sns타이틀 강아지이미지'/>
      </div>

      <div className='insta_img'>
        <img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`} alt='sns타이틀'/>
        <img src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`} alt='sns타이틀 강아지이미지'/>
      </div>
    </section>
  );
}

export default Insta;