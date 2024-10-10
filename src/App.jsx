import "./App.css";
import "./theme.css";
import Page2 from "./pages/page2";
import { Link } from "react-router-dom";

import { useReducer } from "react";

import {useContext } from "react";
import DataContext from "./context/DataContext";

//my needed variables and functions

// names to get random one from them...
const arrNames = [
  "Olivia",
  "Liam",
  "Emma",
  "Noah",
  "Ava",
  "Sophia",
  "Elijah",
  "Isabella",
  "James",
  "Mia",
  "Amelia",
  "Lucas",
  "Mason",
  "Harper",
  "Benjamin",
  "Evelyn",
  "Oliver",
  "Charlotte",
  "Ahmed",
  "Ali",
  "Sara",
  "Youssef",
  "Saed",
  "William",
  "Henry",
  "Alexander",
  "Aiden",
  "Ella",
  "Grace",
  "Zoe",
];
// to get random person

const getRandomNumberBetween = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};


function App() {
  // hooks -> useState to update my variables
  // change current states
  
// import global data by useContext
  const {name, changeName, age , changeAge, theme, toggleTheme, startCounter, increaseCounter} = useContext(DataContext);


  // HTML Body
  return (
    <div className={`App ${theme}`}>

 <Link to="Page2" style={{ margin: "0 0 15px 0" }}><button >Page 2</button></Link>

      <button
        onClick={
          () => {
            toggleTheme(theme=="" ? "dark" : "")
          }
        }
        style={{ marginBottom: "45px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          toggleTheme(theme=="" ? "dark" : "")
        }}
        style={{ marginBottom: "45px" }}
        className="btn-container"
      >

        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
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

        <button
          onClick={() => {
          
            toggleTheme( "")
          
          }}
        >
          light
        </button>

        <button
          onClick={() => {
          
            toggleTheme( "dark")
          
          }}
        >
          dark
        </button>

        <button
            onClick={() => {
          
              toggleTheme( "pink")
            
            }}
        >
          pink
        </button>

        <button
            onClick={() => {
          
              toggleTheme( "gray")
            
            }}
        >
          gray
        </button>
      </div>




      <h2 style={{ marginTop: "30px" }}>My Name is {name}</h2>
      <button
onClick={() => {
  changeName("💡"+arrNames[getRandomNumberBetween(0,arrNames.length-1)] + "🎖️")
}}
      >
        change name
      </button>




      <br />

      <h2>My Age is {age}</h2>
      <button
        onClick={() => {
          
          changeAge( getRandomNumberBetween(12,80))
        
        }}
      >
        change Age
      </button>

      <br />

      <button
          onClick={() => {
          
            increaseCounter(startCounter+1)
          
          }}
      >
        my count is {startCounter}
      </button>
      
    </div>
  );
}

export default App;
