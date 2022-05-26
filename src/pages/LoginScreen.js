import { Auth } from "aws-amplify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import NetflixLogo from "./../assets/netflix-logo.png";
import LoginCover from "./../assets/login-cover.jpg";
import { Card, Center, InputBox } from "../elements/Layout";
import { Title } from "../elements/Text";
import { Button } from "../elements/Button";
import * as React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const singIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      if (!username && !password) {
        throw new Error("Username & Password can not be empty");
      }
      await Auth.signIn(username, password);
      setIsLoading(false);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    if (email.length === 0) {
      return true;
    }
    if (
      (email.length > 6 &&
        email.includes("@") &&
        email.includes(".") &&
        (email.includes("com") ||
          email.includes("net") ||
          email.includes("org"))) ||
      email.includes("in")
    ) {
      return true;
    }
    return false;
  };

  const validatePassword = (password) => {
    if (password.length === 0) {
      return true;
    }
    if (password.length >= 8) {
      return true;
    }
    return false;
  };

  return (
    <Center>
      <Toaster />
      <img
        alt="banner"
        className="absolute h-screen w-screen object-cover opacity-40"
        src={LoginCover}
      />
      <form className="absolute">
        <div className="flex flex-col rounded-sm">
          <Card>
            <img
              alt="netflix logo"
              src={NetflixLogo}
              className="h-36 w-60 self-center"
            ></img>
            <Title>Sign In</Title>
            <InputBox
              type="email"
              inputMode="email"
              placeholder="Email or phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {!validateEmail(username) ? (
              <label className="py-1  text-sm text-red-400">
                Enter a valid email or phone number
              </label>
            ) : null}
            <InputBox
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!validatePassword(password) ? (
              <label className="py-1  text-sm text-red-400">
                Minimum length should be 8 characters
              </label>
            ) : null}
            <Button
              primary={true}
              type="submit"
              onSubmit={(e) => e.preventDefault()}
              onClick={(e) => singIn(e)}
            >
              {isLoading && <Loader />} Sign In
            </Button>
            <Link to="/home" className="pt-4 text-center text-white">
              Login as guest
            </Link>
            <div className="flex flex-row pt-10">
              <div className="text-zinc-500">
                New To Netflix Clone?
                <Link to="/signup" className="text-white">
                  {" "}
                  Sign up now
                </Link>
              </div>
            </div>
          </Card>
          <Footer />
        </div>
      </form>
    </Center>
  );
}
