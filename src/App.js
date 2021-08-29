import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("DarkMode is Enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("LightMode is Enabled!", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="YT" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
      {/* <Switch> */}
          {/* <Route exact path="/about">
           
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter text here" showAlert={showAlert} mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;




