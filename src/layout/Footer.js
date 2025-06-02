import React,{useState, useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
  const [visible,setVisible] = useState(false);
  const [footerText, setFooterText] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      setVisible(window.scrollY>200);
    };
    window.addEventListener('scroll', handleScroll);
  },[]);

  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <footer>
      <div className='f_inner1'>
          공지사항
      </div>
      <div className='f_inner2'>
        <ul className='f_nav'>
          <li>개인정보처리방침</li>
          <li>쇼핑몰약관</li>
        </ul>

        <div>
          <FontAwesomeIcon icon={faInstagram} className='insta' />
        </div>

        <div className='infor'>
          <p>고객센터</p>
          <p>02-2166-7770</p>
          <p>평일 10:00 ~ 17:00</p>
          <p>(점심 12:00 ~ 13:00)</p>
        </div>

        <button className='business'>
          지니펫 사업자 정보확인 <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>

      <div className='business_txt'>
        <img src={`${process.env.PUBLIC_URL}/images/ci_grey_kgclifengin.png`} alt='KGC라이프엔진' className='kgc_img'/>
        <p>경기도 과천시 과천대로 7길 65, 과천상상자이타워 A-105~108호(1층)</p>
        <p>상호 및 대표자 : (주)케이지씨라이프앤진,   정철</p>
        <p>사업자등록번호 : 211-87-38806</p>
        <p>통신판매신고번호 : 제 2024-경기과천-0227 호</p>
        <p>사업자 정보 확인l호스팅서비스제공자 : (주)케이지씨라이프앤진</p>
        <p>Email: ginipet@kgclifengin.com</p>
        <p>ⓒ kgclifengin Corp</p>
        <p><strong>구매안전(에스크로)서비스 가입사실 확인</strong></p>
        <p>고객님은 안전거래를 위해 현금등으로 결제시 저희 쇼핑몰에 가입한 KCP의 구매안</p>
        <p>전서비스를 이용하실 수 있습니다.</p>
        <img src={`${process.env.PUBLIC_URL}/images/logo_grey.png`} alt='하단로고' className='f_logo'/>
      </div>


      {visible &&(
        <button className='top_btn' onClick={scrollTop}>
        TOP
        </button>
      )}
    </footer>
  );
}

export default Footer;