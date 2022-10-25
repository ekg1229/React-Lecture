import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from "./Shop"
import LikeButton from "./button"

//제공된 React 루트를 만들고 루트를 container에 반환 
const root=ReactDOM.createRoot(document.getElementById('root'));

//1초마다 동작을 반복
setInterval(()=>{
  //root를 렌더링
  root.render(
    <React.StrictMode>
      <Shop />
    </React.StrictMode>
  );
},1000);

//버튼이 1초마다 렌더링되는 것을 방지하기 위해 따로 렌더링
root.render(LikeButton, root);