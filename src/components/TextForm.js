import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState(""); 
    //this is the declaration for the state variables that can change with the event



    let count = text.split(" ").filter((element)=>{ return element.length!==0}).length;

    // setText()==> this function updates the variable named text 
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
    const handleCopy = ()=>{
       let newText= document.getElementById("myBox");
       newText.select();
       navigator.clipboard.writeText(newText.value);
    }
   
    
    if(props.darkMode==="true"){
        
        
        document.body.style.color="white";
        document.body.style.backgroundColor="#154757";
        console.log(document.getElementById("myBox"));
        

  }
  else{

    document.body.style.color="black";
    document.body.style.backgroundColor="white";
  
  
   
  }

   



    return (
        <>
        <div className="container">
            

                <h1 className="mt-5">
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handlerForOnChange} placeholder="Enter your text here...." ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1    " onClick={handleUpclicked}>Convert to uppercase </button>
                <button className="btn btn-primary mx-1 my-1    " onClick={handleLoclicked}>Convert to lowercase </button>
                <button className="btn btn-primary mx-1 my-1    " onClick={handleCopy}>Copy text </button>
                <button className="btn btn-outline-primary mx-1 my-1    " onClick={handleClearclicked}>Clear</button>
            
        </div>
        <div className="container my-5">
            <h2>Your Text Summary Here</h2>
            <p>
                Number of words: {count}
            </p>
            <p>
                Number of characters: {text.length}
            </p>
                <h5>Text Preview</h5>
            <p>
        {text===""?"Enter the text above to see the preview":text}
                
            </p>
        </div>

        </>
    );
   


}
