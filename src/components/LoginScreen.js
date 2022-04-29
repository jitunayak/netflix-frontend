import React from "react";

export default function LoginScreen() {
  const NETFLIX_URL =
    "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1";

  return (
    <div className="justify-center flex">
      <div className="flex-col flex mt-10">
        <img
          alt="netflix logo"
          src={NETFLIX_URL}
          className="w-72 h-40 self-center"
        ></img>
        <div className="flex-col flex w-96 bg-zinc-900 p-10 ">
          <div className="text-white font-extrabold text-2xl">Sign In</div>
          <input
            className="bg-zinc-700 rounded-sm py-3 px-4  mt-6 text-base text-white "
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="bg-zinc-700 rounded-sm py-3 px-4  mt-4 text-base"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 rounded-sm py-3 px-2 mt-10 text-white font-bold text-lg ">
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
