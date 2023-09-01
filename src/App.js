import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const[darkMode, setDarkMode]=useState("false");
  const handleForToggle=()=>{
    if(darkMode==="false")
    setDarkMode("true");
  else{
    setDarkMode("false");

  }
  // console.log(darkMode);
  
  }
  

  return (
    <>
     <Navbar title="TextUtils" switchValue="Enable Dark Mode" handleForToggle={handleForToggle} darkMode={darkMode}/>
     <TextForm heading="Enter your Text" darkMode={darkMode} />
     
    </>
  );
}

export default App;