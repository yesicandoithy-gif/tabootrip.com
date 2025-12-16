import React from "react";

const Video = () => {
  return (
    <video
      loop
      autoPlay
      muted
      playsInline  // 加这个，手机端更好播放
      className="object-cover w-full h-[60vh] lg:h-[80vh]"
    >
      <source 
        src="https://videos.pexels.com/video-files/10745869/10745869-hd_1920_1080_30fps.mp4" 
        type="video/mp4" 
      />
      {/* 备用：如果不播放，显示原海滩视频 */}
      <source src="/videos/palm_trees.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
