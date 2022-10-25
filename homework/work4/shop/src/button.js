//React 모듈 추가
import React from "react";

//e라는 엘리먼트 객체 생성
const e = React.createElement;

//React.Component를 상속받는 LikeButton 클래스 선언
class LikeButton extends React.Component{
    //생성자
    constructor(props){
        super(props);
        this.state={liked:false};
    }

    //렌더링
    render(){
        //버튼이 클릭되었다면 구매성공!! 출력
        if(this.state.liked) { return "구매성공!!"; }

    //기본 상태 리턴
    return e(
        //긴급구매 버튼
        "button",
        { onClick:()=>this.setState({liked:true}) },
        "긴급구매"
    );}
}

//LikeButton class export
export default LikeButton;