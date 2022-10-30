import React from "react";
import Dialog from "./Dialog";

function DialogEx(){
  return(
    <div>
      {/*과제명*/}
      <h2 style={{display:"flex", justifyContent: "center", alignItems: "center", fontSize: "2.5rem"}}> [모바일웹 9-1 과제] </h2>
      {/*경고 다이얼로그*/}
      <Dialog title="경고 다이얼로그" color="red" text="경고 다이얼로그입니다." format="경고!!" btn={false}/><br/>
      {/*인사말 다이얼로그*/}
      <Dialog title="인사말 다이얼로그" color="green" text="인사말 다이얼로그입니다." format="안녕하세요!!" btn={true}/><br/>
      {/*오류 다이얼로그*/}
      <Dialog title="오류 다이얼로그" color="yellow" text="오류 다이얼로그입니다." format="오류!!" btn={true}/><br/>
      {/*공지사항 다이얼로그*/}
      <Dialog title="공지사항 다이얼로그" color="blue" text="공지사항 다이얼로그입니다." format="<공지사항>" btn={false}/>
    </div>
  );
}

export default DialogEx;