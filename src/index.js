import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";
import App from "./App";

import awsconfig from "./aws-exports.js";
import Amplify from "aws-amplify";

Amplify.configure(awsconfig);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
