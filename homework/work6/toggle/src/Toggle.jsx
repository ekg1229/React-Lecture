//import React, useState, useEffect
import React, {useState, useEffect} from "react";

function Toggle(props){
  //state 변수 선언
  const [isToggleOn, setIsToggle] = useState(true);
  //cntup 함수 선언(IsToggleOn state 변수 값 변경)
  const cntup=()=>setIsToggle((isToggleOn)=>!isToggleOn);

  //렌더링될 때마다 console에 state변수 값 출력
  useEffect(()=>{
    console.log("토글 상태: ", isToggleOn);
  },);

  //button 관련 return
  return <button onClick={cntup}>
    {isToggleOn ? "클릭A" : "클릭B"}
  </button>;
}
//export Toggle component
export default Toggle;