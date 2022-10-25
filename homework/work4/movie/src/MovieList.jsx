import React from "react";
import Moive from "./Moive"

const movies=[
{
    image: "노리미트.jpg",
    color: "#0e86a2",
    title: "노리미트",
    year: 2022,
    genre: "드라마",
    content: "놀라운 재능을 지닌 젊은 여성. 세계적인 기록을 보유한 노 리미트 프리 다이빙 강사와 깊고 파괴적인 사랑에 빠진다. 매혹적인 영상미의 로맨틱 드라마 영화.",
},
{
    image: "기묘한이야기.jpg",
    color: "#7f7f7f",
    title: "기묘한이야기",
    year: 2016,
    genre: "미스터리",
    content: "인디애나주의 작은 마을에서 행방불명된 소년. 이와 함께 마스터리한 힘을 가진 소녀가 나타나고, 마을에는 기묘한 현상들이 일어나기 시작한다. 아들을 찾으려는 엄마와 마을 사람들은 이제 정부의 일급비밀 실험의 실체와 무시무시한 기묘한 현상들에 맞서야 한다."
},
{
    image: "마이네임.jpg",
    color: "#ac5600",
    title: "마이네임",
    year: 2021,
    genre: "범죄 미스테리",
    content: "아빠를 잃었다. 그것도 바로 눈앞에서. 남은 딸은 결심한다. 반드시 내 손으로 복수 하겠노라고. 목표를 위해서라면 방법은 상관없다. 마약 조직의 언더커버가 되어 경찰에 잠입하는 것이라 해도."
},
{
image: "라이프.jpg",
color: "#ec6900",
title: "라이프",
year: 2018,
genre: "드라마",
content: "어느 날 이곳에 의사가 아닌 재벌그룹 출신의 전문경영인이 병원 사장으로 오게 된다. 환자와 의료진으로만 이뤄졌던 상국대병원의 새로운 지배자인 셈. 여기에 한 청년의사가 반응한다. 지금껏 조용히 제 일만 하던 그는 자리에서 일어나 사장이 던진 돌을 집어 힘껏 되던진다. 둘의 격렬한 면역반응은 하루 8천 명의 환자가 드나드는 거대 의료기관을 어디로 끌고 갈까?"
},

]

function MoiveList(){
    return(
        <div>
            {movies.map((props)=>{
                return <Moive image={props.image} color={props.color} title={props.title} year={props.year} genre={props.genre} content={props.content} />
            })}
        </div>
    )
}

export default MoiveList;