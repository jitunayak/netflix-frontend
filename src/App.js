import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";
//import { isExpired, decodeToken } from "react-jwt";
import { setStoredToken, getStoredToken } from "./Utilities";
import Footer from "./components/Footer";
import LoginScreen from "./pages/LoginScreen";
import toast, { Toaster } from "react-hot-toast";

import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SignUpScreen from "./pages/SignUpScreen";
Amplify.configure(awsconfig);

function App() {
  // const [username, setUsername] = useState("");
  // const domain = window.location.href;
  // const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
  //   domain
  // )}callback`;

  useEffect(() => {
    // if (isExpired(getToken())) {
    //   window.open(loginUrl, "_self");
    // }

    //https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-browser-credentials-cognito.html

    // if (getStoredToken() === null && getTokenFromCallbackUrl() === null) {
    //   window.open(loginUrl, "_self");
    //   console.log("token is null");
    //   setUsername("No User was found");
    // } else {
    //   setUsername(getStoredToken().email);
    //   if (getTokenFromCallbackUrl() !== null) {
    //     console.log(domain.split("callback")[0]);
    //     window.open(domain.split("callback")[0], "_self");
    //   }
    // }
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
