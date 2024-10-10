import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
 
 const initialData = { theme: "light" };


 const reducer = (state, action) => {
  switch (action.type) {

    case "TOGGLE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};


  export function ThemeProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
  
    const toggleTheme = (newTheme) => {
      dispatch({ type: "TOGGLE_THEME", newValue: newTheme }); }

    return (
       <ThemeContexttt.Provider value={{ ...firstState, toggleTheme}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;