import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpScreen() {
  const naviagte = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const [isCodeSent, setIsCodeSent] = useState(false);

  return (
    <div className="justify-center flex">
      <div className="flex-col flex mt-10 rounded-sm"></div>
      <div className="flex-col flex w-96 bg-zinc-900 p-8 rounded-sm">
        <div className="text-white font-extrabold text-2xl">Sign Up</div>
        {!isCodeSent && (
          <>
            <input
              className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
              type="email"
              inputMode="email"
              placeholder="Email or phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
              type="password"
              inputMode="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
              type="password"
              inputMode="password"
              placeholder="Re Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="bg-red-600 hover:bg-red-700 rounded-sm py-2 px-2 mt-10 text-white font-bold text-lg"
              onClick={() => setIsCodeSent(!isCodeSent)}
            >
              Send Code
            </button>
          </>
        )}
        {isCodeSent && (
          <>
            <input
              className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
              placeholder="Confirmation Code e.g 2345"
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <button
              className="bg-red-600 hover:bg-red-700 rounded-sm py-2 px-2 mt-10 text-white font-bold text-lg "
              onClick={() => naviagte("/login")}
            >
              Confirm Code
            </button>
          </>
        )}
      </div>
    </div>
  );
}
