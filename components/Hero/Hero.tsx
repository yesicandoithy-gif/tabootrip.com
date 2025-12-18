import React from "react";
import Video from "./Video";

export const Hero = () => {
  return (
    <div className="relative h-full">
      <Video />

      {/* 新标题：轻松愉快风格，居中叠加在视频上 */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
        <h1 className="font-pacifico text-5xl md:text-7xl lg:text-8xl text-white text-center leading-tight animate-fadeIn px-6">
          <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
            Ready for an Amazing Journey?
          </span>
        </h1>
      </div>

      {/* 如果你还有搜索按钮或其他元素，可以在这里添加；当前保持简洁 */}
    </div>
  );
};
