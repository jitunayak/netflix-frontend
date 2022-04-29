import React from "react";

export default function Navbar({ username }) {
  const NETFLIX_URL = "https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
  const domain = window.location.href;
  const loginUrl = `https://netflix.auth.ap-south-1.amazoncognito.com/login?client_id=2v4q07qaad1jlugonm96akg1nk&response_type=token&scope=email+openid&redirect_uri=${encodeURIComponent(
    domain
  )}callback`;
  return (
    <div>
      <div className="p-2 justify-between flex flex-row" >
        {/* <div className="text-2xl font-extrabold text-red-100">NETFLIX</div> */}
        <img alt="netflix logo" src={NETFLIX_URL} className="w-32"></img>
        <p className="text-white text-sm p-4">Hello, {username.split("@")[0]}</p>

        {/* <button
          className="text-white  self-center text-sm"
          onClick={() => window.open(loginUrl).focus()}
        >
          Login
        </button> */}
      </div>
      {/*      <img
         className="w-64"
         src="https://netflix-videos.s3.ap-south-1.amazonaws.com/Netflix-Logo.png"
       />
    */}
      {/* <img
        className="w-full h-96 object-center"
        src="https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png"
      /> */}
    </div>
  );
}
