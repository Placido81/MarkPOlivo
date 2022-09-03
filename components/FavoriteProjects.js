import React from "react";


export default function FavoriteProjects() {
  return (
    <div className="bg-[#1B8EF2] -mt-40 dark:bg-[#010A26]">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center justify-between pt-40 mx-10 md:flex-row md:my-20 lg:my-0">
          <h1 className="max-w-lg pb-4 my-20 text-6xl font-bold text-center text-transparent transform skew-x-12 skew-y-10 lg:text-9xl md:my-0 md:text-white" id="favProjects">
            Favorite Projects
          </h1>
         
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 pb-40 md:grid-cols-3 lg:-mt-8">
          {/* Single card */}
          <a
            href="https://github.com/Placido81/graffitti-gallery.git"
            className="block w-full col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden ring-2 ring-white">
              <img
                src="/graffitti-art.png"
                alt="graffitti-art"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md 0 top-10 left-10">
               Graffitti Art Gallery
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://github.com/Placido81/event-tracker.git"
            className="block w-full col-span-3 shadow-2xl sm:col-span-2 ring-2 ring-white"
          >
            <div className="relative overflow-hidden">
              {/* <div className="absolute inset-0 z-10 bg-black overlay bg-opacity-70"></div> */}
              <img
                src="/eventtracker.png"
                alt="business"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md top-10 left-10">
                Event Tracker
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://github.com/Placido81/password-generator.git"
            className="block object-cover w-full col-span-2 p-50 sm:col-span-1 "
          >
            <div className="relative shadow-2xl overflow">
              
              <img
                src="/passwrd-genrtor.png"
                alt="contact"
                className="object-cover transition ease-out transform border shadow-5xl hover:scale-125 duration-2000 h-600 w-400"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md top-10 left-10">
                Redux Contact App
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10 ">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
