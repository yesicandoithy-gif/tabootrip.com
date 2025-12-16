import React from "react";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      src="https://videos.pexels.com/video-files/5969958/5969958-uhd_2560_1440_30fps.mp4"
      className="object-cover w-full h-[60vh] lg:h-[80vh]"
    />
  );
};

export default Video;
