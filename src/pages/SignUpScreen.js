import { Auth } from "aws-amplify";
import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignUpScreen() {
  const naviagte = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const [isCodeSent, setIsCodeSent] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const emailVerify = Auth.confirmSignUp(username, confirmCode);
      console.log(emailVerify);
      alert("Your account is verified sucessfully");
    } catch (err) {
      alert(err);
    }
  };

  const signUpUser = async () => {
    if (!isPasswordSame) return;
    try {
      await Auth.signUp(username, password);
      setIsCodeSent(!isCodeSent);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  const isPasswordSame = () => {
    return password.length === 0 ||
      confirmPassword.length === 0 ||
      password !== confirmPassword
      ? false
      : true;
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col flex w-96 bg-zinc-900 p-8 rounded-sm">
        <div className="text-white font-extrabold text-2xl">Sign Up</div>
        {!isCodeSent && (
          <>
            <input
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-6 text-base text-white "
              type="email"
              inputMode="email"
              placeholder="Email or phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-6 text-base text-white "
              type="password"
              inputMode="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-6 text-base text-white "
              type="password"
              inputMode="password"
              placeholder="Re Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!isPasswordSame() ? (
              <label className="text-red-400  text-sm py-1">
                Password Didn't Match
              </label>
            ) : null}
            <button
              className="bg-red-600 hover:bg-red-700 rounded-sm py-1 px-2 mt-10 text-white font-bold text-lg"
              onClick={async () => {
                // eslint-disable-next-line no-unused-expressions
                (await signUpUser()) ? setIsCodeSent(!isCodeSent) : null;
              }}
            >
              Send Code
            </button>
          </>
        )}
        {isCodeSent && (
          <>
            <input
              className="bg-zinc-700 rounded-sm py-2 px-4  mt-6 text-base text-white "
              placeholder="Confirmation Code e.g 2345"
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <button
              className="bg-red-600 hover:bg-red-700 rounded-sm py-1 px-2 mt-10 text-white font-bold text-lg "
              onClick={() => verifyUserEmail()}
            >
              Confirm Code
            </button>
          </>
        )}
      </div>
    </div>
  );
}
