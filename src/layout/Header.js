import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem('username'); //로컬스토리지 값을 변수에 담는다.
  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');// 기존 데이터 비우기
    localStorage.removeItem('username'); //기존데이터 비우기
    navigate('/login'); //로그인페이지로 이동
    window.location.reload(); //상태 갱신을 위해 새로고침
  }
  return (
    <header>
      <div>
        <button onClick={()=>setMenuOpen(true)}>
          <FontAwesomeIcon  icon={faBars} className='menu'/>
        </button>

        <h1>
          <Link to='/'>
            <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} />
          </Link>
        </h1>

        <Link to='/cart'>
          <FontAwesomeIcon icon={faCartShopping} className='cart'/>
        </Link>
      </div>

      <section className='nav' style={{
        left:menuOpen?'0%':'-100%'
        //삼항조건연산자 =조건식?true값:false값
      }}>
        <nav>
          <button className='close_btn' onClick={()=>setMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt='닫기버튼'/>
          </button>
          <ul className='gnb'>
            <li><Link to='/' title='지니펫 쇼핑몰' onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
            <li><Link to='/intro' title='브랜드 소개' onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
            <li><Link to='/info' title='반려견 정보' onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
            <li><Link to='/event' title='이벤트' onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
            <li><Link to='/customer' title='고객지원' onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
          </ul>
            </nav>
            
            <div className='lnb'>
              <Link to='/login' title='로그인' onClick={()=>setMenuOpen(false)}>로그인</Link>
              <Link to='/join' title='회원가입' onClick={()=>setMenuOpen(false)}>회원가입</Link>
              <Link to='/order' title='주문조회' onClick={()=>setMenuOpen(false)}>주문조회</Link>
              <Link to='/cart' title='장바구니' onClick={()=>setMenuOpen(false)}>장바구니</Link>
            </div>

            {/* 사용자가 로그인시 이름, 로그아웃 버튼이 나옴 */}
            {username ?(
              <span>
                <b>{username}</b>님 환영합니다.
                <button onClick={handleLogout} style={{marginLeft:'10px'}}>로그아웃</button>
              </span>
            ) : (
              <Link to='/login'>로그인</Link>
            )}
          </section>
    </header>
  );
}

export default Header;