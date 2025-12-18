import React from "react";
import Video from "./Video";

export const Hero = () => {
  return (
    <div className="relative h-full">
      <Video />

      {/* 文字块：整体下移（items-end），靠左，留底部空间 */}
      <div className="absolute inset-0 flex items-end justify-start pb-12 md:pb-20 lg:pb-32 pl-8 md:pl-16 lg:pl-24">
        <div className="max-w-3xl text-left">
          {/* 主标题：手写体、渐变色、适中大小 */}
          <h1 className="font-pacifico text-5xl md:text-6xl lg:text-7xl text-white leading-tight drop-shadow-2xl mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
              Ready for an Amazing Journey?
            </span>
          </h1>

          {/* 副标题：保留原句，白色、易读、轻微阴影 */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-lg">
            Your Guide to Travel Etiquette & Cultural Tips Worldwide
          </p>

          {/* Search Countries 按钮已删除 */}
        </div>
      </div>
    </div>
  );
};
