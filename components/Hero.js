import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F20530", "#F2E205", "#10B981", "#0476D9"];
  return (
    <div className="flex flex-row items-start justify-center overflow-hidden" id="heroMain-container">
      {/* Text container */}

      <div className="w-full mx-auto text-center md:w-1/2 md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="my-2 text-4xl font-bold text-gray-700 md:text-8xl dark:text-gray-200 animate-pulse" id="dev">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="my-2 text-4xl font-bold md:text-8xl dark:text-gray-200 animate-pulse" id="designer">
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="py-3 my-2 text-4xl font-bold text-gray-600 md:text-8xl dark:text-gray-200 animate-pulse" id="programmer">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="py-1 mx-1 my-2 font-bold text-gray-700 txext-4xl m md:text-8xl dark:text-gray-200 animate-pulse" id="teamplayer">
              TeamPlayer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="relative hidden w-full mt-20 -mr-40 lg:block sm:w-1/2">
        <div className="w-3/4">
          <img src={userData.RedSelfUrl} alt="me" className="transform shadow-lg md:skew-y-6 scale-80 sm:transformgpu md:rounded-t-lg ring-4 ring-yellow-200 inset-10 md:scale-75 md:drop-shadow-xl" />
          <div className="flex flex-row mt-2">
        
          <RoughNotation type="underline" show={true} color="white" animationDuration={30}  iterations={5}  multiline={true}
          padding={[0, 2]}>
            <div className="flex flex-row space-x-9">
             
               
              <p className="font-mono text-yellow-300 ">That's me</p>
            </div>
            </RoughNotation>
        
          </div>
        </div>
      </div>
    </div>
  );
}
