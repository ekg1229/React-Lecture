import React from "react";

function Dialog(props){
  //props로 받을 변수들
  const title = props.title; //타이틀
  const color = props.color; //색
  const text = props.text; //텍스트 내용
  const format = props.format; //포맷
  const btn = props.btn; //버튼 유무

  return(
    /*전체 테두리*/
    <div style={{border:"4px solid black"}}>
      {/*text 가운데 정렬, div 사이즈 지정, 배경색 지정, 타이틀*/}
      <div style={{display:"flex", justifyContent: "center", alignItems: "center", height: "2.5rem", background: color, borderBottom:"4px solid black", fontSize: "1.5rem", color:"black", fontWeight:"bold"}}>{title}</div>
      <div style={{display:"flex", justifyContent: "center", alignItems: "center", height: "4rem", fontSize: "1.3rem"}}>
        {/*텍스트 내용, 포맷 출력*/}
        <div style={{width: "auto"}}>{text}</div>
        <div>{format}</div>
      </div>
      <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
      {/*버튼 유무 출력*/}
      {btn ? (<button>click</button>):(<></>)}
      </div>
    </div>
  );
}

export default Dialog;