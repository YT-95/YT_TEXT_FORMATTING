import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("")
    const handleUpclick = () => {
        // console.log("object")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    // const [style, setMyStyle] = useState({color:'#042743',backgroundColor:'white'})
    //     const handleMode = () => {
    //     if(style.color==='#042743'){
    //         setMyStyle({
    //         color: 'white',
    //         backgroundColor: '#042743'
    //         })
    //         }
    //     else{
    //         setMyStyle({
    //             color: '#042743',
    //             backgroundColor: 'white'
    //             })
    //     }
    // }   
    const handlTextColor = () => {
        if(document.getElementById("myBox").style.backgroundColor==='grey')
        {
            if(document.getElementById("myBox").style.color==='white'){
                document.getElementById("myBox").style.color='red';
            }
            else{
                document.getElementById("myBox").style.color='white';
            }
           
        }
        else{

            if(document.getElementById("myBox").style.color==='black'){
                document.getElementById("myBox").style.color='red';
            }
            else{
                document.getElementById("myBox").style.color='black';
            }
        }
    
        
       
    }
    const handleLoclick = () => {
   
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
        
    }

    
    const handleClearText = () => {
   
        let newText='';
        setText(newText);
        props.showAlert("Text is Cleared!", "success");

    }
    
    const textChanged = (event) => {
        setText(event.target.value)
    }

    const handlecopyText = () =>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied!", "success");
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3" >
           
         
                <textarea className="form-control" value={text} id="myBox" rows="15" onChange={textChanged} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
            
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert into Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert into Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlecopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlTextColor}>Change Text color</button>

        </div>
        <div className="container my-3">
            <h3>Text Summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in above textbox to preview"}</p>
        </div>
        </div>
        </>
    )
}
