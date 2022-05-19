import { Auth } from "aws-amplify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function LoginScreen() {
  const NETFLIX_URL =
    "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1";

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(username, password);
      navigate("/home");
    } catch (err) {
      alert(err);
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
    <form>
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col flex rounded-sm">
          <img
            alt="netflix logo"
            src={NETFLIX_URL}
            className="w-60 h-36 self-center"
          ></img>
          <div className="flex-col flex w-96 bg-zinc-900 p-8 rounded-sm">
            <div className="text-white font-extrabold text-2xl">Sign In</div>
            <input
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-6 text-base text-white "
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
            <input
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
            <button
              type="submit"
              onSubmit={(e) => e.preventDefault()}
              onClick={(e) => singIn(e)}
              className="bg-red-600 hover:bg-red-700 rounded-sm py-1 px-2 mt-10 text-white font-bold text-lg "
            >
              Sign In
            </button>
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
          </div>
          <Footer />
        </div>
      </div>
    </form>
  );
}
