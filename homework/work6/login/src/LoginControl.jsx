import React, {useState, useEffect} from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./LoginControl.css"

function LoginControl(){
  //버튼 클릭 횟수를 세기 위한 cnt state 변수 선언
  const [cnt, setCnt] = useState(0);
  //버튼을 누를 때마다 1씩 증가하는 cntUp 함수 선언
  const cntUp=()=>setCnt(cnt+1);
  //input component의 내용
  const [text, setText] = useState("");

  //로그인 되었는지를 나타내는 isLoggedIn state 변수 선언
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //로그인 버튼 클릭->로그인&버튼 클릭 횟수+1
  const handleLoginClick=()=>{ 
    setIsLoggedIn(true);
    cntUp();
  };
  //로그아웃 버튼 클릭->로그아웃&버튼 클릭 횟수+1
  const handleLogoutClick=()=>{
    setIsLoggedIn(false);
    cntUp();
  };
  //input component에 입력된 값을 실시간으로 출력
  const onChange=(e)=>{
    setText((text)=>document.getElementById("id").value);
  }

  //컴포넌트가 렌더링될 때마다 isLoggedIn 변수와 버튼 클릭 횟수(cnt)를 콘솔창에 출력
  useEffect(()=>{
    console.log("isLoggedIn:", isLoggedIn, "/ cnt: ", cnt);
  });

  //버튼 선언
  let button;

  //조건부 렌더링, 이벤트 랜들링
  if(isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick}/>;
  }
  else{
    button = <LoginButton onClick={handleLoginClick}/>;
  }

  //화면 구성 리턴
  return(
    <div>
      <div className="login">
      <Greeting isLoggedIn={isLoggedIn}/> {button}
      <input onChange={onChange} value={text} id="id"/>
      </div>
      <div>
        <span id="text">{text}</span>
      </div>
    </div>
  );
}
//export LoginControl component
export default LoginControl;