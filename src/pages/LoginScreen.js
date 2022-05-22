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

export default function LoginScreen() {
  const NETFLIX_URL =
    "http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png";

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const singIn = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      setIsLoading(false);
      navigate("/home");
    } catch (err) {
      alert(err);
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
      <img
        alt="banner"
        className="w-screen h-screen absolute opacity-40 object-cover"
        //src="https://img.wallpapersafari.com/desktop/1680/1050/24/74/zgeTuV.jpg"
        src={LoginCover}
      />
      <form className="absolute">
        <div className="flex-col flex rounded-sm">
          <Card>
            <img
              alt="netflix logo"
              src={NetflixLogo}
              className="w-60 h-36 self-center"
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
              <label className="text-red-400  text-sm py-1">
                Enter a valid email or phone number
              </label>
            ) : null}
            <InputBox
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-4 text-base text-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!validatePassword(password) ? (
              <label className="text-red-400  text-sm py-1">
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
            <Link to="/home" className="text-white text-center pt-4">
              Login as guest
            </Link>
            <div className="flex-row flex pt-10">
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
