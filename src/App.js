import React from 'react';
import './Components/Header.css';
import './Components/Main.css'
import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
    <h1 style={{textAlign:'center', fontWeight: 'bold', fontSize: '60px', marginBottom:"100px"}}>My Github Resume</h1>
      <Header/>
      <Main/>
    </>
  )
}

export default App;