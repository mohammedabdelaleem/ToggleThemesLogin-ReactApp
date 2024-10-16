import { createContext, useReducer } from "react";
  const ThemeContexttt = createContext();
 
const key = "theme"


//  default local storage

 let initialData = { theme:   localStorage.getItem(key) ===null ? "light" : localStorage.getItem(key)};

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
      localStorage.setItem(key, newTheme )
      dispatch({ type: "TOGGLE_THEME", newValue: newTheme });
    
    }

    return (
       <ThemeContexttt.Provider value={{ ...firstState, toggleTheme}}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;