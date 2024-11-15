
import { useState } from "react"
import React  from 'react'
export default function Textform(props) {
  const handleClick =()=>
  {
    console.log("Upper-case achieved"+text);
    let newText=text.toLocaleUpperCase();
    setText("Just-show-on-clicking");
  }
  const handleOnchange =(event)=>
  {
    console.log("handdle-on-change");
    setText(event.target.value);
  }
  
const [text, setText] =useState('Enter text here');

  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    
      <textarea className="form-control"value= {text} onChange={handleOnchange}id="Query" rows="8"></textarea>
      <button className ="btn-btn-primary" onClick={handleClick}>Submitt</button>
    
        
      </div></>
    
  )
}

