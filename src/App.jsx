import React, { useState } from "react";

import "./App.css";
import ReduxCounter from "./redux-practice/components/ReduxCounter";
import Header from "./redux-practice/components/Header";
import Auth from "./redux-practice/components/Auth";
import UserProfile from "./redux-practice/components/UserProfile";

const App = () => {
  return (
    <>
      <Header />
      <Auth />
      <UserProfile/>
      <ReduxCounter></ReduxCounter>
    </>
  );
};

export default App;
