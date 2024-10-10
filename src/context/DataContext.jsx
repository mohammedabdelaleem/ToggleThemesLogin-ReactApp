import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { startCounter: 0, name: "Mohammed", age: 22, theme: "" };

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


export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName }); }
  
    const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge }); }
    
    const increaseCounter = (newCounter) => {
      dispatch({ type: "INCREASE_COUNTER", newValue: newCounter }); }
    
      
      const toggleTheme = (newTheme) => {
        dispatch({ type: "TOGGLE_THEME", newValue: newTheme }); }
        
    
  
  // this export way , empore me to use firstState, changeName, ... from any place at my website 
  return (
    <ThemeContexttt.Provider value={{ ...firstState, changeName, changeAge, increaseCounter ,toggleTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );

  
  };




export default ThemeContexttt;
