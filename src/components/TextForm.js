import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState(""); //this is the declaration for the state variables that can change with the event

    let count = text.split(" ").length;

    // setText()==> updates the variable named text 
    const handleUpclicked=()=>{
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLoclicked=()=>{
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handlerForOnChange=(event)=>{
      
        setText(event.target.value);
    }
    const handleClearclicked = ()=>{
        setText("");
    }
    return (
        <>
        <div className="container">
            

                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handlerForOnChange} placeholder="Enter your text here...." > </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclicked}>Convert to uppercase </button>
                <button className="btn btn-primary mx-1" onClick={handleLoclicked}>Convert to lowercase </button>
                <button className="btn btn-outline-primary mx-1" onClick={handleClearclicked}>Clear</button>
            
        </div>
        <div className="container my-5">
            <h2>Your Text Summary Here</h2>
            <p>
                Number of words: {count}
            </p>
            <p>
                Number of characters: {text.length}
            </p>
            <p>
                <h5>Text Preview</h5>
                <p>{text}</p>
            </p>
        </div>

        </>
    );
}
