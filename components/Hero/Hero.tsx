import React from "react";
import Video from "./Video";

export const Hero = () => {
  return (
    <div className="relative h-full">
      <Video />

      {/* 文字块：靠左居中布局，整体偏左，视觉动感 */}
      <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-2xl text-left">
          {/* 主标题：手写体、渐变色、缩小适中 */}
          <h1 className="font-pacifico text-5xl md:text-6xl lg:text-7xl text-white leading-tight animate-fadeIn mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
              Ready for an Amazing Journey?
            </span>
          </h1>

          {/* 副标题：保留原句，白色、易读、轻微阴影 */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-md">
            Your Guide to Travel Etiquette & Cultural Tips Worldwide
          </p>

          {/* 搜索按钮：绿色突出，邀请行动（如果你有搜索功能，可链接） */}
          <div className="mt-10">
            <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-xl hover:bg-green-600 shadow-lg transition">
              Search Countries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
