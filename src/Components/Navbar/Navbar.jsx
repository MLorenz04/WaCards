import React from "react";
import { useLang } from "../../Context/LanguageContext";
import "./navbar.css";
export const Navbar = () => {
  const { lang, setLang, texts } = useLang();

  const changeLang = (newLang) => {
    setLang(newLang);
  };
  console.log(texts);
  return (
    <nav>
      <div id="navbar">
        <button className="link">{texts?.navbar?.dowloand} </button>
      </div>
      <div id="lang">
        <p className="nav-lang">Jazyk: {lang}</p>
        <button className="nav-lang-button" onClick={() => changeLang("cs")}>
          Čeština
        </button>
        <button className="nav-lang-button" onClick={() => changeLang("en")}>
          English
        </button>
      </div>
    </nav>
  );
};
