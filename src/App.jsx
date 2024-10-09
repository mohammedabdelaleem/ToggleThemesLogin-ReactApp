import "./App.css";
import "./theme.css";

import { useState } from "react";

function App() {

  // hooks -> useState to update my variables 
  // change current states 
  const [person, setPreson] = useState("Mohammed");
  const [age, setAge] = useState(28);
  let [counter, setcounter] = useState(0);
  const [theme, settheme] = useState("");


  //my needed variables and functions

  // names to get random one from them...
  const arrNames = [
    "Olivia", "Liam", "Emma", "Noah", "Ava", 
    "Sophia", "Elijah", "Isabella", "James", "Mia", 
    "Amelia", "Lucas", "Mason", "Harper", "Benjamin", 
    "Evelyn", "Oliver", "Charlotte", "Ahmed", "Ali", 
    "Sara", "Youssef", "Saed", "William", "Henry", 
    "Alexander", "Aiden", "Ella", "Grace", "Zoe"
  ];
   // to get random person

  const getRandomNumberBetween = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };

  //  
  const increaseCounterByOne = () => {
    setcounter(++counter);
  };

  // const toggleTheme = () => {
  //   theme == "" ?  : settheme("");
  // }


  // HTML Body 
  return (

    <div className={`App ${theme}`}>
        <button onClick={() => {settheme(theme == "" ? "dark" : "")}} style={{marginBottom:"45px"}}>Toggle Theme</button>
      
      
      
      
    <div onChange={() => {settheme(theme == "" ? "dark" : "")}} style={{marginBottom:"45px"}} className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
    </div>
    
      
        <div>
          
            <button onClick={() => {settheme("");}}>light</button>
            <button onClick={() => {settheme("dark");}}>dark</button>
            <button onClick={() => {settheme("pink");}}>pink</button>
            <button onClick={() => {settheme("gray");}}>gray</button>
          
        </div>
        
        <h2 style={{ marginTop: "30px" }}>My Name is {person}</h2>
        <button onClick={() => {setPreson(arrNames[getRandomNumberBetween(0, arrNames.length - 1)]);}}>change name</button>

        <br />

        <h2>My Age is {age}</h2>
        <button onClick={() => {setAge(getRandomNumberBetween(12, 90));}}>change Age</button>
        <br />
        
        <button onClick={increaseCounterByOne}>my count is {counter}</button>
    </div>
  );
}

export default App;
