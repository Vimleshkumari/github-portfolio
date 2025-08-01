import React from "react";
import { FaGithub } from "react-icons/fa";


export default function About() {
  return (
    <section className="my-8flex-col ">
      <h2 className="text-2xl font-semibold mb-2">Summary</h2>
      <div className="text-xl text-white sm:text-m lg:text-xl">
        Developer with experience in creating and enhancing user interfaces using React.js and modern JavaScript. Comfortable with state management through Redux and integrating APIs effectively. Able to translate design ideas into responsive and functional web applications. Familiar with frontend development tools and committed to writing clean, maintainable code.A collaborative team member focused on delivering user-friendly solutions
      </div>
      {/* <div>Experience working as software engineer in software design, analysis, development, and implementation of web and client server application using Reactjs. </div> */}
      {/* <div className="z-10 max-w-screen-lg px-4 lg:px-0 ">
        <div
          className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm"
        >
          


          <div className="flex gap-x-4 text-neutral-100">
            <a
              aria-label="Github"
              className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
              href="https://github.com/Vimleshkumari/"
              target="/"
            ><svg
              className="h-5 w-5 align-baseline sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 128 128"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                ></path></svg></a
            ><a
              aria-label="Stack Overflow"
              className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
              href="https://stackoverflow.com/users/8553186/tim-baker"
            ><svg
              className="h-5 w-5 align-baseline sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 128 128"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M90.1875 114.162V83.027H104.062V128H0V83.027H13.875V114.162H90.1875Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M74.5781 0L65.2125 6.91892L99.5531 52.9297L108.919 46.0108L74.5781 0ZM90.1875 63.6541L46.1344 26.9838L53.4187 18.3351L97.4719 55.0054L90.1875 63.6541ZM31.5656 52.5838L83.5969 76.8L88.4531 66.4216L36.4219 42.2054L31.5656 52.5838ZM80.1281 89.9114L82.4869 79.706L26.64 68.1168L24.2812 79.5676L80.1281 89.9114V89.9114ZM79.7812 103.784H24.2812V93.4054H79.7812V103.784Z"
                  fill="currentColor"
                ></path></svg></a
            ><a
              aria-label="LinkedIn"
              className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
              href="https://www.linkedin.com/in/vimlesh-kumari-718334140/"
              target="/"
            ><svg
              className="h-5 w-5 align-baseline sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 128 128"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                  fill="currentColor"
                ></path></svg></a
            ><a
              aria-label="Twitter"
              className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3"
              href="https://twitter.com/TimBakerx"
            ><svg
              className="h-5 w-5 align-baseline sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 128 128"
              width="128"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path
                  d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
                  fill="currentColor"
                ></path></svg
              ></a>
          </div>
          <div className="flex w-full justify-center gap-x-4">
            <a
              className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500"
              href="/assets/resume.pdf"
            >Resume<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-white sm:h-6 sm:w-6"
            >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path></svg></a
            ><a
              className="flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-white ring-white"
              href="#contact"
            >Contact</a
            >
          </div>
          <section className="my-8">
            <h2 className="text-sm font-medium text-white mb-2">Contact</h2>
            <p>Email: <a href="mailto:vimlesh9512@gmail.com" className=" decoration-white">vimlesh9512@gmail.com</a></p>
            {/* <div><span>GitHub:</span> <span><FaGithub /></span><span><a href="https://github.com/Vimleshkumari" className="text-blue-500 decoration-black">@Vimleshkumari</a></span> </div> */}
    </section>
  );
}