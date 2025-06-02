import React,{useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
function Login(props) {
  const [form, setForm] = useState({
    username:'',
    password:''
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 아이디 비밀번호 입력시 
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value});
    setError(''); //에러 초기화
  }

  // 로그인버튼 클릭시 
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{ //로그인 성공시
      const res = await axios.post('http://localhost:9070/login', form);

      //사용자 인증이 끝나면 '토큰' 생성
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username); //사용자 아이디 저장
      alert('로그인되었습니다.');
      navigate('/');
    }catch(err){ //로그인 실패시
      setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    };
  };

  return (
    <section className='login'>
      <h2>로그인</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input type='radio' id='member' name='usertype' required/>
          <label htmlFor="member">회원</label>
          <input type='radio' id='nonmember' name='usertype' required/>
          <label htmlFor="nonmember">비회원</label>
        </p>

        <p>
          <label hmtlFor='username' className='nonlabel'>아이디</label>
          <input type='text' id='username' name='username' placeholder='아이디'
          value={form.username}
          onChange={handleChange}
          required/>
        </p>

        <p>
          <label hmtlFor='password' className='nonlabel'>비밀번호</label>
          <input type='password' id='password' name='password' placeholder='비밀번호'
          value={form.password}
          onChange={handleChange}
          required/>
        </p>
        
        <p>
          <input type='checkbox' id='id_save'/>
          <label hmtlFor='id_save'>아이디 저장</label>
        </p>

        <input type='submit' value='로그인'/>

        {error &&<p style={{color:'red'}}>{error}</p>}
        {success &&<p style={{color:'green'}}>{success}</p>}
      </form>

      <p className='login_find'>
        <Link to='/id_search'>아이디 찾기</Link> &#10072;
        <Link to='/pw_search'>비밀번호 찾기</Link> &#10072;
        <Link to='/join'>회원가입</Link>
      </p>

      <h3>아직! 회원이 아니세요?</h3>
      <p className='login_txt'>지금 지니펫 회원으로 가입하시고 풍성한 혜택 받아가세요.</p>

      <p className='join_box'>
        <Link to='/join'>회원가입</Link>
      </p>
      
    </section>
  );
}

export default Login;