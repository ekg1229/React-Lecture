/*임포트*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';

/*root라는 JS 엘리먼트 객체 생성*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( /*렌더링*/
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);