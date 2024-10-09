import "./App.css";
import "./theme.css";

import { useReducer } from "react";

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

const initialData = { startCounter: 0, name: arrNames[0], age: 22, theme: "" };

// define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE_COUNTER":
      return { ...state, startCounter: action.newValue };

    case "TOGGLE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  // hooks -> useState to update my variables
  // change current states
  const [allData, dispatch] = useReducer(reducer, initialData);



  // HTML Body
  return (
    <div className={`App ${allData.theme}`}>
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE_THEME",
            newValue: allData.theme === "" ? "dark" : "",
          });
        }}
        style={{ marginBottom: "45px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          dispatch({
            type: "TOGGLE_THEME",
            newValue: allData.theme === "" ? "dark" : "",
          });
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
            dispatch({
              type: "TOGGLE_THEME",
              newValue: "",
            });
          }}
        >
          light
        </button>

        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              newValue: "dark",
            });
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              newValue: "pink",
            });
          }}
        >
          pink
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "TOGGLE_THEME",
              newValue: "gray",
            });
          }}
        >
          gray
        </button>
      </div>

      <h2 style={{ marginTop: "30px" }}>My Name is {allData.name}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_NAME",
            newValue: arrNames[getRandomNumberBetween(0, arrNames.length - 1)],
          });
        }}
      >
        change name
      </button>

      <br />

      <h2>My Age is {allData.age}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_AGE",
            newValue: getRandomNumberBetween(20, 90),
          });
        }}
      >
        change Age
      </button>
      <br />

      <button
        onClick={() => {
          dispatch({
            type: "INCREASE_COUNTER",
            newValue: allData.startCounter + 1,
          });
        }}
      >
        my count is {allData.startCounter}
      </button>
    </div>
  );
}

export default App;
