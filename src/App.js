import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import awsconfig from "./aws-exports";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";

Amplify.configure(awsconfig);

function App() {
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
