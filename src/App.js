import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("false");
  const handleForToggle = () => {
    if (darkMode === "false")
      setDarkMode("true");
    else {
      setDarkMode("false");

    }
    // console.log(darkMode);

  }


  return (
    <>
      <Router>
          <Navbar title="TextUtils" switchValue="Enable Dark Mode" handleForToggle={handleForToggle} darkMode={darkMode} />
        <Routes>
        <Route exact path="/" element={   <TextForm heading="Enter your Text" darkMode={darkMode} />}/>
        <Route exact path="/about" element={<About darkMode={darkMode}/>}/>
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/">
         
          </Route> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;