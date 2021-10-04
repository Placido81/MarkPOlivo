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
            <div className="flex flex-row space-x-7">
              <p className="ml-5 font-mono text-yellow-300">That's me</p>
              <div className="animate-pulse">
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
              </div>
            </div>
            </RoughNotation>
        
          </div>
        </div>
      </div>
    </div>
  );
}
