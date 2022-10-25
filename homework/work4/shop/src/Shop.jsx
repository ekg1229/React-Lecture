import React from "react";
import { SaleItem } from "./SaleItem";
import "./Shop.css"
import LikeButton from "./button";

//마감 시간을 계산하는 getDeadline 함수 선언
function getDeadline(endDate){
    //마감 시간을 설정
    let dead = new Date(endDate);
    //현재 시간을 불러옴
    let current = new Date();
    //deadline이라는 변수에 마감 시간-현재 시간한 것을 대입
    let deadline = dead.getTime()-current.getTime();
    //시간 계산
    let hour = Math.floor(deadline/(1000*60*60));
    //분 계산
    let min = Math.floor((deadline % (1000*60*60)) / (1000*60));
    //초 계산
    let sec = Math.floor(((deadline % (1000*60*60)) % (1000*60)) / 1000);

    //10진수 문자열로 표기
    return hour.toString(10)+":"+min.toString(10)+":"+sec.toString(10);
}

//제품 홍보를 담당하는 Card 함수 선언
function Card(props){
    return(
        <div className="card">
            {/* 제품 이미지를 출력하는 img 태그 생성 */}
            <img src={props.img} className="card_img" alt="product"/>
            {/* 카드 전체를 구성하는 card_body classname으로 div 생성 */}
            <div className="card_body">
                {/* 마감 시간을 나타내는 card_time classname을 가진 h2 태그 생성 */}
                <h2 className="card_time">{props.time} 마감예정!</h2>
                {/* 제목을 나타내는 card_title classname을 가진 h2 태그 생성 */}
                <h2 className="card_title">{props.title}</h2>
                {/* 제품을 묘사하는 card_description classname을 가진 p 태그 생성 */}
                <p className="card_description">{props.description}</p>
                {/* 제품의 원래 가격과 할인 가격을 나타내는 card_price classname을 가진 h3 태그 생성 */}
                <h3 className="card_price">
                    {/* 제품의 원래 가격과 할인 가격을 나타냄 */}
                    <del style={{color:"gray"}}>{props.oldprice}</del> {props.price}
                </h3>
                {/* 버튼 이벤트를 구현하기 위해 export된 LikeButton를 사용 */}
                <LikeButton></LikeButton>
            </div>
        </div>
    );
}

//제품 Shop 함수 선언
function Shop(){
    return(
        <div className="wrapper">
            {/* SaleItem에 제품 관련 목록을 가져오기 위해 map 함수 사용 */}
            {SaleItem.map((item)=>{
                return(
                    <Card
                        img={item.img} //제품 이미지
                        time={getDeadline(item.time)} //제품 구매 마감 기한
                        title={item.title} //제목
                        product={item.product} //제품명
                        description={item.description} //제품 설명
                        oldprice={item.oldprice} //원래 가격
                        price={item.price} //할인 가격
                    />
                );
            })}
        </div>
    )
}

//Shop 함수 export
export default Shop;