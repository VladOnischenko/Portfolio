import React, {createContext, useState} from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import MainContent from "./containers/MainContent/MainContent";
import Footer from "./containers/Footer/Footer";

export const ThemeProvider = createContext()

const App = () => {
  const [theme, setTheme] = useState(true)
  const toggleTheme = () => setTheme(!theme)

  return (
    <ThemeProvider.Provider value={theme}>
      <div className={theme ? "page" : "page dark"}>
        <Header toggleTheme={toggleTheme}/>
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider.Provider>
  );
}

export default App