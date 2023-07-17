import React,{useState} from 'react'
export default function Textform(props) {
  const handleOnChange = (event)=>{
      setText(event.target.value);
  }
  const handleUpClick = ()=>{
      let newText=text.toUpperCase();
      setText(newText);
      props.showalert("Converted to uppercase","success");
  }
  const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase","success");
  }
  const handle_copy = ()=>{
    var text=document.getElementById("my-Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Copied to clipboard","success");
  }
  const [btnText,setBtnText]=useState('Enable dark mode');
  const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color : props.mode==='light'?'black':'white'}} >
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'#7254c8' , color: props.mode==='light'?'black':'white' }} id="my-Box" rows="7"></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1"  onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1"  onClick={handle_copy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
      <h1>YOUR TEXT SUMMARY</h1>
      <p>words : {text.split(" ").filter((element)=>{return element.length!==0}).length}, letters : {text.length}</p>
    </div>
    </>
  )
}
