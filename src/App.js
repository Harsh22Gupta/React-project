
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#0c0c6e";
      showAlert("dark mode has been enabled","success");
      document.title='Textutils-darkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
      document.title='Textutils-lightMode';
    }
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },2000);
  }
  return (
    <>
       <Navbar title="HARSH" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
       <div className="container " >
          <Textform showalert={showAlert} heading="TRY TEXTUTILS" mode={mode} />
      </div>
        {/* <Navbar
          title="TextUtils"
          aboutText=" About Me"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} /> */}
        {/* <div className="container my-3" mode={mode}> */}
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              exact path="/"
              element={ */}
                {/* <Textform
                  showalert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                /> */}
              {/* }
            />
          </Routes> */}
        {/* </div>
      </BrowserRouter> */}
      
    </>
  );
}

export default App;
