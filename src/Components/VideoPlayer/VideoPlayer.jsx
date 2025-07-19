import React from "react";
import "./videoPlayer.css"; // Adjust the path as necessary
import video from "../../assets/collegeVideo.mp4"; // Adjust the path as necessary

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={() => setPlayState(!playState)}
    >
      <video className="video" src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
