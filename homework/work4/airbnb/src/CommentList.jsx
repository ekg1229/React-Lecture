import React from "react";
import Comment from "./Comment"

const comments=[
{
    image: "서울.jpg",
    color: "#de3151",
    title: "서울",
    distance: 2,
},
{
    image: "인천.jpg",
    color: "#cc2d4a",
    title: "인천",
    distance: 29,
},
{
    image: "대구.jpg",
    color: "#d93b30",
    title: "대구",
    distance: 237,
},
{
    image: "대전.jpg",
    color: "#bc1a6e",
    title: "대전",
    distance: 140,
}
]

function CommentList(){
    return(
        <div>
            {comments.map((comment)=>{
                return <Comment image={comment.image} color={comment.color} title={comment.title} distance={comment.distance} />
            })}
        </div>
    )
}

export default CommentList;