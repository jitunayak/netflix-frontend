import { useState } from "react";

export default function LoginScreen() {
  const NETFLIX_URL =
    "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="justify-center flex">
      <div className="flex-col flex mt-10">
        <img
          alt="netflix logo"
          src={NETFLIX_URL}
          className="w-72 h-40 self-center"
        ></img>
        <div className="flex-col flex w-96 bg-zinc-900 p-8 rounded-sm">
          <div className="text-white font-extrabold text-2xl">Sign In</div>
          <input
            className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
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
            className="bg-zinc-700 rounded-sm py-3 px-4  mt-4 text-base text-white"
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

          <button className="bg-red-600 hover:bg-red-700 rounded-sm py-2 px-2 mt-10 text-white font-bold text-lg ">
            Sign In
          </button>
          <div className="flex-row flex py-10">
            <div className="text-zinc-500">
              New Netflix Clone ?<div className="text-white">Sign up now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
