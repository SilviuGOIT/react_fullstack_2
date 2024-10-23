import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Tutors from "./components/Tutors/Tutors";
import University from "./components/University/University";
import Cities from "./components/Cities/Cities";
import { createContext, useState } from "react";

export const ColorContext = createContext("green");

const testVariable = "Informatie din App.jsx";
const App = () => {
  const [color, setColor] = useState("Black");
  return (
    <ColorContext.Provider value={color}>
      <main className="App">
        <Sidebar />
        <section className="container">
          <University />
          <label>
            <span>Color</span>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
          </label>
          <Tutors propForAddTutor={testVariable} />
          <Cities />
        </section>
      </main>
    </ColorContext.Provider>
  );
};

export default App;

//https://medium.com/cleverprogrammer/the-react-context-api-364da590aa73
//https://www.youtube.com/watch?v=_HdrLsyAdJg&ab_channel=AtomicCode
