import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div className="md:h-48 md:max-w-5xl mx-auto transform sm:skew-x-12 -rotate-5 bg-[#1B8EF2] dark:bg-gray-600 " id="contact-container">
        <h1 className="text-6xl font-bold text-center transform -translate-y-4 skew-x-12 rotate-25 skew-y-2 md:text-9xl md:text-left" id="contact">
          Contact Me
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-2xl font-semibold text-gray-50" id="getInTouch">
                Get in touch, let's talk.
              </h1>
              <p className="mt-2 text-base font-light text-gray-200 underline">
                Fill in the details and I'll get back to you ASAP!
              </p>
            </header>
            <div className="inline-flex flex-col my-20 icons-container">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-yellow-100  p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-300 bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-sm font-light underline text-gray-50">
                  {userData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-yellow-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-300 bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-sm font-light underline text-gray-50">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-yellow-100  p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-300 border-white rounded-md bi bi-pin-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-sm font-light underline text-gray-50">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-8 social-icons">
              <a
                href={userData.socialLinks.facebook}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-yellow-300 "
              >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="w-5 h-5 text-blue-300 underline bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-yellow-300 "
              >
                <svg
                  width="24"
                  height="24"
                  className="text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
              href={userData.socialLinks.github}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-yellow-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="w-5 h-5 text-white dark:text-yellow-300"
                viewBox="0 0 24 24"
              >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              </a>
            </div>
          </div>
          <form className="flex flex-col p-4 bg-white border-4 border-yellow-400 rounded-lg form">
            <label htmlFor="name" className="mx-4 text-sm text-blue-900">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light text-red-700 border rounded-md focus:outline ring-2 focus:border ring-red-500"
              name="name"
            />
            <label htmlFor="email" className="mx-4 mt-4 text-sm text-blue-900">
              Email
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light text-red-700 rounded-md focus:outline-red-400 ring-2 ring-red-500 focus:border"
              name="email"
            />
            <label
              htmlFor="message"
              className="mx-4 mt-4 text-sm text-blue-900"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light text-red-700 border rounded-md focus:outline ring-2 focus:border ring-red-500"
              name="message"
            ></textarea>
            <div className="space-x-6 ">
            <button
              type="submit"
              className="w-1/2 py-2 text-xs font-bold bg-blue-500 rounded-md mt-9 mx-9 text-yellow-50 ring-yellow-300 ring-4 hover:bg-red-600"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
