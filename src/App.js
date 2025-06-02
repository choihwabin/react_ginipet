import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer'; //푸터
import Main from './components/Main'; //메인
import Header from './layout/Header'; //헤더

import Intro from './components/Intro'; //브랜드소개
import Info from './components/Info'; //반려견정보
import Event from './components/Event'; //이벤트
import Customer from './components/Customer'; //고객지원
import Login from './components/Login'; //로그인
import Join from './components/Join'; //회원가입
import Cart from './components/Cart'; //장바구니
import Order from './components/Order'; //주문조회

import './style/common.css'; //공통서식
import './style/reset.css'; //리셋서식
import './style/nav.css'; //메뉴서식
import './style/style.css'; //로그인,회원가입서식

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        {/* 메뉴서식 */}
        <Route path='/login' element={<Login />}/>
        <Route path='/join' element={<Join />}/>
        <Route path='/intro' element={<Intro />}/>
        <Route path='/info' element={<Info />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/customer' element={<Customer />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
        
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
