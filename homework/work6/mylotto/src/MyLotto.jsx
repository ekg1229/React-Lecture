//import React, useEffect, useRef
import React, {useEffect, useRef} from "react";

//MyLotto 함수 선언
function MyLotto(){
  //numOfLotto useRef 변수 선언
  const numOfLotto = useRef(1);
  //str, event라는 2개의 파라미터를 가지는 handler 함수 선언
  const handler = (str, event) => {
    console.log(numOfLotto.current.toString()+"회차 "+str+event.target.value);
    alert(numOfLotto.current.toString()+"회차 "+str+event.target.value);
    numOfLotto.current = numOfLotto.current+1;
  };

  //useEffect hook을 이용해 컴포넌트가 마운트, 언마운트될 때 콘솔창과 alert창에 메시지 출력
  useEffect(()=>{
    //마운트 상태
    console.log(">>> 마운트되었습니다. !!!");
    alert(">>> 마운트되었습니다. !!!")
    //언마운트 상태
    return()=>{
      console.log(">>> 언마운트되었습니다. !!!");
      alert(">>> 언마운트되었습니다. !!!")
    }
  },[]);

  //useEffect hook을 이용해 컴포넌트가 렌더링될 때 콘솔창과 alert창에 메시지 출력
  useEffect(()=>{
    //렌더링 상태
    console.log(">>> 렌더링되었습니다. !!!");
    alert(">>> 렌더링되었습니다. !!!")
  })

  return(
    <button
      value="홍길동"
      onClick={(event)=>handler("당첨자: ", event)}> 당첨자 확인 {/* 함수 형식으로 이벤트 핸들러 호출*/}
    </button>
  )
}
//export MyLotto Component
export default MyLotto;