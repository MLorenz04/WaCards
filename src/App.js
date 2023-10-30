import React from "react";
import "./style.css";
import { Homepage } from "./Components/Homepage/Homepage";
import { Navbar } from "./Components/Navbar/Navbar";
import { LangProvider } from "./Context/LanguageContext";
export const App = () => {
  return (
    <LangProvider>
      <Navbar />
      <Homepage />
    </LangProvider>
  );
};
