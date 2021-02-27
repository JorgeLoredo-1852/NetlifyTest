import React from "react";
import "../../global-style/_base.scss";
import "./_App.scss";

import Header from "../Header/Header";
//import SideBar from "../SideBar/SideBar";
//import Hotel from "../Hotel/Hotel";
import { GoogleLogin } from "react-google-login";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">{/*<SideBar />
        <Hotel />*/}</div>
      <GoogleLogin
        clientId="573398896027-s2gkdto402okk0v9ie2sp7u97oh7nekj.apps.googleusercontent.com"
        onSuccess={() => console.log("YOU ENTERED")}
        onFailure={() => console.log("failure")}
      />
    </div>
  );
};

export default App;
