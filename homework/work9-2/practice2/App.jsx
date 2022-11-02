import React,{useState, useEffect}from "react";
import './App.css';

const serverURL="http://localhost:65020/users";

function App(){
  const [userData,setUserData] = useState(null); //데이터
  const [userEx, setUserEx] = useState(null);

  const getUserData=()=>{ //getUserData 함수를 통해 userData 변수에 바뀐 data를 대입
    fetch(serverURL)
    .then((res)=>res.json())
    .then((data)=>setUserData(data))
    .then(console.log(userData))
  }

  useEffect(getUserData,[]); //마운트 시 화면에 초기 유저 정보 띄워줌

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const id=event.target.id.value;
    const passwd=event.target.passwd.value;
    console.log("Submit버튼 클릭 후 서버로 POST전송");
    
    fetch(serverURL,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({name,id,passwd}),
    })
    .then(getUserData())
  }

  const findUser=(event)=>{
    setUserEx(false);
    event.preventDefault();
    const id=event.target.id.value;
    const passwd=event.target.passwd.value;
    console.log("버튼 클릭 후 서버 회원 정보와 비교");

    fetch(serverURL) //fetch 함수를 통해 REST API(GET)로 회원목록 요청
      .then((res) => res.json())
      .then((data)=>{
        data.forEach((element)=>{
          if((element.id === id) && (element.passwd === passwd)) setUserEx(true);
        })
      })
  }

  return (
    <>
      <div>
        <h2>회원등록</h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름"/>
          <input type="text" name="id" placeholder="아이디"/>
          <input type="text" name="passwd" placeholder="암호"/>
          <button type="submit">등록</button>
        </form>
      </div>
      <p></p>
      <div>
        <h2>회원확인</h2>
        <form onSubmit={findUser}>
          <input type="text" name="id" placeholder="아이디"/>
          <input type="text" name="passwd" placeholder="암호"/>
          <button type="submit">확인</button>
        </form>
        {/*userEx state변수에 따른 화면 변화*/}
        {userEx === null ? ("") : userEx === true ? (<p>회원으로 확인되었습니다.</p>):(<p style={{color: "red", fontWeight: "bold", fontSize: "2rem"}}>그런 회원은 없습니다.</p>)}
      </div>
      <div>
        <h2>회원목록</h2>
        <ol>
          {(userData===null)?(
            <p>서버에서 데이터를 가져오는 중...</p>
          ) : (
            userData.map((user, i)=>(
              <li key={user.keyid}>{user.name}{user.id}{user.passwd}</li>
            ))
          )}
        </ol>
      </div>
    </>
  )
}

export default App;