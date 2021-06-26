import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


const date = new Date()
const hour = date.getHours()
// const hour = 19
const style = {}
var greeting;

if(hour >= 1 && hour < 12){
  var greeting = "Good Morning"
  style.color = "green"
}else if(hour >= 12 && hour < 19){
  var greeting = "Good Afternoon"
  style.color = "orange"
}else{
  var greeting = "Good Night"
  style.color = "black"
}


ReactDOM.render(
  <h1>Hello Sir! <span style={style}>{greeting}</span></h1>,
  document.getElementById('root'));


  reportWebVitals();
  




  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>