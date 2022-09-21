import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './classComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ClassComponent name = {1} location="문래"></ClassComponent>
    
    <App />
  </>
);

// 숫자만 쓰고 싶을 땐 중괄호로 감싸줘야 함.

