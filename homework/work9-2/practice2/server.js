const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//express 환경 설정
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({extended:false}));

var keyid=3; //다음 추가될 회원에게 부여되는 key값
var userList=[ //회원 명단 초기값 설정
  {keyid:1, name:"홍길동", id:"kdhong", passwd: "1111"},
  {keyid:2, name:"박길동", id:"kdpark", passwd: "1111"},
];

const mainPage=(req, res)=>{
  //브라우저(react)가 서버에 접속하면 보내는 첫 페이지(즉, 빌드한 페이지)
  res.sendFile(path.join(__dirname, '/build/index.html'));
}

const listUsers=(req, res)=>{
  console.log("회원명단 조회 요청을 받았으며, react에 명단을 보냄")
  res.json(userList);
}

const addUser=(req, res)=>{
  const {name, id, passwd}=req.body;
  userList.push({keyid: keyid++, name, id, passwd});
  console.log("회원등록요청 완료. 이를 반영한 전체 목록.")
  userList.map((user, i)=>{
    console.log(user.keyid+"."+user.name+"."+user.id+"."+user.passwd);
  })
  return res.send("success");
}

app.get("/", mainPage);
app.get("/users", listUsers);
app.post("/users", addUser);

//웹 서버 가동
app.listen(65020, ()=>{
  console.log("=================");
  console.log("(react)웹서버 실행 중...");
  console.log("접속 주소: http://localhost:65020/");
  console.log("=================");
})