import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./components/context/auth";
import Router from "./router";

const App = () => {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    setAuthTokens(data);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router />
        </AuthContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
