
import {useContext } from "react";
import ThemeContext from "../context/DataContext";

import "../theme.css"
const Page2 = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h1>Page 2</h1>
    </div>
  );
}

export default Page2;
