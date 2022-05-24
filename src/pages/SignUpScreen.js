import { Auth } from "aws-amplify";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { Button } from "../elements/Button";
import { Card, Center, InputBox } from "../elements/Layout";
import { Title } from "../elements/Text";

export default function SignUpScreen() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCode, setConfirmCode] = useState("");

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const verifyUserEmail = async () => {
    setIsLoading(true);
    try {
      const emailVerify = Auth.confirmSignUp(username, confirmCode);
      console.log(emailVerify);
      alert("Your account is verified sucessfully");
      setIsLoading(false);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  const signUpUser = async () => {
    if (!isPasswordSame) return;
    setIsLoading(true);
    try {
      await Auth.signUp(username, password);
      setIsCodeSent(!isCodeSent);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setIsLoading(false);
    }
  };
  const isPasswordSame = () => {
    return password.length > 0 ||
      confirmPassword.length > 0 ||
      password !== confirmPassword
      ? false
      : true;
  };
  return (
    <Center>
      <Toaster />
      <Card>
        <Title>Sign Up</Title>
        {!isCodeSent && (
          <>
            <InputBox
              type="email"
              inputMode="email"
              placeholder="Email or phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputBox
              type="password"
              inputMode="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputBox
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
            <Button
              primary={false}
              onClick={async () => {
                signUpUser().then(() => setIsCodeSent(!isCodeSent));
              }}
            >
              {isLoading && <Loader />} Send Code
            </Button>
          </>
        )}
        {isCodeSent && (
          <>
            <InputBox
              placeholder="Confirmation Code e.g 2345"
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
            />
            <Button primary={true} onClick={() => verifyUserEmail()}>
              {isLoading && <Loader />} Confirm Code
            </Button>
          </>
        )}
      </Card>
    </Center>
  );
}
