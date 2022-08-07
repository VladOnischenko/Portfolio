import React from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import MainContent from "./containers/MainContent/MainContent";
import Footer from "./containers/Footer/Footer";

const App = () => {
  return (
    <div className="page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App