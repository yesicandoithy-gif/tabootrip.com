import React from "react";
import Video from "./Video";
import { HeroText } from "./HeroText";  // 如果你还有子标题组件，保留；否则可删除

export const Hero = () => {
  return (
    <div className="relative h-full">
      <Video />

      {/* 主标题：轻松愉快的手写体风格 */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h1 className="font-pacifico text-5xl md:text-7xl lg:text-8xl text-white text-center leading-tight animate-fadeIn">
          <span className="bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text text-transparent">
            Ready for an
          </span>
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-cyan-300 to-lime-300 bg-clip-text text-transparent">
            Amazing Journey?
          </span>
        </h1>
      </div>

      {/* 如果你有子标题或按钮组件 HeroText，保留下面这行；否则删除 */}
      <HeroText />
    </div>
  );
};
