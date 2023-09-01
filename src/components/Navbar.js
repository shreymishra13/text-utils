import React from 'react'


export default function Navbar(props) {
  let temp="";

  if(props.darkMode==="true"){
    console.log(true);
    temp="dark";
    document.body.style.color="white"
  }
  else{
    temp="light";
    document.body.style.color="black";
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-${temp} bg-${temp}`}>
      <a className="navbar-brand mx-3" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>

        </ul>
      </div>
      <div className="form-check form-switch mx-3">
        <input className="form-check-input" type="checkbox" onClick={props.handleForToggle} role="switch" id="flexSwitchCheckDefault"  />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.switchValue}</label>
      </div>
    </nav>

  );
}
