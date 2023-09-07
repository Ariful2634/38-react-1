import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  return (
    <>
     
      <h1>Vite + React</h1>
      <Todo task="react" isDone={true}></Todo>
      <Todo task="core concept" isDone={false}></Todo>
     {/* <Developer></Developer>
     {/* using destructuring */}
     {/* <Student grade="12" score="85"></Student>
     <Student grade="11" score="82"></Student>
     <Student grade="10" score="80"></Student>
     <Student></Student> */}
     {/* using props */}
     {/* <Accessories name="watch" price="3300" ></Accessories>
     <Accessories name="mobile" price="13300" ></Accessories>
     <Accessories name="laptop" price="33300" ></Accessories> */}
      
    </>
  )
}

function Developer(){
  const std ={
    border : '2px solid tomato',
    padding: '10px',
    borderRadius: '5px'
  }
  return (
    <div style={std}>
      <h2>Hello</h2>
      <p>This is ariful</p>
    </div>
  )
}

// using destructuring
function Student({grade=9 , score=75}){
  return (
    <div className='cls'>
      <h2>Grade: {grade}</h2>
      <p>Score: {score}</p>
    </div>
  )
}

// using props
function Accessories (props){
  return (
    <div>
      <h2>This is: {props.name}, price: {props.price}</h2>
    </div>
  )
}







export default App
