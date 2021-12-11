import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="bg-red-800 p-2 justify-between flex flex-row">
        <h1 className="text-3xl font-bold text-red-100">Netflix</h1>
        <div className="text-white  self-center">Login</div>
      </div>
    </div>
  );
}
