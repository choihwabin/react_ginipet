import React from 'react';
import Slide from './Slide'; //슬라이드 
import Shop from './Shop'; // 샵
import Story from './Story'; //애견스토리
import Insta from './Insta'; //인스타그램
import '../style/main.css';

function Main(props) {
  return (
    <main>
      <Slide />
      <Shop />
      <Story />
      <Insta />
    </main>
  );
}

export default Main;