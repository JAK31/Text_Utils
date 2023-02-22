// import About from './Components/About';
import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
// import About from './Components/About'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

const toggleMode = () => {
  if(Mode === `dark`)
  {
    setMode(`light`);
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled", "success")
  }
  else{
    setMode(`dark`);
    document.body.style.backgroundColor = '#002a50'
    showAlert("Dark mode has been enabled", "success")
  }
}

  return (
    <>
    {/* <Router> */}
      <Navbar title = "My Navbar" home = "My Home" mode = {Mode} toggleMode = {toggleMode} />
      {/* <Navbar title = 3 home = "My Home" /> */}
      <Alert alert = {alert} />
      <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element = {<About />} />
        <Route exact path="/" element = {<Textform heading = "Enter the Text to analyze" mode = {Mode} showAlert = {showAlert} />} />
      </Routes> */}
      <Textform heading = "Enter the Text to analyze" mode = {Mode} showAlert = {showAlert} />
        
        {/* <About /> */}
        </div>
    {/* </Router> */}

    </>
  );
}

export default App;
