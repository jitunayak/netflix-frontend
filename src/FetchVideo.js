import React, { useState, useEffect } from "react";
import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";
import {
  Player,
  Video,
  DefaultUi,
  usePlayerContext,
  Ui,
  Spinner,
  Quality,
} from "@vime/react";
import { setStoredToken, getStoredToken } from "./Utilities";

export default function FetchVideo() {
  const [url, setUrl] = useState("");

  var myHeaders = new Headers();
  //console.log(getStoredToken());
  myHeaders.append("authorization", getStoredToken());

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "http://localhost:4000/video/file_example_MP4_480_1_5MG.mp4",
      requestOptions
    )
      .then((response) => response.blob())
      .then((result) => setUrl(URL.createObjectURL(result)))
      .catch((error) => console.log("error", error));
    return () => {};
  }, []);

  return (
    <div className="w-1/2">
      {/* <ReactPlayer url={url} controls={true} playing={true} /> */}

      <Player>
        <Video>
          <source data-src={url} type="video/mp4" />
        </Video>
        <Ui>
          <Spinner />
        </Ui>
        <DefaultUi>{/* Custom UI Component. */}</DefaultUi>
      </Player>
    </div>
  );
}
