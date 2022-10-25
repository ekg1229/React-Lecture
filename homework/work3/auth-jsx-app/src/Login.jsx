import React from "react";
import "./index.css"

function Login(props){
    return(
        <div>
            <h3>로그인</h3> {/*h3 제목 태그로 로그인이라는 문자 출력*/}
            <hr></hr> {/*수평 가로선*/}
            사용자 ID: <input type="text" placeholder="이메일을 넣으세요"></input> {/*ID를 입력받을 수 있는 입력창 생성*/}
            <br></br> {/*줄바꿈*/}
            비밀 번호: <input type="text" placeholder="영숫자를 혼합하여"></input> {/*PW를 입력받을 수 있는 입력창 생성*/}
            <button>완료</button> {/*버튼 생성*/}
        </div>
    );
}

export default Login;   //Login을 export