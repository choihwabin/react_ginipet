import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import '../style/style.css';

const Join=()=> {
//1. 상태변수 선언
  const [form, setForm] = useState({
  username:'', //아이디
  password:'', //비밀번호
  password2:'', //비밀번호 확인
  email:'', //이메일
  tel:'' //전화번호
});
  const navigate = useNavigate();
  const [error, setError] = useState(''); //회원가입 실패시 출력되는 변수
  const [success, setSuccess] = useState(''); //회원가입 성공시 출력되는 변수

  // 사용자가 입력시 호출되는 함수
  const handleChange=(e)=>{
    //사용자가 각각 입력폼에 데이터를 입력시 변수에 담는다.
    setForm({
      ...form,[e.target.name]:e.target.value
    });
    //데이터가 없으면 에러, 성공으로 출력으로 나오게함.
    setError(''); //에러 초기화
    setSuccess(''); //성공 초기화
  }

  // 회원가입 버튼 클릭시 호출되는 함수
  const handleSubmit=async(e)=>{
    e.preventDefault(); //새로고침 방지
    //사용자가 입력한 data를 backend 서버에 post방식으로 넘김
    
    //비밀번호1, 2가 일치되는지 여부 확인
    if(form.password !== form.password2){
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    //서버측에 POST방식으로 데이터값을 전달한다.
    try{
      await axios.post('https://port-0-backend2025-mbeeobco2e6ef2af.sel4.cloudtype.app/register', {
        username:form.username,
        password:form.password,
        tel:form.tel,
        email:form.email
      });
      setSuccess('회원가입이 완료되었습니다.');
      setForm({ //폼양식의 데이터 초기(type='reset')
        username:'',
        password:'',
        password2:'',
        tel:'',
        email:''
      });
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    }catch(err){//전송 실패시 에러 출력
      setError('회원가입 실패 : 아이디가 이미 존재하거나 서버오류입니다.');
    };
  };


  return (
    <section className='join'>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username' className='nonlabel'>아이디 : </label>
          <input type='text' id='username' name='username' placeholder='아이디 입력' 
          onChange={handleChange}
          value={form.username}
          required
          />
        </p>

        <p>
          <label htmlFor='password' className='nonlabel'>패스워드 : </label>
          <input type='password' id='password' name='password' placeholder='비밀번호 입력' 
          onChange={handleChange}
          value={form.password}
          required
          />
        </p>

        <p>
          <label htmlFor='password2' className='nonlabel'>패스워드 확인 : </label>
          <input type='password' id='password2' name='password2' placeholder='비밀번호 확인'  
          onChange={handleChange}
          value={form.password2}
          required
          />
        </p>

        <p>
          <label htmlFor='email' className='nonlabel'>이메일 : </label>
          <input type='email' id='email' name='email'
          placeholder='예)test@domain.com' 
          onChange={handleChange}
          value={form.email}
          required
          />
        </p>

        <p>
          <label htmlFor='tel' className='nonlabel'>전화번호 : </label>
          <input type='tel' id='tel' name='tel'
          placeholder='번호만 입력'
          onChange={handleChange}
          value={form.tel}
          required
          />
        </p>

        <p>
          <input type='checkbox' id='agree' required />
          <label htmlFor='agree'>이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 동의하기</label>
        </p>

        <p>
          <input type='submit' value='회원가입'/>
        </p>
        {/* 회원가입 실패시 나오는 문구 */}
        {error&&<p style={{color:'red'}}>{error}</p>}
        {/* 회원가입 성공시 나오는 문구 */}
        {success&&<p style={{color:'green'}}>{success}</p>}
      </form>
    </section>
  );
}

export default Join;
