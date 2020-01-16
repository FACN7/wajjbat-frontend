import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./theme/reset.scss";
import { IntlProvider } from "react-intl";
import messages from "./Languages";



const AppIndex = () => {
  const [lang, setLang] = useState("ar");
  useEffect(() => setLang(lang), [lang]);

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <BrowserRouter>
        <div style={{ direction: lang === "ar" ? "rtl" : "ltr", fontFamily: "Helvetica" }}>
          <App setLang={setLang} lang={lang} />
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
};
ReactDOM.render(<AppIndex />, document.getElementById("root"));
